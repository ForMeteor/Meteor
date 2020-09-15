<!--  -->
<template>
    <div class="main_status">
      <i class="el-icon-menu ctrl" @click="nav"></i>
      <div class="menuList" @click="home"></div>
      <div class="info" @click="login"></div>
      <div class="headPic"></div>
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
    },
    home () {
      this.$router.push('home')
    },
    login () {
      this.$router.push('login')
    }
  }
}

</script>
<style  scoped>
.main_status{
    width: 100%;
    height: 60px;
    background: #9E9EC5;
    display: flex;
    align-items: center;
}
.ctrl{
  width: 40px;
}
.menuList{
  flex: 1;
  height: 100%;
  background:cyan
}
.info{
  width: 80px;
  height: 100%;
  background:chocolate
}
.headPic{
  width: 60px;
  height: 40px;
  background: brown;
}
</style>
