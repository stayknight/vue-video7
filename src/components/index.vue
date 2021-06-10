<template>
  <video
    class="video-js"
    ref="video"
    :width="width"
    :height="height"
    v-bind="$attrs"
  >
    <track v-for="(crtTrack,index) in trackList"
      :key="index"
      :kind="crtTrack.kind" :label="crtTrack.label"
      :src="crtTrack.src" :srcLang="crtTrack.srcLang"
      :default="crtTrack.default"/>
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
    </p>
  </video>
</template>

<script>
import 'video.js/dist/video-js.css'
import videojs from 'video.js'

const DEFAULT_EVENTS = [
  'loadstart',  // 开始请求数据
  'progress',  // 正在请求数据
  'loadeddata',  // 获取资源长度完成
  'canplay',  // 视频可以播放
  'canplaythrough',  // 视频可以不停顿播放
  'play',  // 开始播放
  'pause',  // 暂停
  'waiting',  // 等待数据
  'playing',  // 播放中
  'ended',  // 播放结束
  'error',  // 加载出错
]

const DEFAULT_OPTIONS = {
  autoplay: true,
  controls: true,
  language: 'zh',
  inactivityTimeout: 0,
  preload: 'auto',
  fluid: false,
  techOrder: ['html5'],
  plugins: {}
}

export default {
  name: 'VideoPlayer',
  props: {
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 600,
    },
    sources: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => {}
    },
    events: {
      type: Array,
      default: () => []
    },
    trackList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      player: null
    }
  },
  watch: {
    sources: {
      handler (sources) {
        if(this.player) {
          this.player.src(sources)
        }
      }
    },
  },
  mounted () {
    if (!this.player) {
      this.initialize()
    }
  },
  beforeDestroy () {
    this.dispose()
  },
  methods: {
    initialize() {
      const videoObj = this.$refs.video

      let listenEvents = DEFAULT_EVENTS.concat(this.events.filter(evt => (typeof evt === 'string')))
      listenEvents = Array.from(new Set(listenEvents))

      const options = {
        ...DEFAULT_OPTIONS,
        ...this.options
      }
      if(this.sources && this.sources.length) {
        options.sources = this.sources
      }
      const self = this
      this.player = videojs(videoObj, options, function () {
        for(let evt of listenEvents) {
          this.on(evt, () => {
            self.$emit(evt, this)
          })
        }
        self.$emit('ready', this)
      })
    },
    dispose () {
      if (this.player) {
        this.player.dispose()
        this.player = null
      }
    }
  },
}
</script>
