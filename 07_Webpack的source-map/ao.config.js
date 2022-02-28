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
  mode: 'development',
  entry: './src/main.js',

  /* 不生成sourcemap文件 */
  // devtool: false,

  /* eval：不生成sourcemap文件，但是再eval函数内产生映射 */
  // devtool:'eval',

  /* 生成source-map */
  // devtool: 'source-map',

  /* 生成sourcemap（但是是在eval函数内部） */
  // devtool: 'eval-source-map',

  /* 会生成sourcemap的值,但是source-map是以DataURL添加到bundle文件的后面 */
  // devtool: 'inline-source-map',

  /* 会生成sourcemap,但是会更加高效一些(cheap低开销),因为它没有生成列映射. */
  // devtool: 'cheap-source-map',

  /* 会生成sourcemap,类似于cheap-source-map,但是对源自loader的sourcemap处理会更好(例如我们的代码被loader处理过.依然会被映射为原始模样) */
  devtool: 'cheap-module-source-map', 
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/trunk.js',
  },

  module: {
    rules: [
      {
        test:/\.js$/,
        use:[
          {
            loader:'babel-loader',
            options:{
              presets:["@babel/preset-env"]
            }
          }
        ]
      },
      {}
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
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
          globOptions: {
            ignore: ['**/index.html', '**/abc.txt']
          }
        }
      ]
    })
  ],
}