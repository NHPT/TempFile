!function(l){l.su.moduleManager.define("networkMap",{services:["moduleLoader","ajax","device","timer","moduleManager"],models:["statusAll","internetSpeedModel","onlineUpgradeModel","wanPortStatusModel"],stores:["connectedClientsStore","upgradeOperationStore","meshSatellitesStore"],deps:["mapInternet","navigatorController"],views:["networkMapView"],listeners:{ev_on_launch:function(e,t,n,o,a,r,s){t.loadModules(function(){t.switchModule("internet"),t.startGetDeviceNum()}),s.device.getConfig().supportWanLanPort&&o.wanPortStatusModel.load(),t.startGetInternetStatus(),l("#printer-item").addClass("hidden"),s.device.getIsTriband()?l("#wireless-5g-2-item").removeClass("hidden"):(l("#wireless-5g-2-item").addClass("hidden"),l("#wireless-5g-item .text").text(l.su.CHAR.NETWORK_MAP.G5)),s.device.getConfig().supportWifi6E&&l("#wireless-6g-item").removeClass("hidden");var o=l.su.CHAR.UPGRADE.NOTICE,i=(n.networkMapView.upgradeMsg3.setContent(o),t.checkCloudInfo());setTimeout(function(){t.isRunning()&&(l.when(i).done(function(e){t.showCloudMsg(e)}),"router"===t.getCurrentMode()&&s.device.getConfig().supportAutoUpdate?s.ajax.request({proxy:"autoUpgradeReadProxy",method:"read",success:function(e){var t=s.moduleManager.get("index");t&&t.hideSupportTips(),n.networkMapView.autoUpdateMsg.show()},fail:t.updateHandler}):t.updateHandler())},1889),l("#map-clients .map-clients-icon-num").hide(),l("#map-mesh .map-clients-icon-num").hide()},ev_before_destroy:function(e,t){t.beforeDestroy()},ev_clients_number_changed:function(e,t){this.setClientsNumber(t)},ev_mesh_number_changed:function(e,t){this.setMeshNumber(t)}},init:function(n,o,a,r,t,s){this.configViews({}),this.control({".cloud-frame-msg":{ev_msg_close:n.updateCloudMsgCount},"#map-internet":{click:function(e){n.switchModule("internet")}},"#map-router":{click:function(e){n.switchModule("router");var t=l.su.moduleManager.get("mapRouter");t&&t.loadEthernetStatusStore()}},"#map-clients":{click:function(e){n.switchModule("clients");var t=l.su.moduleManager.get("mapClients");t&&t.loadClientListStore("loadDevice")}},"#map-mesh":{click:function(e){n.switchModule("mesh");var t=l.su.moduleManager.get("mapMesh");setTimeout(function(){t.loadMeshClientStore({success:function(e){r.meshSatellitesStore.loadData(e.meshList,!0),n.setMeshNumber(e.onlineMeshNum),t.checkLength(e.meshList.length)}})},11)}},"#upgrade-msg-2":{ev_msg_ok:function(){n.startOnlineUpgrade()}},"#upgrade-msg-3":{ev_msg_ok:function(){n.startOnlineUpgrade()},ev_msg_close:function(){s.ajax.request({method:"write",proxy:"upgradeReadProxy",data:{remind_later:"1"}})},click:function(e){l(e.target).hasClass("upgrade-text")&&(o.networkMapView.upgradeMsg3.close(),setTimeout(function(){t.navigatorController.goTo("firmware")},20))}},"#upgrade-msg-4":{ev_msg_close:function(){s.ajax.request({method:"write",proxy:"upgradeReadProxy",data:{remind_later:"1"}})},click:function(e){l(e.target).hasClass("upgrade-text")&&(o.networkMapView.upgradeMsg4.close(),setTimeout(function(){t.navigatorController.goTo("firmware")},20))}},"#upgrade-now-button":{ev_button_click:function(){o.networkMapView.upgradeMsg4.close(),n.startOnlineUpgrade()}},"#auto-update-now-btn":{ev_button_click:function(){t.navigatorController.goTo("firmware")}},"#auto-update-later-btn":{ev_button_click:function(){o.networkMapView.autoUpdateMsg.close()}},".no-remind-login":{mousedown:function(){n.noRemindLoginMsg("login")}},".no-remind-country":{mousedown:function(){n.noRemindLoginMsg("country")}}}),this.listen({"views.networkMapView.updateOperation":{ev_value_change:function(e,t){o.networkMapView.upgradeMsg4.close(),s.ajax.request({method:"write",proxy:"upgradeReadProxy",data:{remind_later:"remind"==t?"1":"0"}})}},"models.onlineUpgradeModel":{ev_loaded:function(){var e=a.onlineUpgradeModel.detail.getValue(),t="";t=e?e.replace(/\\\\/g,"&#92;").replace(/\\n/g,"<br>"):(e=s.device.getProductName()||l.su.CHAR.NETWORK_MAP.ROUTER,l.su.CHAR.UPGRADE.NOTICE_IMPORTANT.replace("%model%",n.modelName||e)),o.networkMapView.updateDetails.setText(t),l.su.scrollbar({ele:"#upgrade-msg-2 .advanced-panel .panel-content"})}}})}},function(r,s,o,e,n,i){var u,a=null,t=null,d=null;return{delayInterval:0,modelName:"",msgName:"",startOnlineUpgrade:function(){var e=l.su.moduleManager.get("firmware");e.setMode("networkMap"),e.startOnlineUpgrade()},loadModules:function(e){var t=l.Deferred(),n=l.Deferred(),o=l.Deferred(),a=l.Deferred();i.moduleLoader.load({module:"networkMap"},{module:"mapInternet"},s.networkMapView.mapInternetLoader,function(){t.resolve()}),i.moduleLoader.load({module:"networkMap"},{module:"mapRouter"},s.networkMapView.mapRouterLoader,function(){n.resolve()}),"router"==r.getCurrentMode()?i.moduleLoader.load({module:"networkMap"},{module:"mapMesh"},s.networkMapView.mapMeshLoader,function(){a.resolve()}):(l("#map-mesh").hide(),l(".map-line.mesh").hide(),a.resolve()),i.moduleLoader.load({module:"networkMap"},{module:"mapClients"},s.networkMapView.mapClientsLoader,function(){o.resolve()}),s.networkMapView.mapInternetLoader.hide(),s.networkMapView.mapRouterLoader.hide(),s.networkMapView.mapMeshLoader.hide(),s.networkMapView.mapClientsLoader.hide(),l.when(t,n,a,o).then(function(){e&&e()})},switchModule:function(e){for(var t=["internet","router","mesh","clients"],n=0;n<t.length;n++){var o="map"+(t[n].charAt(0).toUpperCase()+t[n].slice(1))+"Loader",a="#map-"+t[n];t[n]===e?(l(a).addClass("active"),s.networkMapView[o].show()):(l(a).removeClass("active"),s.networkMapView[o].hide())}u=e},getCurrentModule:function(){return u},getCurrentMode:function(){return i.device.getCurrentMode()},startGetInternetStatus:function(){var e=i.device.getConfig().supportSpeedTest,t=(e&&r.setInternetSpeed({upSpeed:0,downSpeed:0}),clearInterval(a),{success:function(e){n.mapInternet.setInternetStatus(e),"CONNECTED"===e.internetStatus.toUpperCase()?l("#map-internet .map-internet-icon-status").removeClass("disconnected poorconnected warning"):"POOR_CONNECTED"===e.internetStatus.toUpperCase()?l("#map-internet .map-internet-icon-status").addClass("poorconnected"):l("#map-internet .map-internet-icon-status").addClass("disconnected")}});a=setInterval(function(){r.getInternetStatus(t)},3e3),r.getInternetStatus(t),"router"===r.getCurrentMode()&&e?(r.startGetInternetSpeed(),s.networkMapView.speedDownload.show(),s.networkMapView.speedUpload.show()):(s.networkMapView.speedDownload.hide(),s.networkMapView.speedUpload.hide())},getInternetStatus:function(e){var t,n;e&&(t=e.success,n=e.fail),i.ajax.request({proxy:"internetStatusProxy",success:function(e){t&&t(e)},fail:function(e){n&&n(e)}})},startGetInternetSpeed:function(){clearInterval(t);var e={success:function(e){r.setInternetSpeed(e)}};t=setInterval(function(){r.getInternetSpeed(e)},3229)},startGetDeviceNum:function(){d=i.timer.setInterval(r,function(){0==r.delayInterval&&"clients"!=r.getCurrentModule()&&i.ajax.request({proxy:"connectedClientProxy",method:"read",data:{operation:"loadDevice"},success:function(e){r.setClientsNumber(e.onlineClientNum),r.delayInterval=0},fail:function(){r.delayInterval=0},error:function(){r.delayInterval=0}}),0==r.delayInterval&&"mesh"!=r.getCurrentModule()&&"router"==r.getCurrentMode()&&l.su.moduleManager.get("mapMesh").loadMeshClientStore({success:function(e){r.setMeshNumber(e.onlineMeshNum),r.delayInterval=0},fail:function(){r.delayInterval=0},error:function(){r.delayInterval=0}}),r.delayInterval=1},20123,!0)},getInternetSpeed:function(e){var t,n;e&&(t=e.success,n=e.fail),o.internetSpeedModel.load({success:function(){t&&t(o.internetSpeedModel.getData())},fail:function(e){n&&n(e)}})},setInternetSpeed:function(e){var t=r.separateSpeed(e.upSpeed),e=r.separateSpeed(e.downSpeed);s.networkMapView.speedDownload.setField("value",e.value),s.networkMapView.speedDownload.setField("unit",e.unit),s.networkMapView.speedUpload.setField("value",t.value),s.networkMapView.speedUpload.setField("unit",t.unit)},setProductName:function(e){r.modelName=e;var t=i.device.getProductName()||l.su.CHAR.NETWORK_MAP.ROUTER;s.networkMapView.mapRouter.setField("productName",e||t),s.networkMapView.updateNotice.setText(l.su.CHAR.UPGRADE.NOTICE_IMPORTANT.replace("%model%",e||t))},handleWirelessIcon:function(e,t){var n,o;t?"on"===e?l("#wireless-"+t+"-item").removeClass("disabled"):l("#wireless-"+t+"-item").addClass("disabled"):(t=e.wireless2gEnable,n=e.wireless5gEnable,o=e.wireless5g2Enable,e=e.wireless6gEnable,"on"===t?l("#wireless-2g-item").removeClass("disabled"):l("#wireless-2g-item").addClass("disabled"),"on"===n?l("#wireless-5g-item").removeClass("disabled"):l("#wireless-5g-item").addClass("disabled"),"on"===o?l("#wireless-5g-2-item").removeClass("disabled"):l("#wireless-5g-2-item").addClass("disabled"),"on"===e?l("#wireless-6g-item").removeClass("disabled"):l("#wireless-6g-item").addClass("disabled"))},handlePrinterIcon:function(e){e=e.printerCount;0===parseInt(e,10)?l("#printer-item").addClass("hidden"):l("#printer-item").removeClass("hidden")},setClientsNumber:function(e){(e=parseInt(e,10))&&2<e.toString().length?l("#map-clients .map-clients-icon-num").addClass("huge-num"):l("#map-clients .map-clients-icon-num").removeClass("huge-num"),l("#map-clients .map-clients-icon-num").text(isNaN(e)?0:e).show()},setMeshNumber:function(e){(e=parseInt(e,10))&&2<e.toString().length?l("#map-mesh .map-clients-icon-num").addClass("huge-num"):l("#map-mesh .map-clients-icon-num").removeClass("huge-num"),l("#map-mesh .map-clients-icon-num").text(isNaN(e)?0:e).show()},separateSpeed:function(e){var t={},e=8*e;return e/1024<1?(t.value=0==e?0:e/1024,t.unit=l.su.CHAR.NETWORK_MAP.KBPS_BIT):e/1024/1024<1?(t.value=e/1024,t.unit=l.su.CHAR.NETWORK_MAP.KBPS_BIT):(t.value=e/1024/1024,t.unit=l.su.CHAR.NETWORK_MAP.MBPS_BIT),t.value=parseFloat(t.value.toFixed(2)),t},beforeDestroy:function(){clearInterval(a),clearInterval(t),clearInterval(d),r.unLoadCloudModule()},unLoadCloudModule:function(){var e;i.device.getConfig().supportCloudv3&&(e=i.moduleManager.get("cloudService"))&&e.beforeDestroy()},updateHandler:function(){i.moduleLoader.load({module:"networkMap"},{module:"firmware"},s.networkMapView.upgradeLoader,function(){s.networkMapView.upgradeLoader.hide(),sessionStorage&&sessionStorage.getItem&&localStorage.getItem("token")!=sessionStorage.getItem("upgradeToken")&&i.ajax.request({proxy:"upgradeReadProxy",method:"read",success:function(e){"1"==e.remind_now&&(1==e.type?(s.networkMapView.upgradeMsg4.show(),sessionStorage.setItem("upgradeToken",localStorage.getItem("token"))):2==e.type?(s.networkMapView.upgradeMsg3.show(),sessionStorage.setItem("upgradeToken",localStorage.getItem("token"))):3==e.type&&s.networkMapView.upgradeMsg2.show()),"1"==localStorage.getItem("upgradeSuccess")&&(s.networkMapView.networkUpgradeSuccessMsg.show(),localStorage.setItem("upgradeSuccess",0))}})})},getCloudMsgName:function(e){return r.cloudMsgCount={},l.su.userInfo.token&&localStorage.getItem("updateCC")==l.su.userInfo.token&&e.pop_count_country_code<5?(r.cloudMsgCount.pop_count_country_code=e.pop_count_country_code+1,r.resetLocalStorage(),"updateCC"):!l.su.userInfo.token&&"off"==e.bind_status&&e.pop_count_login<5?(r.cloudMsgCount.pop_count_login=e.pop_count_login+1,"cloudLogin"):""},resetLocalStorage:function(){localStorage.removeItem("updateCC")},showCloudMsg:function(e){var t;r.msgName=r.getCloudMsgName(e),r.msgName&&(e=r.msgName+"Loader",t=r.msgName+"Msg",i.moduleLoader.load({module:"networkMap"},{module:"cloudService"},s.networkMapView[e],function(){var e=i.moduleManager.get("cloudService");e.setMode("basic"),e.init(function(){s.networkMapView[t].show()})}))},hideCloudMsg:function(e){var t,n;r.msgName&&(r.updateCloudMsgCount(),t=r.msgName+"Msg",n=r.msgName+"Loader",s.networkMapView[t].hide(),i.moduleLoader.unLoad(s.networkMapView[n]),e)&&e()},updateCloudMsgCount:function(){l.su.isEmptyObject(r.cloudMsgCount)||i.ajax.request({proxy:"cloudMsgCheckProxy",method:"write",data:r.cloudMsgCount})},checkCloudInfo:function(){var t=l.Deferred();return!i.device.getConfig().supportCloudv3||"router"!==r.getCurrentMode()||sessionStorage.getItem("cloudMsgToken")==localStorage.getItem("token")&&localStorage.getItem("updateCC")!==l.su.userInfo.token?t.reject():(i.ajax.request({proxy:"cloudMsgCheckProxy",method:"read",success:function(e){sessionStorage.setItem("cloudMsgToken",localStorage.getItem("token")),t.resolve(e)},fail:function(){t.reject()},error:function(){t.reject()}}),t)},noRemindLoginMsg:function(e){var t={};"login"==e&&(t={pop_count_login:5},s.networkMapView.cloudLoginMsg.hide()),"country"==e&&(t={pop_count_country_code:5},s.networkMapView.updateCCMsg.hide()),i.ajax.request({proxy:"cloudMsgCheckProxy",method:"write",data:t,success:function(e){},fail:function(){},error:function(){}})}}})}(jQuery);