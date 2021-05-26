const api = {
    // APIQN: 'http://bi-image.yurun.com/', // 七牛图片查询地址前缀
    MYUPLOAD:'http://caelestis.club:3006',// 上传的图片服务器地址
    // MALLTOKEN: '/third/API100201',  //获取七牛上传token
    // AUTH100101: 'auth/AUTH100101', // 鉴权刷新
    // 11 用户模块 start
    // 1101
    ADMIN01: {
      url: "/sql/adminTable", // get 账户密码查询
      name: "查询表格"
    },
    ADMIN02: {
      url: "/sql/queryPassword", // post 查询对应密码
      name: "查询密码"
    },
    FILE01: {
      url: "/file/fileDown", // get 下载文件
      name: "下载文件"
    },
    FILE02: {
      url: "/file/upload", // post 上传文件
      name: "上传文件"
    },
    POSTTEST:{
      url: "/postman/test", // post 测试
      name: "post测试"
    },
    GETTEST:{
      url: "/log", // get 测试
      name: "get测试"
    }
  };
  export default api;
  