function printSprial (arr) {

    let rowStart = 0;
    let colStart = 0;
    let rowEnd = arr.length - 1;
    let colEnd = arr[0].length - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
        // left to right
        for (let i = colStart; i <= colEnd; i++) {
            console.log(arr[rowStart][i]);
        }
        rowStart++;

        //top to bottom
        for (let i = rowStart; i <= rowEnd; i++) {
            console.log(arr[i][colEnd]);
        }
        colEnd--;

        // right to left
        if (rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                console.log(arr[rowEnd][i]);
            }
            rowEnd--;
        }


        // bottom to top
        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                console.log(arr[i][colStart]);
            }
            colStart++;
        }
    }

}

printSprial([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]);