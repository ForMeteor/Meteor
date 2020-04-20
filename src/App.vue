<template>
  <div id="app">
    <topNav v-if="false"></topNav>
    <router-view/>
  </div>
</template>

<script>
import topNav from '@/components/topNav.vue'
export default {
  name: 'app',
  components: {
    topNav
  },
  methods: {
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
  margin-top: 60px;
  padding: 0;margin: 0;
}
.normal_back{
  position:absolute;
  bottom: 0;right: 0;
  left: 0;top: 0;
  overflow:hidden;
}
</style>
