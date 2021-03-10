<!--  -->
<template>
  <div class="menuMain" @click="mainMenu"></div>
</template>

<script>
export default {
  name: 'aniMenu',
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {
  },

  methods: {
    mainMenu () {}
  }
}

</script>
<style  scoped>
.menuMain{
  position: absolute;
  z-index: 999;
  right: 0;left: 0;bottom: 0;top: 0;
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: brown;
  user-select: none;
}
</style>
