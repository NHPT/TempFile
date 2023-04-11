!function(g){g.su.moduleManager.define("routingAdv",{services:["ajax"],models:["newRoutingModel","lanAdvLanModel"],stores:["staticRoutingStore","interfaceStore","routingTableStore"],views:["routingAdvView"],listeners:{ev_on_launch:function(t,e,n,a,i,o,s){this.unRegisterAutoSaveData([a.newRoutingModel,a.lanAdvLanModel,i.staticRoutingStore,i.interfaceStore,i.routingTableStore]),i.staticRoutingStore.load(),i.routingTableStore.load()}},init:function(r,t,R,T,e,n){this.configViews({id:"routingAdvView",items:[{id:"static-routing-grid",configs:{popEditor:{addTitle:g.su.CHAR.NETWORK_ROUTING.POPEDITOR_ADD_TITLE,editTitle:g.su.CHAR.NETWORK_ROUTING.POPEDITOR_EDIT_TITLE,content:"#static-routing-config",fields:[{name:"target"},{name:"netmask"},{name:"gateway"},{name:"interface"},{name:"name"}]},columns:[{text:g.su.CHAR.NETWORK_ROUTING.NETWORK_DESTINATION,dataIndex:"target",width:"18%"},{xtype:"customWidget",widgetName:"switch",text:g.su.CHAR.NETWORK_ROUTING.STATUS,dataIndex:"enable",cls:"status l-hide xl-hide",settings:{trueValue:"on",falseValue:"off"}},{text:g.su.CHAR.NETWORK_ROUTING.SUBNET_MASK,dataIndex:"netmask",width:"16%"},{text:g.su.CHAR.NETWORK_ROUTING.DEFAULT_GATEWAY,dataIndex:"gateway",width:"19%"},{text:g.su.CHAR.NETWORK_ROUTING.INTERFACE,dataIndex:"interface",width:"12%"},{text:g.su.CHAR.NETWORK_ROUTING.DESCRIPTION,dataIndex:"name",width:"16%"},{xtype:"customWidget",widgetName:"switch",text:g.su.CHAR.NETWORK_ROUTING.STATUS,dataIndex:"enable",cls:"status s-hide m-hide",settings:{trueValue:"on",falseValue:"off"},width:"8%"},{xtype:"settings",text:g.su.CHAR.NETWORK_ROUTING.MODIFY}]}},{id:"routing-table-grid",settings:{statusBarText:g.su.CHAR.NETWORK_ROUTING.ROUTING_NUM},configs:{columns:[{text:g.su.CHAR.NETWORK_ROUTING.NETWORK_DESTINATION,dataIndex:"dest",width:"28%"},{text:g.su.CHAR.NETWORK_ROUTING.SUBNET_MASK,dataIndex:"netmask",width:"28%"},{text:g.su.CHAR.NETWORK_ROUTING.GATEWAY,dataIndex:"gateway",width:"28%"},{text:g.su.CHAR.NETWORK_ROUTING.INTERFACE,dataIndex:"interface",renderer:function(t){return t.toUpperCase()}}]}}]}),this.control({"#routing-table-grid":{ev_grid_tbar_refresh:function(t){T.routingTableStore.load({success:function(){g.su.moduleManager.query("main").showNotice(g.su.CHAR.COMMON.SAVED)}})}},"#static-routing-grid":{ev_grid_edit:function(t,e){r.optkey=e},ev_grid_before_save:function(t,e){for(var n=R.newRoutingModel.target.getValue(),a=R.newRoutingModel.netmask.getValue(),i=(R.newRoutingModel.gateway.getValue(),T.staticRoutingStore.getData()),o=0,s=i.length;o<s;o++){var u=g.su.ipToInt(i[o].target)&g.su.ipToInt(i[o].netmask),d=g.su.ipToInt(n)&g.su.ipToInt(a);if(u==d&&("add"===r.optkey||r.optkey!==i[o].key))return R.newRoutingModel.target.setError(g.su.CHAR.ERROR["00000107"]),e.preventDefault(),!1}}}}),this.listen({"stores.staticRoutingStore":{ev_data_change:function(t,e,n){e.value!==e.oldValue&&"enable"===n.getName()&&T.staticRoutingStore.sync()}}})}},function(t,e,n,a,i,o){return{}})}(jQuery);