<!-- 登录页面  -->
<template>
  <div>
      <div></div>
      <el-button @click="back">返回</el-button>
      <el-button @click="obj">change</el-button>
      <el-button @click="getT">登录</el-button>
      <el-button @click="removeT">注销</el-button>
      <el-button @click="rout">路由</el-button>
      <div>{{objTest.a}}</div>
      <div>{{objTest.b}}</div>
      <div v-for="r in menuList" :key="r.name" @click="moveTo(r)">{{r.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      redirect: null,
      objTest: {
        a: 2
      }
    }
  },

  components: {},

  computed: {
    menuList () {
      return this.$store.state.permission.mockData
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        console.log(route)
        console.log(this.$route)
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    },
    // objTest (n, old) {
    //   console.log(n)
    //   console.log(old)
    // },
    objTest: {
      handler: function (n, old) {
        console.log(n)
        console.log(old)
      },
      immediate: true,
      deep: true
    }
  },
  create () {
  },
  mounted () {
    var a = {
      i: 1,
      toString () {
        return a.i++
      }
    }
    if (a == 1 && a == 2 && a == 3) {
      console.log(111111111)
    }
    var obj = {
        '2': 3,
        '3': 4,
        'length': 2,
        'splice': Array.prototype.splice,
        'push': Array.prototype.push
    }
    obj.push(1)
    obj.push(2)
    console.log(obj)
    // this.redirect = route.query && route.query.redirect
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
        // path: r.path
        name: r.name
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
      this.$store.dispatch('logIn', 'infoData11')
      console.log(this.$store.getters.token)
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
