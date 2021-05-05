/*

Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
Output: ["KFC","Burger King","Tapioca Express","Shogun"]

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
Output: ["KFC","Burger King","Tapioca Express","Shogun"]

Input: list1 = ["KFC"], list2 = ["KFC"]
Output: ["KFC"]

*/

const minIndexSumOfTwoLists = (list1 , list2) => {
  if (!list1 || !list2 || !list1.length || !list2.length) {
    return [];
  }
  
  const hashMap1 = {};
  const hashMap2 = {};
  
  list1.forEach((restaurant, i) => {
    hashMap1[restaurant] = i;
  });
  list2.forEach((restaurant, i) => {
    hashMap2[restaurant] = i;
  });
  
  const result = [];
  let minIndexSum = Math.max(list1.length, list2.length);
  
  for (const r in hashMap1) {
    if (hashMap2[r] !== null) { // if both have in common
      const indexSum = hashMap1[r] + hashMap2[r];
      if (indexSum <= minIndexSum) { 
        if (indexSum < minIndexSum) { // new least index sum 
          result.length = 0;
          minIndexSum = indexSum;
        }
        result.push(r);
      } 
    } 
  }
  
  return result;
}
















