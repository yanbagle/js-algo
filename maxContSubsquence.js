function maxContSubsquence (arr) {
    if (!arr) {
        return -1;
    }

    let current = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        current = Math.max(arr[i], current + arr[i]);
        max = Math.max(current, max);
    }

    return max;
}

var yo = maxContSubsquence([-2, -3, 4, -1, -2, 1, 5, -3]);
display(yo);