const path = require('path')

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
}
