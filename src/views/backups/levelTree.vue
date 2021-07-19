<!-- 表格生成  分级标题生成 数据绑定  -->
<template>
  <div>
      <el-button @click="dialogVisible = true">新增</el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="600px">
        <div class="line">
            <div class="lineTitle">报表名称/子报表名称:</div>
            <el-select v-model="addListName" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-plus" size="mini" @click="addNext()">新增一级标题</el-button>
        </div>
        <ListLine v-for="(r, index) in addList" :key="r.id" :addList="r"></ListLine>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="showData">确 定</el-button>
        </span>
        </el-dialog>
  </div>
</template>

<script>
import ListLine from './component/listLine.vue'
export default {
  name: 'levelTree',
  data () {
    return {
      dialogVisible: false,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      addListName: null,
      addList: [],
      setData: [],
    }
  },

  components: {
    ListLine
  },

  computed: {},

  mounted () {},

  methods: {
    showData () {
      console.warn(this.addListName)
      console.warn(this.addList)
    },
    addNext () {
      this.addList.push({
        id: new Date().getTime(),
        label: '',
        level: 1,
        childShow: true,
        children: []
      })
    }
  }
}

</script>
<style  scoped>
.line{
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;
    display: flex;
}
.lineTitle{
    line-height: 40px;
    user-select: none;
}
.line .el-select{
    margin-left: 20px;
    width: 200px;
}
.line .el-button{
  margin-left: 30px;
  width: 120px;
}
</style>
