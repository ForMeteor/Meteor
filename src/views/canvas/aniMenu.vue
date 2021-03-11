<!--  -->
<template>
  <div :class="{menuMain:settings.isCenter,menuBot:!settings.isCenter}" @click="mainMenu" :style="{
    'backgroundImage':'url(' + settings.backImg + ')',
    'width': settings.menuRadius + 'px',
    'height': settings.menuRadius + 'px',
    }">
    <Item :itemSettings="r" v-for="(r,index) in this.settings.itemDetail" :key="index"></Item>
    <!-- <Item :itemSettings="this.settings.itemDetail[0]"></Item>
    <Item :itemSettings="this.settings.itemDetail[1]"></Item>
    <Item :itemSettings="this.settings.itemDetail[2]"></Item>
    <Item :itemSettings="this.settings.itemDetail[3]"></Item>
    <Item :itemSettings="this.settings.itemDetail[4]"></Item> -->
  </div>
</template>

<script>
import Item from './menuItem'
export default {
  name: 'aniMenu',
  props: ['settings'],
  data () {
    return {
      isOpen: false
    }
  },

  components: {
    Item
  },

  computed: {},
  watch: {
    // itemSettings (val) {
    //   console.warn(val)
    // }
  },
  mounted () {
    this.setItem()
    // this.getItem()
  },

  methods: {
    mainMenu () {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        // 展开
        this.getItem()
        // 判断 坐标缓存
      } else {
        // 收起
        this.setItem()
        // 判断 坐标缓存
      }
      // this.getItem
    },
    setItem () {
      console.log('set')
      let k = this.settings.itemDetail.length
      for (let i = 0; i < k; i++) {
        let k1 = this.settings.menuRadius / 2 - this.settings.itemDetail[i].itemRadius / 2
        let k2 = this.settings.menuRadius / 2 - this.settings.itemDetail[i].itemRadius / 2
        this.$set(this.settings.itemDetail[i], 'left', k1)
        this.$set(this.settings.itemDetail[i], 'top', k2)
        // this.settings.itemDetail[i].left = this.settings.menuRadius / 2 - this.settings.itemDetail[i].itemRadius / 2
        // this.settings.itemDetail[i].top = this.settings.menuRadius / 2 - this.settings.itemDetail[i].itemRadius / 2
      }
    },
    getItem () {
      console.log('get')
      let k = this.settings.itemDetail.length
      for (let i = 0; i < k; i++) {
        let loc = this.getLoc(this.settings.menuLength, this.settings.menuRadius, this.settings.itemDetail[i].itemRadius, i, k, this.settings.isCenter)
        this.$set(this.settings.itemDetail[i], 'left', loc.x)
        this.$set(this.settings.itemDetail[i], 'top', loc.y)
        // this.settings.itemDetail[i].left = loc.x
        // this.settings.itemDetail[i].top = loc.y
      }
    },
    getLoc (radius, raFix, itemRadius, index, counts, type) {
      let x, y, xx, yy, deg
      if (type) {
        // 正中
        if (counts !== (index + 1)) {
          deg = (360 / counts) * (index + 1)
          xx = radius * Math.sin(deg * Math.PI / 180)
          yy = radius * Math.cos(deg * Math.PI / 180)
        } else {
          xx = 0
          yy = radius
        }
        x = xx + raFix / 2 - itemRadius / 2
        y = raFix / 2 - yy - itemRadius / 2
      } else {
        // 左下
        if (index === 0) {
          xx = 0
          yy = radius
        } else {
          if (counts > 4) {
            deg = 90 / (counts - 1)
          } else {
            deg = 30
          }
          xx = radius * Math.sin(index * deg * Math.PI / 180)
          yy = radius * Math.cos(index * deg * Math.PI / 180)
        }
        x = xx + raFix / 2 - itemRadius / 2
        y = raFix / 2 - yy - itemRadius / 2
      }
      return { x, y }
      // 偏移 正负轴判断
    } // 获取对应x,y偏移位置
  }
}

</script>
<style  scoped>
.menuMain{
  position: absolute;
  z-index: auto;
  right: 0;left: 0;bottom: 0;top: 0;
  margin: auto;
  border-radius: 50%;
  background-size: 100% 100%;
  user-select: none;
}
.menuMain:hover{
  cursor: pointer;
}
.menuBot{
  position: absolute;
  z-index: auto;
  left: 20px;bottom: 20px;
  border-radius: 50%;
  background-size: 100% 100%;
  user-select: none;
}
.menuBot:hover{
  cursor: pointer;
}
</style>
