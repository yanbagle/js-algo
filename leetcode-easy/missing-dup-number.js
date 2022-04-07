/*
  input = [1 ... n]
  find duplicate number and missing number
  output = [duplicate, missing number]
  
  [1,2,2,4] => [2,3]
  [1,2,2,3] => [2, 4]
*/

const missingDupNumber = (arr) => {
  
  const set = {};
  const res = [];
  
  for (let num of arr) {
    if (set[num]) {
      res[0] = num;
    } else {
      set[num] = num;
    }
  }
  
  for (let n in set) {
    const prev = set[n] - 1;
    const next = set[n] + 1;
    if (prev != 0 && !set[prev]) {
      res[1] = prev;
      break;
    }
    if (!set[next]) {
      res[1] = next;
      break;
    }
  }
	return res;  
}