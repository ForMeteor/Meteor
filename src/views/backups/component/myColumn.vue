<!--  -->
<template>
   <el-table-column
    :prop="col.prop"
    :label="col.label"
    align="left">
    <template v-if="col.children && col.children.length">
      <my-column v-for="(item, index) in col.children"
        :key="index"
        :col="item"></my-column>
    </template>
    <template v-if="!col.children || col.children.length == 0" slot-scope="scope">
      <el-input v-model="scope.row[col.prop]"></el-input>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'myColumn',
  props: ['col'],
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style  scoped>
</style>
