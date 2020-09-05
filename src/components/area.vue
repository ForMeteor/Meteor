<!--  -->
<template>
  <div>
    <div class="thr">
        <v-distpicker  @selected='selected'></v-distpicker>
    </div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
export default {
  name: '',
  data () {
    return {
    }
  },

  components: {
    VDistpicker
  },

  computed: {},

  mounted () {
    console.log('1')
  },

  methods: {
    selected (data) {
      console.log(data)
      this.province = data.province.value
      this.city = data.city.value
      this.$emit('area', data)
    }
  }
}

</script>
<style  scoped>
.thr{
    display: flex;
}
>>>.thr select{
  width: 100px;
  height:40px;
}
</style>
