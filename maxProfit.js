// Say you have an array for which the ith element is the price of a given stock on day i.
//
// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock),
// design an algorithm to find the maximum profit.
//
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
//
// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
//
// Input: [7, 6, 4, 3, 1]
// Output: 0
//
// In this case, no transaction is done, i.e. max profit = 0.

function maxProfit(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }

    var min = arr[0];
    var maxProfit = 0;

    for (var i = 1; i < arr.length; i++) {
        maxProfit = Math.max(maxProfit, arr[i] - min);
        min = Math.min(min, arr[i]);
    }

    return maxProfit;
}

var yo = maxProfit([7, 1, 5, 3, 6, 4]);
display(yo);