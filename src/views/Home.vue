<template>
  <div>
    <!-- <neon-effect></neon-effect> -->
    <!-- <Can></Can> -->
    <div ref="msgDiv">{{msg}}</div>
    <div  @click="go1">Message got outside $nextTick: {{msg1}}</div>
    <div  @click="go2">Message got inside $nextTick: {{msg2}}</div>
    <div  @click="go3">Message got outside $nextTick: {{msg3}}</div>
    <Ttt :settings="settings"></Ttt>
    <!-- <lines></lines>
    <light></light> -->
  </div>
</template>

<script>
import Can from './canvas/can_2.vue'
import Ttt from './canvas/aniMenu.vue'
import { adminTable, adminQuery, getMenu } from '@/api/admin'
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
      msg: 'msg to menu',
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
    // getMenu().then((res) => {
    //   console.log(res)
    // })
    console.warn(this.totalRoutes)
    // this.$store.dispatch('GenerateRoutes').then((res) => {
    //   console.log(res)
    // })
    // +背景动画
    // adminTable().then((res) => {
    //   console.log(res)
    // }).catch()
  },
  methods: {
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
  }
}
</script>
<style  scoped>
</style>
