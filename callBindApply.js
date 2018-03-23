const a = {
	data: {
		x: 100,
		y: 200
	},
	someFunc: function () {
		console.log(this.data.x);
	}
};

a.someFunc.call(a);