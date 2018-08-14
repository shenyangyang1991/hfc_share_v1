<template>
  <div id="app">
    <router-view v-transition/>
    <div layout layout-align="start center" class="hfc-download">
      <img class="hfc-logo" :src="logo"/>
      <div layout="column" flex layout-align="space-between start" class="hfc-desc">
        <span class="hfc-title">嗨范儿社区</span>
        <span class="hfc-profile">全球最大的青年文化社交网络</span>
      </div>
      <div class="download-bar">
        立即下载
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        logo: require('./assets/image/hfc-logo.png'),
      }
    }
  }
</script>

<style lang="less">
  @import "./assets/doc.less";

  #app {
    height: 100%;
    overflow-x: hidden;

    .hfc-download {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9;

      height: 1.28rem;

      padding: 0 .3rem;

      background-color: #fff;

      box-shadow: 0 0 .48rem 0 rgba(0, 0, 0, .1);

      .hfc-logo {
        .size(.88rem);

        margin-right: .3rem;
      }

      .hfc-desc {
        .hfc-title {
          font-size: .32rem;
          font-weight: 500;
          color: #383838;
        }

        .hfc-profile {
          font-size: .26rem;
          color: #383838;
        }
      }

      .download-bar {
        .size(1.44rem, .56rem);

        font-size: .26rem;
        font-weight: 500;
        color: #383838;

        text-align: center;
        line-height: .56rem;

        border: 1px solid #202020;
        border-radius: .06rem;
        overflow: hidden;
      }
    }
  }
</style>
