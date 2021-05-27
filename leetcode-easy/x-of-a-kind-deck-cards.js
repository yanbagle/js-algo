/*

In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.

Input: deck = [1]
Output: false
Explanation: No possible partition.

Input: deck = [1,1]
Output: true
Explanation: Possible partition [1,1].

Input: deck = [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2].

*/

const canPartition = (deck) => {
  if (!deck || !deck.length || deck.length === 1) {
    return false;
  }
  
  const freqTable = {};
  
  for (const int of deck) {
    freqTable[int] = freqTable[int] ? freqTable[int] + 1 : 1;
  }
  
  const isEven = freqTable[deck[0]] % 2 === 0;
  
  // if even OR odd freq then true, but if mix of odd AND even then false
  for (const freq in freqTable) {
    if ((isEven && freqTable[freq] % 2 !== 0) || (!isEven && freqTable[freq] % 2 === 0)) { // if mix of even and odd freq
      return false;
    }
  }
  
  return true;
}






























