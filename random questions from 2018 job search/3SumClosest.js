function threeSumClosest(arr, target) {
	if (!arr || !target) {
		return;
	}

	arr = arr.sort();

	let diff = Math.max;
	let closet;

	for (let i = 0; i < arr.length; i++) {
		let j = i + 1;
		let k = arr.length - 1;
		while (j < k) {
			let sum = arr[i] + arr[j] + arr[k];
			let currentDiff = Math.abs(target - sum);
			if (sum === target) {
				return sum;
			}
			if (currentDiff < diff) {
				diff = currentDiff;
				closet = sum;
			}
			if (sum < target) {
				k--;
			} else {
				j++;
			}
		}
	}

	return closet;
}