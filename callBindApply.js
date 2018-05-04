const a = {
	data: {
		x: 100,
		y: 200
	},
	someFunc: function () {
		console.log(this.data.x);
	}
};

// a.someFunc.call(a);

Function.prototype._bind = function (context) {
	let func = this;
	let args1 = [].slice.call(arguments, 1);
	// return function () {
	// 	let args2 = [].slice.call(arguments);
	// 	return func.apply(context, args1.concat(args2));
	// }
	return () => {
		let args2 = [].slice.call(arguments);
		return this.apply(context, args1.concat(args2));
	}
};

const someFunc = a.someFunc._bind({data: {x: 2}});
someFunc();
