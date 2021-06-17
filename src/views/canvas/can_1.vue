<!-- canvas点阵转换 -->
<template>
  <div>
    <img :src="imgUrl" id='img'   />
    <canvas ref="can_1" class=""  width="1200" height="1038"></canvas>
  </div>
</template>

<script>
export default {
  name: 'can_1',
  data () {
    return {
      imgUrl:require('@/assets/logo.png'),
      settingList: {},
      SpriteList: [],
      ctx:null,
    }
  },

  components: {},

  computed: {},

  mounted () {
    // window.addEventListener('resize', this.initContainer())
    this.initContainer()
    /*
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var seed = +new Date();
var gravityForce = 0.05;
var asteroidOrbitRadius = 80;
var asteroidCount = 7;

var random = function() {
    var s = seed;
    return function() {
        return alea(s++)();
    };
}();

setTimeout(function() {
    var canvasEl = document.getElementById('js-canvas');
    var width = canvasEl.width;
    var height = canvasEl.height;

    var canvasCtx = canvasEl.getContext('2d');
    var trailEl = document.createElement('canvas');
    var _ref = [width, height];
    trailEl.width = _ref[0];
    trailEl.height = _ref[1];

    var trailCtx = trailEl.getContext('2d');
    var fadeEl = document.createElement('canvas');
    var _ref2 = [width, height];
    fadeEl.width = _ref2[0];
    fadeEl.height = _ref2[1];

    var fadeCtx = fadeEl.getContext('2d');
    var planet = new Planet(width / 2, height / 2, 20);
    var stepSize = Math.PI * 2 / asteroidCount;
    var angleOffset = Math.PI * 2 / 12;
    var asteroids = Array.apply(undefined, Array(asteroidCount)).map(function(_, index) {
        var angle = index * stepSize;
        var x = planet.x + Math.cos(angle) * asteroidOrbitRadius;
        var y = planet.y + Math.sin(angle) * asteroidOrbitRadius;
        var asteroid = new Asteroid(x, y, 20, 0);

        var _calculateCircularOrb = calculateCircularOrbit(asteroid, planet);

        asteroid.vX = _calculateCircularOrb[0];
        asteroid.vY = _calculateCircularOrb[1];

        return asteroid;
    });
    var iteration = 0;
    var delay = asteroidOrbitRadius * (Math.PI * 2) / 1.3;
    while (true) {
        if (iteration % Math.floor(delay) === 0) {
            if (asteroids.length === asteroidCount) {
                break;
            }
        }
        asteroids.forEach(function(asteroid) {
            return asteroid.update([planet]);
        });
        iteration++;
    }
    animate(0, canvasCtx, trailCtx, fadeCtx, width, height, planet, asteroids);
}, 0);

function animate(iteration, ctx, trailCtx, fadeCtx, width, height, planet, asteroids) {
    ctx.clearRect(0, 0, width, height);
    fadeCtx.clearRect(0, 0, width, height);
    fadeCtx.drawImage(trailCtx.canvas, 0, 0, width, height, 0, 0, width, height);
    trailCtx.clearRect(0, 0, width, height);
    trailCtx.globalAlpha = 0.98;
    trailCtx.drawImage(fadeCtx.canvas, 0, 0, width, height, 0, 0, width, height);
    trailCtx.globalAlpha = 1;
    if (iteration % (60 / 12) === 0) {
        (function() {
            trailCtx.fillStyle = 'orange';
            var trailSize = 4;
            asteroids.forEach(function(asteroid) {
                var angle = Math.atan2(asteroid.vY, asteroid.vX);
                trailCtx.translate(asteroid.x, asteroid.y);
                trailCtx.rotate(angle);
                trailCtx.fillRect(-trailSize / 2, -trailSize / 2, trailSize, trailSize);
                trailCtx.rotate(-angle);
                trailCtx.translate(-asteroid.x, -asteroid.y);
            });
        })();
    }
    ctx.drawImage(trailCtx.canvas, 0, 0, width, height, 0, 0, width, height);
    planet.render(ctx);
    asteroids.forEach(function(asteroid) {
        asteroid.update([planet]);
        asteroid.render(ctx);
    });
    requestAnimationFrame(function() {
        animate(iteration + 1, ctx, trailCtx, fadeCtx, width, height, planet, asteroids);
    });
}

function calculateCircularOrbit(target, planet) {
    var angle = Math.atan2(planet.y - target.y, planet.x - target.x);
    var distance = vec2.dist([planet.x, planet.y], [target.x, target.y]);
    var velocity = Math.sqrt(distance / gravityForce) * gravityForce;
    velocity *= 0.65;
    return vec2.mul([], [Math.sin(-angle), Math.cos(angle)], [velocity, velocity]);
}

function applyForces(target, neighbors) {
    var acceleration = [target.vX, target.vY];
    vec2.add(acceleration, acceleration, forces.gravitation(target, neighbors));

    var _vec2$add = vec2.add([], [target.vX, target.vY], acceleration);

    target.vX = _vec2$add[0];
    target.vY = _vec2$add[1];
}

var forces = {
    gravitation: function gravitation(target, neighbors) {
        var vectorSum = [0, 0];
        var steeringVector = [0, 0];
        var count = 0;
        neighbors.forEach(function(neighbor) {
            var distance = vec2.dist([target.x, target.y], [neighbor.x, neighbor.y]);
            vec2.add(vectorSum, vectorSum, [neighbor.x, neighbor.y]);
            count++;
        });
        if (count) {
            var baryCenter = vec2.div([], vectorSum, [count, count]);
            var desired = vec2.sub([], baryCenter, [target.x, target.y]);
            vec2.normalize(desired, desired);
            vec2.mul(desired, desired, [gravityForce, gravityForce]);
            vec2.sub(steeringVector, desired, [target.vX, target.vY]);
        }
        return steeringVector;
    }
};

function generatePolygon(avgRadius) {
    var pointCount = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];

    var stepSize = Math.PI * 2 / pointCount;
    var variance = avgRadius * 0.5;
    return Array.apply(undefined, Array(pointCount)).map(function(_, index) {
        return [Math.cos(stepSize * index) * (avgRadius + (random() * variance - variance / 2)), Math.sin(stepSize * index) * (avgRadius + (random() * variance - variance / 2))];
    });
}

var Entity = function() {
    function Entity(x, y, size, rotation) {
        _classCallCheck(this, Entity);

        this.x = x;
        this.y = y;
        this.vX = 0;
        this.vY = 0;
        this.rotation = rotation;
        this.size = size;
        this.canvasSize = this.size * 2;
        this.cacheEl = document.createElement('canvas');
        this.cacheEl.width = this.canvasSize;
        this.cacheEl.height = this.canvasSize;
    }

    Entity.prototype.render = function render(ctx) {
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.cacheEl, 0, 0, this.canvasSize, this.canvasSize, -this.canvasSize / 2, -this.canvasSize / 2, this.canvasSize, this.canvasSize);
        ctx.rotate(-this.rotation);
        ctx.translate(-this.x, -this.y);
    };

    Entity.prototype.update = function update(neighbors) {
        applyForces(this, neighbors);

        var _vec2$add2 = vec2.add([], [this.x, this.y], [this.vX, this.vY]);

        this.x = _vec2$add2[0];
        this.y = _vec2$add2[1];

        this.rotation = Math.atan2(this.vY, this.vX) + Math.PI / 2;
    };

    return Entity;
}();

var Asteroid = function(_Entity) {
    _inherits(Asteroid, _Entity);

    function Asteroid(x, y, size, rotation) {
        _classCallCheck(this, Asteroid);

        var _this = _possibleConstructorReturn(this, _Entity.call(this, x, y, size, rotation));

        _this.points = generatePolygon(_this.size / 2, Math.floor(random() * 6) + 6);
        _this.cache();
        return _this;
    }

    Asteroid.prototype.cache = function cache() {
        var ctx = this.cacheEl.getContext('2d');
        var center = this.canvasSize / 2;
        ctx.strokeStyle = '#dedede'; // taken from http://codepen.io/jscottsmith/pen/qNvAXo/
        ctx.fillStyle = '#333';
        ctx.lineWidth = 4;
        ctx.beginPath();
        this.points.forEach(function(_ref3, index) {
            var x = _ref3[0];
            var y = _ref3[1];

            if (!index) {
                ctx.moveTo(x + center, y + center);
                return;
            }
            ctx.lineTo(x + center, y + center);
        });
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    };

    return Asteroid;
}(Entity);

var Planet = function(_Entity2) {
    _inherits(Planet, _Entity2);

    function Planet(x, y, radius) {
        _classCallCheck(this, Planet);

        var _this2 = _possibleConstructorReturn(this, _Entity2.call(this, x, y, radius * 2, 0));

        _this2.radius = radius;
        _this2.cache();
        return _this2;
    }

    Planet.prototype.cache = function cache() {
        var ctx = this.cacheEl.getContext('2d');
        var center = this.canvasSize / 2;
        ctx.beginPath();
        ctx.fillStyle = '#dedede';
        ctx.arc(center, center, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    };

    return Planet;
}(Entity); */
  },

  methods: {
    initContainer () {
        const width = window.innerWidth
        const height = window.innerHeight
        let canvas = this.$refs.can_1
        canvas.width = width
        canvas.height = height
        this.ctx = canvas.getContext('2d')
        let img = new Image();
        img = document.getElementById('img');
        img.crossOrigin = "*";
        img.onload = function() {
            // 把图片放到canvas 画布上
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            // 获取像素数据
            var imageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
            // 转换
            imageData = convertPointArray(imageData);
            // 擦除原来的图片
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // 重新绘图
            ctx.putImageData(imageData, 0, 0);
        }
    },
     // 判断像素块是否空白or像素覆盖
    isCover(imgdata, width, x, y){
      var covered = 0;
        // 像素快为 8*8 
        for (var i=x; i<x+8; i++) {
            for (var j=y; j<y+8; j++) {
                var idx = i*4*width + 4*j;
                // 阈值设为192
                if (imgdata[idx]<192 || imgdata[idx+1]<192 || imgdata[idx+2]<192 ) {
                    covered++;
                }
                // 覆盖面积超过 45/64
                if (covered > 45) {
                    return true;
                }
            }
        }
        return false;
    },
       // 填充像素块
    drawPoints(imgdata, width, x, y, clear=false) {
        for (var i=x; i<x+8; i++) {
            for (var j=y; j<y+8; j++) {
                var idx = i*4*width + 4*j;
                if (i >=x+2 && i<x+6 && j>=y+2 && j<y+6 && !clear) {
                    // 画小方块
                    imgdata[idx] = 168;
                    imgdata[idx+1] = 168;
                    imgdata[idx+2] = 168;
                    imgdata[idx+3] = 192;
                } else {
                    // 置为空白
                    imgdata[idx] = 255;
                    imgdata[idx+1] = 255;
                    imgdata[idx+2] = 255;
                    imgdata[idx+3] = 0;
                }
            }
        }
        return imgdata;
    },
    // 点阵转换
    convertPointArray(img) {
        for (var i=0; i<img.height; i=i+8) {
            for (var j=0; j<img.width; j=j+8) {
                var isCovered = isCover(img.data, img.width, i, j);
                if (isCovered) {
                    img.data = drawPoints(img.data, img.width, i, j);
                } else {
                    // 其他区域直接清空
                    img.data = drawPoints(img.data, img.width, i, j, true);
                }
            }
        }
        return img;
    }
  }
}

</script>
<style  scoped>
.canBack{
  position: absolute;top: 0;left: 0;
  bottom: 0;right: 0;
}
</style>
