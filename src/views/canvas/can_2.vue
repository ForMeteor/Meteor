
<template>
  <div class="wrapBox">
    <div class="menuBox">
      <div class="menuItem" @mouseenter="getIn" @mouseleave="getOut">AAAAA</div>
      <div class="menuItem" @mouseenter="getIn" @mouseleave="getOut">BBBBB</div>
      <div class="menuItem" @mouseenter="getIn" @mouseleave="getOut">CCCCC</div>
      <div class="menuItem" @mouseenter="getIn" @mouseleave="getOut">DDDDD</div>
    </div>
    <div class="boxRight"></div>
    <div class="boxLeft"></div>
    <canvas ref="canvas" class='canBack'></canvas>
  </div>
</template>
<script>
let ctx
let canvas
export default {
  name: 'can_2',
  data () {
    return {
      mouseX: 0,
      mouseY: 0,
      circle: {},
      radius: 10
    }
  },
  props: {
  },
  computed: {
  },
  components: {},
  methods: {
    init () {
      window.addEventListener('mousemove', (e) => {
        this.mouseX = e.pageX
        this.mouseY = e.pageY
      })
      const width = window.innerWidth
      const height = window.innerHeight
      canvas = this.$refs.canvas
      canvas.width = width
      canvas.height = height
      ctx = canvas.getContext('2d')
      requestAnimationFrame(this.render)
    },
    render () {
      this.circle = {
        radius: this.radius,
        lastX: this.mouseX,
        lastY: this.mouseY
      }
      this.circle.lastX = this.lerp(this.circle.lastX, this.mouseX, 0.25)
      this.circle.lastY = this.lerp(this.circle.lastY, this.mouseY, 0.25)
      console.log('清除')
      console.log(canvas.width)
      ctx.beginPath()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.arc(this.circle.lastX, this.circle.lastY, this.circle.radius, 0, Math.PI * 2, false)
      ctx.fillStyle = '#ffffff'
      ctx.fill()
      ctx.closePath()
      requestAnimationFrame(this.render)
    },
    lerp (a, b, n) {
      return (1 - n) * a + n * b
    },
    getIn () {
      this.radius = this.radius + 2
      const k = requestAnimationFrame(this.getIn)
      if (this.radius >= 30) {
        cancelAnimationFrame(k)
      }
    },
    getOut () {
      this.radius = this.radius - 2
      const k = requestAnimationFrame(this.getOut)
      if (this.radius <= 10) {
        cancelAnimationFrame(k)
      }
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    // window.cancelAnimationFrame(this.requestAniId)
  }
}
</script>
<style  scoped>
.wrapBox{
  position: absolute;
  top: 0;bottom: 0;
  left: 0;right: 0;
  padding: 0;
  margin: 0;
  display: flex;
}
.canBack{
  position: absolute;
  top: 0;bottom: 0;
  left: 0;right: 0;
  padding: 0;
  margin: 0;
  z-index: 3;
  pointer-events: none;
  mix-blend-mode: difference;
}
.boxRight{
  flex: 1;
  background: white;
}
.boxLeft{
  flex: 1;
  background: black;
}
.menuBox{
  position: absolute;
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  color: #ffffff;
}
.menuItem{
  user-select: none;
  width: 100px;
}
.menuItem:nth-child(1){
  color: black;
}
.menuItem:nth-child(2){
  color: black;
}
</style>
