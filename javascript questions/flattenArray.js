// array = [ 1,2,3,
//          [[], 5,6,7,
//         [8,9,10, [11] ]] ];
//
// output = [1,2,3,4,5,6,7,8,9,10,11]

function flattenArray(array, flattenArr) {
    if (!array || !flattenArr) {
        return null;
    }

    for (let ele of array) {
        if (typeof ele === 'number') {
            flattenArr.push(ele);
        } else if (Array.isArray(ele)) {
            // For arrays, JS kind of passes by reference
            flattenArray(ele, flattenArr);
        }
    }

    return flattenArr;
}

var yo = flattenArray(
    [ 2,3,4,
        [[], 5,6,7,
            [8,9,10, [11] ]] ], []);

console.log(yo);