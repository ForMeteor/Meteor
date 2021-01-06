<!--  -->
<template>
  <div id="ani_1">
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Texture } from 'three'
// import image from '@/assets/image/earth.jpg'
export default {
  name: '',
  data () {
    return {
      peg: require('@/assets/resourse/pd.png'),
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
      cube: null,
      plane: null, // 平面
      pointsList: [], // 点阵元素集合
      pdGroup: []
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.init()
  },

  methods: {
    // 环境光+
    init () {
      this.scene = new THREE.Scene() // 场景
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      this.camera.position.set(50, 60, 100)
      this.camera.lookAt(0, 0, 0)
      // 相机 渲染器
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setClearColor(new THREE.Color(0x000000))
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.shadowMap.enabled = true
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      // this.controls.enablePan = false // 右键拖拽
      // this.controls.enableZoom = false // 缩放
      this.controls.enableRotate = true // 左键旋转
      const axes = new THREE.AxesHelper(40)
      this.scene.add(axes)
      const directionalLight = new THREE.DirectionalLight(0xFFFFFF)
      directionalLight.intensity = 1
      directionalLight.position.set(0, 50, 100)
      this.scene.add(directionalLight)
      // ---
      document.getElementById('ani_1').appendChild(this.renderer.domElement)
      const geometry = new THREE.BoxGeometry(1, 1, 1) // 立方体
      console.log(geometry)
      console.log('几何体顶点位置数据', geometry.vertices)
      console.log('三角行面数据', geometry.faces)
      geometry.faces.pop()
      geometry.faces.pop()
      const material = new THREE.MeshPhongMaterial({
        color: 0x0000ff,
        side: THREE.DoubleSide
        // wireframe: true
      }) // 材质
      // ++材质物体自定义
      this.cube = new THREE.Mesh(geometry, material)
      this.cube.position.set(-1, 1, 0)
      this.scene.add(this.cube)
      this.camera.position.z = 50
      // ------
      const planeGeometry = new THREE.PlaneGeometry(20, 20)
      const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      this.plane = new THREE.Mesh(planeGeometry, planeMaterial)
      this.plane.rotation.x = -0.5 * Math.PI
      this.plane.position.set(0, 0, 0)
      this.plane.receiveShadow = true
      this.scene.add(this.plane)
      // --------
      const point = new THREE.PointLight(0xffffff)
      point.position.set(-400, 200, 300)
      this.scene.add(point)
      this.createPlane()
      this.createPoint(-3, 1, 0, 1)
      this.createPoints(2, 2, 2, 1, 3, 3, 3)
      // this.createCircle()
      this.createPiece()
      this.createSqu()
      this.getImg()
      // this.scene.add(points)
      this.pointsList.forEach((r) => {
        this.scene.add(r)
      })
      this.createLines()
      // const spotLight = new THREE.SpotLight(0xffffff)
      // spotLight.position.set(30, 25, -2)
      // spotLight.castShadow = true
      // spotLight.target = this.plane
      // this.scene.add(spotLight)
      this.animate()
    },
    animate () {
      requestAnimationFrame(this.animate)
      // this.cube.rotation.x += 0.01
      this.cube.rotation.y += 0.01
      this.pdGroup.children.forEach(sprite => {
        // 雨滴的y坐标每次减1
        sprite.position.y -= 1
        if (sprite.position.y < 0) {
          // 如果雨滴落到地面，重置y，从新下落
          sprite.position.y = 200
        }
      })
      this.renderer.render(this.scene, this.camera)
    },
    createPlane () {
      const geo = new THREE.BufferGeometry()
      const vert = new Float32Array([
        0, 0, 0, // 顶点1坐标
        5, 0, 0, // 顶点2坐标
        0, 5, 0, // 顶点3坐标
        5, 0, 0, // 顶点1坐标
        5, 5, 0, // 顶点2坐标
        0, 5, 0, // 顶点3坐标
        0, 0, 0,
        0, 5, 0,
        0, 0, -5,
        0, 5, -5,
        0, 5, 0,
        0, 0, -5
      ])
      const attribue = new THREE.BufferAttribute(vert, 3)
      geo.attributes.position = attribue
      const mat = new THREE.MeshBasicMaterial({
        color: 0x370B89,
        side: THREE.DoubleSide
      })
      const mesh = new THREE.Mesh(geo, mat)
      this.scene.add(mesh)
    },
    createPoint (sx, sy, sz, r) {
      const geometry = new THREE.BoxGeometry(r, r, r)
      const material = new THREE.PointsMaterial({
        color: 0xff0000,
        size: 0.1
      })
      const points = new THREE.Points(geometry, material)
      points.position.set(sx, sy, sz, r)
      this.pointsList.push(points)
    },
    createPoints (sx, sy, sz, r, zn, xn, yn) {
      for (let i = 0; i < zn; i++) {
        this.createPoint(sx, sy, sz + i * 2 * r, r)
        for (let j = 0; j < xn; j++) {
          this.createPoint(sx + 2 * j * r, sy, sz + i * 2 * r, r)
          for (let v = 0; v < yn; v++) {
            this.createPoint(sx + 2 * j * r, sy + 2 * v * r, sz + i * 2 * r, r)
          }
        }
      }
    },
    createLines () {
      let geometry = new THREE.Geometry()
      geometry.vertices.push(
        new THREE.Vector3(-125, 0, 0),
        new THREE.Vector3(125, 0, 0)
      )
      let material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        opacity: 0.5
      })
      for (let index = 0; index < 11; index++) {
        let lineX = new THREE.Line(geometry, material)
        lineX.position.z = (index * 25) - 125
        this.scene.add(lineX)
        let lineZ = new THREE.Line(geometry, material)
        lineZ.rotation.y = 90 * Math.PI / 180
        lineZ.position.x = (index * 25) - 125
        this.scene.add(lineZ)
      }

    },
    createCircle () {
      // const geometry = new THREE.Geometry() // 声明一个几何体对象Geometry
      // // 参数：0, 0圆弧坐标原点x，y  100：圆弧半径    0, 2 * Math.PI：圆弧起始角度
      // const arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI)
      // // getPoints是基类Curve的方法，返回一个vector2对象作为元素组成的数组
      // const points = arc.getPoints(50) // 分段数50，返回51个顶点
      // // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
      // geometry.setFromPoints(points)
      // // 材质对象
      // const material = new THREE.LineBasicMaterial({
      //   color: 0x000000
      // })
      // // 线条模型对象
      // const line = new THREE.Line(geometry, material)
      // line.position.set(25, 25, -25)
      const geometry = new THREE.Geometry() // 声明一个几何体对象Geometry
      const p1 = new THREE.Vector3(50, 0, 0) // 顶点1坐标
      const p2 = new THREE.Vector3(25, 25, -25) // 顶点2坐标
      // 二维直线LineCurve
      const LineCurve = new THREE.LineCurve3(p1, p2)
      const pointArr = LineCurve.getPoints(10)
      geometry.setFromPoints(pointArr)
      const material = new THREE.LineBasicMaterial({
        color: 0xff0000
      })
      const line = new THREE.Line(geometry, material)
      this.scene.add(line) // 线条对象添加到场景中
    },
    createPiece () {
      const p1 = new THREE.Vector3(0, 0, 25)
      const p2 = new THREE.Vector3(0, 5, 25)
      const p3 = new THREE.Vector3(0, 0, 35)
      const Line1 = new THREE.LineCurve3(p1, p2)
      const Line2 = new THREE.LineCurve3(p3, p1)
      const p4 = new THREE.Vector3(0, 5, 30) // 贝塞尔控制点
      const Line3 = new THREE.QuadraticBezierCurve3(p2, p4, p3)
      const CurvePath = new THREE.CurvePath()
      CurvePath.curves.push(Line1, Line3, Line2)
      const points = CurvePath.getPoints(200)
      const geometry = new THREE.Geometry()
      geometry.setFromPoints(points)
      const material = new THREE.LineBasicMaterial({
        color: 0xff0000
      })
      const pi = new THREE.Line(geometry, material)
      this.scene.add(pi) // 线条对象添加到场景中
    },
    createSqu () {
      const points = [
        new THREE.Vector2(75, 25),
        new THREE.Vector2(100, 0)
        // new THREE.Vector2(75, -25)
      ]
      const geometry = new THREE.LatheGeometry(points, 200)
      const material = new THREE.MeshPhongMaterial({
        color: 0x0000ff, // 三角面颜色
        side: THREE.DoubleSide, // 两面可见
        wireframe: false
      }) // 材质对象
      const mesh = new THREE.Mesh(geometry, material) // 旋转网格模型对象
      console.warn(mesh)
      this.scene.add(mesh) // 旋转网格模型添加到场景中
    },
    getImg () {
      const textureTree = new THREE.TextureLoader().load(this.peg)
      this.pdGroup = new THREE.Group()
      for (let i = 0; i < 100; i++) {
        const spriteMaterial = new THREE.SpriteMaterial({
          // color: 0xff00ff, // 设置精灵矩形区域颜色
          rotation: 0, // 旋转精灵对象45度，弧度值
          map: textureTree // 设置精灵纹理贴图
        })
        // 创建一个组表示所有的雨滴
        const sprite = new THREE.Sprite(spriteMaterial)
        // 控制精灵大小，比如可视化中精灵大小表征数据大小
        sprite.scale.set(5, 5, 1) // 只需要设置x、y两个分量就可以
        const k1 = Math.random() - 0.5
        const k2 = Math.random()
        const k3 = Math.random() - 0.5
        sprite.position.set(200 * k1, 200 * k2, 200 * k3)
        this.pdGroup.add(sprite)
      }
      this.scene.add(this.pdGroup)
    }
  }
}

</script>
<style  scoped>
</style>
