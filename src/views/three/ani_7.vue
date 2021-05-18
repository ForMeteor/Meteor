<!-- 碰撞 游戏 https://www.cnblogs.com/NuclearBoy/p/5675141.html -->
<template>
  <div id="ani_7"></div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
  name : '',
  data () {
    return {
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
      light: null,
    };
  },

  components: {},

  computed: {},

  mounted () {
    this.init()
    window.addEventListener('resize', this.onWindowResize, false);
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
      this.light = new THREE.DirectionalLight( 0xffffff, 1 ) //光源
      this.light.position.set( 1, 1, 1 )
      this.scene.add( this.light )
      document.getElementById('ani_7').appendChild(this.renderer.domElement)
      // this.renderScene()
    },
    renderScene(){},
    //游戏循环
    animate() {
      // requestAnimationFrame( animate );
      // render();
    },// 游戏循环
    render() {
      // renderer.clear();
      // renderer.render( scene, camera );
    },
    onWindowResize(){
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.camera.aspect = 0.5 * window.innerWidth / window.innerHeight // ?
      this.camera.updateProjectionMatrix() // ?
    }
  }
}

</script>
<style  scoped>
</style>