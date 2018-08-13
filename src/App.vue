<template>
  <div id="app">
    <router-view v-transition/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="less">
  @import "./assets/doc.less";

  #app {
    height: 100%;
    overflow-x: hidden;
  }
</style>
