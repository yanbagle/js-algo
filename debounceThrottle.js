const debounce = (func, delay) => {
	let inDebounce;
	return function() {
		const context = this;
		const args = arguments;
		console.log(inDebounce);
		clearTimeout(inDebounce); // clears out previous setTimeout function
		inDebounce = setTimeout(() => {
			func.apply(context, args);
		}, delay)
	}
};


const throttle = (func, limit) => {
	let inThrottle;
	return function() {
		const args = arguments;
		const context = this;
		if (!inThrottle) {
			func.apply(context, args);
			inThrottle = true;
			setTimeout(() => inThrottle = false, limit);
		}
	}
}

window.onload = function() {
	const debounceBtn = document.getElementById('debounce');
	debounceBtn.addEventListener('click', debounce(function() {
		console.info('Hey! It is', new Date().toUTCString());
	}, 3000));
};



