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
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
    <el-button @click="dialogVisible = true">打开</el-button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'vTable',
  data () {
    return {
      total: 2,
      dialogVisible: false,
      queryParams: {
        pageNum: null,
        pageSize: null
      },
      editList: [
        {
          lable: '日期',
          level: 1,
          children: []
        },
        {
          lable: '编号',
          level: 1,
          children: [
            {
              lable: '一号',
              level: 2,
              children: []
            },
            {
              lable: '二号',
              level: 2,
              children: []
            },
            {
              lable: '三号',
              level: 2,
              children: []
            }
          ]
        }
      ],
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

  methods: {
    getList () {
      console.log('s')
    }
  }
}

</script>
<style  scoped>
</style>
