<template>
  <div class="normal_back">
    <!-- 球状菜单 -->
    <Menu></Menu>
    <div class="box animated bounceInDown"></div>
  </div>
</template>

<script>
import Menu from '@/components/circleMenu'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Menu
  },
  mounted () {
    // +背景动画
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
