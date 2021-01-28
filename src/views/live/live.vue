<template>
  <div class="mainBox" :style="{backgroundImage:'url('+backCenter+')'}">
    <div class="titleBox" :style="{backgroundImage:'url('+topTitle+')'}">
      <div class="titleText">连云港雨润直播基地实时数据大屏</div>
    </div>
    <div class="midBox">
      <div class="midLeft">
        <div class="midLeft_1" :style="{backgroundImage:'url('+leftTitle+')'}">热销榜单</div>
        <div class="midLeft_space"></div>
        <div class="midLeft_2" :style="{backgroundImage:'url('+leftContent+')'}">
          <template v-for="(r, index) in goodsList" >
            <div class="hotItem" :key="r.id">
              <div class="hotMark">
                <div class="hotIcom" :style="{backgroundImage:'url('+r.activeIcon+')'}"></div>
              </div>
              <div class="hotImg" :style="{backgroundImage:'url('+r.url+')'}"></div>
              <div class="hotDesc">
                <div class="hotDescName">{{r.name}}</div>
                <div class="hotDescIcon" :style="{backgroundImage:'url('+saleIcon+')'}"></div>
                <div class="hotDescSale">实时销量:{{r.base | thousand}}</div>
                <div class="hotDescPriceMid">￥{{r.price | thousand}}</div>
              </div>
            </div>
            <div class="hotItemLine" :key="r.url" v-if="index < 4"></div>
          </template>
          <!--
          <div class="hotItem">
            <div class="hotMark">
              <div class="hotIcom" :style="{backgroundImage:'url('+top1+')'}"></div>
            </div>
            <div class="hotImg" :style="{backgroundImage:'url('+goodsList[0].url+')'}"></div>
            <div class="hotDesc">
              <div class="hotDescName">{{goodsList[0].name}}</div>
              <div class="hotDescIcon" :style="{backgroundImage:'url('+saleIcon+')'}"></div>
              <div class="hotDescSale">实时销量:{{goodsList[0].base}}</div>
              <div class="hotDescPrice">￥{{goodsList[0].price}}</div>
            </div>
          </div>
          <div class="hotItemLine"></div>
          <div class="hotItem">
            <div class="hotMark">
              <div class="hotIcom" :style="{backgroundImage:'url('+top2+')'}"></div>
            </div>
            <div class="hotImg" :style="{backgroundImage:'url('+room+')'}"></div>
            <div class="hotDesc">
              <div class="hotDescName">三只松鼠坚果礼包备份</div>
              <div class="hotDescIcon" :style="{backgroundImage:'url('+saleIcon+')'}"></div>
              <div class="hotDescSale">实时销量:1000</div>
              <div class="hotDescPrice">￥99</div>
            </div>
          </div>
          <div class="hotItemLine"></div>
          <div class="hotItem">
            <div class="hotMark">
              <div class="hotIcom" :style="{backgroundImage:'url('+top3+')'}"></div>
            </div>
            <div class="hotImg" :style="{backgroundImage:'url('+room+')'}"></div>
            <div class="hotDesc">
              <div class="hotDescName">三只松鼠坚果礼包备份</div>
              <div class="hotDescIcon" :style="{backgroundImage:'url('+saleIcon+')'}"></div>
              <div class="hotDescSale">实时销量:10000000</div>
              <div class="hotDescPrice">￥99</div>
            </div>
          </div>
          <div class="hotItemLine"></div>
          <div class="hotItem">
            <div class="hotMark">
              <div class="hotUp" :style="{backgroundImage:'url('+topUp+')'}"></div>
            </div>
            <div class="hotImg" :style="{backgroundImage:'url('+room+')'}"></div>
            <div class="hotDesc">
              <div class="hotDescName">三只松鼠坚果礼包备份</div>
              <div class="hotDescIcon" :style="{backgroundImage:'url('+saleIcon+')'}"></div>
              <div class="hotDescSale">实时销量:1000</div>
              <div class="hotDescPrice">￥99</div>
            </div>
          </div>
          <div class="hotItemLine"></div>
          <div class="hotItem">
            <div class="hotMark">
              <div class="hotUp" :style="{backgroundImage:'url('+topUp+')'}"></div>
            </div>
            <div class="hotImg" :style="{backgroundImage:'url('+room+')'}"></div>
            <div class="hotDesc">
              <div class="hotDescName">三只松鼠坚果礼包备份</div>
              <div class="hotDescIcon" :style="{backgroundImage:'url('+saleIcon+')'}"></div>
              <div class="hotDescSale">实时销量:1000</div>
              <div class="hotDescPrice">￥99</div>
            </div>
          </div>
          -->
        </div>
        <div class="midLeft_blank"></div>
        <div class="midLeft_1" :style="{backgroundImage:'url('+leftTitle+')'}">人气排行</div>
        <div class="midLeft_space"></div>
        <div class="midLeft_2" :style="{backgroundImage:'url('+leftContent+')'}">
          <template v-for="(r, index) in streamList" >
            <div class="hotItem" :key="r.id">
              <div class="popMark">
                <div class="popNum" :class="{'popNumPro': index == 0}" :style="{backgroundImage:'url('+r.activeIcon+')'}"></div>
              </div>
              <div class="popImg" :style="{backgroundImage:'url('+r.avatar+')'}"></div>
              <div class="hotDesc">
                <div class="hotDescName">{{r.nickname}}</div>
                <div class="hotDescIcon" :style="{backgroundImage:'url('+popIcon+')'}"></div>
                <div class="hotDescSale">当前热度:{{r.heat_base | thousand}}</div>
                <div class="hotDescText">销售额</div>
                <div class="hotDescPrice">{{r.sell_base | thousand}}</div>
              </div>
            </div>
            <div class="hotItemLine" :key="r.url" v-if="index < 4"></div>
          </template>
          <!--
          <div class="hotItem">
            <div class="popMark">
              <div class="popNum" :style="{backgroundImage:'url('+num1+')'}"></div>
            </div>
            <div class="popImg" :style="{backgroundImage:'url('+room+')'}"></div>
            <div class="hotDesc">
              <div class="hotDescName">三只松鼠坚果礼包备份</div>
              <div class="hotDescIcon" :style="{backgroundImage:'url('+popIcon+')'}"></div>
              <div class="hotDescSale">实时销量:1000</div>
              <div class="hotDescPrice">￥99</div>
            </div>
          </div>
          <div class="hotItemLine"></div>
          <div class="hotItem">
            <div class="popMark">
              <div class="popNum" :style="{backgroundImage:'url('+num2+')'}"></div>
            </div>
            <div class="popImg" :style="{backgroundImage:'url('+room+')'}"></div>
            <div class="hotDesc">
              <div class="hotDescName">三只松鼠坚果礼包备份</div>
              <div class="hotDescIcon" :style="{backgroundImage:'url('+popIcon+')'}"></div>
              <div class="hotDescSale">实时销量:1000</div>
              <div class="hotDescPrice">￥99</div>
            </div>
          </div>
          <div class="hotItemLine"></div>
          <div class="hotItem">
            <div class="popMark">
              <div class="popNum" :style="{backgroundImage:'url('+num3+')'}"></div>
            </div>
            <div class="popImg" :style="{backgroundImage:'url('+room+')'}"></div>
            <div class="hotDesc">
              <div class="hotDescName">三只松鼠坚果礼包备份</div>
              <div class="hotDescIcon" :style="{backgroundImage:'url('+popIcon+')'}"></div>
              <div class="hotDescSale">实时销量:1000</div>
              <div class="hotDescPrice">￥99</div>
            </div>
          </div>
          <div class="hotItemLine"></div>
          <div class="hotItem">
            <div class="popMark">
              <div class="popNum" :style="{backgroundImage:'url('+num4+')'}"></div>
            </div>
            <div class="popImg" :style="{backgroundImage:'url('+room+')'}"></div>
            <div class="hotDesc">
              <div class="hotDescName">三只松鼠坚果礼包备份</div>
              <div class="hotDescIcon" :style="{backgroundImage:'url('+popIcon+')'}"></div>
              <div class="hotDescSale">实时销量:1000</div>
              <div class="hotDescPrice">￥99</div>
            </div>
          </div>
          <div class="hotItemLine"></div>
          <div class="hotItem">
            <div class="popMark">
              <div class="popNum" :style="{backgroundImage:'url('+num5+')'}"></div>
            </div>
            <div class="popImg" :style="{backgroundImage:'url('+room+')'}"></div>
            <div class="hotDesc">
              <div class="hotDescName">三只松鼠坚果礼包备份</div>
              <div class="hotDescIcon" :style="{backgroundImage:'url('+popIcon+')'}"></div>
              <div class="hotDescSale">实时销量:1000</div>
              <div class="hotDescPrice">￥99</div>
            </div>
          </div>
          -->
        </div>
      </div>
      <div class="midMid">
        <div class="midTitle" :style="{backgroundImage:'url('+midTitle+')'}">实时销售总额:{{amount | thousand}}元</div>
        <div class="midMap">
          <Map></Map>
        </div>
        <div class="midMidLeft" :style="{backgroundImage:'url('+midSq+')'}">
          <div class="midMidText">下单人数</div>
          <div class="midMidNum">{{order.buy_base | thousand}}人</div>
        </div>
        <div class="midMidRight" :style="{backgroundImage:'url('+midSq+')'}">
          <div class="midMidText">订单总量</div>
          <div class="midMidNum">{{order.order_base | thousand}}人</div>
        </div>
      </div>
      <div class="midRight">
        <!-- 黑色50%透明度，上面加字 -->
        <div class="midLeft_1" :style="{backgroundImage:'url('+leftTitle+')'}">直播间实况</div>
        <div class="midRightBox" :style="{backgroundImage:'url('+rightBack+')'}">
          <div class="midRightTop">
            <div class="rightRoom" v-for="r in streamInfoList" :key="r.id">
              <div class="roomPic" :style="{backgroundImage:'url('+r.default_pic+')'}">
                <div class="roomPicRest" v-if="r.status == 2 || r.status == 1">
                  <div class="roomPicRestText" v-if="r.status == 2">休息中</div>
                  <div class="roomPicRestText" v-if="r.status == 1">离开</div>
                </div>
              </div>
              <div class="roomTitle">{{r.name}}</div>
            </div>
            <div class="rightRoom">
              <div class="roomFinal" :style="{backgroundImage:'url('+room+')'}"></div>
            </div>
          </div>
          <div class="midRightBot">
            <div class="radioMap" id="anchorMap">
              <!-- <Sector></Sector> -->
            </div>
            <div class="anchorBox">
              <div class="midRightText">主播总数:</div>
              <div class="midRightNum">{{Number(watcher.douyin_streamer_base) + Number(watcher.kuaishou_streamer_base) | thousand}}人</div>
            </div>
            <div class="audienceBox">
              <div class="midRightText">观看人数:</div>
              <div class="midRightNum">{{Number(watcher.douyin_base) + Number(watcher.kuaishou_base) | thousand}}人</div>
            </div>
          </div>
          </div>
      </div>
    </div>
    <div class="iconBox" :style="{backgroundImage:'url('+coperation_pic+')'}"></div>
    <div class="botBox" :style="{backgroundImage:'url('+botCenter+')'}"></div>
  </div>
