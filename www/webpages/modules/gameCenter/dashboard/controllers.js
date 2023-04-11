!function(h){h.su.moduleManager.define("dashboard",{deps:["speedTest","navigatorController","main"],services:["ajax","timer","moduleLoader","moduleManager"],models:["statusAll","internetSpeedModel","priorityEnable"],stores:["dashboardClientsStore","usbStorageStore","timePeriodStore"],views:["dashboardView"],listeners:{ev_on_launch:function(e,t,a,n,i,o,s){this.unRegisterAutoSaveData([i.dashboardClientsStore]),t.initPerformance(),t.initSpeedtest(),t.initClients(),s.timer.setInterval(t,function(){n.statusAll.load()},2e3,!0),n.priorityEnable.getOnOff()}},init:function(o,e,s,r,d,l){this.configViews({id:"dashboardView",items:[{id:"internet-conn-note","notes-title":h.su.CHAR.NETWORK_MAP.TRY_FOLLOW,items:[{text:h.su.CHAR.NETWORK_MAP.TRY_1},{text:h.su.CHAR.NETWORK_MAP.TRY_2},{text:h.su.CHAR.NETWORK_MAP.TRY_3},{text:h.su.CHAR.NETWORK_MAP.TRY_4}]},{id:"connected-clients-grid",configs:{columns:[{dataIndex:"deviceName",cls:"m-hide l-hide xl-hide label-empty"},{dataIndex:"deviceType",cls:"m-hide l-hide xl-hide label-empty",renderer:function(e,t){var a="",n="",i="";switch(e=e.toLowerCase()){case"pc":a="icon-pc";break;case"phone":a="icon-phone";break;case"pad":a="icon-pad";break;case"other":a="icon-pc";break;default:a="icon-"+e}return n=n+'<div class="device-type-container widget-container">'+('<span class="icon '+a+' ">'+(i=t.isGaming?'<span class="gaming-tag"></span>':i)+"</span>"),null!=t.enableInternet&&(n+='<span class="text">'+(t.enableInternet?"":h.su.CHAR.NETWORK_MAP.INTERNET_PAUSED)+"</span>"),n=(n=(n+="</div>")+'<div class="device-info-container widget-container">'+('<div class="mac">'+t.mac+"</div>"))+('<div class="ip">'+("0.0.0.0"==t.ip?"":t.ip)+"</div>")+"</div>"}},{text:h.su.CHAR.DASHBOARD.TYPE,width:"16%",dataIndex:"deviceType",cls:"s-hide",renderer:function(e,t){var a="",n="",i="";switch(e=e.toLowerCase()){case"pc":a="icon-pc";break;case"phone":a="icon-phone";break;case"pad":a="icon-pad";break;case"other":a="icon-pc";break;default:a="icon-"+e}return n=n+'<div class="device-type-container widget-container">'+('<span class="icon '+a+' ">'+(i=t.isGaming?'<span class="gaming-tag"></span>':i)+"</span>"),null!=t.enableInternet&&(n+='<span class="text">'+(t.enableInternet?"":h.su.CHAR.NETWORK_MAP.INTERNET_PAUSED)+"</span>"),n+="</div>"}},{text:h.su.CHAR.DASHBOARD.INFORMATION,dataIndex:"deviceName",width:"25%",cls:"s-hide",renderer:function(e,t){var a,n="";return n="object"===h.type(t)?(n=(n+='<div class="device-info-container widget-container">')+'<div class="name" title="'+(a=t.deviceName)+'">'+a+'</div><div class="mac">'+t.mac+"</div>")+'<div class="ip">'+("0.0.0.0"==t.ip?"":t.ip)+"</div></div>":n}},{text:h.su.CHAR.DASHBOARD.REAL_TIME_RATE,dataIndex:"downloadSpeed",renderer:function(e,t){function a(e){var t=(e=parseInt(e,10))/1024<1?(0!==e&&(e=(e/1024).toFixed(2)),h.su.CHAR.DASHBOARD.KBPS):e/1024/1024<1?(e/1024<1e3?e=(e/1024).toFixed(1):e/=1024,h.su.CHAR.DASHBOARD.KBPS):(e=(e/1024/1024).toFixed(1),h.su.CHAR.DASHBOARD.MBPS);return{speed:e,unit:t}}var n,i="";return"object"===h.type(t)&&(n=a(t.downloadSpeed),i=(i=(i=(i=(i+='<div class="speed-upload-container widget-container">')+'<span class="icon"></span><span class="text">'+(t=a(t.uploadSpeed)).speed+"</span>")+'<span class="unit">'+t.unit+'</span></div><div class="speed-download-container widget-container">')+'<span class="icon"></span><span class="text">'+n.speed+"</span>")+'<span class="unit">'+n.unit+"</span></div>"),i}},{text:h.su.CHAR.DASHBOARD.DEVICE_PRIORITY,dataIndex:"enablePriority",xtype:"customWidget",cls:"status connected-clients-grid-priority-td",widgetName:"switch",settings:{trueValue:!0,falseValue:!1}},{text:h.su.CHAR.DASHBOARD.TIMING,dataIndex:"timePeriod",xtype:"customWidget",width:90,cls:"s-2-col",widgetName:"combobox",settings:{noneSelectedText:"",items:r.timePeriodStore.getData()},renderer:function(e,t){return!t.enablePriority&&"---"}}]}}]}),this.control({"#speed-test-mini-panel":{click:function(){h("#speed-test-mini-panel").toggleClass("selected").siblings(".mini-panel").removeClass("selected"),h("#internet-block").toggle(h("#speed-test-mini-panel").hasClass("selected")),h("#performance-panel").hide(),h("#usb-panel").hide(),e.dashboardView.internetSpeedUsage.resize()}},"#performance-mini-panel":{click:function(){h("#performance-mini-panel").toggleClass("selected").siblings(".mini-panel").removeClass("selected"),h("#internet-block").hide(),h("#performance-panel").toggle(h("#performance-mini-panel").hasClass("selected")),h("#usb-panel").hide(),e.dashboardView.cpuLoad.resize(),e.dashboardView.memoryUsage.resize()}},"#usb-mini-panel":{click:function(){r.usbStorageStore.getData()&&r.usbStorageStore.getData().length&&(h("#usb-mini-panel").toggleClass("selected").siblings(".mini-panel").removeClass("selected"),h("#internet-block").hide(),h("#performance-panel").hide(),h("#usb-panel").toggle(h("#usb-mini-panel").hasClass("selected")))}},"#map-router-usb-button":{ev_button_click:function(e){d.navigatorController.goTo("storageSharing")}}}),this.listen({"models.statusAll":{ev_loaded:function(e,t){o.setStorage(t),o.setPerformance(t)}},"stores.dashboardClientsStore":{ev_data_change:function(e,t,a){var n,i;"enablePriority"===a.getName()&&t.value!==t.oldValue&&(n=function(){i()&&(r.dashboardClientsStore.abort(),r.dashboardClientsStore.sync({success:function(e){r.dashboardClientsStore.loadData(e,!0)}}))},i=function(){var e=l.moduleManager.get("bandwidth");return!!e.hasConfigured()||(t.value&&(o.stopGetClients(),e.showBandwithMsg()),!1)},"off"==s.priorityEnable.enable.getValue()&&t.value?d.main.confirm(h.su.CHAR.QOS.GAMING_DASHBOARD_NOTICE,function(){i()&&(s.priorityEnable.enable.setValue("on"),s.priorityEnable.setOnOff({success:function(){n(),s.priorityEnable.getOnOff()}}))},function(){r.dashboardClientsStore.abort(),r.dashboardClientsStore.load({data:{operation:"loadDevice"}})},h.su.CHAR.OPERATION.CONTINUE):n()),"timePeriod"==a.getName()&&t.value!=t.oldValue&&(r.dashboardClientsStore.abort(),r.dashboardClientsStore.sync())}}})}},function(d,l,n,a,e,i){function c(e,t){e=e||2e3,t=t||7;for(var a,n=new Date,i=[];t--;)i.unshift(("0"+(a=n).getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2)+":"+("0"+a.getSeconds()).slice(-2)),n=new Date(n-e);return i}var o,s=null,u=function(){for(var e=[],t=26;t--;)e.push(0);return e}(),p=function(){for(var e=[],t=26;t--;)e.push(0);return e}(),r=function(){for(var e=[],t=7;t--;)e.push(0);return e}(),b=function(){for(var e=[],t=7;t--;)e.push(0);return e}();return{speedRequestInterval:2e3,setStorage:function(e){var i={PB:h.su.CHAR.UNIT.PB,TB:h.su.CHAR.UNIT.TB,GB:h.su.CHAR.UNIT.GB,MB:h.su.CHAR.UNIT.MB,KB:h.su.CHAR.UNIT.KB,B:h.su.CHAR.UNIT.B};function o(e){return e&&e.toUpperCase()}e.usbStorages.length?(l.dashboardView.noUSBTips.hide(),l.dashboardView.USBFieldset.show(),h.each(e.usbStorages,function(e,t){var a=h.su.capacityToNum(t.available+i[o(t.availableUnit)]),n=h.su.capacityToNum(t.capacity+i[o(t.capacityUnit)]);t.usageRate=a/n*100}),h("#usb-panel").toggleClass("single-column",1===e.usbStorages.length),a.usbStorageStore.loadData(e.usbStorages,!0)):(l.dashboardView.noUSBTips.show(),l.dashboardView.USBFieldset.hide(),h("#usb-mini-panel").removeClass("selected"),h("#usb-panel").hide())},initSpeedtest:function(){l.dashboardView.internetSpeedUsage.setOption(d.calculateInternetSpeedOption()),l.dashboardView.speedTestMiniPanel.setField("uploadSpeed",0),l.dashboardView.speedTestMiniPanel.setField("downloadSpeed",0),l.dashboardView.speedTestMiniPanel.setField("uploadSpeedUnit",h.su.CHAR.DASHBOARD.KBPS),l.dashboardView.speedTestMiniPanel.setField("downloadSpeedUnit",h.su.CHAR.DASHBOARD.KBPS),l.dashboardView.internetSpeedUpload.setValue("0 "+h.su.CHAR.DASHBOARD.KBPS),l.dashboardView.internetSpeedDownload.setValue("0 "+h.su.CHAR.DASHBOARD.KBPS),i.timer.setInterval(d,function(){i.ajax.request({proxy:"internetStatusProxy",success:function(e){"CONNECTED"===e.internetStatus.toUpperCase()?(d.getInternetSpeed({success:function(e){d.setInternetSpeed(e)}}),l.dashboardView.speedTestPanel.show(),l.dashboardView.noInternetFieldset.hide()):(l.dashboardView.speedTestPanel.hide(),l.dashboardView.noInternetFieldset.show(),l.dashboardView.speedTestMiniPanel.setField("uploadSpeed",0),l.dashboardView.speedTestMiniPanel.setField("downloadSpeed",0),l.dashboardView.speedTestMiniPanel.setField("uploadSpeedUnit",h.su.CHAR.DASHBOARD.KBPS),l.dashboardView.speedTestMiniPanel.setField("downloadSpeedUnit",h.su.CHAR.DASHBOARD.KBPS))}})},d.speedRequestInterval,!0)},getInternetSpeed:function(e){var t,a;e&&(t=e.success,a=e.fail),n.internetSpeedModel.load({success:function(){t&&t(n.internetSpeedModel.getData())},fail:function(e){a&&a(e)}})},setInternetSpeed:function(e){var t,a,n,i,o=this.separateSpeed(e.upSpeed),s=this.separateSpeed(e.downSpeed),o=(l.dashboardView.speedTestMiniPanel.setField("uploadSpeed",o.value),l.dashboardView.speedTestMiniPanel.setField("uploadSpeedUnit",o.unit),l.dashboardView.speedTestMiniPanel.setField("downloadSpeed",s.value),l.dashboardView.speedTestMiniPanel.setField("downloadSpeedUnit",s.unit),l.dashboardView.internetSpeedUpload.setValue(o.value+" "+o.unit),l.dashboardView.internetSpeedDownload.setValue(s.value+" "+s.unit),c(d.speedRequestInterval,26)),s=(u.shift(),u.push(e.upSpeed/1024),p.shift(),p.push(e.downSpeed/1024),Math.max.apply(this,u.concat(p)));function r(e){var t=parseInt(e,10).toString().length,t=Math.max(t-2,0);return t=3*Math.pow(10,t),Math.ceil(e/t)*t}n=1024<=s?(s/=1024,t=h.map(u,function(e){return e/1024}),a=h.map(p,function(e){return e/1024}),i=h.su.CHAR.DASHBOARD.MBPS,r(s)):(t=u,a=p,i=h.su.CHAR.DASHBOARD.KBPS,Math.max(r(s),120)),l.dashboardView.internetSpeedUsage.setOption({xAxis:[{data:o}],yAxis:[{max:n,interval:n/3,axisLabel:{formatter:function(e,t){return n/3*t+i}}}],series:[{data:t},{data:a}]})},calculateInternetSpeedOption:function(e){return e=h.extend({title:"",color:"#ffcd08",name:"internetSpeed"},e),{title:{show:!1},grid:{top:10,right:30,left:72,bottom:40,containLabel:!1},xAxis:[{name:"",type:"category",axisLine:{show:!1},axisLabel:{show:!0,interval:4,margin:20,textStyle:{color:"rgba(255,255,255,0.8)",fontSize:12}},axisTick:{show:!1,alignWithLabel:!0},splitLine:{show:!0,interval:4,lineStyle:{color:"#4a3a3a"}},boundaryGap:!1,data:c(d.speedRequestInterval,26)}],yAxis:[{max:120,min:0,interval:40,offset:40,nameTextStyle:{color:"#005564"},type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"#4a3a3a"}},axisLabel:{show:!0,align:"left",margin:24,textStyle:{color:"rgba(255,255,255,0.8)",fontSize:12},formatter:function(e,t){return e+h.su.CHAR.DASHBOARD.KBPS}}}],series:[{name:"upload",type:"line",smooth:!0,symbol:"none",zIndex:2,itemStyle:{normal:{color:"rgb(236,154,0)",borderColor:"rgb(236,154,0)"}},areaStyle:{normal:{color:"rgba(236,154,0,0.4)"}},lineStyle:{width:1},data:e.data},{name:"download",type:"line",smooth:!0,symbol:"none",zIndex:1,itemStyle:{normal:{color:"rgb(175,0,0)",borderColor:"rgb(175,0,0)"}},areaStyle:{normal:{color:"rgba(175,0,0,0.4)"}},lineStyle:{width:1},data:e.data}]}},initPerformance:function(){l.dashboardView.cpuLoad.setOption(d.calculateLineOption({title:h.su.CHAR.DASHBOARD.CPU_LOAD,color:"#ffcd08",tooltip:{backgroundColor:"rgba(236,154,0,0.4)"},areaColor:"rgba(255, 205, 8, 0.5)",name:h.su.CHAR.DASHBOARD.CPU_CORE_NUMBER+":"})),l.dashboardView.memoryUsage.setOption(d.calculateLineOption({title:h.su.CHAR.DASHBOARD.MEMORY_USAGE,color:"#ff0000",tooltip:{backgroundColor:"rgba(255, 0, 0, 0.8)"},areaColor:"rgba(175,0,0,0.4)"}))},setPerformance:function(e){var t=e.cpuUsage,e=e.memUsage,a=c(2e3,7);r.shift(),r.push(t),l.dashboardView.cpuLoad.setOption({xAxis:[{data:a}],series:{data:r}}),b.shift(),b.push(e),l.dashboardView.memoryUsage.setOption({xAxis:[{data:a}],series:{data:b}})},calculateLineOption:function(s){return{title:{show:!1,text:(s=h.extend({title:"",color:"#ffcd08",name:"",areaColor:"rgba(255, 205, 8, 0.5)"},s)).title,textStyle:{fontSize:13},left:20},grid:{top:10,right:0,left:40,bottom:10},tooltip:h.extend({show:!0,formatter:"{c}%",textStyle:{color:"#fff",fontSize:12,lineHeight:14,fontFamily:"Arial, Sans-Serif, Geneva, Verdana"},padding:[2.6,6],position:function(e,t,a,n,i){var o=(o="")+("<span>"+t.value+"%</span>")+('<span style="display:block;position:absolute;left:'+(i.contentSize[0]/2-3+"px")+";bottom:-6px;border-top:6px solid "+s.tooltip.backgroundColor+';border-left:3px solid transparent;border-right:3px solid transparent;border-bottom:none;background-color:transparent;width:0;height:0;line-height:14px;"></span>');return h(a).html(o),[e[0]-18.5,e[1]-40]}},s.tooltip),xAxis:[{name:"",nameLocation:"middle",nameTextStyle:{color:"#000"},type:"category",axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},boundaryGap:!1,data:c(2e3,7)}],yAxis:[{max:100,min:0,interval:20,offset:32,nameTextStyle:{color:"#005564"},type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{type:"dashed"}},axisLabel:{show:!0,align:"left",textStyle:{color:"rgba(255,255,255,0.8)",fontSize:12},formatter:function(e,t){return e+"%"}}}],series:[{name:"RX",type:"line",smooth:!0,symbol:"emptyCircle",symbolSize:6,showAllSymbol:!0,legendHoverLink:!1,itemStyle:{normal:{color:s.color,borderColor:s.color}},areaStyle:{normal:{color:s.areaColor}},lineStyle:{width:1},data:s.data}]}},initClients:function(){i.moduleLoader.load({module:"dashboard"},{module:"bandwidth"},l.dashboardView.qosBandwidthLoader,function(){var e=i.moduleManager.get("bandwidth");e.on("ev_qos_saved",function(e){a.dashboardClientsStore.abort(),n.priorityEnable.enable.setValue("on"),n.priorityEnable.enable.record(),n.priorityEnable.setOnOff({preventSuccessEvent:!0}),a.dashboardClientsStore.sync({success:function(e){a.dashboardClientsStore.loadData(e,!0),t()}})}),e.on("ev_qos_save_close",function(e){a.dashboardClientsStore.reset(),t()}),e.on("ev_qos_save_cancel",function(e){a.dashboardClientsStore.reset(),t()})});var t=function(){clearInterval(s),s=setInterval(function(){a.dashboardClientsStore.load({data:{operation:"loadSpeed"}})},1e4)};a.dashboardClientsStore.load({data:{operation:"loadDevice"},success:function(e){a.dashboardClientsStore.load({data:{operation:"loadSpeed"}})}}),t()},stopGetClients:function(){clearInterval(s)},getClients:function(){i.ajax.request({proxy:"clientStatusProxy",success:function(e){o=e,a.dashboardClientsStore.load({data:{operation:"loadSpeed"}})}})},getAccessControlMode:function(e){var t;e&&(t=e.success),n.accessControl.load({success:function(e){t&&t(n.accessControl.getData())}})},blockDevice:function(e){i.ajax.request({proxy:"blockClientProxy",data:{mac:e},success:function(e){a.dashboardClientsStore.load({operation:"loadDevice"})}})},beforeDestroy:function(){clearInterval(s)},getIPaddr:function(e){if(o)for(var t in o)for(var a=0,n=o[t].length;a<n;a++)if(o[t][a].macaddr==e)return o[t][a].ipaddr||"";return""},separateSpeed:function(e){var t={};return e/1024<1?(t.value=0===e?0:e/1024,t.unit=h.su.CHAR.DASHBOARD.KBPS):e/1024/1024<1?(t.value=e/1024,t.unit=h.su.CHAR.DASHBOARD.KBPS):(t.value=e/1024/1024,t.unit=h.su.CHAR.DASHBOARD.MBPS),t.value=parseFloat(t.value.toFixed(2)),t}}})}(jQuery);