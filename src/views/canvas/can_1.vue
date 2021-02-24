<!--  -->
<template>
  <canvas ref="can_1" class="canBack"></canvas>
</template>

<script>
let ctx
let canvas
export default {
  name: 'can_1',
  data () {
    return {
      SpriteList: []
    }
  },

  components: {},

  computed: {},

  mounted () {
    // window.addEventListener('resize', this.initContainer())
    this.initContainer()
  },

  methods: {
    initContainer () {
      const width = window.innerWidth
      const height = window.innerHeight
      canvas = this.$refs.can_1
      canvas.width = width
      canvas.height = height
      ctx = canvas.getContext('2d')
      ctx.fillStyle = 'grey'
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = "rgb(255,0,0)"
      ctx.save()
      ctx.fillRect(50, 200, 100, 100) // 第一个保存状态，绘制红色矩形
      ctx.fillStyle = "rgb(0,0,255)"
      ctx.save()
      ctx.fillRect(200, 200, 100, 100) // 第二个保存状态，绘制蓝色矩形
      ctx.restore()
      ctx.fillRect(350, 200, 100, 100) // 恢复蓝色矩形的保存状态，因为它是最后的保存状态，所以它最先恢复。
      ctx.restore()
      ctx.fillRect(500, 200, 100, 100) // 恢复红色矩形的保存状态。
      function animate () {
        ctx.clearRect(0, 0, width, height)
        for (let i = 0; i < 100; i++) {
          let obj = {}

        }
        requestAnimationFrame(animate)
      }
      // animate()
    }
  }
}

</script>
<style  scoped>
.canBack{
  position: absolute;top: 0;left: 0;
  bottom: 0;right: 0;
}
</style>
