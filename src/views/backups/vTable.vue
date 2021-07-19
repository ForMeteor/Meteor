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
    <MyTable style="width: 100%" :col="testList" :data="testData"></MyTable>
    <el-button @click="getk">打印</el-button>
  </div>
</template>

<script>
import MyTable from './component/myTable.vue'
export default {
  name: 'vTable',
  data () {
    return {
      total: 2,
      queryParams: {
        pageNum: null,
        pageSize: null
      },
      editList: [
        {
          label: '日期',
          level: 1,
          children: []
        },
        {
          label: '编号',
          level: 1,
          children: [
            {
              label: '一号',
              level: 2,
              children: []
            },
            {
              label: '二号',
              level: 2,
              children: []
            },
            {
              label: '三号',
              level: 2,
              children: []
            }
          ]
        }
      ],
      testList: [
        {
          label: '第一块',
          children: [
            {
              prop: 'a',
              label: 'a级',
              children: []
            },
            {
              prop: 'b',
              label: 'b级',
              children: []
            },
            {
              prop: 'c',
              label: 'c级',
              children: []
            }
          ]
        },
        {
          label: '第二块',
          children: [
            {
              prop: 'd',
              label: 'd级',
              children: []
            },
            {
              prop: 'e',
              label: 'e级',
              children: []
            },
            {
              prop: 'f',
              label: 'f级',
              children: [
                {
                  prop: 'ee',
                  label: 'ee级',
                  children: []
                },
                {
                  prop: 'eeee',
                  label: 'eeee级',
                  children: []
                }
              ]
            }
          ]
        }
      ],
      testData: [
        {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
          e: 5,
          f: 6,
          ee: 66,
          eeee: 6666
        },
        // {
        //   a: 1,
        //   b: 2,
        //   c: 11,
        //   d: 22,
        //   e: 111,
        //   f: 2333,
        //   ee: 3266,
        //   eeee: 1326666
        // }
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

  components: {
    MyTable
  },

  computed: {},

  mounted () {},

  methods: {
    getList () {
      console.log('s')
    },
    getk () {
      console.warn(this.testData)
    }
  }
}

</script>
<style  scoped>
</style>
