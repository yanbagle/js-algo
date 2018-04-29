function isStringPermPalindrome (str) {
    if (!str) {
        return;
    }

    let freq = {};

    for (let char of str) {
        if (char !== ' ') {
            freq[char] ? freq[char]++ : freq[char] = 1;
        }
    }

    let foundOdd = false;

    for (let char in freq) {
        if (freq[char] % 2 !== 0) {
            if (foundOdd) {
                return false;
            }
            foundOdd = true;
        }
    }

    return true;
}

console.log(isStringPermPalindrome('taco cat'));
