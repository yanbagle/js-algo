function isWordSqaure (matrix) {

    if (!matrix || !matrix.length) {
        return;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }

    return true;
}

console.log(isWordSqaure([
    ['H', 'E', 'A', 'R', 'T'],
    ['E', 'M', 'y' ,'E' ,'R'],
    ['A' ,'B' ,'U' ,'S' ,'E'],
    ['R', 'E' ,'S' ,'I', 'N'],
    ['T' ,'R' ,'E', 'N' ,'D']
]));