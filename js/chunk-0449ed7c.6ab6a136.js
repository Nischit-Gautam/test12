(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0449ed7c"],{1666:function(t,e,a){},"5cbe":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return t.modal?e("ModalContainer",t._b({staticClass:"share-form share-teams-form",attrs:{modal:t.modal},on:{update:function(e){t.formData={}},submit:t.submit,"update:modal":function(e){t.modal=e}}},"ModalContainer",{modalData:t.modalData,isButtonDisable:t.isButtonDisable,isButtonLoading:t.isButtonLoading},!1),[t.isLoading?e("div",{staticClass:"d-flex align-items-center justify-content-center p-2 pb-4",attrs:{slot:"body"},slot:"body"},[e("TmfSpinner")],1):e("template",{slot:"body"},[e("div",{staticClass:"share-form__collection-title-container"},[e("span",{staticClass:"share-form__collection-icon",domProps:{innerHTML:t._s(t.collection.icon)}}),e("span",{staticClass:"share-form__collection-title"},[t._v(t._s(t.collection.name))])]),t.checkIfChannelShareIsPossible?[e("div",{staticClass:"tmf-form-element share-teams-form__channels-select mb-2"},[e("div",{staticClass:"mb-2 share-teams-form__channels-select__team-name"},[t._v(" "+t._s(t.teamsGroup.teamName)+" ")]),e("label",{attrs:{for:"channelID"}},[t._v("Select channel *")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.channelID,expression:"formData.channelID"}],attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formData,"channelID",e.target.multiple?a:a[0])}}},[t._l(t.filteredTeamsChannel,(function(a){return[e("option",{key:a.id,domProps:{value:a.channelID}},[t._v(t._s(a.channelName))])]}))],2)]),e("div",{staticClass:"tmf-form-element tmf-checkbox d-flex align-items-center my-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.AllowUsersToModify,expression:"formData.AllowUsersToModify"}],staticClass:"mr-1",attrs:{type:"checkbox",name:"Allow user to modify"},domProps:{checked:Array.isArray(t.formData.AllowUsersToModify)?t._i(t.formData.AllowUsersToModify,null)>-1:t.formData.AllowUsersToModify},on:{change:function(e){var a=t.formData.AllowUsersToModify,s=e.target,o=!!s.checked;if(Array.isArray(a)){var i=null,l=t._i(a,i);s.checked?l<0&&t.$set(t.formData,"AllowUsersToModify",a.concat([i])):l>-1&&t.$set(t.formData,"AllowUsersToModify",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.formData,"AllowUsersToModify",o)}}}),e("label",{staticClass:"ml-1",attrs:{for:"Allow user to modify"}},[t._v("Allow user to modify")])])]:e("div",{staticClass:"mb-3"},[t._v(" Collection already shared with every channels on this teams. ")])],2)],2):t._e()},o=[],i=a("2f62");function l(){return{modal:!1,isButtonLoading:!1,formData:{IsShared:!0,IsPublic:!1,IsPrivate:!1,IsSharedWithTeams:!0,ShareWithType:"teams",shareWithID:null,CategoryID:null,SharedWithName:null},collection:{},teamsChannels:[],isLoading:!1}}var n={data:()=>l(),computed:{...Object(i["b"])(["teamsGroup"]),isButtonDisable(){return this.isButtonLoading},modalData(){return{title:"Share with Teams",icon:"teamsIcon",hideButton:this.isLoading||!this.checkIfChannelShareIsPossible}},filteredTeamsChannel(){var t;return null===(t=this.teamsChannels)||void 0===t?void 0:t.filter(t=>{var e;return!(null!==(e=this.collection)&&void 0!==e&&null!==(e=e.sharedTeams)&&void 0!==e&&e.some(e=>e.shareWithID===t.channelID))})},checkIfChannelShareIsPossible(){var t;return!(this.$collectionHelper.isCollectionSharedwithTeams(this.collection)&&!(null!==(t=this.filteredTeamsChannel)&&void 0!==t&&t.length)>0)}},mounted(){this.$bus.$on("open-teams-share-form",t=>{var e,a;this.initialize(t),this.collection={...t.collection},this.formData.shareWithID=null===(e=this.teamsGroup)||void 0===e?void 0:e.groupId,this.formData.CategoryID=this.collection.id,this.formData.SharedWithName=null===(a=this.teamsGroup)||void 0===a?void 0:a.teamName})},methods:{async initialize(t){var e;Object.assign(this.$data,l()),this.collection={...t.collection},this.formData.channelID=null===(e=this.teamsGroup)||void 0===e?void 0:e.channelId,this.modal=!0,await this.getCurrentTeamsChannels()},async getCurrentTeamsChannels(){try{var t;this.isLoading=!0,await this.$axios.get("/share/get-channels?teamsid="+(null===(t=this.teamsGroup)||void 0===t?void 0:t.groupId)).then(t=>{var e;this.teamsChannels=t.data,this.formData.channelID=null===(e=this.filteredTeamsChannel)||void 0===e||null===(e=e[0])||void 0===e?void 0:e.channelID})}finally{this.isLoading=!1}},async submit(){try{var t;this.isButtonLoading=!0,this.formData.shareWithID=this.teamsGroup.groupId;let e=await this.$axios.post("/share/channel-share/"+(null===(t=this.collection)||void 0===t?void 0:t.id),this.formData);this.$collectionHelper.mapCollection({collection:e.data,type:"update",componentData:this.$collectionHelper.getNavItemComponentData(this.collection)}),this.$bus.$emit("open-toaster","Shared with teams successfully","success"),this.modal=!1}catch{this.$bus.$emit("open-toaster","Error sharing on teams","error")}finally{this.resetLoaders(),this.isButtonLoading=!1}},resetLoaders(){this.isButtonLoading=!1}},beforeDestroy(){this.$bus.$off("open-teams-share-form")}},r=n,c=(a("6832"),a("2877")),h=Object(c["a"])(r,s,o,!1,null,null,null);e["default"]=h.exports},6832:function(t,e,a){"use strict";a("1666")}}]);