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
	let count = 0;
	return function() {
		count++;
		let args = arguments;
		const context = this;
		if (!inThrottle) {
			func.call(context, count);
			inThrottle = true;
			setTimeout(() => inThrottle = false, limit);
		}
	}
};

const throttle2 = function (func, limit) {
	let timeout;
	let count = 0; // count is for debugging only
	let preFunc;
	return function execute() {
		preFunc = func;
		count++;
		if (!timeout) {
			func(count);
			preFunc = null;
			timeout = true;
			setTimeout(() => {
				timeout = false;
				if (preFunc) {
					execute();
				}
			}, limit);
		}
	}
};

// window.onload = function() {
// 	const debounceBtn = document.getElementById('debounce');
// 	debounceBtn.addEventListener('click', debounce(function() {
// 		console.info('Hey! It is', new Date().toUTCString());
// 	}, 3000));
// };

let min = 5000;
let max = 6000;
window.onload = function() {
	const btn = document.getElementById('throttle');
	btn.addEventListener('click', throttle2(function(count) {
		console.log(count);
	}, Math.floor(Math.random() * (max - min + 1)) + min));
};



