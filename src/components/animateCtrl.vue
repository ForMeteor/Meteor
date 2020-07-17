<!--  -->
<template>
  <div>
    <div class="ctrl_box" @click="wrapCtrl" v-show="wrapShow">0.0</div>
    <div class="ctrl_box" @click="wrapCtrl" v-show="!wrapShow">^_^</div>
    <div class="ctrl_wrap" v-show="wrapShow">
      <!-- <div class="ctrl_item" @click="theme">background</div> -->
      <div class="ctrl_item" @click="robotMenu">cat</div>
      <div class="ctrl_item" @click="home">home</div>
      <div class="ctrl_item" v-for="r in aniData" :key="r.name" @click="ani(r.path)">{{r.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animateCtrl',
  data () {
    return {
      wrapShow: false,
      timer: null,
      aniData: [
        {
          name: 'ani_1',
          path: 'ani_1'
        },
        {
          name: 'ani_2',
          path: 'ani_2'
        },
        {
          name: 'ani_3',
          path: 'ani_3'
        },
        {
          name: 'loadList',
          path: 'loadingList'
        },
        {
          name: 'webSocket',
          path: 'webTest'
        },
        {
          name: 'pcTest',
          path: 'jsTest'
        }
      ]
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
    },
    home () {
      this.$router.push('home')
    },
    ani (path) {
      this.$router.push(path)
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
  background: #ffffff;
  width: 100px;height: 20px;line-height: 20px;
  border:1px solid #e5e5e5;
  border-radius: 5px;
  user-select: none;
}
.ctrl_wrap{
  position: fixed;
  z-index: 500;
  right: 12px;top: 27px;
  width: 100px;
  user-select: none;
}
.ctrl_item{
  border-radius: 5px;
  width: 100px;
  border: 1px solid #e5e5e5;
  height: 20px;line-height: 20px;
  background: #ffffff;
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
