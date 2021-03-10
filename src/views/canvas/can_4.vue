<!-- -->
<template>
  <div>
    <div class="midd"></div>
  </div>
</template>

<script>
export default {
  name: 'can_4',
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}
// function _classCallCheck(instance, Constructor) {
//     if (!(instance instanceof Constructor)) {
//         throw new TypeError("Cannot call a class as a function");
//     }
// }

// var Experience = function() {
//     function Experience(container) {
//         _classCallCheck(this, Experience);

//         console.clear();

//         this.canvas = document.createElement('canvas');
//         container.appendChild(this.canvas);
//         this.context = this.canvas.getContext('2d');

//         var fps = 120;
//         this.fpsInterval = 1000 / fps;
//         this.then = Date.now();

//         this.counter = 0;
//         this.waveWidth = 15;
//         this.waveHeight = 5;
//         this.lineWidth = 1;
//         this.lineSpace = 10;

//         var gui = new dat.GUI();
//         gui.add(this, 'waveWidth', 1, 50).name('Waves Width').step(1);
//         gui.add(this, 'waveHeight', 1, 50).name('Waves Height').step(1);
//         gui.add(this, 'lineWidth', 1, 20).name('Lines Width').step(1);
//         gui.add(this, 'lineSpace', 5, 50).name('Lines Height').step(1);
//         gui.close();

//         this.resize();
//         this.bind();
//         this.loop();
//     }

//     Experience.prototype.bind = function bind() {
//         window.addEventListener('resize', this.resize.bind(this), false);
//     };

//     Experience.prototype.render = function render() {
//         for (var y = 0; y < this.canvas.height / this.lineSpace; y++) {
//             this.context.beginPath();
//             this.context.moveTo(0, Math.sin(this.counter) * this.waveHeight + y * this.lineSpace + this.counter % this.lineSpace);
//             for (var x = 0; x < this.canvas.width; x++) {
//                 this.context.lineTo(x, Math.sin(this.counter + x / this.waveWidth) * this.waveHeight + y * this.lineSpace + this.counter % this.lineSpace);
//             }
//             this.context.lineWidth = this.lineWidth;
//             this.context.strokeStyle = '#ecf0f1';
//             this.context.stroke();
//             this.context.closePath();
//         }

//         this.counter += 0.4;
//     };

//     Experience.prototype.loop = function loop() {
//         this.raf = window.requestAnimationFrame(this.loop.bind(this));

//         var now = Date.now();
//         var delta = now - this.then;

//         if (delta > this.fpsInterval) {
//             this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//             this.render();
//             this.then = now;
//         }
//     };

//     Experience.prototype.resize = function resize() {
//         this.canvas.width = window.innerWidth;
//         this.canvas.height = window.innerHeight;
//         this.screen = {
//             'center': {
//                 'x': this.canvas.width / 2,
//                 'y': this.canvas.height / 2
//             },
//             'hypotenuse': Math.sqrt(this.canvas.width / 2 * this.canvas.width / 2 + this.canvas.height / 2 * this.canvas.height / 2)
//         };

//         this.reset();
//     };

//     Experience.prototype.reset = function reset() {
//         window.cancelAnimationFrame(this.raf);
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//         this.loop();
//     };

//     return Experience;
// }();

// var getRandomColor = function getRandomColor() {
//     var value = Math.floor(Math.random() * 255);
//     return '#' + value.toString(16) + value.toString(16) + value.toString(16);
// };

// var container = document.getElementById('canvas');
// var experience = new Experience(container);
</script>
<style  scoped>
.midd{
  position: absolute;
  top: 0;bottom: 0;
  left: 0;right: 0;
  margin: auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: orange;
}
</style>
