!function(e){e.su.modelManager.define("cwmpModel",{type:"model",fields:[{name:"enable"},{name:"PeriodicInformEnable"},{name:"PeriodicInformInterval",vtype:"number",allowBlnak:!1},{name:"WANIPAddress"},{name:"URL",allowBlnak:!1},{name:"Username",allowBlnak:!1},{name:"Password",allowBlnak:!1},{name:"Interface"},{name:"ConnectionRequestAuth"},{name:"ConnectionRequestUsername",allowBlank:!1},{name:"ConnectionRequestPassword",allowBlank:!1},{name:"ConnectionRequestPath",allowBlank:!1},{name:"ConnectionRequestPort",vtype:{vtype:"number",max:65535,min:1024}},{name:"ConnectionRequestURL"},{name:"vlanChanged",mapping:"vlan_changed"}],serialize:function(e){return delete e.vlan_changed,e},proxy:{url:e.su.url("/admin/cwmp?form=cwmp_setting")}}),e.su.storeManager.define("cwmpInterfaceStore",{type:"store",fields:[{name:"name"},{name:"value"}],data:[{name:e.su.CHAR.CWMP.ANY_WAN,value:"anywan"},{name:e.su.CHAR.CWMP.LAN,value:"lan"}]})}(jQuery);