<!--  -->
<template>
  <div>
    <canvas id="myCanvas" class="canvas" v-show="btnCtrl"></canvas>
  </div>
</template>

<script>
export default {
  name: 'circleBack',
  data () {
    return {
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
    canvasInit () {
      const canvas = document.getElementById('myCanvas')
      const ctx = canvas.getContext('2d')
      this.width = window.innerWidth
      this.height = window.innerHeight
      canvas.width = this.width
      canvas.height = this.height // 合并
      var canvasClampX = this.clamp(0)(canvas.width)
      var canvasClampY = this.clamp(0)(canvas.height)
    },
    clamp (min) {
      return function (max) {
        return function (n) {
          return Math.max(min, Math.min(max, n))
        }
      }
    }
  }
}

</script>
<style  scoped>
</style>
