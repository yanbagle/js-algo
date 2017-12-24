
// var avg = [
//     {studentA: 88},
//     {studentB: 23},
//     {studentB: 30},
//     {studentA: 90},
// ]

function highestAvg2 (avg) {

    if (!avg) {
        return null;
    }

    var studentsTestScores = {};

    for (let scoreObj of avg) {
        for (let student in scoreObj) {
            if (studentsTestScores[student]) {
                studentsTestScores[student].push(scoreObj[student]);
            } else {
                studentsTestScores[student] = [scoreObj[student]];
            }
        }
    }

    console.log(studentsTestScores);
}

var yo = highestAvg2([
    {studentA: 88},
    {studentB: 23},
    {studentB: 30},
    {studentA: 90},
]);

display(yo);