function maxTripletArray (arr) {
    if (!arr) {
        return -1;
    }
    if (arr.length < 3) {
        return -1;
    }

    arr.sort();

    const length = arr.length;
    return Math.max(arr[length - 1] * arr[length - 2] * arr[length - 3], arr[0] * arr[1] * arr[length - 1]);
}

const max1 = maxTripletArray([10, 3, 5, 6, 20]);
const max2 =maxTripletArray( [-10, -3, -5, -6, -20]);
const max3 =maxTripletArray([1, -4, 3, -6, 7, 0]);

console.log(max1);
console.log(max2);
console.log(max3);