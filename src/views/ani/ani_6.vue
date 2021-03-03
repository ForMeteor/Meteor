<!-- 音乐 频率 -->
<template>
  <div></div>
</template>

<script>
import * as THREE from 'three'
export default {
  name : '',
  data () {
    return {
      analyser: null // 声明一个分析器变量
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    init () {
        var listener = new THREE.AudioListener() //监听者
        var audio = new THREE.Audio(listener); //非位置音频对象
        var audioLoader = new THREE.AudioLoader(); //音频加载器
        audioLoader.load('', (AudioBuffer) => {
            audio.setBuffer(AudioBuffer); // 音频缓冲区对象关联到音频对象audio
            audio.setLoop(true); //是否循环
            audio.setVolume(0.5); //音量
            audio.play(); //播放
            // 音频分析器和音频绑定，可以实时采集音频时域数据进行快速傅里叶变换
            this.analyser = new THREE.AudioAnalyser(audio);
        });
    }
  }
}

</script>
<style  scoped>
</style>