<template>
  <div class="subject-poster">
    <img class="subject-image" :src="poster"/>
    <i class="subject-helper"></i>
  </div>
</template>

<script>
  export default {
    name: 'SubjectPoster',
    data() {
      return {
        poster: require('../../assets/image/subject-poster.png'),
      }
    },
    methods: {
      setPoster(poster) {
        this.poster = poster
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/fn.less";

  .subject-poster {
    position: relative;
    height: 4.22rem;

    overflow: hidden;

    .subject-image {
      display: block;

      .size(7.5rem, 4.22rem);
    }

    .subject-helper {
      position: absolute;
      z-index: 6;

      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      .size(7.5rem, 4.22rem);

      background: url("../../assets/image/subject-helper.png") no-repeat;
      background-size: 7.5rem, 4.22rem;
    }
  }
</style>
