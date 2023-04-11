!function(c){c.su.moduleManager.define("ipv6",{services:["polling","ajax","device"],stores:["ipv6ConnectionS","ipv6AutoCfgTypeS","prefixDelegationStore","ipv6DnsServerS","ipv6AutoCfgType2S","ipv6ConfigTypeS","ipv6DsliteSndConn","ipv6LanAutoCfgTypeS","ipv6AutoCfgDynTypeS","macCloneStore","ipv6FirewallStore","firewallServiceTypeStore","natProtocolStore","ipv6FirewallClientsStore"],models:["lanAdvWanModel","macConfigModel","ipv6InternetM","ipv6LanM","ipv6DynamicM","ipv6StaticM","ipv6PppoeM","ipv66to4M","ipv66rdM","ipv6DsliteM","ipv6BridgeM","ipv6MacClone","ipv6FirewallModel"],views:["ipv6View"],deps:["index"],listeners:{ev_on_launch:function(e,p,i,t,a,n,s){p.unRegisterAutoSaveData([t.ipv6InternetM]),a.ipv6ConnectionS.getProxy().read({data:{advanced:!0},success:function(e){if(p.isRunning()){for(var i=[],n=0;n<e.length;n++)i.push({name:c.su.CHAR.IPV6[e[n].name.toUpperCase()],value:e[n].value});a.ipv6ConnectionS.loadData(i),s.ajax.request({proxy:"ipv6InternetMProxy",method:"read",success:function(e){"on"==e.enable?(p.oriConnType=e.conntype,t.ipv6InternetM.loadData(e)):(t.ipv6InternetM.enable.setValue(e.enable),t.ipv6InternetM.conntype.setValue(""))}}),t.ipv6LanM.getProxy().read({success:function(e){t.ipv6LanM.loadData(e)}})}}}),t.ipv6MacClone.load(),p.refreshLan(),!0===s.device.getConfig().supportIpv6Firewall?(i.ipv6View.ipv6Firewall.show(),a.ipv6FirewallStore.load()):i.ipv6View.ipv6Firewall.hide()},ev_before_destroy:function(){this.beforeDestroy()}},init:function(p,t,a,s,o,d){this.configViews({id:"ipv6View",items:[{id:"ipv6-firewall-grid",configs:{minLines:0,popEditor:{addTitle:c.su.CHAR.IPV6.ADD_FIREWALL_RULE,addBtnText:c.su.CHAR.OPERATION.ADD_UPPERCASE,content:"#ipv6-firewall-grid-popEditor",fields:[{name:"name"},{name:"type"},{name:"ip"},{name:"protocol"},{name:"status"}]},paging:{},columns:[{text:c.su.CHAR.IPV6.SERVICE_NAME,dataIndex:"name",width:200,renderer:function(e,i){return e+'<div class="independent-info">'+i.ip+"</div>"}},{text:c.su.CHAR.IPV6.PORT,dataIndex:"port"},{text:c.su.CHAR.IPV6.PROTOCOL,dataIndex:"protocol",renderer:function(e){return"ALL"==e?c.su.CHAR.PORT_FORWARDING.ALL:"TCP"==e?c.su.CHAR.PORT_FORWARDING.TCP:c.su.CHAR.PORT_FORWARDING.UDP}},{text:c.su.CHAR.IPV6.STATUS,dataIndex:"enable",xtype:"customWidget",widgetName:"switch",cls:"status",settings:{trueValue:"on",falseValue:"off"}},{xtype:"actioncolumn",text:c.su.CHAR.GRID.MODIFY,renderer:function(e,i){var n='<a href="javascript:void(0)" class="grid-content-btn grid-content-btn-edit btn-edit">';n+='<span class="icon"></span>';return'<a href="javascript:void(0)" class="grid-content-btn grid-content-btn-edit btn-edit"><span class="icon"></span><span class="text"></span></a><a href="javascript:void(0)" class="grid-content-btn btn-delete"><span class="icon"></span><span class="text"></span></a>'}}]}},{id:"ipv6-firewall-clients-grid",configs:{paging:{},columns:[{xtype:"checkcolumn",width:70},{text:c.su.CHAR.IPV6.TYPE,dataIndex:"type",width:100,renderer:function(e,i){var n="",p="";switch(e=(e=null==e?"pc":e).toLowerCase()){case"pc":n="icon-pc";break;case"phone":n="icon-phone";break;case"pad":n="icon-pad";break;case"camera":n="icon-camera";break;case"printer":n="icon-printer";break;case"other":n="icon-other";break;default:n="icon-"+e}return(p+='<div class="device-type-container widget-container">')+('<span class="icon '+n+' "></span>')+"</div>"}},{text:c.su.CHAR.IPV6.DEVICE_INFO,dataIndex:"name",width:160,renderer:function(e,i){return e+'<div class="independent-info">'+i.mac+"</div>"}},{text:c.su.CHAR.IPV6.INTERNAL_IP,dataIndex:"ip"}]}}]}),this.listen({"models.ipv6InternetM":{ev_loaded:function(e,i){p.oriConnType=i.conntype}},"models.ipv6InternetM.conntype":{ev_value_change:function(e,n,i){t.ipv6View.ipv6Dynamic.hide(),t.ipv6View.ipv6Pppoe.hide(),t.ipv6View.ipv6Static.hide(),t.ipv6View.ipv6Bridge.hide(),t.ipv6View.ipv66to4.hide(),t.ipv6View.ipv66rd.hide(),t.ipv6View.ipv6Dslite.hide(),t.ipv6View.ipv6Lan.show(),a.ipv6DynamicM.reset(),a.ipv6StaticM.reset(),a.ipv6PppoeM.reset(),a.ipv6BridgeM.reset(),a.ipv66to4M.reset(),a.ipv66rdM.reset(),a.ipv6DsliteM.reset(),"dhcpv6"!=n&&"dhcp6c"!=n||(t.ipv6View.ipv6Dynamic.show(),a.ipv6DynamicM.load({success:function(e,i){"prefix"==e.ip_mode?(p.prefixFlag=!0,a.ipv6LanM.dhcp_prefix.disable(),a.ipv6LanM.slaac_prefix.disable(),a.ipv6LanM.rdnss_prefix.disable()):(p.prefixFlag=!1,p.initLanPrefixStatus()),"1"!=e.nonaddress_support&&a.ipv6DynamicM.ip_config.hideItemContent(["non_address"],!0),p.changeButtonStatus(e.conn_status,t.ipv6View.dynamicRenewBtn,t.ipv6View.dynamicReleaseBtn),a.ipv6DynamicM.conntype.setValue("dhcp6c")}})),"staticv6"==n&&(p.prefixFlag=!1,t.ipv6View.ipv6Static.show(),a.ipv6StaticM.load({success:function(e,i){p.prefixFlag=!1,p.initLanPrefixStatus(),a.ipv6StaticM.conntype.setValue("staticv6")}})),"pppoev6"==n&&(t.ipv6View.ipv6Pppoe.show(),a.ipv6PppoeM.load({data:{pppflag:"v6",share:p.shareFlag},success:function(e,i){p.setShareFlag(e.pppshare),"specified"!=e.ip_config&&"prefix"==e.ip_mode?(p.prefixFlag=!0,a.ipv6LanM.dhcp_prefix.disable(),a.ipv6LanM.slaac_prefix.disable()):(p.prefixFlag=!1,p.initLanPrefixStatus()),p.changeButtonStatus(e.conn_status,t.ipv6View.pppoeConnBtn,t.ipv6View.pppoeDisconnBtn),a.ipv6PppoeM.conntype.setValue("pppoev6"),p.refreshIpv6Conn(n)}})),"passthrough"==n?(t.ipv6View.ipv6Lan.hide(),t.ipv6View.ipv6Bridge.show(),t.ipv6View.ipv6Firewall.hide(),a.ipv6BridgeM.load({success:function(e,i){a.ipv6BridgeM.conntype.setValue("passthrough")}})):!0===d.device.getConfig().supportIpv6Firewall&&(t.ipv6View.ipv6Firewall.show(),s.ipv6FirewallStore.load()),"6to4"==n&&(t.ipv6View.ipv66to4.show(),a.ipv66to4M.load({success:function(e,i){p.prefixFlag=!0,a.ipv6LanM.dhcp_prefix.disable(),a.ipv6LanM.slaac_prefix.disable(),a.ipv6LanM.rdnss_prefix.disable(),p.changeButtonStatus(e.conn_status,t.ipv6View.tunnelConnBtn,t.ipv6View.tunnelDisconnBtn),a.ipv66to4M.conntype.setValue("6to4")}})),"6rd"==n&&(t.ipv6View.ipv66rd.show(),a.ipv66rdM.load({success:function(e,i){a.ipv66rdM.conntype.setValue("6rd")}})),"dslite"==n&&(t.ipv6View.ipv6Dslite.show(),a.ipv6DsliteM.load({success:function(e,i){"dynamic"==e.snd_conn?("prefix"==e.dynamic_ip_mode?(p.prefixFlag=!0,a.ipv6LanM.dhcp_prefix.disable(),a.ipv6LanM.slaac_prefix.disable()):(p.prefixFlag=!1,a.ipv6LanM.dhcp_prefix.enable(),a.ipv6LanM.slaac_prefix.enable()),p.changeButtonStatus(e.conn_status,t.ipv6View.dsliteDynRenewBtn,t.ipv6View.dsliteDynRenewBtn)):"pppoev6"==e.snd_conn&&("specified"!=e.pppoe_ip_config&&"prefix"==e.pppoe_ip_mode?(p.prefixFlag=!0,a.ipv6LanM.dhcp_prefix.disable(),a.ipv6LanM.slaac_prefix.disable()):(p.prefixFlag=!1,a.ipv6LanM.dhcp_prefix.enable(),a.ipv6LanM.slaac_prefix.enable()),p.changeButtonStatus(e.conn_status,t.ipv6View.dslitePppoeConnBtn,t.ipv6View.dslitePppoeDisconnBtn)),a.ipv6DsliteM.conntype.setValue("dslite")}})),clearInterval(p.refreshIpv6Interval),p.oriConnType!=n&&0!=p.oriConnType||(p.refreshIpv6Conn(n),p.refreshIpv6Interval=setInterval(function(){p.refreshIpv6Conn(n)},3e3))}},"models.ipv6DynamicM.dns_mode":{ev_value_change:function(e,i){"dynamic"==i?(t.ipv6View.dynDDnsInputCnt.show(),t.ipv6View.staticDDnsInputCnt.hide()):"static"==i&&(t.ipv6View.staticDDnsInputCnt.show(),t.ipv6View.dynDDnsInputCnt.hide())}},"models.ipv6PppoeM.share":{ev_value_change:function(e,i){1==i?(a.ipv6PppoeM.username.disable(),a.ipv6PppoeM.username.hide(),a.ipv6PppoeM.password.disable(),a.ipv6PppoeM.password.hide()):(a.ipv6PppoeM.username.enable(),a.ipv6PppoeM.username.show(),a.ipv6PppoeM.password.enable(),a.ipv6PppoeM.password.show())}},"models.ipv6PppoeM.dns_mode":{ev_value_change:function(e,i){"dynamic"==i?(t.ipv6View.staticPDnsInputCnt.hide(),t.ipv6View.staticPDnsInputCnt.disable()):"static"==i&&(t.ipv6View.staticPDnsInputCnt.show(),t.ipv6View.staticPDnsInputCnt.enable())}},"models.ipv6PppoeM.ip_config":{ev_value_change:function(e,i){"specified"==i?(a.ipv6PppoeM.specific_ip.show(),a.ipv6PppoeM.specific_ip.enable(),a.ipv6PppoeM.ip_mode.hide(),a.ipv6PppoeM.ip_mode.disable(),p.prefixFlag=!1,p.initLanPrefixStatus()):(a.ipv6PppoeM.ip_mode.show(),a.ipv6PppoeM.ip_mode.enable(),a.ipv6PppoeM.specific_ip.hide(),a.ipv6PppoeM.specific_ip.disable(),"prefix"==a.ipv6PppoeM.ip_mode.getValue()?(p.prefixFlag=!0,a.ipv6LanM.dhcp_prefix.disable(),a.ipv6LanM.slaac_prefix.disable(),a.ipv6LanM.rdnss_prefix.disable()):(p.prefixFlag=!1,p.initLanPrefixStatus())),"non_address"==i?a.ipv6PppoeM.ip6addr.hide():a.ipv6PppoeM.ip6addr.show()}},"models.ipv6DynamicM.ip_config":{ev_value_change:function(e,i){"non_address"==i?a.ipv6DynamicM.ip6addr.hide():a.ipv6DynamicM.ip6addr.show()}},"models.ipv6PppoeM.ip_mode":{ev_value_change:function(e,i){"prefix"==i?(p.prefixFlag=!0,a.ipv6LanM.dhcp_prefix.disable(),a.ipv6LanM.slaac_prefix.disable(),a.ipv6LanM.rdnss_prefix.disable()):(p.prefixFlag=!1,p.initLanPrefixStatus())}},"models.ipv6DynamicM.ip_mode":{ev_value_change:function(e,i){"prefix"==i?(p.prefixFlag=!0,a.ipv6LanM.dhcp_prefix.disable(),a.ipv6LanM.slaac_prefix.disable(),a.ipv6LanM.rdnss_prefix.disable()):(p.prefixFlag=!1,p.initLanPrefixStatus())}},"models.ipv66to4M.dns_mode":{ev_value_change:function(e,i){"static"==i?(a.ipv66to4M.pri_dns.enable(),a.ipv66to4M.snd_dns.enable()):(a.ipv66to4M.pri_dns.disable(),a.ipv66to4M.snd_dns.disable())}},"models.ipv66rdM.ip_mode":{ev_value_change:function(e,i){"auto"==i?(a.ipv66rdM.ipv4_mask_len.enable(),a.ipv66rdM.prefix_6rd.enable(),a.ipv66rdM.prefix_len_6rd.enable(),a.ipv66rdM.relay_ipv4_addr.enable()):(a.ipv66rdM.ipv4_mask_len.disable(),a.ipv66rdM.prefix_6rd.disable(),a.ipv66rdM.prefix_len_6rd.disable(),a.ipv66rdM.relay_ipv4_addr.disable())}},"models.ipv6DsliteM.snd_conn":{ev_value_change:function(e,i){"dynamic"==i?(t.ipv6View.ipv6DsliteDynamic.show(),t.ipv6View.ipv6DsliteStatic.hide(),t.ipv6View.ipv6DslitePppoe.hide(),p.initDsliteDynamicAdv(!1)):"static"==i?(t.ipv6View.ipv6DsliteStatic.show(),t.ipv6View.ipv6DsliteDynamic.hide(),t.ipv6View.ipv6DslitePppoe.hide()):"pppoev6"==i&&(t.ipv6View.ipv6DslitePppoe.show(),t.ipv6View.ipv6DsliteDynamic.hide(),t.ipv6View.ipv6DsliteStatic.hide(),p.initDslitePPPoeAdv(!1))}},"models.ipv6DsliteM.dynamic_dns_mode":{ev_value_change:function(e,i){"dynamic"==i?(t.ipv6View.dsliteDynDDnsCnt.show(),t.ipv6View.dsliteStaticDDnsCnt.hide()):"static"==i&&(t.ipv6View.dsliteStaticDDnsCnt.show(),t.ipv6View.dsliteDynDDnsCnt.hide())}},"models.ipv6DsliteM.pppoe_dns_mode":{ev_value_change:function(e,i){"dynamic"==i?t.ipv6View.dsliteStaticPDnsCnt.hide():"static"==i&&t.ipv6View.dsliteStaticPDnsCnt.show()}},"models.ipv6DsliteM.pppoe_ip_config":{ev_value_change:function(e,i){("specified"==i?(a.ipv6DsliteM.pppoe_specific_ip.show(),a.ipv6DsliteM.pppoe_ip_mode):(a.ipv6DsliteM.pppoe_ip_mode.show(),a.ipv6DsliteM.pppoe_specific_ip)).hide()}},"models.ipv6LanM.assign_type":{ev_value_change:function(e,i){a.ipv6LanM.dhcp_prefix.hide(),a.ipv6LanM.release_time.hide(),a.ipv6LanM.dhcp_prefix.disable(),a.ipv6LanM.release_time.disable(),a.ipv6LanM.slaac_prefix.hide(),a.ipv6LanM.slaac_prefix.disable(),a.ipv6LanM.rdnss_prefix.hide(),a.ipv6LanM.rdnss_prefix.disable(),"dhcpv6"==i?(a.ipv6LanM.dhcp_prefix.show(),a.ipv6LanM.release_time.show(),a.ipv6LanM.release_time.enable()):"slaac"==i?a.ipv6LanM.slaac_prefix.show():"rdnss"==i&&a.ipv6LanM.rdnss_prefix.show(),p.initLanPrefixStatus()}},"models.ipv6MacClone.mac_clone_type":{ev_value_change:function(e,i){a.ipv6MacClone.mac_default.disable(),a.ipv6MacClone.mac_computer.disable(),a.ipv6MacClone.mac_custom.disable(),a.ipv6MacClone.mac_default.hide(),a.ipv6MacClone.mac_computer.hide(),a.ipv6MacClone.mac_custom.hide(),"default"==i?a.ipv6MacClone.mac_default.show():"computer"==i?a.ipv6MacClone.mac_computer.show():"custom"==i&&(a.ipv6MacClone.mac_custom.enable(),a.ipv6MacClone.mac_custom.show())}},"models.ipv6InternetM.enable":{ev_value_change:function(e,i,n){clearInterval(p.refreshIpv6Interval),i!=n&&("on"==i?("passthrough"==a.ipv6InternetM.conntype.getValue()&&t.ipv6View.ipv6Lan.show(),null!=n&&a.ipv6InternetM.submit({success:function(e){a.ipv6InternetM.conntype.enable(),a.ipv6InternetM.loadData(e)}})):"off"==i&&(t.ipv6View.ipv6Lan.hide(),a.ipv6InternetM.conntype.setValue(""),a.ipv6InternetM.conntype.disable(),null!=n)&&a.ipv6InternetM.submit({success:function(e){a.ipv6InternetM.conntype.setValue("")}}))}},"models.ipv6FirewallModel.type":{ev_value_change:function(e,i,n){function p(e,i){a.ipv6FirewallModel.port.setValue(e),a.ipv6FirewallModel.protocol.setValue(i)}switch(i){case"DNS":p(53,"ALL");break;case"FTP":p(21,"TCP");break;case"GOPHER":p(70,"TCP");break;case"HTTP":p(80,"TCP");break;case"NNTP":p(119,"TCP");break;case"POP3":p(110,"TCP");break;case"PPTP":p(1723,"ALL");break;case"SMTP":p(25,"TCP");break;case"SOCK":p(1080,"ALL");break;case"TELNET":p(23,"TCP")}}},"stores.ipv6FirewallStore":{ev_data_change:function(e,i,n){i.value!=i.oldValue&&"enable"==n.getName()&&s.ipv6FirewallStore.sync()}}}),this.control({"#dynamic-renew-btn":{ev_button_click:function(e){t.ipv6View.dynamicRenewBtn.loading(!0),d.ajax.request({proxy:"dynamicIPV6Proxy",method:"renew",success:function(e){t.ipv6View.dynamicRenewBtn.loading(!1),a.ipv6DynamicM.loadData(e),a.ipv6DynamicM.conntype.setValue("dhcp6c")}})}},"#dynamic-release-btn":{ev_button_click:function(e){t.ipv6View.dynamicReleaseBtn.loading(!0),d.ajax.request({proxy:"dynamicIPV6Proxy",method:"release",success:function(e){t.ipv6View.dynamicReleaseBtn.loading(!1),a.ipv6DynamicM.loadData(e),a.ipv6DynamicM.conntype.setValue("dhcp6c")}})}},"#pppoe-conn-btn":{ev_button_click:function(e){a.ipv6PppoeM.validate()&&(t.ipv6View.pppoeConnBtn.loading(!0),a.ipv6PppoeM.pppflag.setValue("v6"),a.ipv6PppoeM.submit({data:{operation:"connect"},success:function(){t.ipv6View.pppoeConnBtn.loading(!1),a.ipv6PppoeM.conntype.setValue("pppoev6")},fail:function(){t.ipv6View.pppoeConnBtn.loading(!1)},error:function(){t.ipv6View.pppoeConnBtn.loading(!1)}}))}},"#pppoe-disconn-btn":{ev_button_click:function(e){a.ipv6PppoeM.validate()&&(t.ipv6View.pppoeDisconnBtn.loading(!0),a.ipv6PppoeM.pppflag.setValue("v6"),a.ipv6PppoeM.getData("submit"),a.ipv6PppoeM.submit({data:{operation:"disconnect"},success:function(){t.ipv6View.pppoeDisconnBtn.loading(!1),a.ipv6PppoeM.conntype.setValue("pppoev6")},fail:function(){t.ipv6View.pppoeDisconnBtn.loading(!1)},error:function(){t.ipv6View.pppoeDisconnBtn.loading(!1)}}))}},"#tunnel-conn-btn":{ev_button_click:function(e){var i;a.ipv66to4M.validate()&&(t.ipv6View.tunnelConnBtn.loading(!0),i=a.ipv66to4M.getData("submit"),d.ajax.request({proxy:"tunnelIPV6Proxy",method:"connect",success:function(e){t.ipv6View.tunnelConnBtn.loading(!1),a.ipv66to4M.loadData(e||i),a.ipv6DynamicM.conntype.setValue("6to4")}}))}},"#tunnel-disconn-btn":{ev_button_click:function(e){var i;a.ipv66to4M.validate()&&(t.ipv6View.tunnelDisconnBtn.loading(!0),i=a.ipv66to4M.getData("submit"),d.ajax.request({proxy:"tunnelIPV6Proxy",method:"disconnect",success:function(e){t.ipv6View.tunnelDisconnBtn.loading(!1),a.ipv66to4M.loadData(e||i),a.ipv6DynamicM.conntype.setValue("6to4")}}))}},"#dslite-dynamic-renew-btn":{ev_button_click:function(e){t.ipv6View.dsliteDynRenewBtn.loading(!0),d.ajax.request({proxy:"dsliteIPV6Proxy",method:"renew",success:function(e){t.ipv6View.dsliteDynRenewBtn.loading(!1),a.ipv6DsliteM.loadData(e),a.ipv6DynamicM.conntype.setValue("dslite")}})}},"#dslite-dynamic-release-btn":{ev_button_click:function(e){t.ipv6View.dsliteDynReleaseBtn.loading(!0),d.ajax.request({proxy:"dsliteIPV6Proxy",method:"release",success:function(e){t.ipv6View.dsliteDynReleaseBtn.loading(!1),a.ipv6DsliteM.loadData(e),a.ipv6DynamicM.conntype.setValue("dslite")}})}},"#dslite-pppoe-conn-btn":{ev_button_click:function(e){var i;a.ipv6DsliteM.validate()&&(t.ipv6View.dslitePppoeConnBtn.loading(!0),i=a.ipv6DsliteM.getData("submit"),d.ajax.request({proxy:"dsliteIPV6Proxy",method:"connect",success:function(e){t.ipv6View.dslitePppoeConnBtn.loading(!1),a.ipv6DsliteM.loadData(e||i),a.ipv6DynamicM.conntype.setValue("dslite")}}))}},"#dslite-pppoe-disconn-btn":{ev_button_click:function(e){var i;a.ipv6DsliteM.validate()&&(t.ipv6View.dslitePppoeDisconnBtn.loading(!0),i=a.ipv6DsliteM.getData("submit"),d.ajax.request({proxy:"dsliteIPV6Proxy",method:"disconnect",success:function(e){t.ipv6View.dslitePppoeDisconnBtn.loading(!1),a.ipv6DsliteM.loadData(e||i),a.ipv6DynamicM.conntype.setValue("dslite")}}))}},"#dynamic-advanced-panel":{ev_panel_open:function(){p.initDynamicAdv(!0)},ev_panel_close:function(){p.initDynamicAdv(!1)}},"#pppoe-advanced-panel":{ev_panel_open:function(){p.initPPPoeAdv(!0)},ev_panel_close:function(){p.initPPPoeAdv(!1)}},"#dslite-dynamic-adv-panel":{ev_panel_open:function(){p.initDsliteDynamicAdv(!0)},ev_panel_close:function(){p.initDsliteDynamicAdv(!1)}},"#dslite-pppoe-adv-panel":{ev_panel_open:function(){p.initDslitePPPoeAdv(!0)},ev_panel_close:function(){p.initDslitePPPoeAdv(!1)}},".index-common-save-btn":{ev_will_auto_save:function(e,i){function n(){a.ipv6LanM.isDirty()&&a.ipv6LanM.submit(),a.ipv6MacClone.isDirty()&&a.ipv6MacClone.submit(),o.index.hideSaveBtn()}switch(i.preventDefault(),clearInterval(p.refreshIpv6Interval),a.ipv6InternetM.conntype.getValue()){case"dhcp6c":1==a.ipv6DynamicM.validate()&&(a.ipv6DynamicM.submit({success:function(e){p.oriConnType="dhcp6c",p.refreshIpv6Conn("dhcp6c"),p.refreshIpv6Interval=setInterval(function(){p.refreshIpv6Conn("dhcp6c")},3e3)}}),n());break;case"staticv6":1==a.ipv6StaticM.validate()&&(a.ipv6StaticM.submit(),n());break;case"pppoev6":1==a.ipv6PppoeM.validate()&&(a.ipv6PppoeM.submit({success:function(e){p.setShareFlag(e.pppshare),p.oriConnType="pppoev6",p.refreshIpv6Conn("pppoev6"),p.refreshIpv6Interval=setInterval(function(){p.refreshIpv6Conn("pppoev6")},3e3)}}),n());break;case"6to4":1==a.ipv66to4M.validate()&&(a.ipv66to4M.submit({success:function(e){p.oriConnType="6to4",p.refreshIpv6Conn("6to4"),p.refreshIpv6Interval=setInterval(function(){p.refreshIpv6Conn("6to4")},3e3)}}),n());break;case"passthrough":1==a.ipv6BridgeM.validate()&&(a.ipv6BridgeM.submit(),n());break;case"6rd":1==a.ipv66rdM.validate()&&(a.ipv66rdM.submit(),n());break;case"dslite":1==a.ipv6DsliteM.validate()&&(a.ipv6DsliteM.submit({success:function(e){p.oriConnType="dslite",p.refreshIpv6Conn("dslite"),p.refreshIpv6Interval=setInterval(function(){p.refreshIpv6Conn("dslite")},3e3)}}),n())}}},"#ipv6-firewall-clients-btn":{ev_button_click:function(e){s.ipv6FirewallClientsStore.load({data:{operation:"read"}}),t.ipv6View.firewallClientsMsg.show(),t.ipv6View.firewallClientsMsg.disableButton("ok")}},"#firewall-clients-msg":{ev_msg_ok:function(e){var i;0!=s.ipv6FirewallClientsStore.getSelected().length&&(i=s.ipv6FirewallClientsStore.getSelectedStoreData()[0].ip,a.ipv6FirewallModel.ip.setValue(i))},ev_msg_cancal:function(){}},"#ipv6-firewall-grid => a.btn-delete":{ev_grid_action_click:function(e,i){var i=s.ipv6FirewallStore.getIndex(i),n=s.ipv6FirewallStore.getDataByIndex(i).name;p.currentDeviceIndex=i,t.ipv6View.delRuleName.dom().find("div.paragraph-wrap-outer").text(c.su.CHAR.IPV6.RULE_DELETE_NAME.replace("%name%",n)),t.ipv6View.ruleDelMsg.show()}},"#rule-del-msg":{ev_msg_ok:function(){s.ipv6FirewallStore.removeDataByIndex(p.currentDeviceIndex),s.ipv6FirewallStore.sync()},ev_msg_no:function(){}},"#ipv6-firewall-clients-grid":{ev_grid_row_clicked:function(){t.ipv6View.firewallClientsMsg.enableButton("ok")}}})}},function(n,i,p,e,t,a){return n.prefixFlag=!1,n.shareFlag=0,n.refreshIpv6Interval,n.oriConnType=!1,n.currentDeviceIndex=0,{submit:function(){},initDynamicAdv:function(e){e?(i.ipv6View.dynAdvBasicCnt.show(),("dynamic"==p.ipv6DynamicM.dns_mode.getValue()?i.ipv6View.dynDDnsInputCnt:i.ipv6View.staticDDnsInputCnt).show()):(i.ipv6View.dynAdvBasicCnt.hide(),i.ipv6View.dynDDnsInputCnt.hide(),i.ipv6View.staticDDnsInputCnt.hide())},initPPPoeAdv:function(e){e?(i.ipv6View.pppoeAdvBasicCnt.show(),"dynamic"==p.ipv6PppoeM.dns_mode.getValue()?i.ipv6View.staticPDnsInputCnt.hide():i.ipv6View.staticPDnsInputCnt.show(),("specified"==p.ipv6PppoeM.ip_config.getValue()?(p.ipv6PppoeM.specific_ip.show(),p.ipv6PppoeM.specific_ip.enable(),p.ipv6PppoeM.ip_mode.hide(),p.ipv6PppoeM.ip_mode):(p.ipv6PppoeM.ip_mode.show(),p.ipv6PppoeM.ip_mode.enable(),p.ipv6PppoeM.specific_ip.hide(),p.ipv6PppoeM.specific_ip)).disable()):(i.ipv6View.pppoeAdvBasicCnt.hide(),i.ipv6View.staticPDnsInputCnt.hide())},initDsliteDynamicAdv:function(e){e?(i.ipv6View.dsliteDynAdvBasic.show(),("dynamic"==p.ipv6DsliteM.dynamic_dns_mode.getValue()?i.ipv6View.dsliteDynDDnsCnt:i.ipv6View.dsliteStaticDDnsCnt).show()):(i.ipv6View.dsliteDynAdvBasic.hide(),i.ipv6View.dsliteDynDDnsCnt.hide(),i.ipv6View.dsliteStaticDDnsCnt.hide())},initDslitePPPoeAdv:function(e){(e?(i.ipv6View.dslitePPPoeAdvBasic.show(),"static"==p.ipv6DsliteM.pppoe_dns_mode.getValue()&&i.ipv6View.dsliteStaticPDnsCnt.show(),"specified"==p.ipv6DsliteM.pppoe_ip_config.getValue()?(p.ipv6DsliteM.pppoe_specific_ip.show(),p.ipv6DsliteM.pppoe_ip_mode):(p.ipv6DsliteM.pppoe_ip_mode.show(),p.ipv6DsliteM.pppoe_specific_ip)):(i.ipv6View.dslitePPPoeAdvBasic.hide(),i.ipv6View.dsliteStaticPDnsCnt)).hide()},initLanPrefixStatus:function(){var e=p.ipv6LanM.assign_type.getValue();"dhcpv6"==e?n.prefixFlag?p.ipv6LanM.dhcp_prefix.disable():p.ipv6LanM.dhcp_prefix.enable():"slaac"==e?n.prefixFlag?p.ipv6LanM.slaac_prefix.disable():p.ipv6LanM.slaac_prefix.enable():"rdnss"==e&&(n.prefixFlag?p.ipv6LanM.rdnss_prefix.disable():p.ipv6LanM.rdnss_prefix.enable())},changeButtonStatus:function(e,i,n){switch(e.toUpperCase()){case"CONNECTED":i.disable(),n.enable();break;case"DISCONNECTED":i.enable(),n.disable();break;case"CONNECTING":i.enable(),n.enable()}},refreshIpv6Conn:function(e){switch(e){case"dhcp6c":a.ajax.request({proxy:"dynamicIPV6Proxy",method:"read",success:function(e){p.ipv6DynamicM.ip6addr.setValue(e.ip6addr.toUpperCase()),p.ipv6DynamicM.ip6addr.record(),p.ipv6DynamicM.ip6addr.setValue(e.ip6addr.toUpperCase()),p.ipv6DynamicM.pri_dns.setValue(e.pri_dns.toUpperCase()),p.ipv6DynamicM.pri_dns.record(),p.ipv6DynamicM.pri_dns.setValue(e.pri_dns.toUpperCase()),p.ipv6DynamicM.snd_dns.setValue(e.snd_dns.toUpperCase()),p.ipv6DynamicM.snd_dns.record(),p.ipv6DynamicM.snd_dns.setValue(e.snd_dns.toUpperCase()),p.ipv6DynamicM.dyn_pridns.setValue(e.dyn_pridns.toUpperCase()),p.ipv6DynamicM.dyn_pridns.record(),p.ipv6DynamicM.dyn_pridns.setValue(e.dyn_pridns.toUpperCase()),p.ipv6DynamicM.dyn_snddns.setValue(e.dyn_snddns.toUpperCase()),p.ipv6DynamicM.dyn_snddns.record(),p.ipv6DynamicM.dyn_snddns.setValue(e.dyn_snddns.toUpperCase()),n.changeButtonStatus(e.conn_status,i.ipv6View.dynamicRenewBtn,i.ipv6View.dynamicReleaseBtn),1!=e.nonaddress_support&&p.ipv6DynamicM.ip_config.hideItemContent(["non_address"],!0)}});break;case"pppoev6":a.ajax.request({proxy:"pppoeIPV6Proxy",method:"read",data:{pppflag:"v6",share:n.shareFlag},success:function(e){n.setShareFlag(e.pppshare),p.ipv6PppoeM.ip6addr.setValue(e.ip6addr.toUpperCase()),p.ipv6PppoeM.ip6addr.record(),p.ipv6PppoeM.ip6addr.setValue(e.ip6addr.toUpperCase()),n.changeButtonStatus(e.conn_status,i.ipv6View.pppoeConnBtn,i.ipv6View.pppoeDisconnBtn),1!=e.nonaddress_support&&p.ipv6PppoeM.ip_config.hideItemContent(["non_address"],!0)}});break;case"6to4":a.ajax.request({proxy:"tunnelIPV6Proxy",method:"read",success:function(e){p.ipv66to4M.ipaddr.setValue(e.ipaddr.toUpperCase()),p.ipv66to4M.ipaddr.record(),p.ipv66to4M.ipaddr.setValue(e.ipaddr.toUpperCase()),p.ipv66to4M.netmask.setValue(e.netmask.toUpperCase()),p.ipv66to4M.netmask.record(),p.ipv66to4M.netmask.setValue(e.netmask.toUpperCase()),p.ipv66to4M.gateway.setValue(e.gateway.toUpperCase()),p.ipv66to4M.gateway.record(),p.ipv66to4M.gateway.setValue(e.gateway.toUpperCase()),p.ipv66to4M.tunnel_addr.setValue(e.tunnel_addr.toUpperCase()),p.ipv66to4M.tunnel_addr.record(),p.ipv66to4M.tunnel_addr.setValue(e.tunnel_addr.toUpperCase()),n.changeButtonStatus(e.conn_status,i.ipv6View.tunnelConnBtn,i.ipv6View.tunnelDisconnBtn)}});break;case"dslite":a.ajax.request({proxy:"dsliteIPV6Proxy",method:"read",success:function(e){"dynamic"==e.snd_conn?(p.ipv6DsliteM.dynamic_ip6addr.setValue(e.dynamic_ip6addr.toUpperCase()),p.ipv6DsliteM.dynamic_ip6addr.record(),p.ipv6DsliteM.dynamic_ip6addr.setValue(e.dynamic_ip6addr.toUpperCase()),p.ipv6DsliteM.dynamic_pri_dns.setValue(e.dynamic_pri_dns.toUpperCase()),p.ipv6DsliteM.dynamic_pri_dns.record(),p.ipv6DsliteM.dynamic_pri_dns.setValue(e.dynamic_pri_dns.toUpperCase()),p.ipv6DsliteM.dynamic_snd_dns.setValue(e.dynamic_snd_dns.toUpperCase()),p.ipv6DsliteM.dynamic_snd_dns.record(),p.ipv6DsliteM.dynamic_snd_dns.setValue(e.dynamic_snd_dns.toUpperCase()),p.ipv6DsliteM.dynamic_dyn_pridns.setValue(e.dynamic_dyn_pridns.toUpperCase()),p.ipv6DsliteM.dynamic_dyn_pridns.record(),p.ipv6DsliteM.dynamic_dyn_pridns.setValue(e.dynamic_dyn_pridns.toUpperCase()),p.ipv6DsliteM.dynamic_dyn_snddns.setValue(e.dynamic_dyn_snddns.toUpperCase()),p.ipv6DsliteM.dynamic_dyn_snddns.record(),p.ipv6DsliteM.dynamic_dyn_snddns.setValue(e.dynamic_dyn_snddns.toUpperCase())):"pppoev6"==e.snd_conn&&(p.ipv6DsliteM.pppoe_ip6addr.setValue(e.pppoe_ip6addr.toUpperCase()),p.ipv6DsliteM.pppoe_ip6addr.record(),p.ipv6DsliteM.pppoe_ip6addr.setValue(e.pppoe_ip6addr.toUpperCase()))}});break;default:return}},refreshLan:function(e){a.polling.poll(p.ipv6LanM,"load",{data:{},success:function(e,i){n.initLanPrefixStatus()},fail:function(e){a.polling.stopPolling(p.ipv6LanM,n)}},1e4,!1,n)},beforeDestroy:function(){clearInterval(n.refreshIpv6Interval),a.polling.stopPolling(p.ipv6LanM,n)},setShareFlag:function(e){null!=typeof e?(n.shareFlag=1==e?1:0,p.ipv6PppoeM.share.show(),p.ipv6PppoeM.share.enable(),0!=e&&3==e?p.ipv6PppoeM.share.disable():p.ipv6PppoeM.share.enable()):(n.shareFlag=0,p.ipv6PppoeM.share.hide())}}})}(jQuery);