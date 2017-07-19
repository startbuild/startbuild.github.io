function stopDrop() {
	var e;
	$(document.body).on("touchstart", function(t) {
		e = t.originalEvent.changedTouches[0].clientY
	}), $(document.body).on("touchmove", function(t) {
		var n = t.originalEvent.changedTouches[0].clientY,
			r = $(this).scrollTop();
		n >= e && r <= 5 && (e = n, t.preventDefault()), e = n
	})
}

function init() {}! function(e, t) {
	function n() {
		this.userAgent = e.navigator.userAgent, this.isTongLianApp = function() {
			return this.userAgent.search("TongLian") != -1
		}, this.isWeiXin = function() {
			return "micromessenger" == this.userAgent.toLowerCase().match(/MicroMessenger/i)
		}, this.isWeb = function() {
			return this.userAgent.indexOf("Safari") == -1
		}, this.isIos = function() {
			return this.userAgent.indexOf("App_Ios") == -1
		}, this.isAndroid = function() {
			return this.userAgent.indexOf("App_Android") == -1
		}, this.isGuide = function() {
			return this.userAgent.search("App_Guide") != -1
		}
	}
	n.prototype.getSystemVersion = function() {
		var e = this.userAgent.split("|")[1];
		if (this.isTongLianApp()) {
			var t = JSON.parse(e);
			return t.systemVersion
		}
		return null
	}, n.prototype.getSystemPlatForm = function() {
		var e = this.userAgent.split("|")[1];
		if (this.isTongLianApp()) {
			var t = JSON.parse(e);
			return t.systemPlatform
		}
		return null
	}, n.prototype.isIosApp = function() {
		var e = this.userAgent.split("|")[1];
		if (this.isTongLianApp()) {
			var t = JSON.parse(e);
			return "happytoios" == t.systemPlatform
		}
		return !1
	}, n.prototype.isAndroidApp = function() {
		var e = this.userAgent.split("|")[1];
		if (this.isTongLianApp()) {
			var t = JSON.parse(e);
			return "android" == t.systemPlatform
		}
		return !1
	}, n.prototype.setLocalStorage = function(t, n) {
		if (e.localStorage) try {
			localStorage.setItem(t, n)
		} catch (r) {
			console.log("您处于无痕浏览，无法为您保存")
		} else console.log("This browser does NOT support localStorage")
	}, n.prototype.getLocalStorage = function(t) {
		var n = "";
		if (e.localStorage) try {
			n = localStorage.getItem(t)
		} catch (r) {
			console.log("您处于无痕浏览，无法为您保存")
		} else console.log("This browser does NOT support localStorage");
		return n
	}, e.browseInfo = new n
}(window, void 0),
function(e, t) {
	function n() {}
	n.getDomain = function() {
		var e = location.host;
		return e.indexOf("localhost") > 0 || e.indexOf(":") > 0 ? e : e.split(".")[0]
	}, n.getDomainSec = function() {
		var e = location.host,
			t = e.split(".");
		return t.length > 0 ? t[0] : ""
	}, n.getUrlParent = function(e) {
		var t = e.lastIndexOf("/"),
			n = e.substring(0, t + 1);
		return n
	}, n.getUrlOrigin = function() {
		var e = location.origin + "/";
		return e
	}, n.getUrlParam = function(e) {
		var t = e.lastIndexOf("?"),
			n = e.substring(t + 1, e.length),
			r = n.split("|"),
			i = {};
		for (var o in r) {
			var a = r[o],
				s = a.split("=")[0],
				c = a.split("=")[1];
			i[s] = c
		}
		return i
	}, n.getQueryString = function(t) {
		var n, r = e.location.search.substr(1);
		n = r.indexOf("?") != -1 ? new RegExp("(^|&)" + t + "=([^&]*)(&|$)") : new RegExp("(^|&)" + t + "=([^&]*)(&|$)");
		var i = r.match(n);
		return null != i ? i[2] : null
	}, n.getRequest = function(e) {
		var t = location.search,
			n = new Object;
		if (t.indexOf("?") != -1) {
			var r = t.substr(1);
			strs = r.split("&");
			for (var i = 0; i < strs.length; i++) n[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1])
		}
		return n
	}, n.loadURL = function(t, n, r, i, o) {
		browseInfo.isTongLianApp() ? e.location.href = o : e.location.href = o
	}, e.OperationURL = n
}(window, void 0),
function(e, t) {
	function n() {}
	n.fields = {
		salesOrder: "salesOrder",
		priceOrder: "priceOrder",
		goodReputationOrder: "goodReputationOrder"
	}, e.OrderField = n
}(window, void 0),
function(e, t) {
	function n(e) {
		this.pageSize = 10, this.currentPage = 1, this.orderField = e, this.orderDesc = !0, this.filterField = {}
	}
	n.prototype.addPage = function() {
		this.currentPage += 1
	}, n.prototype.refreshPage = function() {
		this.currentPage = 1
	}, n.prototype.changeOrderField = function(e) {
		this.orderField = e
	}, n.prototype.changeOrderDesc = function(e) {
		this.orderDesc = e
	}, n.prototype.addFilterField = function(e, n) {
		e != t && (this.filterField[e] = n)
	}, n.prototype.removeFilterField = function(e) {
		for (var t in this.filterField) t === e && delete this.filterField[t]
	}, n.prototype.getQuerySting = function() {
		var e = new Object;
		return e.pageSize = this.pageSize, e.currentPage = this.currentPage, e.orderField = this.orderField, e.orderDesc = this.orderDesc, e.filterField = this.filterField, e
	}, n.prototype.getPaging = function() {
		var e = new Object;
		return e.pageSize = this.pageSize, e.currentPage = this.currentPage, e
	}, e.QueryWithOrder = n
}(window, void 0),
function(e, t) {
	function n() {}
	n.resetTitle = function(t) {
		document.title = t;
		var n = e("body"),
			r = e('<iframe src="/favicon.ico"></iframe>');
		r.on("load", function() {
			setTimeout(function() {
				r.off("load").remove()
			}, 0)
		}).appendTo(n)
	}, t.UtilOpt = n
}(jQuery, window),
function(e) {
	e.fn.fileUpload = function(t) {
		var n = {
				url: "",
				success: null,
				fail: null,
				chunkfail: null
			},
			r = e.extend({}, n, t),
			i = e(this);
		i.fileupload({
			url: r.url,
			type: "POST",
			dataType: "json",
			autoUpload: !0,
			acceptFileTypes: /(\.|\/)(jpe?g|png)$/i,
			maxChunkSize: 84e5,
			formData: {
				model: 1
			},
			done: function(e, t) {
				r.success(e, t)
			},
			fail: function(e, t) {
				null != r.fail ? r.fail(e, t) : console.log("上传失败：" + t.errorThrown)
			},
			chunkfail: function(e, t) {
				null != r.chunkfail ? r.chunkfail(e, t) : console.log("上传文件太大：" + t.contentRange)
			}
		})
	}
}(jQuery),
function(e) {
	e.fn.fileUploadCross = function(t) {
		var n = {
				url: "",
				success: null,
				fail: null,
				chunkfail: null
			},
			r = e.extend({}, n, t),
			i = e(this);
		i.fileupload({
			url: r.url,
			type: "POST",
			dataType: "json",
			autoUpload: !0,
			acceptFileTypes: /(\.|\/)(jpe?g|png)$/i,
			maxChunkSize: 84e5,
			formData: {
				model: 1
			},
			forceIframeTransport: !0,
			redirectParamName: "callUrl",
			redirect: "http://" + window.location.host + "/app/callupload.html?",
			done: function(e, t) {
				r.success(e, t)
			},
			fail: function(e, t) {
				null != r.fail ? r.fail(e, t) : console.log("上传失败：" + t.errorThrown)
			},
			chunkfail: function(e, t) {
				null != r.chunkfail ? r.chunkfail(e, t) : console.log("上传文件太大：" + t.contentRange)
			}
		})
	}
}(jQuery),
function(e) {
	e.extend({
		happytoAlert: function(e) {
			layer.open({
				shade: !1,
				time: 2,
				content: e
			})
		}
	})
}(jQuery),
function(e) {
	e.extend({
		loadingShow: function() {
			layer.open({
				type: 2
			})
		}
	})
}(jQuery),
function(e) {
	e.extend({
		loadingHide: function() {
			layer.closeAll()
		}
	})
}(jQuery),
function(e) {
	e.extend({
		happytoMsg: function(e, t) {
			layer.open({
				content: e,
				shadeClose: !1,
				btn: ["确认", "取消"],
				yes: function() {
					t();
				},
				no: function(e) {
					layer.close(e)
				}
			})
		}
	})
}(jQuery),
function(e) {
	e.fn.clearText = function(t) {
		var n = {
				targetId: "",
				className: ""
			},
			r = e.extend({}, n, t),
			i = e(this);
		i.bind("click", function() {
			"" != r.targetId ? e("#" + r.targetId).val("") : e(this).prev("input").val("")
		})
	}
}(jQuery),
function(e) {
	e.fn.showPwd = function(t) {
		var n, r = {
				targetId: "",
				className: "close-eye"
			},
			i = e.extend({}, r, t),
			o = e(this);
		n = "" != i.targetId ? e("#" + i.targetId) : e(this).prev("input[type='password']"), o.bind("click", function() {
			"text" == n.attr("type") ? (n.attr("type", "password"), e(this).removeClass(i.className)) : (n.attr("type", "text"), e(this).addClass(i.className))
		})
	}
}(jQuery),
function(e) {
	var t, n, r = function(r) {
			var i = {
				source: null,
				title: "确认联系人",
				content: "",
				sendFun: null,
				confirm: null
			};
			t = e.extend({}, i, r), n = t.source;
			var o = "";
			o += '<div class="modal-backdrop"></div><div class="modal-content"><div class="modal-header"><div class="font-16">' + t.title + '</div><div class="modal-header-r"><span class="ico-closelight" id="modal-close"></span></div></div><div class="modal-body">', o += "" == t.content || null == t.content ? '<div class="modal-tip">您尚未登录,为了您能收到订单信息,请输入手机号<span id="labPhone"></span>收到的短信验证码。</div><div class="modal-main"><input type="text" id="txtCode" name="txtCode" placeholder="请输入验证码" class="modal-ipt"><span id="btnClear" class="ico-closelight modal-codeclear"></span><span id="btnSendAgain" class="modal-time enable"></span></div><div id="labError" class="modal-warn"></div>' : content, o += '</div><input type="button" id="btnDiaOk" name="btnDiaOk" class="modal-confirm" value="确认"></div>', n.append(o), e("#modal-close").unbind("click").bind("click", function() {
				n.hide()
			}), e("#btnClear").unbind("click").bind("click", function() {
				e("#txtCode").val("")
			}), e("#txtCode").unbind("focus").bind("focus", function() {
				e("#labError").html("")
			}), e("#btnDiaOk").unbind("click").bind("click", function() {
				null != t.confirm && (n.hide(), t.confirm())
			})
		},
		i = function() {
			var t = 60,
				n = t + "s后重发";
			e("#btnSendAgain").removeClass("enable").text(n);
			var r = window.setInterval(function() {
				t--, 0 == t ? (e("#btnSendAgain").addClass("enable").text("重新发送"), clearInterval(r)) : e("#btnSendAgain").text(t + "s后重发")
			}, 1e3)
		};
	r.prototype = {
		confirm: function(e) {
			t.confirm = e
		},
		showDialog: function(t) {
			"" != t && e("#labPhone").html(t), n.show()
		},
		hideDialog: function() {
			n.hide()
		},
		sendCode: function(n) {
			t.sendFun = n, e("#btnSendAgain").hasClass("enable") && (i(), null != t.sendFun && t.sendFun())
		}
	}, e.fn.hapDialog = function(n) {
		n || (n = {}), n.source = e(this);
		var o = new r(n);
		return e("#btnSendAgain").unbind("click").bind("click", function() {
			e("#btnSendAgain").hasClass("enable") && (i(), null != t.sendFun && t.sendFun())
		}), o
	}
}(jQuery),
function(e) {
	e.fn.bankInput = function(t) {
		var n = {
				min: 10,
				max: 25,
				deimiter: " ",
				onlyNumber: !0,
				copy: !0
			},
			r = e.extend({}, n, t),
			i = e(this);
		i.css({
			imeMode: "Disabled",
			borderWidth: "1px",
			color: "#000",
			fontFamly: "Times New Roman"
		}).attr("maxlength", r.max), "" != i.val() && i.val(i.val().replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1" + r.deimiter)), i.bind("keyup", function(e) {
			r.onlyNumber && (e.keyCode >= 48 && e.keyCode <= 57 || (this.value = this.value.replace(/\D/g, ""))), this.value = this.value.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1" + r.deimiter)
		}).bind("dragenter", function() {
			return !1
		}).bind("onpaste", function() {
			return !clipboardData.getData("text").match(/\D/)
		}).bind("blur", function() {
			this.value = this.value.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1" + r.deimiter), this.value.length < r.min && (alert("最少输入" + r.min + "位账号信息！"), i.focus())
		})
	}, e.fn.bankList = function(t) {
		var n = {
				deimiter: " "
			},
			r = e.extend({}, n, t);
		return this.each(function() {
			e(this).text(e(this).text().replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1" + r.deimiter))
		})
	}
}(jQuery),
function(e) {
	e.extend({
		getLocation: function(t) {
			var n = {
					successFunc: null,
					errorFunc: null
				},
				r = e.extend({}, n, t),
				i = (e(this), {
					id: "000001",
					name: "北京",
					date: curDateTime()
				});
			e.cookie("HAPPYTO_MOBILE_CITY", JSON.stringify(i), {
				expires: 1,
				path: "/"
			}), navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(t) {
				var n = t.coords.latitude,
					i = t.coords.longitude,
					o = new BMap.Point(i, n),
					a = new BMap.Geocoder;
				a.getLocation(o, function(t) {
					var n = t.addressComponents,
						i = {
							id: "",
							name: n.province,
							date: curDateTime()
						};
					e.cookie("HAPPYTO_MOBILE_CITY", JSON.stringify(i), {
						expires: 7,
						path: "/"
					}), null != r.successFunc && r.successFunc(i)
				})
			}, function(t) {
				switch (t.code) {
					case 1:
						console.log("位置服务被拒绝");
						break;
					case 2:
						console.log("暂时获取不到位置信息");
						break;
					case 3:
						console.log("获取位置信息超时");
						break;
					default:
						console.log("未知错误")
				}
				var n = {
					id: "000001",
					name: "北京",
					date: curDateTime()
				};
				e.cookie("HAPPYTO_MOBILE_CITY", JSON.stringify(n), {
					expires: 1,
					path: "/"
				}), null != r.errorFunc ? r.errorFunc(t) : console.log(t)
			}, {
				timeout: 5e3,
				enableHighAccuracy: !0
			}) : null != r.errorFunc ? r.errorFunc("你的浏览器不支持获取地理位置信息。") : console.log("你的浏览器不支持获取地理位置信息")
		}
	})
}(jQuery), String.format = function() {
	if (0 == arguments.length) return null;
	for (var e = arguments[0], t = 1; t < arguments.length; t++) {
		var n = new RegExp("\\{" + (t - 1) + "\\}", "gm");
		e = e.replace(n, arguments[t])
	}
	return e
}, $.fn.numeral = function(e) {
	$(this).keypress(function(t) {
		var n = t.keyCode ? t.keyCode : t.which;
		return e ? (0 != this.value.length && this.value.indexOf(".") == -1 || 46 != n) && (n >= 48 && n <= 57 || 46 == n || 8 == n) : n >= 48 && n <= 57 || 8 == n
	}), $(this).bind("copy cut paste", function(e) {
		return window.clipboardData ? !clipboardData.getData("text").match(/\D/) : void event.preventDefault()
	}), $(this).bind("dragenter", function() {
		return !1
	}), $(this).css("ime-mode", "disabled"), $(this).bind("focus", function() {
		this.value.lastIndexOf(".") == this.value.length - 1 ? this.value = this.value.substr(0, this.value.length - 1) : isNaN(this.value) && (this.value = "")
	})
}, $.format = function(e, t) {
	return 1 == arguments.length ? function() {
		var t = $.makeArray(arguments);
		return t.unshift(e), $.format.apply(this, t)
	} : (arguments.length > 2 && t.constructor != Array && (t = $.makeArray(arguments).slice(1)), t.constructor != Array && (t = [t]), $.each(t, function(t, n) {
		e = e.replace(new RegExp("\\{" + t + "\\}", "g"), n)
	}), e)
}, Date.prototype.format = function(e) {
	var t = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		S: this.getMilliseconds()
	};
	/(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
	for (var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
	return e
}, Date.prototype.addDay = function(e) {
	return this.setDate(this.getDate() + e), this
}, Date.prototype.addMonth = function(e) {
	var t = this.getDate();
	return this.setMonth(this.getMonth() + e), t != this.getDate() && this.setDate(0), this
}, Date.prototype.addYear = function(e) {
	var t = this.getDate();
	return this.setYear(this.getYear() + e), t != this.getDate() && this.setDate(0), this
}, String.prototype.NotNullOrEmpty = function() {
	return 0 != this.length && "undefined" != this
}, Array.prototype.max = function() {
	return Math.max.apply({}, this)
}, Array.prototype.min = function() {
	return Math.min.apply({}, this)
};
var todayDate = function() {
		var e = new Date,
			t = e.getFullYear(),
			n = e.getMonth() + 1,
			r = e.getDate(),
			i = (e.getDay(), t + "-");
		return n < 10 && (i += "0"), i += n + "-", r < 10 && (i += "0"), i += r
	},
	tomorrowDate = function() {
		var e = (new Date).addDay(1),
			t = e.getFullYear(),
			n = e.getMonth() + 1,
			r = e.getDate(),
			i = (e.getDay(), t + "-");
		return n < 10 && (i += "0"), i += n + "-", r < 10 && (i += "0"), i += r
	},
	yesterday = function() {
		var e = (new Date).addDay(-1);
		return e = formatDate(e)
	},
	curDateTime = function(e) {
		e = void 0 == e ? "" : e;
		var t = new Date,
			n = t.getFullYear(),
			r = t.getMonth() + 1,
			i = t.getDate(),
			o = (t.getDay(), t.getHours()),
			a = t.getMinutes(),
			s = t.getSeconds(),
			c = (t.getMilliseconds(), n);
		return c = r > 9 ? c + e + r : c + e + "0" + r, c = i > 9 ? c + e + i : c + e + "0" + i, o > 9 ? "" != e ? c = c + " " + o : c += o : c = "" != e ? c + " 0" + o : c + "0" + o, a > 9 ? "" != e ? c = c + ":" + a : c += a : c = "" != e ? c + ":0" + a : c + "0" + a, s > 9 ? "" != e ? c = c + ":" + s : c += s : c = "" != e ? c + ":0" + s : c + "0" + s, c
	},
	getFirstAndLastMonthDay = function(e, t) {
		var n = e + "-" + t + "-01",
			r = new Date(e, t, 0),
			i = e + "-" + t + "-" + r.getDate();
		return {
			firstDate: n,
			lastDate: i
		}
	},
	dateDiff = function(e, t) {
		var n, r, i, o;
		return n = e.split("-"), r = new Date(n[1] + "/" + n[2] + "/" + n[0]), n = t.split("-"), i = new Date(n[1] + "/" + n[2] + "/" + n[0]), o = parseInt(Math.abs(r - i) / 1e3 / 60 / 60 / 24)
	},
	weekStr = function(e) {
		var t = e.getDay(),
			n = "";
		switch (t) {
			case 0:
				n = "星期日";
				break;
			case 1:
				n = "星期一";
				break;
			case 2:
				n = "星期二";
				break;
			case 3:
				n = "星期三";
				break;
			case 4:
				n = "星期四";
				break;
			case 5:
				n = "星期五";
				break;
			case 6:
				n = "星期六"
		}
		return n
	};
$.isValidate = function(e, t) {
	var n;
	switch (e) {
		case 0:
			return n = /-?\\d+/, n.test(t);
		case 1:
			return n = /^\d+(\.\d+)?$/, n.test(t);
		case 2:
			return n = /^(-?\d+)(\.\d+)?$/, n.test(t);
		case 3:
			return n = /^[A-Za-z]+$/, n.test(t);
		case 4:
			return n = /[\u4e00-\u9fa5]/, n.test(t);
		case 5:
			return n = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/, n.test(t);
		case 6:
			return n = /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/, n.test(t);
		case 7:
			return n = /^1\d{10}$/, n.test(t);
		case 8:
			return n = /(100|([1-9]?[0-9]?))%/, n.test(t);
		case 9:
			return n = /^\w+$/, n.test(t);
		case 10:
			return n = /^[0-9]*[1-9][0-9]*$/, n.test(t);
		case 11:
			return n = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/, n.test(t);
		case 12:
			return n = /(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/, n.test(t);
		case 13:
			return n = /^[1-9]\d{0,3}$/, n.test(t);
		case 14:
			return n = /^[0-9]\d{0,7}(\.\d{1,2})?$/, n.test(t);
		case 15:
			return n = /^[1-9]\d{0,8}$/, n.test(t);
		case 16:
			return n = /&+/, n.test(t);
		case 17:
			return n = /^[1-9]\d{0,4}$/, n.test(t);
		case 18:
			return n = /^([1][7-9][0-9][0-9]|[2][0][0-9][0-9])(\-)([0][1-9]|[1][0-2])(\-)([0-2][1-9]|[3][0-1])()([0-1][0-9]|[2][0-3])(:)([0-5][0-9])(:)([0-5][0-9])$/, n.test(t);
		case 19:
			return n = /^[1-9]\d*$/, n.test(t);
		case 20:
			return n = /^[0-9]\d{0,2}$/, n.test(t);
		case 21:
			return n = /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}/, n.test(t);
		case 22:
			return n = /^[D]\d{8}$/, n.test(t);
		case 23:
			return n = /^[0-9]\d{5}$/, n.test(t);
		case 24:
			return n = /\d{15}|\d{17}[0-9Xx]/, n.test(t);
		case 25:
			return n = /^(\d{16}|\d{19})$/, n.test(t);
		case 26:
			return n = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/, n.test(t);
		default:
			return !1
	}
};
var touchEvents = {
		touchstart: "touchstart",
		touchmove: "touchmove",
		touchend: "touchend",
		initTouchEvents: function() {
			this.touchstart = "mousedown", this.touchmove = "mousemove", this.touchend = "mouseup"
		}
	},
	getLocation = function(e, t) {
		var n = {
			id: "62",
			name: "北京",
			date: curDateTime()
		};
		$.cookie("HAPPYTO_MOBILE_CITY", JSON.stringify(n), {
			expires: 1,
			path: "/"
		}), navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(t) {
			var n = t.coords.latitude,
				r = t.coords.longitude,
				i = new BMap.Point(r, n),
				o = new BMap.Geocoder;
			o.getLocation(i, function(t) {
				var n = t.addressComponents,
					r = {
						id: "",
						name: n.province,
						date: curDateTime()
					};
				$.cookie("HAPPYTO_MOBILE_CITY", JSON.stringify(r), {
					expires: 7,
					path: "/"
				}), void 0 != e && e(r)
			})
		}, function(e) {
			switch (e.code) {
				case 1:
					console.log("位置服务被拒绝");
					break;
				case 2:
					console.log("暂时获取不到位置信息");
					break;
				case 3:
					console.log("获取位置信息超时");
					break;
				default:
					console.log("未知错误")
			}
			var n = {
				id: "62",
				name: "北京",
				date: curDateTime()
			};
			$.cookie("HAPPYTO_MOBILE_CITY", JSON.stringify(n), {
				expires: 1,
				path: "/"
			}), void 0 != t ? t(e) : console.log(e)
		}, {
			timeout: 5e3,
			enableHighAccuracy: !0
		}) : void 0 != t ? t("你的浏览器不支持获取地理位置信息。") : console.log("你的浏览器不支持获取地理位置信息")
	};
$(document).ready(function() {
	$(document).ajaxError(function(e, t, n) {
		console.log("Error requesting " + n.url + ": " + t.status + " " + t.statusText)
	}), $("#btnBack").click(function() {
		history.back()
	}), init()
});