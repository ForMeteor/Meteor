<template>
  <div>
    <!-- <neon-effect></neon-effect> -->
    <!-- <Can></Can> -->
    <div ref="msgDiv">{{msg}}</div>
    <div  @click="go1">Message got outside $nextTick: {{msg1}}</div>
    <div  @click="go2">Message got inside $nextTick: {{msg2}}</div>
    <div  @click="go3">Message got outside $nextTick: {{msg3}}</div>
    <Ttt :settings="settings"></Ttt>
    <button @click="websocketclose">断开链接</button>
    <div class="talkBox">
      <div class="talkItem" v-for="r in talkList">{{r}}</div>
    </div>
    <el-input placeholder="请输入密码" v-model="input"></el-input>
    <button @click="websocketsend()">发送</button>


    <!-- <lines></lines>
    <light></light> -->
  </div>
</template>

<script>
import Can from './canvas/can_2.vue'
import Ttt from './canvas/aniMenu.vue'
import { adminTable, adminQuery, getMenu, postTest } from '@/api/admin'
import { uploadFile } from '@/api/file'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Can,
    Ttt
  },
  computed: {
    // ...mapGetters
    totalRoutes: function () {
      return this.$store.getters.totalRoutes
    }
  },
  directives: {
    bless: {
      bind: function (el, binding) {
        console.log(el)
        console.log(binding)
      },
      inserted: function (el, binding) {
        console.log(el)
        console.log(binding)
        el.style.background = 'red'
      },
      update: function () {},
      componentUpdated: function () {},
      unbind: function () {}
    }
  },
  data () {
    return {
      websock: null,
      talkList:[],
      input:null,
      msg: 'msg to menu',
      range: 'fail to show',
      msg1: '',
      msg2: '',
      msg3: '',
      settings: {
        menuRadius: 100,
        isCenter: true,
        backImg: require('@/assets/resourse/jina.jpg'),
        menuLength: 150,
        itemDetail: [
          {
            itemRadius: 50,
            img: require('@/assets/birds/Ivan6.jpg')
          },
          {
            itemRadius: 50,
            img: require('@/assets/birds/Ivan7.jpg')
          },
          {
            itemRadius: 50,
            img: require('@/assets/birds/Ivan8.jpg')
          },
          {
            itemRadius: 50,
            img: require('@/assets/birds/Ivan9.jpg')
          },
          {
            itemRadius: 50,
            img: require('@/assets/birds/Ivan10.jpg')
          }
        ]
      }
    }
  },
  mounted () {
    this.initWebSocket()
    let k = {
      name: 'li li',
      pas: 'iopea',
      age: 18
    }
    let a = btoa('A') // "QQ=="
    console.log(a)
    // postTest(k).then((res) => {
    //   console.log(res)
    // })
    // adminTable().then((res) => {
    //   console.log(res)
    // })
    // adminQuery({
    //   username: 'Meteor'
    // }).then((res) => {
    //   console.log(res)
    // })
    // this.$store.dispatch('GenerateRoutes').then((res) => {
    //   console.log(res)
    // })
    // +背景动画
    // adminTable().then((res) => {
    //   console.log(res)
    // }).catch()
  },
  methods: {
    initWebSocket () {
      if (window.WebSocket) {
        this.websock = new WebSocket('ws://47.97.73.43:3006/sql/socketTest')
        this.websock.onmessage = this.websocketonmessage
        this.websock.onopen = this.websocketonopen
        this.websock.onerror = this.websocketonerror
        this.websock.onclose = this.websocketclose
      }
    },
    websocketonmessage (e) {
      console.warn(e.data)
      this.talkList.push(e.data)
      // const redata = JSON.parse(e.data)
      // this.result = redata
    },
    websocketonopen () {
      console.log('链接建立')
    },
    websocketonerror (e) {
      console.log('建立链接失败',e)
    },
    websocketclose (e) {
      console.log('断开连接', e)
      this.websock.close()
    },
    websocketsend (Data) {
      this.talkList.push(this.input)
      this.websock.send(this.input)
    },
    menu () {
      console.log('s')
    },
    go1 () {
      this.$router.push({
        path: '/webTest'
      })
    },
    go2 () {
      this.$router.push({
        path: '/jsTest'
      })
    },
    go3 () {
      this.$router.push({
        path: '/threeMain'
      })
    }
  },
  destroyed () {
    // this.websock.close() // 离开路由之后断开websocket连接
  }
}
</script>
<style  scoped>
.talkBox{
  width:100%;
  height:400px;
  border:1px solid red;
  overflow:hidden;
  overflow-y:auto;
}
.talkItem{
  width:100%;
  height:60px;
  line-height:60px;
}
</style>
