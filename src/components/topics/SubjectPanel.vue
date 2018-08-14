<template>
  <div class="subject-panel">
    <subject-poster ref="poster"/>
    <div layout layout-align="start center" class="subject-cnt">
      <span>123关注</span>
      <span>·</span>
      <span>123内容</span>
    </div>
    <div class="subject-title">
      中国有嘻哈我他吗的才是嘻哈
    </div>
    <div class="subject-follower">
      关注
    </div>
  </div>
</template>

<script>
  import SubjectPoster from './SubjectPoster'

  export default {
    name: 'SubjectPanel',
    components: {
      SubjectPoster,
    }
  }
</script>

<style lang="less">
  @import "../../assets/fn.less";

  .subject-panel {
    position: relative;

    .subject-cnt {
      padding: 0 .44rem;

      & > span {
        margin-right: .1rem;

        font-size: .26rem;
        color: #a7a7a7;
      }
    }

    .subject-title {
      padding: .1rem .44rem;

      font-size: .66rem;
      font-weight: 600;
      color: #383838;
    }

    .subject-follower {
      .size(1.44rem, .6rem);

      margin: 0 .44rem .3rem;

      font-size: .28rem;
      font-weight: 500;
      color: #383838;

      text-align: center;
      line-height: .6rem;

      border-radius: .06rem;
      overflow: hidden;

      background-color: #fadc22;
    }
  }
</style>
