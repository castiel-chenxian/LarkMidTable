(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13cc6911"],{"09f4":function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),Math.easeInOutQuad=function(e,t,o,n){return e/=n/2,e<1?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,o){var r=i(),a=e-r,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var i=Math.easeInOutQuad(u,r,a,t);l(i),u<t?n(e):o&&"function"===typeof o&&o()};c()}},"2b10":function(e,t,o){"use strict";o.d(t,"e",(function(){return l})),o.d(t,"j",(function(){return i})),o.d(t,"h",(function(){return r})),o.d(t,"i",(function(){return a})),o.d(t,"c",(function(){return s})),o.d(t,"k",(function(){return u})),o.d(t,"b",(function(){return c})),o.d(t,"g",(function(){return d})),o.d(t,"f",(function(){return f})),o.d(t,"d",(function(){return p})),o.d(t,"a",(function(){return b}));var n=o("b775");function l(e){return Object(n["a"])({url:"api/job/pageList",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/api/job/trigger",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/api/job/start?id="+e,method:"post"})}function a(e){return Object(n["a"])({url:"/api/job/stop?id="+e,method:"post"})}function s(){return Object(n["a"])({url:"api/jobGroup/list",method:"get"})}function u(e){return Object(n["a"])({url:"/api/job/update",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/api/job/add/",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/api/job/remove/"+e,method:"post"})}function f(e){return Object(n["a"])({url:"/api/job/nextTriggerTime?cron="+e,method:"get"})}function p(e){return Object(n["a"])({url:"api/job/list",method:"get",params:e})}function b(e){return Object(n["a"])({url:"/api/job/batchAdd",method:"post",data:e})}},"32e8":function(e,t,o){"use strict";o.d(t,"b",(function(){return l})),o.d(t,"a",(function(){return i})),o.d(t,"c",(function(){return r})),o.d(t,"d",(function(){return a}));var n=o("b775");function l(e){return Object(n["a"])({url:"api/log/pageList",method:"get",params:e})}function i(e,t,o){return Object(n["a"])({url:"/api/log/clearLog?jobGroup="+e+"&jobId="+t+"&type="+o,method:"post"})}function r(e){return Object(n["a"])({url:"/api/log/killJob",method:"post",data:e})}function a(e,t,o,l){return Object(n["a"])({url:"/api/log/logDetailCat?executorAddress="+e+"&triggerTime="+t+"&logId="+o+"&fromLineNum="+l,method:"get"})}},"51c4":function(e,t,o){},6724:function(e,t,o){"use strict";o("8d41");var n="@@wavesContext";function l(e,t){function o(o){var n=Object.assign({},t.value),l=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),i=l.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var r=i.getBoundingClientRect(),a=i.querySelector(".waves-ripple");switch(a?a.className="waves-ripple":(a=document.createElement("span"),a.className="waves-ripple",a.style.height=a.style.width=Math.max(r.width,r.height)+"px",i.appendChild(a)),l.type){case"center":a.style.top=r.height/2-a.offsetHeight/2+"px",a.style.left=r.width/2-a.offsetWidth/2+"px";break;default:a.style.top=(o.pageY-r.top-a.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",a.style.left=(o.pageX-r.left-a.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return a.style.backgroundColor=l.color,a.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=o:e[n]={removeHandle:o},o}var i={bind:function(e,t){e.addEventListener("click",l(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",l(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},r=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(r)),i.install=r;t["a"]=i},"8ba2":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("div",{staticClass:"filter-container"},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"全部"},model:{value:e.listQuery.jobId,callback:function(t){e.$set(e.listQuery,"jobId",t)},expression:"listQuery.jobId"}}),e._v(" "),o("el-select",{attrs:{placeholder:"执行器"},model:{value:e.listQuery.jobGroup,callback:function(t){e.$set(e.listQuery,"jobGroup",t)},expression:"listQuery.jobGroup"}},e._l(e.executorList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1),e._v(" "),o("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"类型"},model:{value:e.listQuery.logStatus,callback:function(t){e.$set(e.listQuery,"logStatus",t)},expression:"listQuery.logStatus"}},e._l(e.logStatusList,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),o("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      搜索\n    ")]),e._v(" "),o("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handlerDelete}},[e._v("\n      清除\n    ")])],1),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[o("el-table-column",{attrs:{align:"center",label:"任务ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jobId))]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"任务描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jobDesc))]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"调度时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.triggerTime))]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"调度结果",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",{style:"color:"+(500==t.row.triggerCode?"red":"")},[e._v(e._s(e.statusList.find((function(e){return e.value===t.row.triggerCode})).label))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"调度备注",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-popover",{attrs:{placement:"bottom",width:"400",trigger:"click"}},[o("h5",{domProps:{innerHTML:e._s(t.row.triggerMsg)}}),e._v(" "),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("查看")])],1)]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"执行时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.handleTime))]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"执行结果",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",{style:"color:"+(500==t.row.handleCode?"red":"")},[e._v(e._s(e.statusList.find((function(e){return e.value===t.row.handleCode})).label))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"执行备注",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-popover",{attrs:{placement:"bottom",width:"400",trigger:"click"}},[o("h5",{domProps:{innerHTML:e._s(t.row.handleMsg)}}),e._v(" "),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("查看")])],1)]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[o("el-button",{directives:[{name:"show",rawName:"v-show",value:n.executorAddress,expression:"row.executorAddress"}],attrs:{type:"primary"},on:{click:function(t){return e.handleViewJobLog(n)}}},[e._v("日志查看")]),e._v(" "),o("el-button",{directives:[{name:"show",rawName:"v-show",value:0===n.handleCode&&200===n.triggerCode,expression:"row.handleCode===0 && row.triggerCode===200"}],attrs:{type:"primary"},on:{click:function(t){return e.killRunningJob(n)}}},[e._v("\n          终止任务\n        ")])]}}])})],1),e._v(" "),o("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),o("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[o("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"center","label-width":"100px"}},[o("el-row",[o("el-col",{attrs:{span:14,offset:5}},[o("el-form-item",{attrs:{label:"执行器"}},[o("el-input",{attrs:{size:"medium",value:"全部",disabled:!0}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:14,offset:5}},[o("el-form-item",{attrs:{label:"任务"}},[o("el-input",{attrs:{size:"medium",value:"全部",disabled:!0}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:14,offset:5}},[o("el-form-item",{attrs:{label:"执行器"}},[o("el-select",{staticStyle:{width:"230px"},attrs:{placeholder:"请选择执行器"},model:{value:e.temp.deleteType,callback:function(t){e.$set(e.temp,"deleteType",t)},expression:"temp.deleteType"}},e._l(e.deleteTypeList,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.deleteLog}},[e._v("\n        确定\n      ")])],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"日志查看",visible:e.dialogVisible,width:"95%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("div",{staticClass:"log-container"},[o("pre",{attrs:{loading:e.logLoading},domProps:{textContent:e._s(e.logContent)}})]),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("\n        关闭\n      ")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.loadLog}},[e._v("\n        刷新日志\n      ")])],1)])],1)},l=[],i=o("32e8"),r=o("2b10"),a=o("6724"),s=o("333d"),u={name:"JobLog",components:{Pagination:s["a"]},directives:{waves:a["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{dialogVisible:!1,list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,jobGroup:0,jobId:"",logStatus:-1,filterTime:""},dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",executorList:"",textMap:{create:"Clear"},rules:{},temp:{deleteType:1,jobGroup:0,jobId:0},statusList:[{value:500,label:"失败"},{value:502,label:"失败(超时)"},{value:200,label:"成功"},{value:0,label:"无"}],deleteTypeList:[{value:1,label:"清理一个月之前日志数据"},{value:2,label:"清理三个月之前日志数据"},{value:3,label:"清理六个月之前日志数据"},{value:4,label:"清理一年之前日志数据"},{value:5,label:"清理一千条以前日志数据"},{value:6,label:"清理一万条以前日志数据"},{value:7,label:"清理三万条以前日志数据"},{value:8,label:"清理十万条以前日志数据"},{value:9,label:"清理所有日志数据"}],logStatusList:[{value:-1,label:"全部"},{value:1,label:"成功"},{value:2,label:"失败"},{value:3,label:"进行中"}],jobLogQuery:{executorAddress:"",triggerTime:"",id:"",fromLineNum:1},logContent:"",logShow:!1,logLoading:!1}},created:function(){this.fetchData(),this.getExecutor()},methods:{fetchData:function(){var e=this;this.listLoading=!0;var t=Object.assign({},this.listQuery),o=this.$route.query.jobId;o>0&&!t.jobId?t.jobId=o:o||t.jobId||(t.jobId=0),i["b"](t).then((function(t){var o=t.content;e.total=o.recordsTotal,e.list=o.data,e.listLoading=!1}))},getExecutor:function(){var e=this;r["c"]().then((function(t){var o=t.content;e.executorList=o;var n={id:0,title:"全部"};e.executorList.unshift(n),e.listQuery.jobGroup=e.executorList[0].id}))},handlerDelete:function(){var e=this;this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},deleteLog:function(){var e=this;i["a"](this.temp.jobGroup,this.temp.jobId,this.temp.deleteType).then((function(t){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))},handleViewJobLog:function(e){this.dialogVisible=!0,this.jobLogQuery.executorAddress=e.executorAddress,this.jobLogQuery.id=e.id,this.jobLogQuery.triggerTime=Date.parse(e.triggerTime),!1===this.logShow&&(this.logShow=!0),this.loadLog()},loadLog:function(){var e=this;this.logLoading=!0,i["d"](this.jobLogQuery.executorAddress,this.jobLogQuery.triggerTime,this.jobLogQuery.id,this.jobLogQuery.fromLineNum).then((function(t){"\n"===t.content.logContent||(e.logContent=t.content.logContent),e.logLoading=!1}))},killRunningJob:function(e){var t=this;i["c"](e).then((function(e){t.fetchData(),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Kill Successfully",type:"success",duration:2e3})}))}}},c=u,d=(o("c3e3"),o("2877")),f=Object(d["a"])(c,n,l,!1,null,"25f54d24",null);t["default"]=f.exports},"8d41":function(e,t,o){},c3e3:function(e,t,o){"use strict";o("51c4")}}]);