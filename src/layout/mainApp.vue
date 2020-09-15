<!-- 主页基调 -->
<template>
  <div class="normal_back main_app">
      <div :class="{'main_left_w':sideNav,'main_left_m':!sideNav}">
          <!-- menu -->
      </div>
      <div class="main_right">
          <appStatus></appStatus>
          <appRoute></appRoute>
          <appView></appView>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import appStatus from './mainStatus'
import appRoute from './mainRoute'
import appView from './mainView'
export default {
  name: 'mainApp',
  data () {
    return {
    }
  },

  components: {
    appStatus,
    appRoute,
    appView
  },

  computed: {
    ...mapGetters([
      'sideNav',
      'appName'
    ])
  },

  mounted () {
    console.log(this.appName)
    console.log(this.sideNav)
  },

  methods: {
  }
}

</script>
<style  scoped>
.main_app{
    display: flex;
}
.main_left_w{
    width: 200px;
    height: 100%;
    background: #E6E6D2;
}
.main_left_m{
    width: 100px;
    height: 100%;
    background: #E6E6D2;
}
.main_right{
    flex:1;
    height: 100%;
}
</style>
