// array = [ 1,2,3,
//          [[], 5,6,7,
//         [8,9,10, [11] ]] ];
//
// output = [1,2,3,4,5,6,7,8,9,10,11]

const flattenArray = (arr, flattenArr) => {
  if (!arr || !flattenArr) {
      return [];
  }
  
  arr.forEach((ele) => {
    if (typeof ele === 'number') {
      flattenArr.push(ele);
    } else if (Array.isArray(ele)) {
      flattenArray(ele, flattenArr);
    }
  });
  return flattenArr;
}