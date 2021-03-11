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

  mounted(){},

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
        function render() {
            renderer.render(scene, camera); //执行渲染操作
            requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
            if (analyser) {
                // getAverageFrequency()返回平均音频
                var frequency = analyser.getAverageFrequency();
                mesh.scale.y = 5 * frequency / 256;
                mesh.material.color.r = 3 * frequency / 256;
                // 返回傅里叶变换得到的所有频率
                // console.log(analyser.getFrequencyData())
            }
        }
        render();
    }
  }
}

</script>
<style  scoped>
</style>