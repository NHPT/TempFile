!function(o){o.su.moduleManager.define("transitionAp",{services:["device"],stores:[],models:["quickSetupModel"],deps:["quickSetupAp","main"],views:["transitionView"],listeners:{ev_on_launch:function(e,i,t,s,n,u,o){this.start()}},init:function(e,i,t,s,n,u){this.control(),this.listen()}},function(e,i,t,s,n,u){return{start:function(){n.main.showMask(),i.transitionView.creatingProgressbar.reset(),i.transitionView.creatingProgressbar.animate({percentageStart:0,percentageEnd:100,duration:2e4}),t.quickSetupModel.timeTimezone.setValue(0),t.quickSetupModel.toggleFields(/^wireless/,!0),u.device.getIsTriband()||t.quickSetupModel.toggleFields(function(e){if(/^wireless5g2/.test(e))return!0},!1),u.device.getConfig().supportWifi6E||t.quickSetupModel.toggleFields(function(e){if(/^wireless6g/.test(e))return!0},!1);var e=t.quickSetupModel.enable5g1Bw160.getValue();u.device.getConfig().support160MEnable?(t.quickSetupModel.wireless5gHtmode.setValue("80"),"on"===e&&t.quickSetupModel.wireless5gHtmode.setValue("160")):t.quickSetupModel.toggleFields(/^wireless5gHtmode/,!1),t.quickSetupModel.submit({url:o.su.url("/admin/quick_setup?form=ap_setup"),success:function(){i.transitionView.creatingProgressbar.setValue(100),setTimeout(function(){n.main.hideMask(),n.quickSetupAp.goTo("qsSummaryAp")},1e3)},fail:function(){n.main.hideMask(),n.quickSetupAp.goTo("qsWirelessSettingAp")},error:function(){n.main.hideMask(),n.quickSetupAp.goTo("qsWirelessSettingAp")}})}}})}(jQuery);