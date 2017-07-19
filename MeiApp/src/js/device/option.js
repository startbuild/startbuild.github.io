var list = [{
	"deviname": [{
		"name": "掘进机",
		"area": ["掘进机", "掘进机配件"]
	}, {
		"name": "采煤机",
		"area": ["采煤机", "采煤机配件"]
	}, {
		"name": "刨煤机",
		"area": ["刨煤机", "刨煤机配件"]
	}, {
		"name": "截煤机",
		"area": ["截煤机", "截煤机配件"]
	}, {
		"name": "连续采煤机",
		"area": ["连续采煤机", "连续采煤机配件"]
	}, {
		"name": "钻机",
		"area": ["坑道钻机", "导轨钻机", "煤钻机", "防突钻机"]
	}]
}];

var dt = [{
	"deviname": [{
		"name": "刮板机",
		"area": ["刮板机", "刮板机配件"]
	}, {
		"name": "转载机",
		"area": ["转载机", "转载机配件"]
	}, {
		"name": "皮带机",
		"area": ["皮带机", "皮带机配件"]
	}, {
		"name": "其他运输设备",
		"area": ["乘人机", "电动机", "清车机", "爬车机"]
	}]
}];

var dl = [{
	"deviname": [{
		"name": "刮板机11",
		"area": ["刮板机", "刮板机配件"]
	}, {
		"name": "转载机11",
		"area": ["转载机", "转载机配件"]
	}, {
		"name": "皮带机11",
		"area": ["皮带机", "皮带机配件"]
	}, {
		"name": "其他运输设备11",
		"area": ["乘人机", "电动机", "清车机", "爬车机"]
	}]
}];

// 二级目录初始化显示
devices(list[0].deviname);

// 一级目录初始化显示
var first = ["采掘设备", "运输设备", "支护设备"];
$.each(first, function(i, val) {
	$(".deviceLeft ul").append('<li data-id=' + i + '>' + val + '</li>');
});

//一级目录第一项默认选中状态
$(".deviceLeft ul li:first-child").addClass("active");

// 一级目录对应各个二级目录
$(".deviceLeft ul li").on("click", function() {
	$(this).addClass("active").siblings().removeClass("active");
	var array = [list, dl, dt];
	devices(array[$(this).index()][0].deviname);
});

function devices(data) {
	$(".deviceCenter ul").html("");
	$.each(data, function(i, val) {
		$(".deviceCenter ul").append('<li data-id=' + i + '>' + val.name + '</li>');
	});
	$('.deviceCenter ul li').on('click', {
		data: data
	}, Items);
}

function Items(data) {
	$('.deviceCenter ul li').removeClass('active');
	$(this).addClass('active');
	var data = data.data.data;
	$(".deviceCenter").css("width", "30%");
	$(".deviceRight").show();
	var id = $(this).attr('data-id');
	$(".deviceRight ul").html("");
	$.each(data[id].area, function(index, item) {
		$(".deviceRight ul").append('<li data-cid=' + index + '>' + item + '</li>')
	});
	$(".deviceRight ul li").on('click', Prompt);
}

function Prompt() {
	var c = $(".deviceCenter .active").text() + '—' + $(this).text();
	alert('您选择了：' + c);
}