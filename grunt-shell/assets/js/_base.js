var app = {
	ele: {},
	init: function () {
		var _this = this;
		$(_this.onReady.bind(_this));

		$(window).on({
			scroll: function (e) { _this.onScroll(e); },
			resize: function (e) { _this.onResize(e); },
			load: function (e) { _this.onLoad(e); }
		});
	},

	onReady: function (e) {
		var _this = this;
		this.binds();
	},

	onLoad: function (e) {
		var _this = this;
	},

	onScroll: function (e) {
		var _this = this;
	},

	onResize: function (e) {
		var _this = this;
	},

	binds: function () {
		var _this = this;
	}
};

app.init();
