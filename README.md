# vue-video7 播放器

![NPM version](https://img.shields.io/npm/v/vue-video7.svg) ![GitHub stars](https://img.shields.io/github/stars/stayknight/vue-video7.svg) ![GitHub issues](https://img.shields.io/github/issues/stayknight/vue-video7.svg) ![GitHub forks](https://img.shields.io/github/forks/stayknight/vue-video7.svg)

* 😊 基于 Vue + [`video.js 7`](https://videojs.com/) 开发；
* 😂 支持现代浏览器；
* 😂 不支持FLV, flv请用基于`flv.js`的控件;

## NPM/YARN安装

```bash
npm i vue-video7 --save
yarn add vue-video7
```

## 使用

### 全局使用

```js
// main.js
import Vue from 'vue'
import App from './App.vue'

import VideoPlayer from 'vue-video7'
Vue.use(VideoPlayer)
```

```vue
<template>
  <div id="app">
    <video-player :autoplay="true" :controls="true" :muted="true" ref="myPlayer" :sources="sources" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sources: ["http://vjs.zencdn.net/v/oceans.mp4"]
    };
  }
};
</script>
```

### 局部使用

```vue
<template>
  <div id="app">
    <vue-video7 :autoplay="true" :controls="true" :muted="true" ref="myPlayer" :sources="sources" />
  </div>
</template>

<script>
import VideoPlayer from 'vue-video7'

export default {
  name: 'App',
  components: {
    VideoPlayer,
  },
  data() {
    return {
      sources: ["http://vjs.zencdn.net/v/oceans.mp4"]
    };
  }
};
</script>
```
