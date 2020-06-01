<!--  -->
<template>
  <div>
    <div class="mainMenu" @click="go">
        <div class="waveBox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'circleMenu',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  mounted () {
  },
  methods: {
    go () {
      this.$router.push('about')
    }
  }
}

</script>
<style  scoped>
.mainMenu{
  width: 100px;
  height: 100px;line-height: 100px;
  border-radius: 50%;
  background: #DDE8EA;
  position: absolute;
  bottom: 0;right: 0;
  left: 0;top: 0;margin:auto;
  user-select:none;
  overflow: hidden;
}
.mainMenu:hover{
  cursor: pointer;
}
.waveBox{
  position: absolute;
  width: 120px;
  height: 150px;
  border-top-right-radius: 70px;
  border-top-left-radius: 80px;
  border-bottom-right-radius: 80px;
  border-bottom-left-radius: 70px;
  background: #71CBF7;
  opacity: 0.5;
  bottom: -85px;
  user-select:none;
  animation: wave 4s linear infinite;
}
@keyframes wave{
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>
