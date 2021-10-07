function indexOfNeedle(haystack, needle) {
    if ((haystack === '' && needle === '') || (needle === '' && haystack)) {
        return 0;
    }
    else if (!haystack || !needle) {
        return -1;
    }

    for (let i = 0; i < haystack.length; i++) {
        let needleIndex = 0;
        let haystackIndex = i;
        while (haystackIndex < haystack.length && haystack[haystackIndex] === needle[needleIndex]) {
            haystackIndex++;
            needleIndex++;
            if (needleIndex === needle.length) {
                return i;
            }
        }
    }

    return -1;
}

const yo = indexOfNeedle('', '');
display(yo);