<template>
  <scroll v-if="success"
          :data="topics"
          :pullup="pullUp"
          @scrollToEnd="loadNext">
    <subject-panel :body="subject"/>
    <div class="topic-list">
      <topic v-for="(body, index) in topics" :key="index" :item="body" @voiceStart="audioStart" @voiceEnd="audioEnd"/>
    </div>
  </scroll>
</template>

<script>
  import SubjectPanel from './topics/SubjectPanel'
  import Topic from './topics/Topic'
  import Scroll from './common/BatterScroll'

  export default {
    name: 'SubjectPage',
    components: {
      SubjectPanel,
      Topic,
      Scroll,
    },
    data() {
      return {
        pullUp: true,
        subject: {},
        topics: [],
        offset: 1,
        success: false,
        id: 0,
        tasking: false,
        currentAudio: null,
      }
    },
    methods: {
      async loadNext() {
        if (this.tasking) return
        this.tasking = true
        let len = this.topics && this.topics.length
        if (len && len == 10) {
          this.offset++
          await this.loadData()
        }
        this.tasking = false
      },
      async loadData() {
        let response = await this.$http.get(`/v1/recommended/topics?subject_id=${this.id}&offset=${this.offset}`)
        let result = response.data
        this.success = result.success
        if (result.success) {
          let list = result.data.list || []
          this.topics = this.offset > 1 ? [].concat(this.topics).concat(list) : list
        } else {
          this.$toasted.error('请求内容列表失败')
        }
      },
      audioStart(e) {
        console.log(e)
        if (this.currentAudio) {
          this.currentAudio.pause()
        }

        this.currentAudio = e
      },
      audioEnd() {
        this.currentAudio = null
      }
    },
    async created() {
      let loader = this.$loading.show()
      let {subject_id} = this.$route.query
      if (!subject_id) {
        this.$toasted.error('打开页面错误，缺少参数')
      } else {
        this.id = subject_id
        let response = await this.$http.get(`/v1/recommended/subject?subject_id=${subject_id}`)
        let result = response.data
        if (result.success) {
          this.subject = result.data || {}
          document.title = this.subject.subject_title
        } else {
          this.$toasted.error('请求话题内容失败')
        }
        await this.loadData()
        loader.hide()
      }
    }
  }
</script>

<style lang="less">
  .topic-list {
    position: relative;
  }
</style>
