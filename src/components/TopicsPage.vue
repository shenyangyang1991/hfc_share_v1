<template>
  <scroll :data="topics"
          :pullup="pullUp"
          @scrollToEnd="loadNext">
    <subject-panel :body="subject"/>
    <div class="topic-list">
      <topic v-for="(body, index) in topics" :key="index" :item="body"/>
    </div>
  </scroll>
</template>

<script>
  import SubjectPanel from './topics/SubjectPanel'
  import Topic from './topics/Topic'
  import Scroll from './common/BatterScroll'

  export default {
    name: 'TopicsPage',
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
      }
    },
    methods: {
      loadNext() {
        console.log('next')
      }
    }
  }
</script>

<style lang="less">
  .topic-list {
    position: relative;
  }
</style>
