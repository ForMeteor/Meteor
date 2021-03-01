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
      settingList: {},
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
      ctx.strokeStyle = 'grey'
      ctx.fillRect(0, 0, width, height)
      let k = this.computeHexagonPoints(100, 200, 60)
      console.log(k)
      ctx.beginPath()
      ctx.moveTo(k[5][0], k[5][1])
      for (let i = 0; i < k.length; i++) {
        ctx.lineTo(k[i][0], k[i][1])
      }
      ctx.strokeStyle = 'red'
      ctx.stroke()
      let tick = 0
      let lines = []
      let baseRad = Math.PI * 2 / 6
      function animate () {
        ctx.clearRect(0, 0, width, height)
        for (let i = 0; i < 100; i++) {
          let obj = {}

        }
        requestAnimationFrame(animate)
      }
      // animate()
    },
    computeHexagonPoints (width, height, edge) {
      let centerX = width / 2
      let centerY = height / 2
      let x = edge * Math.sqrt(3) / 2
      let left = centerX - x
      let x1,x2,x3,x4,x5,x6
      let y1,y2,y3,y4,y5,y6
      x5 = x6 = left
      x2 = x3 = left + x * 2
      x1 = x4 = left + x

      let y = edge / 2
      let top = centerY - 2 * y
      y1 = top
      y2 = y6 = top + y
      y3 = y5 = top + 3 * y
      y4 = top + 4 * y

      let points = new Array()
      points[0] = [x1, y1]
      points[1] = [x2, y2]
      points[2] = [x3, y3]
      points[3] = [x4, y4]
      points[4] = [x5, y5]
      points[5] = [x6, y6]
      return points
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
