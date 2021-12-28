<!--  -->
<template>
  <div></div>
</template>

<script>
import { adminTable, adminQuery } from '@/api/admin'
export default {
  name: 'm_1',
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {
    // 1 2 3 4 5 6 7 8 9
    let base = [1,2,3,4,5,6,7,8,9]
    let mark = ['*', '', '*' ,'+' ,'','-','','+']
    // function cal () {
    //   let k = '1'
    //   for (let i = 0; i < 8; i++) {
    //     k = k + mark[i] + base[i + 1]
    //   }
    //   return eval(k: String)
    // }
    // let sd = cal()
    // console.log(sd)
  },

  methods: {}
}

</script>
<style  scoped>
</style>
