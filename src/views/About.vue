<!--  -->
<template>
  <div v-loading="loadingPage">
    <div class="muscle" @click="show">
      <div class="sx1"></div>
      <div class="sx2"></div>
    </div>
    <!-- <div onclick="var a=1;console.log(a);console.log(this)">111</div>
    <div @click="foo(this)">222</div> -->
    <Area @fall="getValue"/>
  </div>
</template>

<script>
import Area from '@/components/area'
export default {
  name: 'About',
  data () {
    return {
      loadingPage: true
    }
  },

  components: {
    Area
  },

  computed: {},

  mounted () {
    setTimeout(() => {
      this.loadingPage = false
    }, 500)
  },

  methods: {
    show () {},
    foo (t) {
      console.log(t)
      console.log(this)
    },
    getValue (v) {
      console.log(v)
    }
  }
}

</script>
<style  scoped>
.muscle {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: #7ec2f3;
  z-index: 10;
}
.hide{
  position: absolute;left:0;right: 0;top:0;bottom: 0;
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: #ffffff;
  z-index: 10;
}
.sx1{
  position: absolute;
  width: 200px;
  height: 200px;
  transform: rotate(90deg);
  clip: rect(0px,100px,200px,0px); /*这个clip属性用来绘制半圆，在clip的rect范围内的内容显示出来，使用clip属性，元素必须是absolute的 */
  border-radius: 100px;
  background-color: green;
}
.sx2{
  position: absolute;
  width: 200px;
  height: 200px;
  transform: rotate(0deg);
  clip: rect(0px,100px,200px,0px);
  border-radius: 100px;
  background-color: #f00;
}
.wrap{
  width: 300px;
  height:100px;
  margin: 0 auto;
  padding: 10px;
  border:1px solid black
}
</style>
