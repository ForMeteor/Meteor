<!--  -->
<template>
    <div class="main_status">
        <el-button type="primary" @click="nav">主要按钮</el-button>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: '',
  data () {
    return {
      navShow: true
    }
  },

  components: {},

  computed: {
    ...mapGetters([
      'sideNav',
      'appName'
    ])
  },

  mounted () {},

  methods: {
    ...mapMutations([
      'changeSideNav' // 将 `this.changeSideNav()` 映射为 `this.$store.commit('changeSideNav')`

    ]),
    nav () {
      this.changeSideNav()
    }
  }
}

</script>
<style  scoped>
.main_status{
    width: 100%;
    height: 60px;
    background: #9E9EC5;
}
</style>
