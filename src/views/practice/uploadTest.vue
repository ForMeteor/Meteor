<!-- 图片上传相关 -->
<template>
  <div>
    <div style="margin-top:100px"></div>
    <el-button @click="goLogin">login</el-button>
    <el-button @click="getTxt">下载</el-button>
    <div style="margin-top:20px"></div>
    <el-button @click="postTest">post</el-button>
    <el-button @click="getTest">get</el-button>
    <div style="margin-top:20px"></div>
    <input type="file" ref="uploadori" multiple  @change="addThings($event)">
    <el-upload
      class="avatar-uploader"
      action="http://47.97.73.43:3006/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
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
      imageUrl: ''
    }
  },

  components: {},

  computed: {},

  mounted () {
    // http://47.97.73.43:3006/sql/admintable
    // http://47.97.73.43:3006/file/fileTest
  },

  methods: {
    getTest () {
      location.href = 'http://47.97.73.43:3006/file/fileDown'
      // getFile({
      //   imgName: '33'
      // }).then(() => {
      //   console.log('done')
      // }).catch()
    },
    postTest () {
      uploadFile({
        a: 1,
        b: 2
      }).then(() => {
        console.log('done')
      }).catch()
    },
    goLogin () {
      this.$router.push({
        name: 'login',
        query: {
          redirect: 'uploadTest'
        }
        // name: r.name
      })
    },
    getTxt () {
      getFile().then(() => {
        console.log('done')
      }).catch()
      adminTable().then(() => {
        console.log('done')
      }).catch()
    },
    addThings (e) {
      console.log(e)
      const thing = this.$refs.uploadori
      console.log(thing.files)
      let formData = new FormData()
      formData.append('file', thing.files[0]);
      console.log(formData)
      uploadFile(formData).then(()=>{
        console.log('done')
      }).catch()
      //post

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
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log(this.imageUrl)
    },
    beforeAvatarUpload (file) {
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