function getKthMostOccurrence (arr, k) {
    if (!arr && k < 1) {
        return;
    }

    let freqCount = {};

    for (let ele of arr) {
        freqCount[ele] ? freqCount[ele]++ : freqCount[ele] = 1;
    }

    let freqArr = [];
    for (let key in freqCount) {
        const countObj = {};
        countObj[key] = freqCount[key];
        freqArr.push(countObj);
    }

    console.log(freqArr);
    freqArr.sort((a,b) => {
        let valueA;
        let valueB;
        for (let key in a) {
            valueA = a[key];
        }
        for (let key in b) {
            valueB = b[key];
        }
        return valueB - valueA;
    });

    console.log(freqArr);

    let ktnMostOccur = freqArr[k-1];
    for (let key in ktnMostOccur) {
        return key;
    }
}

console.log(getKthMostOccurrence([5,2,1,1,2,2,1,3,4,1,3,5,5,5,5,5,5,5],2));
