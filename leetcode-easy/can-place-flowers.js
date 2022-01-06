/*

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

*/

const canPlaceFlowers = (flowerbed, n) => {
  if (!flowerbed || flowerbed.length === 0) {
    return false;
  }
  
  const flowerbedCopy = [...flowerbed];
  let flowerNum = 0; // number of flowers that can be planted
  
  for (let i = 0; i < flowerbedCopy.length; i++) {
    if (flowerbedCopy[i] === 0) {
      if (i - 1 < 0 && i + 1 === flowerbedCopy.length) { // [0]
        flowerbedCopy[i] = 1;
        flowerNum++;
      } else if (i - 1 < 0 && flowerbedCopy[i+1] === 0) { // [0, 0, ...]
        flowerbedCopy[i] = 1;
        flowerNum++;
      } else if (flowerbedCopy[i - 1] === 0 && flowerbedCopy[i + 1] === 0) { // [1, 0, 0, 0, 1]
        flowerbedCopy[i] = 1;
        flowerNum++;
      } else if (flowerbedCopy[i - 1] === 0 && i + 1 === flowerbedCopy.length) { // [...,0,0]
        flowerbedCopy[i] = 1;
        flowerNum++;
      }
    }
  }
  
  return flowerNum >= n;
  
}