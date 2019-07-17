const path = require('path')

module.exports = {
  entry: {
    main: './src/main.js'
  },               // 入口文件
  output: {
    filename: 'bundle.js',      // 打包后的文件名称
    path: path.resolve(__dirname,'../dist')  // 打包后的目录，必须是绝对路径
  },              // 出口文件
  module: {},              // 处理对应模块
  plugins: [],             // 对应的插件
  devServer: {},           // 开发服务器配置
  mode: 'development'      // 模式配置
}