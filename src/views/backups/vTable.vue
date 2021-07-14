<!--  -->
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        label="绿化工作情况"
        align="center"
        width="180">
        <el-table-column
          prop="name"
          label="绿地总面积（万㎡）"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="绿地率%"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
      </el-table-column>
      <el-table-column
        label="古树名木及珍贵树木"
        align="center">
        <el-table-column
          label="古树（株）"
          align="center"
          width="180">
          <el-table-column
            label="一级"
            prop="rx"
            width="180">
          </el-table-column>
          <el-table-column
            label="二级"
            prop="rx"
            width="180">
          </el-table-column>
          <el-table-column
            label="三级"
            prop="rx"
            width="180">
          </el-table-column>
        </el-table-column>
        <el-table-column
          label="名木（株）"
          prop="rx"
          width="180">
        </el-table-column>
        <el-table-column
          label="珍贵树木（株）"
          prop="rx"
          width="180">
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'vTable',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        rx: '桃树',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        rx: '桃树',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        rx: '桃树',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        rx: '桃树',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
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
