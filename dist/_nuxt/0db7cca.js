(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{241:function(t,e,l){t.exports=l.p+"img/dummy.84ae73e.jpg"},242:function(t,e,l){"use strict";l.r(e);var n={name:"LayoutInformationList",props:{title:{type:String,required:!0},date:{type:String,required:!0},id:{type:String,required:!0}}},r=l(8),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mb-5 text-white border-b-2"},[l("a",{staticClass:"block px-4 py-3",attrs:{href:"/blog/"+t.id+"/"}},[l("time",{staticClass:"text-base mb-1 block md:w-1/6"},[t._v("\n            "+t._s(t._f("formatDate")(t.date))+"\n        ")]),t._v(" "),l("div",{staticClass:"md:w-10/12"},[t._v("\n            "+t._s(t.title)+"\n        ")])])])}),[],!1,null,null,null);e.default=component.exports},243:function(t,e,l){"use strict";l.r(e);l(171);var n={name:"LayoutMenuList",props:{itemClass:{type:String,default:"w-full mb-10 shadow-lg"},blockClass:{type:String,default:"md:w-full flex flex-wrap justify-between items-center md:px-4 md:py-4 border-b-2"},imageClass:{type:String,default:"md:w-2/5"},dataClass:{type:String,default:"w-7/12 px-6 mb:px-0 mb:px-0"},flagBody:{type:Boolean,default:!0},image:{type:Object,required:!0},imageUrl:{type:String,required:!0},name:{type:String,required:!0},body:{type:String,required:!0},release:{type:Number,required:!0}}},r=l(8),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.itemClass},[n("div",{class:t.blockClass},[t.image?n("img",{class:t.imageClass,attrs:{src:t.imageUrl,alt:t.name}}):n("img",{class:t.imageClass,attrs:{src:l(241),alt:t.name}}),t._v(" "),n("div",{class:t.dataClass},[n("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(t.name))]),t._v(" "),t.flagBody?n("p",{staticClass:"text-base mb-2"},[t._v(t._s(t.body))]):t._e(),t._v(" "),n("p",{staticClass:"text-base mb-4"},[t._v(t._s(t.release))])])])])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,l){"use strict";l.r(e);var n={props:{name:"BaseHeading"}},r=l(8),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("h2",{staticClass:"text-lg text-center text-5xl mb-10"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,l){"use strict";l.r(e);l(39);var n=l(6),r=l(50),o=l.n(r),m={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var l,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$config,e.next=3,o.a.get("".concat(l.apiUrl,"/works?limit=3&filters=flag[equals]true"),{headers:{"X-API-KEY":l.apiKey}});case 3:return n=e.sent,e.next=6,o.a.get("".concat(l.apiUrl,"/blog?limit=3"),{headers:{"X-API-KEY":l.apiKey}});case 6:return r=e.sent,e.abrupt("return",{menuItems:n.data.contents,infoItems:r.data.contents});case 8:case"end":return e.stop()}}),e)})))()}},d=l(8),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("layout-wrapper",[l("layout-visual",{attrs:{title:"i am frontend engineer."}}),t._v(" "),l("div",{staticClass:"w-full md:max-w-3xl mx-auto px-6 md:px-0"},[l("div",{staticClass:"pt-40 pb-40"},[l("base-heading",[t._v("about")]),t._v(" "),l("p",{staticClass:"mb-20 text-1xl"},[t._v("\n                こんにちは。フロントエンドエンジニアのゆきです。"),l("br"),t._v("\n                このサイトは私が作った簡易的なポートフォリオサイトです。良かったら覗いていってみてください！\n            ")]),t._v(" "),l("base-button",{attrs:{name:"to about page",link:"/about"}})],1),t._v(" "),l("div",{staticClass:"pt-40 pb-40"},[l("base-heading",[t._v("works")]),t._v(" "),l("div",{staticClass:"flex md:flex-wrap justify-between mb-20 md:mb-0"},t._l(t.menuItems,(function(t,e){return l("layout-menu-list",{key:e,attrs:{image:t.image,"image-url":t.image.url,name:t.name,body:t.body,release:t.release,"item-class":"md:w-56 mb-20","block-class":"max-w","image-class":"w-full","data-class":"px-6 py-4","flag-body":!1}})})),1),t._v(" "),l("base-button",{attrs:{name:"to works page",link:"/works"}})],1),t._v(" "),l("div",{staticClass:"pt-40 pb-40"},[l("base-heading",[t._v("blog")]),t._v(" "),l("div",{staticClass:"mb-20"},t._l(t.infoItems,(function(t,e){return l("layout-information-list",{key:e,attrs:{id:t.id,date:t.date,title:t.title}})})),1),t._v(" "),l("base-button",{attrs:{name:"to blog page",link:"/blog"}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutVisual:l(169).default,BaseHeading:l(244).default,BaseButton:l(172).default,LayoutMenuList:l(243).default,LayoutInformationList:l(242).default,LayoutWrapper:l(170).default})}}]);