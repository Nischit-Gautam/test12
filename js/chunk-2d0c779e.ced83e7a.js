(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c779e"],{"517c":function(o,t,e){"use strict";e.r(t);var s=function(){var o=this,t=o._self._c;return t("div",{staticClass:"all-bookmarks mb-2"},[o.bookmarks.length?t("bookmark-items",o._b({},"bookmark-items",{bookmarks:o.bookmarks,componentData:o.$bookmarkTypes.allBookmarks,isLoading:o.isLoading,onscrollLoader:o.onscrollLoader,allBookmarkCount:o.allBookmarkCount,bookmarksImagesOnly:o.bookmarksImagesOnly},!1)):o._e(),o.allListLoading?t("div",{staticClass:"d-flex w-100",style:{"margin-top":o.page>1?"-.9rem":""},attrs:{id:"LinkscrollLoader"}},[t("bookmark-loader",{staticClass:"w-100",attrs:{loaderCount:3}})],1):o._e()],1)},a=[],r=e("2f62"),i={components:{BookmarkItems:()=>e.e("chunk-7b759355").then(e.bind(null,"d8a7")),BookmarkLoader:()=>e.e("chunk-2d228d20").then(e.bind(null,"db8d"))},data(){return{showOutlookEmailLinks:!1,selectAllBookmark:!1,cardView:"list",isLoading:!1,page:1,linkPageLimit:!1,allListLoading:!0,onscrollLoader:!0}},computed:{...Object(r["b"])(["bookmarks","allBookmarkCount","bookmarksImagesOnly"])},created(){this.$store.dispatch("getAllBookmarkcount")},mounted(){this.initializeInterceptor(),this.$bus.$on("reset-current-bookmarks",()=>{this.$store.commit("SET_BOOKMARKS",[]),this.page=1,this.getAllBookmarks()})},methods:{async getAllBookmarks(){this.allListLoading=!0,this.onscrollLoader=!0;let o=await this.$store.dispatch("getBookmarks",this.page);this.$store.dispatch("getBookmarksImagesOnly",this.page),o.length>0?(this.page++,this.onscrollLoader=!1,o.length<10&&this.initializeInterceptor()):(this.linkPageLimit=!0,this.allListLoading=!1)},initializeInterceptor(){let o={root:document.querySelector(".tmf-app"),threshold:.5},t=o=>{o.forEach(o=>{o.isIntersecting&&!this.linkPageLimit&&this.getAllBookmarks()})},e=new IntersectionObserver(t,o),s=document.querySelector("#LinkscrollLoader");e.observe(s)}},beforeDestroy(){this.$bus.$off("reset-current-bookmarks")}},l=i,n=e("2877"),k=Object(n["a"])(l,s,a,!1,null,null,null);t["default"]=k.exports}}]);