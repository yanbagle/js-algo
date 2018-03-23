function coinChange (coins, amount) {

	const change = [];
	coins = coins.sort((a,b) => {
		return a - b;
	});
	let coinsIndex = coins.length - 1;
	let amountLeft = amount % coins[coinsIndex];

	while (amountLeft >= 0 && coinsIndex > -1) {
		let times = Math.floor(amount / coins[coinsIndex]);
		amountLeft = amount % coins[coinsIndex];
		while (times > 0) {
			times--;
			change.push(coins[coinsIndex]);
		}
		coinsIndex--;
		amount = amountLeft;
	}

	if (amountLeft > 0) {
		return -1;
	}

	return change.length;
}

console.log(coinChange([1,2,5,10], 18));