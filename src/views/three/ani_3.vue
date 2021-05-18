<!--  -->
<template>
  <div id="ani_3">
  </div>
</template>

<script>
import spetMethod from 'sept_method'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import dat from 'dat.gui'
export default {
  name: '',
  data () {
    return {
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
      plane: null, // 平面
      plane2: null, // 平面
      plane3: null, // 平面
      plane4: null, // 平面
      plane5: null, // 平面
      planeGeometry: null,
      planeMaterial: null,
      cube: null, // 立方体
      sphere: null, // 球
      step: 0
    }
  },

  components: {},

  computed: {},

  mounted () {
    console.log(spetMethod)
    console.log(OrbitControls)
    this.init()
    this.createBox()
  },
  methods: {
    init () {
      this.scene = new THREE.Scene() // 场景
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
      // 相机 渲染器
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.setClearColor(new THREE.Color(0x000000))
      this.renderer.shadowMap.enabled = true
      // ctrl
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      // this.controls.enablePan = false // 右键拖拽
      // this.controls.enableZoom = false // 缩放
      this.controls.enableRotate = true // 左键旋转
      // 坐标轴
      let axes = new THREE.AxesHelper(40)
      this.scene.add(axes)
      this.planeGeometry = new THREE.PlaneGeometry(30, 30)
      this.planeMaterial = new THREE.MeshLambertMaterial({ color: 0xe5e5e5 })
      this.plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial)
      this.plane.rotation.x = -0.5 * Math.PI
      this.plane.position.set(0, 0, 0)
      this.plane.receiveShadow = true
      // --
      this.plane2 = new THREE.Mesh(this.planeGeometry, this.planeMaterial)
      this.plane2.rotation.x = -0.5 * Math.PI
      this.plane2.position.set(40, 0, 0)
      this.plane2.receiveShadow = true
      // --
      this.plane3 = new THREE.Mesh(this.planeGeometry, this.planeMaterial)
      this.plane3.rotation.x = -0.5 * Math.PI
      this.plane3.position.set(-40, 0, 0)
      this.plane3.receiveShadow = true
      // --
      this.plane4 = new THREE.Mesh(this.planeGeometry, this.planeMaterial)
      this.plane4.rotation.x = -0.5 * Math.PI
      this.plane4.position.set(0, 0, 40)
      this.plane4.receiveShadow = true
      // --
      this.plane5 = new THREE.Mesh(this.planeGeometry, this.planeMaterial)
      this.plane5.rotation.x = -0.5 * Math.PI
      this.plane5.position.set(0, 0, -40)
      this.plane5.receiveShadow = true
      // --
      this.scene.add(this.plane)
      this.scene.add(this.plane2)
      this.scene.add(this.plane3)
      this.scene.add(this.plane4)
      this.scene.add(this.plane5)
      let cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
      let cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xFF0000,
        wireframe: false
      })
      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      this.cube.castShadow = true
      this.cube.position.set(-40, 3, 0)
      this.scene.add(this.cube)
      let sphereGeometry = new THREE.SphereGeometry(4, 4, 4)
      let sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x7777FF,
        wireframe: false
      })
      this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      this.sphere.castShadow = true
      this.sphere.position.set(10, 4, 2)
      this.sphere.geometry.verticesNeedUpdate = true
      this.sphere.geometry.normalsNeedUpdate = true
      this.scene.add(this.sphere)
      // a
      // let spotLight = new THREE.SpotLight() // 光源
      // spotLight.position.set(-40, 40, -15)
      // spotLight.castShadow = true
      // spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
      // spotLight.shadow.camera.far = 130
      // spotLight.shadow.camera.near = 40
      // this.scene.add(spotLight)
      // 点光源
      const point = new THREE.PointLight(0x2D2DBF)
      point.position.set(30, 30, 0)
      this.scene.add(point)
      const point2 = new THREE.PointLight(0xffffff)
      point2.position.set(-30, 30, 0)
      this.scene.add(point2)
      //   a
      this.camera.position.set(0, 60, 80)
      // this.camera.position.set(-30, 40, 30)
      this.camera.lookAt(this.scene.position)
      document.getElementById('ani_3').appendChild(this.renderer.domElement)
      this.renderScene()
    },
    renderScene () {
      // this.plane2.rotation.z += 0.02
      // this.plane3.rotation.z += 0.02
      // this.plane4.rotation.z -= 0.02
      // this.plane5.rotation.z -= 0.02
      this.cube.rotation.y += 0.1
      requestAnimationFrame(this.renderScene)
      this.renderer.render(this.scene, this.camera)
    },
    createBox () {
      let cubeSize = spetMethod.common.getRanMath(2, 8)
      let cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
      let cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0x0C4B74,
        wireframe: false
      })
      let cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      cube.castShadow = true
      cube.position.x = spetMethod.common.getRanMath(-10, 30)
      cube.position.y = spetMethod.common.getRanMath(0, 30)
      cube.position.z = spetMethod.common.getRanMath(-20, 20)
      this.scene.add(cube)
    }
  }
}

</script>
