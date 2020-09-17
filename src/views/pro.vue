<!--  -->
<template>
  <div>
    <el-button type="primary" @click="open">新增</el-button>
    <auction v-if="diaShow"></auction>
  </div>
</template>

<script>
import auction from './auction'
export default {
  name: 'pro',
  data () {
    return {
      diaShow: false
    }
  },

  components: {
    auction
  },

  computed: {},

  mounted () {},

  methods: {
    open () {
      this.diaShow = !this.diaShow
    }
  }
}

</script>
<style  scoped>
</style>
