$(function() {
	var banner = document.querySelector(".mei-top");
	var bannerHeight = $(".mei-top").height();
	var $copyHeader = $(".mei-top");
	var topEffect = $(".main");
	var copyHeader = $(".mei-top")
	var headHeight = 20;

	banner.addEventListener('touchstart', touchStart, false);
	banner.addEventListener('touchmove', touchMove, false);
	banner.addEventListener('touchend', toucheEnd, false);



	function touchStart(e) {
		// 页面处于顶部执行，记录滑屏起始坐标点的x,y
		if ($(window).scrollTop() <= 0) {
			direction = "up"
		}
		if (direction) {
			isTouchStart = isScale = true;
			startX = e.changedTouches[0].pageX;
			startY = e.changedTouches[0].pageY;
		}
	}

	function touchMove(e) {
		if (isTouchStart) {
			// 避免横向滑屏影响
			// 横向滑屏组织事件
			var dDis = Math.abs(e.touches[0].pageX - startX) - Math.abs(e.touches[0].pageY - startY);
			if (dDis > 0) return false;

			// 动效参数运算
			if (e.changedTouches[0].pageY - startY > 0 && isScale && direction == "up") {

				e.preventDefault();
				// 滑屏偏移量与动效缩放比例公式
				var scale = (1 + (e.changedTouches[0].pageY - startY) / (2 * bannerHeight)).toFixed(2);
				// 开始执行动效，显示需要放大动效的Dom结构
				$copyHeader.addClass("show");
				// 执行放大动效几主体内容下拉动效
				copyHeader.scaleX = copyHeader.scaleY = scale;
				topEffect.translateY = bannerHeight * (scale - 1);
				topEffect.css("transform", "translateY(" + topEffect.translateY + "px" + ")");
			}
		}
	}

	function toucheEnd(e) {
		if (isTouchStart && isScale) {
			// 根据滑动距离计算回弹时间
			var distanceY = e.changedTouches[0].pageY - startY;
			var time = distanceY;
			if (time < 150) {
				time = 150;
			} else if (time > 250) {
				time = 250
			}
			// 执行回弹动效和重置
			to(topEffect, "translateY", 0, time, iosEase, onChange, function() {
				// 回弹动效结束，隐藏需要放大动效的Dom结构
				copyHeader.removeClass("show");
				isScale = false;
				$('.main').css("transform", "translateY(0px)");
			});
		}
	}

	// 回弹动画
	function onChange(value) {
		if (direction == "up") {
			copyHeader.scaleX = copyHeader.scaleY = (headHeight + value) / headHeight;
		}
	}

	// 曲线运动函数
	function iosEase(x) {
		return Math.sqrt(1 - Math.pow(x - 1, 2));
	}

	var tickID = 0;

	function to(el, property, value, time, ease, onChange, onEnd) {
		var current = el[property];
		var dv = value - current;
		var beginTime = new Date();
		var toTick = function() {
			var dt = new Date() - beginTime;
			if (dt >= time) {
				el[property] = value;
				onChange && onChange(value);
				onEnd && onEnd(value);
				return;
			}
			el[property] = dv * ease(dt / time) + current;
			tickID = requestAnimationFrame(toTick);
			onChange && onChange(el[property]);
		}
		toTick();
	}
});