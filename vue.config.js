const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // baseUrl从 Vue CLI 3.3 起已弃用，请使用publicPath
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
  // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
  publicPath: './',
  // process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  // 默认值'dist'
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的目录(相对于outputDir目录)。
  // 默认值''
  assetsDir: 'assets',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  // 默认值'index.html'
  // indexPath: "myIndex.html",
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
  // filenameHashing: false,
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  // lintOnSave: process.env.NODE_ENV !== "production",
  lintOnSave: false,

  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@assets', resolve('./src/assets'))
  },
  configureWebpack: () => {},
  // 所有 webpack-dev-server 的选项都支持。
  // devServer: {
  //   host: 'localhost',
  //   port: 8080, // 端口号
  //   https: false,
  //   open: true, // 配置自动启动浏览器
  //   // 配置多个代理
  //   // proxy: {
  //   //   '/api': {
  //   //     target: 'http://47.97.73.43:3006',
  //   //     changeOrigin: true
  //   //     // ws: true,
  //   //     // pathRewrite: {
  //   //     //   '^/api': '/'
  //   //     // }
  //   //   }
  //   // }
  // }
  devServer: {
    // development server port 8000
    port: 8000,
    proxy: {
      '/': {
        target: 'http://47.97.73.43:3006',
        pathRewrite: { '^/': '' },
        ws: false,
        changeOrigin: true
      }
      // '/api': {
      //   target: 'http://XX.XX.XX.XX:8083',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '/api'   // 这种接口配置出来     http://XX.XX.XX.XX:8083/api/login
      //     //'^/api': '/' 这种接口配置出来     http://XX.XX.XX.XX:8083/login
      //   }
      // }
    },
    disableHostCheck: true,
    open: true
  }

}
