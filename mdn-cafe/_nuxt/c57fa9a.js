(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{221:function(t,e,n){"use strict";n.r(e);var r={name:"LayoutInformationList",props:{title:{type:String,required:!0},date:{type:String,required:!0},id:{type:String,required:!0}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5"},[n("a",{staticClass:"block px-4 py-3",attrs:{href:"/information/"+t.id+"/"}},[n("time",{staticClass:"text-gray-700 text-base mb-1 block md:w-1/6"},[t._v("\n            "+t._s(t._f("formatDate")(t.date))+"\n        ")]),t._v(" "),n("div",{staticClass:"md:w-10/12"},[t._v("\n            "+t._s(t.title)+"\n        ")])])])}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,n){"use strict";n.r(e);n(38);var r=n(6),o=n(219),l=n.n(o),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$config,e.next=3,l.a.get("".concat(n.apiUrl,"/information"),{headers:{"X-API-KEY":n.apiKey}});case 3:return r=e.sent,data=r.data,e.abrupt("return",{items:data.contents});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"お知らせ"}}},d=n(8),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout-wrapper",[e("layout-visual",{attrs:{title:"Information",height:40,visual:"visual-information"}}),this._v(" "),e("div",{staticClass:"w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0"},[this._l(this.items,(function(t,n){return e("layout-information-list",{key:n,attrs:{id:t.id,date:t.date,title:t.title}})})),this._v(" "),e("base-button",{attrs:{name:"トップへ戻る",link:"/"}})],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutVisual:n(155).default,LayoutInformationList:n(221).default,BaseButton:n(157).default,LayoutWrapper:n(156).default})}}]);