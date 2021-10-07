function knapsack01 (w, v, maxWeight) {
    if (!w || !v || !maxWeight) {
        return 0;
    }

    let arr = [];

    for (let i = 0; i <= v.length; i++) {
        for (let j = 0; j <= maxWeight; j++) {
            if (i === 0 || j === 0) {
                if (!arr[i]) {
                    arr[i] = [];
                }
                arr[i][j] = 0;
            } else {
                const remainingWeight = j - w[i-1];
                if (remainingWeight >= 0) {
                    arr[i][j] = Math.max(arr[i-1][j] , arr[i-1][remainingWeight] + v[i-1]);
                } else {
                    arr[i][j] = arr[i-1][j];
                }
            }
        }
    }

    return arr[v.length][maxWeight];
}

console.log(knapsack01([10, 20, 30],[60, 100, 120],50));