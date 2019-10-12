<template>
  <div class="pageBackground">
  </div>
</template>

<script>
export default {
    name:"home",
    data () {
        return {   
        };
    },
    components: {
    },
    computed: {},
    mounted(){
        console.log("home")
        console.log(this.$method.IsPC())
        console.log(this.$method.currentSys())
    },
    methods: {

    }
}

</script>
<style  scoped>

</style>