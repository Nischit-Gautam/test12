(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ca48657","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d216aee","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c","chunk-2d0b349c"],{2877:function(t,e,o){"use strict";function i(t,e,o,i,a,s,n,r){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=o,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),n?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=l):a&&(l=r?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var h=c.render;c.render=function(t,e){return l.call(e),h(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}o.d(e,"a",(function(){return i}))},c407:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"all-bookmarks mb-2"},[t.bookmarks.length||t.linkPageLimit?e("bookmark-items",t._b({},"bookmark-items",t.bookmarkProps,!1)):t._e(),t.allListLoading?e("div",{staticClass:"d-flex w-100",style:{"margin-top":t.page>1?"-.9rem":""},attrs:{id:"LinkscrollLoaderTeamsShared"}},[e("bookmark-loader",{staticClass:"w-100",attrs:{loaderCount:3}})],1):t._e()],1)},a=[],s=o("2f62"),n={name:"BookmarkContainer",components:{BookmarkItems:()=>o.e("chunk-7b759355").then(o.bind(null,"d8a7")),BookmarkLoader:()=>o.e("chunk-2d228d20").then(o.bind(null,"db8d"))},data(){return{showOutlookEmailLinks:!1,selectAllBookmark:!1,cardView:"list",isLoading:!1,allListLoading:!1,onscrollLoader:!0,linkPageLimit:!1,page:1,componentData:{},fetchingData:!1}},computed:{...Object(s["b"])({bookmarks:"collectionBookmarks",bookmarksImagesOnly:"collectionBookmarksImages",selectedCollection:"selectedCollection"}),bookmarkProps(){return{bookmarks:this.bookmarks,componentData:this.componentData,bookmarksImagesOnly:this.bookmarksImagesOnly,isLoading:this.isLoading}}},mounted(){this.initializeData(),this.$bus.$on("reset-teams-shared-bookmarks",this.handleResetBookmarks)},methods:{async initializeData(){if(!this.fetchingData){this.fetchingData=!0,this.allListLoading=!0,this.onscrollLoader=!0;try{let t=await this.$store.dispatch("getCollectionBookmarks",{collectionId:this.$route.params.collectionId,type:"teamShared",page:this.page});await this.$store.dispatch("getCollectionBookmarksImages",{collectionId:this.$route.params.collectionId,type:"teamShared",page:this.page}),t.length>0?(this.page++,this.onscrollLoader=!1,t.length<10&&this.initializeInterceptor()):(this.linkPageLimit=!0,this.allListLoading=!1)}catch(t){console.error("Error fetching data:",t)}finally{this.fetchingData=!1}}},initializeInterceptor(){let t={root:document.querySelector(".tmf-app"),threshold:.5},e=t=>{t.forEach(t=>{t.isIntersecting&&!this.linkPageLimit&&this.initializeData()})},o=new IntersectionObserver(e,t),i=document.querySelector("#LinkscrollLoaderTeamsShared");i&&o.observe(i)},handleResetBookmarks(){this.$store.commit("SET_COLLECTION_BOOKMARKS",[]),this.$store.commit("SET_COLLECTION_BOOKMARKS_IMAGES",[]),this.page=1,this.allListLoading=!0,this.initializeData(),this.initializeInterceptor()}},watch:{selectedCollection:{immediate:!0,deep:!0,handler(t){if(t){let e=this.$collectionHelper.isCollectionSharedInTeamsModfiable(t),o=e?"privateBookmarks":"publicBookmarks";this.$nextTick(()=>{var t,i;this.componentData=this.$bookmarkTypes[o],this.componentData.header.title=null!==(t=null===(i=this.selectedCollection)||void 0===i?void 0:i.name)&&void 0!==t?t:"",e||(this.componentData.hideMultiselect=!0,this.componentData.disableDraggable=!0,this.componentData.header.hideMultiselect=!0)})}}},"$route.params.collectionId":{immediate:!0,async handler(t){t&&(this.page=1,this.linkPageLimit=!1,this.$store.commit("SET_COLLECTION_BOOKMARKS",[]),this.$store.commit("SET_COLLECTION_BOOKMARKS_IMAGES",[]),await this.initializeData(),this.initializeInterceptor())}}},beforeDestroy(){this.$bus.$off("reset-teams-shared-bookmarks",this.handleResetBookmarks)}},r=n,l=o("2877"),c=Object(l["a"])(r,i,a,!1,null,null,null);e["default"]=c.exports}}]);