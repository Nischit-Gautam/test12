(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdda4"],{"2e83":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"word-docs-links--page"},["WordDocumentLinks"===t.$route.name?e("div",{staticClass:"word-docs-links--page__title-wrapper"},[e("div",{staticClass:"word-docs-links--page__title"},[t._v(" Document Links "),e("span",{staticClass:"word-docs-links--page__title__count"},[t._v("("+t._s(t.wordDocumentUrlsCount)+")")])]),e("button",{staticClass:"btn-control md primary",on:{click:function(e){return t.$bus.$emit("open-bookmark-form")}}},[t._v(" Add Link ")])]):t._e(),t.wordDocumentName.length?e("div",{staticClass:"word-docs-links--page__doc-name__wrapper mt-2 mb-3 d-flex align-items-center justify-content-between"},[e("div",{staticClass:"word-docs-links--page__doc-name__name mr-1"},[t._v(" "+t._s(t.wordDocumentName)+" ")]),t.isDocumentNameAlreadySetAsCollection?t._e():e("button",{directives:[{name:"tmf-tooltip",rawName:"v-tmf-tooltip",value:{content:"Add document name as collection"},expression:"{ content: 'Add document name as collection' }"}],staticClass:"btn-control sm icon sq green",on:{click:function(e){return t.$bus.$emit("open-collection-form",{withNewCategory:t.wordDocumentName})}}},[e("span",{domProps:{innerHTML:t._s(t.$internalIcons.plus)}})])]):t._e(),e("div",{staticClass:"word-docs-links--page__pagination-wrapper"},[e("div",{staticClass:"d-flex align-items-center"},[t.documentIsEmpty?t._e():e("TmfPagination",t._b({attrs:{page:t.page},on:{"update:page":[function(e){t.page=e},t.paginationChanged]}},"TmfPagination",{totalPages:t.wordDocumentTotalPage},!1)),t.isChangeInDocument?e("button",{directives:[{name:"tmf-tooltip",rawName:"v-tmf-tooltip",value:{content:"Sync with document"},expression:"{ content: 'Sync with document' }"}],staticClass:"btn-control sm icon icon__md sq secondary ml-1",on:{click:t.syncDocument}},[e("span",{domProps:{innerHTML:t._s(t.$internalIcons.sync)}})]):t._e()],1),t.showGetSelectedLinksButton?e("button",{directives:[{name:"tmf-tooltip",rawName:"v-tmf-tooltip",value:{content:"Read selected section"},expression:"{ content: 'Read selected section' }"}],staticClass:"btn-control md icon sq light",on:{click:function(e){t.showSelectedLinklist=!t.showSelectedLinklist}}},[t.selectedLinksIsLoading?e("div",{staticClass:"loader"}):t._e(),e("span",{domProps:{innerHTML:t._s(t.$internalIcons.read)}})]):t._e()]),t.showSelectedLinklist&&t.showGetSelectedLinksButton&&!t.selectedLinksIsLoading?e("div",{staticClass:"word-docs-links--page__selected_links"},[e("div",{staticClass:"word-docs-links--page__selected_links__header"},[e("div",{staticClass:"word-docs-links--page__selected_links__header__title"},[t._v(" Dcoument Selected Links ")]),e("span",{staticClass:"word-docs-links--page__selected_links__header__count"},[t._v("("+t._s(t.wordSelectedUrlsCount)+")")])]),e("TmfDocumentLinkList",t._b({},"TmfDocumentLinkList",{wordDocumentUrls:t.wordSelectedUrls},!1))],1):t._e(),t.isLoading?e("div",[t._l(5,(function(n){return[e("div",{key:n,staticClass:"d-flex p-1 mb-1",staticStyle:{background:"#fff"}},[e("div",{staticClass:"skeletion-loader dark mr-1",staticStyle:{height:"1.3rem",width:"1.3rem"}}),t._m(0,!0),e("div",{staticClass:"d-flex"},[t._l(3,(function(t){return[e("div",{key:t,staticClass:"skeletion-loader ml-1",staticStyle:{height:"1rem",width:"1rem"}})]}))],2)])]}))],2):e("TmfDocumentLinkList",t._b({},"TmfDocumentLinkList",{wordDocumentUrls:t.wordLoadedDocumentLinks},!1))],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-grow-1 mr-1"},[e("div",{staticClass:"skeletion-loader mb-1",staticStyle:{height:".7rem",width:"90%"}}),e("div",{staticClass:"skeletion-loader light",staticStyle:{height:".4rem",width:"70%"}})])}],i=(n("14d9"),n("13d5"),n("2f62")),a={components:{TmfDocumentLinkList:()=>n.e("chunk-2d0d711e").then(n.bind(null,"74f1")),TmfPagination:()=>n.e("chunk-287b31d5").then(n.bind(null,"882b"))},data(){return{isLoading:!1,maxParagraph:0,page:1,wordCountList:[],documentSelectedLinks:[],showGetSelectedLinksButton:!1,selectedLinksIsLoading:!1,showSelectedLinklist:!1,maxPageLinkCount:"10",isChangeInDocument:!1}},computed:{...Object(i["b"])(["wordDocumentUrls","wordDocumentUrlsCount","wordDocumentCurrentPage","wordSelectedUrls","wordSelectedUrlsCount","wordLoadedDocumentLinks","wordDocumentTotalPage","wordDocumentName","collections"]),documentIsEmpty(){return this.wordCountList.length<=1&&0===this.wordDocumentUrlsCount},isDocumentNameAlreadySetAsCollection(){var t;return null===(t=this.collections)||void 0===t?void 0:t.some(t=>t.name===this.wordDocumentName)}},async created(){this.setDocumentName(),this.page=this.wordDocumentCurrentPage;let t=this;async function e(){t.isChangeInDocument=!0,await t.getSelectedRangeFromDocument()}window.Office.context.document.addHandlerAsync(window.Office.EventType.DocumentSelectionChanged,e),this.wordDocumentUrlsCount||await this.getLinksFromDocuments()},methods:{setDocumentName(){let t=window.Office.context.document.url,e="MSWord";if(null!==t&&void 0!==t&&t.length){let n=t.match(/[^/\\&?]+\.\w{3,4}(?=([?&].*$|$))/gm);e=n[0]}this.$store.commit("SET_WORD_DOCUMENT_NAME",e)},async paginationChanged(t){parseInt(t)>this.wordDocumentTotalPage||parseInt(t)<1?this.$bus.$emit("open-toaster","Invalid pagination count","error"):(this.page=parseInt(t),this.wordDocumentCurrentPage!==t&&this.$store.commit("SET_WORD_DOCUMENT_CURRENT_PAGE",this.page))},async syncDocument(){this.isChangeInDocument=!1,await this.getLinksFromDocuments()},async getLinksFromDocuments(){this.isLoading=!0;let t=this;window.Word.run((function(e){let n=e.document.body;var o=n.getOoxml();return e.sync().then((async function(){await t.xmlParserHandler(o.value),t.isLoading=!1}))})).catch((function(e){t.isLoading=!1,console.log("Error: "+JSON.stringify(e))}))},async xmlParserHandler(t){let e=await this.xmlParser(t),n=(null===e||void 0===e?void 0:e.length)||0,o=n/this.maxPageLinkCount,s=o-Math.trunc(o)!==0?Math.trunc(o)+1:Math.trunc(o);await this.$store.commit("SET_WORD_DOCUMENT_TOTAL_PAGE",s),await this.$store.commit("SET_WORD_DOCUMENT_URLS",e),await this.$store.commit("SET_WORD_DOCUMENT_CURRENT_PAGE",this.page)},async xmlParser(t){let e=new DOMParser,n=e.parseFromString(t,"text/xml"),o=[...n.getElementsByTagName("w:hyperlink")],s=[...n.getElementsByTagName("Relationship")],i=null===o||void 0===o?void 0:o.reduce((t,e)=>{let n={title:e.childNodes[0].childNodes[1].innerHTML.replace(/^\s+|\s+$/g,""),id:e.attributes["r:id"].nodeValue};return t.push(n),t},[]);return null===s||void 0===s||s.forEach(t=>{null===i||void 0===i||i.map(e=>((null===e||void 0===e?void 0:e.id)===t.attributes["Id"].nodeValue&&(e.path=t.attributes["Target"].nodeValue,e.path.startsWith("mailto:")&&(e.path=e.path.replace("mailto:",""))),e))}),i},getSelectedRangeFromDocument(){this.showGetSelectedLinksButton=!1,this.selectedLinksIsLoading=!0;let t=this;window.Word.run((function(e){let n=e.document.getSelection();return e.load(n),e.sync().then((async function(){if(null!==n&&void 0!==n&&n.isEmpty)return void t.$store.commit("SET_WORD_SELECTED_RANGE","");t.$store.commit("SET_WORD_SELECTED_RANGE",n.text);let o=n.getOoxml();return e.sync().then((async function(){t.documentSelectedLinks=await t.xmlParser(o.value),t.setSelectedUrls()}))}))})).catch((function(e){t.isLoading=!1,console.error("Error: "+e)}))},setSelectedUrls(){this.compareArrayHandler(this.documentSelectedLinks,this.wordLoadedDocumentLinks)||(this.$store.commit("SET_WORD_DOCUMENT_SELECTED_URLS",this.documentSelectedLinks),this.showGetSelectedLinksButton=!0),this.selectedLinksIsLoading=!1},compareArrayHandler(t,e){var n=!0;let o=t.reduce((t,e)=>(t.push(e.path),t),[]);return!(!(null!==o&&void 0!==o&&o.length)>0||!(null!==e&&void 0!==e&&e.length)>0)&&(n=e.every(t=>o.includes(null===t||void 0===t?void 0:t.path)),n)}}},c=a,l=n("2877"),d=Object(l["a"])(c,o,s,!1,null,null,null);e["default"]=d.exports}}]);