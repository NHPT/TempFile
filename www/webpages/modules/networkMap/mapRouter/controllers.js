!function(u){u.su.moduleManager.define("mapRouter",{services:["device","timer","ajax"],models:["statusAll","deviceNameModel","wireless24gNetworkMap","wireless5g1NetworkMap","wireless5g2NetworkMap","wireless6gNetworkMap","guest24gNetworkMap","guest5g1NetworkMap","guest5g2NetworkMap","guest6gNetworkMap","wirelessSmartConn"],stores:["ethernetStatusStore"],deps:["navigatorController","networkMap"],views:["mapRouterView"],listeners:{ev_on_launch:function(e,t,s,a,o,l,i){this.unRegisterAutoSaveData([a.statusAll,a.deviceNameModel,a.wireless24gNetworkMap,a.wireless5g1NetworkMap,a.wireless5g2NetworkMap,a.wireless6gNetworkMap,a.guest24gNetworkMap,a.guest5g1NetworkMap,a.guest5g2NetworkMap,a.guest6gNetworkMap]),s.mapRouterView.cpuLoad.setOption(t.calculateLineOption({title:u.su.CHAR.NETWORK_MAP.CPU_LOAD,color:"#ffcd08",tooltip:{backgroundColor:"rgba(255, 203, 0, 0.8)"},name:u.su.CHAR.NETWORK_MAP.CPU_CORE_NUMBER+":"})),s.mapRouterView.memoryUsage.setOption(t.calculateLineOption({title:u.su.CHAR.NETWORK_MAP.MEMORY_USAGE,color:"#53C5D2",tooltip:{backgroundColor:"rgba(74, 203, 214, 0.8)"},areaColor:"rgba(83, 197, 210, 0.5)"})),a.deviceNameModel.load(),a.wireless24gNetworkMap.load(),a.wireless5g1NetworkMap.load(),a.guest24gNetworkMap.load(),a.guest5g1NetworkMap.load(),s.mapRouterView.wireless6gFieldsetLeft.hide(),s.mapRouterView.wireless6gFieldsetRight.hide(),s.mapRouterView.guest6gFieldset.hide(),s.mapRouterView.wireless5g2Fieldset.hide(),s.mapRouterView.guest5g2Fieldset.hide(),t.isTriband?(s.mapRouterView.wireless5g2Fieldset.show(),s.mapRouterView.guest5g2Fieldset.show(),a.wireless5g2NetworkMap.load(),a.guest5g2NetworkMap.load()):(s.mapRouterView.wireless5g2Fieldset.hide(),s.mapRouterView.guest5g2Fieldset.hide(),a.wireless5g1NetworkMap.enable.setLabelField(u.su.CHAR.NETWORK_MAP.WIRELESS_5GHZ),a.guest5g1NetworkMap.enable.setLabelField(u.su.CHAR.NETWORK_MAP.WIRELESS_5GHZ)),t.supportWifi6E&&(s.mapRouterView.wireless6gFieldsetLeft.show(),s.mapRouterView.guest6gFieldset.show(),a.wireless6gNetworkMap.load(),a.guest6gNetworkMap.load()),a.wirelessSmartConn.load({success:function(){"on"===a.wirelessSmartConn.smartEnable.getValue()&&(a.wireless24gNetworkMap.enable.setLabelField(u.su.CHAR.WIRELESS_SETTINGS.WIRELESS_RADIO),a.statusAll.wireless2gChannel.setLabelField(u.su.CHAR.WIRELESS_SETTINGS.CHANNEL_2G),s.mapRouterView.wireless5gFieldset.hide(),a.statusAll.wireless5gChannel.show(),a.statusAll.wireless2gChannel.setLabelField(u.su.CHAR.WIRELESS_SETTINGS.CHANNEL_2G),t.isTriband?(a.statusAll.wireless5gChannel.setLabelField(u.su.CHAR.WIRELESS_SETTINGS.CHANNEL_5G1),s.mapRouterView.wireless5g2Fieldset.hide(),a.statusAll.wireless5g2Channel.show(),t.supportWifi6E&&(s.mapRouterView.wireless6gFieldsetLeft.hide(),s.mapRouterView.wireless6gFieldsetRight.show())):t.supportWifi6E&&(a.wireless24gNetworkMap.enable.setLabelField(u.su.CHAR.NETWORK_MAP.WIRELESS_2G5GGHZ),s.mapRouterView.wireless6gFieldsetLeft.hide(),s.mapRouterView.wireless6gFieldsetRight.show()))}}),i.timer.setInterval(t,function(){0<t.delayInterval||(t.delayInterval=1,a.statusAll.load({success:function(e){t.delayInterval=0;e=a.statusAll.getData();l.networkMap.handleWirelessIcon(e),t.setWirelessEnable(e)},fail:function(){t.delayInterval=0},error:function(){t.delayInterval=0}}))},20101,!0)}},init:function(s,a,o,e,l,t){this.configViews({id:"mapRouterView",items:[{id:"cpu-usage-field",renderer:function(e){return e+"%"}},{id:"memory-usage-field",renderer:function(e){return e+"%"}}]}),this.control({"#map-router-wireless-button":{ev_button_click:function(e){l.navigatorController.goTo("wirelessSettingsAdv")}},"#map-router-guest-button":{ev_button_click:function(e){l.navigatorController.goTo("guestNetworkAdv")}},"#map-router-usb-button":{ev_button_click:function(e){l.navigatorController.goTo("storageSharing")}},"#device-name-edit-btn":{ev_button_click:function(e){a.mapRouterView.deviceNameMsg.show()}},"#device-name-msg-submit-btn":{ev_button_click:function(){var e=o.deviceNameModel;e.validate()&&(e.submit({success:function(e){a.mapRouterView.deviceName.setValue(e.model)}}),a.mapRouterView.deviceNameMsg.hide())}},"#device-name-msg-cancel-btn":{ev_button_click:function(){a.mapRouterView.deviceNameMsg.hide()}},"#wireless2g-enable-switch":{ev_view_change:function(e,t){o.wireless24gNetworkMap.submit({data:{disabled_all:"on"==t.value?"off":"on"},success:function(e){l.networkMap.handleWirelessIcon(e.enable,"2g"),"off"==e.enable?o.guest24gNetworkMap.enable.disable():o.guest24gNetworkMap.enable.enable()}}),s.smartConnectSynchronousSendData(t)}},"#wireless5g-enable-switch":{ev_view_change:function(e,t){o.wireless5g1NetworkMap.submit({data:{disabled_all:"on"==t.value?"off":"on"},success:function(e){l.networkMap.handleWirelessIcon(e.enable,"5g"),"off"==e.enable?o.guest5g1NetworkMap.enable.disable():o.guest5g1NetworkMap.enable.enable()}})}},"#wireless5g2-enable-switch":{ev_view_change:function(e,t){o.wireless5g2NetworkMap.submit({data:{disabled_all:"on"==t.value?"off":"on"},success:function(e){l.networkMap.handleWirelessIcon(e.enable,"5g-2"),"off"==e.enable?o.guest5g2NetworkMap.enable.disable():o.guest5g2NetworkMap.enable.enable()}})}},"#wireless6g-enable-switch-left":{ev_view_change:function(e,t){s.submit6gWireless(t)}},"#wireless6g-enable-switch-right":{ev_view_change:function(e,t){s.submit6gWireless(t)}},"#guestNetwork2g-enable-switch":{ev_view_change:function(){o.guest24gNetworkMap.submit()}},"#guestNetwork5g-enable-switch":{ev_view_change:function(){o.guest5g1NetworkMap.submit()}},"#guestNetwork5g2-enable-switch":{ev_view_change:function(){o.guest5g2NetworkMap.submit()}},"#guestNetwork6g-enable-switch":{ev_view_change:function(){o.guest6gNetworkMap.submit()}}}),this.listen({"models.statusAll":{ev_loaded:function(e,t){s.setStorage(t),s.setWirelessStatus(t),s.setPerformance(t)}},"models.deviceNameModel":{ev_loaded:function(e,t){a.mapRouterView.deviceName.setValue(t.model),l.networkMap.setProductName(t.model)}},"models.wireless24gNetworkMap":{ev_loaded:function(e,t){"off"==t.enable?o.guest24gNetworkMap.enable.disable():o.guest24gNetworkMap.enable.enable()}},"models.wireless5g1NetworkMap":{ev_loaded:function(e,t){"off"==t.enable?o.guest5g1NetworkMap.enable.disable():o.guest5g1NetworkMap.enable.enable()}},"models.wireless5g2NetworkMap":{ev_loaded:function(e,t){"off"==t.enable?o.guest5g2NetworkMap.enable.disable():o.guest5g2NetworkMap.enable.enable()}},"models.wireless6gNetworkMap":{ev_loaded:function(e,t){"off"==t.enable?o.guest6gNetworkMap.enable.disable():o.guest6gNetworkMap.enable.enable()}}})}},function(l,o,i,e,t,s){function a(e,t){e=e||2e3,t=t||7;for(var s,a=new Date,o=[];t--;)o.unshift(("0"+(s=a).getHours()).slice(-2)+":"+("0"+s.getMinutes()).slice(-2)+":"+("0"+s.getSeconds()).slice(-2)),a=new Date(a-e);return o}var n=function(){for(var e=[],t=7;t--;)e.push(0);return e}(),r=function(){for(var e=[],t=7;t--;)e.push(0);return e}();return{delayInterval:0,isTriband:s.device.getIsTriband(),supportWifi6E:s.device.getConfig().supportWifi6E,loadEthernetStatusStore:function(){e.ethernetStatusStore.load()},setWirelessEnable:function(e){i.wireless24gNetworkMap.enable.setValue(e.wireless2gEnable),i.wireless5g1NetworkMap.enable.setValue(e.wireless5gEnable),i.guest24gNetworkMap.enable.setValue(e.guest2gEnable),i.guest5g1NetworkMap.enable.setValue(e.guest5gEnable),i.wireless6gNetworkMap.enable.setValue(e.wireless6gEnable),i.guest6gNetworkMap.enable.setValue(e.guest6gEnable)},setWirelessStatus:function(e){var t=e.wireless2gEncryption,s=e.wireless5gEncryption,a=e.wireless5g2Encryption,o=e.wireless6gEncryption;"none"==t?i.statusAll.wireless2gPassword.hide():i.statusAll.wireless2gPassword.show(),"none"==s?i.statusAll.wireless5gPassword.hide():i.statusAll.wireless5gPassword.show(),"none"==a?i.statusAll.wireless5g2Password.hide():i.statusAll.wireless5g2Password.show(),"owe"==o?i.statusAll.wireless6gPassword.hide():i.statusAll.wireless6gPassword.show(),l.supportWifi6E?(t=e.guest2gEncryption,s=e.guest5gEncryption,a=e.guest5g2Encryption,o=e.guest6gEncryption,i.statusAll.guest2g5gPskKey.hide(),"none"!=t&&i.statusAll.guest2gPskKey.show(),"none"!=s&&i.statusAll.guest5gPskKey.show(),"none"!=a&&i.statusAll.guest5g2PskKey.show(),"owe"!=o&&i.statusAll.guest6gPskKey.show()):"none"==(t=e.guest2g5gEncryption)||"portal"==t?i.statusAll.guest2g5gPskKey.hide():i.statusAll.guest2g5gPskKey.show()},setStorage:function(e){var t={PB:u.su.CHAR.UNIT.PB,TB:u.su.CHAR.UNIT.TB,GB:u.su.CHAR.UNIT.GB,MB:u.su.CHAR.UNIT.MB,KB:u.su.CHAR.UNIT.KB,B:u.su.CHAR.UNIT.B};function s(e){return e&&e.toUpperCase()}var a=u.su.capacityToNum(e.storageAvailable+t[s(e.storageAvailableUnit)]),t=u.su.capacityToNum(e.storageCapacity+t[s(e.storageCapacityUnit)]);o.mapRouterView.usbCapacityRate.setValue(a/t*100)},setPerformance:function(e){var t=e.cpuUsage,e=e.memUsage,s=a(2e3,7);n.shift(),n.push(t),o.mapRouterView.cpuLoad.setOption({xAxis:[{data:s}],series:{data:n}}),r.shift(),r.push(e),o.mapRouterView.memoryUsage.setOption({xAxis:[{data:s}],series:{data:r}})},smartConnectSynchronousSendData:function(e){"on"===i.wirelessSmartConn.smartEnable.getValue()&&(i.wireless5g1NetworkMap.enable.setValue(e.value),i.wireless5g1NetworkMap.submit({data:{disabled_all:"on"==e.value?"off":"on"},preventSuccessEvent:!0,success:function(e){t.networkMap.handleWirelessIcon(e.enable,"5g")}}),s.device.getIsTriband())&&(i.wireless5g2NetworkMap.enable.setValue(e.value),i.wireless5g2NetworkMap.submit({data:{disabled_all:"on"==e.value?"off":"on"},preventSuccessEvent:!0,success:function(e){t.networkMap.handleWirelessIcon(e.enable,"5g-2")}}))},calculateLineOption:function(i){return{title:{show:!1,text:(i=u.extend({title:"",color:"#ffcd08",name:"",areaColor:"rgba(255, 205, 8, 0.5)"},i)).title,textStyle:{fontSize:13},left:20},grid:{top:10,right:0,left:40,bottom:10},tooltip:u.extend({show:!0,formatter:"{c}%",textStyle:{color:"#000000",fontSize:12,lineHeight:14,fontFamily:"Arial, Sans-Serif, Geneva, Verdana"},padding:[2.6,6],position:function(e,t,s,a,o){var l=(l="")+("<span>"+t.value+"%</span>")+('<span style="display:block;position:absolute;left:'+(o.contentSize[0]/2-3+"px")+";bottom:-6px;border-top:6px solid "+i.tooltip.backgroundColor+';border-left:3px solid transparent;border-right:3px solid transparent;border-bottom:none;background-color:transparent;width:0;height:0;line-height:14px;"></span>');return u(s).html(l),[e[0]-18.5,e[1]-40]}},i.tooltip),xAxis:[{name:i.name,nameLocation:"middle",nameTextStyle:{color:"#000"},type:"category",axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},boundaryGap:!1,data:a(2e3,7)}],yAxis:[{max:100,min:0,interval:20,nameTextStyle:{color:"#005564"},type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}},axisLabel:{show:!0,align:"left",textStyle:{color:"rgba(255,255,255,0.8)",fontSize:12},formatter:function(e,t){return e+"%"}}}],series:[{name:"RX",type:"line",smooth:!0,symbol:"emptyCircle",symbolSize:6,showAllSymbol:!0,legendHoverLink:!1,itemStyle:{normal:{color:i.color,borderColor:i.color}},areaStyle:{normal:{color:{x:0,y:0,x2:0,y2:1,type:"linear",globalCoord:!1,colorStops:[{offset:0,color:i.areaColor},{offset:1,color:"rgba(255, 255, 255, 0.5)"}]}}},lineStyle:{width:1},data:i.data}]}},submit6gWireless:function(e){i.wireless6gNetworkMap.submit({data:{disabled_all:"on"==e.value?"off":"on"},success:function(e){t.networkMap.handleWirelessIcon(e.enable,"6g"),"off"==e.enable?i.guest6gNetworkMap.enable.disable():i.guest6gNetworkMap.enable.enable()}})}}})}(jQuery);