function binarySearch (arr, target) {
    if (!arr || arr.length === 0) {
        return -1;
    }

    arr.sort();

    let start = 0;
    let end = arr.length - 1;
    let middle;

    while (start <= end) {
        middle = Math.floor(start + end / 2);
        if (arr[middle] === target) {
            return middle;
        } else if (target < arr[middle]) {
            end = middle - 1;
        } else if (target > arr[middle]) {
            start = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7], 1));