const array = [1,2,3,4,5,6,7,8,9,10];

let avg = array.reduce((accum, curr, index, array) => {
    accum += curr;
    if (index === array.length - 1) {
        return accum / array.length;
    }
    return accum;
}, 0);

console.log(avg);