function init() {
	FastClick.attach(document.body);
	// 返回首页
	$("#btnBackHome").click(function() {
		window.history.back();
	});
};

//要文详情
function newsClick() {
	var url = "../news/news_detail.html";
	location.href = url;
};