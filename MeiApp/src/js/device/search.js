function init() {
	FastClick.attach(document.body);

	$("#btnBackHome").on("click",function() {
		window.history.back();
	});

	// 清除记录
	$("#recordDel").on("click",function() {
		$.happytoMsg("确定要清空吗?",function() {
			$.loadingHide();
			$("#record").remove();
			$("#meiRecord").hide();
		 })
	});	

}

function defaultClick() {
	location.href="../device/default.html";
};	