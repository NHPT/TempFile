!function(a){a.su.storeManager.define("timePeriodStore",{fields:[{name:"name"},{name:"value"}],data:[{value:"1",name:a.su.CHAR.DASHBOARD.ONE_HOUR},{value:"2",name:a.su.CHAR.DASHBOARD.TWO_HOURS},{value:"4",name:a.su.CHAR.DASHBOARD.FOUR_HOURS},{value:"-1",name:a.su.CHAR.DASHBOARD.ALWAYS}]}),a.su.storeManager.define("dashboardClientsStore",{type:"store",fields:[{name:"deviceType"},{name:"deviceName"},{name:"deviceTag"},{name:"mac"},{name:"ip"},{name:"downloadSpeed"},{name:"uploadSpeed"},{name:"enablePriority"},{name:"timePeriod"},{name:"enableInternet"},{name:"isGaming"},{name:"speedLimitOnline"}],convert:function(e){var n=[],i=!!a.su.serviceManager.get("device").configs.supportSpeedLimit;return e.forEach(function(e){var a;(i&&!e.speedLimitOnline||"0.0.0.0"!==e.ip&&"offline"!==e.deviceTag)&&(e.timePeriod=(a=e.timePeriod,["-1","1","2","4"].includes(a)?a:"-1"),n.push(e))}),n},proxy:{url:a.su.url("/admin/smart_network?form=game_accelerator")}})}(jQuery);