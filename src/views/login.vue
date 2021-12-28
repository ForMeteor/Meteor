<!-- 登录页面  -->
<template>
  <div>
      <!-- <div style="margin-top:100px"></div>
      <el-button  type="primary" @click="back">返回</el-button>
      <el-button @click="obj">change</el-button>
      <el-button @click="getT">登录</el-button>
      <el-button @click="removeT">注销</el-button>
      <el-button @click="rout">路由</el-button> -->
      <!-- <light></light> -->
      <!-- <neon-effect></neon-effect> -->
      <div class="mainBox">
        <div class="btn">登录</div>
        <div class="glbtn glass">登录</div>
      </div>
      <div v-for="r in menuList" :key="r.name" @click="moveTo(r)">{{r.name}}</div>
  </div>
</template>

<script>
import { adminTable } from '@/api/admin'
import Index from './backups/Pagination/index.vue'
export default {
  name: 'login',
  data () {
    return {
      redirect: null,
      socket: null
    }
  },

  components: {
    Index
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
    // adminTable().then().catch()
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
    // this.socket = new WebSocket('ws://47.97.73.43:3006/sql/socketTest')
    // 监听socket连接
    // this.socket.onopen = this.open
    // 监听socket错误信息
    // this.socket.onerror = this.error
    // 监听socket消息
    // this.socket.onmessage = this.getMessage
    // this.socket.on('wsTest', function (data) {
    //   console.log(data)
    // })
    // this.socket.on('message', function (data) {
    //   console.log(data)
    // })
  },

  methods: {
    tt () {
      console.log(this.$common.getRanMath(2, 8))
    },
    // this.websock.onmessage = this.websocketonmessage;
    // // this.websock.onopen = this.websocketonopen;
    // this.websock.onerror = this.websocketonerror;
    // this.websock.onclose = this.websocketclose;
    // // websocketonopen(){ //连接建立之后执行send方法发送数据
    // //   let actions = {"test":"12345"};
    // //   this.websocketsend(JSON.stringify(actions));
    // // },
    // websocketonerror(){//连接建立失败重连
    //   this.initWebSocket();
    // },
    // websocketonmessage(e){ //数据接收
    //   const weGoods = JSON.parse(e.data).data;
    //   this.companyName = weGoods.companyName;
    //   this.startTime = weGoods.startTime;
    //   this.redata = weGoods.itemList;
    //   console.log('redata', this.redata)
    // },
    // websocketsend(Data){//数据发送
    //   this.websock.send(Data);
    // },
    // websocketclose(e){  //关闭
    //   console.log('断开连接',e);
    // },
    open (e) {
      console.log(e)
    },
    error () {
      console.log('error')
    },
    getMessage (e) {
      console.log(JSON.parse(e.data).data)
      console.log('getMessage')
    },
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
.mainBox{
  position: fixed;
  top: 0;left: 0;right: 0;bottom: 0;
  margin: auto;
  width: 400px;height: 200px;
  border: 2px solid white;
}
/* .mainBox:hover{
  filter: blur(10px);
} */
.btn{
  width: 150px;
  height: 50px;
  cursor: pointer;
  border: 0;
  font-family: 'Comfortaa',cursive;
  color: rgba(255,255,255,0.5);
  font-size: 20px;
  border-radius: 4px;
  box-shadow: inset 0 3px 5px rgb(255 255 255 / 50%), 0px 0 10px rgb(0 0 0 / 15%);
  background: #020024;
  background: linear-gradient(45deg,rgba(2,0,36,0) 5%,rgba(255,255,255,.5) 6%,rgba(255,255,255,0) 9%,rgba(255,255,255,.5) 10%,rgba(255,255,255,0) 17%,rgba(255,255,255,.5) 19%,rgba(255,255,255,0) 21%);
  background-size: 150%;
  background-position: right;
  transition: 1s;
}
.btn:hover {
    background-position: left;
    color: white;
    box-shadow: inset 0 3px 5px rgb(255 255 255), 0px 0 10px rgb(0 0 0 / 25%);
}
.glass {
  background: linear-gradient( to bottom, rgba(180,180,180,0.8) 0%, rgba(180,180,180,0.5) 3%, rgba(180,180,180,0.1) 45%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 28%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.3) 65%, rgba(255,255,255,0.3) 90%, rgba(0,0,0,0.3) 95%, rgba(0,0,0,0.3) 100% );
  border-color: rgba(0, 0, 0, 0.6);
  border-image: none;
  border-style: solid;
  border-width: 0px;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 40%) inset, 0 2px 6px rgb(0 0 0 / 50%), 0 10px rgb(0 0 0 / 5%) inset;
}
.glbtn{
    position: relative;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    text-decoration: none;
    /* padding: 0.5em 1.5em;
    margin: 0.5em; */
    cursor: pointer;
    width: 200px;
    height: 40px;
    transition: all 0.1s ease-in-out;
    outline: 0;
}
</style>
