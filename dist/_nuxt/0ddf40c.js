(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{249:function(t,e,r){"use strict";r.r(e);r(76),r(39);var n=r(6),o=r(50),l=r.n(o),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$config,n=t.params,o=t.error,e.prev=1,e.next=4,l.a.get("".concat(r.apiUrl,"/blog/").concat(n.id),{headers:{"X-API-KEY":r.apiKey}});case 4:return c=e.sent,data=c.data,e.abrupt("return",{item:data});case 9:e.prev=9,e.t0=e.catch(1),o({errorCode:404});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},head:function(){return{title:this.item.title}}},d=r(8),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout-wrapper",[r("layout-visual",{attrs:{title:"blog",height:40}}),t._v(" "),r("div",{staticClass:"w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0"},[r("h2",{staticClass:"text-xl pb-5 border-b border-gray-500 border-solid font-bold"},[t._v("\n            "+t._s(t.item.title)+"\n        ")]),t._v(" "),r("div",{staticClass:"pt-4 mb-4"},[r("time",{staticClass:"text-base"},[t._v("\n                "+t._s(t._f("formatDate")(t.item.date))+"\n            ")])]),t._v(" "),r("div",{staticClass:"mb-20",domProps:{innerHTML:t._s(t.item.body)}}),t._v(" "),r("base-button",{attrs:{name:"to blog top page",link:"/blog/"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutVisual:r(169).default,BaseButton:r(172).default,LayoutWrapper:r(170).default})}}]);