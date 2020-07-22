<template>
  <div id="app" @contextmenu.prevent="">
    <ctrl></ctrl>
    <topNav v-if="false"></topNav>
    <Back v-if="backShow"></Back>
    <robot v-if="catShow"></robot>
    <router-view/>
  </div>
</template>

<script>
// import Back from '@/components/canvas/ballBack'
// import Back from '@/components/canvas/rain'
import Back from '@/components/canvas/hackRain'
// import Back from '@/components/canvas/triangle'
import robot from '@/components/robotMenu'
import topNav from '@/components/topNav.vue'
import ctrl from '@/components/animateCtrl.vue'
export default {
  name: 'app',
  components: {
    topNav,
    robot,
    Back,
    ctrl
  },
  mounted () {
    let t = document.title
    let title = { focus: t, exit: '咕噜咕噜' }
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
    catShow () {
      return this.$store.state.catShow
    },
    backShow () {
      return this.$store.state.backShow
    }
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
