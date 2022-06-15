/**
 * @param {string[]} wordsDict
 
 https://leetcode.com/problems/shortest-word-distance-ii/
 
 */
const WordDistance = function(wordsDict) {
    this.map = {};
    for (let i = 0; i < wordsDict.length; i++) {
      const word = wordsDict[i];
      this.map[word] ? this.map[word].push(i) : this.map[word] = [i];
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    const idx1 = this.map[word1];
    const idx2 = this.map[word2];
    let minDist = Infinity;
      
    for (let index1 of idx1) {
      for (let index2 of idx2) {
        minDist = Math.min(minDist, Math.abs(index1 - index2));
      }
    }
    
    return minDist;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
 
 