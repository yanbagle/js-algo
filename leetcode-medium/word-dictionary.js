
const TrieNode = function () {
  this.children = {};
  this.endOfWord = false;
}

const WordDictionary = function() {
  this.root = new TrieNode();  
};

// add function is identical to Trie's add function
WordDictionary.prototype.addWord = function(word) {
  let curr = this.root;
  
  for (const c of word) {
    if (!curr.children[c]) {
      curr.children[c] = new TrieNode();
    }
    curr = curr.children[c];
  }  
  curr.endOfWord = true;
};

const dfs = (word, root, j) => {
  let curr = root;
  for (let i = j; i < word.length; i++) {
    const c = word.charAt(i);
    if (c === '.') {
      for (const [,value] of Object.entries(curr.children)) { // iterate through all the root's children because dot is a wildcard and can be anything
        if (dfs(word, value, i + 1)) { // i + 1 because we are skipping the dot character
          return true;
        }
      }
      return false; // if we have been through all its children, and nothing matches the word
    } else {
      if (!curr.children[c]) {
        return false;
      }
      curr = curr.children[c];
    }
  }
  
  return curr.endOfWord;
}

// search is also similar but when we encounter a dot character, we will run the function recusively with all its children 
WordDictionary.prototype.search = function(word) {
  return dfs(word, this.root, 0);
};
