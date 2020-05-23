<template>
  <div id="app" @contextmenu.prevent="">
    <topNav v-if="false"></topNav>
    <router-view/>
    <robot></robot>
  </div>
</template>

<script>
import robot from '@/components/robotMenu'
import topNav from '@/components/topNav.vue'
export default {
  name: 'app',
  components: {
    topNav,
    robot
  },
  methods: {
  }
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0;margin: 0;
}
.normal_back{
  position:absolute;
  bottom: 0;right: 0;
  left: 0;top: 0;
  overflow:hidden;
}
</style>
