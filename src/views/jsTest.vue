<!--  -->
<template>
  <div>
      <div class="tty" v-bl @click="ifShow = !ifShow"></div>
      <div class="tty" v-te:ko.a.b="msg"></div>
      <div class="flexTest" v-show="ifShow">
        <div class="flexTestItem"></div>
        <div class="flexTestItem"></div>
        <div class="flexTestItem"></div>
      </div>
      <div class="tty">{{msg|toUpper}}</div>
      <div class="tty">{{gugu}}</div>
      <div class="tty" @click="change">
        {{mile}}
      </div>
  </div>
</template>

<script>
// import { BG } from '@/common/constant'
import { adminTable, adminQuery } from '@/api/admin'
export default {
  name: 'jsTest',
  components: {
  },
  data () {
    return {
      ifShow: true,
      msg: 'ttt',
      mile: [{
        a: 1,
        b: 2,
        c: 3
      }, {
        a: 21,
        b: 22
      }],
      gugu: [1, 2, 3, 4]
    }
  },
  directives: {
    te: function (el, binding) {
      const s = JSON.stringify
      el.style.background = '#ff5511'
      el.innerHTML = 'sss'
      console.log(s(binding.name))
      console.log(s(binding.value))
      console.log(s(binding.expression))
      console.log(s(binding.arg))
    }
  },

  computed: {},

  mounted () {
  },

  methods: {
    change () {
      this.gugu[0] = 22
      // this.$set(this.gugu, 0, 22)
    }
  }
}

</script>
<style  scoped>
.tty{
    width: 600px;text-align: center;
    height: 60px;line-height: 60px;
}
.ttt{
  width: 200px;
  height: 100px;
}
.flexTest{
  display: flex;
  height:60px;
}
.flexTestItem{
  flex: 1;
  border:1px solid black;
}
</style>
