<!--  -->
<template>
  <div>
      <div id="info"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
// import image from '@/assets/image/earth.jpg'
export default {
  name: '',
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.init()
  },

  methods: {
    // init () {
    //   var scene = new THREE.Scene()
    //   console.log(scene)
    //   // 创建一个摄像头，它定义了我们看的地方
    //   // PerspectiveCamera(透视摄像机)、第一个属性是视野角度(FOV)、第二个值是长宽比(aspect ratio)、接下来的两个值是远剪切面和近剪切面
    //   var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    //   // 创建一个渲染器(负责计算指定相机角度下浏览器中scene的样子)和设置大小
    //   var renderer = new THREE.WebGLRenderer()
    //   renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0)) // 将renderer对象的背景色设置为0xEEEEEE
    //   renderer.setSize(window.innerWidth, window.innerHeight) // 让renderer对象将scene渲染成多大的尺寸
    //   renderer.shadowMapEnabled = true
    //   // 告诉渲染器需要阴影⭐️
    //   // 在屏幕中显示轴
    //   // var axes = new THREE.AxisHelper(20);  // axes坐标轴对象
    //   // scene.add(axes);  // 把坐标轴添加到场景中去
    //   // 创建接地面
    //   var planeGeometry = new THREE.PlaneGeometry(60, 20);  // PlaneGeometry: 平面几何 (参数: 宽60, 高20)
    //   var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});  // // MeshLambertMaterial:网格材质 (用来设置平面的外观, 颜色，透明度等)
    //   var plane = new THREE.Mesh(planeGeometry, planeMaterial);  // 把这2个对象合并到一个名为plane(平面)的Mesh(网格)对象中
    //   // 旋转并定位平面
    //   plane.receiveShadow = true // 平面接收阴影⭐️
    //   plane.rotation.x = -0.5 * Math.PI // 绕X轴旋转90度
    //   plane.position.x = 15 // 平面坐标位置
    //   plane.position.y = 0
    //   plane.position.z = 0
    //   scene.add(plane) // 把平面添加到场景
    //   // 创建一个立方体
    //   var cubeGeometry = new THREE.BoxGeometry(4, 4, 4) // 立方体几何
    //   var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000}) // 立方体材质(颜色、wireframe: true线框)
    //   var cube = new THREE.Mesh(cubeGeometry, cubeMaterial) // 立方体和外观合并
    //   cube.castShadow = true // 立方体阴影⭐️
    //   cube.position.x = -4 // 立方体的坐标位置
    //   cube.position.y = 3
    //   cube.position.z = 0
    //   scene.add(cube) //把立方体添加到场景
    //   // 创建一个球体
    //   var sphereGeometry = new THREE.SphereGeometry(4, 20, 20) // 球体
    //   var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff}) // 球体的外观(颜色、wireframe: true线框)
    //   var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial) // 球体与外观合并
    //   sphere.castShadow = true // 球体的阴影
    //   sphere.position.x = 20 // 球体的位置
    //   sphere.position.y = 4
    //   sphere.position.z = 2
    //   scene.add(sphere) // 把圆添加到场景
    //   // 将摄像机定位并指向场景中心
    //   camera.position.x = -30
    //   camera.position.y = 40
    //   camera.position.z = 30
    //   camera.lookAt(scene.position) // lookAt函数指向场景的位置
    //   // 添加一个光源⭐️
    //   var spotLight = new THREE.SpotLight(0xffffff)
    //   spotLight.position.set(-40, 60, -10)
    //   spotLight.castShadow = true // 让光源产生阴影
    //   scene.add(spotLight)
    //   // 将渲染器的输出添加到html元素中
    //   document.getElementById('webgl-output').appendChild(renderer.domElement);
    //   // 渲染的场景
    //   renderer.render(scene, camera)
    // },
    init () {
      const scene = new THREE.Scene() // 场景
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      // 相机 渲染器
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(renderer.domElement)
      const geometry = new THREE.BoxGeometry(1, 1, 1) // 立方体
      const material = new THREE.MeshBasicMaterial({ color: 0x0000FF }) // 材质
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      camera.position.z = 5
      const animate = function () {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      animate()
    }
  }
}

</script>
<style  scoped>
</style>
