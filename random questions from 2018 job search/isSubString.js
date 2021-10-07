function subString (str, substring) {
    if (!str || !substring) {
        return false;
    }

    let mismatched;
    let currIndex;
    for (let i = 0; i < str.length; i++) {
        mismatched = false;
        currIndex = i;
        for (let subStrChar of substring) {
            if (subStrChar !== str.charAt(currIndex)) {
                mismatched = true;
                break;
            }
            currIndex++;
        }
        if (!mismatched) {
            return true;
        }
    }

    return false;
}

console.log(subString('amazon','az'));