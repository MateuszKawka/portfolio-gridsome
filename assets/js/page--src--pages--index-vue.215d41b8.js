(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+3LV":function(t,e,c){"use strict";c("vKyf")},DQNa:function(t,e,c){var n=c("busE"),a=Date.prototype,i=a.toString,o=a.getTime;new Date(NaN)+""!="Invalid Date"&&n(a,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},NqUH:function(t,e,c){"use strict";c("R0e3")},R0e3:function(t,e,c){},aK7f:function(t,e,c){},gEGz:function(t,e,c){"use strict";c("aK7f")},iyQ6:function(t,e,c){"use strict";c.r(e);var n={props:{project:{type:Object,required:!0}}},a=(c("oj6s"),c("KHd+")),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"project-item"},[c("div",{staticClass:"project-item-image-container",style:{"background-color":""+t.project.node.color}},[c("g-image",{staticClass:"project-item__image",attrs:{src:t.project.node.mainImage}})],1),c("div",{staticClass:"project-item__content"},[c("h2",{staticClass:"project-item__name"},[t._v(t._s(t.project.node.title))]),c("p",{staticClass:"project-item__desc"},[t._v(t._s(t.project.node.description))]),c("g-link",{staticClass:"project-item__link",attrs:{to:t.project.node.path}},[t._v(t._s(t.$t("details")))])],1)])}),[],!1,null,"5b423cd9",null).exports,o={props:{projects:{type:Array,default:function(){return[]}}},components:{ProjectItem:i}},s=(c("NqUH"),Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"projects-list"},this._l(this.projects,(function(t){return e("ProjectItem",{key:t.id,attrs:{project:t}})})),1)}),[],!1,null,"50f1ba16",null).exports),r=(c("DQNa"),c("07d7"),c("JfAA"),{name:"LocaleSwitcher",computed:{currentLocale:function(){return this.$i18n.locale.toString()}},data:function(){return{availableLocales:this.$i18n.availableLocales}},methods:{localeChanged:function(t){this.$router.push({path:this.$tp(this.$route.path,t,!0)}),console.log(this.$i18n.locale)}}}),l=(c("+3LV"),{name:"Homepage",components:{ProjectsList:s,LocaleSwitcher:Object(a.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"locale-switcher"},[t.currentLocale===t.availableLocales[1]?c("div",{staticClass:"locale-switcher__item",on:{click:function(e){return t.localeChanged(t.availableLocales[0])}}},[t._v("\n    🇺🇸\n  ")]):c("div",{staticClass:"locale-switcher__item",on:{click:function(e){return t.localeChanged(t.availableLocales[1])}}},[t._v("\n    🇵🇱\n  ")])])}),[],!1,null,"357813f0",null).exports}}),u=(c("gEGz"),null),p=Object(a.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("LocaleSwitcher"),e("ProjectsList",{attrs:{projects:this.$page.allProject.edges}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(p);e.default=p.exports},oj6s:function(t,e,c){"use strict";c("zSuf")},vKyf:function(t,e,c){},zSuf:function(t,e,c){}}]);