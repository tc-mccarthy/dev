var app = {
    init: function() {
        var _this = this;
        $(_this.onReady.bind(_this));
        $(window).scroll(_this.onScroll.bind(_this));
        $(window).resize(_this.onResize.bind(_this));
        $(window).load(_this.onLoad.bind(_this));
    },

    onReady: function() {

    },

    onLoad: function() {

    },

    onScroll: function() {

    },

    onResize: function() {

    }
};

app.init();