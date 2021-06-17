<!--  -->
<template>
  <div>
      <div class="web_status" v-for="r in obj" :key='r'>{{r}}</div>
      <div class="web_status">{{result}}</div>
  </div>
</template>

<script>
export default {
  name: 'webTest',
  data () {
    return {
      obj: ['泡面', '炒面', '烩面'],
      websock: null,
      result: null
    }
  },

  components: {},

  computed: {},

  mounted () {
  },

  methods: {
    
  },

}

</script>
<style  scoped>
.web_status{
    width: 100px;
    height: 30px;line-height: 30px;background: #e5e5e5;
    border: 1px solid black;
    margin: 0 auto;
}
.web_status:hover{
    cursor: pointer;
}
</style>
