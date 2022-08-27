"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[826],{426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),s=n.n(r),a=n(645),o=n.n(a)()(s());o.push([e.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f7f8f8;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nheader,\r\nmain {\r\n  background-color: #fff;\r\n  width: 50%;\r\n  box-shadow: 5px 10px 8px #d0d0d0;\r\n}\r\n\r\nheader {\r\n  padding: 20px 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 0.8rem;\r\n  color: #595a5b;\r\n}\r\n\r\n.tasks,\r\n.input-box {\r\n  padding: 20px 20px;\r\n  border-top: 1px solid #d0d0d0;\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n  color: #595a5b;\r\n}\r\n\r\n.edit-input {\r\n  outline: none;\r\n  border: none;\r\n  padding: 15px 20px;\r\n  font-style: italic;\r\n  padding-left: 20px;\r\n  height: 100%;\r\n  font-size: 1.2rem;\r\n  background-color: #fbf0e4;\r\n  width: 100%;\r\n}\r\n\r\n.tasks {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.task-wrapper {\r\n  display: flex;\r\n  gap: 5px;\r\n  align-items: center;\r\n}\r\n\r\n.input-box {\r\n  outline: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: none;\r\n  padding: 15px 20px;\r\n  font-style: italic;\r\n  padding-left: 20px;\r\n  height: 50px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n  padding: 20px 20px;\r\n  border: 1px solid #d0d0d0;\r\n  border-right: none;\r\n  border-left: none;\r\n  background-color: #f7f8f8;\r\n  font-size: 1.3rem;\r\n  color: #b2b4b5;\r\n}\r\n\r\n.fa-trash-alt {\r\n  display: none;\r\n}\r\n\r\n.sync-icon {\r\n  font-size: 1.2em;\r\n  color: rgb(112, 107, 106);\r\n}\r\n\r\n.task-bg {\r\n  background-color: #fbf0e4;\r\n}\r\n\r\n.task-completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.delete-task-icon {\r\n  display: block;\r\n}\r\n\r\n.edit-task-icon {\r\n  display: none;\r\n}\r\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=s(m,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var a=r(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var i=n(a[o]);t[i].references--}for(var l=r(e,s),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},633:(e,t,n)=>{class r{constructor(e,t,n){this.description=e,this.completed=t,this.index=n}}function s(e){const t=JSON.parse(localStorage.getItem("my-to-do-list"));for(let n=0;n<t.length;n+=1){const r=e.parentElement.lastElementChild.innerHTML;t[n].description.trim().toString()===r.trim().toString()&&(e.checked?t[n].completed=!0:t[n].completed=!1,localStorage.setItem("my-to-do-list",JSON.stringify(t)))}}const a=document.querySelector(".tasks-container"),o=document.querySelector(".input-box");class i{constructor(){this.tasksList=[]}static getLocalList=()=>{let e=[];return e=localStorage.getItem("my-to-do-list"),e?(e=JSON.parse(e),this.tasksList=e):localStorage.setItem("my-to-do-list",JSON.stringify(this.tasksList)),this.tasksList};static updateLocalList=e=>{localStorage.setItem("my-to-do-list",JSON.stringify(e))};static deleteTask=e=>{let t="";t=e.parentElement.firstElementChild.lastElementChild.textContent;let n=i.getLocalList();if(n.forEach(((e,r)=>{e.description.trim().toString()===t.trim().toString()&&(n.splice(r,1),i.updateLocalList(n))})),n=i.getLocalList(),0!==n.length)for(let e=0;e<n.length;e+=1)n[e].index=e;i.updateLocalList(n),e.parentElement.remove()};static clearAllTasks=()=>{const e=i.getLocalList();if(0!==e.filter((e=>!0===e.completed)).length){const t=document.querySelectorAll(".tasks");for(let n=0;n<t.length;n+=1)!0===e[n].completed&&i.deleteTask(t[n].lastElementChild)}};static editTask=(e,t)=>{const n=document.createElement("input");n.type=Text,n.className="edit-input",n.value=t.textContent,e.replaceChild(n,t),e.parentElement.classList.add("task-bg"),n.addEventListener("keypress",(r=>{if("Enter"===r.key){const r=document.querySelectorAll(".tasks"),s=i.getLocalList();for(let e=0;e<r.length;e+=1)r[e].classList.contains("task-bg")&&(s[e].description=n.value,i.updateLocalList(s));window.location.reload(),n.parentElement.parentElement.classList.remove("task-bg"),e.replaceChild(t,n),t.textContent=n.value}}))};static selectTasks=e=>{console.log(e.nextElementSibling.textContent),e.checked?(e.parentElement.parentElement.classList.add("task-bg"),e.nextElementSibling.classList.add("task-completed"),e.parentElement.parentElement.lastElementChild.classList.add("delete-task-icon"),e.parentElement.parentElement.lastElementChild.previousElementSibling.classList.add("edit-task-icon"),s(e)):(e.parentElement.parentElement.classList.remove("task-bg"),e.nextElementSibling.classList.remove("task-completed"),e.parentElement.parentElement.lastElementChild.classList.remove("delete-task-icon"),e.parentElement.parentElement.lastElementChild.previousElementSibling.classList.remove("edit-task-icon"),s(e));const t=e.parentElement.parentElement.lastElementChild;t.addEventListener("click",(()=>{i.deleteTask(t)}))};addToDo=e=>{const t=document.createElement("div");t.className="tasks",t.innerHTML=`\n      <div class="task-wrapper">\n      <input type="checkbox" name="completed" class="status">\n      <span> ${e} </span>\n      \n      </div>\n      <i class="fas fa-ellipsis-v"></i>\n      <i class="fas fa-trash-alt"></i>\n      `,a.appendChild(t)}}var l=n(379),c=n.n(l),d=n(795),p=n.n(d),u=n(569),m=n.n(u),f=n(565),g=n.n(f),h=n(216),v=n.n(h),k=n(589),E=n.n(k),b=n(426),y={};y.styleTagTransform=E(),y.setAttributes=g(),y.insert=m().bind(null,"head"),y.domAPI=p(),y.insertStyleElement=v(),c()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;const L=new i;o.addEventListener("keypress",(e=>{if("Enter"===e.key&&o.value){L.addToDo(o.value);const t=new r(o.value,!1,L.tasksList.length);null===L.tasksList&&(L.tasksList=[]),L.tasksList=i.getLocalList(),L.tasksList.push(t),i.updateLocalList(L.tasksList),o.value=null,document.querySelectorAll(".fa-ellipsis-v").forEach((e=>e.addEventListener("click",(()=>{i.editTask(e.previousElementSibling,e.previousElementSibling.lastElementChild),window.location.reload()})))),document.querySelectorAll(".status").forEach((e=>e.addEventListener("change",(()=>{i.selectTasks(e)})))),document.querySelectorAll(".fa-trash-alt").forEach((e=>e.addEventListener("click",(e=>{i.deleteTask(e.target)})))),e.preventDefault()}})),window.onload=()=>{const e=localStorage.getItem("my-to-do-list");console.log(e),e?L.tasksList=JSON.parse(e):localStorage.setItem("my-to-do-list",JSON.stringify(L.tasksList)),L.tasksList=i.getLocalList(),L.tasksList.forEach((e=>{L.addToDo(e.description),document.querySelectorAll(".status").forEach((e=>e.addEventListener("change",(()=>{i.selectTasks(e)})))),document.querySelectorAll(".fa-trash-alt").forEach((e=>e.addEventListener("click",(e=>{i.deleteTask(e.target)}))))})),document.querySelector("button").addEventListener("click",i.clearAllTasks),document.querySelectorAll(".fa-ellipsis-v").forEach((e=>e.addEventListener("click",(()=>{i.editTask(e.previousElementSibling,e.previousElementSibling.lastElementChild)}))))}}},e=>{e(e.s=633)}]);