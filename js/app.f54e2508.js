(function(t){function e(e){for(var s,o,a=e[0],c=e[1],l=e[2],u=0,d=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={app:0},r=[];function o(t){return a.p+"js/"+({analysis:"analysis",list:"list",settings:"settings"}[t]||t)+"."+{analysis:"b51ea7a9",list:"7fed9ffb",settings:"cd564b17"}[t]+".js"}function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,s){n=i[t]=[e,s]}));e.push(n[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=o(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f2f":function(t,e,n){t.exports=n.p+"img/icon-edit.1505fe51.svg"},1771:function(t,e,n){var s={"./alarm.mp3":"a362","./icon-analysis.svg":"197f","./icon-arrow--next.svg":"9336d","./icon-arrow--prev.svg":"1bc2","./icon-bell.svg":"2bc4","./icon-cancel.svg":"e420","./icon-delete.svg":"7345","./icon-edit.svg":"0f2f","./icon-list.svg":"3c2f","./icon-pause--green.svg":"204d","./icon-pause--orange.svg":"2dda","./icon-play--green.svg":"35b2","./icon-play--orange.svg":"7ab4","./tomato--green.svg":"e90c","./tomato--orange.svg":"5c5f","./yay.mp3":"c7a5"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="1771"},"197f":function(t,e,n){t.exports=n.p+"img/icon-analysis.e96b4269.svg"},"1bc2":function(t,e,n){t.exports=n.p+"img/icon-arrow--prev.8e8b9862.svg"},"204d":function(t,e,n){t.exports=n.p+"img/icon-pause--green.570047a8.svg"},"2bc4":function(t,e,n){t.exports=n.p+"img/icon-bell.526aed07.svg"},"2dda":function(t,e,n){t.exports=n.p+"img/icon-pause--orange.5094d45d.svg"},"35b2":function(t,e,n){t.exports=n.p+"img/icon-play--green.a5c4a07e.svg"},"3c2f":function(t,e,n){t.exports=n.p+"img/icon-list.c5316630.svg"},"3e8e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var s=n("2b0e"),i=n("5f5b");n("ab8b"),n("2dd8");s["default"].use(i["a"]);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vh-100 flex-row d-flex",attrs:{id:"app"}},[s("b-nav",{staticClass:"justify-content-center align-items-center nav"},[s("b-nav-item",{attrs:{to:"/list"}},[s("img",{attrs:{src:n("3c2f")}})]),s("b-nav-item",{attrs:{to:"/analysis"}},[s("img",{attrs:{src:n("197f")}})])],1),s("keep-show"),s("router-view")],1)},o=[],a=(n("3e8e"),{name:"App"}),c=a,l=n("2877"),u=Object(l["a"])(c,r,o,!1,null,null,null),f=u.exports,d=n("9483");Object(d["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-100 bg-green",attrs:{id:"home"}},[s("b-container",[s("b-row",{staticClass:"vh-100 mx-0"},[s("b-col",{attrs:{cols:"12"}},[s("div",{staticClass:"text-right"},[s("p",[t._v(t._s(t.dateformat))])])]),s("b-col",{attrs:{cols:"12"}},[s("b-row",{staticClass:"text-center"},[s("b-col",{attrs:{cols:"6"}},[s("div",{staticClass:"mb-0"},[s("p",{staticClass:"text-time"},[t._v(t._s(t.timeText))]),s("div",{staticClass:"d-flex align-items-center ml-5"},[s("b-btn",{staticClass:"circle",attrs:{to:"/settings",pill:""}},[s("img",{attrs:{src:n("2bc4")}})]),1!==t.status?s("b-btn",{staticClass:"playbtn",attrs:{pill:""},on:{click:t.start}},[s("img",{attrs:{src:n("7ab4")}})]):t._e(),1===t.status?s("b-btn",{staticClass:"playbtn",attrs:{pill:""},on:{click:t.pause}},[s("img",{attrs:{src:n("2dda")}})]):t._e(),s("b-btn",{staticClass:"circle",attrs:{pill:""},on:{click:function(e){return t.finish(!0)}}},[s("img",{attrs:{src:n("7345")}})])],1)])]),s("b-col",{staticClass:"col-sm-6 text-left",attrs:{cols:"12"}},[s("div",{staticClass:"pt-5 pb-2"},[s("ul",[t._l(t.list,(function(e,n){return[s("li",{staticClass:"my-3"},[s("div",{staticClass:"d-flex align-items-center"},[s("span",{staticClass:"mr-3 taskcircle"}),s("span",{staticClass:"mr-auto taskText"},[t._v(t._s(e))])]),0===n?s("div",{staticClass:"smcircleLeft"},[s("span",{staticClass:"smcircle"}),s("span",{staticClass:"smcircle ml-1"}),s("span",{staticClass:"smcircle ml-1"}),s("span",{staticClass:"smcircle1 ml-1"})]):t._e()])]}))],2)])])],1)],1),s("b-col",{staticClass:"mt-auto d-flex justify-content-center align-items-end",attrs:{cols:"12"}},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:n("5c5f")}})])],1)],1)],1)],1)},g=[],v=(n("99af"),{name:"Home",data:function(){return{list:["學習 Vue 切版","練習番茄鐘","只有部分功能","其他功能沒有寫"],timer:0}},computed:{status:function(){return this.$store.state.status},current:function(){return this.$store.state.current},currentText:function(){var t=this.current;return 0===t.length&&(t=0===this.list.length?"沒有事項":"點擊開始"),t},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60),e=Math.floor(this.timeleft%60);return"".concat(t," : ").concat(e)}},methods:{pause:function(){clearInterval(this.timer),this.$store.commit("changeStatus",2)},start:function(){var t=this;2!==this.status&&this.list.length>0&&this.$store.commit("start"),this.current.length>0&&(this.$store.commit("changeStatus",1),this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=-1&&t.finish(!1)}),1e3))},finish:function(t){if(clearInterval(this.timer),this.$store.commit("changeStatus",0),this.$store.commit("addFinish"),!t){var e=new Audio;e.src=n("1771")("./"+this.$store.state.sound),e.play()}this.list.length>0?this.start():this.$swal({icon:"success",title:"結束"})}}}),h=v,b=Object(l["a"])(h,m,g,!1,null,null,null),y=b.exports;s["default"].use(p["a"]);var x=[{path:"/",name:"Home",component:y,meta:{title:"番茄鐘"}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 | 設定"}},{path:"/analysis",name:"Analysis",component:function(){return n.e("analysis").then(n.bind(null,"9aef"))},meta:{title:"番茄鐘 | 分析"}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘 | 清單"}}],w=new p["a"]({routes:x});w.afterEach((function(t,e){document.title=t.meta.title}));var C=w,k=(n("b0c0"),n("a434"),n("2f62")),_=n("0e44"),j=parseInt("1500"),O=parseInt("300");s["default"].use(k["a"]);var $=new k["a"].Store({state:{sound:"alarm.mp3",list:[],finished:[],current:"",timeleft:j,isBreak:!1,status:0},mutations:{selectSound:function(t,e){t.sound=e},addList:function(t,e){t.list.push({name:e,edit:!1,model:e})},editList:function(t,e){t.list[e].edit=!0},changeList:function(t,e){t.list[e].name=t.list[e].model,t.list[e].edit=!1},cancelList:function(t,e){t.list[e].model=t.list[e].name,t.list[e].edit=!1},delList:function(t,e){t.list.splice(e,1)},start:function(t){t.isBreak?t.current="休息一下":t.current=t.list.shift().name},changeStatus:function(t,e){t.status=e},countdown:function(t){t.timeleft--},addFinish:function(t){t.isBreak||t.finished.push(t.current),t.current="",t.list.length>0&&(t.isBreak=!t.isBreak),t.timeleft=t.isBreak?O:j},delFinish:function(t,e){t.finished.splice(e,1)}},getters:{list:function(t){return t.list}},actions:{},modules:{},plugins:[Object(_["a"])({key:"pomodoro"})]}),S=n("ecee"),L=n("ad3d"),T=n("c074"),E=n("5886");n("4413");S["c"].add(T["a"],T["d"],T["i"],T["h"],T["e"],T["c"],T["g"],T["b"],T["f"]),s["default"].component("font-awesome-icon",L["a"]),s["default"].use(E["a"]),s["default"].config.productionTip=!1,new s["default"]({router:C,store:$,render:function(t){return t(f)}}).$mount("#app")},"5c5f":function(t,e,n){t.exports=n.p+"img/tomato--orange.f4d25225.svg"},7345:function(t,e,n){t.exports=n.p+"img/icon-delete.0520b13c.svg"},"7ab4":function(t,e,n){t.exports=n.p+"img/icon-play--orange.a185f0b0.svg"},"9336d":function(t,e,n){t.exports=n.p+"img/icon-arrow--next.974137f8.svg"},a362:function(t,e,n){t.exports=n.p+"media/alarm.965b614d.mp3"},c7a5:function(t,e,n){t.exports=n.p+"media/yay.46c744f5.mp3"},e420:function(t,e,n){t.exports=n.p+"img/icon-cancel.872654be.svg"},e90c:function(t,e,n){t.exports=n.p+"img/tomato--green.4298a104.svg"}});
//# sourceMappingURL=app.f54e2508.js.map