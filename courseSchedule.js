// There are a total of n courses you have to take, labeled from 0 to n - 1. Some courses may have prerequisites,
// for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]. Given the total number
// of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
//
//     For example, given 2 and [[1,0]], there are a total of 2 courses to take. To take course 1 you should have finished
// course 0. So it is possible.
//
//     For another example, given 2 and [[1,0],[0,1]], there are a total of 2 courses to take. To take course 1 you should
// have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

function courseSchedule (numCourses, prerequisites) {
    if (!prerequisites) {
        return false;
    }
    if (numCourses <= 0) {
        return true;
    }

    // table / counter for prereqs
    let preReqCounter = {};

    for (let i = 0; i < prerequisites.length; i++) {
        preReqCounter[prerequisites[i][0]] ? preReqCounter[prerequisites[i][0]]++ : preReqCounter[prerequisites[i][0]] = 1;
    }

    // queue of courses with no preReqs
    let noPreReqQueue = [];
    for (let i = 0; i < numCourses; i++) {
        if (!preReqCounter[i]) {
            noPreReqQueue.push(i);
        }
    }

    let numNoPreReq = noPreReqQueue.length;

    while (numNoPreReq.length > 0) {
        const curr = numNoPreReq.shift();
        for (let i = 0; i < prerequisites.length; i++) {
            // if a course's prerequisite can be satisfied by a course in queue
            if (curr === prerequisites[i][1]) {
                preReqCounter[prerequisites[i][0]]--;
                if (preReqCounter[prerequisites[i][0]] === 0) {
                    noPreReqQueue.push(prerequisites[i][0]);
                    numNoPreReq++;
                }
            }
        }
    }

    return numNoPreReq === numCourses;

}

const canFinish = courseSchedule(2, [[1,0]]);

console.log(canFinish);