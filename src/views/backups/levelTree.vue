<!--  -->
<template>
  <div>
      <el-button @click="dialogVisible = true">新增</el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <div class="line">
            <div class="lineTitle">报表名称/子报表名称:</div>
            <el-select v-model="addList.name" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="mainLine">
            <div class="mainLine"></div>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <div class="mainLine"></div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
  </div>
</template>

<script>
export default {
  name : 'levelTree',
  data () {
    return {
        dialogVisible: false,
        options:[{
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
        addList:{
            name: null,
            line: []
        },
        setData:[],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style  scoped>
.line{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
}
.lineTitle{
    line-height: 40px;
}
.el-select{
    margin-left: 20px;
}
.mainLine{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
}
</style>