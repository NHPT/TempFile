$.su.storeManager.define("dhcpAPStore",{type:"store",fields:[{name:"name"},{name:"value"},{name:"boxlabel"}],data:[{name:"auto",value:"auto",boxlabel:$.su.CHAR.NETWORK_DHCP.AUTO},{name:"on",value:"on",boxlabel:$.su.CHAR.NETWORK_DHCP.ON},{name:"off",value:"off",boxlabel:$.su.CHAR.NETWORK_DHCP.OFF}]}),$.su.define("dhcpServerProxy",{extend:"IPFProxy",url:$.su.url("/admin/dhcps?form=setting"),api:{read:{writeFilter:function(e){return $.extend({},e,{operation:"read"})}}}});