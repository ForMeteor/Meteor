<!--  -->
<template>
  <div>
      <div v-loading="cole">
          123456789
      </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      cole: false
    }
  },

  components: {
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
