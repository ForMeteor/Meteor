<!-- 导航菜单 -->
<template>
  <div>
    <!-- <div class="mainBox" @click="changeOri">
      <div class="main" :class="{'spreadBegin':spreadIf == 1,'spreadEnd':spreadIf == 2}" :style="'width:'+mainWidth+'%'">
        <div class="menuBack"></div>
        <div class="mainTail"></div>
      </div>
    </div> -->
    <div class="ctrl_box" @click="wrapCtrl" v-show="wrapShow">0.0</div>
    <div class="ctrl_box" @click="wrapCtrl" v-show="!wrapShow">^_^</div>
    <div class="ctrl_wrap" v-show="wrapShow">
      <div class="ctrl_item" @click="theme">background</div>
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
      spreadIf: 0,
      originDirect: false,
      mainWidth: 0,
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
          name: 'ani_4',
          path: 'ani_4'
        },
        {
          name: 'ani_5',
          path: 'ani_5'
        },
        // {
        //   name: 'can_1',
        //   path: 'can_1'
        // },
        // {
        //   name: 'can_2',
        //   path: 'can_2'
        // },
        {
          name: 'loadList',
          path: 'loadingList'
        },
        {
          name: 'webSocket',
          path: 'webTest'
        },
        {
          name: 'jsTest',
          path: 'jsTest'
        },
        {
          name: 'cssTest',
          path: 'cssTest'
        },
        {
          name: 'uploadTest',
          path: 'uploadTest'
        }
      ]
    }
  },

  components: {},

  computed: {},

  mounted () {
    console.warn(window.screen.width)
  },
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
      // console.log(this.$store.state.permission.routes)
    },
    changeOri () {
      this.originDirect = !this.originDirect
      this.widthChange()
    },
    widthChange () {
      if (this.originDirect) {
        // +
        if (this.mainWidth < 100) {
          this.mainWidth += 2
          requestAnimationFrame(this.widthChange)
        }
      } else {
        // -
        if (this.mainWidth > 0) {
          this.mainWidth -= 2
          requestAnimationFrame(this.widthChange)
        }
      }
    }
  }
}

</script>
<style  scoped>
.mainBox{
  height: 60px;
  position: fixed;
  top: 5px;
  left:0;
  right: 0;
}
.main{
  box-sizing: border-box;
  width: 0%;
  height: 60px;
  background: red;
  border: solid black;
  border-width: 0 10px 0 10px;
  z-index: 999;
}
.spreadBegin{
  animation: menuShow linear 4s;
  animation-fill-mode:forwards
}
.spreadEnd{
  width: 100%;
  animation: menuHide linear 4s;
  animation-fill-mode:forwards
}
@keyframes menuShow {
  to{
    width: 100%;
  }
  /* 10% {
      width: 10%;
  }
  40% {
      width: 40%;
  }
  80% {
      width: 80%;
  }
  100% {
      width: 100%;
  } */
}
@keyframes menuHide {
  to{
    width: 0%;
  }
  /* 10% {
      width: 90%;
  }
  40% {
      width: 60%;
  }
  80% {
      width: 20%;
  }
  100% {
      width: 0%;
  } */
}
.mainTail{}
.menuBack{}
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
