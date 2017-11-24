function isPermutationPalindrome (str) {
  if (str === null || str === undefined) {
      return '';
  }
  
  var charFreq = {};
  for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
        if (char !== ' ') {
          if (charFreq.hasOwnProperty(char)) {
            charFreq[char]++;
          } else {
            charFreq[char] = 1;
          }
        }
  }
    
  var foundOdd = false;
  for (var charKey in charFreq) {
      if (charFreq[charKey] % 2 === 1) { // if odd
          if (foundOdd) {
              return false;
          }
      foundOdd = true;
    }
  }
  
  return true;
}

console.log(isPermutationPalindrome('taco cat'));