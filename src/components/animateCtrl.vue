<!--  -->
<template>
  <div>
    <div class="ctrl_box">
        <div class="ctrl_item" @click="theme">页面特效</div>
        <div class="ctrl_item" @click="robotMenu">猫猫咪咪</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animateCtrl',
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    theme () {
      this.$store.commit('changeBack')
    },
    robotMenu () {
      this.$store.commit('changeCat')
    }
  }
}

</script>
<style  scoped>
.ctrl_box{
  position: fixed;
  z-index: 500;
  right: 10px;top: 5px;
  width: 100px;
  user-select: none;
}
.ctrl_item{
  border-radius: 5px;
  width: 100px;
  border: 1px solid #e5e5e5;
  height: 20px;line-height: 20px;
}
.ctrl_item:hover{
  cursor: pointer;
}
</style>
