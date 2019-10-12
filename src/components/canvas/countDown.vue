<!--  -->
<template>
  <div>
      <canvas id="myCanvas" width="2rem" height="2rem"></canvas>
  </div>
</template>

<script>
export default {
    name:"countDown",
    data () {
        return {
            canvasWidth:0,
            time:60,
            obj:{},
        };
    },
    components: {},
    computed: {},
    mounted(){
      this.canvasInit();
    },
    methods: {
        canvasInit(){
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            var  clientWidth = document.documentElement.clientWidth;
            this.canvasWidth = Math.floor(clientWidth*200/750);
            canvas.setAttribute('width',this.canvasWidth+'px');
            canvas.setAttribute('height',this.canvasWidth+'px');
            ctx.beginPath();
            ctx.font= '20px Arial';
            ctx.textAlign="center";
            ctx.strokeText(this.time+'s', 100, 110);
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle='#A34110';
            ctx.lineWidth=8;
            ctx.arc(100,100,50,0,2*Math.PI,true);
            ctx.closePath();
            ctx.stroke();
            var k=setInterval(()=>{
                this.time--;
                this.draw(ctx);
                if(this.time==0){
                  clearInterval(k);
                }
            },1000)
        },
        draw(ctx){
            ctx.clearRect(0,0,this.canvasWidth,this.canvasWidth); 
            ctx.beginPath();
            ctx.font= '20px Arial';
            ctx.textAlign="center";
            ctx.strokeStyle='black';
            ctx.lineWidth=1;
            ctx.strokeText(this.time+'s', 100, 110);
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle='#A34110';
            ctx.lineWidth=8;
            ctx.arc(100,100,50,0,2*Math.PI,false);
            ctx.stroke();
            ctx.closePath();
        }
    }
}

</script>
<style  scoped>
#myCanvas{
    margin: 1rem auto;
    border: 0.01rem solid black;
}
</style>