<!-- 登录页面  -->
<template>
  <div>
      <div></div>
      <el-button @click="back">返回</el-button>
      <el-button @click="obj">change</el-button>
      <el-button @click="getT">登录</el-button>
      <el-button @click="removeT">注销</el-button>
      <div>{{objTest.a}}</div>
      <div>{{objTest.b}}</div>
  </div>
</template>

<script>
import MenuList from '@/assets/menu.json'
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

  computed: {},
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
  mounted () {
    // this.redirect = route.query && route.query.redirect
    // this.$router.push({ path: this.redirect || "/" })
    console.log(MenuList)
    this.$store.dispatch('GenerateRoutes')
    function p1() {
      let p = new Promise(function (resolve, reject) {
        console.log('p1 star')
        setTimeout(function () {
          console.log('p1 end')
          resolve('p1 Data')
        }, 1000)
      })
      return p
    }
    function p2(data) {
      console.log("接受p1数据", data)
      let p = new Promise(function (resolve, reject) {
        console.log('p2 start')
        setTimeout(function () {
          console.log('p2 end')
          reject('p2 Data')
        }, 1000)
      })
      return p
    }
    function p3(data) {
      console.log("接受p2数据", data)
      let p = new Promise(function (resolve, reject) {
        console.log('p3 start')
        setTimeout(function () {
          console.log('p3 end')
          resolve('p3 Data')
        }, 1000)
      })
      return p
    }
    p1().then(function (data) {
      return p2(data)
    }).then(function (data) {
      return p3(data)
    }).then(function (data) {
      console.log('final data', data)
    }).catch(res => {
      console.log(res)
    })
  },

  methods: {
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
  }
}

</script>
<style  scoped>
</style>
