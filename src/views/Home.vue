<template>
  <div class="normal_back">
    <!-- 球状菜单 -->
    <Back></Back>
    <div class="box animated bounceInDown"></div>
    <div class="mainMenu" @click="go">菜单</div>
  </div>
</template>

<script>
import Back from '@/components/ballBack'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Back
  },
  mounted () {
    // +背景动画
    // 权限控制，动态路由，3d动画，etc
    // 困困困困困
  },
  methods: {
    go () {
      this.$router.push('about')
    },
    menu () {
      console.log('s')
    }
  }
}
</script>
<style  scoped>
.mainMenu{
  width: 100px;
  height: 100px;line-height: 100px;
  border-radius: 50%;
  background: #F67225;
  position: absolute;
  bottom: 0;right: 0;
  left: 0;top: 0;margin:auto;
  user-select:none;
}
.mainMenu:hover{
  cursor: pointer;
}
</style>
