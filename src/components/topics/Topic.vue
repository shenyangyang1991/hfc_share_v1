<template>
  <div class="topic">
    <div layout layout-align="start center" class="topic-user">
      <img class="avatar" :src="defaultPoster"/>
      <div layout="column" flex layout-align="space-between start" class="user-body">
        <span class="nick-name">申杨杨</span>
        <span class="topic-created">10小时前</span>
      </div>
    </div>
    <div class="topic-context">
      我TM的刚开始我的暑假生活哦
    </div>
    <div class="topic-poster">
      <img class="topic-image" :src="defaultPoster"/>
    </div>
    <div layout class="topic-action">
      <i class="action-liker"></i>
      <i class="action-comment"></i>
    </div>
    <div layout class="topic-cnt">
      <span>123次浏览</span>
      <span>23次点赞</span>
    </div>
    <div layout class="topic-comment">
      <span class="nick-name">我叫小墨鱼：</span>
      <span class="comment-context">给摄影师点赞</span>
    </div>
    <div class="topic-comment-cnt">
      查看3条评论
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Topic',
    data() {
      return {
        defaultPoster: require('../../assets/image/subject-poster.png'),
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/fn.less";

  .topic {
    padding: .3rem 0;
    margin: 0 .44rem;

    border-bottom: 1px solid #e1e1e1;

    &:last-child {
      border: 0;
    }

    .topic-user {
      .avatar {
        display: block;
        .size(.72rem);

        margin-right: .2rem;
      }

      .user-body {
        .nick-name {
          font-size: .28rem;
          font-weight: 500;
          color: #383838;
        }

        .topic-created {
          font-size: .24rem;
          color: #a7a7a7;
        }
      }
    }

    .topic-context {
      padding: .3rem 0;

      font-size: .32rem;
      font-weight: 500;
      color: #383838;
    }

    .topic-poster {
      border-radius: .06rem;
      overflow: hidden;

      .topic-image {
        display: block;
        .size(6.7rem, 3.78rem);
      }
    }

    .topic-action {
      padding: .3rem 0;

      .action-liker {
        background: url("../../assets/image/icon-liker.png") no-repeat;
        background-size: .44rem .44rem;
      }

      .action-comment {
        background: url("../../assets/image/icon-comment.png") no-repeat;
        background-size: .44rem .44rem;
      }

      & > i {
        display: block;
        .size(.44rem);

        margin-right: .3rem;
      }
    }

    .topic-cnt {
      padding-bottom: .1rem;
      & > span {
        margin-right: .2rem;

        font-size: .27rem;
        font-weight: 500;
        color: #383838;
      }
    }

    .topic-comment {
      padding-bottom: .1rem;

      .nick-name {
        font-size: .27rem;
        font-weight: 500;
        color: #383838;
      }

      .comment-context {
        font-size: .27rem;
        color: #383838;
      }
    }

    .topic-comment-cnt {
      font-size: .27rem;
      color: #a7a7a7;
    }
  }
</style>
