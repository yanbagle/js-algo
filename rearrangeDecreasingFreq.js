function rearrange (str) {
    if (!str) {
        return '';
    }

    let freqTable = {};

    for (let char of str) {
        freqTable[char] ? freqTable[char]++ : freqTable[char] = 1;
    }
    console.log(freqTable);
    let sorted = [];
    for (let key in freqTable) {
        sorted.push( { character: key, count: freqTable[key] } );
    }
    console.log(sorted);

    sorted.sort((a, b) => {
        if (a.count === b.count) {
            if (a.character > b.character) {
                return 1;
            } else {
                return -1;
            }
        }
        return a.count - b.count;
    });

    console.log(sorted);

    let outputStr = '';
    for (let charCount of sorted) {
        for (let i = 0; i < charCount.count; i++) {
            outputStr += charCount.character;
        }
    }

    console.log(outputStr);
}

rearrange('apple');