<template>
  <div>
    <!-- <neon-effect></neon-effect> -->
    <!-- <Can></Can> -->
    <Ttt :settings="settings"></Ttt>
    <!-- <lines></lines>
    <light></light> -->
  </div>
</template>

<script>
import Can from './canvas/can_2.vue'
import Ttt from './canvas/aniMenu.vue'
import Menu from '@/components/circleMenu'
import { adminTable, adminQuery } from '@/api/admin'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Menu,
    Can,
    Ttt
  },
  data () {
    return {
      msg: 'msg to menu',
      settings: {
        menuRadius: 150,
        isCenter: true,
        backImg:require('@/assets/resourse/jina.jpg'),
        menuLength: null,
        itemDetail:[
          {
            itemRadius: null,
            img:null,
          }
        ]
      }
    }
  },
  mounted () {
    // this.$store.dispatch('GenerateRoutes').then((res) => {
    //   console.log(res)
    // })
    // this.$store.commit('SET_ROUTES', routes)
    // +背景动画
    // adminTable().then((res) => {
    //   console.log(res)
    // }).catch()
  },
  methods: {
    menu () {
      console.log('s')
    }
  }
}
</script>
<style  scoped>
</style>
