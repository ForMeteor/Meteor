<!--  -->
<template>
  <div>
    <div id="container"></div>
    <button class="btn" @click="poOpen" style="margin-bottom: 5px">开始编辑</button>
    <button class="btn" @click="poClose">结束编辑</button>
  </div>
</template>
<script>
// const AMap = window.AMap
export default {
  name: '',
  data () {
    return {
      polyEditor: null,
    }
  },

  components: {},

  computed: {},
  created () {
  },
  mounted () {
    console.warn(AMap)
    this.getMap()
  },

  methods: {
    getMap () {
      var map = new AMap.Map("container", {
        center: [116.400274, 39.905812],
        zoom: 8,
        viewMode: '3D',
      })
      var path = [
        [116.403322, 39.920255],
        [116.410703, 39.897555],
        [116.402292, 39.892353],
        [116.389846, 39.891365]
      ]
      this.polygon = new AMap.Polygon({
        path: path,
        strokeColor: "#FF33FF",
        strokeWeight: 6,
        strokeOpacity: 0.2,
        fillOpacity: 0.4,
        fillColor: '#1791fc',
        zIndex: 50,
        bubble: true,
      })
      map.add([this.polygon])
      // 缩放地图到合适的视野级别
      map.setFitView()
      this.polyEditor = new AMap.PolygonEditor(map, this.polygon)
      this.polyEditor.addAdsorbPolygons(this.polygon)
      this.polyEditor.open()
    },
    poClose () {
      console.warn(this.polygon._opts.path)
      this.polyEditor.close()
    },
    poOpen () {
      this.polyEditor.open()
    }
  }
}

</script>
<style  scoped>
#container{
  width: 100%;
  height: 100vh;
}
</style>
