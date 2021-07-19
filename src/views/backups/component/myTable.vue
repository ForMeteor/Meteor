<!--  -->
<template>
  <div class="my-table">
    <el-table :data="data">
      <my-column v-for="(item,index) in col" :key="index" :col="item"></my-column>
    </el-table>
  </div>
</template>

<script>
import MyColumn from './myColumn.vue'
export default {
  name: 'myTable',
  props: ['col', 'data'],
  data () {
    return {
    }
  },

  components: {
    MyColumn
  },

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style  scoped>
</style>
