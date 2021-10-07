// Input:
// [{x: 1, y: 1},
//     {x: 2, y: 2},
//     {x: 3, y: 3},
//     {x: 4, y: 4},
//     {x: 5, y: 5}]
//
// Output: {m: 1: b: 0}
// line equation: y - 1 = 1 (x - 1) or y = x

function getLineMaxPoints(ptsArr) {

    if (!ptsArr) {
        return null;
    }

    let lineArr = [];
    let count = 0;
    for (let i = 0; i < ptsArr.length - 1; i++) {
        let p1 = ptsArr[i];
        let p2 = ptsArr[i+1];
        let slope = (p2.y - p1.y) / (p2.x - p1.x);
        let b = slope * -1 * p1.x;
        b += p1.y;

        for (let i = 0; i < ptsArr.length; i++) {
            if (ptsArr[i].x !== p1.x && ptsArr[i].x !== p2.x && ptsArr[i].x !== p1.y && ptsArr[i].x !== p1.y) {
                // calculate if y = mx - b
                if(ptsArr[i].y === slope * ptsArr[i].x - b){
                    // look through lineArr and see if that line equation alread exists, if it exists, increment count
                    lineArr[count++] = {m: slope, b: b};
                }

            }
        }

    }

    return lineArr;
}

let output = getLineMaxPoints([{x: 1, y: 1},
    {x: 2, y: 2},
    {x: 3, y: 3},
    {x: 4, y: 4},
    {x: 5, y: 5}]);

console.log(output);