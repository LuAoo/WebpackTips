!function(){var n={98:function(n,e,t){"use strict";var r=t(81),o=t.n(r),s=t(645),c=t.n(s)()(o());c.push([n.id,".content {\n  font-size: 30px;\n  font-weight: 200;\n}\n",""]),e.Z=c},310:function(n,e,t){"use strict";var r=t(81),o=t.n(r),s=t(645),c=t.n(s)()(o());c.push([n.id,".content{\r\n  color: rgba(18,52,86,0.47059);\r\n}\r\n:-webkit-full-screen{\r\n\r\n}\r\n:-ms-fullscreen{\r\n\r\n}\r\n:fullscreen{\r\n\r\n}\r\n.content{\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  transition: all 2s ease;\r\n}\r\n",""]),e.Z=c},645:function(n){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(c[a]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&c[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:function(n){"use strict";n.exports=function(n){return n[1]}},379:function(n){"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var s={},c=[],i=0;i<n.length;i++){var a=n[i],u=r.base?a[0]+r.base:a[0],l=s[u]||0,f="".concat(u," ").concat(l);s[u]=l+1;var p=t(f),d={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var v=o(d,r);r.byIndex=i,e.splice(i,0,{identifier:f,updater:v,references:1})}c.push(f)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var s=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<s.length;c++){var i=t(s[c]);e[i].references--}for(var a=r(n,o),u=0;u<s.length;u++){var l=t(s[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}s=a}}},569:function(n){"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(n){"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:function(n,e,t){"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:function(n){"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:function(n){"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},411:function(n){n.exports={mul:(n,e)=>n-e}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={id:r,exports:{}};return n[r](s,s.exports,t),s.exports}t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){"use strict";var n=t(379),e=t.n(n),r=t(795),o=t.n(r),s=t(569),c=t.n(s),i=t(565),a=t.n(i),u=t(216),l=t.n(u),f=t(589),p=t.n(f),d=t(310),v={};v.styleTagTransform=p(),v.setAttributes=a(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),e()(d.Z,v),d.Z&&d.Z.locals&&d.Z.locals;var m=t(98),h={};h.styleTagTransform=p(),h.setAttributes=a(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,document.body.appendChild(function(){const n=document.createElement("div");return n.innerHTML=["hello","Webpack"].join(" "),n.className="content",n}());const{mul:y}=t(411);console.log(30),console.log(y(30,10))}()}();