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

const getTotal = (arr) => {
  const total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i];
    }
  }
  return total;
}
