(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57e7374e"],{"0a11":function(t,e,o){},"7b09":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tmf-nav-collection__item d-flex flex-row align-items-center",class:[t.contextMenuSelectedCollection===t.collection.id?"tmf-nav-collection__item__active-context-menu":"",t.currentTeamsCollection.id===t.collection.id?"tmf-nav-collection__item__current-teams-collection":""],on:{dblclick:function(e){return e.stopPropagation(),t.toggleDropdown.apply(null,arguments)},contextmenu:function(e){return e.preventDefault(),t.openContextMenu.apply(null,arguments)},dragenter:function(e){return e.stopPropagation(),t.dragEnterHandler.apply(null,arguments)},dragover:function(e){return e.stopPropagation(),t.$helper.dragOver.apply(null,arguments)},dragleave:function(e){return e.stopPropagation(),t.$helper.dragLeave.apply(null,arguments)},drop:function(e){return e.stopPropagation(),t.dropBookmarkHandler.apply(null,arguments)},click:function(e){return e.stopPropagation(),t.navCollectionItemClickHandler.apply(null,arguments)}}},[t.hasChildren||t.isLoading?e("div",{staticClass:"tmf-nav-collection__item__down-icon-wrapper d-flex align-items-center justify-content-center",style:{"padding-left":`calc(${1.5*t.childIndex-.5}rem)`}},[t.isLoading?e("div",{staticClass:"tmf-nav-collection__item__loader"},[e("span",{staticClass:"loader-control sm"})]):t._e(),!t.isLoading&&t.hasChildren?e("span",{staticClass:"tmf-nav-collection__item__down-icon",class:t.isCollectionOpen?"":"rotate-icon--90-deg",domProps:{innerHTML:t._s(t.$internalIcons.down)},on:{click:function(e){return e.stopPropagation(),t.toggleDropdown.apply(null,arguments)}}}):t._e()]):t._e(),e("router-link",{staticClass:"flex-grow-1 d-flex flex-row align-items-center route-link",style:{"padding-left":`calc(${1.5*t.childIndex}rem)!important`},attrs:{to:t.getRoutePath(),"data-collection-id":t.collection.id}},[e("span",{staticClass:"tmf-nav-collection__item__icon",domProps:{innerHTML:t._s(t.collectionIcon)}}),e("div",{staticClass:"tmf-nav-collection__item__icons d-flex flex-row align-items-center"},[t.showCollectionDescription?e("TmfNavCollectionItemDescription",{attrs:{collection:t.collection}}):t._e(),t.$collectionHelper.isChild(t.collection)?t._e():[t._l(t.$collectionHelper.navCollectionItemIcons,(function(o,n){return[e("TmfNavCollectionItemIcons",t._b({key:n},"TmfNavCollectionItemIcons",{collection:t.collection,componentData:o},!1))]}))]],2),e("div",{staticClass:"tmf-nav-collection__item__name flex-grow-1",attrs:{title:t.collection.name}},[t._v(" "+t._s(t.collection.name)+" ")])]),e("TmfNavCollectionActions",t._b({},"TmfNavCollectionActions",{componentData:t.componentData,collection:{...t.collection},childIndex:t.childIndex},!1))],1)},l=[],i=o("2f62"),c={props:{collection:{type:Object,required:!0},componentData:{type:Object,required:!0},childIndex:{type:Number,required:!0},teamsId:{type:String,required:!1,default:null}},components:{TmfNavCollectionActions:()=>o.e("chunk-329ed38e").then(o.bind(null,"98d5")),TmfNavCollectionItemIcons:()=>o.e("chunk-874f7bd8").then(o.bind(null,"b2ed")),TmfNavCollectionItemDescription:()=>o.e("chunk-2d0e2646").then(o.bind(null,"7f01"))},data(){return{}},computed:{...Object(i["b"])(["loadingCollections","contextMenuSelectedCollection","currentTeamsCollection","windowWidth"]),collectionIcon(){var t;return(null===(t=this.collection)||void 0===t?void 0:t.icon)||this.$internalIcons.placeholderImage},hasPlaceholderIcon(){var t;return!(null!==(t=this.collection)&&void 0!==t&&t.icon)},hasChildren(){var t;return!(null===(t=this.collection)||void 0===t||!t.hasChildren)},isLoading(){return this.loadingCollections.includes(this.teamsId?`${this.teamsId}-${this.collection.id}`:this.collection.id)},isCollectionOpen(){var t;return!(null===(t=this.collection)||void 0===t||!t.isOpen)},showCollectionDescription(){var t;return!(null===(t=this.collection)||void 0===t||null===(t=t.description)||void 0===t||!t.length)}},methods:{navCollectionItemClickHandler(){this.$bus.$emit("open-team-sidebar-content-menu",{close:!0}),this.windowWidth<400&&this.$store.commit("SET_SIDEBAR_STATUS")},getRoutePath(){var t;let e=""+this.$route.matched[0].path,o=(null===(t=this.componentData)||void 0===t?void 0:t.route)||"",n=`${e}/${o}${null!=this.teamsId?(0==this.teamsId.length?this.collection.parentID:this.teamsId)+"/":""}${this.collection.id}`;return+this.$route.params.collectionId===this.collection.id&&this.$store.commit("SET_SELECTED_COLLECTION",{...this.collection}),n},toggleDropdown(){this.$bus.$emit("open-team-sidebar-content-menu",{close:!0}),this.$collectionHelper.collectionDropdownToggleHandler({componentData:this.componentData,collection:this.collection,teamsId:this.teamsId})},openContextMenu(t){this.$permissionHelper.checkPermission({permissionName:"collectionContextMenu",collection:this.collection})&&this.$bus.$emit("open-team-sidebar-content-menu",{event:t,collection:this.collection,componentData:this.componentData,childIndex:this.childIndex})},async dragEnterHandler(t){var e;let o=this.$collectionHelper.isCollectionDropDisable(this.collection);return o&&this.$bus.$emit("open-toaster","This action is not allowed","error"),this.$helper.dragEnter(t,o),!this.collection.hasChildren||null!==(e=this.collection)&&void 0!==e&&e.isOpen||setTimeout(async()=>{await this.toggleDropdown()},500),!1},async dropBookmarkHandler(t){t.preventDefault(),t.target.style.border="",t.target.style.backgroundColor="";let e=t.dataTransfer.getData("data");const o=JSON.parse(e);o&&!this.$collectionHelper.isCollectionDropDisable(this.collection)&&await this.$bus.$emit("open-draggable-form",{bookmark:o,event:t,collection:this.collection,path:this.path,publicCollection:this.isPublicCollection})}}},a=c,s=(o("fe7e"),o("2877")),r=Object(s["a"])(a,n,l,!1,null,null,null);e["default"]=r.exports},fe7e:function(t,e,o){"use strict";o("0a11")}}]);