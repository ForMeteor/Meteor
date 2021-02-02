<!--  -->
<template>
  <div class="box">
    <canvas id="canvas" class="canvasMap"></canvas>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.init()
  },

  methods: {
    init(){
      let can = document.getElementById('canvas')
      can.width = can.parentElement.offsetWidth
      can.height = can.width
      let ctx = can.getContext('2d')
      // -----
      ctx.beginPath()
      ctx.arc(can.width/2, can.width/2, can.width/2,0, Math.PI * 2, false)
      ctx.lineWidth = 1
      ctx.setLineDash([4,2])
      ctx.strokeStyle = '#78C0F1'
      ctx.stroke()
      ctx.closePath()
      // -----
      ctx.beginPath()
      ctx.arc(can.width/2, can.width/2, can.width * 2 / 5, Math.PI * 2, false)
      ctx.lineWidth = can.width / 10
      ctx.setLineDash([])
      ctx.strokeStyle = '#78C0F1'
      ctx.stroke()
      ctx.closePath()
      ctx.beginPath()
      ctx.moveTo(can.width/2, 0)
      ctx.lineTo(can.width/2, can.width)
      ctx.strokeStyle = '#021421';
      ctx.lineWidth = can.width / 10;
      ctx.stroke()
      ctx.closePath()
      // -----
      ctx.beginPath()
      ctx.arc(can.width/2, can.width/2, can.width * 3 / 10, Math.PI * 2, false)
      ctx.lineWidth = 2
      ctx.strokeStyle = '#78C0F1'
      ctx.stroke()
      ctx.closePath()
    }
  }
}

</script>
<style  scoped>
.box{
  width: 100%;
  height: 100%;
}
.canvasMap{
  border: 1px solid red;
}
</style>
