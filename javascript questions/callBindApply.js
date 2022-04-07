Function.bind.prototype = function (context, ...args) {
	// args will be array e.g [1,2,3]
	
	const fn = this; // fn will be the function attached to bind
	return function () {
		fn.apply(context, args);
	}
}

Function.call.prototype = function (context, ...args) {
	const fn = this;
	
	
}


Function.apply.prototype = function (context, args) {
	
}