<!-- fly game -->
<template>
  <div id="world"></div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Texture } from 'three'
export default {
  name: '',
  data () {
    return {
      colors: {
        red: 0xf25346,
        white: 0xd8d0d1,
        brown: 0x59332e,
        pink: 0xF5986E,
        brownDark: 0x23190f,
        blue: 0x68c3c0
      },
      scene: null,
      camera: null,
      fieldOfView: null,
      aspectRatio: null,
      nearPlane: null,
      farPlane: null,
      HEIGHT: null,
      WIDTH: null,
      renderer: null,
      container: null,
      hemisphereLight: null,
      shadowLight: null
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.init()
  },

  methods: {
    init () {
      // 创建场景，相机和渲染器
      this.createScene()
      // 添加光源
      this.createLights()
      // 添加对象
      this.createPlane()
      this.createSea()
      this.createSky()
      // 调用循环函数，在每帧更新对象的位置和渲染场景
      this.loop()
    },
    createScene () {
      // 获得屏幕的宽和高，
      // 用它们设置相机的纵横比
      // 还有渲染器的大小
      this.HEIGHT = window.innerHeight
      this.WIDTH = window.innerWidth
      // 创建场景
      this.scene = new THREE.Scene()
      this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950)
      // 创建相机
      this.aspectRatio = this.WIDTH / this.HEIGHT
      this.fieldOfView = 60
      this.nearPlane = 1
      this.farPlane = 10000
      /**
       * PerspectiveCamera 透视相机
       * fieldOfView 视角
       * aspectRatio 纵横比
       * nearPlane 近平面
       * farPlane 远平面
       */
      this.camera = new THREE.PerspectiveCamera(
        this.fieldOfView,
        this.aspectRatio,
        this.nearPlane,
        this.farPlane
      )
      // 设置相机的位置
      this.camera.position.x = 0
      this.camera.position.z = 200
      this.camera.position.y = 100

      // 创建渲染器
      this.renderer = new THREE.WebGLRenderer({
        // 在 css 中设置背景色透明显示渐变色
        alpha: true,
        // 开启抗锯齿，但这样会降低性能。
        // 不过，由于我们的项目基于低多边形的，那还好 :)
        antialias: true
      })
      // 定义渲染器的尺寸；在这里它会填满整个屏幕
      this.renderer.setSize(this.WIDTH, this.HEIGHT)

      // 打开渲染器的阴影地图
      this.renderer.shadowMap.enabled = true

      // 在 HTML 创建的容器中添加渲染器的 DOM 元素
      this.container = document.getElementById('world')
      this.container.appendChild(this.renderer.domElement)

      // 监听屏幕，缩放屏幕更新相机和渲染器的尺寸
      window.addEventListener('resize', this.handleWindowResize, false)
    },
    createLights () {
      // --
    },
    createPlane () {
      // --
    },
    createSea () {
      // --
    },
    createSky () {
      // --
    },
    loop () {
      // --
    },
    handleWindowResize () {
      // 更新渲染器的高度和宽度以及相机的纵横比
      this.HEIGHT = window.innerHeight
      this.WIDTH = window.innerWidth
      this.renderer.setSize(this.WIDTH, this.HEIGHT)
      this.camera.aspect = this.WIDTH / this.HEIGHT
      this.camera.updateProjectionMatrix()
    }
  }
}

</script>
<style  scoped>
#world{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(#e4e0ba, #f7d9aa);
}
</style>
