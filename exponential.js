function exponential (x, y) {

    if (y === 0) {
        return 1;
    }

    if (y < 0) {
        return (1 / helper(x, y));
    } else {
        return helper(x,y);
    }
}

function helper (x, y) {
    let total = 1;
    if (x < 0) {
        total = -1;
    }
    x = Math.abs(x);
    y = Math.abs(y);
    while (y > 0) {
        y--;
        total *= x;
    }
    return total;
}

console.log(exponential(-5, 3));