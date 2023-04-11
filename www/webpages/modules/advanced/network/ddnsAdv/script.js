!function(l){l.su.moduleManager.define("ddnsAdv",{models:["ddnsAdv","ddnsAdvTplinkModel","ddnsAdvNoipModel","ddnsAdvDnydnsModel","ipv4Status"],stores:["serviceProviderStore"],services:["moduleManager","moduleLoader","ajax"],deps:["navigatorController","ddnsAdvTplink","ddnsAdvNoip","ddnsAdvDnydns"],views:["ddnsAdvView"],listeners:{ev_on_launch:function(e,d,n,t,s,i,a){this.unRegisterAutoSaveData([t.ddnsAdv,t.ddnsAdvTplinkModel,t.ddnsAdvNoipModel,t.ddnsAdvDnydnsModel]),t.ddnsAdv.provider.setTips(""),d.setDataFieldBind(t.ddnsAdv.available,"hide"),t.ddnsAdv.registerUrl.hide(),t.ipv4Status.load({ajax:{async:!1},success:function(){var e={dslite:l.su.CHAR.NETWORK_INTERNET.DSLITE_CONFLICT_TIPS,v6plus:l.su.CHAR.NETWORK_INTERNET.V6PLUS_CONFLICT_TIPS,ocn:l.su.CHAR.NETWORK_INTERNET.OCN_CONFLICT_TIPS}[t.ipv4Status.conntype.getValue()],n=t.ddnsAdv.provider;e&&(n.disable(),n.setTips(e),d.FEATURE_ENABLE=!1)}}),t.ddnsAdv.load()},ev_before_destroy:function(e,n,d,t,s,i,a){}},init:function(t,s,i,e,n,d){this.control({"#ddns-login-paragraph => .log-in-href":{click:function(){n.navigatorController.goTo("tpLinkCloud")}}}),this.listen({"models.ddnsAdv.provider":{ev_value_change:function(e,n,d){t.FEATURE_ENABLE&&(t.setDataFieldBind(s.ddnsAdvView.ddnsComboboxFS,"show"),t.switchProvider(n))}},"models.ddnsAdv.available":{ev_value_change:function(e,n,d){t.FEATURE_ENABLE&&this.setDataFieldBind(i.ddnsAdv.available,n?"hide":"show")}}})}},function(d,n,t,e,s,i){var a,r;return{FEATURE_ENABLE:!0,providerModels:["ddnsAdvTplinkModel","ddnsAdvNoipModel","ddnsAdvDnydnsModel"],providerModules:["ddnsAdvTplink","ddnsAdvNoip","ddnsAdvDnydns"],getStatus:function(e){var n=parseInt(t.ddnsAdv.provider.getValue()),n=d.providerModules[n];s[n].getStatus(e)},switchProvider:function(e){switch(this.setDataFieldBind(t.ddnsAdv.available,"hide"),e){case 0:t.ddnsAdv.registerUrl.hide(),t.ddnsAdv.registerUrl.setHtml(""),l.su.userInfo.token?d.switchDdnsType("ddnsAdvTplink"):(d.switchDdnsType(null),d.setDataFieldBind(t.ddnsAdv.available,"show"));break;case 1:t.ddnsAdv.registerUrl.show(),t.ddnsAdv.registerUrl.setHtml(l.su.CHAR.NETWORK_DDNS.DDNS_NOIP_REGISTER_NOTE),d.switchDdnsType("ddnsAdvNoip");break;case 2:t.ddnsAdv.registerUrl.show(),t.ddnsAdv.registerUrl.setHtml(l.su.CHAR.NETWORK_DDNS.DDNS_DNYDNS_REGISTER_NOTE),d.switchDdnsType("ddnsAdvDnydns");break;default:d.switchDdnsType(null)}},setModel:function(e,n){if("hide"===n||"show"===n||"enable"===n||"disable"===n){l.isArray(e)||(e=[e]);for(var d=0;d<e.length;d++){var t,s=e[d].getAllFields();for(t in s)s.hasOwnProperty(t)&&s[t][n]()}}},setDataFieldBind:function(e,n){if("hide"===n||"show"===n||"enable"===n||"disable"===n)for(var d=0,t=(e=l.isArray(e)?e:[e]).length;d<t;d++)e[d][n]()},switchDdnsType:(r=[],function(e){var n,d;void 0!==a&&(o(a).hide(),n=s[a].clearStatus)&&n(),null==e||(n=!1,d=o(e),0<=l.inArray(e,r)||(i.moduleLoader.load({module:"ddnsAdv"},{module:e},d),r.push(e),n=!0),d.show(),a=e,n)||(d=s[e].initStatus)&&d()})};function o(e){return n.ddnsAdvView[e+"Loader"]}})}(jQuery),function(e){e.su.modelManager.define("ddnsAdv",{type:"model",fields:[{name:"available"},{name:"enable",defaultValue:"off"},{name:"provider",convert:function(e){e="tp-link"==e?0:"noip"==e?1:2;return e},serialize:function(e){return 0==e?"tp-link":1==e?"no-ip":"dyndns"}},{name:"registerUrl"}],proxy:{url:e.su.url("/admin/ddns?form=provider")}}),e.su.storeManager.define("serviceProviderStore",{type:"store",fields:[{name:"name"},{name:"value"},{name:"selected"}],data:[{name:e.su.CHAR.NETWORK_DDNS.TP_LINK,value:0},{name:e.su.CHAR.NETWORK_DDNS.NO_IP,value:1},{name:e.su.CHAR.NETWORK_DDNS.DNYDNS,value:2}]})}(jQuery),function(r){r.su.moduleManager.define("ddnsAdvDnydns",{models:["ddnsAdv","ddnsAdvDnydnsModel"],stores:[],services:["moduleManager","ajax"],views:["ddnsAdvDnydnsView"],listeners:{ev_on_launch:function(e,n,d,t,s,i,a){this.unRegisterAutoSaveData([t.ddnsAdv,t.ddnsAdvDnydnsModel]),n.initStatus()},ev_before_destroy:function(e,n,d,t,s,i,a){n.stopInterval()}},init:function(d,e,t,n,s,i){this.control({"#ddns-dnydns-retry-btn":{ev_button_click:function(e){t.ddnsAdvDnydnsModel.validate()&&(d.getStatus("login"),this.startInterval())}},"#ddns-login-btn":{ev_button_click:function(e,n){i.moduleManager.get("ddnsAdv").getStatus("login")}},"#ddns-logout-btn":{ev_button_click:function(e){t.ddnsAdvDnydnsModel.getProxy().logout({success:function(e){var n;d.stopInterval(),void 0!==e.status&&null!==e.status&&(n=[(n=r.su.CHAR.NETWORK_DDNS).CONNECTED,n.NOT_LAUNCH,n.CONNECTING,n.INCORRECT_USERNAME_PASSWORD,n.INCORRECT_DOMAIN],t.ddnsAdvDnydnsModel.status.setValue(n[parseInt(e.status)]))}})}}}),this.listen({"models.ddnsAdv.enable":{ev_value_change:function(e,n,d){i.moduleManager.get("ddnsAdv").setModel(t.ddnsAdvDnydnsModel,"on"==n?"enable":"disable")}}})}},function(n,e,d,t,s,i){var a=null;return{initStatus:function(){d.ddnsAdvDnydnsModel.load({success:function(){d.ddnsAdv.provider.isDirty()&&d.ddnsAdvDnydnsModel.provider.setValue("dnydns"),n.startInterval()}}),i.moduleManager.get("ddnsAdv").setModel(d.ddnsAdvDnydnsModel,d.ddnsAdv.enable.getValue()?"enable":"disable")},getStatus:function(e){"refresh"!==e?d.ddnsAdvDnydnsModel.login({preventSuccessEvent:!0,success:function(e){d.ddnsAdv.provider.record(),n.statusSuccessDealer(e),null==a&&n.startInterval()},fail:n.statusFailDealer,error:n.statusFailDealer}):d.ddnsAdvDnydnsModel.getProxy().refresh({preventSuccessEvent:!0,success:n.statusSuccessDealer,fail:n.statusFailDealer,error:n.statusFailDealer})},stopStatus:function(){d.ddnsAdvDnydnsModel.getProxy().stop({preventSuccessEvent:!0}),this.stopInterval()},statusSuccessDealer:function(e){d.ddnsAdv.provider.isDirty()&&d.ddnsAdvDnydnsModel.provider.setValue("dnydns");var n,e=+e.status;0<=e&&e<=4&&(n=[(n=r.su.CHAR.NETWORK_DDNS).CONNECTED,n.NOT_LAUNCH,n.CONNECTING,n.INCORRECT_USERNAME_PASSWORD,n.INCORRECT_DOMAIN],d.ddnsAdvDnydnsModel.status.setValue(n[e]))},statusFailDealer:function(){n.stopStatus()},startInterval:function(){clearInterval(a),a=setInterval(function(){n.getStatus("refresh")},5e3)},stopInterval:function(){clearInterval(a),a=null},clearStatus:function(){n.stopInterval(),d.ddnsAdvDnydnsModel.reset()}}})}(jQuery),function(d){d.su.modelManager.define("ddnsAdvDnydnsModel",{type:"model",fields:[{name:"username",defaultValue:"",maxLength:128,allowBlank:!1},{name:"password",defaultValue:"",maxLength:128,allowBlank:!1},{name:"domain",defaultValue:"",allowBlank:!1,maxLength:64,minLength:1,vtype:"domain"},{name:"wanBind",mapping:"wan_bind",defaultValue:!1},{name:"status",defaultValue:0,convert:function(e){var n="";switch(e){case 0:n=d.su.CHAR.NETWORK_DDNS.CONNECTED;break;case 1:n=d.su.CHAR.NETWORK_DDNS.NOT_LAUNCH;break;case 2:n=d.su.CHAR.NETWORK_DDNS.CONNECTING;break;case 3:n=d.su.CHAR.NETWORK_DDNS.INCORRECT_USERNAME_PASSWORD;break;case 4:n=d.su.CHAR.NETWORK_DDNS.INCORRECT_DOMAIN}return n},serialize:function(e){var n=d.su.CHAR.NETWORK_DDNS;return[n.CONNECTED,n.NOT_LAUNCH,n.CONNECTING,n.INCORRECT_USERNAME_PASSWORD,n.INCORRECT_DOMAIN].indexOf(e)}},{name:"provider"}],serialize:function(e){return delete e.provider,e},proxy:"ddnsAdvDnydnsProxy",methods:{login:function(e){(e=e||{}).data=d.extend(e.data,{operation:"login"}),this.submit(e)}}}),d.su.define("ddnsAdvDnydnsProxy",{extend:"IPFProxy",url:d.su.url("/admin/ddns?form=dyndns"),api:{refresh:{writeFilter:function(e){return d.extend(e,{operation:"refresh"})}},stop:{writeFilter:function(e){return d.extend(e,{operation:"read"})}},logout:{writeFilter:function(e){return d.extend(e,{operation:"logout"})}}}})}(jQuery),function(r){r.su.moduleManager.define("ddnsAdvNoip",{models:["ddnsAdv","ddnsAdvNoipModel"],stores:[],services:["moduleManager","ajax"],views:["ddnsAdvNoipView"],listeners:{ev_on_launch:function(e,n,d,t,s,i,a){this.unRegisterAutoSaveData([t.ddnsAdv,t.ddnsAdvNoipModel]),n.initStatus()},ev_before_destroy:function(e,n,d,t,s,i,a){n.stopInterval()}},init:function(d,e,t,n,s,i){this.control({"#ddns-noip-retry-btn":{ev_button_click:function(e){t.ddnsAdvNoipModel.validate()&&(d.getStatus("login"),this.startInterval())}},"#no-ip-login-btn":{ev_button_click:function(e,n){i.moduleManager.get("ddnsAdv").getStatus("login")}},"#noip-logout-btn":{ev_button_click:function(e){t.ddnsAdvNoipModel.getProxy().logout({success:function(e){var n;d.stopInterval(),void 0!==e.status&&null!==e.status&&(n=[(n=r.su.CHAR.NETWORK_DDNS).CONNECTED,n.NOT_LAUNCH,n.CONNECTING,n.INCORRECT_USERNAME_PASSWORD,n.INCORRECT_DOMAIN],t.ddnsAdvNoipModel.status.setValue(n[parseInt(e.status)]))}})}}}),this.listen({"models.ddnsAdv.enable":{ev_value_change:function(e,n,d){i.moduleManager.get("ddnsAdv").setModel(t.ddnsAdvNoipModel,"on"==n?"enable":"disable")}}})}},function(n,e,d,t,s,i){var a=null;return{initStatus:function(){d.ddnsAdvNoipModel.load({success:function(){d.ddnsAdv.provider.isDirty()&&d.ddnsAdvNoipModel.provider.setValue("noip"),n.startInterval()}}),i.moduleManager.get("ddnsAdv").setModel(d.ddnsAdvNoipModel,d.ddnsAdv.enable.getValue()?"enable":"disable")},getStatus:function(e){"refresh"!==e?d.ddnsAdvNoipModel.login({preventSuccessEvent:!0,success:function(e){d.ddnsAdv.provider.record(),n.statusSuccessDealer(e),null==a&&n.startInterval()},fail:n.statusFailDealer,error:n.statusFailDealer}):d.ddnsAdvNoipModel.getProxy().refresh({preventSuccessEvent:!0,success:n.statusSuccessDealer,fail:n.statusFailDealer,error:n.statusFailDealer})},stopStatus:function(){d.ddnsAdvNoipModel.getProxy().stop({preventSuccessEvent:!0}),this.stopInterval()},statusFailDealer:function(){n.stopStatus()},statusSuccessDealer:function(e){d.ddnsAdv.provider.isDirty()&&d.ddnsAdvNoipModel.provider.setValue("noip");var n,e=+e.status;0<=e&&e<=4&&(n=[(n=r.su.CHAR.NETWORK_DDNS).CONNECTED,n.NOT_LAUNCH,n.CONNECTING,n.INCORRECT_USERNAME_PASSWORD,n.INCORRECT_DOMAIN],d.ddnsAdvNoipModel.status.setValue(n[e]))},startInterval:function(){clearInterval(a),a=setInterval(function(){n.getStatus("refresh")},5e3)},stopInterval:function(){clearInterval(a),a=null},clearStatus:function(){n.stopInterval(),d.ddnsAdvNoipModel.reset()}}})}(jQuery),function(d){d.su.modelManager.define("ddnsAdvNoipModel",{type:"model",fields:[{name:"username",defaultValue:"",maxLength:128,allowBlank:!1},{name:"password",defaultValue:"",maxLength:128,allowBlank:!1},{name:"domain",defaultValue:"",allowBlank:!1,maxLength:64,minLength:1,vtype:"domain"},{name:"wanBind",mapping:"wan_bind",defaultValue:!1},{name:"status",defaultValue:0,convert:function(e){var n="";switch(e){case 0:n=d.su.CHAR.NETWORK_DDNS.CONNECTED;break;case 1:n=d.su.CHAR.NETWORK_DDNS.NOT_LAUNCH;break;case 2:n=d.su.CHAR.NETWORK_DDNS.CONNECTING;break;case 3:n=d.su.CHAR.NETWORK_DDNS.INCORRECT_USERNAME_PASSWORD;break;case 4:n=d.su.CHAR.NETWORK_DDNS.INCORRECT_DOMAIN}return n},serialize:function(e){var n=d.su.CHAR.NETWORK_DDNS;return[n.CONNECTED,n.NOT_LAUNCH,n.CONNECTING,n.INCORRECT_USERNAME_PASSWORD,n.INCORRECT_DOMAIN].indexOf(e)}},{name:"provider"}],serialize:function(e){return delete e.provider,e},proxy:"ddnsAdvNoipProxy",methods:{login:function(e){(e=e||{}).data=d.extend(e.data,{operation:"login"}),this.submit(e)}}}),d.su.define("ddnsAdvNoipProxy",{extend:"IPFProxy",url:d.su.url("/admin/ddns?form=noip"),api:{refresh:{writeFilter:function(e){return d.extend(e,{operation:"refresh"})}},stop:{writeFilter:function(e){return d.extend(e,{operation:"read"})}},logout:{writeFilter:function(e){return d.extend(e,{operation:"logout"})}}}})}(jQuery),function(v){v.su.moduleManager.define("ddnsAdvTplink",{models:["ddnsAdv","ddnsAdvTplinkModel"],stores:["ddnsAdvTplinkStore"],services:["moduleManager","ajax"],views:["ddnsAdvTplinkView"],listeners:{ev_on_launch:function(e,n,d,t,s,i,a){this.unRegisterAutoSaveData([t.ddnsAdv,t.ddnsAdvTplinkModel]),n.initStatus()}},init:function(r,o,t,l,e,u){u.moduleManager.get("ddnsAdv").setDataFieldBind;this.configViews({id:"ddnsAdvTplinkView",items:[{id:"domain-device-list",configs:{tbar:{add:{text:v.su.CHAR.NETWORK_DDNS.REGISTER,index:0}},popEditor:{addTitle:v.su.CHAR.NETWORK_DDNS.REGISTER,content:"#domain-device-editor",fields:[{name:"domain"}]},paging:{},columns:[{text:v.su.CHAR.NETWORK_DDNS.DOMAIN_NAME,dataIndex:"domain"},{text:v.su.CHAR.NETWORK_DDNS.REGISTERED_DATE,dataIndex:"time"},{text:v.su.CHAR.NETWORK_DDNS.STATUS,renderer:function(e,n){return n.status}},{text:v.su.CHAR.NETWORK_DDNS.OPERATION,renderer:function(e,n){return"<a class='jump-label address-jump-label "+(n.current_domain?"current":"free")+"' domain=\""+n.domain+'" href="#dnsBind">'+(n.current_domain?v.su.CHAR.NETWORK_DDNS.UNBIND:v.su.CHAR.NETWORK_DDNS.BIND)+"</a>"}},{xtype:"actioncolumn",text:v.su.CHAR.OPERATION.DELETE,renderer:function(e,n){n='<a href="javascript:void(0)" class="grid-content-btn btn-delete grid-content-btn-delete '+(n.current_domain?"disabled":"")+'">';return(n+='<span class="icon"></span>')+'<span class="text"></span>'+"</a>"}}]}}]}),this.control({"#ddns-tplink-retry-btn":{ev_button_click:function(e){t.ddnsAdvTplinkModel.validate()&&this.startInterval()}},"#domain-device-list":{ev_grid_before_save:function(e,n){if(n.preventDefault(),t.ddnsAdvTplinkModel.validate())return l.ddnsAdvTplinkStore.getProxy().registerDomain({data:{domain:t.ddnsAdvTplinkModel.domain.getValue()+v.su.CHAR.NETWORK_DDNS.HOST_NAME_DOMAIN},success:function(e){l.ddnsAdvTplinkStore.getPlugin("popEditor").closeMsgBox(),l.ddnsAdvTplinkStore.load({success:function(e){r.setCurrentDomain(e)}})},fail:function(e,n){var d=l.ddnsAdvTplinkStore.getPlugin("popEditor"),t=(d.closeMsgBox(),o.ddnsAdvTplinkView.registerFailedText.setText(v.su.CHAR.ERROR[n.replace("-","E")]),o.ddnsAdvTplinkView.registerFailedMsg.show(),d.containerMsg.close(),d.getEditingId());grid.dom().triggerHandler("ev_grid_cancel",[t]),d.cancelEdit(),o.ddnsAdvTplinkView.registerFailedText.setText(v.su.CHAR.ERROR[n.replace("-","E")]),o.ddnsAdvTplinkView.registerFailedMsg.show()}}),!1},ev_grid_before_edit:function(e,d){o.ddnsAdvTplinkView.invalidText.setText(v.su.CHAR.NETWORK_DDNS.NO_INTERNET_CONNECTION),u.ajax.request({ajax:{async:!1},proxy:"checkDdnsInternetProxy",success:function(e,n){n&&!n.success&&(o.ddnsAdvTplinkView.internetInvalidMsg.show(),d.preventDefault())},fail:function(){o.ddnsAdvTplinkView.internetInvalidMsg.show(),d.preventDefault()},error:function(){o.ddnsAdvTplinkView.internetInvalidMsg.show(),d.preventDefault()}})},ev_grid_before_item_delete:function(e,n,d){n.preventDefault();var t=l.ddnsAdvTplinkStore.getModelByKey(d).getData();return o.ddnsAdvTplinkView.invalidText.setText(v.su.CHAR.NETWORK_DDNS.NO_INTERNET_CONNECTION),u.ajax.request({proxy:"checkDdnsInternetProxy",success:function(e,n){n&&!n.success?o.ddnsAdvTplinkView.internetInvalidMsg.show():u.ajax.request({url:v.su.url("/admin/ddns?form=tplink"),data:{operation:"remove",domain:t.domain},success:function(){l.ddnsAdvTplinkStore.load()}})},fail:function(){o.ddnsAdvTplinkView.internetInvalidMsg.show()},error:function(){o.ddnsAdvTplinkView.internetInvalidMsg.show()}}),!1}},"#domain-device-list => a.address-jump-label":{click:function(s){var i=l.ddnsAdvTplinkStore.getData(),a=i.length;o.ddnsAdvTplinkView.invalidText.setText(v.su.CHAR.NETWORK_DDNS.NO_INTERNET_CONNECTION),u.ajax.request({proxy:"checkDdnsInternetProxy",success:function(e,n){if(n&&!n.success)o.ddnsAdvTplinkView.internetInvalidMsg.show();else{var d=v(s.target).closest(".address-jump-label");if(-1<d.attr("class").indexOf("free"))for(var t=0;t<a;t++)if(1==i[t].current_domain)return o.ddnsAdvTplinkView.invalidText.setText(v.su.CHAR.NETWORK_DDNS.BIND_TIPS.replace("%domain%",d.attr("domain"))),void o.ddnsAdvTplinkView.internetInvalidMsg.show();u.ajax.request({url:v.su.url("/admin/ddns?form=tplink"),data:{operation:-1<d.attr("class").indexOf("current")?"unbind":"bind",domain:d.attr("domain")},success:function(){l.ddnsAdvTplinkStore.load({success:function(e){r.setCurrentDomain(e)}})}})}},fail:function(){o.ddnsAdvTplinkView.internetInvalidMsg.show()},error:function(){o.ddnsAdvTplinkView.internetInvalidMsg.show()}})}}}),this.listen({"models.ddnsAdv.enable":{ev_value_change:function(e,n,d){u.moduleManager.get("ddnsAdv").setModel(t.ddnsAdvTplinkModel,"on"==n?"enable":"disable")}}})}},function(n,s,e,d,t,i){var a=null;i.moduleManager.get("ddnsAdv").setDataFieldBind;return{initStatus:function(){i.moduleManager.get("ddnsAdv").setModel(e.ddnsAdvTplinkModel,e.ddnsAdv.enable.getValue()?"enable":"disable"),d.ddnsAdvTplinkStore.load({success:function(e){n.setCurrentDomain(e)}})},setCurrentDomain:function(e){for(var n="",d=e.length,t=0;t<d;t++)"occupied"==e[t].status&&(n=e[t].domain);s.ddnsAdvTplinkView.current_domain.setValue(n)},startInterval:function(){clearInterval(a),a=setInterval(function(){n.getStatus()},1e3),n.getStatus()},stopInterval:function(){clearInterval(a),a=null}}})}(jQuery),function(d){d.su.modelManager.define("ddnsAdvTplinkModel",{type:"model",fields:[{name:"domain",defaultValue:"",minLength:1,maxLength:20,vtype:"domain_header",allowBlank:!1},{name:"wanBind",mapping:"wan_bind",defaultValue:"enable"},{name:"status",defaultValue:0,convert:function(e){var n="";switch(e){case 0:n=d.su.CHAR.NETWORK_DDNS.CONNECTED;break;case 1:n=d.su.CHAR.NETWORK_DDNS.NOT_LAUNCH;break;case 2:n=d.su.CHAR.NETWORK_DDNS.CONNECTING;break;case 3:n=d.su.CHAR.NETWORK_DDNS.INCORRECT_USERNAME_PASSWORD;break;case 4:n=d.su.CHAR.NETWORK_DDNS.INCORRECT_DOMAIN}return n}}],proxy:{url:d.su.url("/admin/ddns?form=tplink")}}),d.su.storeManager.define("ddnsAdvTplinkStore",{type:"store",fields:[{name:"domain",allowBlank:!1},{name:"time"},{name:"status"},{name:"current_domain"}],proxy:"ddnsAdvTplinkStoreProxy"}),d.su.define("ddnsAdvTplinkStoreProxy",{extend:"IPFProxy",url:d.su.url("/admin/ddns?form=tplink"),api:{registerDomain:{writeFilter:function(e){return{operation:"insert",domain:e.domain}}}}}),d.su.define("checkDdnsInternetProxy",{extend:"IPFProxy",url:d.su.url("/admin/cloud_account?form=check_internet"),writeFilter:function(e){return d.extend({operation:"read"},e)}})}(jQuery);