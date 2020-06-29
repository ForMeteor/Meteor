<!-- 背景动画 -->
<template>
  <div class="normal_back" @click="backClick()">
    <canvas id="myCanvas" class="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'ballBack',
  data () {
    return {
      textPx: '',
      ballData: [],
      width: '',
      height: ''
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.canvasInit()
  },

  methods: {
    backClick () {
      console.log('点击')
    },
    canvasInit () {
      const canvas = document.getElementById('myCanvas')
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
    creatBalls () {
      for (let i = 0; i < 100; i++) {
        let r = this.getMath(2, 15)
        let rx = this.getMath(-5, 5) === 0 ? 1 : this.getMath(-5, 5)
        let ry = this.getMath(-5, 5) === 0 ? 1 : this.getMath(-5, 5)
        let a = [
          this.getMath(r, this.width - r),
          this.getMath(r, this.height - r),
          r,
          this.color(),
          rx,
          ry
        ]
        this.ballData.push(a)
      }
    },
    drawBalls (ctx) {
      ctx.clearRect(0, 0, this.width, this.height)
      let r = this.ballData
      for (let i = 0; i < r.length; i++) {
        ctx.beginPath()
        ctx.arc(r[i][0], r[i][1], r[i][2], 0, 2 * Math.PI)
        ctx.fillStyle = r[i][3]
        ctx.fill()
      }
    },
    moveBalls () {
      for (let i = 0; i < this.ballData.length; i++) {
        this.ballData[i][0] = this.ballData[i][0] + this.ballData[i][4]
        this.ballData[i][1] = this.ballData[i][1] + this.ballData[i][5]
        let realwidth1 = this.ballData[i][0] + this.ballData[i][2]
        let realwidth2 = this.ballData[i][0] - this.ballData[i][2]
        let realheight1 = this.ballData[i][1] + this.ballData[i][2]
        let realheight2 = this.ballData[i][1] - this.ballData[i][2]
        if (realwidth1 >= this.width || realwidth2 <= 0) {
          this.ballData[i][4] = -this.ballData[i][4]
        }
        if (realheight1 >= this.height || realheight2 <= 0) {
          this.ballData[i][5] = -this.ballData[i][5]
        }
      }
    },
    getMath (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
      // Math.floor(Math.random()*(max-min)+1);//1-10
    },
    color () { // rgb颜色随机  npm引入自定义方法
      let R = Math.floor(Math.random() * 256)
      let G = Math.floor(Math.random() * 256)
      let B = Math.floor(Math.random() * 256)
      // var color = '#'+R.toString(16)+G.toString(16)+B.toString(16);
      // return color;
      return 'rgba(' + R + ',' + G + ',' + B + ',0.7)'
    }
  }
}

</script>
<style  scoped>
</style>
