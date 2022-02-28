/* 
.babelrc.js文件：早期使用较多的配置方式，但是对于配置多包管理的项目是比较麻烦的
.babel.config.js文件，可以直接作用于多包管理项目的子包，更加推荐。
*/

/* 
使用polyfill:最新版本的babel使用polyfill需要安装两个核心库（core-js regenerator-runtime）
*/
module.exports = {
  presets: [
    /* 处理js的代码，设置相关预设 */
    ["@babel/preset-env", {
      /* 
      false:不用任何polyfill相关的代码
      usage:代码中需要哪些polyfill就引入相关的polyfill
      entry:需要导入部分文件，（然后根据浏览器去引入所有的polyfill）
       注：如果要使用enrty则需要在入口处加上import 'core-js/stable'   import 'regenerator-runtime/runtime'
       这样做会使browserlist目标导入所有的polyfill，会导致对应的包变大
       
      */
      useBuiltIns: "usage",
      //声明core版本
      corejs: 3
    }],
    /*处理ts代码，设置ts预设 */
    ["@babel/preset-typescript"]

    /* 处理react jsx代码，设置react预设 */
  ],
  plugins: [
    //这个插件其实作用也是使用polyfill，但是和上面useBuiltIns不同的是这个插件不会将polyfill补丁后的代码全局导入，而useBuiltIn会，这样可能会造成一些代码的污染，例如我们开发第三方的库时，就应该使用这个插件，而非useBuildIn。
    // ["@babel/plugin-transform-runtime", {
    //   corejs: 3
    // }]
  ]
}