// Say you have an array for which the ith element is the price of a given stock on day i.
//
//     Design an algorithm to find the maximum profit. You may complete as many transactions as you like
// (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at
// the same time (ie, you must sell the stock before you buy again).
//
// [2,1,2,0,1], output = 2

function maxProfit2(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }

    var min = arr[0];
    var runningProfit = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] - min > 0) {
            runningProfit += arr[i] - min;
            min = arr[i]; // once we sell our stock for profit, we will have a new min
        }
        min = Math.min(min, arr[i]);
    }

    return runningProfit;
}

var yo = maxProfit2([1,3,4]);
display(yo);