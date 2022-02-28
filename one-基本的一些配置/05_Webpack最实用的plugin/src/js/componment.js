import '../css/index.css'
import '../css/componment.less'
import pg1 from '../img/pg1.jpg'
function component() {
  const element = document.createElement("div")
  element.innerHTML = ["hello", 'Webpack'].join(' ')
  element.className = "content"

  //创建一个img元素，设置src属性
  const imgEl = new Image();
  // imgEl.src = require('../img/pg1.jpg').default
  imgEl.src = pg1

  element.appendChild(imgEl)


  //创建一个div，设置背景图片
  const element2 = document.createElement('div')
  element2.style.width = 200 + 'px';
  element2.style.height = 200 + 'px';
  // element2.style.backgroundColor = 'red'
  element2.className = 'imgbg'
  element.appendChild(element2);

  // 创建一个i元素，设置一个字体
  const iEl=document.createElement("span");
  iEl.className='iconfont icon-icon-4'
  
  element.appendChild(iEl)
  return element
}
document.body.appendChild(component())
console.log(BASE_URL)