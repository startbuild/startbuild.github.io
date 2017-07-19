var paging = new QueryWithOrder(1);

function init() {
	FastClick.attach(document.body);
	// 返回首页
	$("#btnBackHome").click(function() {
		window.history.back();
	});

	// 页面事件
	EventClick();
};

var EventClick = function() {
	// 条件查询和排序
	$("#searchTab li").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		// 筛选类型1,2
		var searchType = $(this).attr("data-type");
		if(searchType =="1") {
			if($(this).find("span.ico-arrow").hasClass("rotate")) {
				$(this).find("span.ico-arrow").removeClass("rotate");
				$("#device").hide();
			} else {
				$(this).find("span.ico-arrow").addClass("rotate");
				$("#device").show();
			}
		} else {
			$("#device").hide();

			// 未完待续
			// if($(this).find("span.ico-arrow")) {
			// 	paging.changeOrderDesc(true);
			// } else {
			// 	paging.changeOrderDesc(false);
			// }
		}
	});
};

function detailClick() {
	location.href = "../device/details.html";
}