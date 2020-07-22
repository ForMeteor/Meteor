<!-- 乱码瀑布动画 -->
<template>
  <div class="normal_back">
      <canvas id="myCanvas4" class="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      width: '',
      height: '',
      words: ''
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.words = Array(256).join('1').split('')
    console.log(this.words)
    this.canvasInit()
  },

  methods: {
    canvasInit () {
      const canvas = document.getElementById('myCanvas4')
      const ctx = canvas.getContext('2d')
      this.width = window.innerWidth
      this.height = window.innerHeight
      canvas.width = this.width
      canvas.height = this.height
      setInterval(() => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx.fillRect(0, 0, this.width, this.height)
        ctx.fillStyle = '#20af0e'
        this.words.map((y, n) => {
          const text = String.fromCharCode(Math.ceil(65 + Math.random() * 57))
          const x = n * 10
          ctx.fillText(text, x, y)
          this.words[n] = (y > 758 + Math.random() * 484) ? 0 : y + 10
        })
      }, 50)
    }
  }
}

</script>
<style  scoped>
</style>
