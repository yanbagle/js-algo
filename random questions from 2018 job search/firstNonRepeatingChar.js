function firstNonRepeatingChar (str) {
	if (!str) {
		return null;
	}

	let freqCount = {};

	for (let char of str) {
		freqCount[char] ? freqCount[char]++ : freqCount[char] = 1;
	}

	for (let char in freqCount) {
		if (freqCount[char] === 1) {
			return char;
		}
	}

	return null;
}

display(firstNonRepeatingChar('aavbbc'));
