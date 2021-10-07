function isAnagram(str1, str2) {
    
    if (!str1 || !str2 || str1.length !== str2.length) {
        return false;
    }
    
    var freq1 = {};
    var freq2 = {};
    
    // for ... of is for iterating thru strings and arrays, they're iterable 
    for (let strChar of str1) {
        if (freq1[strChar]) {
            freq1[strChar]++;
        } else {
            freq1[strChar] = 1;
        }        
    }
    
    for (let strChar of str2) {
        if (freq2[strChar]) {
            freq2[strChar]++;
        } else {
            freq2[strChar] = 1;
        }        
    }
    
    // checking equality freq1 to freq2
    // for ... in is for looping through objects
    for (let char in freq1) {
        if (freq1[char] !== freq2[char]) {
            return false;
        }
    }

    // checking equality freq2 to freq1
    for (let char in freq2) {
        if (freq1[char] !== freq2[char]) {
            return false;
        }
    }


    return true;
    
}

var yo = isAnagram('abcd','cbda');

window.onload = function() {
    document.getElementById('console').innerHTML = yo;
};