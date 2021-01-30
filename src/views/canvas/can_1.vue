<!--  -->
<template>
  <div>
    <!-- <neon-effect :options="options"></neon-effect> -->
    <bubbles-effect :options="options"></bubbles-effect>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      options: null
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.setOption()
  },

  methods: {
    setOption () {
      const kk = {
        len: 20, // 五边形的单边长度
        count: 50, // 多少线重叠
        rate: 20, // 速度 越小越快
        dieChance: 0.05, // 单次绘画失败进行重绘的几率
        sparkChance: 0.1, // [0,1] 越大画出的五边形越多重
        sparkDist: 10, // 闪烁点的距离
        sparkSize: 2,// 闪烁点的大小
        contentLight: 60, // [0,100] 色块的亮度
        shadowToTimePropMult: 6, // 五边形的内环阴影大小
        bgColorArr: [0, 0, 0] // 背景色数组
      }
      const k = {
        color: 'rgba(221,22,33,0.7)', // 'rgba(225,225,225,0.5)', // 气泡颜色
        radius: 15, // 气泡半径
        densety: 0.3, // 气泡密度 越大越密集(建议不要大于1)
        clearOffset: 0.2 // 气泡消失距离[0-1] 越大越晚消失
      }
      this.options = k
    }
  }
}

</script>
<style  scoped>
</style>
