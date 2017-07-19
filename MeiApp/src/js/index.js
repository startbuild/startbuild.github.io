function init() {
	FastClick.attach(document.body);
	swiperImg();
	// 加载页面事件
	EventClick();
};

// 轮播图
var swiperImg = function() {
	var swiper_banner = new Swiper(".swiper-container", {
		pagination: ".swiper-pagination",
		paginationClickable: false,
		spaceBetween: 0,
		centeredSlides: true,
		autoplay: 2500,
		autoplayDisableOnInteraction: false,
		loop: true
	});
};

var EventClick = function() {
	// 搜索框输入
	$("#txtSearchAll").on("focus",function() {
		location.href="device/search.html";
	});
	$("#btnSearchAll").on("click",function() {
		location.href="device/search.html";
	});
};

// 新设备
function newDeviceClick() {
	// var url ="new_device.html?id="+id;
	location.href="device/new_device.html"
};
// 二手设备
function oldDeviceClick() {
	location.href = "device/old_device.html"
};
// 租赁设备
function rentDeviceClick() {
	location.href = "device/rent_device.html"
};
// 维修
function repairClick() {
	location.href = "device/repair.html"
};

// 热门产品推荐
function detailClick(id) {
	location.href="device/details.html"
}