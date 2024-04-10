"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[6158],{43392:(t,e,a)=>{a.r(e),a.d(e,{default:()=>$});var i=function(){var t=this,e=t._self._c;return e("div",[t.managedApplication?t._e():e("b-tabs",{attrs:{pills:""},on:{"activate-tab":function(e){return t.tabChanged()}}},[e("b-tab",{attrs:{title:"Active Apps"}},[e("b-overlay",{attrs:{show:t.tableconfig.active.loading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.tableconfig.active.pageOptions},model:{value:t.tableconfig.active.perPage,callback:function(e){t.$set(t.tableconfig.active,"perPage",e)},expression:"tableconfig.active.perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0 mt-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.tableconfig.active.filter,callback:function(e){t.$set(t.tableconfig.active,"filter",e)},expression:"tableconfig.active.filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.tableconfig.active.filter},on:{click:function(e){t.tableconfig.active.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"apps-active-table",attrs:{striped:"",outlined:"",responsive:"","per-page":t.tableconfig.active.perPage,"current-page":t.tableconfig.active.currentPage,items:t.tableconfig.active.apps,fields:t.tableconfig.active.fields,"sort-by":t.tableconfig.active.sortBy,"sort-desc":t.tableconfig.active.sortDesc,"sort-direction":t.tableconfig.active.sortDirection,filter:t.tableconfig.active.filter,"sort-icon-left":"","show-empty":"","empty-text":"No Flux Apps are active"},on:{"update:sortBy":function(e){return t.$set(t.tableconfig.active,"sortBy",e)},"update:sort-by":function(e){return t.$set(t.tableconfig.active,"sortBy",e)},"update:sortDesc":function(e){return t.$set(t.tableconfig.active,"sortDesc",e)},"update:sort-desc":function(e){return t.$set(t.tableconfig.active,"sortDesc",e)}},scopedSlots:t._u([{key:"cell(description)",fn:function(a){return[e("kbd",{staticClass:"text-secondary textarea text",staticStyle:{float:"left","text-align":"left"}},[t._v(t._s(a.item.description))])]}},{key:"cell(name)",fn:function(a){return[e("div",{staticClass:"text-left"},[e("kbd",{staticClass:"alert-info no-wrap",staticStyle:{"border-radius":"15px","font-weight":"700 !important"}},[e("b-icon",{attrs:{scale:"1.2",icon:"app-indicator"}}),t._v("  "+t._s(a.item.name)+"  ")],1),e("br"),e("small",{staticStyle:{"font-size":"11px"}},[e("div",{staticClass:"d-flex align-items-center",staticStyle:{"margin-top":"3px"}},[t._v("   "),e("b-icon",{attrs:{scale:"1.4",icon:"speedometer2"}}),t._v("  "),e("kbd",{staticClass:"alert-success",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(t.getServiceUsageValue(1,a.item.name,a.item)))]),t._v(" ")]),t._v("   "),e("b-icon",{attrs:{scale:"1.4",icon:"cpu"}}),t._v("  "),e("kbd",{staticClass:"alert-success",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(t.getServiceUsageValue(0,a.item.name,a.item)))]),t._v(" ")]),t._v("   "),e("b-icon",{attrs:{scale:"1.4",icon:"hdd"}}),t._v("  "),e("kbd",{staticClass:"alert-success",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(t.getServiceUsageValue(2,a.item.name,a.item)))]),t._v(" ")]),t._v("  "),e("b-icon",{attrs:{scale:"1.2",icon:"geo-alt"}}),t._v(" "),e("kbd",{staticClass:"alert-warning",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(a.item.instances))]),t._v(" ")])],1),e("span",{staticClass:"no-wrap",class:{"red-text":t.isLessThanTwoDays(t.labelForExpire(a.item.expire,a.item.height))}},[t._v("   "),e("b-icon",{attrs:{scale:"1.2",icon:"hourglass-split"}}),t._v(" "+t._s(t.labelForExpire(a.item.expire,a.item.height))+"   ")],1)])])]}},{key:"cell(show_details)",fn:function(a){return[e("a",{on:{click:function(e){return t.showLocations(a,t.tableconfig.active.apps)}}},[a.detailsShowing?t._e():e("v-icon",{staticClass:"ml-1",attrs:{name:"chevron-down"}}),a.detailsShowing?e("v-icon",{staticClass:"ml-1",attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(a){return[e("b-card",{staticClass:"mx-2"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy to Clipboard",expression:"'Copy to Clipboard'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-2",attrs:{id:`copy-active-app-${a.item.name}`,size:"sm",variant:"outline-dark",pill:""},on:{click:function(e){t.copyToClipboard(JSON.stringify(a.item))}}},[e("b-icon",{attrs:{scale:"1",icon:"clipboard"}}),t._v(" Copy Specifications ")],1),e("b-button",{staticClass:"mr-2",attrs:{id:`deploy-active-app-${a.item.name}`,size:"sm",variant:"outline-dark",pill:""}},[e("b-icon",{attrs:{scale:"1",icon:"building"}}),t._v(" Deploy Myself ")],1),e("confirm-dialog",{attrs:{target:`deploy-active-app-${a.item.name}`,"confirm-button":"Deploy App"},on:{confirm:function(e){return t.redeployApp(a.item,!0)}}})],1),e("b-card",{staticClass:"mx-2"},[e("h3",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-info d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","padding-right":"100%"}},[e("b-icon",{staticClass:"ml-1",attrs:{scale:"1",icon:"info-square"}}),t._v("  Application Information ")],1)]),e("div",{staticClass:"ml-1"},[a.item.owner?e("list-entry",{attrs:{title:"Owner",data:a.item.owner}}):t._e(),a.item.hash?e("list-entry",{attrs:{title:"Hash",data:a.item.hash}}):t._e(),a.item.version>=5?e("div",[a.item.contacts.length>0?e("list-entry",{attrs:{title:"Contacts",data:JSON.stringify(a.item.contacts)}}):t._e(),a.item.geolocation.length?e("div",t._l(a.item.geolocation,(function(a){return e("div",{key:a},[e("list-entry",{attrs:{title:"Geolocation",data:t.getGeolocation(a)}})],1)})),0):e("div",[e("list-entry",{attrs:{title:"Continent",data:"All"}}),e("list-entry",{attrs:{title:"Country",data:"All"}}),e("list-entry",{attrs:{title:"Region",data:"All"}})],1)],1):t._e(),a.item.instances?e("list-entry",{attrs:{title:"Instances",data:a.item.instances.toString()}}):t._e(),e("list-entry",{attrs:{title:"Expires in",data:t.labelForExpire(a.item.expire,a.item.height)}}),a.item?.nodes?.length>0?e("list-entry",{attrs:{title:"Enterprise Nodes",data:a.item.nodes?a.item.nodes.toString():"Not scoped"}}):t._e(),e("list-entry",{attrs:{title:"Static IP",data:a.item.staticip?"Yes, Running only on Static IP nodes":"No, Running on all nodes"}})],1),a.item.version<=3?e("div",[e("b-card",[e("list-entry",{attrs:{title:"Repository",data:a.item.repotag}}),e("list-entry",{attrs:{title:"Custom Domains",data:a.item.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(a.item.ports,void 0,a.item.name).toString()}}),e("list-entry",{attrs:{title:"Ports",data:a.item.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:a.item.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:a.item.containerData}}),e("list-entry",{attrs:{title:"Enviroment Parameters",data:a.item.enviromentParameters.length>0?a.item.enviromentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:a.item.commands.length>0?a.item.commands.toString():"none"}}),a.item.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${a.item.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${a.item.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${a.item.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${a.item.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${a.item.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${a.item.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${a.item.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${a.item.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${a.item.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${a.item.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${a.item.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${a.item.hdd} GB`}})],1)],1)],1):e("div",[e("h3",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-info d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","padding-right":"100%"}},[e("b-icon",{staticClass:"ml-1",attrs:{scale:"1",icon:"box"}}),t._v("  Composition ")],1)]),t._l(a.item.compose,(function(i,s){return e("b-card",{key:s,staticClass:"mb-0"},[e("h3",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-success d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","max-width":"500px"}},[e("b-icon",{staticClass:"ml-1",attrs:{scale:"1",icon:"menu-app-fill"}}),t._v("  "+t._s(i.name)+" ")],1)]),e("div",{staticClass:"ml-1"},[e("list-entry",{attrs:{title:"Name",data:i.name}}),e("list-entry",{attrs:{title:"Description",data:i.description}}),e("list-entry",{attrs:{title:"Repository",data:i.repotag}}),e("list-entry",{attrs:{title:"Repository Authentication",data:i.repoauth?"Content Encrypted":"Public"}}),e("list-entry",{attrs:{title:"Custom Domains",data:i.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(i.ports,i.name,a.item.name,s).toString()}}),e("list-entry",{attrs:{title:"Ports",data:i.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:i.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:i.containerData}}),e("list-entry",{attrs:{title:"Environment Parameters",data:i.environmentParameters.length>0?i.environmentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:i.commands.length>0?i.commands.toString():"none"}}),e("list-entry",{attrs:{title:"Secret Environment Parameters",data:i.secrets?"Content Encrypted":"none"}}),i.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${i.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${i.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${i.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${i.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${i.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${i.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${i.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${i.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${i.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${i.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${i.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${i.hdd} GB`}})],1)],1)])}))],2),e("h3",[e("kbd",{staticClass:"alert-info d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","padding-right":"100%"}},[e("b-icon",{attrs:{scale:"1",icon:"globe"}}),t._v("  Locations ")],1)]),e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.appLocationOptions.pageOptions},model:{value:t.appLocationOptions.perPage,callback:function(e){t.$set(t.appLocationOptions,"perPage",e)},expression:"appLocationOptions.perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.appLocationOptions.filter,callback:function(e){t.$set(t.appLocationOptions,"filter",e)},expression:"appLocationOptions.filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.appLocationOptions.filter},on:{click:function(e){t.appLocationOptions.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"locations-table",attrs:{borderless:"","per-page":t.appLocationOptions.perPage,"current-page":t.appLocationOptions.currentPage,items:t.appLocations,fields:t.appLocationFields,"thead-class":"d-none",filter:t.appLocationOptions.filter,"show-empty":"","sort-icon-left":"","empty-text":"No instances found.."},scopedSlots:t._u([{key:"cell(ip)",fn:function(a){return[e("div",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-info",staticStyle:{"border-radius":"15px"}},[e("b-icon",{attrs:{scale:"1.1",icon:"hdd-network-fill"}})],1),t._v("  "),e("kbd",{staticClass:"alert-success no-wrap",staticStyle:{"border-radius":"15px"}},[e("b",[t._v("  "+t._s(a.item.ip)+"  ")])])])]}},{key:"cell(visit)",fn:function(i){return[e("div",{staticClass:"d-flex justify-content-end"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Visit App",expression:"'Visit App'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-1",attrs:{size:"sm",pill:"",variant:"dark"},on:{click:function(e){t.openApp(a.item.name,i.item.ip.split(":")[0],t.getProperPort(a.item))}}},[e("b-icon",{attrs:{scale:"1",icon:"door-open"}}),t._v(" App ")],1),e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Visit FluxNode",expression:"'Visit FluxNode'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-0",attrs:{size:"sm",pill:"",variant:"outline-dark"},on:{click:function(e){t.openNodeFluxOS(i.item.ip.split(":")[0],i.item.ip.split(":")[1]?+i.item.ip.split(":")[1]-1:16126)}}},[e("b-icon",{attrs:{scale:"1",icon:"house-door-fill"}}),t._v(" FluxNode ")],1),t._v("   ")],1)]}}],null,!0)})],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0 mt-1",attrs:{"total-rows":t.appLocationOptions.totalRows,"per-page":t.appLocationOptions.perPage,align:"center",size:"sm"},model:{value:t.appLocationOptions.currentPage,callback:function(e){t.$set(t.appLocationOptions,"currentPage",e)},expression:"appLocationOptions.currentPage"}})],1)],1)],1)]}},{key:"cell(visit)",fn:function(a){return[e("div",{staticClass:"d-flex no-wrap"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Visit App",expression:"'Visit App'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-0 no-wrap hover-underline",attrs:{size:"sm",variant:"link"},on:{click:function(e){return t.openGlobalApp(a.item.name)}}},[e("b-icon",{attrs:{scale:"1",icon:"front"}}),t._v(" Visit ")],1),t._v("    ")],1)]}}],null,!1,2505861257)})],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.tableconfig.active?.apps?.length||1,"per-page":t.tableconfig.active.perPage,align:"center",size:"sm"},model:{value:t.tableconfig.active.currentPage,callback:function(e){t.$set(t.tableconfig.active,"currentPage",e)},expression:"tableconfig.active.currentPage"}})],1)],1)],1)],1),e("b-tab",{attrs:{title:"Marketplace Deployments"}},[e("b-overlay",{attrs:{show:t.tableconfig.active.loading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.tableconfig.active_marketplace.pageOptions},model:{value:t.tableconfig.active_marketplace.perPage,callback:function(e){t.$set(t.tableconfig.active_marketplace,"perPage",e)},expression:"tableconfig.active_marketplace.perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0 mt-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.tableconfig.active_marketplace.filter,callback:function(e){t.$set(t.tableconfig.active_marketplace,"filter",e)},expression:"tableconfig.active_marketplace.filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.tableconfig.active_marketplace.filter},on:{click:function(e){t.tableconfig.active_marketplace.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"apps-active-table",attrs:{striped:"",outlined:"",responsive:"",items:t.tableconfig.active_marketplace.apps,fields:t.tableconfig.active_marketplace.fields,"per-page":t.tableconfig.active_marketplace.perPage,"current-page":t.tableconfig.active_marketplace.currentPage,filter:t.tableconfig.active_marketplace.filter,"show-empty":"","sort-icon-left":"","empty-text":"No Flux Marketplace Apps are active"},scopedSlots:t._u([{key:"cell(visit)",fn:function(a){return[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Visit App",expression:"'Visit App'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-0 no-wrap hover-underline",attrs:{size:"sm",variant:"link"},on:{click:function(e){return t.openGlobalApp(a.item.name)}}},[e("b-icon",{attrs:{scale:"1",icon:"front"}}),t._v(" Visit ")],1)]}},{key:"cell(description)",fn:function(a){return[e("kbd",{staticClass:"text-secondary textarea text",staticStyle:{float:"left","text-align":"left"}},[t._v(t._s(a.item.description))])]}},{key:"cell(name)",fn:function(a){return[e("div",{staticClass:"text-left"},[e("kbd",{staticClass:"alert-info no-wrap",staticStyle:{"border-radius":"15px","font-weight":"700 !important"}},[e("b-icon",{attrs:{scale:"1.2",icon:"app-indicator"}}),t._v("  "+t._s(a.item.name)+"  ")],1),e("br"),e("small",{staticStyle:{"font-size":"11px"}},[e("div",{staticClass:"d-flex align-items-center",staticStyle:{"margin-top":"3px"}},[t._v("   "),e("b-icon",{attrs:{scale:"1.4",icon:"speedometer2"}}),t._v("  "),e("kbd",{staticClass:"alert-success",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(t.getServiceUsageValue(1,a.item.name,a.item)))]),t._v(" ")]),t._v("   "),e("b-icon",{attrs:{scale:"1.4",icon:"cpu"}}),t._v("  "),e("kbd",{staticClass:"alert-success",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(t.getServiceUsageValue(0,a.item.name,a.item)))]),t._v(" ")]),t._v("   "),e("b-icon",{attrs:{scale:"1.4",icon:"hdd"}}),t._v("  "),e("kbd",{staticClass:"alert-success",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(t.getServiceUsageValue(2,a.item.name,a.item)))]),t._v(" ")]),t._v("  "),e("b-icon",{attrs:{scale:"1.2",icon:"geo-alt"}}),t._v(" "),e("kbd",{staticClass:"alert-warning",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(a.item.instances))]),t._v(" ")])],1),e("span",{staticClass:"no-wrap",class:{"red-text":t.isLessThanTwoDays(t.labelForExpire(a.item.expire,a.item.height))}},[t._v("   "),e("b-icon",{attrs:{scale:"1.2",icon:"hourglass-split"}}),t._v(" "+t._s(t.labelForExpire(a.item.expire,a.item.height))+"   ")],1)])])]}},{key:"cell(show_details)",fn:function(a){return[e("a",{on:{click:function(e){return t.showLocations(a,t.tableconfig.active_marketplace.apps)}}},[a.detailsShowing?t._e():e("v-icon",{staticClass:"ml-1",attrs:{name:"chevron-down"}}),a.detailsShowing?e("v-icon",{staticClass:"ml-1",attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(a){return[e("b-card",{staticClass:"mx-2"},[e("h3",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-info d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","padding-right":"100%"}},[e("b-icon",{staticClass:"ml-1",attrs:{scale:"1",icon:"info-square"}}),t._v("  Application Information ")],1)]),e("div",{staticClass:"ml-1"},[a.item.owner?e("list-entry",{attrs:{title:"Owner",data:a.item.owner}}):t._e(),a.item.hash?e("list-entry",{attrs:{title:"Hash",data:a.item.hash}}):t._e(),a.item.version>=5?e("div",[a.item.contacts.length>0?e("list-entry",{attrs:{title:"Contacts",data:JSON.stringify(a.item.contacts)}}):t._e(),a.item.geolocation.length?e("div",t._l(a.item.geolocation,(function(a){return e("div",{key:a},[e("list-entry",{attrs:{title:"Geolocation",data:t.getGeolocation(a)}})],1)})),0):e("div",[e("list-entry",{attrs:{title:"Continent",data:"All"}}),e("list-entry",{attrs:{title:"Country",data:"All"}}),e("list-entry",{attrs:{title:"Region",data:"All"}})],1)],1):t._e(),a.item.instances?e("list-entry",{attrs:{title:"Instances",data:a.item.instances.toString()}}):t._e(),e("list-entry",{attrs:{title:"Expires in",data:t.labelForExpire(a.item.expire,a.item.height)}}),a.item?.nodes?.length>0?e("list-entry",{attrs:{title:"Enterprise Nodes",data:a.item.nodes?a.item.nodes.toString():"Not scoped"}}):t._e(),e("list-entry",{attrs:{title:"Static IP",data:a.item.staticip?"Yes, Running only on Static IP nodes":"No, Running on all nodes"}})],1),a.item.version<=3?e("div",[e("b-card",[e("list-entry",{attrs:{title:"Repository",data:a.item.repotag}}),e("list-entry",{attrs:{title:"Custom Domains",data:a.item.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(a.item.ports,void 0,a.item.name).toString()}}),e("list-entry",{attrs:{title:"Ports",data:a.item.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:a.item.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:a.item.containerData}}),e("list-entry",{attrs:{title:"Enviroment Parameters",data:a.item.enviromentParameters.length>0?a.item.enviromentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:a.item.commands.length>0?a.item.commands.toString():"none"}}),a.item.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${a.item.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${a.item.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${a.item.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${a.item.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${a.item.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${a.item.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${a.item.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${a.item.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${a.item.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${a.item.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${a.item.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${a.item.hdd} GB`}})],1)],1)],1):e("div",[e("h3",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-info d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","padding-right":"100%"}},[e("b-icon",{staticClass:"ml-1",attrs:{scale:"1",icon:"box"}}),t._v("  Composition ")],1)]),t._l(a.item.compose,(function(i,s){return e("b-card",{key:s,staticClass:"mb-0"},[e("h3",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-success d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","max-width":"500px"}},[e("b-icon",{staticClass:"ml-1",attrs:{scale:"1",icon:"menu-app-fill"}}),t._v("  "+t._s(i.name)+" ")],1)]),e("div",{staticClass:"ml-1"},[e("list-entry",{attrs:{title:"Name",data:i.name}}),e("list-entry",{attrs:{title:"Description",data:i.description}}),e("list-entry",{attrs:{title:"Repository",data:i.repotag}}),e("list-entry",{attrs:{title:"Repository Authentication",data:i.repoauth?"Content Encrypted":"Public"}}),e("list-entry",{attrs:{title:"Custom Domains",data:i.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(i.ports,i.name,a.item.name,s).toString()}}),e("list-entry",{attrs:{title:"Ports",data:i.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:i.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:i.containerData}}),e("list-entry",{attrs:{title:"Environment Parameters",data:i.environmentParameters.length>0?i.environmentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:i.commands.length>0?i.commands.toString():"none"}}),e("list-entry",{attrs:{title:"Secret Environment Parameters",data:i.secrets?"Content Encrypted":"none"}}),i.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${i.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${i.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${i.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${i.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${i.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${i.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${i.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${i.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${i.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${i.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${i.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${i.hdd} GB`}})],1)],1)])}))],2),e("h3",[e("kbd",{staticClass:"alert-info d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","padding-right":"100%"}},[e("b-icon",{attrs:{scale:"1",icon:"globe"}}),t._v("  Locations ")],1)]),e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.appLocationOptions.pageOptions},model:{value:t.appLocationOptions.perPage,callback:function(e){t.$set(t.appLocationOptions,"perPage",e)},expression:"appLocationOptions.perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.appLocationOptions.filter,callback:function(e){t.$set(t.appLocationOptions,"filter",e)},expression:"appLocationOptions.filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.appLocationOptions.filter},on:{click:function(e){t.appLocationOptions.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"locations-table",attrs:{borderless:"","per-page":t.appLocationOptions.perPage,"current-page":t.appLocationOptions.currentPage,items:t.appLocations,fields:t.appLocationFields,"thead-class":"d-none",filter:t.appLocationOptions.filter,"show-empty":"","sort-icon-left":"","empty-text":"No instances found.."},scopedSlots:t._u([{key:"cell(ip)",fn:function(a){return[e("div",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-info",staticStyle:{"border-radius":"15px"}},[e("b-icon",{attrs:{scale:"1.1",icon:"hdd-network-fill"}})],1),t._v("  "),e("kbd",{staticClass:"alert-success no-wrap",staticStyle:{"border-radius":"15px"}},[e("b",[t._v("  "+t._s(a.item.ip)+"  ")])])])]}},{key:"cell(visit)",fn:function(i){return[e("div",{staticClass:"d-flex justify-content-end"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Visit App",expression:"'Visit App'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-1",attrs:{size:"sm",pill:"",variant:"dark"},on:{click:function(e){t.openApp(a.item.name,i.item.ip.split(":")[0],t.getProperPort(a.item))}}},[e("b-icon",{attrs:{scale:"1",icon:"door-open"}}),t._v(" App ")],1),e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Visit FluxNode",expression:"'Visit FluxNode'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-0",attrs:{size:"sm",pill:"",variant:"outline-dark"},on:{click:function(e){t.openNodeFluxOS(i.item.ip.split(":")[0],i.item.ip.split(":")[1]?+i.item.ip.split(":")[1]-1:16126)}}},[e("b-icon",{attrs:{scale:"1",icon:"house-door-fill"}}),t._v(" FluxNode ")],1),t._v("   ")],1)]}}],null,!0)})],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0 mt-1",attrs:{"total-rows":t.appLocationOptions.totalRows,"per-page":t.appLocationOptions.perPage,align:"center",size:"sm"},model:{value:t.appLocationOptions.currentPage,callback:function(e){t.$set(t.appLocationOptions,"currentPage",e)},expression:"appLocationOptions.currentPage"}})],1)],1)],1)]}}],null,!1,641139028)})],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.tableconfig.active_marketplace?.apps?.length||1,"per-page":t.tableconfig.active_marketplace.perPage,align:"center",size:"sm"},model:{value:t.tableconfig.active_marketplace.currentPage,callback:function(e){t.$set(t.tableconfig.active_marketplace,"currentPage",e)},expression:"tableconfig.active_marketplace.currentPage"}})],1)],1)],1)],1)],1),t.managedApplication?e("div",[e("management",{attrs:{"app-name":t.managedApplication,global:!0,"installed-apps":[]},on:{back:function(e){return t.clearManagedApplication()}}})],1):t._e()],1)},s=[],n=(a(70560),a(58887)),o=a(51015),r=a(16521),l=a(50725),c=a(86855),p=a(26253),m=a(15193),d=a(66126),u=a(5870),b=a(20266),g=a(34547),f=a(51748),v=a(87156),y=a(85115),h=a(43672),C=a(27616);const S=a(80129),_=a(57306),x={components:{BTabs:n.M,BTab:o.L,BTable:r.h,BCol:l.l,BCard:c._,BRow:p.T,BButton:m.T,BOverlay:d.X,ListEntry:f.Z,ConfirmDialog:v.Z,Management:y.Z,ToastificationContent:g.Z},directives:{"b-tooltip":u.o,Ripple:b.Z},data(){return{managedApplication:"",daemonBlockCount:-1,appLocations:[],appLocationFields:[{key:"ip",label:"Locations",thStyle:{width:"30%"}},{key:"visit",label:""}],myappLocations:[],myappLocationFields:[{key:"ip",label:"IP Address",thStyle:{width:"30%"}},{key:"visit",label:""}],tableconfig:{active:{apps:[],fields:[{key:"show_details",label:""},{key:"name",label:"Name",sortable:!0,thStyle:{width:"18%"}},{key:"description",label:"Description",thStyle:{width:"75%"}},{key:"visit",label:"",class:"text-center",thStyle:{width:"4%"}}],loading:!0,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:"",filterOn:[],perPage:25,pageOptions:[5,10,25,50,100],currentPage:1,totalRows:1},active_marketplace:{apps:[],fields:[{key:"show_details",label:""},{key:"name",label:"Name",sortable:!0,thStyle:{width:"18%"}},{key:"description",label:"Description",thStyle:{width:"75%"}},{key:"visit",label:"",class:"text-center",thStyle:{width:"4%"}}],loading:!0,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:"",filterOn:[],perPage:25,pageOptions:[5,10,25,50,100],currentPage:1,totalRows:1}},allApps:[],appLocationOptions:{perPage:5,pageOptions:[5,10,25,50,100],currentPage:1,totalRows:1,filterOn:[],filter:""}}},computed:{myGlobalApps(){const t=localStorage.getItem("zelidauth"),e=S.parse(t);return this.allApps?this.allApps.filter((t=>t.owner===e.zelid)):[]},isLoggedIn(){const t=localStorage.getItem("zelidauth"),e=S.parse(t);return!!e.zelid}},mounted(){this.appsGetListGlobalApps(),this.getDaemonBlockCount()},methods:{getServiceUsageValue(t,e,a){if("undefined"===typeof a?.compose)return this.usage=[+a.cpu,+a.ram,+a.hdd],this.usage[t];const i=this.getServiceUsage(e,a.compose);return i[t]},getServiceUsage(t,e){let a=0,i=0,s=0;return e.forEach((t=>{a+=t.ram,i+=t.cpu,s+=t.hdd})),console.log(`Info: ${a}, ${i}, ${s}`),[a,i,s]},isLessThanTwoDays(t){const e=t?.split(",").map((t=>t.trim()));let a=0,i=0,s=0;for(const o of e)o.includes("days")?a=parseInt(o,10):o.includes("hours")?i=parseInt(o,10):o.includes("minutes")&&(s=parseInt(o,10));const n=24*a*60+60*i+s;return n<2880},minutesToString(t){let e=60*t;const a={day:86400,hour:3600,minute:60,second:1},i=[];for(const s in a){const t=Math.floor(e/a[s]);1===t&&i.push(` ${t} ${s}`),t>=2&&i.push(` ${t} ${s}s`),e%=a[s]}return i},labelForExpire(t,e){if(-1===this.daemonBlockCount)return"Not possible to calculate expiration";const a=t||22e3,i=e+a-this.daemonBlockCount;if(i<1)return"Application Expired";const s=2*i,n=this.minutesToString(s);return n.length>2?`${n[0]}, ${n[1]}, ${n[2]}`:n.length>1?`${n[0]}, ${n[1]}`:`${n[0]}`},async getDaemonBlockCount(){const t=await C.Z.getBlockCount();"success"===t.data.status&&(this.daemonBlockCount=t.data.data)},openAppManagement(t){this.managedApplication=t},clearManagedApplication(){this.managedApplication=""},async appsGetListGlobalApps(){this.tableconfig.active.loading=!0;const t=await h.Z.globalAppSpecifications();console.log(t),this.allApps=t.data.data,this.tableconfig.active.apps=this.allApps.filter((t=>{if(t.name.length>=14){const e=t.name.substring(t.name.length-13,t.name.length),a=Number(e);if(!Number.isNaN(a))return!1}return!0})),this.tableconfig.active_marketplace.apps=this.allApps.filter((t=>{if(t.name.length>=14){const e=t.name.substring(t.name.length-13,t.name.length),a=Number(e);if(!Number.isNaN(a))return!0}return!1})),this.tableconfig.active.loading=!1,this.loadPermanentMessages()},async loadPermanentMessages(){try{const t=localStorage.getItem("zelidauth"),e=S.parse(t);if(!e.zelid)return void(this.tableconfig.my_expired.loading=!1);const a=await h.Z.permanentMessagesOwner(e.zelid),i=[];for(const n of a.data.data){const t=i.find((t=>t.appSpecifications.name===n.appSpecifications.name));if(t){if(n.height>t.height){const t=i.findIndex((t=>t.appSpecifications.name===n.appSpecifications.name));t>-1&&(i.splice(t,1),i.push(n))}}else i.push(n)}const s=[];for(const n of i){const t=this.allApps.find((t=>t.name.toLowerCase()===n.appSpecifications.name.toLowerCase()));if(!t){const t=n.appSpecifications;s.push(t)}}this.tableconfig.my_expired.apps=s,this.tableconfig.my_expired.loading=!1}catch(t){console.log(t)}},redeployApp(t,e=!1){const a=t;e&&(a.name+="XXX",a.name+=Date.now().toString().slice(-5));const i=localStorage.getItem("zelidauth"),s=S.parse(i);s?a.owner=s.zelid:e&&(a.owner=""),this.$router.replace({name:"apps-registerapp",params:{appspecs:JSON.stringify(t)}})},copyToClipboard(t){const e=JSON.parse(t);delete e._showDetails;const a=JSON.stringify(e),i=document.createElement("textarea");i.value=a,i.setAttribute("readonly",""),i.style.position="absolute",i.style.left="-9999px",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),this.showToast("success","Application Specifications copied to Clipboard")},openApp(t,e,a){if(console.log(t,e,a),a&&e){const t=e,i=a,s=`http://${t}:${i}`;this.openSite(s)}else this.showToast("danger","Unable to open App :(, App does not have a port.")},getProperPort(t){if(t.port)return t.port;if(t.ports)return t.ports[0];for(let e=0;e<t.compose.length;e+=1)for(let a=0;a<t.compose[e].ports.length;a+=1)if(t.compose[e].ports[a])return t.compose[e].ports[a];return null},openNodeFluxOS(t,e){if(console.log(t,e),e&&t){const a=t,i=e,s=`http://${a}:${i}`;this.openSite(s)}else this.showToast("danger","Unable to open FluxOS :(")},async openGlobalApp(t){const e=await h.Z.getAppLocation(t).catch((t=>{this.showToast("danger",t.message||t)}));if(console.log(e),"success"===e.data.status){const a=e.data.data,i=a[0];if(i){const e=`https://${t}.app.runonflux.io`;this.openSite(e)}else this.showToast("danger","Application is awaiting launching...")}else this.showToast("danger",e.data.data.message||e.data.data)},openSite(t){const e=window.open(t,"_blank");e.focus()},tabChanged(){this.tableconfig.active.apps.forEach((t=>{this.$set(t,"_showDetails",!1)})),this.tableconfig.active_marketplace.apps.forEach((t=>{this.$set(t,"_showDetails",!1)})),this.appLocations=[]},showLocations(t,e){t.detailsShowing?t.toggleDetails():(e.forEach((t=>{this.$set(t,"_showDetails",!1)})),this.$nextTick((()=>{t.toggleDetails(),this.loadLocations(t)})))},async loadLocations(t){console.log(t),this.appLocations=[];const e=await h.Z.getAppLocation(t.item.name).catch((t=>{this.showToast("danger",t.message||t)}));if(console.log(e),"success"===e.data.status){const t=e.data.data;this.appLocations=t}},showToast(t,e,a="InfoIcon"){this.$toast({component:g.Z,props:{title:e,icon:a,variant:t}})},constructAutomaticDomains(t,e="",a,i=0){const s=a.toLowerCase(),n=e.toLowerCase();if(!n){const e=[];0===i&&e.push(`${s}.app.runonflux.io`);for(let a=0;a<t.length;a+=1){const i=`${s}_${t[a]}.app.runonflux.io`;e.push(i)}return e}const o=[];0===i&&o.push(`${s}.app.runonflux.io`);for(let r=0;r<t.length;r+=1){const e=`${s}_${t[r]}.app.runonflux.io`;o.push(e)}return o},getDisplayName(t){const e=t.substring(t.length-13,t.length),a=Number(e);return Number.isNaN(a)?t:`${t.substring(0,t.length-13)} - ${new Date(a).toLocaleString()}`},ensureObject(t){if("object"===typeof t)return t;let e;try{e=JSON.parse(t)}catch(a){e=S.parse(t)}return e},getGeolocation(t){if(t.startsWith("a")&&!t.startsWith("ac")&&!t.startsWith("a!c")){const e=t.slice(1),a=_.continents.find((t=>t.code===e))||{name:"ALL"};return`Continent: ${a.name||"Unkown"}`}if(t.startsWith("b")){const e=t.slice(1),a=_.countries.find((t=>t.code===e))||{name:"ALL"};return`Country: ${a.name||"Unkown"}`}if(t.startsWith("ac")){const e=t.slice(2),a=e.split("_"),i=a[0],s=a[1],n=a[2],o=_.continents.find((t=>t.code===i))||{name:"ALL"},r=_.countries.find((t=>t.code===s))||{name:"ALL"};let l=`Allowed location: Continent: ${o.name}`;return s&&(l+=`, Country: ${r.name}`),n&&(l+=`, Region: ${n}`),l}if(t.startsWith("a!c")){const e=t.slice(3),a=e.split("_"),i=a[0],s=a[1],n=a[2],o=_.continents.find((t=>t.code===i))||{name:"ALL"},r=_.countries.find((t=>t.code===s))||{name:"ALL"};let l=`Forbidden location: Continent: ${o.name}`;return s&&(l+=`, Country: ${r.name}`),n&&(l+=`, Region: ${n}`),l}return"All locations allowed"}}},k=x;var w=a(1001),P=(0,w.Z)(k,i,s,!1,null,null,null);const $=P.exports}}]);