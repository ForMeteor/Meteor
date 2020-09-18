<!--  -->
<template>
  <div class="auc_mask">
    <div class="auc_back">
        <div class="auc_head">
            <div class="auc_mark">新增竞价项目</div>
            <div class="auc_button auc_cancel" @click="cancel">取消</div>
            <div class="auc_button auc_store">保存</div>
            <div class="auc_button auc_sub">提交审核</div>
        </div>
        <div class="auc_main">
            <div class="auc_step">
                <div class="step">
                    <div class="step_rate step_1" @click="changeStep(1)">
                        <div :class="{'rounded':stepRate==1,'round':stepRate!=1}"></div>
                        <span class="text">基本信息</span>
                        <i v-if="tabAFinish" class="el-icon-success step_icon div_success"></i>
                        <i v-if="!tabAFinish" class="el-icon-warning step_icon div_fail"></i>
                    </div>
                    <div class="step_rate step_2" @click="changeStep(2)">
                        <div :class="{'rounded':stepRate==2,'round':stepRate!=2}"></div>
                        <span class="text">竞价规则</span>
                        <i v-if="tabBFinish" class="el-icon-success step_icon div_success"></i>
                        <i v-if="!tabBFinish" class="el-icon-warning step_icon div_fail"></i>
                    </div>
                    <div class="step_rate step_3" @click="changeStep(3)">
                        <div :class="{'rounded':stepRate==3,'round':stepRate!=3}"></div>
                        <span class="text">商品详情</span>
                        <i v-if="tabCFinish" class="el-icon-success step_icon div_success"></i>
                        <i v-if="!tabCFinish" class="el-icon-warning step_icon div_fail"></i>
                    </div>
                </div>
            </div>
            <div class="auc_content">
                <div class="auc_title">
                    <el-row>
                        <el-col :span="4">项目编号:</el-col>
                        <el-col :span="8">238972398236276</el-col>
                        <el-col :span="4">竞价状态:</el-col>
                        <el-col :span="8">暂存</el-col>
                    </el-row>
                </div>
                <div class="auc_form" v-show="stepRate==1">
                    <el-row>
                        <el-col :span="4"><span class="must">销售单位:</span></el-col>
                        <el-col :span="18">
                            <el-select v-model="dataList.a"  placeholder="请选择" @change="saleCompany">
                                <el-option label="餐厅名" value="1"></el-option>
                                <el-option label="订单号" value="2"></el-option>
                                <el-option label="用户电话" value="3"></el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span class="must">养殖地址:</span></el-col>
                        <el-col :span="18">
                            <div class="div_holder">{{dataList.b || '选择销售单位后自动带出'}}</div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span class="must">物料类型:</span></el-col>
                        <el-col :span="18">
                            <el-select v-model="dataList.c"  placeholder="请选择">
                                <el-option label="餐厅名" value="1"></el-option>
                                <el-option label="订单号" value="2"></el-option>
                                <el-option label="用户电话" value="3"></el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span class="must">物料名称:</span></el-col>
                        <el-col :span="18">
                            <el-select v-model="dataList.d"  placeholder="请选择" @change="wlName">
                                <el-option label="餐厅名" value="1"></el-option>
                                <el-option label="订单号" value="2"></el-option>
                                <el-option label="用户电话" value="3"></el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span class="must">物料编码:</span></el-col>
                        <el-col :span="18">
                            <div class="div_holder">{{dataList.e || '选择物料名称后自动带出'}}</div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">联系人:</el-col>
                        <el-col :span="6"><el-input v-model="dataList.f" placeholder="请输入内容"></el-input></el-col>
                        <el-col :span="2">&nbsp;</el-col>
                        <el-col :span="4">联系名称:</el-col>
                        <el-col :span="6"><el-input v-model="dataList.g" placeholder="请输入内容"></el-input></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">备注:</el-col>
                        <el-col :span="18">
                            <el-input v-model="dataList.h" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                </div>
                <div class="auc_form" v-show="stepRate==2">
                    <el-row>
                        <el-col :span="5"><span class="must">竞价开始时间:</span></el-col>
                        <el-col :span="6">
                            <el-date-picker
                            v-model="dataList.beginA"
                            type="date"
                            style="width:100%"
                            placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="1">&nbsp;</el-col>
                        <el-col :span="5"><span class="must">竞价结束时间:</span> </el-col>
                        <el-col :span="6">
                            <el-date-picker
                            v-model="dataList.endA"
                            type="date"
                            style="width:100%"
                            placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5"><span class="must">起拍价:</span></el-col>
                        <el-col :span="6"><el-input v-model="dataList.f" placeholder="请输入内容"></el-input></el-col>
                        <el-col :span="1">&nbsp;</el-col>
                        <el-col :span="5"><span class="must">起拍价公布时间:</span> </el-col>
                        <el-col :span="6">
                            <span class="div_holder">开拍前</span>
                            <el-input v-model="dataList.pubTime" style="margin-left:5px;padding:0;width:30px;outline:none;"></el-input>
                            <span style="margin-left:5px;display:inline-block">分钟</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5"><span class="must">加价幅度:</span></el-col>
                        <el-col :span="6"><el-input v-model="dataList.f" placeholder="请输入内容"></el-input></el-col>
                        <el-col :span="1">&nbsp;</el-col>
                        <el-col :span="5"><span class="must">总数量:</span> </el-col>
                        <el-col :span="6"><el-input v-model="dataList.g" placeholder="请输入内容"></el-input></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5"><span class="must">基础单价:</span></el-col>
                        <el-col :span="6"><el-input v-model="dataList.f" placeholder="请输入内容"></el-input></el-col>
                        <el-col :span="1">&nbsp;</el-col>
                        <el-col :span="5"><span class="must">标重:</span> </el-col>
                        <el-col :span="6"><el-input v-model="dataList.g" placeholder="请输入内容"></el-input></el-col>
                    </el-row>
                    <!-- select + input以上 -->
                    <el-row>
                        <el-col :span="5"><span class="must">保证金:</span></el-col>
                        <el-col :span="6"><el-input v-model="dataList.f" placeholder="请输入内容"></el-input></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5"><span class="must">交割开始时间:</span></el-col>
                        <el-col :span="6">
                            <el-date-picker
                            v-model="dataList.beginB"
                            type="date"
                            style="width:100%"
                            placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="1">&nbsp;</el-col>
                        <el-col :span="5"><span class="must">交割结束时间:</span> </el-col>
                        <el-col :span="6">
                            <el-date-picker
                            v-model="dataList.endB"
                            type="date"
                            style="width:100%"
                            placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6"><span class="must">竞价中公开竞价排名:</span></el-col>
                        <el-col :span="5">
                            <el-switch
                            v-model="dataList.ifInPublic"
                            active-color="#13ce66"
                            inactive-color="#9B9B9B">
                            </el-switch>
                        </el-col>
                        <el-col :span="1">&nbsp;</el-col>
                        <el-col :span="6"><span class="must">竞价后公布中标信息:</span> </el-col>
                        <el-col :span="5">
                            <el-switch
                            v-model="dataList.ifPublicInfo"
                            active-color="#13ce66"
                            inactive-color="#9B9B9B">
                            </el-switch>
                        </el-col>
                    </el-row>
                    <!-- 是否公开竞价影响展示 -->
                    <el-row>
                        <el-col :span="5"><span class="must">是否公开竞价:</span></el-col>
                        <el-col :span="6">
                            <el-switch
                            v-model="dataList.ifPublic"
                            active-color="#13ce66"
                            inactive-color="#9B9B9B">
                            </el-switch>
                        </el-col>
                    </el-row>
                    <el-row v-if="dataList.ifPublic">
                        <el-col :span="5"><span class="must">是否报名竞价:</span></el-col>
                        <el-col :span="6">
                            <el-switch
                            v-model="dataList.ifSign"
                            active-color="#13ce66"
                            inactive-color="#9B9B9B">
                            </el-switch>
                        </el-col>
                        <el-col :span="1">&nbsp;</el-col>
                        <el-col :span="6" v-if="dataList.ifSign"><span class="must">报名截止时间:</span> </el-col>
                        <el-col :span="5" v-if="dataList.ifSign"><el-input v-model="dataList.g" placeholder="请输入内容"></el-input></el-col>
                    </el-row>
                    <el-row v-if="!dataList.ifPublic">
                        <el-col :span="5"><span class="must">参拍客户范围:</span></el-col>
                        <el-col :span="6">
                            <el-select v-model="dataList.clientRange" @change="range">
                             <el-option
                                v-for="state in clientRangeOption"
                                :key="state.value"
                                :value="state.value"
                                :label="state.label"
                            ></el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="1">&nbsp;</el-col>
                        <el-col :span="6" v-if="dataList.clientRange==1"><span class="must">选择客户所在地区:</span> </el-col>
                        <el-col :span="5" v-if="dataList.clientRange==1"><el-input v-model="dataList.g" placeholder="请输入内容"></el-input></el-col>
                        <el-col :span="6" v-if="dataList.clientRange==2"><span class="must">选择会员:</span> </el-col>
                        <el-col :span="5" v-if="dataList.clientRange==2"><el-input v-model="dataList.g" placeholder="请输入内容"></el-input></el-col>
                    </el-row>
                </div>
                <div class="auc_form" v-show="stepRate==3">
                    <el-row>
                        <el-col :span="4"><span class="must">商品名称:</span></el-col>
                        <el-col :span="18">
                            <el-input v-model="dataList.f" placeholder="请输入商品名称"></el-input>
                        </el-col>
                    </el-row>
                    <!-- upload -->
                    <el-row>
                        <el-col :span="4"><span class="must">商品缩略图:</span></el-col>
                        <el-col :span="18">
                            <el-input v-model="dataList.f" placeholder="请输入商品名称"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span class="must">商品相册:</span></el-col>
                        <el-col :span="18">
                            <el-input v-model="dataList.f" placeholder="请输入商品名称"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">商品短视频:</el-col>
                        <el-col :span="18">
                            <el-input v-model="dataList.f" placeholder="请输入商品名称"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">商品详情:</el-col>
                        <el-col :span="18">
                            <el-input v-model="dataList.f" placeholder="请输入商品名称"></el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'auction',
  data () {
    return {
      stepRate: 1,
      ifPublicOption: [],
      clientRangeOption: [
        {
          label: '指定地区',
          value: '1'
        },
        {
          label: '指定会员',
          value: '2'
        }
      ],
      dataList: {
        a: null,
        b: null,
        c: null,
        d: null,
        e: null,
        // -
        beginA: null,
        endA: null,
        aa3: null,
        pubTime: null,
        aa5: null,
        aa6: null,
        aa7: null,
        aa8: null,
        aa9: null,
        aa10: null,
        beginB: null,
        endB: null,
        ifPublicInfo: true,
        ifInPublic: true,
        ifSign: false,
        ifPublic: true,
        clientRange: null,
        // -
        bb1: null,
        bb2: null,
        bb3: null,
        bb4: null,
        bb5: null
      }
    }
  },

  components: {},

  computed: {
    // 1 2 3
    tabAFinish () {
      return this.dataList.a && this.dataList.b && this.dataList.c && this.dataList.d && this.dataList.e
    },
    tabBFinish () {
      return false
    },
    tabCFinish () {
      return false
    }
  },
  created () {
  },
  mounted () {
    //   编辑进入
    if ( false ) {
      this.dataList = Object.assign({},
        {
          a: 1,
          b: 1,
          c: 1,
          d: 1,
          e: 1
        })
    }
  },

  methods: {
    changeStep (v) {
      this.stepRate = v
    },
    cancel (v) {
      this.$emit('step', v)
    },
    // -
    saleCompany () {
      this.dataList.b = this.dataList.a + this.dataList.a
    },
    wlTpye () {
    },
    wlName () {
      this.dataList.e = this.dataList.d + this.dataList.d
    },
    range (v) {
      console.log(v)
      console.log(this.dataList.clientRange)
    },
    // -

    // -
  }
}

