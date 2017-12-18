// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
//
//     For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
//     the contiguous subarray [4,-1,2,1] has the largest sum = 6.

function maxSubArray(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }

    var maxSum = arr[0];
    var runningSum = arr[0];

    for (var i = 1; i < arr.length; i++) {
        runningSum = Math.max(arr[i] + runningSum, arr[i]);
        maxSum = Math.max(runningSum, maxSum);
    }

    return maxSum;
}

var yo = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);

window.onload = function() {
    document.getElementById('console').innerHTML = yo;
};