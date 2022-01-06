/*

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

https://leetcode.com/problems/word-search-ii/

*/

const TrieNode = function () {
  this.children = {};
  this.endOfWord = false;
};

const Trie = function () {
  this.root = new TrieNode();
}

Trie.prototype.insert = function (word) {
  let curr = this.root;
  for (const c of word) {
    if (!curr.children[c]) {
      curr.children[c] = new TrieNode();
    }
    curr = curr.children[c];
  }
  curr.endOfWord = true;
};

const findWords = (board, words) => {
  let trie = new Trie();
  for (const w of words) {
    trie.insert(w);
  }
  
  const res = {}; // this will prevent dupes 
  const visited = {};
  
  const dfs = (r,c,node,word) => {    
    if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) { // if out of bounds
      return;
    }
    
    const rowCol = r + '' + c;
    const char = board[r][c];
    if (visited[rowCol] || !node.children[char]) { // if already visited or character not in Trie
      return;
    }
    
    node = node.children[char];
    visited[rowCol] = true;
    word += char;
    if (node.endOfWord) {
      res[word] = true;
    }
    
    dfs(r+1, c, node, word);
    dfs(r-1, c, node, word);
    dfs(r, c+1, node, word);
    dfs(r, c-1, node, word);
    
    visited[rowCol] = false;
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, trie.root, "");
    }
  }
  
  return Object.keys(res);
};
































