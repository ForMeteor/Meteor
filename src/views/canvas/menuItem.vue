<!--  -->
<template>
<transition name="fade">
  <div class="item" :style="{
    'top':`${itemSettings.top}px`,
    'left':`${itemSettings.left}px`,
    'width': `${itemSettings.itemRadius}px`,
    'height': `${itemSettings.itemRadius}px`,
    'backgroundImage':'url(' + itemSettings.img + ')'
    }" @click.stop="itemClick"></div>
</transition>
<!-- <transition
    @before-enter="beforeLeave"
    @enter="leaving"
    @after-enter="afterLeave">
    <div class="transition" ref="transition" v-show="boxShow"></div>
</transition> -->
</template>

<script>
export default {
  name: 'menuItem',
  props: ['itemSettings'],
  data () {
    return {
    }
  },

  components: {},
  watch: {
  },
  mounted () {
    // console.log(this.itemSettings)
  },

  methods: {
    itemClick () {
      console.log('item点击')
      // 路由跳转
    },
    beforeLeave (el) {
      // el.style.transform = el.style.webkitTransform = `translate3d(0,${y}px,0)`
    },
    leaving (el, done) {
      // 2
    },
    afterLeave (el) {
      // el.style.display = 'none'
    }
  }
}

</script>
<style  scoped>
.item{
    position: absolute;
    border-radius: 50%;
    border:1px solid greenyellow;
    background-size: 100% 100%;
    z-index:-1
}
.item:hover{
  box-shadow: 0 0 10px grey;
  cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: all 2s;
}

</style>
