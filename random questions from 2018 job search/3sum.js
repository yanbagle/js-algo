// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.
//
//     Note: The solution set must not contain duplicate triplets.
//
//     For example, given array S = [-1, 0, 1, 2, -1, -4],
//
//     A solution set is:
//     [
//         [-1, 0, 1],
//         [-1, -1, 2]
//     ]

function threeSum (arr) {
    if (!arr || arr.length === 0) {
        return null;
    }

    arr = arr.sort();

    let output = [];
    let index = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        let j = i + 1;
        let k = arr.length - 1;
        while (j < k) {
            if (arr[i] + arr[j] + arr[k] === 0) {
                const zeroSum = [arr[i], arr[j], arr[k]];
                output[index++] = zeroSum;
                j++;
                k--;
                // handle duplicate case here
            } else if (arr[i] + arr[j] + arr[k] < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return output;

}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));