!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/badge-helper"]=t():e["live/badge-helper"]=t()}(self,(function(){return function(){var e,t,n={500:function(e,t,n){"use strict";n.d(t,{j9:function(){return s},Dx:function(){return p},KK:function(){return c},eB:function(){return u}});var o=n(663),r=n(109),i=coreApis.utils.log;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class l{constructor(e=!1,t=0){this.isActive=e,this.id=t}static parseJson(e,t){const n=JSON.parse(e);return 0!==n.code?((0,i.logError)(`${t.errorMessage} 错误码:${n.code} ${n.message||""}`),t.errorAction(n)):t.successAction(n)}}class s extends l{constructor(e){const{medal_id:t,status:n,level:o,medalName:r,uname:i,roomid:l,is_lighted:s}=e;super(1===n,t),a(this,"level",void 0),a(this,"name",void 0),a(this,"upName",void 0),a(this,"roomID",void 0),a(this,"isLighted",void 0),this.level=o,this.name=r,this.upName=i,this.roomID=l,this.isLighted=s}async activate(){return l.parseJson(await(0,o.postTextWithCredentials)("https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear",(0,r.formData)({medal_id:this.id,csrf_token:(0,r.getCsrf)(),csrf:(0,r.getCsrf)()})),{successAction:()=>(this.isActive=!0,!0),errorAction:()=>!1,errorMessage:"佩戴勋章失败."})}async deactivate(){return l.parseJson(await(0,o.postTextWithCredentials)("https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/take_off",(0,r.formData)({csrf_token:(0,r.getCsrf)(),csrf:(0,r.getCsrf)()})),{successAction:()=>(this.isActive=!1,!0),errorAction:()=>!1,errorMessage:"卸下勋章失败."})}}const c=async()=>{const{getTextWithCredentials:e}=await Promise.resolve().then(n.t.bind(n,663,23));return l.parseJson(await e("https://api.live.bilibili.com/i/api/medal?page=1&pageSize=256"),{successAction:e=>lodash.get(e,"data.fansMedalList",[]).map((e=>new s(e))),errorAction:()=>[],errorMessage:"无法获取勋章列表."})};class p extends l{constructor(e){const{id:t,cid:n,wear:o,css:r,name:i,source:l}=e;super(o,r),a(this,"tid",void 0),a(this,"cid",void 0),a(this,"name",void 0),a(this,"source",void 0),a(this,"imageUrl",void 0),this.tid=t,this.cid=n,this.name=i,this.source=l,p.getImageMap().then((e=>{this.imageUrl=e[this.id]}))}static async getImageMap(){if(void 0===p.imageMap){const{getTextWithCredentials:e}=await Promise.resolve().then(n.t.bind(n,663,23));return l.parseJson(await e("https://api.live.bilibili.com/rc/v1/Title/webTitles"),{successAction:e=>(p.imageMap={},e.data.forEach((e=>{p.imageMap[e.identification]=e.web_pic_url})),p.imageMap),errorAction:()=>({}),errorMessage:"获取头衔图片失败."})}return p.imageMap}async activate(){return l.parseJson(await(0,o.postTextWithCredentials)("https://api.live.bilibili.com/i/ajaxWearTitle",`id=${this.tid}&cid=${this.cid}&csrf=${(0,r.getCsrf)()}&csrf_token=${(0,r.getCsrf)()}`),{successAction:()=>(this.isActive=!0,!0),errorAction:()=>!1,errorMessage:"佩戴头衔失败."})}async deactivate(){return l.parseJson(await(0,o.postTextWithCredentials)("https://api.live.bilibili.com/i/ajaxCancelWearTitle",`csrf=${(0,r.getCsrf)()}&csrf_token=${(0,r.getCsrf)()}`),{successAction:()=>(this.isActive=!1,!0),errorAction:()=>!1,errorMessage:"卸下头衔失败."})}}a(p,"imageMap",void 0);const u=async()=>{const{getTextWithCredentials:e}=await Promise.resolve().then(n.t.bind(n,663,23));return l.parseJson(await e("https://api.live.bilibili.com/i/api/ajaxTitleInfo?page=1&pageSize=256&had=1"),{successAction:e=>lodash.get(e,"data.list",[]).map((e=>new p(e))),errorAction:()=>[],errorMessage:"无法获取头衔列表."})}},83:function(e,t,n){var o=n(645)((function(e){return e[1]}));o.push([e.id,".badge-popup {\n  top: 50%;\n  left: calc(100% + 8px);\n  transform: scale(0.9) translateY(-50%);\n  transform-origin: left;\n  padding: 4px;\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(136,136,136,0.13333);\n  box-sizing: border-box;\n  border-radius: 4px;\n}\nbody.dark .badge-popup {\n  background-color: #282828;\n  color: #eee;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\n.badge-popup.open {\n  transform: scale(1) translateY(-50%);\n}\nbody.settings-panel-dock-right .badge-popup {\n  right: calc(100% + 8px);\n  left: unset;\n  transform-origin: right;\n}\n.badge-popup, .badge-popup * {\n  transition: 0.2s ease-out;\n}\n.badge-popup ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.badge-popup ul li {\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 6px 8px;\n  display: flex;\n  justify-content: center;\n}\n.badge-popup ul li:hover {\n  background-color: rgba(136,136,136,0.13333);\n}\n.badge-popup ul li.active {\n  box-shadow: 0 0 0px 1px var(--theme-color), 0 0 0px 3px var(--theme-color-20);\n}\n.badge-popup ul li.gray:not(:hover) {\n  filter: grayscale(1);\n}\n.badge-popup ul li .title-image {\n  display: inline-block;\n  vertical-align: middle;\n  height: 20px;\n}\n.badge-popup ul li .fans-medal-item {\n  display: flex !important;\n  height: 14px;\n  line-height: 14px;\n  color: #fff;\n  border: 1px solid #48b6a5;\n  border-left: 0;\n  white-space: nowrap;\n  border-radius: 2px;\n  flex-shrink: 0;\n  font-size: 12px;\n}\n.badge-popup ul li .fans-medal-item .label {\n  width: 40px;\n  text-align: center;\n  padding: 0 2px;\n  color: #fff;\n  border-radius: 1px 0 0 1px;\n}\n.badge-popup ul li .fans-medal-item .level {\n  width: 16px;\n  background-color: #fff;\n  text-align: center;\n  color: #48b6a5;\n  border-radius: 0 1px 1px 0;\n}\n.badge-popup ul li .fans-medal-item .label,\n.badge-popup ul li .fans-medal-item .level {\n  cursor: pointer;\n  position: relative;\n  display: block;\n  float: left;\n}\n.badge-popup ul li .level-1 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-1 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-1 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-2 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-2 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-2 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-3 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-3 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-3 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-4 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-4 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-4 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-5 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-5 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-5 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-6 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-6 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-6 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-7 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-7 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-7 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-8 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-8 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-8 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-9 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-9 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-9 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-10 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-10 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-10 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-11 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-11 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-11 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-12 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-12 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-12 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-13 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-13 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-13 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-14 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-14 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-14 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-15 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-15 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-15 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-16 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-16 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-16 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-17 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-17 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-17 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-18 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-18 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-18 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-19 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-19 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-19 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-20 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-20 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-20 .level {\n  color: #f6be18;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],c=n[s]||0,p="".concat(s," ").concat(c);n[s]=c+1;var u=l(p),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(d)):a.push({identifier:p,updater:v(d,t),references:1}),o.push(p)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var p,u=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function d(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var b=null,g=0;function v(e,t){var n,o,r;if(t.singleton){var i=g++;n=b||(b=c(t)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=c(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=l(n[o]);a[r].references--}for(var i=s(e,t),c=0;c<n.length;c++){var p=l(n[c]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}n=i}}}},411:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ve}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"multiple-widgets"},[n("VPopup",{ref:"medalPopup",staticClass:"badge-popup medal",attrs:{"trigger-element":e.$refs.medalButton},model:{value:e.medalOpen,callback:function(t){e.medalOpen=t},expression:"medalOpen"}},[n("ul",e._l(e.medalList,(function(t){return n("li",{key:t.id,class:{active:t.isActive,gray:!t.isLighted},attrs:{"data-id":t.id,title:t.upName},on:{click:function(n){return e.toggleBadge(t,e.medalList)}}},[n("div",{staticClass:"fans-medal-item",class:["level-"+t.level]},[n("span",{staticClass:"label"},[e._v(e._s(t.name))]),e._v(" "),n("span",{staticClass:"level"},[e._v(e._s(t.level))])])])})),0)]),e._v(" "),n("DefaultWidget",{ref:"medalButton",attrs:{icon:"mdi-medal"},on:{click:function(t){e.medalOpen=!e.medalOpen}}},[n("span",[e._v("更换勋章")])]),e._v(" "),n("VPopup",{ref:"titlePopup",staticClass:"badge-popup title",attrs:{"trigger-element":e.$refs.titleButton},model:{value:e.titleOpen,callback:function(t){e.titleOpen=t},expression:"titleOpen"}},[n("ul",e._l(e.titleList,(function(t){return n("li",{key:t.id,class:{active:t.isActive},attrs:{"data-id":t.id},on:{click:function(n){return e.toggleBadge(t,e.titleList)}}},[n("img",{staticClass:"title-image",attrs:{src:t.imageUrl}})])})),0)]),e._v(" "),n("DefaultWidget",{ref:"titleButton",attrs:{icon:"mdi-script-outline"},on:{click:function(t){e.titleOpen=!e.titleOpen}}},[n("span",[e._v("更换头衔")])])],1)};o._withStripped=!0;var r=coreApis.ui;function i(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function a(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function l(e){var t=a(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function s(e){return e instanceof a(e).Element||e instanceof Element}function c(e){return e instanceof a(e).HTMLElement||e instanceof HTMLElement}function p(e){return e?(e.nodeName||"").toLowerCase():null}function u(e){return((s(e)?e.ownerDocument:e.document)||window.document).documentElement}function d(e){return i(u(e)).left+l(e).scrollLeft}function f(e){return a(e).getComputedStyle(e)}function b(e){var t=f(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function g(e,t,n){void 0===n&&(n=!1);var o,r,s=u(t),f=i(e),g=c(t),v={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(g||!g&&!n)&&(("body"!==p(t)||b(s))&&(v=(o=t)!==a(o)&&c(o)?{scrollLeft:(r=o).scrollLeft,scrollTop:r.scrollTop}:l(o)),c(t)?((m=i(t)).x+=t.clientLeft,m.y+=t.clientTop):s&&(m.x=d(s))),{x:f.left+v.scrollLeft-m.x,y:f.top+v.scrollTop-m.y,width:f.width,height:f.height}}function v(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function m(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||e.host||u(e)}function h(e){return["html","body","#document"].indexOf(p(e))>=0?e.ownerDocument.body:c(e)&&b(e)?e:h(m(e))}function y(e,t){void 0===t&&(t=[]);var n=h(e),o="body"===p(n),r=a(n),i=o?[r].concat(r.visualViewport||[],b(n)?n:[]):n,l=t.concat(i);return o?l:l.concat(y(m(i)))}function x(e){return["table","td","th"].indexOf(p(e))>=0}function w(e){if(!c(e)||"fixed"===f(e).position)return null;var t=e.offsetParent;if(t){var n=u(t);if("body"===p(t)&&"static"===f(t).position&&"static"!==f(n).position)return n}return t}function O(e){for(var t=a(e),n=w(e);n&&x(n)&&"static"===f(n).position;)n=w(n);return n&&"body"===p(n)&&"static"===f(n).position?t:n||function(e){for(var t=m(e);c(t)&&["html","body"].indexOf(p(t))<0;){var n=f(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}var k="top",j="bottom",M="right",_="left",A="auto",D=[k,j,M,_],C="start",E="end",L="viewport",P="popper",T=D.reduce((function(e,t){return e.concat([t+"-"+C,t+"-"+E])}),[]),S=[].concat(D,[A]).reduce((function(e,t){return e.concat([t,t+"-"+C,t+"-"+E])}),[]),B=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function I(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}var W={placement:"bottom",modifiers:[],strategy:"absolute"};function $(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function N(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?W:r;return function(e,t,n){void 0===n&&(n=i);var r,a,l={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},W),i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:l,setOptions:function(n){d(),l.options=Object.assign(Object.assign(Object.assign({},i),l.options),n),l.scrollParents={reference:s(e)?y(e):e.contextElement?y(e.contextElement):[],popper:y(t)};var r=function(e){var t=I(e);return B.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,l.options.modifiers)));return l.orderedModifiers=r.filter((function(e){return e.enabled})),l.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var i=r({state:l,name:t,instance:u,options:o}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=l.elements,t=e.reference,n=e.popper;if($(t,n)){l.rects={reference:g(t,O(n),"fixed"===l.options.strategy),popper:v(n)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach((function(e){return l.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<l.orderedModifiers.length;o++)if(!0!==l.reset){var r=l.orderedModifiers[o],i=r.fn,a=r.options,s=void 0===a?{}:a,c=r.name;"function"==typeof i&&(l=i({state:l,options:s,name:c,instance:u})||l)}else l.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(e){u.forceUpdate(),e(l)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(r())}))}))),a}),destroy:function(){d(),p=!0}};if(!$(e,t))return u;function d(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!p&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var R={passive:!0};// eslint-disable-next-line import/no-unused-modules
function H(e){return e.split("-")[0]}function V(e){return e.split("-")[1]}function U(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function q(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?H(r):null,a=r?V(r):null,l=n.x+n.width/2-o.width/2,s=n.y+n.height/2-o.height/2;switch(i){case k:t={x:l,y:n.y-o.height};break;case j:t={x:l,y:n.y+n.height};break;case M:t={x:n.x+n.width,y:s};break;case _:t={x:n.x-o.width,y:s};break;default:t={x:n.x,y:n.y}}var c=i?U(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case C:t[c]=t[c]-(n[p]/2-o[p]/2);break;case E:t[c]=t[c]+(n[p]/2-o[p]/2)}}return t}// eslint-disable-next-line import/no-unused-modules
var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function z(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.offsets,l=e.position,s=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:Math.round(t*o)/o||0,y:Math.round(n*o)/o||0}}(i):i,d=p.x,f=void 0===d?0:d,b=p.y,g=void 0===b?0:b,v=i.hasOwnProperty("x"),m=i.hasOwnProperty("y"),h=_,y=k,x=window;if(c){var w=O(n);w===a(n)&&(w=u(n)),r===k&&(y=j,g-=w.clientHeight-o.height,g*=s?1:-1),r===_&&(h=M,f-=w.clientWidth-o.width,f*=s?1:-1)}var A,D=Object.assign({position:l},c&&J);return s?Object.assign(Object.assign({},D),{},((A={})[y]=m?"0":"",A[h]=v?"0":"",A.transform=(x.devicePixelRatio||1)<2?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",A)):Object.assign(Object.assign({},D),{},((t={})[y]=m?g+"px":"",t[h]=v?f+"px":"",t.transform="",t))}// eslint-disable-next-line import/no-unused-modules
var K={left:"right",right:"left",bottom:"top",top:"bottom"};function F(e){return e.replace(/left|right|bottom|top/g,(function(e){return K[e]}))}var X={start:"end",end:"start"};function Y(e){return e.replace(/start|end/g,(function(e){return X[e]}))}function G(e,t){var n,o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&((n=o)instanceof a(n).ShadowRoot||n instanceof ShadowRoot)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Q(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Z(e,t){return t===L?Q(function(e){var t=a(e),n=u(e),o=t.visualViewport,r=n.clientWidth,i=n.clientHeight,l=0,s=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(l=o.offsetLeft,s=o.offsetTop)),{width:r,height:i,x:l+d(e),y:s}}(e)):c(t)?function(e){var t=i(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Q(function(e){var t=u(e),n=l(e),o=e.ownerDocument.body,r=Math.max(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+d(e),s=-n.scrollTop;return"rtl"===f(o||t).direction&&(a+=Math.max(t.clientWidth,o?o.clientWidth:0)-r),{width:r,height:i,x:a,y:s}}(u(e)))}function ee(e,t,n){var o="clippingParents"===t?function(e){var t=y(m(e)),n=["absolute","fixed"].indexOf(f(e).position)>=0&&c(e)?O(e):e;return s(n)?t.filter((function(e){return s(e)&&G(e,n)&&"body"!==p(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),i=r[0],a=r.reduce((function(t,n){var o=Z(e,n);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),Z(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function te(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function ne(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}
// eslint-disable-next-line import/no-unused-modules
function oe(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,a=n.boundary,l=void 0===a?"clippingParents":a,c=n.rootBoundary,p=void 0===c?L:c,d=n.elementContext,f=void 0===d?P:d,b=n.altBoundary,g=void 0!==b&&b,v=n.padding,m=void 0===v?0:v,h=te("number"!=typeof m?m:ne(m,D)),y=f===P?"reference":P,x=e.elements.reference,w=e.rects.popper,O=e.elements[g?y:f],_=ee(s(O)?O:O.contextElement||u(e.elements.popper),l,p),A=i(x),C=q({reference:A,element:w,strategy:"absolute",placement:r}),E=Q(Object.assign(Object.assign({},w),C)),T=f===P?E:A,S={top:_.top-T.top+h.top,bottom:T.bottom-_.bottom+h.bottom,left:_.left-T.left+h.left,right:T.right-_.right+h.right},B=e.modifiersData.offset;if(f===P&&B){var I=B[r];Object.keys(S).forEach((function(e){var t=[M,j].indexOf(e)>=0?1:-1,n=[k,j].indexOf(e)>=0?"y":"x";S[e]+=I[n]*t}))}return S}function re(e,t,n){return Math.max(e,Math.min(t,n))}function ie(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ae(e){return[k,M,j,_].some((function(t){return e[t]>=0}))}// eslint-disable-next-line import/no-unused-modules
var le=N({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,l=o.resize,s=void 0===l||l,c=a(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,R)})),s&&c.addEventListener("resize",n.update,R),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,R)})),s&&c.removeEventListener("resize",n.update,R)}}// eslint-disable-next-line import/no-unused-modules
,data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=q({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,l=n.roundOffsets,s=void 0===l||l,c={placement:H(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),z(Object.assign(Object.assign({},c),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),z(Object.assign(Object.assign({},c),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})}// eslint-disable-next-line import/no-unused-modules
,data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];c(r)&&p(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});c(o)&&p(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}}// eslint-disable-next-line import/no-unused-modules
,requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var o=H(e),r=[_,k].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,a=i[0],l=i[1];return a=a||0,l=(l||0)*r,[_,M].indexOf(o)>=0?{x:l,y:a}:{x:a,y:l}}(n,t.rects,i),e}),{}),l=a[t.placement],s=l.x,c=l.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,l=void 0===a||a,s=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,b=void 0===f||f,g=n.allowedAutoPlacements,v=t.options.placement,m=H(v),h=s||(m===v||!b?[F(v)]:
// eslint-disable-next-line import/no-unused-modules
function(e){if(H(e)===A)return[];var t=F(e);return[Y(e),t,Y(t)]}(v)),y=[v].concat(h).reduce((function(e,n){return e.concat(H(n)===A?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,l=n.flipVariations,s=n.allowedAutoPlacements,c=void 0===s?S:s,p=V(o),u=p?l?T:T.filter((function(e){return V(e)===p})):D,d=u.filter((function(e){return c.indexOf(e)>=0}));0===d.length&&(d=u);var f=d.reduce((function(t,n){return t[n]=oe(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[H(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:b,allowedAutoPlacements:g}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,E=!0,L=y[0],P=0;P<y.length;P++){var B=y[P],I=H(B),W=V(B)===C,$=[k,j].indexOf(I)>=0,N=$?"width":"height",R=oe(t,{placement:B,boundary:p,rootBoundary:u,altBoundary:d,padding:c}),U=$?W?M:_:W?j:k;x[N]>w[N]&&(U=F(U));var q=F(U),J=[];if(i&&J.push(R[I]<=0),l&&J.push(R[U]<=0,R[q]<=0),J.every((function(e){return e}))){L=B,E=!1;break}O.set(B,J)}if(E)for(var z=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return L=t,"break"},K=b?3:1;K>0;K--){if("break"===z(K))break}t.placement!==L&&(t.modifiersData[o]._skip=!0,t.placement=L,t.reset=!0)}}// eslint-disable-next-line import/no-unused-modules
,requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,l=void 0!==a&&a,s=n.boundary,c=n.rootBoundary,p=n.altBoundary,u=n.padding,d=n.tether,f=void 0===d||d,b=n.tetherOffset,g=void 0===b?0:b,m=oe(t,{boundary:s,rootBoundary:c,padding:u,altBoundary:p}),h=H(t.placement),y=V(t.placement),x=!y,w=U(h),A="x"===w?"y":"x",D=t.modifiersData.popperOffsets,E=t.rects.reference,L=t.rects.popper,P="function"==typeof g?g(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):g,T={x:0,y:0};if(D){if(i){var S="y"===w?k:_,B="y"===w?j:M,I="y"===w?"height":"width",W=D[w],$=D[w]+m[S],N=D[w]-m[B],R=f?-L[I]/2:0,q=y===C?E[I]:L[I],J=y===C?-L[I]:-E[I],z=t.elements.arrow,K=f&&z?v(z):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},X=F[S],Y=F[B],G=re(0,E[I],K[I]),Q=x?E[I]/2-R-G-X-P:q-G-X-P,Z=x?-E[I]/2+R+G+Y+P:J+G+Y+P,ee=t.elements.arrow&&O(t.elements.arrow),te=ee?"y"===w?ee.clientTop||0:ee.clientLeft||0:0,ne=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,ie=D[w]+Q-ne-te,ae=D[w]+Z-ne,le=re(f?Math.min($,ie):$,W,f?Math.max(N,ae):N);D[w]=le,T[w]=le-W}if(l){var se="x"===w?k:_,ce="x"===w?j:M,pe=D[A],ue=re(pe+m[se],pe,pe-m[ce]);D[A]=ue,T[A]=ue-pe}t.modifiersData[o]=T}}// eslint-disable-next-line import/no-unused-modules
,requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:
// eslint-disable-next-line import/no-unused-modules
function(e){var t,n=e.state,o=e.name,r=n.elements.arrow,i=n.modifiersData.popperOffsets,a=H(n.placement),l=U(a),s=[_,M].indexOf(a)>=0?"height":"width";if(r&&i){var c=n.modifiersData[o+"#persistent"].padding,p=v(r),u="y"===l?k:_,d="y"===l?j:M,f=n.rects.reference[s]+n.rects.reference[l]-i[l]-n.rects.popper[s],b=i[l]-n.rects.reference[l],g=O(r),m=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,h=f/2-b/2,y=c[u],x=m-p[s]-c[d],w=m/2-p[s]/2+h,A=re(y,w,x),D=l;n.modifiersData[o]=((t={})[D]=A,t.centerOffset=A-w,t)}},effect:function(e){var t=e.state,n=e.options,o=e.name,r=n.element,i=void 0===r?"[data-popper-arrow]":r,a=n.padding,l=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&G(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[o+"#persistent"]={padding:te("number"!=typeof l?l:ne(l,D))})}// eslint-disable-next-line import/no-unused-modules
,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=oe(t,{elementContext:"reference"}),l=oe(t,{altBoundary:!0}),s=ie(a,o),c=ie(l,r,i),p=ae(s),u=ae(c);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]}),se=n(500),ce=Vue.extend({components:{DefaultWidget:r.DefaultWidget,VPopup:r.VPopup},data:()=>({medalList:[],titleList:[],medalOpen:!1,titleOpen:!1}),async mounted(){le(this.$refs.medalButton.$el,this.$refs.medalPopup.$el,{placement:"right",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),le(this.$refs.titleButton.$el,this.$refs.titlePopup.$el,{placement:"right",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),this.loadMedalList(),await se.Dx.getImageMap(),this.loadTitleList()},methods:{async loadMedalList(){this.medalList=await(0,se.KK)()},async loadTitleList(){this.titleList=await(0,se.eB)()},async toggleBadge(e,t){if(console.log(e),e.isActive)e.isActive=!1,await e.deactivate();else{const o=t.find((e=>e.isActive));if(o&&(o.isActive=!1),e.isActive=!0,await e.activate(),e instanceof se.j9){const{getComponentSettings:t}=await Promise.resolve().then(n.t.bind(n,407,23));t("badgeHelper").options.defaultMedalID=e.id}}e instanceof se.j9?await this.loadMedalList():e instanceof se.Dx&&await this.loadTitleList()}}}),pe=n(379),ue=n.n(pe),de=n(83),fe=n.n(de),be={insert:"head",singleton:!1};ue()(fe(),be),fe().locals;var ge=function(e,t,n,o,r,i,a,l){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):r&&(s=l?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(c.functional){c._injectStyles=s;var p=c.render;c.render=function(e,t){return s.call(t),p(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,s):[s]}return{exports:e,options:c}}(ce,o,[],!1,null,null,null);ge.options.__file="registry/lib/components/live/badge-helper/BadgeHelper.vue";var ve=ge.exports},663:function(e){"use strict";e.exports=coreApis.ajax},407:function(e){"use strict";e.exports=coreApis.settings},109:function(e){"use strict";e.exports=coreApis.utils}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return n}});var e=r(109),t=r(500);const n={name:"badgeHelper",displayName:"直播勋章快速更换",description:{"zh-CN":"在直播区中, 可从功能面板中直接切换勋章和头衔."},entry:()=>(async()=>{const{getUID:e}=await Promise.resolve().then(r.t.bind(r,109,23));if(!e())return;const{getComponentSettings:n}=await Promise.resolve().then(r.t.bind(r,407,23)),{options:o}=n("badgeHelper");if(!o.autoMatchMedal)return;const i=document.URL.match(/^https:\/\/live\.bilibili\.com\/(blanc\/)?([\d]+)/);if(!i)return;const a=parseInt(i[2]);if(Number.isNaN(a))return void console.warn("roomID not found");const l=await(0,t.KK)();if(!o.defaultMedalID){const e=l.find((e=>e.isActive));e&&(o.defaultMedalID=e.id,console.log(`set defaultMedalID to activeMedal (${e.id})`))}const s=o.defaultMedalID?l.find((e=>e.id===o.defaultMedalID)):l.find((e=>e.isActive)),c=l.find((e=>e.roomID===a));c?(await c.activate(),console.log(`activated matchMedal (${c.id})`)):s&&(await s.activate(),console.log(`no matchMedal, fallback to defaultMedal (${s.id})`))})(),reload:e.none,unload:e.none,tags:[componentsTags.live],widget:{component:()=>Promise.resolve().then(r.bind(r,411)).then((e=>e.default)),condition:()=>Boolean((0,e.getUID)())},options:{autoMatchMedal:{defaultValue:!0,displayName:"自动佩戴当前直播间勋章"},defaultMedalID:{displayName:"默认勋章ID",hidden:!0,defaultValue:0}},urlInclude:["//live.bilibili.com"]}}(),i=i.component}()}));