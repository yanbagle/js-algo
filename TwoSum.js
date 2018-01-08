function twoSum (array, targetSum) {

    if (!array || !targetSum) {
        return null;
    }

    let sumPairs = [];
    let arrayHT = {};

    for (let ele of array) {
        const target = targetSum - ele;
        if (arrayHT[target]) {
            sumPairs.push({'one': target, 'two': ele});
        }
        arrayHT[ele] = ele;
    }

    return sumPairs;
}

let output = twoSum([4,5,1,8], 6);

console.log(output);