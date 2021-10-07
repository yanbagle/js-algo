function rearrangeStringByFreq(str) {

    if (!str || str.length === 0 ) {
        return null;
    }

    freqCount = {};

    for (let i = 0; i < str.length; i++) {
        let curr = str.charAt(i);
        if (freqCount.hasOwnProperty(curr)) {
            freqCount[curr]++;
        } else {
            freqCount[curr] = 1;
        }
    }

    let sorted = Object.keys(freqCount).sort((a,b) => {
        if (freqCount[a] === freqCount[b]) {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        }
        return freqCount[a]-freqCount[b];
    });

    let output = '';
    for (let character of sorted) {
        let count = freqCount[character];
        while (count > 0) {
            output += character;
            count--;
        }
    }

    return output;
}

window.onload = function() {
    document.getElementById('console').innerHTML = rearrangeStringByFreq('fgbcaed');
};
