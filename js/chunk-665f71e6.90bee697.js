(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-665f71e6"],{"0873":function(e,t,o){},3573:function(e,t,o){"use strict";var a=o("7a23");const c=Object(a["createTextVNode"])("新建用户"),n={class:"btns"},r=Object(a["createTextVNode"])(" 编辑"),l=Object(a["createTextVNode"])("删除");function i(e,t,o,i,s,p){const d=Object(a["resolveComponent"])("el-button"),b=Object(a["resolveComponent"])("Edit"),m=Object(a["resolveComponent"])("el-icon"),j=Object(a["resolveComponent"])("Delete"),u=Object(a["resolveComponent"])("xg-table");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(u,Object(a["mergeProps"])({listData:e.dataList,listCount:e.dataCount},e.contentTableConfig,{page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=t=>e.pageInfo=t)}),Object(a["createSlots"])({headerHandle:Object(a["withCtx"])(()=>[e.isCreate?(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:0,type:"primary",onClick:e.create},{default:Object(a["withCtx"])(()=>[c]),_:1},8,["onClick"])):Object(a["createCommentVNode"])("",!0)]),status:Object(a["withCtx"])(e=>[Object(a["createVNode"])(d,{size:"small",plain:"",type:e.row.enable?"success":"danger"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.row.enable?"启用":"禁用"),1)]),_:2},1032,["type"])]),createAt:Object(a["withCtx"])(t=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$filter.formatTime(t.row.createAt)),1)]),updateAt:Object(a["withCtx"])(t=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$filter.formatTime(t.row.updateAt)),1)]),action:Object(a["withCtx"])(t=>[Object(a["createElementVNode"])("div",n,[e.isUpdate?(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:0,size:"small",type:"primary",link:"",onClick:o=>e.edit(t.row)},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b)]),_:1}),r]),_:2},1032,["onClick"])):Object(a["createCommentVNode"])("",!0),e.isDelete?(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:1,size:"small",type:"primary",link:"",onClick:o=>e.del(t.row)},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(j)]),_:1}),l]),_:2},1032,["onClick"])):Object(a["createCommentVNode"])("",!0)])]),_:2},[Object(a["renderList"])(e.otherPropSlots,t=>({name:t.slotName,fn:Object(a["withCtx"])(o=>[t.slotName?Object(a["renderSlot"])(e.$slots,t.slotName,{key:0,row:o.row}):Object(a["createCommentVNode"])("",!0)])}))]),1040,["listData","listCount","page"])])}Object(a["pushScopeId"])("data-v-bf2ad4b8");const s={class:"xg-table"},p={class:"header"},d={class:"title"},b={class:"header-handle"},m=Object(a["createElementVNode"])("div",null,null,-1),j={key:0,class:"footer"};function u(e,t,o,c,n,r){const l=Object(a["resolveComponent"])("el-table-column"),i=Object(a["resolveComponent"])("el-table"),u=Object(a["resolveComponent"])("el-pagination");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createElementVNode"])("div",p,[Object(a["renderSlot"])(e.$slots,"header",{},()=>[Object(a["createElementVNode"])("div",d,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("div",b,[Object(a["renderSlot"])(e.$slots,"headerHandle",{},void 0,!0)])],{},!0)]),m,Object(a["createVNode"])(i,Object(a["mergeProps"])({data:e.listData,border:"",style:{width:"100%"},onSelectionChange:e.handleSelectChange},e.childrenProps),{default:Object(a["withCtx"])(()=>[e.showSelectionColumn?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,type:"selection",width:"80",align:"center"})):Object(a["createCommentVNode"])("",!0),e.showIndexColumn?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:1,type:"index",width:"80",label:"序号",align:"center"})):Object(a["createCommentVNode"])("",!0),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.propList,t=>(Object(a["openBlock"])(),Object(a["createBlock"])(l,Object(a["mergeProps"])({key:t.prop},t,{align:"center","show-overflow-tooltip":""}),{default:Object(a["withCtx"])(o=>[Object(a["renderSlot"])(e.$slots,t.slotName,{row:o.row},()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(o.row[t.prop]),1)],!0)]),_:2},1040))),128))]),_:3},16,["data","onSelectionChange"]),e.showFooter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",j,[Object(a["renderSlot"])(e.$slots,"footer",{},()=>[Object(a["createVNode"])(u,{onSizeChange:e.sizeChange,onCurrentChange:e.currentChange,"current-page":e.page.currentPage,"page-size":e.page.pageSize,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper",total:e.listCount},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])],{},!0)])):Object(a["createCommentVNode"])("",!0)])}Object(a["popScopeId"])();var g=Object(a["defineComponent"])({props:{title:{type:String,default:""},listData:{type:Array,required:!0},listCount:{type:Number,default:0},propList:{type:Array,required:!0},showIndexColumn:{type:Boolean,default:!1},showSelectionColumn:{type:Boolean,default:!1},page:{type:Object,default:()=>({currentPage:0,pageSize:10})},childrenProps:{type:Object,default:()=>({})},showFooter:{type:Boolean,default:!0}},emits:["selectionChange","update:page"],setup(e,{emit:t}){const o=e=>{t("selectionChange",e),console.log(e)},a=o=>{t("update:page",{...e.page,pageSize:o})},c=o=>{t("update:page",{...e.page,currentPage:o})};return{handleSelectChange:o,sizeChange:a,currentChange:c}}}),O=(o("4d0d"),o("6b0d")),C=o.n(O);const h=C()(g,[["render",u],["__scopeId","data-v-bf2ad4b8"]]);var f=h,N=f,w=o("f6f2"),y=o("0613");function k(e,t){const o=Object(y["c"])(),a=o.state.login.permissions,c=`system:${e}:${t}`;return!!a.find(e=>e===c)}var v=Object(a["defineComponent"])({components:{XgTable:N,Delete:w["b"],Edit:w["c"]},props:{contentTableConfig:{type:Object,required:!0},pageName:{type:String,required:!0}},emits:["create","edit"],setup(e,{emit:t}){const o=Object(y["c"])(),c=k(e.pageName,"create"),n=k(e.pageName,"update"),r=k(e.pageName,"delete"),l=k(e.pageName,"query"),i=Object(a["ref"])({currentPage:1,pageSize:10});Object(a["watch"])(i,()=>s());const s=(t={})=>{o.dispatch("system/getPageListAction",{pageName:e.pageName,queryInfo:{offset:0==i.value.currentPage?i.value.currentPage*i.value.pageSize:(i.value.currentPage-1)*i.value.pageSize,size:i.value.pageSize,...t}})};s();const p=Object(a["computed"])(()=>o.getters["system/pageListData"](e.pageName)),d=Object(a["computed"])(()=>o.getters["system/pageListCount"](e.pageName)),b=e.contentTableConfig.propList.filter(e=>"status"!=e.slotName&&("createAt"!=e.slotName&&("updateAt"!=e.slotName&&"action"!=e.slotName))),m=()=>{t("create")},j=e=>{t("edit",e)},u=t=>{o.dispatch("system/deletePageDataAction",{pageName:e.pageName,id:t.id})};return{dataList:p,dataCount:d,getList:s,pageInfo:i,otherPropSlots:b,isCreate:c,isUpdate:n,isDelete:r,isQuery:l,del:u,create:m,edit:j}}});const S=C()(v,[["render",i]]);var x=S;t["a"]=x},"404f":function(e,t,o){"use strict";o.r(t);var a=o("7a23");const c={class:"goods"};function n(e,t,o,n,r,l){const i=Object(a["resolveComponent"])("el-image"),s=Object(a["resolveComponent"])("page-count");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(s,{contentTableConfig:e.contentTableConfig,pageName:"goods"},{image:Object(a["withCtx"])(e=>[Object(a["createVNode"])(i,{style:{width:"60px",height:"60px"},src:e.row.imgUrl,"preview-src-list":[e.row.imgUrl],fit:"cover"},null,8,["src","preview-src-list"])]),oldPrice:Object(a["withCtx"])(e=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])("￥"+e.row.oldPrice),1)]),_:1},8,["contentTableConfig"])])}var r=o("3573");const l=[{prop:"name",label:"商品名称",minWidth:"80"},{prop:"oldPrice",label:"原价格",minWidth:"80",slotName:"oldPrice"},{prop:"newPrice",label:"现价格",minWidth:"80"},{prop:"imgUrl",label:"商品图片",minWidth:"100",slotName:"image"},{prop:"status",label:"状态",minWidth:"100",slotName:"status"},{prop:"createAt",label:"创建时间",minWidth:"236",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"236",slotName:"updateAt"},{label:"操作",minWidth:"150",slotName:"action"}],i={title:"商品列表",propList:l,showIndexColumn:!0,showSelectionColumn:!0};var s=Object(a["defineComponent"])({name:"goods",components:{PageCount:r["a"]},setup(){return{contentTableConfig:i}}}),p=o("6b0d"),d=o.n(p);const b=d()(s,[["render",n]]);t["default"]=b},"4d0d":function(e,t,o){"use strict";o("0873")}}]);
//# sourceMappingURL=chunk-665f71e6.90bee697.js.map