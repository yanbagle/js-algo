// Input: ["neet","code","love","you"]
// encode => 4#neet4#code4#love3#you
// number of chars in string + delimiter #
const encode = (strs) => {
  let res = "";
  const delimiter = "#";
  for (let str of strs) {
    res += str.length + delimiter + str;
  }
  return res;
};

const decode = (str) => {
  const delimiter = "#";
  const res = [];
  let strLen = "";
  let i = 0;
  while (i < str.length) {
    if (str[i] !== delimiter) {
      strLen += str[i]; // getting our number/string length
      i++;
    } else {
      // found delimiter
      strLen = Number(strLen); // conver to a real number
      const s = str.substring(i + 1, i + 1 + strLen); // grab the string
      res.push(s);
      i = i + strLen; // move i past the whole string
      strLen = "";
    }
  }
  return res;
};
