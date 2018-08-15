<template>
  <div class="topic-singe">
    <topic v-if="success" :item="topic"/>
  </div>
</template>

<script>
  import Topic from './topics/Topic'

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
      Topic
    },
    async created() {
      let loader = this.$loading.show()
      let {topic_id} = this.$route.query
      if (!topic_id) {
        this.$toasted.error('打开页面错误，缺少参数')
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

<style lang="less">
  .topic-singe {
    position: relative;
    height: 100%;
    background-color: #fff;
  }
</style>
