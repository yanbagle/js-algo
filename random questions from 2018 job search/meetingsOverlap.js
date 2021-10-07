// meetings: [
//  {startTime: 1000, endTime: 2000}, time in mins
//  {startTime: 1500, endTime: 5000},
//   ...
// ]

function meetingsOverlap (meetings) {
    if (!meetings) {
        return;
    }

    let minsInDay = []; // 0 -> 60 * 24

    for (let meeting of meetings) {
        for (let i = meeting.startTime; i <= meeting.endTime; i++) {
            if (minsInDay[i]) {
                return true;
            }
            minsInDay[i] = true;
        }
    }

    return false;
}