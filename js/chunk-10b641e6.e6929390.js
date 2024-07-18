(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10b641e6"],{7803:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"signup-page"},[e("div",{staticClass:"signup-page--wrapper d-flex align-items-center justify-content-center"},[e("div",{staticClass:"signup-form scroll-vertical"},[e("ul",{staticClass:"form-steps d-flex align-items-center"},[e("li",[e("div",{staticClass:"logo-container d-flex justify-content-center align-items-center"},[e("img",{attrs:{src:t.logo,alt:"",height:"40px",width:"40px"}}),t._m(0)])]),t._m(1),t._m(2),t._m(3),t._m(4)]),e("form",{staticClass:"sub-form",on:{submit:function(e){return e.preventDefault(),t.subscriptionFormHandler()}}},[e("p",{staticClass:"form-note"},[t._v(" The Subscription Name and the Plan were created when you completed your purchased on Microsoft Partner Center, and were provided by Microsoft to Tag My Favourite so that we can provision your account. You can record this information for your own records, but if you don't we always have it in our records too! ")]),e("div",{staticClass:"signup-form--wrapper"},[e("h3",{staticClass:"mb-4"},[t._v("Subscription Form")]),e("div",{staticClass:"form-input-container"},[e("TmfInput",{attrs:{formAttributes:{type:"text",label:"Subscription Name",autocomplete:"off",autofill:"off",disabled:!0,readonly:!0},value:t.subscriptionName},on:{"update:value":function(e){t.subscriptionName=e}}}),e("input-wrapper",{staticClass:"tmf-form-element",attrs:{error:t.$helper.getInputError(t.formErrors,"Plan")}},[e("div",{staticClass:"d-flex flex-column input-control form-group"},[e("label",{attrs:{for:"plan"}},[t._v("Plan *")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.plan,expression:"formData.plan"}],staticClass:"mb-0 form-control tmf-form-element__input-element",attrs:{name:"plan",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formData,"plan",e.target.multiple?r:r[0])}}},[e("option",{attrs:{selected:"selected",disabled:""},domProps:{value:{}}},[t._v("--Select a plan--")]),t._l(t.subscriptionPlans,(function(r,a){return[e("option",{key:a,domProps:{value:r}},[t._v(t._s(r.name))])]}))],2)])]),e("TmfInput",{attrs:{formAttributes:{type:"number",label:"Quantity",autocomplete:"off",autofill:"off",disabled:!0,readonly:!0},value:t.planQuantity},on:{"update:value":function(e){t.planQuantity=e}}}),e("span"),e("strong",{staticClass:"flex-grow-1 mb-2"},[t._v("Please provide us with your Information:")]),e("span"),e("TmfInput",{attrs:{formAttributes:{type:"email",label:"Email *",autocomplete:"off",autofill:"off",disabled:!0,readonly:!0,required:!0,name:"Email"},formErrors:t.formErrors,value:t.formData.email},on:{"update:value":function(e){return t.$set(t.formData,"email",e)}}}),e("input-wrapper",{staticClass:"tmf-form-element",attrs:{error:t.$helper.getInputError(t.formErrors,"Title")}},[e("div",{staticClass:"d-flex flex-column input-control form-group"},[e("label",{attrs:{for:"title"}},[t._v("Title *")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.title,expression:"formData.title"}],staticClass:"mb-0 form-control tmf-form-element__input-element",attrs:{name:"title"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.formData,"title",e.target.multiple?r:r[0])}}},[e("option",{attrs:{selected:"selected",disabled:"",value:""}},[t._v("--Select a Title--")]),e("option",{attrs:{value:"Mr"}},[t._v("Mr.")]),e("option",{attrs:{value:"Ms"}},[t._v("Ms.")])])])]),e("TmfInput",{attrs:{formAttributes:{type:"text",label:"First Name *",autocomplete:"off",autofill:"off",required:!0,name:"firstName"},formErrors:t.formErrors,value:t.formData.firstName},on:{"update:value":function(e){return t.$set(t.formData,"firstName",e)}}}),e("TmfInput",{attrs:{formAttributes:{type:"text",label:"Middle Name",autocomplete:"off",autofill:"off"},value:t.formData.middleName},on:{"update:value":function(e){return t.$set(t.formData,"middleName",e)}}}),e("TmfInput",{attrs:{formAttributes:{type:"text",label:"Last Name *",autocomplete:"off",autofill:"off",required:!0,name:"LastName"},formErrors:t.formErrors,value:t.formData.lastName},on:{"update:value":function(e){return t.$set(t.formData,"lastName",e)}}}),e("TmfInput",{attrs:{formAttributes:{type:"tel",label:"Phone *",autocomplete:"off",autofill:"off",required:!0,name:"Phone"},formErrors:t.formErrors,value:t.formData.phone},on:{"update:value":function(e){return t.$set(t.formData,"phone",e)}}})],1),t._m(5)])]),e("form",{staticClass:"sub-form",on:{submit:function(e){return e.preventDefault(),t.subscriptionFormHandler()}}},[e("p",{staticClass:"form-note"},[t._v(" Fill the form below to set your organzation details. ")]),e("div",{staticClass:"signup-form--wrapper"},[e("h3",{staticClass:"mb-4"},[t._v("Firm Details")]),e("div",{staticClass:"form-input-container"},[e("TmfInput",{attrs:{formAttributes:{type:"text",label:"Firm Name *",autocomplete:"off",autofill:"off",required:!0,name:"Organization.Name"},formErrors:t.formErrors,value:t.firmDetails.name},on:{"update:value":function(e){return t.$set(t.firmDetails,"name",e)}}}),e("TmfInput",{attrs:{formAttributes:{name:"Organization.Website",type:"url",label:"Firm Url *",autocomplete:"off",autofill:"off",required:!0},formErrors:t.formErrors,value:t.firmDetails.website},on:{"update:value":function(e){return t.$set(t.firmDetails,"website",e)}}}),e("TmfInput",{attrs:{formAttributes:{name:"Organization.Phone",type:"tel",label:"Firm Phone *",autocomplete:"off",autofill:"off",required:!0},formErrors:t.formErrors,value:t.firmDetails.phone},on:{"update:value":function(e){return t.$set(t.firmDetails,"phone",e)}}}),e("TmfInput",{attrs:{formAttributes:{name:"Organization.Email",type:"email",label:"Firm Email *",autocomplete:"off",autofill:"off",required:!0},formErrors:t.formErrors,value:t.firmDetails.email},on:{"update:value":function(e){return t.$set(t.firmDetails,"email",e)}}}),e("input-wrapper",{staticClass:"tmf-form-element",attrs:{error:t.$helper.getInputError(t.formErrors,"Country")}},[e("div",{staticClass:"d-flex flex-column input-control form-group"},[e("label",{attrs:{for:"country"}},[t._v("Country *")]),e("select",{staticClass:"form-control mb-0 tmf-form-element__input-element",attrs:{placeholder:"Select a country",required:"",name:"country"},on:{change:t.getStates}},[t._l(t.countries,(function(r){return[e("option",{key:r.id,domProps:{value:r.id}},[t._v(t._s(r.name))])]}))],2)])]),e("input-wrapper",{staticClass:"tmf-form-element",attrs:{error:t.$helper.getInputError(t.formErrors,"State")}},[e("div",{staticClass:"d-flex flex-column input-control form-group"},[e("label",{attrs:{for:"country"}},[t._v("State")]),e("select",{staticClass:"form-control mb-0 tmf-form-element__input-element",attrs:{placeholder:"Select a State",name:"states",disabled:!("country"in t.firmDetails&&t.firmDetails.country)},on:{change:t.getTimeZone}},[t._l(t.states,(function(r){return[e("option",{key:r.id,domProps:{value:r.id}},[t._v(t._s(r.name))])]}))],2)])]),e("input-wrapper",{staticClass:"tmf-form-element",attrs:{error:t.$helper.getInputError(t.formErrors,"TimeZone")}},[e("div",{staticClass:"d-flex flex-column input-control form-group"},[e("label",{attrs:{for:"country"}},[t._v("Time Zone *")]),e("select",{staticClass:"form-control mb-0 tmf-form-element__input-element",attrs:{placeholder:"Select time zone",name:"tmezome",required:"",disabled:!("state"in t.firmDetails)},on:{change:t.setTimeZone}},[t._l(t.timeZone,(function(r){return[e("option",{key:r.id,domProps:{value:r.id}},[t._v(t._s(r.displayName))])]}))],2)])]),e("TmfInput",{attrs:{formAttributes:{name:"Organization.Address",type:"text",label:"Address *",autocomplete:"off",autofill:"off",required:!0},formErrors:t.formErrors,value:t.firmDetails.address},on:{"update:value":function(e){return t.$set(t.firmDetails,"address",e)}}})],1),e("div",{staticClass:"form-button-container"},[e("button",{staticClass:"btn-control md light",attrs:{type:"button"},on:{click:function(e){return t.nextPrevHandler(-1)}}},[t._v(" Previous ")]),e("button",{staticClass:"btn-control md primary",attrs:{type:"submit"}},[t._v(" Next ")])])])]),e("div",{staticClass:"sub-form"},[e("p",{staticClass:"form-note"},[t._v(" Double check your info and submit..then follow the instructions on our webpage to get everything set up so you can start using our awesome tool to manage and share links! ")]),e("div",{staticClass:"signup-form--wrapper"},[e("h3",{staticClass:"mb-4"},[t._v("Review Details")]),e("div",{staticClass:"form-input-container"},[e("strong",{staticClass:"mb-2"},[t._v("Subscription Details")]),t._v(" "),e("span"),e("div",{staticClass:"form-info"},[e("b",[t._v("Subscription Name :")]),e("span",[t._v(t._s(t.subscriptionName))])]),e("div",{staticClass:"form-info"},[e("b",[t._v("Subscription Plan :")]),e("span",[t._v(t._s(t.subscriptionName))])]),t._m(6),e("span"),e("strong",{staticClass:"mb-2 mt-4"},[t._v("User Details")]),e("span"),e("div",{staticClass:"form-info"},[e("b",[t._v("Name :")]),e("span",[t._v(t._s(t.getUserName))])]),e("div",{staticClass:"form-info"},[e("b",[t._v("Email :")]),e("span",[t._v(t._s(t.formData.email))])]),e("div",{staticClass:"form-info"},[e("b",[t._v("Phone :")]),e("span",[t._v(t._s(t.formData.phone))])]),e("span"),[e("strong",{staticClass:"mb-2 mt-4"},[t._v("Firm Details")]),e("span"),e("div",{staticClass:"form-info"},[e("b",[t._v("firm Name :")]),e("span",[t._v(t._s(t.organization.name))])]),e("div",{staticClass:"form-info"},[e("b",[t._v("Url :")]),e("span",[t._v(t._s(t.organization.website||"N/A"))])]),e("div",{staticClass:"form-info"},[e("b",[t._v("Phone :")]),e("span",[t._v(t._s(t.organization.phone||"N/A"))])]),e("div",{staticClass:"form-info"},[e("b",[t._v("Email :")]),e("span",[t._v(t._s(t.organization.email))])]),e("div",{staticClass:"form-info"},[e("b",[t._v("Country :")]),e("span",[t._v(t._s(t.getName(t.countries,"name","country")))])]),e("div",{staticClass:"form-info"},[e("b",[t._v(" Time zone :")]),e("span",[t._v(t._s(t.getName(t.timeZone,"displayName","timeZone")))])]),e("div",{staticClass:"form-info"},[e("b",[t._v(" State :")]),e("span",[t._v(t._s(t.getName(t.states,"name","state")))])]),e("div",{staticClass:"form-info"},[e("b",[t._v(" Address :")]),e("span",[t._v(t._s(t.organization.address))])])],[e("strong",{staticClass:"mb-2 mt-4"},[t._v("Partner Details")]),e("span"),e("div",{staticClass:"form-info"},[e("b",[t._v("Partner type :")]),e("span",[t._v(t._s(t.selectedPartnerType))])])]],2)]),e("div",{staticClass:"d-flex align-items-center mb-2 mt-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isLiscenceAccepted,expression:"isLiscenceAccepted"}],attrs:{type:"checkbox",name:"acceptLiscence"},domProps:{checked:Array.isArray(t.isLiscenceAccepted)?t._i(t.isLiscenceAccepted,null)>-1:t.isLiscenceAccepted},on:{change:function(e){var r=t.isLiscenceAccepted,a=e.target,s=!!a.checked;if(Array.isArray(r)){var i=null,o=t._i(r,i);a.checked?o<0&&(t.isLiscenceAccepted=r.concat([i])):o>-1&&(t.isLiscenceAccepted=r.slice(0,o).concat(r.slice(o+1)))}else t.isLiscenceAccepted=s}}}),e("label",{staticClass:"ml-2",attrs:{for:"acceptLiscence"}},[e("a",{attrs:{href:t.privacyUrl,target:"_blank"}},[t._v("Accept licence agreement")])])]),e("div",{staticClass:"form-button-container"},[e("button",{staticClass:"btn-control md light",on:{click:function(e){return t.nextPrevHandler(-1)}}},[t._v(" Previous ")]),e("button",{staticClass:"btn-control md primary",attrs:{type:"button",disabled:t.isLoading||!t.isLiscenceAccepted},on:{click:t.register}},[t._v(" Submit "),t.isLoading?e("div",{staticClass:"loader"}):t._e()])])])])])])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"ml-1 name"},[t._v(" Tag "),e("br"),t._v(" My "),e("br"),t._v(" Favourite ")])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"form-step form-step--item"},[e("h3",[t._v("1")]),e("p",[t._v("Subscription "),e("br"),t._v("Details")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"form-step form-step--item"},[e("h3",[t._v("2")]),e("p",[t._v("Create "),e("br"),t._v("Firm")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"form-step form-step--item"},[e("h3",[t._v("3")]),e("p",[t._v("Register "),e("br"),t._v("Partner")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"form-step form-step--item"},[e("h3",[t._v("4")]),e("p",[t._v("Review "),e("br"),t._v("Details")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-button-container"},[e("button",{staticClass:"btn-control md primary",attrs:{type:"submit"}},[t._v(" Next ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-info"},[e("b",[t._v("Subscription Quantity :")]),e("span",[t._v("1")])])}],i=(r("14d9"),r("c4fe")),o=r.n(i),n=r("bc3a"),l=r.n(n),m={data(){return{logo:o.a,formData:{},isLiscenceAccepted:!1,isLoading:!1,currentTab:0,subscriptionPlans:[],isFirmEnable:!1,organization:{},countries:[],timeZone:[],states:[],formErrors:{},selectedPlan:{},privacyUrl:"https://www.tagmyfav.com/privacy-policy",partnerTypes:[],partner:{},plan:{},apiUrl:"https://localhost:44328"}},computed:{subscriptionName(){var t;return null===(t=this.plan)||void 0===t?void 0:t.name},getUserName(){var t,e;return`${null!==(t=this.formData.title)&&void 0!==t?t:""} ${this.formData.first_Name} ${null!==(e=this.formData.middle_Name)&&void 0!==e?e:""} ${this.formData.last_Name}`},planQuantity(){var t;return null===(t=this.plan)||void 0===t?void 0:t.minimumLicenceCount},disableConfirmPassword(){var t;return!(null!==(t=this.partner.password)&&void 0!==t&&t.length)>0},checkPartnerFormDisable(){var t;return!(null===(t=this.formErrors)||void 0===t||!t.ConfirmPassword)},selectedPartnerType(){var t;return(null===(t=this.partnerTypes)||void 0===t||null===(t=t.find(t=>{var e;return t.partnerTypeId===(null===(e=this.partner)||void 0===e?void 0:e.partnerTypeId)}))||void 0===t?void 0:t.partnerName)||""}},async created(){try{l.a.get(this.apiUrl+"/api/Subscription/get-Plans").then(t=>{this.subscriptionPlans=t.data,this.subscriptionPlans.forEach(t=>{"Free Trial"===t.name&&(this.plan={...t})})}),l.a.get(this.apiUrl+"/api/partner/getpartnertypes").then(t=>{this.partnerTypes=t.data,this.partnerTypes.map(t=>{t.value=t.partnerTypeId,t.label=t.partnerName})}),this.$axios.get("/address/countries").then(t=>{this.countries=t.data,this.countries.map(t=>{t.value=t.id,t.label=t.name})})}catch(t){409===t.status&&(window.opener.REGISTER_USER_EXISTS=!0,this.closePopup())}},mounted(){this.showForm(this.currentTab)},methods:{checkConfirmPassword(t){null!==t&&void 0!==t&&t.length?this.partner.password.startsWith(t)?this.partner.password===t&&(this.partner.password=t,this.formErrors={}):this.formErrors={ConfirmPassword:["Password didn't match"]}:this.formErrors={}},setPartherType(t){this.partner.partnerTypeId=parseInt(t.target.value)},getName(t=[],e,r){if(!(t.length||e||r||r in this.organization&&this.organization[""+r]))return"";let a=t.filter(t=>t.id==this.organization[""+r]);return a.length?a[0][""+e]:""},async getStates(t){let e=await this.$axios.get(`/address/${t.target.value}/states`);this.organization.country=parseInt(t.target.value),this.states=e.data,this.states.map(t=>{t.value=t.id,t.label=t.name})},async getTimeZone(t){let e=await this.$axios.get("/address/timezones");this.organization.state=parseInt(t.target.value),this.timeZone=e.data,this.timeZone.map(t=>{t.value=t.id,t.label=t.displayName})},setTimeZone(t){this.organization.timeZone=parseInt(t.target.value)},subscriptionFormHandler(){this.nextPrevHandler(1)},async register(){try{this.isLoading=!0;let t={};t.organizationAdmin=this.formData,t.plan=this.plan,t.organization=this.organization,t.partner=this.partner,await l.a.post(this.apiUrl+"/api/partner",t).then(()=>{this.$emit("open-toaster","Partner register successfully","success"),this.$router.push("/login")})}catch(t){if(this.$emit("open-toaster","Error registering partner","error"),400===t.status){this.formErrors=JSON.parse(t.response)["errors"];let e=["email","Plan","first_Name","last_Name","Phone","Title"],r=["type","password"];this.nextPrevHandler(e.includes(Object.keys(this.formErrors)[0])?-3:r.includes(Object.keys(this.formErrors)[0])?-1:-2)}}finally{this.isLoading=!1}},closePopup(){let t=2e3;window.opener.OPENID_CALLBACK_STATUS="success",window.opener.IS_USER_REGISTER=!0,setTimeout(()=>{window.close()},t)},showForm(t){let e=document.getElementsByClassName("sub-form");for(let r=0;r<e.length;r++)e[r].style.display="none";e[t].style.display="block",this.stepsIndicator(t)},stepsIndicator(t){let e=document.getElementsByClassName("form-step");for(let r=0;r<e.length;r++)e[r].className=e[r].className.replace(" active",""),e[r].className=r>=t?e[r].className.replace(" finish",""):e[r].className+=" finish";e[t].className+=" active"},nextPrevHandler(t){let e=document.getElementsByClassName("sub-form");e[this.currentTab].style.display="none",this.currentTab=this.currentTab+t,this.showForm(this.currentTab)}}},c=m,u=(r("dd04"),r("2877")),f=Object(u["a"])(c,a,s,!1,null,null,null);e["default"]=f.exports},d693:function(t,e,r){},dd04:function(t,e,r){"use strict";r("d693")}}]);