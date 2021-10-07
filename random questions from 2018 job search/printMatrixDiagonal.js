function printDiagonalMatrix (arr) {
    if (!arr) {
        return;
    }

    let newRow = 0;
    for (let i = 0; i < arr.length + arr[0].length - 1; i++) {
        let r = 0;
        let c = i;
        if (c >= arr[0].length - 1) {
            c = arr[0].length - 1;
            r = newRow++;
        }
        while (r < arr.length && c < arr[0].length && r >= 0 && c >= 0) {
            console.log(arr[r][c]);
            r++;
            c--;
        }
    }
}

printDiagonalMatrix([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
]);