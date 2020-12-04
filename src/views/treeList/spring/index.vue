<!--  -->
<template>
  <div>
    <div class="wrap">
      <el-input v-model="info.name"></el-input>
      <el-select v-model="info.size">
        <el-option v-for="r in sizeList"
        :key="r.value"
        :label="r.label"
        :value="r.value"></el-option>
      </el-select>
    </div>
    <select-pro :info="info"></select-pro>
  </div>
</template>

<script>
import selectPro from './selectPro'
export default {
  name: 'spring',
  data () {
    return {
      info: {
        name: null,
        size: null
      },
      sizeList: [
        {
          value: 1,
          label: '甲'
        },
        {
          value: 2,
          label: '乙'
        },
        {
          value: 3,
          label: '丙'
        },
        {
          value: 4,
          label: '丁'
        }
      ]
    }
  },

  components: {
    selectPro
  },

  computed: {},

  mounted () {
    console.log('spring')
  },

  methods: {},
  beforeRouteLeave (to, from, next) {
    console.log(to)
  }
}

</script>
<style  scoped>
.el-input{
  width: 300px;
}
.wrap{
  display: inline-block;
}
</style>
