<template>
  <div class="normal_back">
    <!-- 球状菜单 -->
    <Back></Back>
    <div class="mainMenu" @click="menu">菜单</div>
    <robot></robot>
  </div>
</template>

<script>
import robot from '@/components/robotMenu'
import Back from '@/components/ballBack'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    robot,
    Back
  },
  mounted () {
    // +背景动画
    // 权限控制，动态路由，3d动画，etc
  },
  methods: {
    go () {
      this.$router.push('about')
    },
    menu () {
      console.log('展开菜单')
    }
  }
}
</script>
<style  scoped>
.mainMenu{
  width: 100px;
  height: 100px;line-height: 100px;
  border-radius: 50%;
  background: #6ad4ee;
  position: absolute;
  bottom: 0;right: 0;
  left: 0;top: 0;margin:auto;
  user-select:none;
}
.mainMenu:hover{
  cursor: pointer;
}
</style>
