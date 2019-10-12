<!--  -->
<template>
  <div>
      <canvas id="myCanvas" width="2rem" height="2rem"></canvas>
  </div>
</template>

<script>
export default {
    name:"moves",
    data () {
        return {
            canvasWidth:0,
            time:0,
            obj:{},
        };
    },
    components: {},
    computed: {},
    mounted(){
      this.canvasInit();
      var record={};
      var path='https://api.yuntingbao.cc'+'/oauth/token';
      var APP_CLIENT_ID = '897641538630270977';
      var APP_CLIENT_SECRET = '411473f3b79c4fdfbcebb28aff4bc7cc';
      var APP_GRANT_TYPE = 'password';
      var APP_GRANT_SCOPE = 'parking property enterprise';
      record.client_id = APP_CLIENT_ID;
      record.client_secret = APP_CLIENT_SECRET;
      record.grant_type = APP_GRANT_TYPE;
      record.scope = APP_GRANT_SCOPE;
      record.username="15651665593";
      record.password="15651665593";
    //   this.$axios.post(path,record).then((response)=> {
    //       console.log(response)
    //   }).catch()
    },
    watch: {
        obj:{
            deep: true,
            handler: function (newVal,oldVal){
            console.log('newValue', newVal);
            console.log('oldValue', oldVal);
            }
        }    
    },
    methods: {
        canvasInit(){
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            var  clientWidth = document.documentElement.clientWidth;
            //根据设计图中的canvas画布的占比进行设置
            this.canvasWidth = Math.floor(clientWidth*200/750);
            canvas.setAttribute('width',this.canvasWidth+'px');
            canvas.setAttribute('height',this.canvasWidth+'px');
            // ctx.arc(canvasWidth/2,canvasWidth/2,canvasWidth/4,0,2*Math.PI);
            // ctx.stroke();
            this.drawNotChange(ctx);
            ctx.fillStyle='blue';
            ctx.beginPath();
            ctx.arc(100,200,10,0,2*Math.PI,true);
            ctx.closePath();
            ctx.fill();
            // ctx.beginPath();
            // ctx.arc(100,200,30,0,2*Math.PI,true);
            // ctx.stroke();
            // ctx.closePath();
            this.draw_curve(ctx);
            var t=0.01; 
            var ty=0.01;
            var k=setInterval(()=>{
                // this.run(ctx)
                t=t+ty;
                if(t>=1){ty=-0.01};
                if(t<=0){ty=0.01};
                var z = this.get_bezier_dot(t);
                this.draw_ball(ctx,z.x,z.y)
            }, 50);
        },
        drawNotChange(ctx){
            ctx.fillStyle='red';
            ctx.beginPath();
            ctx.arc(200,200,10,0,2*Math.PI,true);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.arc(200,200,100,0,2*Math.PI,true);
            ctx.closePath();
            ctx.stroke();
        },
        draw_curve(ctx) {//绘制2次贝塞尔曲线
            this.obj={
                p0_x:10,
                p0_y:220,
                p1_x:70,
                p1_y:80,
                p2_x:10,
                p2_y:10,
            }
            ctx.beginPath();
            ctx.moveTo(this.obj.p0_x,this.obj.p0_y);/*开始点*/
            ctx.quadraticCurveTo(this.obj.p1_x,this.obj.p1_y,this.obj.p2_x,this.obj.p2_y);/*前两个是控制点坐标xy，后两个是结束点坐标xy*/
            ctx.strokeStyle = "#f7e722";//"#000";
            ctx.stroke();
            ctx.closePath();
        },
        get_bezier_dot(t){
            //t是从0到0.99的数，可以取间隔0.01递增
            var x = (1-t)*(1-t)*this.obj.p0_x + 2*t*(1-t)*this.obj.p1_x + t*t*this.obj.p2_x;
            var y = (1-t)*(1-t)*this.obj.p0_y + 2*t*(1-t)*this.obj.p1_y + t*t*this.obj.p2_y;
            return {x:x,y:y}
        },
        draw_ball(ctx,x,y) {
            ctx.clearRect(0,0,this.canvasWidth,this.canvasWidth); 
            ctx.beginPath();
            ctx.fillStyle = '#00E5EE';
            ctx.arc(x, y,30, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            // ---------------------
            this.drawNotChange(ctx);
            ctx.save();//将当前以左上角坐标为(0,0)的上下文环境进行保存，这样是为了在接下来中要进行画布偏移后，可以进行还原当前的环境
            ctx.translate(200,200);
            ctx.rotate(this.time*2*Math.PI/180);//设定每次旋转的度数
            ctx.fillStyle='blue';
            ctx.beginPath();
            ctx.arc(0,100,10,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.arc(0,100,30,0,2*Math.PI,false);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();//将当前为(500,400)的点还原为（0,0）,其实在save中就是将上下文环境保存到栈中，在restore下面对其进行还原
            this.time+=1;
        },
        ListNode(x){
          this.val = x;
          this.next = null;
        },
    }
}

</script>
<style  scoped>
#myCanvas{
    margin: 1rem auto;
    border: 0.01rem solid black;
}
</style>