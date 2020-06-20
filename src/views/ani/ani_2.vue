<!--  -->
<template>
  <div id="ani_2">
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: '',
  data () {
    return {
      renderer: null,
      scene: null,
      camera: null,
      plane: null, // 平面
      cube: null, // 立方体
      sphere: null, // 球
      step: 0
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.init()
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
      let axes = new THREE.AxesHelper(20)
      this.scene.add(axes)
      //  a
      let planeGeometry = new THREE.PlaneGeometry(60, 20)
      let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
      this.plane = new THREE.Mesh(planeGeometry, planeMaterial)
      this.plane.rotation.x = -0.5 * Math.PI
      this.plane.position.set(15, 0, 0)
      this.plane.receiveShadow = true
      this.scene.add(this.plane)
      //  a
      let cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
      let cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xFF0000,
        wireframe: false
      })
      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      this.cube.castShadow = true
      this.cube.position.set(-10, 3, 0)
      this.scene.add(this.cube)
      //  a
      let sphereGeometry = new THREE.SphereGeometry(4, 4, 4)
      let sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x7777FF,
        wireframe: false
      })
      this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      this.sphere.castShadow = true
      this.sphere.position.set(20, 4, 2)
      this.scene.add(this.sphere)
      //   a
      let spotLight = new THREE.SpotLight() // 光源
      spotLight.position.set(-40, 40, -15)
      spotLight.castShadow = true
      spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
      spotLight.shadow.camera.far = 130
      spotLight.shadow.camera.near = 40
      this.scene.add(spotLight)
      //   a
      this.camera.position.set(-30, 40, 30)
      this.camera.lookAt(this.scene.position)
      document.getElementById('ani_2').appendChild(this.renderer.domElement)
      this.renderScene()
    //   renderer.render(scene, camera)
    },
    renderScene () {
      this.cube.rotation.x += 0.02
      this.step += 0.04
      this.sphere.position.x = 20 + 10 * (Math.cos(this.step))
      this.sphere.position.y = 2 + 10 * Math.abs(Math.sin(this.step))
      requestAnimationFrame(this.renderScene)
      this.renderer.render(this.scene, this.camera)
    }
  }
}

</script>
<style  scoped>
</style>
