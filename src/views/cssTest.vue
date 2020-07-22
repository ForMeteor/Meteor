<!--  -->
<template>
  <div>
    <div class="sqMain">
      <div class="sq1" v-for="r in dataList" :key="r"></div>
    </div>
    <div class="sqMain2">
      <div class="sq2"></div>
    </div>
    <div class="sqMain">
       <div class="sq3" v-for="r in dataList" :key="r"></div>
    </div>
    <div class="sqMain4"></div>
    <div class="sqMain5">
      <div class="sq5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cssTest',
  data () {
    return {
      dataList: null
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.dataList = Array(100)
    for (let i = 0; i < 100; i++) {
      this.dataList[i] = i + 1
    }
  },

  methods: {}
}

</script>
<style  scoped>
.sqMain{
  width: 200px;
  height: 200px;
  text-align: center;
  border:1px solid black;
  margin: 10px;
  float: left;
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
  overflow: hidden;
}
/* 1 */
.sq1{
  width: 20px;
  height: 20px;
  line-height: 20px;
  border: solid 5px #F29338;
  border-radius: 50%;
  box-sizing: border-box;
  /* 默认content-box */
}
.sq1:nth-child(3n){
  background: red;
  /* animation: sq1A 8s linear infinite; */
}
@keyframes sq1A{
  0%{
    width: 20px;
    background: #fff;
  }
  25%{
    width: 20px;
    background: #fff;
  }
  50%{
    width: 40px;
    background: rgb(155, 66, 14);
  }
  100%{
    width: 20px;
    background: #fff;
  }
}
/* 2 */
.sqMain2{
  width: 200px;
  height: 200px;
  float: left;
  margin: 10px;
  border:1px solid red;
  position: relative;
  background-position:0 0;
  background: linear-gradient(45deg,
  #F5CB6C 0%,#F5CB6C 20%,
  #F5856C 20%, #F5856C 45%,
  #F5CB6C 45%,#F5CB6C 70%,
   #F5856C 20%, #F5856C 45%,
  #F5CB6C 45%,#F5CB6C 70%,
   #F5856C 20%, #F5856C 45%,
  #F5CB6C 45%,#F5CB6C 70%,
  #F5856C 70%, #F5856C 95%,
  #F5CB6C 95%,#F5CB6C 100%);
  /* animation: sq2A 2s infinite linear; */
}
.sq2::before{
  position: absolute;
  content: "Lionad";
  left: 10px;
  top: 20px;
  font-size: 50px;
  font-family: didot;
  font-weight: bolder;
  color: transparent;
  background: linear-gradient(180deg, #F5CB6C, #F5856C);
  background-size: 1px 2px;
  background-clip: text;
  z-index: 2;
}
.sq2::after{
  position: absolute;
  content: "Lionad";
  left: 10px;
  top: 20px;
  font-size: 50px;
  font-family: didot;
  font-weight: bolder;
  color: transparent;
  text-shadow: 4px 4px 0px #F5856C;
  box-shadow: 0 5px 0px #F5CB6C, 0 12px 0px #F5856C;
}
@keyframes sq2A{
  0%{
    background-position: 0 0;
  }
  100%{
    background-position: 200px 0;
  }
}
/* 3 */
.sq3{
  width: 20px;
  height: 20px;
  line-height: 20px;
  box-sizing: border-box;
  background: #A45963;
  border-radius: 90%;
  position: relative;
  z-index: 1;
  /* animation: sq3A .4s ease alternate infinite; */
}
.sq3::before {
  position:absolute;
  content: '';
  left: 0;
  bottom: 5px;
  border: solid 10px transparent;
  border-bottom-color: #D2F3BF;
  z-index: 2;
}
.sq3::after {
  position:absolute;
  content: '';
  left: 1px;
  bottom: 0px;
  width: 19px;
  height: 19px;
  background: white;
}
.sq3:nth-child(2n)::before {
  border-bottom-color: #F5CB6C;
}
.sq3:nth-child(3n)::before {
  border-bottom-color: #F5856C;
}
.sq3:nth-child(4n)::before,
.sq3:nth-child(5n)::before,
.sq3:nth-child(6n)::before,
.sq3:nth-child(7n)::before,
.sq3:nth-child(8n)::before,
.sq3:nth-child(9n)::before,
.sq3:nth-child(10n)::before {
  border-bottom-color: #D2F3BF;
}
.sq3:nth-child(2n) {
  animation-delay: .2s;
}
.sq3:nth-child(3n) {
  animation-delay: .3s;
}
.sq3:nth-child(4n) {
  animation-delay: .3s;
}
.sq3:nth-child(10n)::after {
  width: 18px;
}
@keyframes sq3A {
  from {
    height: 19px;
  }
  to {
    height: 8px;
  }
}
/* 4 三角形  伪元素+定位*/
.sqMain4{
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  float: left;
  margin: 10px;
  border-width: 100px;
  border-style: solid;
  border-color: red silver yellow green;
}
/* 5 */
.sqMain5{
  width: 200px;
  height: 200px;
  float: left;
  margin: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  border: solid 10px #eee;
  box-sizing: border-box;
  overflow: hidden;
}
.sq5{
  width: 10px;
  height: 10px;
  background: black;
  box-shadow: 10px 10px 25px red;
}
/* 《トラ酱》，利用 Box-Shadow + CSS Animation 实现 GIF 的播放
《冰崖上生长的仙人掌》，能不能让这些横着长的仙人掌生长的长度超过两格？ */

</style>
