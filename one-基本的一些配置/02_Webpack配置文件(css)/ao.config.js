const path = require('path');
module.exports = {
  entry: "./src/myMain.js",
  // output是一个对象
  output: {
    // 这里output必须是一个绝对路径
    path: path.resolve(__dirname, 'build'),
    filename: 'trunk.js'
  },
  //loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            //这里官方也讲的比较清楚，（用于配置css-loader作用于@import资源之前loader数量，这样一来就可以使用之前的loader去处理我们import进来的内容，否则是不会处理的）
            options:{
              importLoaders:1
            }
          },
          //postcss只是一个工具，postcss-loader是为了再使用webpack打包将postcss使用起来并且配置一些需要的插件
          {
            loader: 'postcss-loader',
            // 这里也可以使用分离文件的写法(postcss.config.js)
            options: {
              postcssOptions: {
                plugins: [
                  //autoprefixer是一个增加浏览器前缀的插件
                  // require('autoprefixer'),
                  //postcss-preset-env是一个可以将我们现代的css特性转为大多数浏览器认识的css。在一般的项目配置中都会去使用这个插件，当然这个插件也集成了autoprefixer插件
                  require('postcss-preset-env')
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  }

}