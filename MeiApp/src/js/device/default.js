function init() {
	FastClick.attach(document.body);

	$("#btnBackHome").on("click",function() {
		window.history.back();
	});
};

function defaultClick() {
	location.href="../device/details.html";
};	