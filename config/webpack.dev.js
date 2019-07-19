const path = require('path')
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin')
// console.log(htmlPlugin)
module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    main2: './src/main2.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  devServer: {
    compress: true,
    host: '0.0.0.0',
    port: 7766,
    contentBase:path.resolve(__dirname,'../dist'),
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins:[
    new htmlPlugin({
      minify:{ //是对html文件进行压缩
          removeAttributeQuotes:true  //removeAttrubuteQuotes是却掉属性的双引号。
      },
      hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
      template:'./src/index.html' //是要打包的html模版路径和文件名称。
     
    }),
    new uglify()
  ],
}
