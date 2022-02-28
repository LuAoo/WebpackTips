const path = require('path');
/* 
下面是一些插件的安装
*/
//CleanWebpackPlugin:这个插件一般是用来在我们打包时清除我们之前的文件。
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//HtmlWebpackPlugin:这是用于生成我们打包以后的项目入口文件，通常我们会自定义一个html模板进行将其作为我们打包完成后的入口文件。
const HtmlWebpackPlugin = require('html-webpack-plugin');
//DefinePlugin:为我们创建一个全局的常量，并且不需要我们额外的安装，因为webpack内置了这个插件
const { DefinePlugin } = require('webpack');
//CopyWebpackPlugin:复制某些文件到打包处。
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/myMain.js",
  // output是一个对象
  output: {
    // 这里output必须是一个绝对路径
    path: path.resolve(__dirname, 'build'),
    filename: 'js/trunk.js',

    //设置AssetModule type处理的文件都会在这个文件夹下
    // assetModuleFilename: 'img/[name].[hash:6][ext]'

  },
  //loader:去处理特定的某一个文件。转化特定的模块类型（经常去处理固定的文件，比如css、font、MP3...）
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
      webpack5处理资源模块的新写法，这里我们处理资源模块使用module asset
      */
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        /* 
        实现file-loader的效果
        */
        // type: 'asset/resource',
        // generator: {
        //   filename: 'img/[name].[hash:6][ext]'
        // }


        /* 
        实现inline的效果（也就是之前版本的url-loader的效果）但是只能转换为base64的格式。
         */
        // type: 'asset/inline'


        /* 
        实现url-loader设置阈值的效果，使用asset实现。如果目标文件大于阈值则使用resource的方式，如果小于则使用inline的方式
        */
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        },
        generator: {
          filename: 'img/[name].[hash:6][ext]'
        }
      },
      /* 
      处理字体文件（原理就是赋值）
      我们处理mp3、mp4等都可以使用这种方式去处理
      */
      {
        test: /\.ttf|woff|woff2$/,
        type: "asset/resource",
        generator: {
          filename: 'font/[name].[hash:6][ext]'
        }
      }
    ]
  },


  /* 
  plugins:执行一些更加广泛的任务，比如打包优化，资源管理、环境变量的注入等等(这里pugins是一个数组)
  plugins一般都是一个类，因此需要我们去实例化。
  */
  plugins: [
    new CleanWebpackPlugin(),
    //可以为htmlwebpackplugin进行自定义模板。
    new HtmlWebpackPlugin({
      title: '嗷嗷的webpack',
      template: './public/index.html'
    }),
    new DefinePlugin({
      //设置默认值键值对
      BASE_URL: "'./'"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          //设置copy时需要忽略的文件
          globOptions: {
            ignore: ['**/index.html','**/abc.txt']
          }
        }
      ]
    })
  ]
}