</script>
<style  scoped>
*{
    margin: 0;
    padding: 0;
}
.el-col{
    text-align: left;
    height: 40px;line-height: 40px;
    margin-bottom: 10px;
}
.el-select{
    width: 100%;
}
.div_holder{
    color:#CDD0D7;
}
.div_success{
    color: green
}
.div_fail{
    color: #F56C6C;
}
.must{
  /* margin-right: 5px; */
}
.must::before{
  content: "*";
  color:#F56C6C;
  margin-right: 0px;
}
/* --------------- */
.auc_mask{
    position: absolute;
    top: 0;left: 0;
    bottom: 0;;right: 0;
    background: rgba(183,184,186,0.6);
    z-index: 500;
}
.auc_back{
    position: absolute;
    top: 0;left: 0;margin: auto;
    bottom: 0;;right: 0;
    width: 760px;
    height:540px;
    background: #fff;
    border:1px solid black;
}
.auc_head{
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
}
.auc_mark{
    position: absolute;
    top: 0;left: 10px;
}
.auc_button{}
.auc_button:hover{
    cursor: pointer;
}
.auc_cancel{
    position: absolute;
    right: 140px;
}
.auc_store{
    position: absolute;
    right: 100px;
}
.auc_sub{
    position: absolute;
    right: 20px;
}
.auc_main{
    width: 100%;
    height: 360px;
    display: flex;
}
.auc_step{
    width: 120px;
    height: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
}
.auc_content{
    flex: 1;
    height: 100%;
}
.auc_form{
    width: 100%;
    height: 460px;
    /* overflow: hidden;
    overflow-y: auto; */
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
.step_icon{
    position: absolute;
    right: -1px;
    top: 8px;
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
.auc_title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    /* display: flex; */
}
.auc_title1{
    flex: 2;
    position: relative;
}
.auc_title2{
    position: relative;
    flex: 1;
}
.text_right{
    position: absolute;
    left: 5px;
}
.text_left{
    position: absolute;
    left: 75px;
}
</style>
