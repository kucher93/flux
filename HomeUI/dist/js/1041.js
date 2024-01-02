"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[1041],{78746:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(19350);const o={listRunningApps(){return(0,r.Z)().get("/apps/listrunningapps")},listAllApps(){return(0,r.Z)().get("/apps/listallapps")},installedApps(){return(0,r.Z)().get("/apps/installedapps")},availableApps(){return(0,r.Z)().get("/apps/availableapps")},getEnterpriseNodes(){return(0,r.Z)().get("/apps/enterprisenodes")},stopApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appstop/${t}`,a)},startApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appstart/${t}`,a)},pauseApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/apppause/${t}`,a)},unpauseApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appunpause/${t}`,a)},restartApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/apprestart/${t}`,a)},removeApp(e,t){const a={headers:{zelidauth:e},onDownloadProgress(e){console.log(e)}};return(0,r.Z)().get(`/apps/appremove/${t}`,a)},registerApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().post("/apps/appregister",JSON.stringify(t),a)},updateApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().post("/apps/appupdate",JSON.stringify(t),a)},checkCommunication(){return(0,r.Z)().get("/flux/checkcommunication")},checkDockerExistance(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().post("/apps/checkdockerexistance",JSON.stringify(t),a)},appsRegInformation(){return(0,r.Z)().get("/apps/registrationinformation")},appsDeploymentInformation(){return(0,r.Z)().get("/apps/deploymentinformation")},getAppLocation(e){return(0,r.Z)().get(`/apps/location/${e}`)},globalAppSpecifications(){return(0,r.Z)().get("/apps/globalappsspecifications")},permanentMessagesOwner(e){return(0,r.Z)().get(`/apps/permanentmessages?owner=${e}`)},getInstalledAppSpecifics(e){return(0,r.Z)().get(`/apps/installedapps/${e}`)},getAppSpecifics(e){return(0,r.Z)().get(`/apps/appspecifications/${e}`)},getAppOwner(e){return(0,r.Z)().get(`/apps/appowner/${e}`)},getAppLogsTail(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/applog/${t}/100`,a)},getAppTop(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/apptop/${t}`,a)},getAppInspect(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appinspect/${t}`,a)},getAppStats(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appstats/${t}`,a)},getAppChanges(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appchanges/${t}`,a)},getAppExec(e,t,a,o){const s={headers:{zelidauth:e}},i={appname:t,cmd:a,env:JSON.parse(o)};return(0,r.Z)().post("/apps/appexec",JSON.stringify(i),s)},reindexGlobalApps(e){return(0,r.Z)().get("/apps/reindexglobalappsinformation",{headers:{zelidauth:e}})},reindexLocations(e){return(0,r.Z)().get("/apps/reindexglobalappslocation",{headers:{zelidauth:e}})},rescanGlobalApps(e,t,a){return(0,r.Z)().get(`/apps/rescanglobalappsinformation/${t}/${a}`,{headers:{zelidauth:e}})},getAppPirce(e){return(0,r.Z)().post("/apps/calculateprice",JSON.stringify(e))},getFolder(e,t){return(0,r.Z)().get(`/apps/fluxshare/getfolder/${t}`,{headers:{zelidauth:e}})},createFolder(e,t){return(0,r.Z)().get(`/apps/fluxshare/createfolder/${t}`,{headers:{zelidauth:e}})},getFile(e,t){return(0,r.Z)().get(`/apps/fluxshare/getfile/${t}`,{headers:{zelidauth:e}})},removeFile(e,t){return(0,r.Z)().get(`/apps/fluxshare/removefile/${t}`,{headers:{zelidauth:e}})},shareFile(e,t){return(0,r.Z)().get(`/apps/fluxshare/sharefile/${t}`,{headers:{zelidauth:e}})},unshareFile(e,t){return(0,r.Z)().get(`/apps/fluxshare/unsharefile/${t}`,{headers:{zelidauth:e}})},removeFolder(e,t){return(0,r.Z)().get(`/apps/fluxshare/removefolder/${t}`,{headers:{zelidauth:e}})},fileExists(e,t){return(0,r.Z)().get(`/apps/fluxshare/fileexists/${t}`,{headers:{zelidauth:e}})},storageStats(e){return(0,r.Z)().get("/apps/fluxshare/stats",{headers:{zelidauth:e}})},renameFileFolder(e,t,a){return(0,r.Z)().get(`/apps/fluxshare/rename/${t}/${a}`,{headers:{zelidauth:e}})},appPrice(e){return(0,r.Z)().post("/apps/calculateprice",JSON.stringify(e))},appRegistrationVerificaiton(e){return(0,r.Z)().post("/apps/verifyappregistrationspecifications",JSON.stringify(e))},appUpdateVerification(e){return(0,r.Z)().post("/apps/verifyappupdatespecifications",JSON.stringify(e))},getAppMonitoring(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appmonitor/${t}`,a)},startAppMonitoring(e,t){const a={headers:{zelidauth:e}};return t?(0,r.Z)().get(`/apps/startmonitoring/${t}`,a):(0,r.Z)().get("/apps/startmonitoring",a)},stopAppMonitoring(e,t,a){const o={headers:{zelidauth:e}};return t&&a?(0,r.Z)().get(`/apps/stopmonitoring/${t}/${a}`,o):t?(0,r.Z)().get(`/apps/stopmonitoring/${t}`,o):a?(0,r.Z)().get(`/apps/stopmonitoring?deletedata=${a}`,o):(0,r.Z)().get("/apps/stopmonitoring",o)},justAPI(){return(0,r.Z)()}}},44711:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var r=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mb-2"},[t("h6",{staticClass:"progress-label"},[e._v(" "+e._s(`${e.storage.used.toFixed(2)} / ${e.storage.total.toFixed(2)}`)+" GB ")]),t("b-progress",{attrs:{value:e.percentage,max:"100",striped:"",height:"2rem"}})],1),t("b-button-toolbar",{attrs:{justify:""}},[t("b-button-group",{attrs:{size:"sm"}}),t("b-button-group",{attrs:{size:"sm"}},[t("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){e.uploadFilesDialog=!0}}},[t("v-icon",{attrs:{name:"cloud-upload-alt"}})],1),t("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){e.createDirectoryDialogVisible=!0}}},[t("v-icon",{attrs:{name:"folder-plus"}})],1),t("b-modal",{attrs:{title:"Create Folder",size:"lg",centered:"","ok-only":"","ok-title":"Create Folder"},on:{ok:function(t){return e.createFolder(e.newDirName)}},model:{value:e.createDirectoryDialogVisible,callback:function(t){e.createDirectoryDialogVisible=t},expression:"createDirectoryDialogVisible"}},[t("b-form-group",{attrs:{label:"Folder Name","label-for":"folderNameInput"}},[t("b-form-input",{attrs:{id:"folderNameInput",size:"lg",placeholder:"New Folder Name"},model:{value:e.newDirName,callback:function(t){e.newDirName=t},expression:"newDirName"}})],1)],1),t("b-modal",{attrs:{title:"Upload Files",size:"lg",centered:"","hide-footer":""},on:{close:function(t){return e.refreshFolder()}},model:{value:e.uploadFilesDialog,callback:function(t){e.uploadFilesDialog=t},expression:"uploadFilesDialog"}},[t("file-upload",{attrs:{"upload-folder":e.getUploadFolder,headers:e.zelidHeader},on:{complete:e.refreshFolder}})],1)],1)],1),t("b-table",{staticClass:"fluxshare-table",attrs:{hover:"",responsive:"",items:e.folderContentFilter,fields:e.fields,busy:e.loadingFolder,"sort-compare":e.sort,"sort-by":"name"},scopedSlots:e._u([{key:"table-busy",fn:function(){return[t("div",{staticClass:"text-center text-danger my-2"},[t("b-spinner",{staticClass:"align-middle mx-2"}),t("strong",[e._v("Loading...")])],1)]},proxy:!0},{key:"head(name)",fn:function(a){return[e.currentFolder?t("b-button",{staticClass:"btn up-button",attrs:{"aria-label":"Up",variant:"flat-secondary"},on:{click:function(t){return e.upFolder()}}},[t("span",{staticClass:"d-inline-block",attrs:{"aria-hidden":"true"}},[t("v-icon",{attrs:{name:"arrow-alt-circle-up"}})],1)]):e._e(),e._v(" "+e._s(a.label.toUpperCase())+" ")]}},{key:"cell(name)",fn:function(a){return[a.item.isDirectory?t("div",[t("b-link",{on:{click:function(t){return e.changeFolder(a.item.name)}}},[e._v(" "+e._s(a.item.name)+" ")])],1):t("div",[e._v(" "+e._s(a.item.name)+" ")])]}},{key:"cell(modifiedAt)",fn:function(t){return[e._v(" "+e._s(new Date(t.item.modifiedAt).toLocaleString("en-GB",e.timeoptions))+" ")]}},{key:"cell(type)",fn:function(a){return[a.item.isDirectory?t("div",[e._v(" Folder ")]):a.item.isFile||a.item.isSymbolicLink?t("div",[e._v(" File ")]):t("div",[e._v(" Other ")])]}},{key:"cell(size)",fn:function(a){return[a.item.size>0?t("div",[e._v(" "+e._s(e.beautifyValue((a.item.size/1e3).toFixed(0)))+" KB ")]):e._e()]}},{key:"cell(delete)",fn:function(a){return[t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Delete",expression:"'Delete'",modifiers:{hover:!0,left:!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon action-icon",attrs:{id:`delete-${a.item.name}`,variant:"gradient-danger"}},[t("v-icon",{attrs:{name:"trash-alt"}})],1),t("confirm-dialog",{attrs:{target:`delete-${a.item.name}`,"confirm-button":a.item.isFile?"Delete File":"Delete Folder"},on:{confirm:function(t){a.item.isFile?e.deleteFile(a.item.name):e.deleteFolder(a.item.name)}}})]}},{key:"cell(actions)",fn:function(a){return[t("b-button-group",{attrs:{size:"sm"}},[t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:a.item.isFile?"Download":"Download zip of folder",expression:"data.item.isFile ? 'Download' : 'Download zip of folder'",modifiers:{hover:!0,bottom:!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:`download-${a.item.name}`,variant:"outline-secondary"}},[t("v-icon",{attrs:{name:a.item.isFile?"file-download":"file-archive"}})],1),t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:"Rename",expression:"'Rename'",modifiers:{hover:!0,bottom:!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:`rename-${a.item.name}`,variant:"outline-secondary"},on:{click:function(t){return e.rename(a.item.name)}}},[t("v-icon",{attrs:{name:"edit"}})],1),t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:a.item.shareToken?"Unshare file":"Share file",expression:"data.item.shareToken ? 'Unshare file' : 'Share file'",modifiers:{hover:!0,bottom:!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:`share-${a.item.name}`,variant:a.item.shareToken?"gradient-primary":"outline-secondary"},on:{click:function(t){a.item.shareToken?e.unshareFile(a.item.name):e.shareFile(a.item.name)}}},[t("v-icon",{attrs:{name:"share-alt"}})],1),a.item.shareToken?t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:`sharelink-${a.item.name}`,variant:"outline-secondary"}},[t("v-icon",{attrs:{name:"envelope"}})],1):e._e()],1),t("confirm-dialog",{attrs:{target:`download-${a.item.name}`,"confirm-button":a.item.isFile?"Download File":"Download Folder"},on:{confirm:function(t){a.item.isFile?e.download(a.item.name):e.download(a.item.name,!0,a.item.size)}}}),a.item.shareToken?t("b-popover",{attrs:{target:`sharelink-${a.item.name}`,placement:"bottom",triggers:"hover focus"},scopedSlots:e._u([{key:"title",fn:function(){return[t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy to Clipboard",expression:"'Copy to Clipboard'",modifiers:{hover:!0,top:!0}}],staticClass:"btn copy-button",attrs:{"aria-label":"Copy to Clipboard",variant:"flat-warning"},on:{click:function(t){e.copyLinkToClipboard(e.createfluxshareLink(a.item.shareFile,a.item.shareToken))}}},[t("span",{staticClass:"d-inline-block",attrs:{"aria-hidden":"true"}},[t("v-icon",{attrs:{name:"clipboard"}})],1)]),e._v(" Share Link ")]},proxy:!0}],null,!0)},[t("div",[t("b-link",{attrs:{href:e.createfluxshareLink(a.item.shareFile,a.item.shareToken)}},[e._v(" "+e._s(e.createfluxshareLink(a.item.shareFile,a.item.shareToken))+" ")])],1)]):e._e(),t("b-modal",{attrs:{title:"Rename",size:"lg",centered:"","ok-only":"","ok-title":"Rename"},on:{ok:function(t){return e.confirmRename()}},model:{value:e.renameDialogVisible,callback:function(t){e.renameDialogVisible=t},expression:"renameDialogVisible"}},[t("b-form-group",{attrs:{label:"Name","label-for":"nameInput"}},[t("b-form-input",{attrs:{id:"nameInput",size:"lg",placeholder:"Name"},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}})],1)],1)]}}])})],1)},o=[],s=(a(98858),a(61318),a(33228),a(45752)),i=a(21843),n=a(1759),l=a(15193),d=a(31220),p=a(54240),c=a(22183),u=a(72417),h=a(67347),m=a(41984),f=a(45969),g=a(5870),b=a(20629),v=a(20266),y=a(9669),w=a.n(y),F=a(21210),x=a(54746),$=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flux-share-upload",style:e.cssProps},[t("b-row",[t("b-col",{attrs:{xs:"8"}},[t("div",{staticClass:"flux-share-upload-drop text-center",attrs:{id:"dropTarget"},on:{drop:function(t){return t.preventDefault(),e.addFile.apply(null,arguments)},dragover:function(e){e.preventDefault()},click:e.selectFiles}},[t("v-icon",{attrs:{name:"cloud-upload-alt"}}),t("p",[e._v("Drop files here or "),t("em",[e._v("click to upload")])]),t("p",{staticClass:"upload-footer"},[e._v(" (File size is limited to 5GB) ")])],1),t("input",{ref:"fileselector",staticClass:"flux-share-upload-input",attrs:{id:"file-selector",type:"file",multiple:""},on:{change:e.handleFiles}})]),t("b-col",{staticClass:"upload-column",attrs:{xs:"4"}},e._l(e.files,(function(a){return t("div",{key:a.file.name,staticClass:"upload-item mb-1"},[t("p",[e._v(e._s(a.file.name))]),t("b-button",{staticClass:"delete",attrs:{variant:"outline-primary",size:"sm","aria-label":"Close",disabled:a.uploading},on:{click:function(t){return e.removeFile(a)}}},[t("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])]),t("b-progress",{class:a.uploading||a.uploaded?"":"hidden",attrs:{value:a.progress,max:"100",striped:"",height:"3px"}})],1)})),0)],1),t("b-row",[t("b-col",{staticClass:"text-center",attrs:{xs:"12"}},[t("b-button",{staticClass:"delete mt-1",attrs:{variant:"primary",disabled:!e.filesToUpload,size:"sm","aria-label":"Close"},on:{click:function(t){return e.startUpload()}}},[e._v(" Upload Files ")])],1)],1)],1)},k=[],T=(a(70560),a(26253)),z=a(50725),C=a(48726);const Z={components:{BRow:T.T,BCol:z.l,BProgress:s.D,BButton:l.T,ToastificationContent:F.Z},props:{uploadFolder:{type:String,required:!0},headers:{type:Object,required:!0}},data(){return{files:[],primaryColor:C.j.primary,secondaryColor:C.j.secondary}},computed:{cssProps(){return{"--primary-color":this.primaryColor,"--secondary-color":this.secondaryColor}},filesToUpload(){return this.files.length>0&&this.files.some((e=>!e.uploading&&!e.uploaded&&0===e.progress))}},methods:{selectFiles(){console.log("select files"),this.$refs.fileselector.click()},handleFiles(e){const{files:t}=e.target;t&&(console.log(t),this.addFiles([...t]))},addFile(e){const t=e.dataTransfer.files;t&&this.addFiles([...t])},addFiles(e){e.forEach((e=>{const t=this.files.some((t=>t.file.name===e.name));console.log(t),t?this.showToast("warning",`'${e.name}' is already in the upload queue`):this.files.push({file:e,uploading:!1,uploaded:!1,progress:0})}))},removeFile(e){this.files=this.files.filter((t=>t.file.name!==e.file.name))},startUpload(){console.log(this.uploadFolder),console.log(this.files),this.files.forEach((e=>{console.log(e),e.uploaded||e.uploading||this.upload(e)}))},upload(e){const t=this;if("undefined"===typeof XMLHttpRequest)return;const a=new XMLHttpRequest,r=this.uploadFolder;a.upload&&(a.upload.onprogress=function(t){console.log(t),t.total>0&&(t.percent=t.loaded/t.total*100),e.progress=t.percent});const o=new FormData;o.append(e.file.name,e.file),e.uploading=!0,a.onerror=function(a){console.log(a),t.showToast("danger",`An error occurred while uploading '${e.file.name}' - ${a}`)},a.onload=function(){if(a.status<200||a.status>=300)return console.log("error"),console.log(a.status),void t.showToast("danger",`An error occurred while uploading '${e.file.name}' - Status code: ${a.status}`);e.uploaded=!0,e.uploading=!1,t.$emit("complete"),t.showToast("success",`'${e.file.name}' has been uploaded`)},a.open("post",r,!0);const s=this.headers||{},i=Object.keys(s);for(let n=0;n<i.length;n+=1){const e=i[n];Object.prototype.hasOwnProperty.call(s,e)&&null!==s[e]&&a.setRequestHeader(e,s[e])}a.send(o)},showToast(e,t,a="InfoIcon"){this.$toast({component:F.Z,props:{title:t,icon:a,variant:e}})}}},D=Z;var A=a(1001),S=(0,A.Z)(D,$,k,!1,null,"302ad36e",null);const N=S.exports;var _=a(78746);const O=a(58971),R={components:{BProgress:s.D,BTable:i.h,BSpinner:n.X,BButton:l.T,BModal:d.N,BFormGroup:p.x,BFormInput:c.e,BPopover:u.x,BLink:h.we,BButtonToolbar:m.r,BButtonGroup:f.a,ConfirmDialog:x.Z,FileUpload:N,ToastificationContent:F.Z},directives:{"b-tooltip":g.o,Ripple:v.Z},data(){return{fields:[{key:"name",label:"Name",sortable:!0},{key:"modifiedAt",label:"Modified",sortable:!0},{key:"type",label:"Type",sortable:!0},{key:"size",label:"Size",sortable:!0},{key:"actions",label:""},{key:"delete",label:""}],timeoptions:{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},loadingFolder:!1,folderView:[],currentFolder:"",uploadFilesDialog:!1,filterFolder:"",createDirectoryDialogVisible:!1,renameDialogVisible:!1,newName:"",fileRenaming:"",newDirName:"",abortToken:{},downloaded:{},total:{},timeStamp:{},working:!1,storage:{used:0,total:2,available:2},customColors:[{color:"#6f7ad3",percentage:20},{color:"#1989fa",percentage:40},{color:"#5cb87a",percentage:60},{color:"#e6a23c",percentage:80},{color:"#f56c6c",percentage:100}],uploadTotal:"",uploadUploaded:"",uploadTimeStart:"",currentUploadTime:"",uploadFiles:[]}},computed:{...(0,b.rn)("flux",["userconfig","config"]),percentage(){const e=this.storage.used/this.storage.total*100;return Number(e.toFixed(2))},zelidHeader(){const e=localStorage.getItem("zelidauth"),t={zelidauth:e};return t},ipAddress(){const e=O.get("backendURL");if(e)return`${O.get("backendURL").split(":")[0]}:${O.get("backendURL").split(":")[1]}`;const{hostname:t}=window.location;return`http://${t}`},folderContentFilter(){const e=this.folderView.filter((e=>JSON.stringify(e.name).toLowerCase().includes(this.filterFolder.toLowerCase())));return e.filter((e=>".gitkeep"!==e.name))},getUploadFolder(){const e=this.config.apiPort;if(this.currentFolder){const t=encodeURIComponent(this.currentFolder);return`${this.ipAddress}:${e}/apps/fluxshare/uploadfile/${t}`}return`${this.ipAddress}:${e}/apps/fluxshare/uploadfile`}},mounted(){this.loadingFolder=!0,this.loadFolder(this.currentFolder),this.storageStats()},methods:{sortNameFolder(e,t){return(e.isDirectory?`..${e.name}`:e.name).localeCompare(t.isDirectory?`..${t.name}`:t.name)},sortTypeFolder(e,t){return e.isDirectory&&t.isFile?-1:e.isFile&&t.isDirectory?1:0},sort(e,t,a,r){return"name"===a?this.sortNameFolder(e,t,r):"type"===a?this.sortTypeFolder(e,t,r):"modifiedAt"===a?e.modifiedAt>t.modifiedAt?-1:e.modifiedAt<t.modifiedAt?1:0:"size"===a?e.size>t.size?-1:e.size<t.size?1:0:0},async storageStats(){try{const e=await _.Z.storageStats(this.zelidHeader.zelidauth);console.log(e),"success"===e.data.status?(this.storage.total=e.data.data.total,this.storage.used=e.data.data.used,this.storage.available=e.data.data.available):this.showToast("danger",e.data.data.message||e.data.data)}catch(e){this.showToast("danger",e.message||e)}},changeFolder(e){if(".."===e){const e=this.currentFolder.split("/");e.pop(),this.currentFolder=e.join("/")}else""===this.currentFolder?this.currentFolder=e:this.currentFolder=`${this.currentFolder}/${e}`;this.loadFolder(this.currentFolder)},async loadFolder(e,t=!1){try{this.filterFolder="",t||(this.folderView=[]),this.loadingFolder=!0;const a=await _.Z.getFolder(this.zelidHeader.zelidauth,encodeURIComponent(e));this.loadingFolder=!1,"success"===a.data.status?(this.folderView=a.data.data,console.log(this.folderView)):this.showToast("danger",a.data.data.message||a.data.data)}catch(a){this.loadingFolder=!1,console.log(a.message),this.showToast("danger",a.message||a)}},async createFolder(e){try{let t=e;""!==this.currentFolder&&(t=`${this.currentFolder}/${e}`);const a=await _.Z.createFolder(this.zelidHeader.zelidauth,encodeURIComponent(t));"error"===a.data.status?"EEXIST"===a.data.data.code?this.showToast("danger",`Folder ${e} already exists`):this.showToast("danger",a.data.data.message||a.data.data):(this.loadFolder(this.currentFolder,!0),this.createDirectoryDialogVisible=!1)}catch(t){this.loadingFolder=!1,console.log(t.message),this.showToast("danger",t.message||t)}},cancelDownload(e){this.abortToken[e].cancel(`Download of ${e} cancelled`),this.downloaded[e]="",this.total[e]=""},async download(e,t=!1,a=0){try{const r=this;r.abortToken[e]&&r.abortToken[e].cancel();const o=w().CancelToken,s=o.source();this.$set(this.abortToken,e,s);const i=this.currentFolder,n=i?`${i}/${e}`:e;let l;const d={headers:this.zelidHeader,responseType:"blob",onDownloadProgress(t){l||(l=t.timeStamp),r.$set(r.downloaded,e,t.loaded),t.total?r.$set(r.total,e,t.total):t.target&&t.target.response&&t.target.response.size?r.$set(r.total,e,t.target.response.size):r.$set(r.total,e,a),r.$set(r.timeStamp,e,t.timeStamp-l)},cancelToken:r.abortToken[e].token};let p;if(p=t?await _.Z.justAPI().get(`/apps/fluxshare/downloadfolder/${encodeURIComponent(n)}`,d):await _.Z.justAPI().get(`/apps/fluxshare/getfile/${encodeURIComponent(n)}`,d),console.log(p),"error"===p.data.status)this.showToast("danger",p.data.data.message||p.data.data);else{const a=window.URL.createObjectURL(new Blob([p.data])),r=document.createElement("a");r.href=a,t?r.setAttribute("download",`${e}.zip`):r.setAttribute("download",e),document.body.appendChild(r),r.click()}}catch(r){console.log(r.message),r.message?r.message.startsWith("Download")||this.showToast("danger",r.message):this.showToast("danger",r)}},beautifyValue(e){const t=e.split(".");return t[0].length>=4&&(t[0]=t[0].replace(/(\d)(?=(\d{3})+$)/g,"$1,")),t.join(".")},refreshFolder(){this.loadFolder(this.currentFolder,!0),this.storageStats()},async deleteFile(e){try{const t=this.currentFolder,a=t?`${t}/${e}`:e,r=await _.Z.removeFile(this.zelidHeader.zelidauth,encodeURIComponent(a));"error"===r.data.status?this.showToast("danger",r.data.data.message||r.data.data):(this.refreshFolder(),this.showToast("success",`${e} deleted`))}catch(t){this.showToast("danger",t.message||t)}},async shareFile(e){try{const t=this.currentFolder,a=t?`${t}/${e}`:e,r=await _.Z.shareFile(this.zelidHeader.zelidauth,encodeURIComponent(a));"error"===r.data.status?this.showToast("danger",r.data.data.message||r.data.data):(this.loadFolder(this.currentFolder,!0),this.showToast("success",`${e} shared`))}catch(t){this.showToast("danger",t.message||t)}},async unshareFile(e){try{const t=this.currentFolder,a=t?`${t}/${e}`:e,r=await _.Z.unshareFile(this.zelidHeader.zelidauth,encodeURIComponent(a));"error"===r.data.status?this.showToast("danger",r.data.data.message||r.data.data):(this.loadFolder(this.currentFolder,!0),this.showToast("success",`${e} unshared`))}catch(t){this.showToast("danger",t.message||t)}},async deleteFolder(e){try{let t=e;""!==this.currentFolder&&(t=`${this.currentFolder}/${e}`);const a=await _.Z.removeFolder(this.zelidHeader.zelidauth,encodeURIComponent(t));console.log(a.data),"error"===a.data.status?"ENOTEMPTY"===a.data.data.code?this.showToast("danger",`Directory ${e} is not empty!`):this.showToast("danger",a.data.data.message||a.data.data):(this.loadFolder(this.currentFolder,!0),this.showToast("success",`${e} deleted`))}catch(t){this.showToast("danger",t.message||t)}},beforeUpload(e){if(this.storage.available<=0)return this.showToast("danger","Storage space is full"),!1;const t=this.folderView.find((t=>t.name===e.name));return!t||(this.showToast("info",`File ${e.name} already exists`),!1)},createfluxshareLink(e,t){const a=this.config.apiPort;return`${this.ipAddress}:${a}/apps/fluxshare/getfile/${e}?token=${t}`},copyLinkToClipboard(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.showToast("success","Link copied to Clipboard")},rename(e){this.renameDialogVisible=!0;let t=e;""!==this.currentFolder&&(t=`${this.currentFolder}/${e}`),this.fileRenaming=t,this.newName=e},async confirmRename(){this.renameDialogVisible=!1;try{const e=this.fileRenaming,t=this.newName,a=await _.Z.renameFileFolder(this.zelidHeader.zelidauth,encodeURIComponent(e),t);console.log(a),"error"===a.data.status?this.showToast("danger",a.data.data.message||a.data.data):(e.includes("/")?this.showToast("success",`${e.split("/").pop()} renamed to ${t}`):this.showToast("success",`${e} renamed to ${t}`),this.loadFolder(this.currentFolder,!0))}catch(e){this.showToast("danger",e.message||e)}},upFolder(){this.changeFolder(".."),this.sortTableByNameManual()},showToast(e,t,a="InfoIcon"){this.$toast({component:F.Z,props:{title:t,icon:a,variant:e}})}}},U=R;var I=(0,A.Z)(U,r,o,!1,null,null,null);const B=I.exports},54746:(e,t,a)=>{a.d(t,{Z:()=>u});var r=function(){var e=this,t=e._self._c;return t("b-popover",{ref:"popover",attrs:{target:`${e.target}`,triggers:"click blur",show:e.show,placement:"auto",container:"my-container","custom-class":`confirm-dialog-${e.width}`},on:{"update:show":function(t){e.show=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("span",[e._v(e._s(e.title))]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(t){e.show=!1}}},[t("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[t("div",{staticClass:"text-center"},[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(t){e.show=!1}}},[e._v(" "+e._s(e.cancelButton)+" ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.confirm()}}},[e._v(" "+e._s(e.confirmButton)+" ")])],1)])},o=[],s=a(15193),i=a(72417),n=a(20266);const l={components:{BButton:s.T,BPopover:i.x},directives:{Ripple:n.Z},props:{target:{type:String,required:!0},title:{type:String,required:!1,default:"Are You Sure?"},cancelButton:{type:String,required:!1,default:"Cancel"},confirmButton:{type:String,required:!0},width:{type:Number,required:!1,default:300}},data(){return{show:!1}},methods:{confirm(){this.show=!1,this.$emit("confirm")}}},d=l;var p=a(1001),c=(0,p.Z)(d,r,o,!1,null,null,null);const u=c.exports},84328:(e,t,a)=>{var r=a(65290),o=a(27578),s=a(6310),i=function(e){return function(t,a,i){var n,l=r(t),d=s(l),p=o(i,d);if(e&&a!==a){while(d>p)if(n=l[p++],n!==n)return!0}else for(;d>p;p++)if((e||p in l)&&l[p]===a)return e||p||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},5649:(e,t,a)=>{var r=a(67697),o=a(92297),s=TypeError,i=Object.getOwnPropertyDescriptor,n=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=n?function(e,t){if(o(e)&&!i(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},50926:(e,t,a)=>{var r=a(23043),o=a(69985),s=a(6648),i=a(44201),n=i("toStringTag"),l=Object,d="Arguments"===s(function(){return arguments}()),p=function(e,t){try{return e[t]}catch(a){}};e.exports=r?s:function(e){var t,a,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=p(t=l(e),n))?a:d?s(t):"Object"===(r=s(t))&&o(t.callee)?"Arguments":r}},8758:(e,t,a)=>{var r=a(36812),o=a(19152),s=a(82474),i=a(72560);e.exports=function(e,t,a){for(var n=o(t),l=i.f,d=s.f,p=0;p<n.length;p++){var c=n[p];r(e,c)||a&&r(a,c)||l(e,c,d(t,c))}}},62148:(e,t,a)=>{var r=a(98702),o=a(72560);e.exports=function(e,t,a){return a.get&&r(a.get,t,{getter:!0}),a.set&&r(a.set,t,{setter:!0}),o.f(e,t,a)}},55565:e=>{var t=TypeError,a=9007199254740991;e.exports=function(e){if(e>a)throw t("Maximum allowed index exceeded");return e}},72739:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79989:(e,t,a)=>{var r=a(19037),o=a(82474).f,s=a(75773),i=a(11880),n=a(95014),l=a(8758),d=a(35266);e.exports=function(e,t){var a,p,c,u,h,m,f=e.target,g=e.global,b=e.stat;if(p=g?r:b?r[f]||n(f,{}):(r[f]||{}).prototype,p)for(c in t){if(h=t[c],e.dontCallGetSet?(m=o(p,c),u=m&&m.value):u=p[c],a=d(g?c:f+(b?".":"#")+c,e.forced),!a&&void 0!==u){if(typeof h==typeof u)continue;l(h,u)}(e.sham||u&&u.sham)&&s(h,"sham",!0),i(p,c,h,e)}}},94413:(e,t,a)=>{var r=a(68844),o=a(3689),s=a(6648),i=Object,n=r("".split);e.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?n(e,""):i(e)}:i},92297:(e,t,a)=>{var r=a(6648);e.exports=Array.isArray||function(e){return"Array"===r(e)}},35266:(e,t,a)=>{var r=a(3689),o=a(69985),s=/#|\.prototype\./,i=function(e,t){var a=l[n(e)];return a===p||a!==d&&(o(t)?r(t):!!t)},n=i.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=i.data={},d=i.NATIVE="N",p=i.POLYFILL="P";e.exports=i},6310:(e,t,a)=>{var r=a(43126);e.exports=function(e){return r(e.length)}},58828:e=>{var t=Math.ceil,a=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?a:t)(r)}},82474:(e,t,a)=>{var r=a(67697),o=a(22615),s=a(49556),i=a(75684),n=a(65290),l=a(18360),d=a(36812),p=a(68506),c=Object.getOwnPropertyDescriptor;t.f=r?c:function(e,t){if(e=n(e),t=l(t),p)try{return c(e,t)}catch(a){}if(d(e,t))return i(!o(s.f,e,t),e[t])}},72741:(e,t,a)=>{var r=a(54948),o=a(72739),s=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},7518:(e,t)=>{t.f=Object.getOwnPropertySymbols},54948:(e,t,a)=>{var r=a(68844),o=a(36812),s=a(65290),i=a(84328).indexOf,n=a(57248),l=r([].push);e.exports=function(e,t){var a,r=s(e),d=0,p=[];for(a in r)!o(n,a)&&o(r,a)&&l(p,a);while(t.length>d)o(r,a=t[d++])&&(~i(p,a)||l(p,a));return p}},49556:(e,t)=>{var a={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!a.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:a},19152:(e,t,a)=>{var r=a(76058),o=a(68844),s=a(72741),i=a(7518),n=a(85027),l=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(n(e)),a=i.f;return a?l(t,a(e)):t}},27578:(e,t,a)=>{var r=a(68700),o=Math.max,s=Math.min;e.exports=function(e,t){var a=r(e);return a<0?o(a+t,0):s(a,t)}},65290:(e,t,a)=>{var r=a(94413),o=a(74684);e.exports=function(e){return r(o(e))}},68700:(e,t,a)=>{var r=a(58828);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},43126:(e,t,a)=>{var r=a(68700),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},23043:(e,t,a)=>{var r=a(44201),o=r("toStringTag"),s={};s[o]="z",e.exports="[object z]"===String(s)},34327:(e,t,a)=>{var r=a(50926),o=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},21500:e=>{var t=TypeError;e.exports=function(e,a){if(e<a)throw new t("Not enough arguments");return e}},70560:(e,t,a)=>{var r=a(79989),o=a(90690),s=a(6310),i=a(5649),n=a(55565),l=a(3689),d=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),p=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},c=d||!p();r({target:"Array",proto:!0,arity:1,forced:c},{push:function(e){var t=o(this),a=s(t),r=arguments.length;n(a+r);for(var l=0;l<r;l++)t[a]=arguments[l],a++;return i(t,a),a}})},98858:(e,t,a)=>{var r=a(11880),o=a(68844),s=a(34327),i=a(21500),n=URLSearchParams,l=n.prototype,d=o(l.append),p=o(l["delete"]),c=o(l.forEach),u=o([].push),h=new n("a=1&a=2&b=3");h["delete"]("a",1),h["delete"]("b",void 0),h+""!=="a=2"&&r(l,"delete",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return p(this,e);var r=[];c(this,(function(e,t){u(r,{key:t,value:e})})),i(t,1);var o,n=s(e),l=s(a),h=0,m=0,f=!1,g=r.length;while(h<g)o=r[h++],f||o.key===n?(f=!0,p(this,o.key)):m++;while(m<g)o=r[m++],o.key===n&&o.value===l||d(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},61318:(e,t,a)=>{var r=a(11880),o=a(68844),s=a(34327),i=a(21500),n=URLSearchParams,l=n.prototype,d=o(l.getAll),p=o(l.has),c=new n("a=1");!c.has("a",2)&&c.has("a",void 0)||r(l,"has",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return p(this,e);var r=d(this,e);i(t,1);var o=s(a),n=0;while(n<r.length)if(r[n++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},33228:(e,t,a)=>{var r=a(67697),o=a(68844),s=a(62148),i=URLSearchParams.prototype,n=o(i.forEach);r&&!("size"in i)&&s(i,"size",{get:function(){var e=0;return n(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);