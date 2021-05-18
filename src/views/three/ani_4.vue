<!-- 天体运动 -->
<template>
  <div id="ani_4"></div>
</template>

<script>
import spetMethod from 'sept_method'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
  name: '',
  data () {
    return {
      renderer: null,
      scene: null,
      camera: null,
      clickEvents: [],
      controls: null,
      light: null,
      balls: null,
      deg: 0,
      ifMove: true
    }
  },

  components: {},

  computed: {},

  mounted () {
    console.log(spetMethod)
    let deg = Math.PI / 6
    console.log(deg)
    window.addEventListener('mousedown', this.initClickEvent)
    this.init()
  },

  methods: {
    init () {
      this.scene = new THREE.Scene() // 场景
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
      this.camera.position.set(100, 60, 80)
      this.camera.lookAt(0, 0, 0)
      // 相机 渲染器
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.setClearColor(new THREE.Color('#333333'))
      this.renderer.shadowMap.enabled = true
      // 辅助线
      // let axes = new THREE.AxesHelper(200)
      // this.scene.add(axes)
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      // this.controls.enablePan = false // 右键拖拽
      // this.controls.enableZoom = false // 缩放
      this.controls.enableRotate = true // 左键旋转
      this.light = new THREE.DirectionalLight(0xffffff, 1)
      this.light.position.set(0, 0, 30) // 设置光源方向
      this.scene.add(this.light) // 将光源添加到场景中
      this.createSun()
      this.createBalls(9)
      this.createCycle(9)
      //   --------------
      document.getElementById('ani_4').appendChild(this.renderer.domElement)
      this.renderScene()
    },
    renderScene () {
      for (let i = 0; i < this.balls.length; i++) {
        this.deg += Math.PI / 600 // 30度
        let d = 3 * this.deg / (i + 1)
        this.balls[i].position.z = this.balls[i].r * Math.sin(d)
        this.balls[i].position.x = this.balls[i].r * Math.cos(d)
      }
      if (this.ifMove) {
        requestAnimationFrame(this.renderScene)
      }
      this.renderer.render(this.scene, this.camera)
    },
    createSun () {
      let geometry = new THREE.SphereGeometry(10, 28, 22) // 球体半径为10，经度切为28份，纬度切为22份（根据需要自行设置）
      let material = new THREE.MeshLambertMaterial({ color: 0xff0000 }) // 使用Lambert材质，设为红色
      let sunMesh = new THREE.Mesh(geometry, material) // 使用网格创建物体
      sunMesh.position.set(0, 0, 0) // 设置球体位置
      this.scene.add(sunMesh) // 添加到场景中
    },
    createBalls (k) {
      this.balls = []
      for (let i = 0; i < k; i++) {
        let sphereGeometry = new THREE.SphereGeometry(2 + i / 2, 22, 16)
        // sphereGeometry.transparent = true
        // sphereGeometry.opacity = 0.9
        let color = spetMethod.common.getRanColor()
        console.log(color)
        let sphereMaterial = new THREE.MeshLambertMaterial({
          color: color,
          wireframe: false
        })
        let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
        sphere.r = 12 * i + 20
        sphere.name = i + '号球'
        sphere.position.set(12 * i + 20, 0, 0)
        this.scene.add(sphere)
        this.balls.push(sphere)
        this.clickEvents.push(sphere)
        console.log(this.balls)
      }
    },
    createCycle (k) {
      for (let j = 0; j < k; j++) {
        let radius = this.balls[j].r
        let lineGeometry = new THREE.Geometry()
        for (let i = 0; i < 2 * Math.PI; i += Math.PI / 30) {
          lineGeometry.vertices.push(new THREE.Vector3(radius * Math.cos(i), 0, radius * Math.sin(i), 0))
        }
        let material = new THREE.LineBasicMaterial({ color: 0xffa500 })
        let cycleMesh = new THREE.Line(lineGeometry, material)
        cycleMesh.position.set(0, 0, 0)
        cycleMesh.name = j + '号线'
        this.scene.add(cycleMesh)
      }
    },
    initClickEvent (event) {
      console.log('initClickEvent')
      //   this.clickEvents
      //   需要添加点击事件的对象放在一个数组里，生成点击事件。
      //   用户点击屏幕的时候
      //   threejs会根据视角从触碰点会发射一条“激光”
      //   激光扫到的所有记录在数组里的对象，都被会捕捉到
      let raycaster = new THREE.Raycaster()
      let mouse = new THREE.Vector2()
      event.preventDefault()
      mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1
      mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1
      raycaster.setFromCamera(mouse, this.camera)
      // 必须装网格，mesh，装入组是没有效果的
      // --线条显示
      // let geometry = new THREE.Geometry()
      // let lineMaterial = new THREE.LineBasicMaterial({
      //   color: '#ff0000'
      // })
      // geometry.vertices.push(
      //   new THREE.Vector3(mouse.x, mouse.y, 0),
      //   new THREE.Vector3(this.camera.position.x, this.camera.position.y, this.camera.position.z)
      // )
      // let line = new THREE.Line(geometry, lineMaterial)
      // this.scene.add(line)
      // --
      let intersects = raycaster.intersectObjects(this.scene.children)
      if (intersects.length > 0) {
        console.log(intersects[0].object)
        for (let i = 0; i < intersects.length; i++) {
          if (intersects[i].object.name.includes('球')) {
            this.ifMove = !this.ifMove
            if (this.ifMove) {
              requestAnimationFrame(this.renderScene)
            }
            return
          }
        }
        // showDetailPage(intersects[0].object.name)
      }
    },
    loadModel () {},
  }
}
</script>
<style  scoped>
</style>
