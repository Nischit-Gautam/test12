(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10f74643","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c"],{"0233":function(e,n,o){},2877:function(e,n,o){"use strict";function t(e,n,o,t,r,i,u,d){var a,c="function"===typeof e?e.options:e;if(n&&(c.render=n,c.staticRenderFns=o,c._compiled=!0),t&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),u?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},c._ssrRegister=a):r&&(a=d?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(c.functional){c._injectStyles=a;var s=c.render;c.render=function(e,n){return a.call(n),s(e,n)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,a):[a]}return{exports:e,options:c}}o.d(n,"a",(function(){return t}))},"2db6":function(e,n,o){"use strict";o("0233")},"3dfd":function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e._self._c;return n("div",{class:e.smallScreen?"mobile-screen":"",attrs:{id:"app"}},[e.appLoaded?n("router-view"):n("div",{staticClass:"loader-overlay"},[n("loader")],1),n("bookmark-form"),n("collection-form"),n("dialog-confirm"),n("qr-modal"),n("TmfSettings"),n("TmfDraggableForm"),n("TmfToaster"),n("CopyPasteLinks"),n("GroupShareForm"),n("UserShareForm"),n("TeamsSharedForm"),n("ManageTeamsForm"),n("TmfSubscriptionLimitModal"),n("OutlookPopupModal")],1)},r=[],i=(o("14d9"),o("2f62")),u={title:"TagMyFav- Your bookmark for Office 365",components:{BookmarkForm:()=>o.e("chunk-dda46942").then(o.bind(null,"04fd")),CollectionForm:()=>o.e("chunk-2d0e1f18").then(o.bind(null,"7d1f")),Loader:()=>o.e("chunk-a8f291f8").then(o.bind(null,"845c")),DialogConfirm:()=>o.e("chunk-26337462").then(o.bind(null,"6a9b")),QrModal:()=>o.e("chunk-3eff5c3a").then(o.bind(null,"fd63")),TmfSettings:()=>o.e("chunk-2d216027").then(o.bind(null,"c147")),TmfDraggableForm:()=>o.e("chunk-835d2364").then(o.bind(null,"9998")),TmfToaster:()=>o.e("chunk-1a8f6e29").then(o.bind(null,"1bec")),CopyPasteLinks:()=>o.e("chunk-57f25b74").then(o.bind(null,"a690")),GroupShareForm:()=>o.e("chunk-2d0b5f67").then(o.bind(null,"1aab")),UserShareForm:()=>o.e("chunk-2d22d252").then(o.bind(null,"f5f3")),TeamsSharedForm:()=>o.e("chunk-0449ed7c").then(o.bind(null,"5cbe")),ManageTeamsForm:()=>o.e("chunk-ef3aabb6").then(o.bind(null,"95c3")),TmfSubscriptionLimitModal:()=>o.e("chunk-fb2a9552").then(o.bind(null,"c720")),OutlookPopupModal:()=>o.e("chunk-c32aedb8").then(o.bind(null,"8dc3"))},computed:{...Object(i["b"])(["appLoaded","hostType","windowWidth"]),route(){return this.$route},smallScreen(){return this.windowWidth<400}},methods:{checkForRoute(e){var n;return null===(n=this.$route)||void 0===n||null===(n=n.matched)||void 0===n?void 0:n.some(n=>(null===n||void 0===n?void 0:n.name)===e)}},watch:{route:{immediate:!0,async handler(e){var n,o;if(e&&e.name)if((null!==e&&void 0!==e&&null!==(n=e.meta)&&void 0!==n&&n.requiresAuth||null!==(o=e.matched[0])&&void 0!==o&&null!==(o=o.meta)&&void 0!==o&&o.requiresAuth)&&"/login"!==location.pathname){var t;if(null!==this&&void 0!==this&&null!==(t=this.$store)&&void 0!==t&&null!==(t=t.getters)&&void 0!==t&&null!==(t=t.user)&&void 0!==t&&t.id)return;await this.$store.dispatch("getUser").catch(e=>{401===e.status&&["outlook","word","teams"].includes(this.hostType)&&(this.checkForRoute("OutlookRead")?this.$router.push({name:"OutlookReadConsentError"}):this.checkForRoute("OutlookCompose")?this.$router.push({name:"OutlookComposeConsentError"}):this.checkForRoute("WordDocumentLinks")&&this.$router.push({name:"WordConsentError"}))})}else this.$store.commit("SET_APP_LOADED",!0)}}}},d=u,a=(o("2db6"),o("2877")),c=Object(a["a"])(d,t,r,!1,null,null,null);n["default"]=c.exports}}]);