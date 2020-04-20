<!--  -->
<template>
    <el-row :gutter="24">
    <!-- 详情页左部著内容 -->
    <el-col :md="16" style="margin-bottom: 15px;">
      <!-- 工单详情 -->
      <el-card shadow="never" v-loading="loadingPage" style="margin-bottom: 15px;">
        <div slot="header">
          <el-page-header>
            <div slot="content" class="card-title">
              <span>工单号&nbsp;&nbsp;{{ detail.order_info.order_no }}</span>
              <el-tag v-if="detail.order_info.status == '1'">待处理</el-tag>
              <el-tag type="success" v-else-if="detail.order_info.status == '2'">处理中</el-tag>
              <el-tag type="info" v-else-if="detail.order_info.status == '3' || detail.order_info.status == '5' || detail.order_info.status == '6'">已归档</el-tag>
              <el-tag type="warning" v-else-if="detail.order_info.status == '4'">已忽略</el-tag>
            </div>
          </el-page-header>
        </div>
        <div class="content_view">
          <div class="content_line">
            <div class="content_name">举报时间：</div>
            <div class="content_right">{{ detail.order_info.report_time }}</div>
          </div>
          <div class="content_line">
            <div class="content_name">举报方式：</div>
            <div class="content_right">
              <span v-if="detail.order_info.report_type == '0'">
                {{ detail.order_info.report_name }}&nbsp;{{ detail.order_info.report_phone }}
              </span>
              <span v-if="detail.order_info.report_type == '1'">
                匿名
              </span>
            </div>
          </div>
          <div class="content_line">
            <div class="content_name">举报内容：</div>
            <div class="content_right">{{ detail.order_info.report_content }}</div>
          </div>
          <div class="content_line" v-if="detail.order_info.files && detail.order_info.files.length > 0">
            <div class="content_name">举报图片：</div>
            <div class="content_right">
              <block v-for="(item, index) in detail.order_info.files" :key="index">
                <el-image
                  class="img_img"
                  fit="fill"
                  :src="item"
                  @click="handleImgClick(detail.order_info.files)"
                ></el-image>
              </block>
            </div>
          </div>
        </div>
        <div v-if="(detail.order_info.status == '3' || detail.order_info.status == '5' || detail.order_info.status == '6') && detail.order_info.handle_result">
          <el-divider content-position="left"></el-divider>
          <div class="content_line">
            <div class="content_name">归档信息：</div>
            <div class="content_right">{{ detail.order_info.handle_result }}</div>
          </div>
        </div>
        <el-divider content-position="left"></el-divider>
        <!-- 工单操作 -->
        <div class="bottom_view">
          <el-button
            v-if="permissionComplate && detail.order_info.status == '2'"
            type="success"
            size="small"
            :disabled="loading_opt"
            @click="handleOpt('over')"
            >归档</el-button
          >
          <el-button
            v-if="permissionDispatch && ( detail.order_info.status == '1' || detail.order_info.status == '2' )"
            type="primary"
            size="small"
            :disabled="loading_opt"
            @click="handleOpt('trans')"
            >分配</el-button
          >
          <el-button
            v-if="permissionIgnore && detail.order_info.status == '1'"
            type="info"
            size="small"
            :disabled="loading_opt"
            @click="handleOpt('dis')"
            >忽略</el-button
          >
        </div>

        <!-- 操作弹出框 -->
        <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
          <el-form
            ref="dataForm"
            :rules="rule"
            :model="temp"
            label-position="top"
            label-width="100px"
            :style="{width:(dialogStatus != 'trans' ? '440px' : 'auto')}"
            style="margin-left:40px"
          >
            <block v-if="dialogStatus == 'trans'">
              <el-form-item prop="dept_ids">
                <el-checkbox-group v-model="temp.dept_ids">
                  <el-checkbox :key="dindex" v-for="( deptIn, dindex ) in deptList" name="dept_ids" :disabled="deptIn.status == '1'" :label="deptIn.dept_id">{{deptIn.dept_name}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </block>
            <block v-else-if="dialogStatus == 'over'">
              <div class="content_line">
                <div class="content_name">归档类型：</div>
                <div class="content_right">
                  <el-form-item prop="status">
                    <el-select v-model="temp.status" placeholder="请选择归档类型" filterable>
                      <el-option label="查实归档" value="3"></el-option>
                      <el-option label="不实归档" value="5"></el-option>
                      <el-option label="未果归档" value="6"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>
              <div class="content_line">
                <div class="content_name">处理结果：</div>
                <div class="content_right">
                  <el-form-item prop="handle_result">
                    <el-input
                      v-model.trim="temp.handle_result"
                      :autosize="{ minRows: 8, maxRows: 16 }"
                      type="textarea"
                      maxlength="600"
                      clearable
                      placeholder="归档"
                    />
                  </el-form-item>
                </div>
              </div>
            </block>
            <block v-else-if="dialogStatus == 'dis'">
              <el-form-item prop="disagree">
                <span>是否忽略工单？</span>
              </el-form-item>
            </block>
            <block v-else-if="dialogStatus == 'again'">
              <el-form-item prop="again">
                <span>是否打回重新调查？</span>
              </el-form-item>
            </block>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button
              type="primary"
              :loading="loading_submit"
              @click.native.prevent="reqSubmit(dialogStatus)"
              >提交</el-button
            >
          </div>
        </el-dialog>
        <el-dialog :visible.sync="imgDialogVisible" title="预览" modal close-on-click-modal>
          <el-carousel :autoplay="false" arrow="always" height="500px">
            <el-carousel-item v-for="item in previewImgs" :key="item">
              <el-image class="dialog_img" :src="item" fit="contain" />
            </el-carousel-item>
          </el-carousel>
        </el-dialog>
      </el-card>
      <!-- 工单调查结果 -->
      <el-card shadow="never" v-show="detail.result_info.length > 0" :body-style="{ padding: '24px' }" v-loading="loadingPage" style="margin-bottom: 24px;">
        <el-tabs @tab-click="handleClick">
          <el-tab-pane :key="dindex" v-for="(dept, dindex) in detail.result_info" :label="dept.dept_name">
            <div class="content_view dep_view">
              <div class="content_line">
                <div class="content_name content_name_long" style="line-height: 32px">部门处理状态：</div>
                <div class="content_right"  v-if="dept.dept_result" style="line-height: 32px">
                  <el-tag v-if="dept.dept_result.status == '1'">待分配</el-tag>
                  <el-tag type="success" v-else-if="dept.dept_result.status == '2'">处理中</el-tag>
                  <el-tag type="info" v-else-if="dept.dept_result.status == '3'">已归档</el-tag>
                </div>
              </div>
              <div class="content_line">
                <div class="content_name content_name_long">部门处理标题：</div>
                <div class="content_right">{{dept.dept_result.title || '暂无处理标题'}}</div>
              </div>
              <div class="content_line">
                <div class="content_name content_name_long">部门处理结果：</div>
                <div class="content_right">{{dept.dept_result.result || '暂无处理结果'}}</div>
              </div>
              <div class="content_line" v-if="dept.dept_result.files &&dept.dept_result.files.length > 0">
                <div class="content_name content_name_long">附件：</div>
                <div class="content_right">
                  <block class="down_files" v-for="(file, index) in dept.dept_result.files" :key="index">
                    <el-link
                      type="primary"
                      target="_blank"
                      :href="file.file_path"
                      icon="el-icon-tickets"
                      @click.native.prevent="viewTxt($event)"
                      :data-filename="file.file_name"
                    >{{file.file_name}}</el-link>
                  </block>
                </div>
              </div>
            </div>
            <div class="per_list">
              <div class="per_outer" :key="oindex" v-for="(owner, oindex) in dept.dept_result.owner_result">
                <div class="per_left">
                  <div class="per_avatar">
                    <p>{{owner.investigator_name}}</p>
                  </div>
                  <div class="per_name">
                    <p>{{owner.investigator_id}}</p>
                  </div>
                </div>
                <div class="per_right">
                  <div class="content_view">
                    <div class="content_line per_result_top">
                      <div class="content_name">调查状态：</div>
                      <div class="content_right">
                        <span v-if="owner.result_status == '1'" style="color:#5EC52D;">已提交</span>
                        <span v-if="owner.result_status == '0'" style="color:#F56C6C;">已打回</span>
                      </div>
                      <el-button
                        v-if="permissionRevoke && owner.result_status == '1' && detail.order_info.status == '2'"
                        type="primary"
                        size="small"
                        :disabled="loading_opt"
                        @click="handleOpt('again',owner.result_id)"
                        >重新调查</el-button
                      >
                    </div>
                    <el-divider content-position="left"></el-divider>
                    <div class="content_line">
                      <div class="content_name">调查标题：</div>
                      <div class="content_right">{{ owner.title || '暂未上传' }}</div>
                    </div>
                    <div class="content_line">
                      <div class="content_name">调查结果：</div>
                      <div class="content_right">{{ owner.result || '暂未上传' }}</div>
                    </div>
                    <div class="content_line">
                      <div class="content_name">附件：</div>
                      <div v-if="owner.files.length == 0" class="content_right">暂未上传</div>
                      <div v-else class="content_right">
                        <block class="down_files" v-for="ofile in owner.files" :key="ofile">
                          <el-link
                            type="primary"
                            target="_blank"
                            :href="ofile.file_path"
                            icon="el-icon-tickets"
                            @click.native.prevent="viewTxt($event)"
                            :data-filename="ofile.file_name"
                          >{{ofile.file_name}}</el-link>
                        </block>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
    <!-- 详情页右部流水 -->
    <el-col :sm="24" :md="8" :xl="8">
      <el-card shadow="never" v-loading="loadingPage" class="log">
        <div slot="header" class="clearfix" style="font-weight: bold;color: #444;">
          操作日志流水
        </div>
        <el-tabs type="card">
          <!-- 工单流水 -->
          <el-tab-pane label="工单流水">
            <el-timeline style="padding: 0 0 0 4px;">
              <el-timeline-item v-if="detail.order_log.center_log.length==0">
                <div slot="dot">
                  <div class="dottt"></div>
                </div>
                <span>暂无流水</span>
              </el-timeline-item>
              <el-timeline-item v-for="(clog, index) in detail.order_log.center_log" :key="index" :timestamp="clog.log_time">
                <div slot="dot">
                  <div class="dottt"></div>
                </div>
                <span>{{ clog.descr }}</span>
              </el-timeline-item>
            </el-timeline>
          </el-tab-pane>
          <!-- 部门流水 -->
          <el-tab-pane label="部门流水">
            <el-timeline style="padding: 0 0 0 4px;">
              <el-timeline-item v-if="detail.order_log.dept_log.length==0">
                <div slot="dot">
                  <div class="dottt"></div>
                </div>
                <span>暂无流水</span>
              </el-timeline-item>
              <el-timeline-item v-for="(dlog, index) in detail.order_log.dept_log" :key="index" :timestamp="dlog.log_time">
                <div slot="dot">
                  <div class="dottt"></div>
                </div>
                <span>{{ dlog.descr }}</span>
              </el-timeline-item>
            </el-timeline>
          </el-tab-pane>
          <!-- 调查员流水 -->
          <el-tab-pane label="调查员流水">
            <el-timeline style="padding: 0 0 0 4px;">
              <el-timeline-item v-if="detail.order_log.owner_log.length==0">
                <div slot="dot">
                  <div class="dottt"></div>
                </div>
                <span>暂无流水</span>
              </el-timeline-item>
              <el-timeline-item v-for="(plog, index) in detail.order_log.owner_log" :key="index" :timestamp="plog.log_time">
                <div slot="dot">
                  <div class="dottt"></div>
                </div>
                <span>{{ plog.descr }}</span>
              </el-timeline-item>
            </el-timeline>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      loadingPage: false
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.loadingPage = true
  },

  methods: {}
}

