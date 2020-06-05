<!--  -->
<template>
  <div>
    <div class="ctrl_box" @click="wrapCtrl" v-show="wrapShow">0.0</div>
    <div class="ctrl_box" @click="wrapCtrl" v-show="!wrapShow">^_^</div>
    <div class="ctrl_wrap" v-show="wrapShow">
      <div class="ctrl_item" @click="theme">页面特效</div>
      <div class="ctrl_item" @click="robotMenu">猫猫咪咪</div>
      <div class="ctrl_item" @click="robotMenu">咕噜咕噜</div>
      <div class="ctrl_item" @click="robotMenu">咕噜咕噜</div>
      <div class="ctrl_item" @click="robotMenu">咕噜咕噜</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animateCtrl',
  data () {
    return {
      wrapShow: false,
      timer: null
    }
  },

  components: {},

  computed: {},

  mounted () {},
  watch: {
    wrapShow (val) {
      if (val) {
        this.timer = setTimeout(() => {
          this.wrapShow = false
        }, 4000)
      } else {
        clearTimeout(this.timer)
      }
    }
  },
  methods: {
    wrapCtrl () {
      this.wrapShow = !this.wrapShow
    },
    theme () {
      this.$store.commit('changeBack')
      this.wrapShow = false
    },
    robotMenu () {
      this.$store.commit('changeCat')
      this.wrapShow = false
    }
  }
}

</script>
<style  scoped>
.ctrl_box{
  position: fixed;
  z-index: 500;
  right: 10px;top: 5px;
  text-align: center;
  width: 100px;height: 20px;line-height: 20px;
  border:1px solid #e5e5e5;
  border-radius: 5px;
  user-select: none;
}
.ctrl_wrap{
  position: fixed;
  z-index: 500;
  right: 10px;top: 27px;
  width: 100px;
  user-select: none;
}
.ctrl_item{
  border-radius: 5px;
  width: 100px;
  border: 1px solid #e5e5e5;
  height: 20px;line-height: 20px;
  margin-bottom: 2px;
}
.ctrl_item:hover{
  cursor: pointer;
}
/* .draw-enter-active, .draw-leave-active{
  opacity: 1;background: red;

}
.draw-enter, .draw-leave-to{
  opacity: 0;
} */
</style>
