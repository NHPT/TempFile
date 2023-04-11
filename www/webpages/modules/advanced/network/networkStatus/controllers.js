!function(i){i.su.moduleManager.define("networkStatus",{services:["ajax"],models:["wanStatus","internetConnect","lanAdvLanModel","lanAdvLinkAggModel","iptvVlan","dhcpServer","ddnsAdv","ddnsAdvTplinkModel","ddnsAdvNoipModel","ddnsAdvDnydnsModel"],stores:["iptvVlanStore","ddnsAdvTplinkStore"],views:["networkStatusView"],listeners:{ev_on_launch:function(e,n,t,a,s,d,r){this.unRegisterAutoSaveData(a.ddnsAdv),n.refreshStatus(),n.refresh=setInterval(n.refreshStatus,1e4)}},init:function(e,o,l,n,t,a){this.configViews({id:"networkStatusView",items:[{id:"internet-conn-type",renderer:function(e){switch(e){case"dhcp":return i.su.CHAR.NETWORK_STATUS.DYNAMIC_IP;case"static":return i.su.CHAR.NETWORK_STATUS.STATIC_IP;case"pppoe":return i.su.CHAR.NETWORK_STATUS.PPPOE;case"l2tp":return i.su.CHAR.NETWORK_STATUS.L2TP;case"pptp":return i.su.CHAR.NETWORK_STATUS.PPTP;case"dslite":return i.su.CHAR.NETWORK_INTERNET.DSLITE;case"v6plus":return i.su.CHAR.NETWORK_INTERNET.V6_PLUS;case"ocn":return i.su.CHAR.NETWORK_INTERNET.OCN}}},{id:"dhcp-server-status",renderer:function(e){return"off"==e?i.su.CHAR.NETWORK_STATUS.DISABLED:i.su.CHAR.NETWORK_STATUS.ENABLED}},{id:"ddns-service-provider",renderer:function(e){switch(e){case 0:return i.su.CHAR.NETWORK_STATUS.TP_LINK;case 1:return i.su.CHAR.NETWORK_STATUS.NO_IP;case 2:return i.su.CHAR.NETWORK_STATUS.DNYDNS}}}]}),this.listen({"models.wanStatus":{ev_loaded:e.setStatusPanel},"models.lanAdvLinkAggModel":{ev_loaded:function(e,n,t){l.lanAdvLinkAggModel.getData();var a=l.lanAdvLinkAggModel.getData().ports,s=[];if("1"==l.lanAdvLinkAggModel.getData().enableAgg){for(var d=0;d<4;d++)a["lan"+(d+1)]&&(s[s.length]=i.su.CHAR.NETWORK_STATUS.LAN+" "+(d+1));var r=s.join(" & ");o.networkStatusView.lanLink.show(),o.networkStatusView.lanLink.setValue(r)}else o.networkStatusView.lanLink.hide()}},"models.iptvVlan":{ev_loaded:function(e,n,t){"off"==l.iptvVlan.getData().enable?o.networkStatusView.iptvPanel.hide():o.networkStatusView.iptvPanel.show()}},"models.dhcpServer":{ev_loaded:function(e,n,t){"off"==l.dhcpServer.getData().enable?l.dhcpServer.ipaddrStart.hide():l.dhcpServer.ipaddrStart.show()}},"models.lanAdvLanModel.maskType":{ev_value_change:function(e,n,t){switch(n){case 0:l.lanAdvLanModel.maskType.setValue("255.255.255.0");break;case 1:l.lanAdvLanModel.maskType.setValue("255.255.0.0");break;case 2:l.lanAdvLanModel.maskType.setValue("255.0.0.0");break;case 3:l.lanAdvLanModel.maskType.setValue(l.lanAdvLanModel.customValue.getValue())}}},"models.dhcpServer.ipaddrEnd":{ev_value_change:function(e,n,t){var a=l.dhcpServer.ipaddrStart.getValue();l.dhcpServer.ipaddrStart.setValue(a+"-"+n)}}})}},function(a,s,n,d,e,t){return{refreshStatus:function(){n.internetConnect.load(),n.wanStatus.load(),n.lanAdvLanModel.load(),n.lanAdvLinkAggModel.load(),n.iptvVlan.load(),d.iptvVlanStore.load({data:{operation:"read"},success:function(e){a.lanNum=4;for(var n=e.ports.split(" "),t=0;t<a.lanNum;t++)d.iptvVlanStore.getSubModelBindByIndex(t).lan.setLabelField("LAN"+n[t]);d.iptvVlanStore.show()}}),n.dhcpServer.load(),n.ddnsAdv.load({success:function(e){if("off"===e.enable)s.networkStatusView.ddnsPanel.hide();else switch(s.networkStatusView.ddnsPanel.show(),e.provider){case"tp-link":i.su.userInfo.token&&(d.ddnsAdvTplinkStore.load({success:function(e){a.setCurrentDomain(e)}}),s.networkStatusView.ddnsAdvTplink.show());break;case"noip":n.ddnsAdvNoipModel.load(),s.networkStatusView.ddnsAdvNoip.show();break;case"dyndns":n.ddnsAdvDnydnsModel.load(),s.networkStatusView.ddnsAdvDnydns.show()}}})},setCurrentDomain:function(e){for(var n="",t=e.length,a=0;a<t;a++)"occupied"===e[a].status&&(n=e[a].domain);s.networkStatusView.currentDomain.setValue(n)},setStatusPanel:function(e,n){s.networkStatusView.internetStatusPanel.show()}}})}(jQuery);