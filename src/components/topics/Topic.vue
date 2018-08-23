<template>
  <div class="topic">
    <div layout layout-align="start center" class="topic-user">
      <img class="avatar" :src="item.avatar_url || defaultAvatar"/>
      <div layout="column" flex layout-align="space-between start" class="user-body">
        <span class="nick-name">{{item.nickname}}</span>
        <span class="topic-created">{{item.created | date}}</span>
      </div>
    </div>
    <div v-if="item.topic_context" class="topic-context">
      {{item.topic_context}}
    </div>
    <div v-if="item.topic_poster" class="topic-poster">
      <img class="topic-image" :src="item.topic_poster || defaultPoster"/>
    </div>
    <div v-if="item.topic_voice" class="topic-voice"
         :style="{background: 'url('+(item.avatar_url || defaultAvatar)+') no-repeat center',  backgroundPosition: 'center', backgroundSize: 'cover'}">
      <div layout layout-align="start center" class="voice-mask">
        <div layout="column" flex class="voice-body">
          <span class="voice-label">录音</span>
          <span class="voice-title">{{item.nickname}}上传了一段录音</span>
          <span v-if="paused" class="voice-time">正在播放...</span>
          <span v-else class="voice-time">{{item.voice_time}}</span>
        </div>
        <audio :ref="`av${item.topic_id}`" :src="item.topic_voice" @play="play"
               @ended="pause"
               @pause="pause"></audio>
        <div layout layout-align="center center" class="avatar"
             @click="controll(item.topic_id)"
             :style="{background: 'url('+(item.avatar_url || defaultAvatar)+') no-repeat', backgroundPosition: 'center', backgroundSize: '1.2rem 1.2rem'}">
          <i :class="{'icon-play': !paused, 'icon-pause': paused}"></i>
        </div>
      </div>
    </div>
    <div layout class="topic-action">
      <i class="action-liker"></i>
      <i class="action-comment"></i>
    </div>
    <div layout class="topic-cnt">
      <span>{{item.like_cnt}}次点赞</span>
    </div>
    <div v-for="(comment, index) in item.comment_list" :key="index" layout class="topic-comment">
      <span class="nick-name">{{comment.nickname}}{{comment.reply_name ? `回复${comment.reply_name}` : ''}}：</span>
      <span class="comment-context">{{comment.comment_context}}</span>
    </div>
    <div class="topic-comment-cnt">
      查看{{item.comment_cnt}}条评论
    </div>
  </div>
</template>

<script>
import { FormatDate } from '../../filter/created'

export default {
  name: 'Topic',
  data() {
    return {
      defaultPoster: require('../../assets/image/subject-poster.png'),
      defaultAvatar: require('../../assets/image/avatar.png'),
      paused: false,
    }
  },
  props: ['item'],
  methods: {
    controll(id) {
      let au = this.$refs[`av${id}`]
      if (au) {
        if (au.paused) {
          au.play()
        } else {
          au.pause()
        }
      }
    },
    play(e) {
      this.paused = true
      this.$emit('voiceStart', e.target)
    },
    pause(e) {
      this.paused = false
      this.$emit('voiceEnd', e.target)
    }
  },
  filters: {
    date(str) {
      return FormatDate(str)
    }
  }
}
</script>

<style lang="less">
@import "../../assets/fn.less";

.topic {
  padding: 0.3rem 0;
  margin: 0 0.44rem;

  border-bottom: 1px solid #e1e1e1;

  &:last-child {
    border: 0;
  }

  .topic-user {
    .avatar {
      display: block;
      .size(0.72rem);

      margin-right: 0.2rem;

      border-radius: 0.36rem;
      overflow: hidden;
    }

    .user-body {
      .nick-name {
        font-size: 0.28rem;
        font-weight: 500;
        color: #383838;
      }

      .topic-created {
        font-size: 0.24rem;
        color: #a7a7a7;
      }
    }
  }

  .topic-context {
    padding: 0.3rem 0;

    font-size: 0.32rem;
    font-weight: 500;
    color: #383838;
  }

  .topic-poster {
    border-radius: 0.06rem;
    overflow: hidden;

    .topic-image {
      display: block;
      .size(6.7rem, auto);
    }
  }

  .topic-voice {
    position: relative;
    .size(100%, 1.8rem);

    border-radius: 0.06rem;
    overflow: hidden;

    .voice-mask {
      position: absolute;
      z-index: 6;

      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      .size(100%, 1.8rem);

      padding: 0 0.3rem;

      background-color: rgba(0, 0, 0, 0.7);

      .avatar {
        .size(1.2rem);

        border-radius: 0.6rem;
        overflow: hidden;

        .icon-play {
          .size(0.48rem);

          background: url("../../assets/image/icon-play.png") no-repeat;
          background-size: 0.48rem 0.48rem;
        }

        .icon-pause {
          .size(0.48rem);

          background: url("../../assets/image/icon-pause.png") no-repeat;
          background-size: 0.48rem 0.48rem;
        }
      }

      .voice-body {
        .voice-label {
          .size(0.48rem, 0.24rem);

          font-size: 0.12rem;
          color: #000;

          text-align: center;
          line-height: 0.24rem;

          border-radius: 0.04rem;
          overflow: hidden;

          background-color: #fadc22;
        }

        .voice-title {
          padding: 0.05rem 0;

          font-size: 0.32rem;
          color: #fff;
        }

        .voice-time {
          font-size: 0.22rem;
          color: #fff;

          opacity: 0.6;
        }
      }
    }
  }

  .topic-action {
    padding: 0.3rem 0;

    .action-liker {
      background: url("../../assets/image/icon-liker.png") no-repeat;
      background-size: 0.44rem 0.44rem;
    }

    .action-comment {
      background: url("../../assets/image/icon-comment.png") no-repeat;
      background-size: 0.44rem 0.44rem;
    }

    & > i {
      display: block;
      .size(0.44rem);

      margin-right: 0.3rem;
    }
  }

  .topic-cnt {
    padding-bottom: 0.1rem;
    & > span {
      margin-right: 0.2rem;

      font-size: 0.27rem;
      font-weight: 500;
      color: #383838;
    }
  }

  .topic-comment {
    padding-bottom: 0.1rem;

    .nick-name {
      font-size: 0.27rem;
      font-weight: 500;
      color: #383838;
    }

    .comment-context {
      font-size: 0.27rem;
      color: #383838;
    }
  }

  .topic-comment-cnt {
    font-size: 0.27rem;
    color: #a7a7a7;
  }
}
</style>
