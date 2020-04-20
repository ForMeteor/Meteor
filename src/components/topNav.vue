<!--  -->
<template>
  <div>
      <el-button @click="go">el-button</el-button>
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
    console.log('1')
  },

  methods: {
    go () {
      this.$router.push('loading')
    }
  }
}

</script>
<style  scoped>
</style>
