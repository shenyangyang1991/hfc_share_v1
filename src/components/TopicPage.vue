<template>
  <scroll v-if="success"
          :data="[]">
    <topic v-if="success" :item="topic"/>
  </scroll>
</template>

<script>
  import Topic from './topics/Topic'
  import Scroll from './common/BatterScroll'

  export default {
    name: 'TopicPage',
    data() {
      return {
        topic: {},
        id: 0,
        success: false,
      }
    },
    components: {
      Topic,
      Scroll
    },
    async created() {
      let loader = this.$loading.show()
      let {topic_id} = this.$route.query
      if (!topic_id) {
        this.$toasted.error('页面错误')
      } else {
        this.id = topic_id
        let response = await this.$http.get(`/v1/recommended/topic?topic_id=${topic_id}`)
        let result = response.data
        this.success = result.success
        if (result.success) {
          this.topic = result.data || {}
        } else {
          this.$toasted.error('请求帖子内容失败')
        }
        loader.hide()
      }
    }
  }
</script>
