<!--  -->
<template>
  <div>
    <el-button type="primary" @click="open" size="mini">新增</el-button>
    <auction v-if="diaShow" @step="action"></auction>
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
    },
    action (v) {
      this.diaShow = false
    }
  }
}

</script>
<style  scoped>
</style>