</script>
<style  scoped>
* {
  font-size: 12px;
}
/deep/ .el-card__header {
  height: 50px;
  padding: 13px 20px 13px 24px;
}
/deep/ .el-card__body {
  padding: 18px 20px 14px 24px;
}
.card-title {
  font-size: 12px;
  font-weight: bold;
  /* height: 50px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/deep/ .el-page-header__content{
  flex:1;
}
/* 工单分配状态tag */
.el-tag {
  width: 60px;
  height: 24px;
  line-height: 20px;
  text-align: center;
  font-weight: normal;
}
.dottt {
  height: 14px;
  width: 14px;
  background: #fff;
  border: 3px solid #46a0fc;
  border-radius: 100%;
  margin: 1px 0 0 -2px;
}
.title_tag {
  margin-right: 12px;
}
.content_line {
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;
}
.content_line:last-child {
  margin-bottom: 0;
}
.content_name {
  font-size: 12px;
  width: 4.5rem;
  color: #868686;
  line-height: 24px;
}
.content_name_long {
  font-size: 12px;
  width: 6.5rem;
  color: #868686;
  line-height: 24px;
}
.content_right {
  font-size: 12px;
  line-height: 24px;
  flex: 1;
  word-break: break-all;
  color: #333;
}
.content_text {
  flex: 1;
  color: #909399;
  word-break: break-all;
}
.img_img {
  margin: 0 12px 7px 0;
  width: 150px;
  height: 150px;
  border-radius: 4px;
}
.comment_star {
  margin-bottom: 6px;
}
.bottom_view {
  text-align: right;
}
.bottom_view .el-button {
  width: 80px;
  height: 32px;
}
.water_remark {
  font-size: 14px;
  color: #909399;
  word-break: break-all;
  word-wrap: break-word;
  margin-top: 6px;
}
.dialog_img {
  width: 100%;
  height: 100%;
}
.water_imgs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.water_img {
  margin-right: 6px;
  width: 60px;
  height: 60px;
  border-radius: 4px;
}
.el-button {
  min-width: 80px;
}
/* 调查结果显示内容 */
.down_files{
  margin-right:16px;
}
.dep_view{
  border-bottom: 1px solid #EDEEF2;
  padding-bottom: 20px;
}
.per_outer{
  padding-top: 24px;
  display: flex;
}
.per_right{
  background: #f6fafd;
  padding:15px;
  flex:1;
}
.per_right .el-divider--horizontal{
  margin: 12px 0 !important;
}
.per_result_top .content_name,.per_result_top .content_right{
  line-height: 32px;
}
.per_avatar{
  width:48px;
  height:48px;
  margin:0 15px;
  border-radius: 24px;
  background: #3296fa;
  display:flex;
}
.per_avatar div{
  align-self: center;
  margin: 0 auto;
}
.per_avatar p {
  margin: 0;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  color:#fff;
  width: 100%;
  align-self: center;
  word-wrap: break-word;
  padding: 0 2px;
}
.per_name {
  width: 70px;
  margin: 0 auto;
}
.per_name p {
  margin: 10px 0 0 0;
  text-align: center;
  font-size: 14px;
  word-wrap: break-word;
  width: 100%;
}
/* 日志流水相关 */
.log >>> .el-card__header {
  padding: 16px 20px;
}
.log >>> .el-card__body {
  padding: 9px 20px;
}
.log >>> .el-tabs__header {
  border-bottom: 0;
  margin-bottom: 20px;
}
.log >>> .el-tabs__nav-wrap, .log >>> .el-tabs__nav-scroll, .log >>> .el-tabs__nav {
  width: 100%;
}
.log >>> .el-tabs__nav {
  border: 1px solid #359BFF;
  border-radius: 2px;
}
@media screen and (min-width: 992px){
  .log >>> .el-tabs__header {
    display: flex;
    justify-content: center;
  }
}
@media screen and (max-width: 576px){
  .log >>> .el-tabs__header {
    display: flex;
    justify-content: center;
  }
}
.log >>> .el-tabs__item {
  width: 33.3%;
  height: 30px;
  line-height: 30px;
  border-bottom: 0;
  color: #359bff;
  font-size: 12px;
  padding: 0 !important;
  text-align: center;
}
.log >>> .el-tabs__item.is-active {
  color: #fff;
  background: #359bff;
}
.dottt {
  height: 14px;
  width: 14px;
  border-radius: 100%;
  margin: 0 0 0 -2px;
}
.log ul>li:first-child .dottt{
  background: #fff;
  border: 3px solid #46a0fc;
}
.log ul>li:not(:first-child) .dottt {
  background:#c1cad4;
  border: 3px solid #e1e8f4;
}
.log ul>li >>> .el-timeline-item__content {
  color:#333;
}
.log ul>li >>> .el-timeline-item__timestamp {
  color: #AAB1BB;
  font-size: 12px;
}
.log ul>li >>> .el-timeline-item__timestamp.is-bottom {
  margin-top: 5px;
}
.log ul>li:first-child >>> .el-timeline-item__content>span {
  color:#3296fa;
}
</style>

