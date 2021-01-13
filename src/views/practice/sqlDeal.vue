<!-- 处理数据库 -->
<template>
  <div></div>
</template>

<script>
import { adminTable } from '@/api/admin'
export default {
  name : '',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {
  },

  methods: {
    getList () {
      adminTable().then(() => {
        console.log('done')
      }).catch()
    }
  }
}

</script>
<style  scoped>
</style>