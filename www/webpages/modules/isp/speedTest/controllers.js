!function(a){a.su.moduleManager.define("ispSpeedTest",{services:["ajax"],deps:[],models:["ispSpeedTestControl"],stores:["ispSpeedTestHistoryStore"],views:["ispSpeedTestView"],listeners:{ev_on_launch:function(e,t,s,n,i,o,p){t.initSpeedTest()},ev_before_destroy:function(e,t){t.beforeDestroy()}},init:function(t,e,s,n,i,o){this.configViews({id:"ispSpeedTestView",items:[{id:"speed-test-timeline",configs:[{text:a.su.CHAR.NETWORK_MAP.TIME,dataIndex:"testTime",type:"time",render:function(e){return t.transformSpeedTestDate(e)}},{type:"timelineNode"},{text:a.su.CHAR.NETWORK_MAP.DOWNLOAD,dataIndex:"downSpeed",width:"150px",render:function(e){return t.transformSpeedUnit(e)+" "+a.su.CHAR.NETWORK_MAP.MBPS_2}},{text:a.su.CHAR.NETWORK_MAP.UPLOAD,dataIndex:"upSpeed",width:"150px",render:function(e){return t.transformSpeedUnit(e)+" "+a.su.CHAR.NETWORK_MAP.MBPS_2}},{text:a.su.CHAR.NETWORK_MAP.PING,dataIndex:"latency",width:"150px",render:function(e){return e+" "+a.su.CHAR.UNIT.MS}}]}]}),this.control({"#speed-test-btn":{ev_button_click:function(){var e=s.ispSpeedTestControl.isFirstTest.getValue();t.isUrlValid()&&(e?s.ispSpeedTestControl.isFirstTest.show():t.isSpeedTesting?t.stopSpeedTest():t.startSpeedTest())}},"#speed-test-history-button":{ev_button_click:function(){t.getSpeedTestHistory()}},"#speed-test-clear-button":{ev_button_click:function(){s.ispSpeedTestControl.speedTestClearMsg.show()}},"#speed-test-clear-msg":{ev_msg_ok:function(){t.clearSpeedTestHistory()}},"#first-speed-test-msg":{ev_msg_ok:function(){t.isSpeedTesting?t.stopSpeedTest():t.startSpeedTest()}}}),this.listen({})}},function(p,n,d,e,t,i){var s=null,o={value:0,convert:[0,5,10,250,500,1e3,2500,5e3,1e4]};return{isSpeedTesting:!1,initSpeedTest:function(){p.getSpeedTestResult({success:function(e){d.ispSpeedTestControl.isFirstTest.setValue(e.isFirst);var t=e.testTime;t&&0!==parseInt(t,10)?p.setSpeedTestResult(e):p.setNoResult()},fail:function(){p.setNoResult()}})},handleServerError:function(e){e?(n.ispSpeedTestView.serverList.disable(),n.ispSpeedTestView.serverList.setTips(a.su.CHAR.NETWORK_MAP.SERVER_ERROR),d.ispSpeedTestControl.speedTestBtn.disable(),d.ispSpeedTestControl.speedTestBtn.setTips(a.su.CHAR.NETWORK_MAP.SERVER_BTN_ERROR)):(n.ispSpeedTestView.serverList.enable(),n.ispSpeedTestView.serverList.setTips(""),d.ispSpeedTestControl.speedTestBtn.enable(),d.ispSpeedTestControl.speedTestBtn.setTips(""))},setNoResult:function(){p.setDownloadChartSpeed(0),p.setUploadChartSpeed(0),d.ispSpeedTestControl.speedTestBtn.setText(a.su.CHAR.NETWORK_MAP.SPEED_TEST),n.ispSpeedTestView.speedTestResultTransition.hide()},setDownloadChartSpeed:function(e,t){d.ispSpeedTestControl.speedTestDownload.setOption(a.extend({},o,{loading:!1,value:p.normalizeSpeed(e),name:a.su.CHAR.NETWORK_MAP.DOWNLOAD_SPEED_UPPER,hideInfo:t}))},setUploadChartSpeed:function(e,t){d.ispSpeedTestControl.speedTestUpload.setOption(a.extend({},o,{loading:!1,value:p.normalizeSpeed(e),name:a.su.CHAR.NETWORK_MAP.UPLOAD_SPEED_UPPER,hideInfo:t}))},getSpeedTestResult:function(e){var t,s,n="readIspSpeedTestProxy",n=(e&&(t=e.success,s=e.fail,n=e.proxy||n),{proxy:n,preventSuccessEvent:e.preventSuccessEvent,success:function(e){p.isRunning()&&t&&t(e)},fail:function(e){p.isRunning()&&(p.handleTestFail(),s)&&s(e)}});e.data&&(n.data=e.data),i.ajax.request(n)},clearSpeedTestHistory:function(){p.getSpeedTestResult({proxy:"clearIspSpeedTestHistoryProxy",success:function(e){p.setSpeedTestHistory(e)}})},getSpeedTestHistory:function(){e.ispSpeedTestHistoryStore.load({success:function(e){p.isRunning()&&(p.setSpeedTestHistory(e),d.ispSpeedTestControl.speedTestHistoryMsg.show())}})},setSpeedTestHistory:function(e){a.isArray(e)&&0!==e.length?(d.ispSpeedTestControl.historyContent.show(),d.ispSpeedTestControl.noHistoryContent.hide()):(d.ispSpeedTestControl.historyContent.hide(),d.ispSpeedTestControl.noHistoryContent.show())},setSpeedTestResult:function(e){var t=p.transformSpeedUnit(e.upSpeed),s=p.transformSpeedUnit(e.downSpeed),e=p.normalizePing(e.ping),n=d.ispSpeedTestControl.speedTestUpload.getAnimationToggleStatus(),n=(void 0!==n&&!0!==n||p.setUploadChartSpeed(t),d.ispSpeedTestControl.speedTestDownload.getAnimationToggleStatus());void 0!==n&&!0!==n||p.setDownloadChartSpeed(s),p.setResultBoard({upSpeed:t,downSpeed:s,ping:e}),p.setLevel(s)},startSpeedTest:function(){p.isSpeedTesting=!0,clearInterval(s),d.ispSpeedTestControl.speedTestBtn.setText(a.su.CHAR.NETWORK_MAP.TESTING),d.ispSpeedTestControl.speedTestBtn.textAnimate(),n.ispSpeedTestView.valueDownload.setText("- -"),n.ispSpeedTestView.valuePing.setText("- -"),n.ispSpeedTestView.valueUpload.setText("- -"),p.setDownloadChartSpeed(0,!0),p.setUploadChartSpeed(0,!0),n.ispSpeedTestView.serverList.disable(),n.ispSpeedTestView.speedTestResultTransition.show(),n.ispSpeedTestView.speedTestBoard.show(),n.ispSpeedTestView.speedTestError.hide(),p.testStatusMap={ping:{preIsTesting:!1,nowIsTesting:!1,isTested:!1,hasData:!1,isAllowStop:!0},download:{preIsTesting:!1,nowIsTesting:!1,isTested:!1,hasData:!1,isAllowStop:!0},upload:{preIsTesting:!1,nowIsTesting:!1,isTested:!1,hasData:!1,isAllowStop:!0}},p.getSpeedTestResult({proxy:"startIspSpeedTestProxy",data:{spdt_url:n.ispSpeedTestView.serverList.getValue()},success:function(e){d.ispSpeedTestControl.isFirstTest.setValue(e.is_first),s=setInterval(function(){p.continueSpeedTest()},2e3)}})},continueSpeedTest:function(){p.getSpeedTestResult({proxy:"readIspSpeedTestProxy",success:function(e){"idle"===e.status?(p.handleTestEnd(),p.setSpeedTestResult(e),p.setUploadChartSpeed(e.upSpeed),p.setDownloadChartSpeed(e.downSpeed)):"fail"===e.status&&(p.handleTestFail(),p.setSpeedTestResult(e))}})},handleTestEnd:function(){p.isSpeedTesting=!1,clearInterval(s),s=null,n.ispSpeedTestView.serverList.enable(),n.ispSpeedTestView.speedTestResultTransition.show(),d.ispSpeedTestControl.speedTestBtn.textAnimate(!1),d.ispSpeedTestControl.speedTestBtn.setText(a.su.CHAR.NETWORK_MAP.TEST_AGAIN)},handleTestFail:function(){p.handleTestEnd(),n.ispSpeedTestView.speedTestResultTransition.hide(),n.ispSpeedTestView.speedTestError.show()},modifyMapHasData:function(e){-1!==e.ping&&(p.testStatusMap.ping.hasData=!0),-1!==e.downSpeed&&(p.testStatusMap.download.hasData=!0),-1!==e.upSpeed&&(p.testStatusMap.upload.hasData=!0)},modifyMapIsTested:function(){a.each(p.testStatusMap,function(e,t){!0===t.hasData&&!1===t.nowIsTesting&&(t.isTested=!0)})},isNeedRealTime:function(e){var s=!1;return a.each(e,function(e,t){!0===t.nowIsTesting&&!0===t.hasData&&(s=!0)}),s},startFieldLoading:function(e,t,s){var n,i,o;"ping"!==e&&("upload"===e?(n=p.transformSpeedUnit(t.upSpeed),i=d.ispSpeedTestControl.speedTestUpload,o=a.su.CHAR.NETWORK_MAP.UPLOAD_SPEED_UPPER):"download"===e&&(n=p.transformSpeedUnit(t.downSpeed),i=d.ispSpeedTestControl.speedTestDownload,o=a.su.CHAR.NETWORK_MAP.DOWNLOAD_SPEED_UPPER),i.setOption({loading:!0,isStart:!0,value:n,isNeedRealTime:s,name:o}))},stopFieldLoading:function(e,t){var s;"upload"===e?(s=p.transformSpeedUnit(t.upSpeed),d.ispSpeedTestControl.speedTestUpload.setOption({loading:!1,value:s,name:a.su.CHAR.NETWORK_MAP.UPLOAD_SPEED_UPPER}),n.ispSpeedTestView.valueUpload.setText(s)):"download"===e?(s=p.transformSpeedUnit(t.downSpeed),d.ispSpeedTestControl.speedTestDownload.setOption({loading:!1,value:s,name:a.su.CHAR.NETWORK_MAP.DOWNLOAD_SPEED_UPPER}),n.ispSpeedTestView.valueDownload.setText(s)):"ping"===e&&(s=t.ping,n.ispSpeedTestView.valuePing.setText(s))},continueFieldLoading:function(e,t,s){var n,i,o;"ping"!==e&&("upload"===e?(n=p.transformSpeedUnit(t.upSpeed),i=d.ispSpeedTestControl.speedTestUpload,o=a.su.CHAR.NETWORK_MAP.UPLOAD_SPEED_UPPER):"download"===e&&(n=p.transformSpeedUnit(t.downSpeed),i=d.ispSpeedTestControl.speedTestDownload,o=a.su.CHAR.NETWORK_MAP.DOWNLOAD_SPEED_UPPER),i.setOption({loading:!0,isStart:!1,value:n,isNeedRealTime:s,name:o}))},stopSpeedTest:function(){p.getSpeedTestResult({proxy:"stopIspSpeedTestProxy",success:function(e){p.handleTestEnd(),p.setSpeedTestResult(e)}})},normalizeSpeed:function(e){return isNaN(e)||e<0?0:e},normalizePing:function(e){return e=parseInt(e),isNaN(e)||e<0?"- -":e},transformSpeedUnit:function(e){return(!e||e<0)&&(e=0),parseInt(e,10)},transformSpeedTestDate:function(e){var e=new Date(1e3*e),t=e.getFullYear(),s=("0"+(e.getMonth()+1)).slice(-2),n=("0"+e.getDate()).slice(-2),i=e.getHours();return t+"-"+s+"-"+n+" "+(12<i?i-12:i)+":"+("0"+e.getMinutes()).slice(-2)+" "+(12<e.getHours()?a.su.CHAR.NETWORK_MAP.PM:a.su.CHAR.NETWORK_MAP.AM)},setResultBoard:function(e){n.ispSpeedTestView.valuePing.setText(e.ping),n.ispSpeedTestView.valueDownload.setText(e.downSpeed),n.ispSpeedTestView.valueUpload.setText(e.upSpeed)},setLevel:function(e){},beforeDestroy:function(){clearInterval(null),clearInterval(s),d.ispSpeedTestControl.speedTestDownload.clearAnimation(),d.ispSpeedTestControl.speedTestUpload.clearAnimation(),d.ispSpeedTestControl.speedTestBtn.textAnimate(!1)},isUrlValid:function(){var e=n.ispSpeedTestView.serverList.getValue();return!(!/^[\s\S]*.*[^\s][\s\S]*$/.test(e)||null==e)||(n.ispSpeedTestView.serverList.setError(a.su.CHAR.VTYPETEXT.INVALIDTEXT),!1)}}})}(jQuery);