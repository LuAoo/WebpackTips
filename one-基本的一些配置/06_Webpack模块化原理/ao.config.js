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
  entry: './src/main.js',
  devtool:'source-map',
  // output是一个对象
  output: {
    // 这里output必须是一个绝对路径
    path: path.resolve(__dirname, 'build'),
    filename: 'js/trunk.js',
  },
 
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
  ],
  mode:'development'
}