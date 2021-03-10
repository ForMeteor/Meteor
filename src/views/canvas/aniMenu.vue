<!--  -->
<template>
  <div class="menuMain" @click="mainMenu" :style="{
    'backgroundImage':'url(' + settings.backImg + ')',
    'width': settings.menuRadius + 'px',
    'height': settings.menuRadius + 'px',
    }">
    <Item :itemSettings="r" v-for="(r,index) in itemSettings" :key="index"></Item>
  </div>
</template>

<script>
import Item from './menuItem'
export default {
  name: 'aniMenu',
  props: ['settings'],
  data () {
    return {
      itemSettings:[
        {
          top:200,
          left:200
        },
        {
          top:0,
          left:-100
        },
        {
          top:100,
          left:50
        }
      ]
    }
  },

  components: {
    Item
  },

  computed: {},

  mounted () {
    console.log(this.settings)
  },

  methods: {
    mainMenu () {
       console.log('mainMenu点击')
    },
    // 左上 左上 分别偏移R
    getLoc (radius,index,counts,type){} // 获取对应x,y偏移位置
  }
}

</script>
<style  scoped>
.menuMain{
  position: absolute;
  z-index: 999;
  right: 0;left: 0;bottom: 0;top: 0;
  margin: auto;
  /* width: 100px;
  height: 100px; */
  border-radius: 50%;
  background-size: 100% 100%;
  user-select: none;
}
.menuMain:hover{
  /* box-shadow: 0 0 10px grey; */
  cursor: pointer;
}
</style>
