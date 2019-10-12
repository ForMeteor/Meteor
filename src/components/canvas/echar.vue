<!--  -->
<template>
  <div id="myChart" class="chart" :style="{width:'200px',height:'200px'}"></div>
</template>

<script>
import aer from '../../public/importTest'
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  name:"echar",
  data () {
    return {
    };
  },
  components: {},
  computed: {
    ...mapState(['count','numb']),
    num(){
      return this.$store.getters.getNum
    }
  },
  mounted(){
    this.drawLine();
    this.getInfo();
    console.log(this.count)
    this.increment(5)
    console.log(this.count)
    console.log(this.numb)
    console.log(this.$con.Auther)
    console.log(this.$store.getters.getNum)
    this.$store.dispatch("increment",6)
    //console.log(this.$store.state.menu)
    let p1 = new Promise(resolve => {
        setTimeout(() => {
            resolve('I\`m p1 ')
        }, 1000)
    });
    let p2 = new Promise(resolve => {
        setTimeout(() => {
            resolve('I\`m p2 ')
        }, 2000)
    });
    // Promise.race([p1, p2]).then(value => { 有一个完成即返回
    //   console.log(value)
    // })
    Promise.all([p1, p2]).then(value => {
      console.log(value)
    })
  },
  methods: {
    ...mapMutations([
      'increment',
      'changen'
    ]),
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
    getInfo(){
      this.$axios.get("../../../static/normal.json",{}).then((result)=>{
        console.log(result)
      }).catch()
    }
  }
}

</script>
<style  scoped>
.chart{
    margin: 1rem auto;
}
</style>