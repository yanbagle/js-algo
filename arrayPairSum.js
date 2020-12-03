function arrayPairsum (arr, target) {

    if (!arr) {
        return null;
    }

    let table = {};

    for (let ele of arr) {
        const pair = target - ele;
        if (table[pair]) {
            return {pair1: ele, pair2: pair};
        }
        table[ele] = true;
    }

    return null;
}

const pair = arrayPairsum([1, 4, 45, 6, 10, -8], 16);
console.log("pair 1: " + pair.pair1);
console.log("pair 2: " + pair.pair2);
// yo
