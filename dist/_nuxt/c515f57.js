(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{246:function(t,e,r){t.exports=r.p+"img/dummy.84ae73e.jpg"},248:function(t,e,r){"use strict";r.r(e);r(170);var n={name:"LayoutMenuList",props:{itemClass:{type:String,default:"w-full mb-10 shadow-lg"},blockClass:{type:String,default:"md:w-full bg-gray-200 flex flex-wrap justify-between md:px-4 md:py-4"},imageClass:{type:String,default:"md:w-2/5"},dataClass:{type:String,default:"w-7/12 px-6 py-4 mb:px-0 mb:px-0"},flagBody:{type:Boolean,default:!0},image:{type:Object,required:!0},imageUrl:{type:String,required:!0},name:{type:String,required:!0},body:{type:String,required:!0},price:{type:Number,required:!0}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.itemClass},[n("div",{class:t.blockClass},[t.image?n("img",{class:t.imageClass,attrs:{src:t.imageUrl,alt:t.name}}):n("img",{class:t.imageClass,attrs:{src:r(246),alt:t.name}}),t._v(" "),n("div",{class:t.dataClass},[n("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(t.name))]),t._v(" "),t.flagBody?n("p",{staticClass:"text-base mb-2"},[t._v(t._s(t.body))]):t._e(),t._v(" "),n("p",{staticClass:"text-gray-700 text-base mb-4"},[t._v(t._s(t.price)+"円（税込）")])])])])}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,r){"use strict";r.r(e);r(39);var n=r(6),l=r(50),m=r.n(l),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$config,e.next=3,m.a.get("".concat(r.apiUrl,"/menu"),{headers:{"X-API-KEY":r.apiKey}});case 3:return n=e.sent,data=n.data,e.abrupt("return",{items:data.contents});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"メニュー"}}},o=r(8),component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout-wrapper",[e("layout-visual",{attrs:{title:"Menu",height:40,visual:"visual-menu"}}),this._v(" "),e("div",{staticClass:"w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0"},[e("div",{staticClass:"mb-20"},this._l(this.items,(function(t,r){return e("layout-menu-list",{key:r,attrs:{image:t.image,"image-url":t.image.url,name:t.name,body:t.body,price:t.price}})})),1),this._v(" "),e("base-button",{attrs:{name:"トップへ戻る",link:"/"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutVisual:r(167).default,LayoutMenuList:r(248).default,BaseButton:r(169).default,LayoutWrapper:r(168).default})}}]);