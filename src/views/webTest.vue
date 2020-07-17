<!--  -->
<template>
  <div>
      <div class="web_status" v-for="r in obj" :key='r' @click="websocketsend(r)">{{r}}</div>
      <div class="web_status">{{result}}</div>
  </div>
</template>

<script>
export default {
  name: 'webTest',
  data () {
    return {
      obj: ['泡面', '炒面', '烩面'],
      websock: null,
      result: null
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.initWebSocket()
  },

  methods: {
    initWebSocket () {
      if (window.WebSocket) {
        this.websock = new WebSocket('ws://47.97.73.43:8001')
        this.websock.onmessage = this.websocketonmessage
        this.websock.onopen = this.websocketonopen
        this.websock.onerror = this.websocketonerror
        this.websock.onclose = this.websocketclose
      }
    },
    websocketonmessage (e) {
      const redata = JSON.parse(e.data)
      this.result = redata
    },
    websocketonopen () {
      const actions = {
        test: '12345',
        date: '7.6'
      }
      this.websocketsend(JSON.stringify(actions))
    },
    websocketonerror () {
      console.log('建立链接失败')
    //   this.initWebSocket()
    },
    websocketclose (e) {
      console.log('断开连接', e)
    },
    websocketsend (Data) {
      this.websock.send(Data)
    }
  },
  destroyed () {
    this.websock.close() // 离开路由之后断开websocket连接
  }
}

</script>
<style  scoped>
.web_status{
    width: 100px;
    height: 30px;line-height: 30px;background: #e5e5e5;
    border: 1px solid black;
    margin: 0 auto;
}
.web_status:hover{
    cursor: pointer;
}
</style>
