!function(R){R.su.moduleManager.define("pptp",{services:["ajax","device"],stores:["pptpGridStore","accessStore","pptpEncryptionStore","wanStore","dhcpAddressList"],models:["pptpVpnModel","dhcpServer","openVpnModel","l2tpIpsecModel"],deps:["utils","main"],views:["pptpView"],listeners:{ev_on_launch:function(e,t,p,r,n,o,d){r.pptpVpnModel.load(),n.pptpGridStore.load(),r.openVpnModel.load(),r.dhcpServer.load(),n.dhcpAddressList.load(),d.device.getConfig().supportL2tpIpsec&&r.l2tpIpsecModel.load()}},init:function(l,n,u,P,_,V){var o,d;this.configViews({id:"pptpView",items:[{id:"grid-pptp",configs:{minLines:0,popEditor:{addTitle:R.su.CHAR.VPN_SERVER_PPTP.ADD_ACCOUNT,editTitle:R.su.CHAR.VPN_SERVER_PPTP.EDIT_ACCOUNT,addBtnText:R.su.CHAR.OPERATION.ADD_UPPERCASE,editBtnText:R.su.CHAR.OPERATION.ADD_UPPERCASE,content:"#grid-pptp-popEditor",fields:[{name:"username"},{name:"password"}]},paging:{},columns:[{text:R.su.CHAR.VPN_SERVER_PPTP.USERNAME,dataIndex:"username"},{text:R.su.CHAR.VPN_SERVER_PPTP.PASSWORD,dataIndex:"password",cls:"password-td",xtype:"customWidget",widgetName:"password",settings:{labelField:null,readOnly:!0}},{xtype:"actioncolumn",text:R.su.CHAR.VPN_SERVER_PPTP.MODIFY,renderer:function(e,t){var p='<a href="javascript:void(0)" class="grid-content-btn grid-content-btn-edit btn-edit">';p+='<span class="icon"></span>';return'<a href="javascript:void(0)" class="grid-content-btn grid-content-btn-edit btn-edit"><span class="icon"></span><span class="text"></span></a><a href="javascript:void(0)" class="grid-content-btn grid-content-btn-delete btn-delete"><span class="icon"></span><span class="text"></span></a>'}}]}}]}),this.listen({"models.pptpVpnModel.enable":{ev_value_change:function(e,t){"on"===t?n.pptpView.pptpFieldset.show():n.pptpView.pptpFieldset.hide()}},"models.pptpVpnModel":{ev_loaded:function(e,t){d=t.enable},ev_model_submit_complete:function(e,t,p){"success"==t&&(d=p.enable)}}}),this.control({".index-common-save-btn":{ev_will_auto_save:function(e,t){var p=u.pptpVpnModel.fromIpAddr.getValue(),r=u.pptpVpnModel.toIpAddr.getValue(),n=u.dhcpServer.ipaddrStart.getValue(),o=(u.dhcpServer.ipaddrEnd.getValue(),P.dhcpAddressList.getData()),d=u.openVpnModel.subnet.getValue(),s=(u.openVpnModel.mask.getValue(),P.pptpGridStore.getData()),i=u.pptpVpnModel.enable.getValue();if(u.pptpVpnModel.fromIpAddr.setNormal(),u.pptpVpnModel.toIpAddr.setNormal(),!0!==l.validateIpRange())return t.preventDefault(),!1;if(R.su.ipToInt(p)>R.su.ipToInt(r))return u.pptpVpnModel.toIpAddr.setError(R.su.CHAR.VPN_SERVER_PPTP.IP_RANGE),t.preventDefault(),!1;if(10<=R.su.ipToInt(r)-R.su.ipToInt(p))return u.pptpVpnModel.toIpAddr.setError(R.su.CHAR.VPN_SERVER_PPTP.PORT_RANGE_OUT),t.preventDefault(),!1;if(_.utils.isSameNet(p,n,"255.255.255.0"))return u.pptpVpnModel.fromIpAddr.setError(R.su.CHAR.VPN_SERVER_PPTP.CONFLICT_WITH_DHCP),t.preventDefault(),!1;if(_.utils.isSameNet(r,n,"255.255.255.0"))return u.pptpVpnModel.toIpAddr.setError(R.su.CHAR.VPN_SERVER_PPTP.CONFLICT_WITH_DHCP),t.preventDefault(),!1;for(var a=0;a<o.length;a++)if(R.su.ipToInt(o[a].ip)>=R.su.ipToInt(p)&&R.su.ipToInt(o[a].ip)<=R.su.ipToInt(r))return u.pptpVpnModel.toIpAddr.setError(R.su.CHAR.VPN_SERVER_PPTP.CONFLICT_WITH_RESERVED),t.preventDefault(),!1;if(_.utils.isSameNet(p,d,"255.255.255.0"))return u.pptpVpnModel.fromIpAddr.setError(R.su.CHAR.VPN_SERVER_PPTP.CONFLICT_WITH_OPENVPN),t.preventDefault(),!1;if(_.utils.isSameNet(r,d,"255.255.255.0"))return u.pptpVpnModel.toIpAddr.setError(R.su.CHAR.VPN_SERVER_PPTP.CONFLICT_WITH_OPENVPN),t.preventDefault(),!1;if(V.device.getConfig().supportL2tpIpsec){if(n=u.l2tpIpsecModel.fromIpAddr.getValue(),u.l2tpIpsecModel.toIpAddr.getValue(),_.utils.isSameNet(p,n,"255.255.255.0"))return u.pptpVpnModel.fromIpAddr.setError(R.su.CHAR.VPN_SERVER_PPTP.CONFLICT_WITH_L2TPVPN),t.preventDefault(),!1;if(_.utils.isSameNet(r,n,"255.255.255.0"))return u.pptpVpnModel.toIpAddr.setError(R.su.CHAR.VPN_SERVER_PPTP.CONFLICT_WITH_L2TPVPN),t.preventDefault(),!1}return 0!=s.length||"on"!=i||(_.main.showNotice(R.su.CHAR.VPN_SERVER_PPTP.NO_ACCOUNT_TIP,1),t.preventDefault(),!1)}},"#ipaddr-start":{ev_textbox_focus:function(){u.pptpVpnModel.fromIpAddr.setNormal(),u.pptpVpnModel.toIpAddr.setNormal()},ev_textbox_blur:function(){l.validateIpRange()}},"#ipaddr-end":{ev_textbox_focus:function(){u.pptpVpnModel.fromIpAddr.setNormal(),u.pptpVpnModel.toIpAddr.setNormal()},ev_textbox_blur:function(){l.validateIpRange()}},"#grid-pptp":{ev_grid_before_item_delete:function(e,t,p){var r=P.pptpGridStore.getData();o=p,t.preventDefault(),("on"==d&&1==r.length?n.pptpView.deleteAccountAlert:n.pptpView.deleteAccountConfirm).show()},ev_grid_before_save:function(e,t){for(var p=P.pptpGridStore.getEditingModel(),r=P.pptpGridStore.getStoreData(),n=p.username.getValue(),o=p.key.getValue(),d=0;d<r.length;d++)if(n===r[d].username&&o!=r[d].key)return p.username.setError(R.su.CHAR.VPN_SERVER_PPTP.USERNAME_CONFLICT),t.preventDefault(),!1;return!0}},"#delete-account-confirm":{ev_msg_ok:function(e){P.pptpGridStore.getData();P.pptpGridStore.removeDataByKey(o),P.pptpGridStore.sync()}}})}},function(e,t,p,r,n,o){return{validateIpRange:function(){var e=p.pptpVpnModel.fromIpAddr.getValue(),t=p.pptpVpnModel.toIpAddr.getValue();return R.su.ipToInt(e)>R.su.ipToInt(t)?(p.pptpVpnModel.toIpAddr.setError(R.su.CHAR.VPN_SERVER_PPTP.IP_RANGE),R.su.CHAR.VPN_SERVER_PPTP.IP_RANGE):!(10<=R.su.ipToInt(t)-R.su.ipToInt(e))||(p.pptpVpnModel.toIpAddr.setError(R.su.CHAR.VPN_SERVER_PPTP.PORT_RANGE_OUT),R.su.CHAR.VPN_SERVER_PPTP.PORT_RANGE_OUT)}}})}(jQuery);