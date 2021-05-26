<!-- 图片上传相关 -->
<template>
  <div>
    <div style="margin-top:100px"></div>
    <form action="/file/upload" method="post" enctype="multipart/form-data">
        <h2>单图上传</h2>
        <input type="file" name="logo">
        <input type="submit" value="提交">
    </form>
    <el-button @click="getList">获取文件列表</el-button>
    <el-button @click="getTxt">下载</el-button>
    <div style="margin-top:20px"></div>
    <el-button @click="getTest">get</el-button>
    <div style="margin-top:20px"></div>
    <input type="file" ref="uploadori" name='logo' multiple  @change="addThings($event)">
    <el-upload
        action="/file/upload"
        :data="imgData"
        :show-file-list="false"
        :on-success="thumbnailSuccess"
        :on-error="thumbnailError"
        :before-upload="thumbnailLoad"
        accept=".png,.jpg"
        class="avatar-uploader"
        >
        <img v-if="imageUrl.url" :src="imageUrl.url" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import { getFile, uploadFile } from '@/api/file'
import { adminTable } from '@/api/admin'
export default {
  name: '',
  data () {
    return {
      imageUrl: {
        url: '',
        file: ''
      },
      imgData: null,
    }
  },

  components: {},

  computed: {},

  mounted () {
    // URL.createObjectURL()
    //  thumbnailSuccess(res, file, fileList){
    //     console.log(res)
    //     console.log(res.key)
    //     this.imageUrl.url = URL.createObjectURL(file.raw);
    //     this.imageUrl.file = res.key;
    //     this.dataList.thumbnail = res.key
    //     this.$message({
    //         center: true,
    //         message: "图片上传成功",
    //         type: "success",
    //     });
    // }
    // http://47.97.73.43:3006/sql/admintable
    // http://47.97.73.43:3006/file/fileTest
  },

  methods: {
    getTest () {
      location.href = 'http://47.97.73.43:3006/file/fileDown?name=liyu'
      // http://47.97.73.43:3006/file/fileList
    },
    getList () {},
    getTxt () {
      const data = 'dog'
      getFile(data)
      // adminTable().then(() => {
      //   console.log('done')
      // }).catch()
    },
    addThings (e) {
      console.log(e)
      const thing = this.$refs.uploadori
      console.log(thing.files)
      let formData = new FormData()
      formData.append('file', thing.files[0])
      console.log(formData)
      uploadFile(formData).then(() => {
        console.log('done')
      }).catch()

      // console.log(thing.files[0].naturalHeight)
      // console.log(thing.files[0].naturalWidth)
      // const reader = new FileReader()
      // reader.readAsDataURL(thing)
      // reader.onload = function () {
      //   let img = new Image()
      //   img.src = reader.result
      //   console.warn(img)
      // }
    },
    thumbnailSuccess (res, file) {
      console.log(res)
      console.log(res.key)
      this.imageUrl.url = URL.createObjectURL(file.raw)
      this.imageUrl.file = res.key
    },
    thumbnailError () {},
    thumbnailLoad (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}

</script>
<style  scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>