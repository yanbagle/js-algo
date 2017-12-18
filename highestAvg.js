
// var avg = {
//     studentA: [88, 11, 88],
//     studentB: [23, 23, 30],
//     studentC: [99, 23, 70],
// }

function highestAvg (avg) {

    if (!avg) {
        return null;
    }

    var avgPerStudent = {};

    for (let student in avg) {
        avgPerStudent[student] = avg[student].reduce((total, score, index, array) => {
            total += score;
            if (index === array.length - 1) {
                return total / array.length;
            } else {
                return total;
            }
        });
    }

    console.log(avgPerStudent);
    // avgPerStudent = {studentA: 62, studentB: 25, ...}

    var highest = avgPerStudent[Object.keys(avg)[0]];
    for (let student in avgPerStudent) {
        if (avgPerStudent[student] > highest) {
            highest = avgPerStudent[student];
        }
    }

    return highest;
}

var yo = highestAvg({
    studentA: [88, 11, 88],
    studentB: [23, 23, 30],
    studentC: [99, 23, 70],
    studentD: [99, 100, 70],
});

display(yo);