const a = {
	data: {
		x: 100,
		y: 200
	},
	someFunc: function (arg1 = 0, arg2 = 0) {
		console.log(this.data.x);
		console.log(arg1);
		console.log(arg2);
	}
};
//
// a.someFunc.call(a); // without call, this would be set to the global window scope and not the 'a' object
//
// // old school version
// Function.prototype._bind = function (context) {
// 	let func = this;
// 	let args1 = [].slice.call(arguments, 1);
// 	return function () {
// 		let args2 = [].slice.call(arguments);
// 		return func.apply(context, args1.concat(args2));
// 	}
// };
//
// // es6 is dreamy
// Function.prototype._bind2 = function (context, ...args1) {
// 	return (...args2) => {
// 		return this.apply(context, args1.concat(args2));
// 	}
// };
//
// const someFunc = a.someFunc._bind({data: {x: 2}});
// someFunc(); // logs 2 0 0
//
// const someFunc2 = a.someFunc._bind2({data: {x: 3}}, 1);
// someFunc2(2); // logs 3 1 2

function greet () {
	console.log(this.a.x);
}

const obj = greet.bind({a: {x: 1}});
const obj2 = greet.bind({a: {x: 2}});
obj2();