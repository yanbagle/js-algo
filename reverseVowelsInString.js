// Write a function that takes a string as input and reverse only the vowels of a string.
//
//     Example 1:
// Given s = "hello", return "holle".
//
//     Example 2:
// Given s = "leetcode", return "leotcede".
//
//     Note:
// The vowels does not include the letter "y".
// A, E, I, O, and U

function reverseVowels(str) {

    if (!str) {
        return null;
    }

    var vowels = {
      a: 'a',
      e: 'e',
      i: 'i',
      o: 'o',
      u: 'u'
    };

    var l = 0;
    var r = str.length - 1;

    while (l < r) {
        if (vowels[str.charAt(l)] && vowels[str.charAt(r)]) {
            // switch vowels
            var tempLVowel = str.charAt(l);
            var tempRVowel = str.charAt(r);
            str = replaceChar(str, l, tempRVowel);
            str = replaceChar(str, r, tempLVowel);
            l++;
            r--;
        } else {
            if (! vowels[str.charAt(l)]) {
                l++;
            }
            if (! vowels[str.charAt(r)]) {
                r--;
            }
        }
    }

    return str;
}

function replaceChar(str, index, replacement) {
    return str.substring(0, index) + replacement + str.substring(index + 1);
}

var yo = reverseVowels('leetcode');

window.onload = function() {
    document.getElementById('console').innerHTML = yo;
};