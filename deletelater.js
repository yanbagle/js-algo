const isEven = (num) => {
  return num % 2 === 0;
};

const arr = [12, 1, 0];

const getLargestNumber = (arr) => {
  return(arr.sort((a,b) => {
    return a - b;
  })[arr.length - 1]);
};

getLargestNumber(arr);


const isOdd = (num) => {
  return num % 2 !== 0;
};

const getOddElements = (arr) => {
  const oddElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (isOdd(i+1)) {
      oddElements.push(arr[i]);
    }
  }
  return oddElements;
};

console.log(getOddElements([1,2,3,4,5,6,]));
