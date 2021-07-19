<!--  -->
<template>
  <div class="itemBox" v-if="addList" :style="{marginLeft: '20px'}">
    <div class="mainLine">
      <div class="subhead">{{titleOption[addList.level - 1]}}</div>
      <el-input v-model="addList.label" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-plus" size="mini" @click="addNext()" v-if="addList.level!=4">新增{{titleOption[addList.level]}}</el-button>
      <div class="listCtrl" @click="ctrlChange">
        <i class="el-icon-plus" v-show="!this.addList.childShow"></i>
        <i class="el-icon-minus" v-show="this.addList.childShow"></i>
      </div>
    </div>
    <list-line v-for="(r, index) in addList.children" :key="r.id" :addList="r" v-show="addList.childShow"></list-line>
  </div>
</template>

<script>
import Index from '../Pagination/index.vue'
export default {
  name: 'listLine',
  props: ['addList'],
  data () {
    return {
      titleOption: ['一级标题', '二级标题', '三级标题', '四级标题'],
    }
  },
  watch: {
    addList: function (n, o) {
      console.warn(n)
    }
  },
  components: {Index},

  computed: {},

  mounted () {},

  methods: {
    addNext () {
      this.addList.children.push({
        id: new Date().getTime(),
        label: '',
        level: this.addList.level + 1,
        childShow: true,
        children: []
      })
    },
    ctrlChange () {
      this.addList.childShow = !this.addList.childShow
    }
  }
}

</script>
<style  scoped>
.itemBox{
  width: 100%;
  height: 100%;
}
.mainLine{
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  margin-bottom: 20px;
  line-height: 40px;
}
.mainLine  .subhead{
  width: 100px;
  height: 40px;
  line-height: 40px;
  user-select: none;
}
.mainLine .el-input{
  margin-left: 30px;
  width: 160px;
}
.mainLine .el-button{
  margin-left: 30px;
  width: 120px;
}
.mainLine .listCtrl{
  margin-left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.listCtrl:hover{
  cursor: pointer;
}
.mainLine .nextLine{
  position: absolute;
}
</style>
