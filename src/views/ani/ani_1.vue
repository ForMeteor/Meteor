<!--  -->
<template>
  <div id="ani_1">
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import image from '@/assets/image/earth.jpg'
export default {
  name: '',
  data () {
    return {
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
      cube: null,
      plane: null, // 平面
      pointsList: [], // 点阵元素集合
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
      let geometry = new THREE.BoxGeometry(r, r, r)
      let material = new THREE.PointsMaterial({
        color: 0xff0000,
        size: 0.1
      })
      let points = new THREE.Points(geometry, material)
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

    }
  }
}

</script>
<style  scoped>
</style>
