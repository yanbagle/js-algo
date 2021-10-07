function multiply (a , b) {

	if (typeof a !== 'number' || typeof b !== 'number') {
		return;
	}

	let product = 0;
	while (b > 0) {
		b--;
		product += a;
	}

	return product;
}

function divide (a, b) {

	if (typeof a !== 'number' || typeof b !== 'number') {
		return;
	}

	let quotient = 0;
	let total = 0;
	while (total < a) {
		total += b;
		quotient++;
	}

	if (total > a) {
		quotient--;
	}

	return quotient;
}

console.log(divide(10,4));