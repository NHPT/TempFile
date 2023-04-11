$.su.storeManager.define("portForwardingStore",{type:"store",autoReload:!0,fields:[{name:"name",allowBlank:!1},{name:"ipAddress",mapping:"ipaddr",allowBlank:!1,vtype:"ip"},{name:"externalPort",mapping:"external_port",valueType:"string",allowBlank:!1,validator:function(e){function r(e){return!(parseInt(e,10)<1||65535<parseInt(e,10))}if(!new RegExp("^(([0-9]+)|(([0-9])+-([0-9])+))$").test(e))return $.su.CHAR.PORT_FORWARDING.RANGE_MIN_MAX.replace("%min",1).replace("%max",65535);if(e.indexOf("-")<0){if(!r(parseInt(e,10)))return $.su.CHAR.VTYPETEXT.NUMBER_MIN_MAX.replace("%min",1).replace("%max",65535)}else{if(portsBegin=e.split("-")[0],portsEnd=e.split("-")[1],parseInt(portsBegin,10)>parseInt(portsBegin,10))return $.su.CHAR.VTYPETEXT.INVALIDTEXT;if(!r(portsBegin)||!r(portsEnd))return $.su.CHAR.PORT_FORWARDING.RANGE_MIN_MAX.replace("%min",1).replace("%max",65535)}return!0}},{name:"internalPort",mapping:"internal_port",valueType:"string",validator:function(e){return new RegExp("^([0-9]*)$").test(e)?!((e=parseInt(e,10))<1||65535<e)||$.su.CHAR.VTYPETEXT.NUMBER_MIN_MAX.replace("%min",1).replace("%max",65535):$.su.CHAR.VTYPETEXT.INVALIDTEXT}},{name:"protocol",defaultValue:"ALL"},{name:"enable",defaultValue:"on"}],proxy:{url:$.su.url("/admin/nat?form=vs")}}),$.su.storeManager.define("portForwardingCommonServicesStore",{type:"store",fields:[{name:"name"},{name:"port"},{name:"protocol"}],data:[{name:$.su.CHAR.PORT_FORWARDING.DNS,port:"53",protocol:"ALL"},{name:$.su.CHAR.PORT_FORWARDING.FTP,port:"21",protocol:"TCP"},{name:$.su.CHAR.PORT_FORWARDING.GOPHER,port:"70",protocol:"TCP"},{name:$.su.CHAR.PORT_FORWARDING.HTTP,port:"80",protocol:"TCP"},{name:$.su.CHAR.PORT_FORWARDING.NNTP,port:"119",protocol:"TCP"},{name:$.su.CHAR.PORT_FORWARDING.POP3,port:"110",protocol:"TCP"},{name:$.su.CHAR.PORT_FORWARDING.PPTP,port:"1723",protocol:"ALL"},{name:$.su.CHAR.PORT_FORWARDING.SMTP,port:"25",protocol:"TCP"},{name:$.su.CHAR.PORT_FORWARDING.SOCK,port:"1080",protocol:"ALL"},{name:$.su.CHAR.PORT_FORWARDING.TELNET,port:"23",protocol:"TCP"}]}),$.su.define("natClientProxy",{extend:"IPFProxy",url:$.su.url("/admin/nat?form=client_list"),writeFilter:function(e){return e.operation="read",e}}),$.su.storeManager.define("portForwardingConnectedDevicesStore",{type:"store",fields:[{name:"deviceType",mapping:"client_type"},{name:"name"},{name:"ipAddress",mapping:"ip"},{name:"macAddress",mapping:"mac"}],proxy:"natClientProxy"});