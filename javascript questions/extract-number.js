const extractNum = (str) => {
  if (!str || !str.length) {
    return null;
  }
  
  let num = '';
  for (let char of str) {
    if (!isNaN(char)) { // if number
      num += char;
    } else if (char === '.') {
      num += char;
    }
  }
  
  return Number(num);
}