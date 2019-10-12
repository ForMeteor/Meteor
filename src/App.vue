<template>
  <div id="app">
    <navTop :menuData="menuData"></navTop>
    <router-view/>
  </div>
</template>

<script>
import navTop from "./components/assembly/navTop"
export default {
  name: 'App',
  data () {
    return {
      menuData:[
        {
          title:"停车综合监测",
          active:false,
          menu:[
            {
              title:"monitorFirst",
              active:false,
              path:"monitorFirst"
            },
            {
              title:"停车综合二",
              active:false,
            },
            {
              title:"停车综合三",
              active:false,
            },
            {
              title:"停车综合四",
              active:false,
            },
            {
              title:"停车综合五",
              active:false,
            }
          ]
        },{
          title:"停车分析判断",
          active:false,
          menu:[
            {
              title:"停车分析一",
              active:false,
            },
            {
              title:"停车分析二",
              active:false,
            },
            {
              title:"停车分析三",
              active:false,
            },
            {
              title:"停车分析四",
              active:false,
            },
            {
              title:"停车分析五",
              active:false,
            }
          ]
        },{
          title:"停车视频监控",
          active:false,
          menu:[
            {
              title:"停车视频一",
              active:false,
            },
            {
              title:"停车视频二",
              active:false,
            },
            {
              title:"停车视频三",
              active:false,
            },
            {
              title:"停车视频四",
              active:false,
            },
            {
              title:"停车视频五",
              active:false,
            }
          ]
        },{
          title:"动态交通分析",
          active:false,
          menu:[
            {
              title:"balls",
              active:false,
              path:"balls"
            },
            {
              title:"changePic",
              active:false,
              path:"changePic"
            },
            {
              title:"moves",
              active:false,
              path:"moves"
            },
            {
              title:"countDown",
              active:false,
              path:"countDown"
            },
            {
              title:"echar",
              active:false,
              path:"echar"
            }
          ]
        }
      ]
    };
  },
  components:{
    navTop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:0.1rem;
}
*{
  margin: 0;
  padding: 0;
}
.text_ctrl{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pageBackground{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #4FAAE5;
}
</style>
