/**
 * Created by zeke on 2016/1/14.
 */

/*
 * iScroll进行封装
 * 此模块依赖jquery和iScroll-probe
 * */
(function (window, $, IScroll) {
    function IscrollPull(wrapper, topValue) {
        //preventDefaultException: { tagName: /^(P|B|H1|H2|DIV|A|INPUT|TEXTAREA|BUTTON|SELECT)$/ },{tagName: /.*/}
        var self = this;
        self.topValue = -topValue;
        self.pullDownFlag = 0;
        self.pullUpFlag = 0;
        self.iscroll = new IScroll(wrapper, {
            preventDefault:false,
            probeType: 3,
            mouseWheel: false,
            scrollbars: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            startY: self.topValue
        });

        self.iscroll.on("scroll", function () {
            // console.log("y:"+this.y+"   maxY:"+this.maxScrollY);
            if (this.y >= 0 && this.y <= 10) {
                $(".pullDown").html("下拉刷新");

            } else if (this.y > 40) {
                //判断下拉
                $(self).trigger(IscrollPull.scrollPullEvent.pullDown);
                self.pullDownFlag = 1;

            } else if (this.y < (this.maxScrollY - 40)) {
                //判断上拉
                $(self).trigger(IscrollPull.scrollPullEvent.pullUp);
                self.pullUpFlag = 1;
            } else if (this.y < (this.maxScrollY + 20)) {
                $(".pullUp").html("上拉加载更多");
            }
        });

        self.iscroll.on("scrollEnd", function () {
            if (self.pullDownFlag == 1) {
                //下拉
                $(self).trigger(IscrollPull.scrollPullEvent.pullDownEnd);
                self.pullDownFlag = 0;
            } else if (self.pullUpFlag == 1) {
                //上拉
                $(self).trigger(IscrollPull.scrollPullEvent.pullUpEnd);
                self.pullUpFlag = 0;
            }
        });

        document.body.addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, false);

    }

    IscrollPull.scrollPullEvent = {
        "pullDown": "pullDown",
        "pullDownEnd": "pullDownEnd",
        "pullUp": "pullUp",
        "pullUpEnd": "pullUpEnd"
    };
    IscrollPull.prototype.refresh = function () {
        var self = this;
        self.iscroll.refresh();
    };
    IscrollPull.prototype.scrollToTop = function () {
        var self = this;
        self.iscroll.scrollTo(0, self.topValue, 500);
    };
    IscrollPull.prototype.scrollToElement = function () {
        var self = this;
        self.iscroll.scrollToElement(element);
    };
    IscrollPull.prototype.clearUpMsg = function () {
        if($pullUp) $pullUp.html("数据全部加载");
    };

    window.IscrollPull = IscrollPull;

})(window, jQuery, IScroll);


/*
 * ZHJIscroll上拉加载iscroll5
 * */
(function (window, $, IScroll) {
    //TODO 上拉加载
    function ZHJIscroll(wrapper) {

        var self = this;
        self.pullUpFlag = 0;
        self.iscroll = new IScroll(wrapper, {
            preventDefault: false,
            probeType: 3,
            mouseWheel: false,
            scrollbars: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            lockDirection:"up",
            click: false
        });

        self.iscroll.on("scroll", function () {
            //console.log("y:"+this.y+"   maxY:"+this.maxScrollY);
            if (this.y < (this.maxScrollY - 40)) {
                //判断上拉
                $(self).trigger(ZHJIscroll.scrollPullEvent.pullUp);
                self.pullUpFlag = 1;
            } else if (this.y < (this.maxScrollY + 20)) {
                $(".pullUp").html("上拉加载更多");
            }

        });


        self.iscroll.on("scrollEnd", function () {
            if (self.pullUpFlag == 1) {
                $(self).trigger(ZHJIscroll.scrollPullEvent.pullUpEnd);
                self.pullUpFlag = 0;
            }
        });

        //document.body.addEventListener('touchmove', function (e) {
        //    e.preventDefault();
        //}, false);
    }

    ZHJIscroll.scrollPullEvent = {
        "pullDown": "pullDown",
        "pullDownEnd": "pullDownEnd",
        "pullUp": "pullUp",
        "pullUpEnd": "pullUpEnd"
    };


    ZHJIscroll.prototype.refresh = function () {
        var self = this;
        self.iscroll.refresh();
    };
    ZHJIscroll.prototype.scrollToElement = function (element) {
        var self = this;
        self.iscroll.scrollToElement(element);
    };
    ZHJIscroll.prototype.clearUpMsg = function () {
        if($pullUp) $pullUp.html("数据全部加载");
    };

    window.ZHJIscroll = ZHJIscroll;

})(window, jQuery, IScroll);


var myPullScroll = null;
function listCommon() {
    //TODO
    FastClick.attach(document.body);

    $pullDown = $(".pullDown");
    // $pullDownOffset = $pullDown.get(0).offsetHeight;
    $pullUp = $(".pullUp");
    // $pullUpOffset = $pullUp.get(0).offsetHeight;
    $scroller = $(".scroller");

    myPullScroll = new IscrollPull(".wrapper", $pullDown.height());

    $(myPullScroll).on(IscrollPull.scrollPullEvent.pullDown, pullDown);
    $(myPullScroll).on(IscrollPull.scrollPullEvent.pullDownEnd, pullDownEnd);
    $(myPullScroll).on(IscrollPull.scrollPullEvent.pullUp, pullUp);
    $(myPullScroll).on(IscrollPull.scrollPullEvent.pullUpEnd, pullUpEnd);

    $(myPullScroll).trigger(IscrollPull.scrollPullEvent.pullDownEnd);

    //判断滚动容器和窗口大小
    if ($(document).height() < $(window).height()) {
        $pullDown.text("");
        $pullUp.text("");
    }

}


var ZhPullScroll = null;
function pullupCommon() {
    //上拉加载的初始化接口
    FastClick.attach(document.body);

    $pullDown = $(".pullDown");
    $pullUp = $(".pullUp");
    $scroller = $(".scroller");

    ZhPullScroll = new ZHJIscroll(".wrapper");
    //$(ZhPullScroll).on(IscrollPull.scrollPullEvent.pullDown, pullDown);
    $(ZhPullScroll).on(IscrollPull.scrollPullEvent.pullDownEnd, pullDownEnd);
    $(ZhPullScroll).on(IscrollPull.scrollPullEvent.pullUp, pullUp);
    $(ZhPullScroll).on(IscrollPull.scrollPullEvent.pullUpEnd, pullUpEnd);

    $(ZhPullScroll).trigger(IscrollPull.scrollPullEvent.pullDownEnd);

    //判断滚动容器和窗口大小
    if ($(document).height() < $(window).height()) {
        $pullDown.text("");
        $pullUp.text("");
    }
}


function pullDown() {
    $pullDown.html("松手刷新");
}
function pullDownEnd() {
    $pullDown.html("正在刷新");
    update(true);
}
function pullUp() {
    $pullUp.html("松手加载");
}
function pullUpEnd() {
    //TODO 上拉结束
    $pullUp.html("正在加载");
    update(false);
}

function update(isRefresh) {
    //TODO 页面重写刷新/加载方法
}

