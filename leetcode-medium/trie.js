/*

Implement Trie

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

*/

const TrieNode = function () {
  this.children = {};
  this.endOfWord = false;
}

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
}


Trie.prototype.search = function (word) {
  let curr = this.root;
  
  for (const c of word) {
    if (!curr.children[c]) {
      return false;
    }
    curr = curr.children[c];
  }
  
  return curr.endOfWord;
}


Trie.prototype.startsWith = function (prefix) {
  let curr = this.root;
  
  for (const c of prefix) {
    if (!curr.children[c]) {
      return false;
    }  
    curr = curr.children[c];
  }
  
  return true;
  
}









