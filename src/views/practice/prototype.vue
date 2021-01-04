<!-- 原型与继承 -->
<template>
  <div></div>
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
    function Player (name) {
      this.name = name
      this.level = '1'
    }
    let xixi = new Player('xixi')
    let haha = new Player('haha')
    haha.level = '10'
    console.log(xixi.level)
  },

  methods: {}
}

</script>
<style  scoped>
</style>
