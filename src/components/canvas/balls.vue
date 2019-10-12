<!--  -->
<template>
  <div>
    <div class="canv">
      <canvas id="myCanvas" class="canvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {
    name:"balls",
    data () {
        return {
            textPx:"",
            ballData:[],
            width:"",
            height:"",
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
            var clientWidth = document.documentElement.clientWidth;
            var canvasWidth = Math.floor(clientWidth*700/750);
            this.width=canvasWidth;
            this.height=canvasWidth/2;
            canvas.setAttribute('width',canvasWidth+'px');
            canvas.setAttribute('height',canvasWidth/2 +'px');
            this.creatBalls();
            this.drawBalls(ctx);
            var timer=setInterval(()=>{
                this.moveBalls(ctx);
                this.drawBalls(ctx);
            },10);
        },
        creatBalls(){
            for(let i=0;i<100;i++){
                var r=this.getMath(2,15);
                var rx=this.getMath(-5,5)==0 ? 1 : this.getMath(-5,5);
                var ry=this.getMath(-5,5)==0 ? 1 : this.getMath(-5,5);
                var a=[
                    this.getMath(r,this.width-r),
                    this.getMath(r,this.height-r),
                    r,
                    this.color(),
                    rx,
                    ry
                ];
                this.ballData.push(a);
            }
        },
        drawBalls(ctx){
            ctx.clearRect(0,0,this.width,this.height);
            var r=this.ballData;
            for(let i=0;i<r.length;i++){
                ctx.beginPath();
                ctx.arc(r[i][0],r[i][1],r[i][2],0,2*Math.PI);
                ctx.fillStyle=r[i][3];
                ctx.fill();
            }
        },
        moveBalls(){
            for(let i=0;i<this.ballData.length;i++){
                this.ballData[i][0]=this.ballData[i][0]+this.ballData[i][4];
                this.ballData[i][1]=this.ballData[i][1]+this.ballData[i][5];
                var realwidth1=this.ballData[i][0]+this.ballData[i][2];
                var realwidth2=this.ballData[i][0]-this.ballData[i][2];
                var realheight1=this.ballData[i][1]+this.ballData[i][2];
                var realheight2=this.ballData[i][1]-this.ballData[i][2];
                if(realwidth1>=this.width || realwidth2<=0){
                    this.ballData[i][4]=-this.ballData[i][4];
                }
                if(realheight1>=this.height || realheight2<=0){
                    this.ballData[i][5]=-this.ballData[i][5];
                }
            }
        },
        getMath(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);           
            //Math.floor(Math.random()*(max-min)+1);//1-10
        },
        color(){//rgb颜色随机
            var r = Math.floor(Math.random()*256);
			var g = Math.floor(Math.random()*256);
			var b = Math.floor(Math.random()*256);
			var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
			return color;
		}
    }
}

</script>
<style  scoped>
.canv{
    margin: 0 auto;
    width: 5rem;
    height: 2.5rem;
}
.canvas{
    height: 100%;
    width: 100%;
    display: block;
    background: #e5e5e5;
}
.text{
    font-size: 0.39rem;
}
</style>