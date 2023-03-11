(()=>{"use strict";var e={424:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),c=n.n(o),a=n(645),r=n.n(a),i=n(667),d=n.n(i),s=new URL(n(13),n.b),l=r()(c()),m=d()(s);l.push([e.id,":root {\n  --off-white: #ccc;\n  --main-color: #ff6b63;\n  --transparent-black: rgba(5, 5, 5, 0.75);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: inherit;\n}\n\n@font-face {\n  font-family: 'main font';\n  src: url("+m+");\n}\n\nbody {\n  background-color: #222;\n  color: var(--off-white);\n  line-height: 1.5;\n  font-family: 'main font', sans-serif;\n}\n\nnav {\n  top: 0;\n  position: absolute;\n  font-size: 2em;\n  background-color: var(--transparent-black);\n  padding: 10px 20px;\n  color: var(--main-color);\n  width: 100%;\n}\n\n.menu-nav,\n.contact-nav {\n  position: static;\n  font-size: 2em;\n  background-color: var(--transparent-black);\n  padding: 10px 20px;\n  color: var(--main-color);\n  width: 100%;\n}\n\n.main-menu {\n  margin-top: 5%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5%;\n  margin-bottom: 5%;\n}\n\n.card {\n  background-color: var(--transparent-black);\n  color: var(--main-color);\n  font-size: 2vw;\n  width: 25vw;\n  height: 25vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 15px 0 15px;\n}\n\n.card > img {\n  height: 65%;\n}\n.quote {\n  position: absolute;\n  left: 30%;\n  right: 30%;\n  top: 225px;\n  font-size: 2em;\n  background-color: var(--transparent-black);\n  padding: 10px 0 10px 0;\n  color: var(--off-white);\n  white-space: pre-line;\n}\n\n.home-img {\n  width: 100vw;\n  height: 35em;\n}\n\n#content {\n  display: grid;\n  place-items: center;\n  text-align: center;\n}\n\np {\n  padding: 1% 15% 3% 15%;\n}\n\na {\n  color: var(--main-color);\n}\n\nfooter {\n  background-color: var(--transparent-black);\n  margin-top: 5%;\n  width: 100%;\n  padding: 15px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  width: 50%;\n  margin-bottom: 15%;\n  padding: 25px;\n  margin-top: 10px;\n}\n\n.contact-main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contact-heading {\n  margin-top: 15px;\n  border-bottom: 2px solid var(--main-color);\n  margin-bottom: 5%;\n}\n\nh3 {\n  margin-top: 15px;\n}\n",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,c,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(r[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),c&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=c):l[4]="".concat(c)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},r=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,m="".concat(s," ").concat(l);a[s]=l+1;var u=n(m),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=c(p,o);o.byIndex=i,t.splice(i,0,{identifier:m,updater:h,references:1})}r.push(m)}return r}function c(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,c){var a=o(e=e||[],c=c||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var i=n(a[r]);t[i].references--}for(var d=o(e,c),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var c=void 0!==n.layer;c&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,c&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},13:(e,t,n)=>{e.exports=n.p+"Labrada-VariableFont_wght.ttf"}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{n(13);var e=n(379),t=n.n(e),o=n(795),c=n.n(o),a=n(569),r=n.n(a),i=n(565),d=n.n(i),s=n(216),l=n.n(s),m=n(589),u=n.n(m),p=n(424),h={};function f(){!function(){const e=document.createElement("div");e.setAttribute("id","content"),document.body.appendChild(e);const t=document.createElement("nav");t.classList="menu-nav",e.appendChild(t);const n=document.createElement("h1");n.textContent="Roku Sunset",t.appendChild(n);const o=document.createElement("button");o.textContent="Home",o.classList="home-button",t.appendChild(o);const c=document.createElement("button");c.textContent="Menu",c.classList="menu-button",t.appendChild(c);const a=document.createElement("button");a.textContent="Contact",a.classList="contact-button",t.appendChild(a)}(),function(){const e=document.createElement("div");e.classList="main-menu",content.appendChild(e);const t=document.createElement("div");t.classList="card",t.textContent="Tonkotsu Ramen";const n=document.createElement("img");n.src="/src/assets/imgs/tonkotsu-ramen.jpg",t.appendChild(n),e.appendChild(t);const o=document.createElement("div");o.classList="card",o.textContent="Shoyu Ramen";const c=document.createElement("img");c.src="/src/assets/imgs/shoyu-ramen.jpg",o.appendChild(c),e.appendChild(o);const a=document.createElement("div");a.classList="card",a.textContent="Miso Ramen";const r=document.createElement("img");r.src="/src/assets/imgs/miso-ramen.jpg",a.appendChild(r),e.appendChild(a);const i=document.createElement("div");i.classList="card",i.textContent="Miso Soup";const d=document.createElement("img");d.src="/src/assets/imgs/miso-soup.jpg",i.appendChild(d),e.appendChild(i);const s=document.createElement("div");s.classList="card",s.textContent="Udon";const l=document.createElement("img");l.src="/src/assets/imgs/udon.jpg",s.appendChild(l),e.appendChild(s);const m=document.createElement("div");m.classList="card",m.textContent="Soba";const u=document.createElement("img");u.src="/src/assets/imgs/soba-noodles.jpg",m.appendChild(u),e.appendChild(m)}(),function(){const e=document.createElement("footer");content.appendChild(e);const t=document.createTextNode("Copyright © ");e.appendChild(t);const n=document.createElement("a");n.href="https://github.com/Royuin",n.textContent="Royuin ",e.appendChild(n);const o=document.createTextNode("2023 All Rights Reserved");e.appendChild(o)}()}function C(){!function(){const e=document.createElement("div");e.setAttribute("id","content"),document.body.appendChild(e);const t=document.createElement("header");e.appendChild(t);const n=document.createElement("nav");t.appendChild(n);const o=document.createElement("h1");o.textContent="Roku Sunset",n.appendChild(o);const c=document.createElement("button");c.textContent="Home",c.classList="home-button",n.appendChild(c);const a=document.createElement("button");a.textContent="Menu",a.classList="menu-button",n.appendChild(a);const r=document.createElement("button");r.textContent="Contact",r.classList="contact-button",n.appendChild(r);const i=document.createElement("p");i.classList="quote",i.textContent='"Only the pure in heart can make a good soup." \n',i.textContent+="-Ludwig Van Beethoven",t.appendChild(i);const d=document.createElement("img");d.src="/src/assets/imgs/ramen-shop.jpg",d.classList="home-img",t.appendChild(d)}(),function(){const e=document.createElement("p");e.textContent="Broth made from scratch with homemade noodles we serve the best ramen you haven't had yet. With only one location\nyou can be sure we put it all we got into each and every bowl of ramen you eat.",content.appendChild(e);const t=document.createElement("p");t.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quas autem sapiente ullam explicabo delectus totam culpa deserunt saepe laudantium facere eum quis, unde molestiae est magni at ut quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta tenetur recusandae suscipit quibusdam provident dolorem officiis dolores? Similique quibusdam tenetur, minus sed dignissimos aliquid! Illum eaque quam veniam excepturi.",content.appendChild(t);const n=document.createElement("h2");n.textContent="History of Roku Sunset",content.appendChild(n);const o=document.createElement("p");o.textContent="While this restaurant may not actually exist, you can rest assured this website was made with a love of web development and good bowl of ramen.",content.appendChild(o)}(),function(){const e=document.createElement("footer");content.appendChild(e);const t=document.createTextNode("Copyright © ");e.appendChild(t);const n=document.createElement("a");n.href="https://github.com/Royuin",n.textContent="Royuin ",e.appendChild(n);const o=document.createTextNode("2023 All Rights Reserved");e.appendChild(o)}()}function g(){!function(){const e=document.createElement("div");e.setAttribute("id","content"),document.body.appendChild(e);const t=document.createElement("nav");t.classList="contact-nav",e.appendChild(t);const n=document.createElement("h1");n.textContent="Roku Sunset",t.appendChild(n);const o=document.createElement("button");o.textContent="Home",o.classList="home-button",t.appendChild(o);const c=document.createElement("button");c.textContent="Menu",c.classList="menu-button",t.appendChild(c);const a=document.createElement("button");a.textContent="Contact",a.classList="contact-button",t.appendChild(a)}(),function(){const e=document.createElement("main");e.classList="contact-main",content.appendChild(e);const t=document.createElement("h2");t.textContent="Contact Us",t.classList="contact-heading",e.appendChild(t);const n=document.createElement("h3");n.textContent="Location",e.appendChild(n);const o=document.createElement("p");o.textContent="123 Fake Location Blvd. State, Country 12345",e.appendChild(o);const c=document.createElement("h3");c.textContent="Hours",e.appendChild(c);const a=document.createElement("p");a.textContent="Monday, Tuesday, Wednesday, Thursday: \n 9 am - 10 pm \n Friday, Saturday, Sunday: 10 am - 12 pm",e.appendChild(a);const r=document.createElement("h3");r.textContent="Message Us",e.appendChild(r);const i=document.createElement("form");e.appendChild(i);const d=document.createElement("label");d.for="name",d.textContent="Name: ",i.appendChild(d);const s=document.createElement("input");s.type="text",s.id="name",s.name="name",i.appendChild(s);const l=document.createElement("label");l.for="email",l.textContent="Email: ",i.appendChild(l);const m=document.createElement("input");m.type="email",m.name="email",m.id="email",i.appendChild(m);const u=document.createElement("label");u.for="message",u.textContent="Write your message: ",i.appendChild(u);const p=document.createElement("textarea");p.id="message",p.name="message",i.appendChild(p);const h=document.createElement("button");h.type="submit",h.textContent="Send Message",i.appendChild(h)}(),function(){const e=document.createElement("footer");content.appendChild(e);const t=document.createTextNode("Copyright © ");e.appendChild(t);const n=document.createElement("a");n.href="https://github.com/Royuin",n.textContent="Royuin ",e.appendChild(n);const o=document.createTextNode("2023 All Rights Reserved");e.appendChild(o)}()}h.styleTagTransform=u(),h.setAttributes=d(),h.insert=r().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=l(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,C();let v=document.querySelector(".home-button"),b=document.querySelector(".menu-button"),y=document.querySelector(".contact-button");function x(){let e=document.querySelector(".home-button"),t=document.querySelector(".menu-button"),n=document.querySelector(".contact-button");e.addEventListener("click",(()=>{const e=document.getElementById("content");document.body.removeChild(e),C(),x()})),t.addEventListener("click",(()=>{const e=document.getElementById("content");document.body.removeChild(e),f(),x()})),n.addEventListener("click",(()=>{const e=document.getElementById("content");document.body.removeChild(e),g(),x()}))}v.addEventListener("click",(()=>{const e=document.getElementById("content");document.body.removeChild(e),C(),x()})),b.addEventListener("click",(()=>{const e=document.getElementById("content");document.body.removeChild(e),f(),x()})),y.addEventListener("click",(()=>{const e=document.getElementById("content");document.body.removeChild(e),g(),x()}))})()})();