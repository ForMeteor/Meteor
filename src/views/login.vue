<!-- 登录页面  -->
<template>
  <div>
      <div>login</div>
      <el-button @click="back">返回</el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      redirect: null
    }
  },

  components: {},

  computed: {},

  mounted () {
    console.log(this.$route.query)
  },

  methods: {
    back () {
      this.$router.push({
        path: this.redirect || '/'
      })
    }
  }
}

</script>
<style  scoped>
</style>
