function longestUniqueCharSubStr(str) {

    if (!str) {
        return null;
    }

    let currentLength = 0;
    let maxLength = 0;
    let visited = {};

    for (let i = 0; i < str.length; i++) {
        if (visited[str.charAt(i)] !== undefined) {
            maxLength = Math.max(maxLength, currentLength);
            currentLength = i - visited[str.charAt(i)];
        }
        else {
            currentLength++;
        }
        visited[str.charAt(i)] = i;
    }

    maxLength = Math.max(maxLength, currentLength);

    return maxLength;
}

console.log(longestUniqueCharSubStr('abba'));