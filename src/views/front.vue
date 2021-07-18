<!-- 大屏缩放实例 
function resize() {
   var ratioX = $(window).width() / 11520;
   var ratioY = $(window).height() / 4320;
   $("body").css({
      transform: "scale(" + ratioX + "," + ratioY + ")",
      transformOrigin: "left top",
      backgroundSize: "100% 100%"
   });
   $("html").css({'overflow':'hidden'})
}
 
$(window, document).resize(function () {
   resize();
});
resize();-->
<template>
  <div class="mainWrap" :style="{width:'100%',height:'100%',overflowX:'hidden',overflowY:'flowY'}">
      <div class="main">
          <div class="mainTitle"></div>
          <div class="mainBox">
            <div class="mainItem1"></div>
            <div class="mainItem2"></div>
            <div class="mainItem3"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name : 'front',
  data () {
    return {
        flowY:'hidden'
    };
  },

  components: {},

  computed: {},

  mounted() {
      this.init()
  },

  methods: {
        initMainBodySize() {
            if (document.documentElement.clientWidth < 3300) {
                var scaleWidthPercent = document.documentElement.clientWidth / 3300;

                var scaleHeightPercent = (document.documentElement.clientHeight - scaleWidthPercent * 1200) / 2;
                this.$set(this.initMainBody, "transform", "scale(" + scaleWidthPercent + ")");
                this.$set(this.initMainBody, "width", "3300px");
                this.$set(this.initMainBody, "top", scaleHeightPercent + "px");
            } else {
                this.$set(this.initMainBody, "width", document.documentElement.clientWidth + "px");
            }
        },
        initMainBodySizeCal() {
            var basicScal = 3840 / 1200;
            var height = document.documentElement.clientHeight;
            var scal = height / 1200;
            var width = height * basicScal;
            // var scaleWidthPercent = document.documentElement.clientWidth / 3840;
            // var scaleHeightPercent = document.documentElement.clientHeight / 1200;
            this.initMainBody = { transform: "scale(" + scal + ")", width: (scal > 1 ? 3840 : width) + "px", minWidth: document.documentElement.clientWidth / scal + "px" };
            // return { transform: "scale(" + scal + ")", width: width + "px" };
            // return `width:${width}px`;
        },
        initSize() {
            var basicScal = document.documentElement.clientWidth / document.documentElement.clientHeight;
            if (basicScal < window.mainConfig.sizeScal) {
                this.wrapOverflow = "hidden";
                this.initMainBodySize();
                window.onresize = this.initSize;
            } else {
                this.wrapOverflow = "auto";
                this.initMainBodySizeCal();
                window.onresize = this.initSize;
            }
        },
  }
}

</script>
<style  scoped>
.mainWrap{}
.mainbody {
    width: 3840px;
    height: 1200px;
    transform-origin: 0 0;
    position: relative;
    overflow: hidden;
}
.main{
    width: 3840px;
    height: 1080px;
    position: relative;
    border: 1px solid red;
    transform-origin: 0 0;
}
.mainTitle{
    width: 100%;
    height: 200px;
    background:yellowgreen;
}
.mainBox{
    position: absolute;
    top: 200px;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.mainItem1{
    width: 500px;
    background:grey;
}
.mainItem2{
    width: 1000px;
    background:grey;
}
.mainItem3{
    width: 500px;
    background:grey;
}
</style>
