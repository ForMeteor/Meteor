<!--  -->
<template>
  <div class="robotBox" @click="menuClick" @contextmenu.prevent="right()">
      <div class="robot_img" :class="{'pdro_1':pdr,'pdro_2':!pdr}" @click="fast"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'robotMenu',
  data () {
    return {
      pdr: true
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    ...mapMutations([
      'changeApptype'
    ]),
    right () {
      console.log('右键')
    },
    menuClick () {
      console.log('menuclick')
      this.changeApptype()
    },
    fast () {
      this.pdr = false
      setTimeout(() => {
        this.pdr = true
      }, 800)
    }
  }
}

</script>
<style  scoped>
.robotBox{
    position: fixed;
    z-index: 150;
    left: 20px;bottom: 20px;
    width: 100px;
    height: 100px;
}
.robot_img{
    width: 100px;
    height: 100px;
    background: url('~@/assets/resourse/pd.png') center no-repeat;
    background-size: 100% 100%;
}
.pdro_1{
  animation:pdro 4s linear infinite
}
.pdro_2{
  animation:pdro2 0.2s linear infinite
}
@keyframes pdro{
  0%{
    transform: rotate(0deg);
  }
  25%{
    transform: rotate(5deg);
  }
  50%{
    transform: rotate(0deg);
  }
  75%{
    transform: rotate(-5deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
@keyframes pdro2{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

</style>
