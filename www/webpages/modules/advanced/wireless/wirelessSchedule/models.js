!function(n){n.su.modelManager.define("wirelessSchedule",{type:"model",fields:[{name:"enable"},{name:"nextTime",mapping:"next_time"}],proxy:{url:n.su.url("/admin/wireless?form=wireless_schedule")}}),n.su.define("wirelessScheduleAddListProxy",{extend:"IPFProxy",url:n.su.url("/admin/wireless?form=wireless_schedule"),ajax:{contentType:"application/x-www-form-urlencoded"},readFilter:function(e){return!e||!e.data||e.data.list&&n.isArray(e.data.list)||(e.data.list=[]),e}}),n.su.storeManager.define("scheduleStore",{type:"store",fields:[{name:"time"},{name:"timeFrom",mapping:"time_from",defaultValue:"00"},{name:"timeTo",mapping:"time_to",defaultValue:"06"},{name:"repeat",allowBlank:!1,defaultValue:"eve"}],convert:function(e){for(var t,a,l=[],s="",i=0;i<e.list.length;i++)t=e.list[i].split(":")[0],a=void 0,s=7===(a=t.split(",").length)?"eve":5===a&&/(((mon)|(tue)|(wed)|(thu)|(fri)),){4}((mon)|(tue)|(wed)|(thu)|(fri))/.test(t)?"weekdays":2===a&&/((sat)|(sun)),((sat)|(sun))/.test(t)?"weekends":t,0,t=(a=n.parseJSON(e.list[i].split(":")[1]))[0],a=a[1],l.push({time:t+"-"+a,time_from:t+":00",time_to:a+":00",repeat:s});return l},serialize:function(e){return e}}),n.su.storeManager.define("wirelessOffStore",{type:"store",fields:[{name:"value"},{name:"boxlabel"},{name:"checked"}],data:[{value:"off",boxlabel:n.su.CHAR.WIRELESS_SCHEDULE.TURN_OFF_NOW,checked:!0},{value:"on",boxlabel:n.su.CHAR.WIRELESS_SCHEDULE.NEXT_START_TIME}]})}(jQuery);