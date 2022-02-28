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
      /* 
      处理css资源，以及postcss配置
      */
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            //这里官方也讲的比较清楚，（用于配置css-loader作用于@import资源之前loader数量，这样一来就可以使用之前的loader去处理我们import进来的内容，否则是不会处理的）
            options: {
              importLoaders: 1
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
      /* 
   处理lcss资源，以及postcss配置
   */
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },

      /* 
      处理其他资源
      */
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          //file-loader处理图片资源
          // {
          //   loader: 'file-loader',
          //   options: {
          //     //这里可以设置某些placeholder
          //     name: 'img/[name].[hash:6].[ext]',
          //     // outputPath:'image/'
          //   }
          // }

          //url-loader也可以用来处理图片资源，并且可以用来设置阈值，小于阈值的转为base64，大于阈值的进行正常打包处理即可,这样做的好处是小图片可以减少清楚次数，增加加载速度,其他用法发file-loader相似
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name].[hash:6].[ext]',
              limit: 100 * 1024,
              //
              esModule:false
            }
          }
        ],
        //避免asset重复，因此讲当前的asset模块设置此属性
        type: 'javascript/auto'
      },
    ]
  }

}