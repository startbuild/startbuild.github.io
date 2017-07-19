function init() {
	FastClick.attach(document.body);
};

// 个人资料
function personalMsg() {
	if(!webviewInterface.isLogin()) {
		location.href="../personal/login.html";
	} else {
		alert("已登录");
	}
};

// 我的收藏
function myCollect(){
	var title = "我的收藏";
	var url = "";
	var new_url = OperationURL.getUrlParent(window.location.href) + url;
	// OperationURL.loadURL(webviewInterface.winType.normal, webviewInterface.mode.push, webviewInterface.orientation.portrait, title, new_url);
}

// 设置
function mySet(){
	webviewInterface.executeApp("PushToSystemSetting","{}");
}

// 帮助中心
function myHelp(){
	if(!webviewInterface.isLogin()){
		// location.href = "../guideperson/login.html?url="+location.href;
	}else {
		var title = "帮助中心";
		var url = "../personcenter/feedback.html?id=" + mobile_var.userId;
		var new_url = OperationURL.getUrlParent(window.location.href) + url;
		// OperationURL.loadURL(webviewInterface.winType.normal, webviewInterface.mode.push, webviewInterface.orientation.portrait, title, new_url);
	}
}

// 意见反馈
function myAdvise(){
	if(!webviewInterface.isLogin()){
		// location.href = "../guideperson/login.html?url="+location.href;
	}else {
		var title = "意见反馈";
		var url = "../personcenter/feedback.html?id=" + mobile_var.userId;
		var new_url = OperationURL.getUrlParent(window.location.href) + url;
		// OperationURL.loadURL(webviewInterface.winType.normal, webviewInterface.mode.push, webviewInterface.orientation.portrait, title, new_url);
	}
}