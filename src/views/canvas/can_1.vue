<!-- neon -->
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
      ctx.fillStyle = '#e5e5e5'
      ctx.fillRect(0, 0, width, height)
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
