(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23d87412","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c"],{2877:function(t,e,n){"use strict";function o(t,e,n,o,a,c,i,s){var r,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),c&&(l._scopeId="data-v-"+c),i?(r=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=r):a&&(r=s?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),r)if(l.functional){l._injectStyles=r;var u=l.render;l.render=function(t,e){return r.call(e),u(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,r):[r]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))},b6ad:function(t,e,n){t.exports=n.p+"img/welcome.130599f0.svg"},eec5:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"welcome-page d-flex align-items-center justify-content-center flex-column scroll-vertical"},[e("div",{staticClass:"welcome-page__container d-flex align-items-center justify-content-center flex-row-wrap"},[e("div",{staticClass:"welcome-page__bg-imge image-wrapper"},[e("img",{attrs:{src:t.welcome,alt:""}})]),e("div",{staticClass:"welcome-page__content-wrapper d-flex align-items-center justify-content-center flex-column"},[e("div",{staticClass:"welcome-page__logo image-wrapper"},[e("img",{attrs:{src:t.$logo,alt:"TagMyFav"}})]),e("h5",[t._v(" “Hi, thank you for trying out TagMyFav, a collaborative bookmarking solution.” ")]),e("button",{staticClass:"btn-control md primary mb-3 px-4",on:{click:function(e){return t.signupHandler()}}},[t._v(" Sign up ")]),e("p",[t._v(" Signup for free using your Office 365 business account or Office 365 education account to get started. Upon successful signup you will have access to multiple upcoming apps within Microsoft 365 as part of your subscription. ")]),t._m(0)])])])},a=[function(){var t=this,e=t._self._c;return e("p",[e("a",{attrs:{href:"https://www.tagmyfav.com",target:"_blank"}},[e("b",[t._v("Visit us")])]),t._v(" to know more about our app. Having trouble signup or have any question, say “Hello” to us at "),e("a",{attrs:{href:"mailto:hello@tagmyfav.com",target:"_blank"}},[e("b",[t._v("hello@tagmyfav.com")])])])}];let c=n("b6ad");var i={data(){return{appUrl:"https://admin.tagmyfav.com/signup",welcome:c}},methods:{signupHandler(){window.open(this.appUrl,"_blank")}}},s=i,r=n("2877"),l=Object(r["a"])(s,o,a,!1,null,null,null);e["default"]=l.exports}}]);