(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{369:function(e,t,n){"use strict";n.r(t);var o=n(340),r=(n(230),n(15),n(81),n(75),n(61),n(83),n(52),n(24),n(8),n(31),n(138),{data:function(){return{prompt:!1,needResult:!1,namesListFocused:!1,promptMessage:"",resultSearhing:"",namesList:"",regexText:"",resultText:""}},methods:{submitForm:function(){var e,t,n,r,l=new RegExp(this.regexText,"gi");this.resultSearhing=null===(e=this.namesList)||void 0===e||null===(t=e.trim())||void 0===t||null===(n=t.split("\n"))||void 0===n?void 0:n.reduce((function(e,line){var t=line.split(/(?=\s[0-9]{1,4}\.\s)/);return[].concat(Object(o.a)(e),Object(o.a)(t))}),[]).filter((function(e){return!!e.match(l)})).map((function(e){return e.trim()})).join("\n"),this.needResult=!0,this.resultText=null!==(r=this.resultSearhing)&&void 0!==r&&r.length?this.resultSearhing:"Nothing found",localStorage.setItem("savedRegexText",this.regexText)},copingText:function(){this.$copyText(this.resultText),this.promptMessage="text copied",this.prompt=!0}},mounted:function(){this.regexText=localStorage.getItem("savedRegexText")},head:{title:"Search via Regex"}}),l=n(91),c=n(130),d=n.n(c),m=n(336),x=n(335),h=n(339),v=n(366),f=n(337),T=n(367),k=n(361),w=n(368),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":""}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"6",lg:"4"}},[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[n("v-textarea",{class:{"mt-8":e.$vuetify.breakpoint.smAndDown},attrs:{outlined:"","no-resize":"",color:"light",label:"Text",transition:"scale-transition",height:e.needResult&&!e.namesListFocused?"10vh":"100%"},on:{focus:function(t){e.namesListFocused=!0},focusout:function(t){e.namesListFocused=!1}},model:{value:e.namesList,callback:function(t){e.namesList=t},expression:"namesList"}}),e._v(" "),n("v-expand-transition",[n("v-textarea",{directives:[{name:"show",rawName:"v-show",value:e.needResult,expression:"needResult"}],attrs:{outlined:"","no-resize":"",color:"light",label:"Result",disabled:!e.resultSearhing.length,"background-color":"blue-grey darken-4","append-outer-icon":"mdi-content-copy"},on:{"click:append-outer":e.copingText},model:{value:e.resultText,callback:function(t){e.resultText=t},expression:"resultText"}})],1),e._v(" "),n("v-text-field",{attrs:{outlined:"",color:"light",label:"Regex",hint:"(some_text)|[0-9]|(okay\\s)"},model:{value:e.regexText,callback:function(t){e.regexText=t},expression:"regexText"}}),e._v(" "),n("div",{staticClass:"text-right"},[n("v-btn",{attrs:{outlined:"",width:"44%",type:"submit",color:"primary lighten-3"}},[e._v("To Find")])],1)],1)],1),e._v(" "),n("v-snackbar",{attrs:{elevation:"24","min-height":"30px","content-class":"pa-0",color:"rgb(44 44 44 / 20%)",top:e.$vuetify.breakpoint.smAndDown},model:{value:e.prompt,callback:function(t){e.prompt=t},expression:"prompt"}},[n("div",{staticClass:"text-center"},[e._v(e._s(e.promptMessage))])])],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VCol:x.a,VExpandTransition:h.a,VForm:v.a,VLayout:f.a,VSnackbar:T.a,VTextField:k.a,VTextarea:w.a})}}]);