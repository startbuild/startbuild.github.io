var mobile_var = {
	userId: "",
	cityName: "",
	orgId: ""
};
! function(e, o) {
	function r(e) {
		this.preHref = e, this.winType = {
			normal: "normal",
			search: "search",
			localPlay: "localPlay",
			searchWithLocation: "searchWithLocation",
			shareAndcollect: "shareAndcollect",
			shareAndDownload: "shareAndDownload",
			orderSuccess: "orderSuccess",
			save: "save",
			edit: "edit",
			"delete": "delete",
			browse: "browse"
		}, this.keyType = {
			userId: "userId",
			cityName: "cityName"
		}, this.mode = {
			push: "push",
			pop: "pop"
		}, this.orientation = {
			portrait: "portrait",
			landscape: "landscape"
		}
	}
	r.prototype.createWindow = function(o, r, a, t, n) {
		var n = this.preHref + "createWindow?winType=" + o + "&mode=" + r + "&orientation=" + a + "&title=" + t + "&url=" + n;
		e.location.href = encodeURI(n)
	}, r.prototype.navigationWindow = function(o, r, a) {
		var a = this.preHref + "navigationWindow?name=" + o + "&title=" + r + "&url=" + a;
		e.location.href = encodeURI(a)
	}, r.prototype.exitUser = function() {
		var o = this.preHref + "exitUser";
		e.location.href = encodeURI(o)
	}, r.prototype.backToPerson = function() {
		var o = this.preHref + "backToPerson";
		e.location.href = encodeURI(o)
	}, r.prototype.backToHome = function() {
		var o = this.preHref + "backToHome";
		e.location.href = encodeURI(o)
	}, r.prototype.backToCharge = function() {
		var o = this.preHref + "backToCharge";
		e.location.href = encodeURI(o)
	}, r.prototype.backToAccount = function() {
		var o = this.preHref + "backToAccount";
		e.location.href = encodeURI(o)
	}, r.prototype.pwdChange = function() {
		var o = this.preHref + "pwdChange";
		e.location.href = encodeURI(o)
	}, r.prototype.backParam = function(o, r) {
		var a = this.preHref + "backParam?callback=" + o + "&param=" + r;
		e.location.href = encodeURI(a)
	}, r.prototype.mobileRedirect = function(o) {
		var r = this.preHref + "mobileRedirect";
		r = "" != o ? r + "?page=" + o : r, e.location.href = encodeURI(r)
	}, r.prototype.weixinToPay = function(o) {
		var r = this.preHref + "weixinToPay?param=" + o;
		e.location.href = encodeURI(r)
	}, r.prototype.alipayToPay = function(o) {
		var r = this.preHref + "alipayToPay?param=" + o;
		e.location.href = encodeURI(r)
	}, r.prototype.alipayToCharge = function(o) {
		var r = this.preHref + "alipayToCharge?param=" + o;
		e.location.href = encodeURI(r)
	}, r.prototype.nativeLocation = function(o) {
		var r = this.preHref + "nativeLocation?callBack=" + o;
		e.location.href = encodeURI(r)
	}, r.prototype.brwoseImages = function(o, r) {
		var a = this.preHref + "brwoseImages?imgList=" + o + "&currentIndex=" + r;
		e.location.href = encodeURI(a)
	}, r.prototype.localStorage = function(o, r, a) {
		var t = this.preHref + "localStorage?callBack=" + o + "&key=" + r + "&value=" + a;
		e.location.href = encodeURI(t)
	}, r.prototype.isLogin = function() {
		if (e.localStorage) try {
			var o = localStorage.getItem("user");
			mobile_var.userId = null != o ? JSON.parse(o).userId : "", mobile_var.orgId = null != o ? JSON.parse(o).OrgId : ""
		} catch (r) {
			console.log("您处于无痕浏览，无法为您保存")
		} else console.log("This browser does NOT support localStorage");
		return "" != mobile_var.userId && 0 != mobile_var.userId
	}, r.prototype.getUser = function() {
		var o = null;
		if (e.localStorage) try {
			o = localStorage.getItem("user"), mobile_var.userId = null != o ? JSON.parse(o).userId : "", mobile_var.orgId = null != o ? JSON.parse(o).OrgId : ""
		} catch (r) {
			console.log("您处于无痕浏览，无法为您保存")
		} else console.log("This browser does NOT support localStorage");
		return null != o ? JSON.parse(o) : o
	}, r.prototype.executeApp = function(e, o, r) {
		browseInfo.isTongLianApp() ? HappyTo && null != HappyTo ? HappyTo.execute('{"action":"' + e + '","params":' + o + ',"callback":"' + r + '"}') : alert("Mobile not has happyto UserAgent.") : console.log("This is'nt open in APP.")
	}, e.webviewInterface = new r("tonglian://")
}(window, void 0);