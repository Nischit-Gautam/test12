(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57f25b74"],{"834b":function(o,e,i){"use strict";e["a"]={methods:{draggableToaster(o,e,i="copy"){const s=(null===o||void 0===o?void 0:o.length)||0,l=(null===e||void 0===e?void 0:e.length)||0,t=s>1,n=s-l,d="copy"===i?"copied":"moved";let c="",a="";t?0===n?(c=`${l} Links ${d} successfully`,a="success"):n>0&&0!==l?(c=`${l} Links ${d} successfully! \n              <small>Unable to ${i} ${n} \n              Link${n>1?"s":""}</small>`,a="success"):0===l&&(c=`Failed to ${i} Links. <small>Duplicate links detected</small>`,a="error"):1===l?(c=`${l} Link ${d} successfully`,a="success"):0===l&&(c=`Failed to ${i} Link. <small>Duplicate link detected</small>`,a="error"),this.$bus.$emit("open-toaster",c,a)}}}},a690:function(o,e,i){"use strict";i.r(e);var s=function(){var o=this,e=o._self._c;return e("div")},l=[],t=(i("14d9"),i("13d5"),i("834b")),n=i("2f62"),d={mixins:[t["a"]],computed:{...Object(n["b"])(["selectedBookmarks","selectedCollection","user","collectionBookmarks"])},created(){let o=this;document.body.addEventListener("keydown",(async function(e){var i;if(null!==(i=o.$route.matched)&&void 0!==i&&i.some(o=>Object.keys(null===o||void 0===o?void 0:o.meta).includes("requiresAuth"))){e=e||window.event;let i=e.which||e.keyCode,s=e.ctrlKey?e.ctrlKey:17===i;const l=o.selectedBookmarks.bookmarks||[];if(67==i&&s)o.copyLink(l);else if(86==i&&s){const e=(null===o||void 0===o?void 0:o.selectedCollection)||{};o.pasteLink(e)}}}))},mounted(){this.$bus.$on("copy-bookmark",o=>{this.copyLink(o)}),this.$bus.$on("paste-bookmark",o=>{this.pasteLink(o,!0)})},methods:{copyLink(o){var e,i,s,l,t,n;const d=this.$permissionHelper.checkPermission({permissionName:"bookmarkPaste",collection:this.selectedCollection}),c=null===(e=Object.keys(null===(i=this.$route)||void 0===i?void 0:i.meta))||void 0===e?void 0:e.includes("allBookmarks"),a=null===(s=Object.keys(null===(l=this.$route)||void 0===l?void 0:l.params))||void 0===s?void 0:s.includes("collectionId"),r=null===(t=this.selectedBookmarks)||void 0===t?void 0:t.searchMode,u=!!o.length>0;if(!d||!u||!c&&!a)return;const m={...this.selectedBookmarks};m.bookmarks=o,r||!a||null!==m&&void 0!==m&&null!==(n=m.bookmarks)&&void 0!==n&&n.every(o=>{var e;return null===(e=this.collectionBookmarks)||void 0===e||null===(e=e.reduce((o,e)=>(o.push(e.id),o),[]))||void 0===e?void 0:e.includes(o)})?(m.collection={...this.selectedCollection},this.$store.commit("SELECTED_BOOKMARKS",{...m,copy:!0}),this.$bus.$emit("open-toaster","Links copied")):this.$store.commit("SELECTED_BOOKMARKS",{})},async pasteLink(o){var e,i,s,l,t,n,d,c,a,r,u,m;const k=this.$permissionHelper.checkPermission({permissionName:"bookmarkPaste",collection:o}),v=this.selectedBookmarks.bookmarks||[],h=null===(e=this.$route)||void 0===e||null===(e=e.params)||void 0===e?void 0:e.collectionId,p=this.selectedBookmarks.collection||{},$=!(null===(i=this.selectedBookmarks)||void 0===i||!i.copy),b=!(null===(s=this.selectedBookmarks)||void 0===s||!s.searchMode),y=o.createdBy==(null===(l=this.user)||void 0===l?void 0:l.id),f=!(null===o||void 0===o||!o.isPublic),L=f&&!(null!==this&&void 0!==this&&null!==(t=this.user)&&void 0!==t&&t.isAdmin),B=null===o||void 0===o||null===(n=o.sharedTeams)||void 0===n?void 0:n.some(o=>null!==(null===o||void 0===o?void 0:o.shareWithID)),O=null===o||void 0===o||null===(d=o.sharedTeams)||void 0===d?void 0:d.some(o=>!(null===o||void 0===o||!o.allowUsersToModify)),C=null===o||void 0===o||null===(c=o.sharedTeams)||void 0===c?void 0:c.some(o=>null===(null===o||void 0===o?void 0:o.shareWithID)),g=!(null===o||void 0===o||!o.isDeleted),E=(null===(a=Object.keys(null===(r=this.$route)||void 0===r?void 0:r.params))||void 0===a?void 0:a.includes("collectionId"))||b||(null===(u=Object.keys(null===(m=this.$route)||void 0===m?void 0:m.meta))||void 0===u?void 0:u.includes("allBookmarks")),w=!b&&(null===p||void 0===p?void 0:p.id)==o.id;if(v.length&&$)if(!k||!E||w||g||L||B&&!y&&!O||C&&!y&&!O)this.$bus.$emit("open-toaster","Unable to paste here!","error");else try{var T;this.$bus.$emit("open-toaster","Copying Links...","loader");let e=await this.$axios.post(`/bookmark/${o.id}/copy/BulkAction`,JSON.stringify(v));const i=(null===e||void 0===e||null===(T=e.data)||void 0===T?void 0:T.length)||0;if(i&&(o.bookmarkCount+=i,this.$collectionHelper.mapCollection({collection:o,componentData:this.$collectionHelper.getNavItemComponentData(o),type:"update"})),this.draggableToaster(v,e.data,"copy"),o.id==h){let o=[...this.collectionBookmarks,...e.data];this.$store.commit("SET_COLLECTION_BOOKMARKS",o)}}catch(D){this.$bus.$emit("open-toaster","Error copying Links","error"),406===D.status&&this.$bus.$emit("open-subscription-limit")}finally{this.$bus.$emit("reset-selected-bookmarks"),this.$store.commit("SELECTED_BOOKMARKS",{})}}}},c=d,a=i("2877"),r=Object(a["a"])(c,s,l,!1,null,null,null);e["default"]=r.exports}}]);