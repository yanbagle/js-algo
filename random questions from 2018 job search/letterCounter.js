function letterCounter(str) {
    if (!str) {
        return {};
    }

    var charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

var str = 'aabbccaa';
console.log(letterCounter(str));