<!--  -->
<template>
  <div>
      <div class="tty" v-bl></div>
      <div class="tty" v-te:ko.a.b="msg"></div>
      <div class="tty">{{msg|toUpper}}</div>
  </div>
</template>

<script>
import {BG} from "@/common/constant"
export default {
  name: 'jsTest',
  data () {
    return {
      msg: "ttt"
    }
  },
  directives: {
    te:function(el,binding){
      var s = JSON.stringify
      el.style.background = '#ff5511'
      el.innerHTML = 'sss'
      console.log(s(binding.name))
      console.log(s(binding.value))
      console.log(s(binding.expression))
      console.log(s(binding.arg))
　　}
  },
  components: {},

  computed: {},

  mounted () {
    console.log(BG)
  },

  methods: {}
}

</script>
<style  scoped>
.tty{
    width: 60px;text-align: center;
    height: 60px;line-height: 60px;
}
</style>
