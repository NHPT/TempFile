jQuery.su.moduleManager.define("lanAdv",{services:["moduleLoader","moduleManager","ajax","device"],models:["lanAdvLanModel","lanAdvLinkAggModel"],deps:["main"],views:["lanAdvView"],listeners:{ev_on_launch:function(n,e,a,l,o,t,d){this.hasLinkAgg()&&d.moduleLoader.load({module:"lanAdv"},{module:"lanAdvLinkAgg"},a.lanAdvView.lanAdvLinkAggLoader),this.hasLan()&&d.moduleLoader.load({module:"lanAdv"},{module:"lanAdvLan"},a.lanAdvView.lanAdvLanLoader)}},init:function(n,r,u,e,a,v){this.configViews({id:"lanAdvView",items:[{id:"lan-adv-link-agg-loader"},{id:"lan-adv-lan-loader"}]}),this.control({".index-common-save-btn":{ev_will_auto_save:function(n,e){e.preventDefault();var a,l=0,e=u.lanAdvLinkAggModel.enableAgg.getValue(),o=u.lanAdvLinkAggModel.ports.getValue();for(a in o)o[a]&&l++;var t,d=u.lanAdvLanModel.isDirty(),i=u.lanAdvLinkAggModel.isDirty(),s=u.lanAdvLanModel.ipaddr.isDirty(),A=v.moduleManager.get("lanAdvLan");u.lanAdvLanModel.validate()&&("1"==e&&l<2?r.lanAdvView.lanSelectTwoMsg.show():!d&&i?v.device.getConfig().supportLanAggCfg?u.lanAdvLinkAggModel.submit():r.lanAdvView.lanAdvRebootMsg.show():d&&!i?A.lanValidate()&&(s?r.lanAdvView.lanIpChangeMsg.show():(t=this,r.lanAdvView.lanAdvRebootAnimate.show(),u.lanAdvLanModel.submit({success:function(){setTimeout(function(){r.lanAdvView.lanAdvRebootAnimate.close(function(){t.goToNewUrl()})},4e4)},fail:function(){r.lanAdvView.lanAdvRebootAnimate.close()},error:function(){r.lanAdvView.lanAdvRebootAnimate.close()}}))):A.lanValidate()&&r.lanAdvView.lanAdvIPRebootMsg.show())}},"#lan-ip-change .btn-msg-ok":{ev_button_click:function(){var n=this;u.lanAdvLinkAggModel.enableAgg.getValue();r.lanAdvView.lanAdvRebootAnimate.show(),u.lanAdvLanModel.submit({success:function(){setTimeout(function(){r.lanAdvView.lanAdvRebootAnimate.close(function(){n.goToNewUrl()})},4e4)},fail:function(){r.lanAdvView.lanAdvRebootAnimate.close()},error:function(){r.lanAdvView.lanAdvRebootAnimate.close()}})}},"#lan-reboot .btn-msg-ok":{ev_button_click:function(){u.lanAdvLinkAggModel.submit({success:function(){v.ajax.request({proxy:"rebootProxy",success:function(n){n=n.rebootTime?1e3*n.rebootTime:75e3;a.main.startReboot(n)}})}})}},"#lan-IPreboot .btn-msg-ok":{ev_button_click:function(){var e=this;u.lanAdvLinkAggModel.submit(),u.lanAdvLanModel.submit({success:function(){v.ajax.request({proxy:"rebootProxy",success:function(n){n=n.rebootTime?1e3*n.rebootTime:75e3;a.main.startReboot(n,function(){e.goToNewUrl()})}})}})}}})}},function(n,e,a,l,o,t){return{hasLinkAgg:function(){return t.device.getLanAgg()},hasLan:function(){return!0},goToNewUrl:function(n){location.href="http://tplinkwifi.net"}}}),function(i){i.su.moduleManager.define("lanAdvLan",{services:[],deps:["utils"],models:["lanAdvLanModel","lanAdvWanModel"],stores:["lanAdvSubnetCombo"],views:["lanAdvLanView"],listeners:{ev_on_launch:function(n,a,e,l,o,t,d){l.lanAdvLanModel.load({success:function(){a.ipValOrigin=l.lanAdvLanModel.ipaddr.getValue()}}),l.lanAdvWanModel.load({success:function(){a.wanIP=l.lanAdvWanModel.wanIpv4Ipaddr.getValue(),a.wanMask=l.lanAdvWanModel.wanIpv4Netmask.getValue(),a.connType=l.lanAdvWanModel.wanIpv4Conntype.getValue();var n=l.lanAdvWanModel.wanIpv4SndIpaddr.getValue(),e=l.lanAdvWanModel.wanIpv4SndNetmask.getValue();a.wanSndIP=null!=n?n:0,a.wanSndMask=null!=e?e:0}})}},init:function(n,e,l,a,o,t){this.listen({"models.lanAdvLanModel.maskType":{ev_value_change:function(n,e,a){3===e?(l.lanAdvLanModel.customValue.show(),l.lanAdvLanModel.customValue.enable()):(l.lanAdvLanModel.customValue.hide(),l.lanAdvLanModel.customValue.disable())}}}),this.control()}},function(l,n,o,t,d,e){return{lanValidate:function(){var n=o.lanAdvLanModel.ipaddr.getValue(),e=o.lanAdvLanModel.maskType.getValue(),e=(maskStr=3===e?o.lanAdvLanModel.customValue.getValue():t.lanAdvSubnetCombo.getData()[e].name,d.utils.isSameNet(l.wanIP,n,l.wanMask)),a=d.utils.isSameNet(n,l.wanIP,maskStr);return e||a?(o.lanAdvLanModel.ipaddr.setError(i.su.CHAR.ERROR["00000060"]),!1):!d.utils.isNetIpLegal(n,maskStr)||d.utils.isNetIp(n,maskStr)||d.utils.isBroadCastIp(n,maskStr)?(o.lanAdvLanModel.ipaddr.setError(i.su.CHAR.ERROR["00000059"]),!1):"l2tp"!=l.connType&&"pptp"!=l.connType&&"pppoe"!=l.connType||0==l.wanSndIP||0==l.wanSndMask||!d.utils.isSameNet(n,l.wanSndIP,l.wanSndMask)&&!d.utils.isSameNet(l.wanSndIP,n,maskStr)||(o.lanAdvLanModel.ipaddr.setError(i.su.CHAR.ERROR["00000060"]),!1)}}})}(jQuery),function(n){n.su.modelManager.define("lanAdvLanModel",{type:"model",fields:[{name:"macaddr"},{name:"ipaddr",vtype:"ip",allowBlank:!1},{name:"maskType",mapping:"mask_type"},{name:"customValue",mapping:"custom_value",allowBlank:!1,vtype:"netmask",defaultValue:"255.255.255.0"}],convert:function(n){var e={};switch(e.macaddr=n.macaddr,e.ipaddr=n.ipaddr,n.mask_type){case"255.255.255.0":e.mask_type=0;break;case"255.255.0.0":e.mask_type=1;break;case"255.0.0.0":e.mask_type=2;break;default:e.mask_type=3}return e.custom_value=n.custom_value,e.lan_type=n.lan_type,e},serialize:function(n){var e={};switch(e.macaddr=n.macaddr,e.ipaddr=n.ipaddr,n.mask_type){case 0:e.mask_type="255.255.255.0";break;case 1:e.mask_type="255.255.0.0";break;case 2:e.mask_type="255.0.0.0";break;default:e.mask_type="custom"}return e.custom_value=n.custom_value,e.lan_type=n.lan_type,e},proxy:{url:n.su.url("/admin/network?form=lan_ipv4")}}),n.su.modelManager.define("lanAdvWanModel",{type:"model",fields:[{name:"wanIpv4Ipaddr",mapping:"wan_ipv4_ipaddr"},{name:"wanMacaddr",mapping:"wan_macaddr"},{name:"wanIpv4Netmask",mapping:"wan_ipv4_netmask"},{name:"wanIpv4Gateway",mapping:"wan_ipv4_gateway"},{name:"wanIpv4Pridns",mapping:"wan_ipv4_pridns"},{name:"wanIpv4Snddns",mapping:"wan_ipv4_snddns"},{name:"wanIpv4Conntype",mapping:"wan_ipv4_conntype"},{name:"lanIpv4Ipaddr",mapping:"lan_ipv4_ipaddr"},{name:"lanIpv4Netmask",mapping:"lan_ipv4_netmask"},{name:"lanMacaddr",mapping:"lan_macaddr"},{name:"lanIpv4DhcpEnable",mapping:"lan_ipv4_dhcp_enable"},{name:"wanIpv4SndIpaddr",mapping:"wan_ipv4_snd_ipaddr"},{name:"wanIpv4SndNetmask",mapping:"wan_ipv4_snd_netmask"}],proxy:{url:n.su.url("/admin/network?form=status_ipv4")}}),n.su.storeManager.define("lanAdvSubnetCombo",{type:"store",fields:[{name:"name"},{name:"value"},{name:"boxlabel"}],data:[{name:"255.255.255.0",value:0,boxlabel:"255.255.255.0"},{name:"255.255.0.0",value:1,boxlabel:"255.255.0.0"},{name:"255.0.0.0",value:2,boxlabel:"255.0.0.0"},{name:n.su.CHAR.NETWORK_LAN.CUSTOM,value:3,boxlabel:"custom"}]})}(jQuery),function(u){u.su.moduleManager.define("lanAdvLinkAgg",{services:["device"],models:["lanAdvLinkAggModel","iptvVlan"],stores:["lanAdvLinkModeCombo","lanAdvLinkPortsStore","lanAdvHashModeCombo","iptvVlanStore"],views:["lanAdvLinkAggView"],listeners:{ev_on_launch:function(n,e,a,l,o,t,d){e.isConfigurable()&&(a.lanAdvLinkAggView.lanAdvLinkAggPanel.setInstruction(u.su.CHAR.NETWORK_LAN.LINK_CONFIG_INSTRUCTION),a.lanAdvLinkAggView.lanAdvLinkAggContent.show(),a.lanAdvLinkAggView.lanAdvLinkAggContent.enable()),e.isLanAggCfgOnlyMode()&&(a.lanAdvLinkAggView.lanAdvLinkAggPanel.setInstruction(u.su.CHAR.NETWORK_LAN.LINK_INSTRUCTION),a.lanAdvLinkAggView.lanAdvLinkAggContent.show(),a.lanAdvLinkAggView.lanAdvLinkAggContent.enable(),l.lanAdvLinkAggModel.ports.hide()),l.lanAdvLinkAggModel.enableAgg.enable(),l.lanAdvLinkAggModel.load({success:function(){var n;"on"==l.iptvVlan.enable.getValue()&&(l.lanAdvLinkAggModel.enableAgg.disable(),n=u.su.CHAR.NETWORK_LAN.LAN_DISABLE_TIPS.replace("%function%",'<a href="#iptvAdv">'+u.su.CHAR.NETWORK_LAN.IPTV+"</a>"),l.lanAdvLinkAggModel.enableAgg.setTips(n),e.isConfigurable())&&a.lanAdvLinkAggView.lanAdvLinkAggContent.hide()}})}},init:function(t,d,s,n,e,a){this.configViews({id:"lanAdvLinkAggView",items:[{id:"lan-adv-link-agg-content"}]});var A,r=[];s.iptvVlan.load({success:function(n){A="on"==n.enable&&!a.device.getLanIptv(),r[0]="Internet"!=n.lan1&&A?1:0,r[1]="Internet"!=n.lan2&&A?1:0,r[2]="Internet"!=n.lan3&&A?1:0,r[3]="Internet"!=n.lan4&&A?1:0}}),this.control(),this.listen({"models.lanAdvLinkAggModel.enableAgg":{ev_value_change:function(n,e,a){if(t.isConfigurable())if("0"==e)d.lanAdvLinkAggView.lanAdvLinkAggContent.hide();else{d.lanAdvLinkAggView.lanAdvLinkAggContent.show();for(var l=0,o=0;o<r.length;o++)0!=r[o]&&"on"==A&&(s.lanAdvLinkAggModel.ports.disableItem(o),l++);2<l&&(e=u.su.CHAR.NETWORK_LAN.LAN_ADVPORTS_TIPS_1+'<a href="#iptvAdv">'+u.su.CHAR.NETWORK_LAN.IPTV+"</a>"+u.su.CHAR.NETWORK_LAN.LAN_ADVPORTS_TIPS_2,s.lanAdvLinkAggModel.ports.setTips(e))}}},"models.lanAdvLinkAggModel.ports":{ev_value_change:function(n,e,a){for(var l=4,o=0,t=[],d=0;d<4;d++)0!=r[d]&&"on"==A&&l--;l<2?s.lanAdvLinkAggModel.ports.setTips(u.su.CHAR.NETWORK_LAN.LA_PORTS_TIPS):s.lanAdvLinkAggModel.ports.setTips("");for(var i=s.lanAdvLinkAggModel.ports.getValue(),d=0;d<4;d++)i["lan"+(d+1)]?(o++,t[d]=1):t[d]=0;if(2<=o)for(d=0;d<4;d++)t[d]||s.lanAdvLinkAggModel.ports.disableItem(d);else for(d=0;d<4;d++)0!=r[d]&&"on"==A||s.lanAdvLinkAggModel.ports.enableItem(d)}}})}},function(n,e,a,l,o,t){return{isConfigurable:function(){return!!t.device.getConfig().supportLanAggCfg},isLanAggCfgOnlyMode:function(){return!!t.device.getConfig().supportLanAggCfgOnlyMode}}})}(jQuery),function(e){e.su.modelManager.define("lanAdvLinkAggModel",{type:"model",fields:[{name:"enableAgg",mapping:"enable_agg",defaultValue:"0"},{name:"lacpmode"},{name:"hashmode"},{name:"ports"},{name:"LAN1"},{name:"LAN2"},{name:"LAN3"},{name:"LAN4"}],convert:function(n){var e={};return e.enable_agg=n.enable_agg,e.lacpmode=n.lacpmode,e.hashmode=n.hashmode,e.ports={lan1:"1"==n.LAN1,lan2:"1"==n.LAN2,lan3:"1"==n.LAN3,lan4:"1"==n.LAN4},e},serialize:function(n){var e={};return e.enable_agg=n.enable_agg,e.lacpmode=n.lacpmode,e.hashmode=n.hashmode,e["LAN1"]=n.ports.lan1?"1":"0",e["LAN2"]=n.ports.lan2?"1":"0",e["LAN3"]=n.ports.lan3?"1":"0",e["LAN4"]=n.ports.lan4?"1":"0",e},proxy:{url:e.su.url("/admin/network?form=lan_agg")}}),e.su.storeManager.define("lanAdvLinkModeCombo",{type:"store",fields:[{name:"name"},{name:"value"},{name:"boxlabel"}],data:[{name:e.su.CHAR.NETWORK_LAN.Static_LAG,value:0,boxlabel:"Static LAG"},{name:e.su.CHAR.NETWORK_LAN.LACP,value:1,boxlabel:"LACP"}]}),e.su.storeManager.define("lanAdvHashModeCombo",{type:"store",fields:[{name:"name"},{name:"value"},{name:"boxlabel"}],data:[{name:e.su.CHAR.NETWORK_LAN.SRC_DST,value:0,boxlabel:"SRC_DST"},{name:e.su.CHAR.NETWORK_LAN.SRC,value:1,boxlabel:"SRC"},{name:e.su.CHAR.NETWORK_LAN.DST,value:2,boxlabel:"DST"}]}),e.su.storeManager.define("lanAdvLinkPortsStore",{type:"store",fields:[{name:"name"},{name:"value"},{name:"boxlabel"}],data:[{name:"lan1",value:0,boxlabel:"LAN1"},{name:"lan2",value:1,boxlabel:"LAN2"},{name:"lan3",value:2,boxlabel:"LAN3"},{name:"lan4",value:3,boxlabel:"LAN4"}],proxy:null}),e.su.define("rebootProxy",{extend:"IPFProxy",url:e.su.url("/admin/system?form=reboot"),preventSuccessEvent:!0,writeFilter:function(n){return e.extend({operation:"write"},n)},readFilter:function(n){return{rebootTime:(n=n.data).reboot_time}}})}(jQuery);