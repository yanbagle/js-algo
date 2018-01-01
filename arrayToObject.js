// [
//     {a: 1, b: 2},
//     {a: 1, b: 2},
//     {a: 1, b: 2}
// ]
//
// -->
//
// {
//     1: {a: 1, b: 2},
//     2: {a: 1, b: 2},
//     3: {a: 1, b: 2},
// }

function arrayToObj(array) {
    if (!array) {
        return null;
    }

    // ES6 version
    // return array.reduce((total, curr, currentIndex, array) => {
    //     total[currentIndex + 1] = curr;
    //     return total;
    // }, {});

    let output = {};
    array.forEach((ele, index) => {
        output[index + 1] = ele;
    });

    return output;

}

const yo = arrayToObj([
    {a: 1, b: 2},
    {a: 3, b: 4},
    {a: 5, b: 6}
]);
console.log(yo);

