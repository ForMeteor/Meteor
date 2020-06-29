<!-- 三角形 正三角则递归-->
<template>
  <div class="normal_back">
    <canvas id="myCanvas2" class="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'triangle',
  data () {
    return {
      textPx: '',
      ballData: [],
      width: '',
      height: '',
      ctx: null
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.canvasInit()
  },

  methods: {
    canvasInit () {
      const canvas = document.getElementById('myCanvas2')
      this.ctx = canvas.getContext('2d')
      this.width = window.innerWidth
      this.height = window.innerHeight
      canvas.width = this.width
      canvas.height = this.height
      this.method1()
    },
    method1 () {
      this.sierpinskiTriangle({ x: 300, y: 360 }, 560)
      this.ctx.lineWidth = 0.5
      this.ctx.strokeStyle = '#f5270b'
      this.ctx.stroke()
    },
    triangle (p1, p2, p3) {
      this.ctx.moveTo(p1.x, p1.y)
      this.ctx.lineTo(p2.x, p2.y)
      this.ctx.lineTo(p3.x, p3.y)
      this.ctx.lineTo(p1.x, p1.y)
    },
    midTriangle (p1, p2, p3) {
      let tp1 = { x: (p2.x + p3.x) / 2, y: (p2.y + p3.y) / 2 }
      let tp2 = { x: (p1.x + p3.x) / 2, y: (p1.y + p3.y) / 2 }
      let tp3 = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 }
      this.triangle(tp1, tp2, tp3)
      if (((tp1.x - tp2.x) * (tp1.x + tp2.x) + (tp1.y - tp2.y) * (tp1.y + tp2.y)) > 20) {
        this.midTriangle(p1, tp2, tp3)
        this.midTriangle(p2, tp1, tp3)
        this.midTriangle(p3, tp1, tp2)
      }
    },
    sierpinskiTriangle (p, len) {
      let r = len / Math.sqrt(3)
      let p1 = { x: p.x, y: p.y - r }
      let p2 = { x: p.x - len / 2, y: p.y + r / 2 }
      let p3 = { x: p.x + len, y: p.y }
      this.triangle(p1, p2, p3)
      this.midTriangle(p1, p2, p3)
    }
  }
}

</script>
<style  scoped>
</style>
