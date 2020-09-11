<template>
  <div class="normal_back">
    <!-- 球状菜单 -->
    <Menu :mack='msg'></Menu>
    <div class="box animated bounceInDown"></div>
  </div>
</template>

<script>
import Menu from '@/components/circleMenu'
import { adminTable, adminQuery } from '@/api/admin'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Menu
  },
  data () {
    return {
      msg: 'msg to menu'
    }
  },
  mounted () {
    // +背景动画
    adminTable().then((res) => {
      console.log(res)
    }).catch()
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
