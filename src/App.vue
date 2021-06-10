<template>
  <div id="app">
    <button @click="change(1)">M3U8</button>
    <button @click="change(2)">MP4</button>
    <video-player ref="videoPlayer"
      :autoplay="true"
      :controls="true"
      :muted="false"
      :sources="sources"
      @play="onPlayerPlay"
      @ready="onPlayerReady"
    />
  </div>
</template>

<script>
import VideoPlayer from './components/index.js';

export default {
  name: 'App',
  components: {
    VideoPlayer,
  },
  data() {
    return {
      sources: []
    };
  },
  methods: {
    change(val){
      switch (val) {
        case 1:
          this.sources = ['http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8'];
          break;
        case 2:
          this.sources = ['http://vjs.zencdn.net/v/oceans.mp4'];
          break;
      }
    },
    onPlayerPlay() {
      console.log('player play')
    },
    onPlayerReady() {
      console.log('player ready')
    }
  }
};
</script>