</template>

<script>
import Map from './map'
// import Sector from './sector'
export default {
  data () {
    return {
      myChart: null,
      topTitle: require('../../../src/assets/pic_biaoiti@2x.png'),
      backCenter: require('../../../src/assets/bg_tuoyuan@2x.png'),
      botCenter: require('../../../src/assets/bg_diqiu@2x.png'),
      leftTitle: require('../../../src/assets/pic_shishishangpin@2x.png'),
      leftContent: require('../../../src/assets/bg_shangpin@2x.png'),
      midSq: require('../../../src/assets/bg_xiadanrenshu@2x.png'),
      midTitle: require('../../../src/assets/pic_shishi@2x.png'),
      rightBack: require('../../../src/assets/bg_zhibojian@2x.png'),
      room: require('../../../src/assets/icon_more@2x.png'),
      saleIcon: require('../../../src/assets/icon_xiaoliang@2x.png'),
      popIcon: require('../../../src/assets/icon_renqi@2x.png'),
      goodIconList: [
        require('../../../src/assets/Top1@2x.png'),
        require('../../../src/assets/Top2@2x.png'),
        require('../../../src/assets/Top3@2x.png'),
        require('../../../src/assets/icon_jiantou@2x.png'),
        require('../../../src/assets/icon_jiantou@2x.png')
      ],
      hot: [
        require('../../../src/assets/num/1@2x.png'),
        require('../../../src/assets/num/2@2x.png'),
        require('../../../src/assets/num/3@2x.png'),
        require('../../../src/assets/num/4@2x.png'),
        require('../../../src/assets/num/5@2x.png')
      ],
      watcher: null,
      order: null,
      coperation_pic: null,
      goodsList: null,
      streamList: null,
      streamInfoList: null,
      allData: null,
      total_base: 0
    }
  },
  components:{
    Map,
    // Sector
  },
  filters: {
    thousand:function (val) {
      val = val.toString()
      return val.replace(/(\d)(?=(\d{3})+$)/g, "$1,")
    }
  },
  computed: {
    amount:function () {
      let k = 0
      if (this.streamList.length > 0) {
        for (let i = 0; i < 5; i++) {
          k = k + Number(this.streamList[i].sell_base)
        }
      }
      return k + Number(this.total_base)
    }
  },
  created () {
    if (localStorage.getItem('watcher')) {
      this.watcher = JSON.parse(localStorage.getItem('watcher'))
      this.order = JSON.parse(localStorage.getItem('order'))
      this.coperation_pic = JSON.parse(localStorage.getItem('coperation_pic'))
      this.goodsList = JSON.parse(localStorage.getItem('goodsList'))
      this.goodsList = this.listSort(this.goodsList,'base') // 商品销售排行
      this.streamList = JSON.parse(localStorage.getItem('streamList'))
      this.streamList = this.listSort(this.streamList,'heat_base') // 热度销量
      this.streamInfoList = JSON.parse(localStorage.getItem('streamInfoList')) // 直播间
      this.roomDeal()
      this.total_base = JSON.parse(localStorage.getItem('total_base'))
      this.listIconSet()
    }
  },
  mounted () {
    // a = a.replace(/(\d)(?=(\d{3})+$)/g,"$1,");
    // return (val).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    this.charts(this.watcher.douyin_base, this.watcher.kuaishou_base)
    setInterval(() => {
      this.roomDeal()
    },7200000)
    setInterval(() => {
      this.listDeal()
      this.order.buy_base = this.getRandom(this.order.buy_base, 0, this.order.buy_max,this.total_base)
      this.order.order_base = this.getRandom(this.order.order_base, 0, this.order.order_max,this.total_base)
      this.watcher.douyin_base = this.getRandom(this.watcher.douyin_base, this.watcher.douyin_min, this.watcher.douyin_max,this.total_base)
      this.watcher.kuaishou_base = this.getRandom(this.watcher.kuaishou_base, this.watcher.kuaishou_min, this.watcher.kuaishou_max,this.total_base)
      this.watcher.kuaishou_streamer_base = this.getRandom(this.watcher.kuaishou_streamer_base,this.watcher.kuaishou_streamer_min,this.watcher.kuaishou_streamer_max,this.total_base)
      this.watcher.douyin_streamer_base = this.getRandom(this.watcher.douyin_streamer_base,this.watcher.douyin_streamer_min,this.watcher.douyin_streamer_max,this.total_base)
      this.refreshCharts(this.watcher.douyin_base,this.watcher.kuaishou_base)
    },2000)
    this.dataStore()
  },
  methods: {
    listSort (arr,key) {
      function compare (key) {
        return function (v1, v2) {
          let a = v1[key]
          let b = v2[key]
          return b - a
        }
      }
      arr.sort(compare(key))
      return arr
    },
    listIconSet () {
      for (let i = 0; i < 5; i++) {
        this.streamList[i].activeIcon = this.hot[i]
        this.goodsList[i].activeIcon = this.goodIconList[i]
      }
    },
    listDeal () {
      for(let i = 0;i < 5;i++){
        this.goodsList[i].base = this.getRandom(this.goodsList[i].base, this.goodsList[i].min, this.goodsList[i].max,this.total_base)
        this.streamList[i].heat_base = this.getRandom(this.streamList[i].heat_base, this.streamList[i].heat_min, this.streamList[i].heat_max,this.total_base)
        this.streamList[i].sell_base = this.getRandom(this.streamList[i].sell_base, this.streamList[i].sell_min, this.streamList[i].sell_max,this.total_base)
      }
      this.goodsList = this.listSort(this.goodsList,'base')
      this.streamList = this.listSort(this.streamList,'heat_base')
      this.listIconSet()
    }, // 热销 人气
    getArray () {
      let data = []
      for(let i = 0; i < 5; i++){
        let kk = this.getRandom(1,0,2,0)
        data.push(kk)
      }
      let count = 0
      for(let i = 0; i < 5; i++){
        if(data[i] == 3){
          count++
        }
      }
      if(count < 2){
        return this.getArray()
      }
      return data
    },
    roomDeal () {
      // status   3:直播中   2:休息   1:离开  
      let sta = this.getArray()
      for(let i = 0; i < 5; i++){
        this.streamInfoList[i].status = sta[i]
      }
      this.streamInfoList = this.listSort(this.streamInfoList,'status')
    },
    dataStore () {
      setInterval(()=>{
        localStorage.setItem('watcher',JSON.stringify(this.watcher))
        localStorage.setItem('order',JSON.stringify(this.order))
        localStorage.setItem('coperation_pic',JSON.stringify(this.coperation_pic))
        localStorage.setItem('goodsList',JSON.stringify(this.goodsList))
        localStorage.setItem('streamList',JSON.stringify(this.streamList))
        localStorage.setItem('streamInfoList',JSON.stringify(this.streamInfoList))
      },300000)
    },
    getRandom (data, min, max, base) {
      let data = Number(data)
      let min = Number(min)
      let max = Number(max)
      let base = Number(base)
      let k = Math.floor(Math.random() * (max - min + 1)) + min
      return data + k + base
    },
    charts (dy, ks) {
      this.myChart = this.$echarts.init(document.getElementById('anchorMap'));
      let option = {
          tooltip: {
              trigger: 'item'
          },
          legend: {
            show:false,
            top: '5%',
            left: 'center'
          },
          series: [
              {
                  name: '观看来源',
                  type: 'pie',
                  radius: ['40%', '70%'],
                  avoidLabelOverlap: false,
                  emphasis: {
                      label: {
                          show: false,
                          fontSize: '40',
                          fontWeight: 'bold'
                      }
                  },
                  labelLine: {
                      show: false
                  },
                  label:{
                    normal: {
                      position: 'inner',
                      fontSize:'20',
                      show : true
                    }
                  },
                  color:['#6AB0E0','#A3E5FF'],
                  data: [
                      {value: dy, name: '抖音'},
                      {value: ks, name: '快手'},
                  ]
              }
          ]
      }
      this.myChart.setOption(option)
    },
    refreshCharts (dy, ks) {
      if (!this.myChart) {
        return
      }
      let option = this.myChart.getOption()
      option.series[0].data[0].value = dy
      option.series[0].data[1].value = ks
      this.myChart.setOption(option)
    }
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.mainBox{
  position: absolute;
  left: 0;right: 0;
  top: 0;bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  background-size:100% 70%;
  background-position:center;
}
.titleBox{
  width: 100%;
  height:12.1vh;
  text-align: center;
  background-size:100% 100%;
  background-position:top;
  z-index:10;  
}
.titleText{
  margin-top: 5.3vh;
  color:#ffffff;
  text-align: center;
  font-size: 3.3vh;
  /* 苹方-简 中黑体 */
}
.midBox{
  position: absolute;
  top: 8.9vh;left: 3.7vw ;
  right: 3.7vw;bottom: 14.1vh;
  z-index:2;
  display: flex;
}
.midLeft{
  width: 19.7vw;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.midLeft_1{
  width: 100%;
  height: 4.3vh;
  line-height: 4.3vh;
  text-align: center;
  color: #31C0F5;
  font-size: 2vh;
  margin-bottom: 0.5vh;
  background-size:100% 100%;
  /* background-position:center; */
}
.midLeft_2{
  width: 100%;
  flex:1;
  box-sizing: border-box;
  background-size:109% 109%;
  background-position: center;
  display: flex;
  flex-direction: column;
  padding: 0.45vh 1.5vw 0.45vh 1.5vw;
}
.hotItem{
  flex: 1;
  display: flex;
  align-items: center;
}
.hotMark{
  width: 2.26vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hotIcom{
  /* 62 26 */
  /* 53 37 */
  width: 2.3vw;
  height: 1.7vh;
  background-size:100% 180%;
  background-position: center;
}
.hotUp{
  width: 1.9vw;
  height: 2.4vh;
  background-size:100% 100%;
  background-position: center;
}
.hotImg{
  width: 4.53vw;
  height: 84%;
  /* height: 4.55vh; */
  background-size: cover;
  /* background-size:100% 100%; */
  background-position: center;
}
.hotDesc{
  flex:1;
  height: 84%;
  /* height: 4.55vh; */
  position: relative;
  color: #ffffff;
  font-size: 1.3vh;
  overflow: hidden;
}
.hotDescName{
  position: absolute;
  /* top:1.3vh; */
  top: 0;
  left: 0.3vw;
  width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.hotDescIcon{
  position: absolute;
  /* top: 3.7vh; */
  top:57%;
  left: 0.3vw;
  width: 0.8vw;
  height: 1.1vh;
  background-size:100% 100%;
  background-position: center;
}
.hotDescSale{
  position: absolute;
  /* top: 3.3vh; */
  top:50%;
  left:1.64vw;
  width: 60%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.hotDescText{
  position: absolute;
  right: 0.73vw;
  top:15%;
}
.hotDescPrice{
  position: absolute;
  right: 0.73vw;
  /* top:2.2vh; */
  top:48%
}
.hotDescPriceMid{
  position: absolute;
  right: 0.73vw;
  top:30%
}
.hotItemLine{
  height: 1px;
  width: 100%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0) 0%, #7F7F7F 54%, rgba(255, 255, 255, 0) 100%);
}
.popMark{
  width: 1.9vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popNum{
  /* 25 69 */
  width: 0.9vw;
  height: 3.5vh;
  background-repeat: no-repeat;
  background-size:100% 70%;
  background-position: center;
}
.popNumPro{
  width: 0.9vw;
  height: 3.5vh;
  background-repeat: no-repeat;
  background-size:50% 70%;
  background-position: center;
}
.popImg{
  width: 2.2vw;
  height:3.9vh;
  /* height: 100%; */
  border-radius: 50%;
  border:1px solid #3CBEFF;
  /* background-size:100% 100%; */
  background-size: cover;
  background-position: center;
}
.midLeft_space{
  width: 100%;
  height: 0.5vh;
}
.midLeft_blank{
  width: 100%;
  height: 2.2vh;
}
.midMid{
  flex:1;
  height: 100%;
  position: relative;
}
.midMap{
  position: absolute;
  top: 13.11vh;
  left:0;right:0;
  margin:auto;
  width: 38vw;
  height: 50vh;
}
.midTitle{
  position: absolute;
  top:4.68vh;
  left:0;right:0;
  margin:auto;
  width: 40.7vw;
  height: 6.1vh;
  line-height: 6.1vh;
  text-align: center;
  color: #ffffff;
  font-size: 2.5vh;
  background-position: center;
  background-size:102% 120%;
  letter-spacing: 1px;
}
.midMidLeft{
  position: absolute;
  left:6.1vw;bottom: 0;
  width: 18.3vw;
  height: 14.6vh;
  background-size:104% 109%;
}
.midMidText{
  position: absolute;
  color: #ffffff;
  left: 2.6vw;
  top:2.9vh;
  font-size: 1.9vh;
}
.midMidNum{
  position: absolute;
  color: #ffffff;
  left: 2.6vw;
  top:8.84vh;
  font-size: 2.6vh;
}
.midMidRight{
  position: absolute;
  right:6.1vw;bottom: 0;
  width: 18.3vw;
  height: 14.6vh;
  background-size:104% 107%;
}
.midRight{
  width: 19.7vw;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.midRightBox{
  flex: 1;
  background-position: center;
  background-size:106% 103%;
}
.midRightTop{
  box-sizing: border-box;
  height: 50%;
  width: 100%;
  padding-top: 2.0vh;
  flex-wrap: wrap;
  justify-content:space-around;
  display: flex;
}
.rightRoom{
  width: 8.7vw;
  /* width: 44%; */
  height: 11.05vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 1vh;
}
.roomPic{
  width: 100%;
  flex: 1;
  border-radius: 1vh;
  background-position: center;
  /* background-size:100% 100%; */
  background-size: cover;
  position: relative;
}
.roomPicRest{
  position: absolute;
  top: 0;right: 0;
  bottom: 0;left: 0;
  background: rgba(0,0,0,0.5);
}
.roomPicRestText{
  color:#ffffff;
  width: 100%;
  line-height: 8vh;
  font-size: 1.3vh;
  text-align: center;
}
.roomFinal{
  background-position: center;
  background-size:2.3vw 1.7vh;
  background-repeat: no-repeat;
  width: 100%;height: 70%;
}
.roomTitle{
  height: 3.1vh;
  width: 100%;
  text-align: left;
  line-height: 3.1vh;
  font-size: 1.3vh;
  color: #ffffff;
}
.midRightBot{
  height: 50%;
  position: relative;
}
.anchorBox{
  position: absolute;
  width: 50%;height: 8vh;
  bottom: 0;left: 0;
}
.audienceBox{
  position: absolute;
  width: 50%;height: 8vh;
  bottom: 0;right:0;
}
.midRightText{
  position: absolute;
  top:2.4vh;
  left:3.65vw;
  font-size: 1.3vh;
  color: #ffffff;
}
.midRightNum{
  position: absolute;
  top:4.4vh;
  left:3.65vw;
  font-size: 1.3vh;
  color: #ffffff;
}
.radioMap{
  position: absolute;
  /* width: 16.6vw; */
  width: 24vh;
  height: 24vh;
  top:4vh;
  left:0;right:0;
  margin:auto;
}
.iconBox{
  position: absolute;
  left: 3.7vw ;
  right: 3.7vw;
  bottom: 1.3vh;
  height: 11.7vh;
  z-index:2;
  background-repeat: no-repeat;
  background-position: center;
  /* background-size: 100% 100%; */
  background-size: cover;
}
/* .iconItem{
  width: 7.86vw;
  height: 7.8vh;
  background: grey;
  border: 1px solid #ffffff;
} */
.botBox{
  position: absolute;
  left: 0;bottom: 0;
  width: 100%;
  height: 19.8vh;
  background-size:100% 100%;
  background-position:bottom;
}
</style>
