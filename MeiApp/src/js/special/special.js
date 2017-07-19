function init() {
	FastClick.attach(document.body);
	// 返回首页
	$("#btnBackHome").click(function() {
		window.history.back();
	});
};

//专题详情
function specialClick() {
	var url = "../special/special_detail.html";
	location.href = url;
};