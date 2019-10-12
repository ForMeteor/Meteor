<!--  -->
<template>
  <div class="mainNav">
      <div class="mainNav_name">理论联系实际</div>
      <div class="mainNav_placeholder"></div>
      <div class="mainNav_menu">
        <div class="mainNav_menu_right"></div>
        <div class="mainNav_menu_left"></div>
        <div class = "mainNav_menu_1" 
        v-for ="r in menuData" :key="r.title"
        @mouseover ="mouseIn(r)">{{r.title}}
          <div class="mainNav_menu_2" v-if="r.active" @mouseleave="mouseleave(r)">
              <div class = "mainNav_menu_2_item" 
              @click = "choosePage(r,m)"
              v-for ="m in r.menu" :key="m.title">{{m.title}}
              </div>
          </div>
        </div>
      </div>
      <div class="mainNav_placeholder"></div>
      <div class="mainNav_time">
        {{currentTime}} 星期{{weekDay[currentDate-1]}}
      </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
  name:"navTop",
  props:["menuData"],
  data () {
    return {
      currentTime:moment().format('YYYY-MM-DD HH:mm:ss'),
      currentDate: moment().format('d'),
      weekDay:["一","二","三","四","五","六","日"]
    };
  },
  components: {},
  computed: {
  },
  mounted(){
    console.log(this.menuData)
    var time=setInterval(()=>{
      this.currentTimeC()
    },1000)
  },
  methods: {
    currentTimeC(){
      this.currentTime = moment().format('YYYY-MM-DD HH:mm:ss')
    },
    currentDateC(){
      this.currentDate = moment().format('d')
    },
    mouseIn(r){
      for(let i=0;i<this.menuData.length;i++){
        this.menuData[i].active=false;
        //this.$set(this.menuData[i],"active","false");
      }
      r.active=true;
    },
    mouseleave(r){
      //父元素滑入子元素也会触发muoseout
      //mouseover->mouseenter
      //mouseout->mouseleave
      r.active=false;
    },
    choosePage(r,m){
      r.active=false;
      this.$router.push({
        path:m.path
      })
      //页面跳转
    },
    menuIn(){
      console.log("in")
    }
  }
}

</script>
<style  scoped>
.mainNav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:0.3rem;
  display: flex;
  font-size: 0.2rem;
  z-index: 999;
}
.mainNav_name{
  flex:0.25;
  line-height: 0.3rem;
  font-size: 0.12rem;
  color:#ffffff;
}
.mainNav_placeholder{
  flex:0.05;
}
.mainNav_menu{
  flex:0.4;
  font-size: 0.1rem;
  line-height: 0.3rem;
  background: rgba(34,73,122,0.5);
  display: flex;
  color:#ffffff;
  position: relative;
}
.mainNav_menu_right{
  position: absolute;
  top: 0;
  right: -0.3rem;
  width: 0px;
	height: 0px;
  border-width: 0.15rem;
  border-style: solid;
  border-color: rgba(34,73,122,0.5) transparent transparent rgba(34,73,122,0.5);
}
.mainNav_menu_left{
  position: absolute;
  top: 0;
  left: -0.3rem;
  width: 0px;
	height: 0px;
  border-width: 0.15rem;
  border-style: solid;
  border-color: rgba(34,73,122,0.5) rgba(34,73,122,0.5) transparent transparent;
}
.mainNav_menu_1{
  flex: 1;
  position: relative;
}
.mainNav_menu_2{
  position: absolute;
  width: 80%;
  top: 0.3rem;
  right: 0;
  left: 0;
  margin:auto;
  border: 0.01rem solid #ffffff;
  border-radius: 0.02rem;
}
.mainNav_menu_2_item{
  height: 0.15rem;
  line-height: 0.15rem;
  font-size: 0.08rem;
  background: rgba(34,73,122);
}
.mainNav_menu_1:hover{
  cursor: pointer;
  background: radial-gradient(70% 0.09rem ellipse,#ffffff 0%, rgba(34,73,122,0.5) 60%);
}
.mainNav_menu_2_item:hover{
  cursor: pointer;
  background: radial-gradient(100% 0.06rem ellipse,#ffffff 1%, rgba(34,73,122,0.5) 60%); /* 横向半径 纵向半径 */
}
.mainNav_time{
  font-size: 0.1rem;
  color:#ffffff;
  flex:0.25;
  line-height: 0.3rem;
  text-align: center;
}
.mainNav_space{
  flex:0.1
}
</style>