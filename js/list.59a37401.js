(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"1a33":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list"}},[n("body",{style:t.mybgb},[n("b-container",[n("b-col",{attrs:{cols:"4"}},[n("b-form-group",{staticClass:"text-secondary",attrs:{label:"新增事項","invalid-feedback":"請至少輸入兩個字",state:t.state}},[n("b-form-input",{attrs:{state:t.state,trim:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.additem.apply(null,arguments)}},model:{value:t.newitem,callback:function(e){t.newitem=e},expression:"newitem"}}),n("b-btn",{attrs:{variant:"secondary"},on:{click:t.additem}},[t._v("新增")])],1)],1),n("br"),n("b-row",[n("b-col",{attrs:{cols:"6"}},[n("h4",{staticClass:"text-secondary"},[t._v("待辦事項"),n("b-table",{staticClass:"text-secondary",attrs:{items:t.list,fields:t.listfields},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[e.item.edit?n("b-form-input",{attrs:{trim:"",state:e.item.state},on:{keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.changelist(e.index)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.cancellist(e.index)}]},model:{value:e.item.model,callback:function(n){t.$set(e.item,"model",n)},expression:"data.item.model"}}):n("span",[t._v(t._s(e.value))])]}},{key:"cell(action)",fn:function(e){return[e.item.edit?n("span",[n("b-btn",{attrs:{variant:"success"},on:{click:function(n){return t.changelist(e.index)}}},[n("font-awesome-icon",{attrs:{icon:["fas","check"]}})],1),n("b-btn",{attrs:{variant:"danger"},on:{click:function(n){return t.cancellist(e.index)}}},[n("font-awesome-icon",{attrs:{icon:["fas","undo"]}})],1)],1):n("span",[n("b-btn",{attrs:{variant:"success"},on:{click:function(n){return t.editlist(e.index)}}},[n("font-awesome-icon",{attrs:{icon:["fas","pen"]}})],1),n("b-btn",{attrs:{variant:"danger"},on:{click:function(n){return t.dellist(e.index)}}},[n("font-awesome-icon",{attrs:{icon:["fas","trash"]}})],1)],1)]}}])})],1)]),n("b-col",{attrs:{cols:"6"}},[n("h4",{staticClass:"text-secondary"},[t._v("已完成事項")]),n("b-table-simple",[n("thead",[n("tr",[n("th",{staticClass:"text-secondary"},[t._v("名稱")]),n("th",{staticClass:"text-secondary"},[t._v("操作")])])]),n("tbody",t._l(t.finished,(function(e,i){return n("tr",{key:i},[n("td",[t._v(t._s(e))]),n("td",[n("b-btn",{attrs:{variant:"danger"},on:{click:function(e){return t.delfinish(i)}}},[n("font-awesome-icon",{attrs:{icon:["fas","trash"]}})],1)],1)])})),0)])],1)],1)],1)],1)])},s=[],a=(n("d81d"),{name:"List",data:function(){return{mybgb:{background:"linear-gradient(to right, #6c757d 10%, #FAF0E6 10%)",height:"60vh"},newitem:"",listfields:[{key:"name",label:"名稱"},{key:"action",label:"操作"}]}},computed:{state:function(){return 0===this.newitem.length?null:!(this.newitem.length<2)},list:function(){return this.$store.getters.list.map((function(t){return t.model.length<2?t.state=!1:t.state=!0,t}))},finished:function(){return this.$store.state.finished}},methods:{additem:function(){this.state?(this.$store.commit("addList",this.newitem),this.newitem=""):this.$swal({icon:"error",title:"錯誤",text:"必須要兩個字以上"})},editlist:function(t){this.$store.commit("editList",t)},changelist:function(t){console.log(t),this.list[t].state&&this.$store.commit("changeList",t)},cancellist:function(t){this.$store.commit("cancelList",t)},dellist:function(t){this.$store.commit("delList",t)},delfinish:function(t){this.$store.commit("delFinish",t)}}}),r=a,c=n("2877"),o=Object(c["a"])(r,i,s,!1,null,null,null);e["default"]=o.exports},b727:function(t,e,n){var i=n("0366"),s=n("44ad"),a=n("7b0b"),r=n("50c4"),c=n("65f0"),o=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,d=4==t,u=6==t,f=7==t,m=5==t||u;return function(h,b,y,k){for(var p,v,w=a(h),g=s(w),x=i(b,y,3),_=r(g.length),$=0,C=k||c,E=e?C(h,_):n||f?C(h,0):void 0;_>$;$++)if((m||$ in g)&&(p=g[$],v=x(p,$,w),t))if(e)E[$]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return $;case 2:o.call(E,p)}else switch(t){case 4:return!1;case 7:o.call(E,p)}return u?-1:l||d?d:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d81d:function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").map,a=n("1dde"),r=a("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=list.59a37401.js.map