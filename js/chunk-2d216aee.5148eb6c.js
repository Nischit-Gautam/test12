(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216aee"],{c407:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"all-bookmarks mb-2"},[t.bookmarks.length||t.linkPageLimit?e("bookmark-items",t._b({},"bookmark-items",t.bookmarkProps,!1)):t._e(),t.allListLoading?e("div",{staticClass:"d-flex w-100",style:{"margin-top":t.page>1?"-.9rem":""},attrs:{id:"LinkscrollLoaderTeamsShared"}},[e("bookmark-loader",{staticClass:"w-100",attrs:{loaderCount:3}})],1):t._e()],1)},o=[],s=i("2f62"),l={name:"BookmarkContainer",components:{BookmarkItems:()=>i.e("chunk-7b759355").then(i.bind(null,"d8a7")),BookmarkLoader:()=>i.e("chunk-2d228d20").then(i.bind(null,"db8d"))},data(){return{showOutlookEmailLinks:!1,selectAllBookmark:!1,cardView:"list",isLoading:!1,allListLoading:!1,onscrollLoader:!0,linkPageLimit:!1,page:1,componentData:{},fetchingData:!1}},computed:{...Object(s["b"])({bookmarks:"collectionBookmarks",bookmarksImagesOnly:"collectionBookmarksImages",selectedCollection:"selectedCollection"}),bookmarkProps(){return{bookmarks:this.bookmarks,componentData:this.componentData,bookmarksImagesOnly:this.bookmarksImagesOnly,isLoading:this.isLoading}}},mounted(){this.initializeData(),this.$bus.$on("reset-teams-shared-bookmarks",this.handleResetBookmarks)},methods:{async initializeData(){if(!this.fetchingData){this.fetchingData=!0,this.allListLoading=!0,this.onscrollLoader=!0;try{let t=await this.$store.dispatch("getCollectionBookmarks",{collectionId:this.$route.params.collectionId,type:"teamShared",page:this.page});await this.$store.dispatch("getCollectionBookmarksImages",{collectionId:this.$route.params.collectionId,type:"teamShared",page:this.page}),t.length>0?(this.page++,this.onscrollLoader=!1,t.length<10&&this.initializeInterceptor()):(this.linkPageLimit=!0,this.allListLoading=!1)}catch(t){console.error("Error fetching data:",t)}finally{this.fetchingData=!1}}},initializeInterceptor(){let t={root:document.querySelector(".tmf-app"),threshold:.5},e=t=>{t.forEach(t=>{t.isIntersecting&&!this.linkPageLimit&&this.initializeData()})},i=new IntersectionObserver(e,t),a=document.querySelector("#LinkscrollLoaderTeamsShared");a&&i.observe(a)},handleResetBookmarks(){this.$store.commit("SET_COLLECTION_BOOKMARKS",[]),this.$store.commit("SET_COLLECTION_BOOKMARKS_IMAGES",[]),this.page=1,this.allListLoading=!0,this.initializeData(),this.initializeInterceptor()}},watch:{selectedCollection:{immediate:!0,deep:!0,handler(t){if(t){let e=this.$collectionHelper.isCollectionSharedInTeamsModfiable(t),i=e?"privateBookmarks":"publicBookmarks";this.$nextTick(()=>{var t,a;this.componentData=this.$bookmarkTypes[i],this.componentData.header.title=null!==(t=null===(a=this.selectedCollection)||void 0===a?void 0:a.name)&&void 0!==t?t:"",e||(this.componentData.hideMultiselect=!0,this.componentData.disableDraggable=!0,this.componentData.header.hideMultiselect=!0)})}}},"$route.params.collectionId":{immediate:!0,async handler(t){t&&(this.page=1,this.linkPageLimit=!1,this.$store.commit("SET_COLLECTION_BOOKMARKS",[]),this.$store.commit("SET_COLLECTION_BOOKMARKS_IMAGES",[]),await this.initializeData(),this.initializeInterceptor())}}},beforeDestroy(){this.$bus.$off("reset-teams-shared-bookmarks",this.handleResetBookmarks)}},n=l,r=i("2877"),c=Object(r["a"])(n,a,o,!1,null,null,null);e["default"]=c.exports}}]);