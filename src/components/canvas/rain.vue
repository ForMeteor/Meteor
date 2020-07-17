<!-- 流星雨 -->
<template>
  <div class="normal_back">
    <canvas id="myCanvas3" class="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      width: '',
      height: ''
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
      canvasInit () {
      const canvas = document.getElementById('myCanvas3')
      const ctx = canvas.getContext('2d')
      this.width = window.innerWidth
      this.height = window.innerHeight
      canvas.width = this.width
      canvas.height = this.height
      this.creatBalls()
      this.drawBalls(ctx)
      let timer = setInterval(() => {
        this.moveBalls(ctx)
        this.drawBalls(ctx)
      }, 10)
      const lay1 = document.createElement('canvas')
      const lay1Context = lay1.getContext('2d')
      lay1Context.fillStyle = '00ff00'
      lay1Context.fillRect(10, 10, 40, 40)
    },
  }
}

</script>
<style  scoped>
</style>
