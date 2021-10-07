function add (x) {
	let result = x;
	function inner(y) {
		if (y) {
			result += y;
			return inner;
		} else {
			return result;
		}
	}
	return inner;
}

console.log(add(2)(3)(1)());
