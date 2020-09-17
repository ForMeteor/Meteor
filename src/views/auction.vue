<!--  -->
<template>
  <div class="auc_back">
    <div class="auc_head">
        <div class="auc_mark"></div>
        <div class="auc_cancel">取消</div>
        <div class="auc_store">保存</div>
        <div class="auc_sub">提交审核</div>
    </div>
    <div class="auc_main">
        <div class="auc_step">
            <div class="step">
                <div class="step_rate step_1" @click="changeStep(1)">
                    <div :class="{'rounded':stepRate==1,'round':stepRate!=1}"></div>
                    <span class="text">基本信息</span>
                </div>
                <div class="step_rate step_2" @click="changeStep(2)">
                    <div :class="{'rounded':stepRate==2,'round':stepRate!=2}"></div>
                    <span class="text">竞价规则</span>
                </div>
                <div class="step_rate step_3" @click="changeStep(3)">
                    <div :class="{'rounded':stepRate==3,'round':stepRate!=3}"></div>
                    <span class="text">商品详情</span>
                </div>
            </div>
        </div>
        <div class="auc_content">
          <div class="auc_title"></div>
          <div class="auc_form" v-show="stepRate==1">1</div>
          <div class="auc_form" v-show="stepRate==2">2</div>
          <div class="auc_form" v-show="stepRate==3">3</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'auction',
  data () {
    return {
      stepRate: 1
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    changeStep (v) {
      this.stepRate = v
    }
  }
}

</script>
<style  scoped>
*{
    margin: 0;
    padding: 0;
}
.auc_back{
    position: absolute;
    top: 0;left: 0;margin: auto;
    bottom: 0;;right: 0;
    width: 600px;
    height:400px;
    border:1px solid black;
}
.auc_head{
    width: 100%;
    height: 40px;
    position: relative;
}
.auc_mark{
    position: absolute;
}
.auc_cancel{
    position: absolute;
}
.auc_store{
    position: absolute;
}
.auc_sub{
    position: absolute;
}
.auc_main{
    width: 100%;
    height: 360px;
    display: flex;
}
.auc_step{
    width: 110px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.auc_content{
    flex: 1;
    height: 100%;
    background: green;
}
.auc_title{
    width: 100%;
    height: 40px;
    background: silver;
}
.auc_form{
    width: 100%;
    height: 320px;
    background: orange
}
/* 进度条begin */
.step{
    width: 70px;
    height: 160px;
    position: relative;
    border-left: 2px solid #e5e5e5;
}
.step_rate{
    justify-content: space-between;
    width: 90px;font-size: 12px;
    height: 24px;line-height: 24px;
    position: absolute;
    left: -12px;
    background: #fff;
}
.step_rate:hover{
    cursor: pointer;
}
.step_1{
    top: 0;
}
.step_2{
    top: 50%;
}
.step_3{
    top:100%;
}
.round{
    position: absolute;left: 2px;top: 4px;
    width: 16px;height: 16px;
    border-radius: 50%;
    border: 1px solid #e5e5e5;
}
.rounded{
    position: absolute;left: 2px;top: 4px;
    width: 16px;height: 16px;
    border-radius: 50%;
    border: 1px solid #409EFF;
}
.rounded::after{
    position: absolute;
    left: 3px;top: 3px;
    content: "";
    background: #409EFF;
    border-radius: 50%;
    width: 10px;
    height: 10px;
}
.text{
    position: absolute;
    left: 30px;
    top:2px;
}
/* 进度条end */
</style>
