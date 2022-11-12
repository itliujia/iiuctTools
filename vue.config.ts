/*
 * @Description: file content
 * @Author: Liu Jia
 * @Date: 2022-11-06 14:03:18
 * @LastEditTime: 2022-11-12 16:03:48
 */

module.exports = {
  lintOnSave: false, //关闭代码校验
  devServer: {
    open: true, // 是否自动弹出浏览器
    port: 8000, // 修改默认端口
    proxy: {
      // 代理转发(服务器与服务器之间是不存在跨域的)
      "/api": {
        // 1 目标路径
        //重写路径为api
        target: "http://api.iiuct.cn/",
        //2 允许跨域
        changOrigin: true,
        //3 重写路径
        pathRewrite: {
          // 这里理解成用‘/api’代替target里面的地址
          //   '^/api': ''
        },
        secure: true, // 如果是https接口，需要配置这个参数
        ws: true, // 是否开启websockes协议请求
      },
    },
  },
};
