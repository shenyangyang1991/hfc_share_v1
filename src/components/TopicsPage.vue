<template>
  <div class="topics">
    <subject-panel/>
    <topic/>
  </div>
</template>

<script>
  import SubjectPanel from './topics/SubjectPanel'
  import Topic from './topics/Topic'

  export default {
    name: 'TopicsPage',
    components: {
      SubjectPanel,
      Topic,
    }
  }
</script>

<style lang="less">
  .topics {
    height: 100%;
    background-color: #fff;
  }
</style>
