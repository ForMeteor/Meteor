<!-- 登录页面  -->
<template>
  <div>
      <div style="margin-top:100px"></div>
      <el-button  type="primary" @click="back">返回</el-button>
      <el-button @click="obj">change</el-button>
      <el-button @click="getT">登录</el-button>
      <el-button @click="removeT">注销</el-button>
      <el-button @click="rout">路由</el-button>
      <div v-for="r in menuList" :key="r.name" @click="moveTo(r)">{{r.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      redirect: null,
    }
  },

  components: {
  },

  computed: {
    menuList () {
      // v-distpicker
      return this.$store.state.permission.mockData
    }
  },
  watch: {
    // $route: {
    //   handler: function (route) {
    //     console.log(route)
    //     console.log(this.$route)
    //     this.redirect = route.query && route.query.redirect
    //   },
    //   immediate: true
    // }
  },
  create () {
  },
  mounted () {
    this.redirect = this.$route.query && this.$route.query.redirect
    // this.$router.push({ path: this.redirect || "/" })
    // this.p1().then((data) => {
    //   return this.p2(data)
    // }).then((data) => {
    //   return this.p3(data)
    // }).then((data) => {
    //   console.log('final data', data)
    // }).catch(res => {
    //   console.log(res)
    // })
  },

  methods: {
    moveTo (r) {
      console.log(r.path)
      this.$router.push({
        path: r.path
        // name: r.name
      })
    },
    rout () {
      console.log(this.$store.state.permission.routes)
    },
    p1 () {
      let p = new Promise(function (resolve, reject) {
        console.log('p1 star')
        setTimeout(function () {
          console.log('p1 end')
          resolve('p1 Data')
        }, 1000)
      })
      return p
    },
    p2 (data) {
      console.log("接受p1数据", data)
      let p = new Promise(function (resolve, reject) {
        console.log('p2 start')
        setTimeout(function () {
          console.log('p2 end')
          resolve('p2 Data')
        }, 1000)
      })
      return p
    },
    p3 (data) {
      console.log("接受p2数据", data)
      let p = new Promise(function (resolve, reject) {
        console.log('p3 start')
        setTimeout(function () {
          console.log('p3 end')
          resolve('p3 Data')
        }, 1000)
      })
      return p
    },
    back () {
      this.$router.push({
        path: this.redirect || '/'
      })
    },
    obj () {
      this.objTest.a = this.objTest.a === 888 ? 222 : 888
      this.objTest.b = this.objTest.a === 888 ? 222 : 888
    },
    getT () {
      // this.$store.dispatch('logIn', 'infoData11')
      // console.log(this.$store.getters.token)
      //  next(`/login?redirect=${to.path}`)
      // this.redirect = this.route.query && this.route.query.redirect
      console.log(this.$route.query.redirect)
      this.$router.push({ path: this.$route.query.redirect || '/' })
    },
    removeT () {
      this.$store.dispatch('logOut')
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(this.$router)
    console.log(to)
    next()
  }
}

</script>
<style  scoped>
</style>
