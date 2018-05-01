function longestUniqueCharSubStr(str) {

    if (!str) {
        return;
    }

    let seen = {};
    let maxLength = 0;
    let currLength = 0;
    for (let i = 0; i < str.length; i++) {
        if (!seen[str.charAt(i)]) {
            seen[str.charAt(i)] = true;
            currLength++;
        } else { // char has been seen before
            seen = {};
            if (str.charAt(i - 1) === str.charAt(i)) { // if previous char is the same
                seen[str.charAt(i)] = true;
                currLength = 1;
            } else {
                currLength = 2;
                seen[str.charAt(i)] = true;
                seen[str.charAt(i-1)] = true;
            }
        }
        maxLength = Math.max(maxLength, currLength);
    }

    return maxLength;
}

console.log(longestUniqueCharSubStr('babcddbd'));
console.log(longestUniqueCharSubStr('bbca'));
console.log(longestUniqueCharSubStr('dvdf'));