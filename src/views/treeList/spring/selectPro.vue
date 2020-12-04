<!--  -->
<template>
  <div>
    <el-input v-model="info.name"></el-input>
    <el-input v-model="info.size"></el-input>
    <!-- <el-select v-mo></el-select> -->
  </div>
</template>

<script>
export default {
  name: '',
  props: ['info'],
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style  scoped>
.el-input{
  width: 300px;
}
</style>
