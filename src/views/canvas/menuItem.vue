<!--  -->
<template>
  <div class="item" :style="{'top':`${itemSettings.top}px`,'left':`${itemSettings.left}px`}" @click.stop="itemClick"></div>
</template>

<script>
export default {
  name : 'menuItem',
  props: ['itemSettings'],
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {
    // console.log(this.itemSettings)
  },

  methods: {
    itemClick(){
        console.log('item点击')
    }
  }
}

</script>
<style  scoped>
.item{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
}
.item:hover{
  box-shadow: 0 0 10px grey;
  cursor: pointer;
}
</style>