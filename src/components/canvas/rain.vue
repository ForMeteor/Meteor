<!-- 流星雨 -->
<template>
  <div class="normal_back">
    <!-- <canvas id="myCanvas3" class="canvas"></canvas> -->
    <canvas id="meteor"></canvas>
    <canvas id="star"></canvas>
    <canvas id="moon"></canvas>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      width: '',
      height: ''
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.canvasInit()
  },

  methods: {
    canvasInit () {
      class Moon {
        constructor(x, y, ctx, r = 25) {
            this.x = x;
            this.y = y;
            this.ctx = ctx;
            this.r = r;
        }
        draw() {
            this.ctx.fillStyle = 'rgba(255,255,255,0.6)';
            this.ctx.shadowBlur = this.r + 5; //光晕半径
            this.ctx.shadowColor = "#fff"; // 光晕颜色
            this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            this.ctx.fill();
        }
      }
      
      class Star extends Moon {
          constructor(x, y, ctx, r) {
              super(x, y, ctx, r);
          }
          draw() {
              this.ctx.fillStyle = 'rgba(255,255,255,0.8)';
              this.ctx.beginPath();
              this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
              this.ctx.closePath();
              this.ctx.fill();
          }
          move() {
              this.x += 0.08;
              if (this.x > meteorCanvas.width) {
                  this.x = 0;
              }
              this.draw();
          }
      }
      
      class Meteor extends Star {
          constructor(x, y, ctx, r,angle) {
              super(x, y, ctx, r);
              this.angle = angle;
          }
          draw() {
              this.ctx.fillStyle = '#ffffff';
              this.ctx.rotate(this.angle);
              this.ctx.translate(100, -meteorCanvas.height / 1.5);
              this.ctx.beginPath();
              this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
              this.ctx.closePath();
              this.ctx.fill();
              this.ctx.translate(-100, meteorCanvas.height / 1.5);
              this.ctx.rotate(-this.angle);
          }
          move() {
              this.x += 4;
              this.y += 1;
              if (this.x > meteorCanvas.width) {
                  this.x = Math.random() * 5
                  this.y = -2 * meteorCanvas.height + Math.random() * meteorCanvas.height * 3;
              }
              this.draw();
          }
      }
      // const canvas = document.getElementById('myCanvas3')
      // const ctx = canvas.getContext('2d')
      // this.width = window.innerWidth
      // this.height = window.innerHeight
      // canvas.width = this.width
      // canvas.height = this.height
      
      const meteorCanvas = document.getElementById('meteor');
      const starCanvas = document.getElementById('star');
      const moonCanvas = document.getElementById('moon');
      const meteors = [], stars = [];
      meteorCanvas.width = document.body.clientWidth;
      meteorCanvas.height = document.body.clientHeight;
      starCanvas.width = document.body.clientWidth;
      starCanvas.height = document.body.clientHeight / 3;
      moonCanvas.width = document.body.clientWidth;
      moonCanvas.height = document.body.clientHeight / 3;
      const meteorCtx = meteorCanvas.getContext('2d');
      const starCtx = starCanvas.getContext('2d');
      const moonCtx = moonCanvas.getContext('2d');
      init();
      animate();
      function init() {
          for (var i = 0; i < 4; i++) {
              meteors[i] = new Meteor(Math.random() * meteorCanvas.width,
                  -2 * meteorCanvas.height + Math.random() * meteorCanvas.height * 3,
                  meteorCtx, Math.floor(Math.random() * 2) + 1.5, Math.PI / 7);
              meteors[i].draw();
          }
          for (var i = 0; i < 60; i++) {
              stars[i] = new Star(Math.random() * starCanvas.width, Math.random() * starCanvas.height,
                  starCtx, Math.random());
              stars[i].draw();
          }
          moon = new Moon(moonCanvas.width - 50, 50, moonCtx)
          moon.draw();
      }
      function animate() {
          starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
          meteorCtx.fillStyle = `rgba(0, 0, 0, 0.1)`;
          meteorCtx.fillRect(0, 0, meteorCanvas.width, meteorCanvas.height);
          for (let meteor of meteors)
              meteor.move();
          for (let star of stars)
              star.move();
          requestAnimationFrame(animate);
      }
      function recover() {
          for (let meteor of meteors)
              meteor = null;
          for (let star of stars)
              star = null;
          moon = null;
      }
      window.onresize = function () {
          meteorCanvas.width = document.body.clientWidth;
          meteorCanvas.height = document.body.clientHeight;
          starCanvas.width = document.body.clientWidth;
          starCanvas.height = document.body.clientHeight / 3;
          moonCanvas.width = document.body.clientWidth;
          moonCanvas.height = document.body.clientHeight / 3;
          recover();
          init();
      }

    },
  }
}

</script>
<style  scoped>
</style>
