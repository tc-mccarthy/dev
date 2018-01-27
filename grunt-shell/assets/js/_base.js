var app = {
	ele: {},
	init: function () {
		var _this = this;
		$(_this.onReady.bind(_this));

		$(window).on({
			scroll: function () { _this.onScroll(); },
			resize: function () { _this.onResize(); },
			load: function () { _this.onLoad(); }
		});
	},

	onReady: function () {
		var _this = this;
		this.binds();
	},

	onLoad: function () {
		var _this = this;
	},

	onScroll: function () {
		var _this = this;
	},

	onResize: function () {
		var _this = this;
	},

	binds: function () {
		var _this = this;
	}
};

app.init();
