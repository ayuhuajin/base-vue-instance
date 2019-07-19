<template>
  <div width="100%" class="video-plugin">
    <video
      width="100%"
      height="100%"
      :id="videoId"
      class="video-js vjs-default-skin"
      muted
      controls
      preload="auto"
      poster="../../assets/images/logo.jpg"
    >
      <source :src="url" type="application/x-mpegURL" />
    </video>
    <!-- <img
      v-if="showLogo"
      style="position:absolute;bottom:20px;right:20px;width:80px;height:40px;"
      src="../../assets/images/img_video_def_1.png"
      alt=""
    /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import videojs from 'video.js';
import 'videojs-contrib-hls';
export default Vue.extend({
  name: 'LiveVideo',
  props: {
    url: String,
    index: Number
  },
  data() {
    return {
      instance: null as any,
      videoId: `video${this.$props.index}`,
      dataList: [] as any
    };
  },
  mounted() {
    this.$nextTick(() => {
      let me = this;
      this.instance = videojs(
        this.videoId,
        {
          bigPlayButton: false,
          textTrackDisplay: false,
          posterImage: true,
          errorDisplay: false,
          controlBar: true
        },
        function(this: any) {
          (this as any)
            .play()
            .then((e: any) => {})
            .catch((e: any) => {
              console.log('视频初始化失败');
            });

          // 自定义事件;
          let v = this.el_.querySelector('.vjs-big-play-button');
          console.log(v);
          v.removeAttribute('z-index');
          // 当暂停时，点击开始播放
          v.addEventListener('click', () => {
            if (this.paused()) {
              this.play();
            }
          });
          // 当播放时，触摸暂停。注意这里只有 touchstart 有效，其他事件不能被触发
          v.addEventListener('touchstart', () => {
            // if (!this.paused()) {
            console.log(this.requestFullscreen);
            // this.requestFullscreen();
            // this.webkitEnterFullscreen();
            if (this.requestFullscreen) {
              this.requestFullscreen();
            } else if (this.mozRequestFullScreen) {
              this.mozRequestFullScreen();
            } else if (this.webkitRequestFullScreen) {
              this.webkitRequestFullScreen();
            }
            // }
          });
          v.addEventListener('touch', () => {
            // if (!this.paused()) {
            console.log(this.requestFullscreen);
            // this.requestFullscreen();
            // this.webkitEnterFullscreen();
            if (this.requestFullscreen) {
              this.requestFullscreen();
            } else if (this.mozRequestFullScreen) {
              this.mozRequestFullScreen();
            } else if (this.webkitRequestFullScreen) {
              this.webkitRequestFullScreen();
            }
            // }
          });
        }
      );
    });
  },
  beforeDestroy() {
    if (this.instance) {
      this.instance.dispose();
    }
  }
});
</script>
<style>
.vjs-poster {
  background-size: cover !important;
}
</style>

<style scoped lang="scss">
.video-js {
  width: 100%;
  height: 100%;
}

.video-js .vjs-tech {
  height: 100%;
}
video {
  width: 100%;
  object-fit: fill;
}
</style>
