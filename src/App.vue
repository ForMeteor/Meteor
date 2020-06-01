<template>
  <div id="app" @contextmenu.prevent="">
    <div class="theme_ctrl" @click="theme">页面特效</div>
    <div class="theme_ctrl theme_ctrl2" @click="robotMenu">猫猫咪咪</div>
    <topNav v-if="false"></topNav>
    <Back v-if="backShow"></Back>
    <router-view/>
    <robot v-if="catShow"></robot>
  </div>
</template>

<script>
import Back from '@/components/ballBack'
import robot from '@/components/robotMenu'
import topNav from '@/components/topNav.vue'
export default {
  name: 'app',
  components: {
    topNav,
    robot,
    Back
  },
  mounted () {
    let t = document.title
    let title = { focus: t, exit: '求求了快回来吧' }
    window.onblur = () => {
      document.title = title.exit
    }
    window.onfocus = () => {
      document.title = title.focus
    }
  },
  methods: {
    theme () {
      this.$store.commit('changeBack')
    },
    robotMenu () {
      this.$store.commit('changeCat')
    }
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
.normal_back{
  position:absolute;
  bottom: 0;right: 0;
  left: 0;top: 0;
  overflow:hidden;
  z-index: 100;
}
.theme_ctrl{
  position: fixed;
  z-index: 500;
  right: 10px;top: 5px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  width: 100px;height: 20px;line-height: 20px;
}
.theme_ctrl2{
  top: 30px;
}
.theme_ctrl:hover{
  cursor: pointer;
}
</style>
