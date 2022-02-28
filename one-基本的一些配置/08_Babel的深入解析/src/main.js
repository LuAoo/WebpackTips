//可以使用命令行去执行babel,需要安装相应的babel-cli以及一些plugin.也可以使用预设来代替这些plugin的安装.
import 'core-js/stable'
import 'regenerator-runtime/runtime'
const tt = (res) => {
  console.log(res);
}
tt('213')
new Promise((resolve, reject) => { resolve('12') })