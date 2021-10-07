function secondSmallest(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }

    var smallest = Number.MAX_VALUE;
    var secondSmallest = Number.MAX_VALUE;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest) {
            secondSmallest = num;
        }

    }

    return secondSmallest;
}

var yo = secondSmallest([1, 2, 0, 10, 34, 5]);

display(yo);