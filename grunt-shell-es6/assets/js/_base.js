var app = {
	ele: {},
	init: function () {
		//on DOM ready
		$((e) => {
			this.onReady(e);
		});

		$("window").on({
			scroll: (e) => { this.onScroll(e); },
			resize: (e) => { this.onResize(e); },
			load: (e) => { this.onLoad(e); }
		});
	},

	onReady: function (e) {
		this.binds();
	},

	onLoad: function (e) {

	},

	onScroll: function (e) {

	},

	onResize: function (e) {

	},

	binds: function () {

	}
};

app.init();
