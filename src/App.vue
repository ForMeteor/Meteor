<template>
  <div id="app" @contextmenu.prevent="">
    <ctrl v-if="!appType"></ctrl>
    <!-- <Back v-if="backShow"></Back> -->
    <robot></robot>
    <mainApp v-if="appType"></mainApp>
    <router-view name="tourist"></router-view>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
// import Back from '@/components/canvas/ballBack'
// import Back from '@/components/canvas/rain'
import Back from '@/components/canvas/hackRain'
// import Back from '@/components/canvas/triangle'
import robot from '@/components/robotMenu'
import ctrl from '@/components/animateCtrl.vue'
import mainApp from '@/layout/mainApp.vue'
export default {
  name: 'app',
  components: {
    robot,
    Back,
    ctrl,
    mainApp
  },
  mounted () {
    // document.documentElement.clientHeight 监听高度
    const t = document.title
    const title = { focus: t, exit: '咕噜咕噜' }
    window.onblur = () => {
      document.title = title.exit
    }
    window.onfocus = () => {
      document.title = title.focus
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'appType',
      'appName'
    ])
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
*{
  padding: 0;margin: 0;
}
li{
  list-style:none;
}
.normal_back{
  position:absolute;
  bottom: 0;right: 0;
  left: 0;top: 0;
  overflow:hidden;
  z-index: 100;
}
</style>
