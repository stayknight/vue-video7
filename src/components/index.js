import VideoPlayer from './index.vue'

VideoPlayer.install = function (Vue) {
  Vue.component(VideoPlayer.name, VideoPlayer)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VideoPlayer = VideoPlayer;
  window.Vue.use(VideoPlayer);
}

export default VideoPlayer
