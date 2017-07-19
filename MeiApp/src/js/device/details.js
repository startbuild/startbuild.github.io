function init() {
	FastClick.attach(document.body);
	// 返回首页
    $("#btnBackHome").click(function() {
   	 	window.history.back();
    });
};