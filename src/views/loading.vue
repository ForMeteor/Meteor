<!--  -->
<template>
  <div>
      <div v-loading="cole">
          123456789
          <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'loading',
  data () {
    return {
      cole: false
    }
  },

  components: {
    HelloWorld
  },

  computed: {},

  mounted () {
    this.cole = true
    setTimeout(() => {
      this.cole = false
    }, 5000)
  },

  methods: {}
}

</script>
<style  scoped>
</style>
