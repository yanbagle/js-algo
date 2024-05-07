/*

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

*/

class Node {
  constructor(key = null, value = null) {
    this.key;
    this.value;
    this.next;
    this.prev;
  }
}

class LRU {
  constructor(capacity) {
    this.cache = {};
    this.capacity = capacity;
    this.left = new Node();
    this.right = new Node();

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  insert(node) {
    const rightPrev = this.right.prev;
    rightPrev.next = node;
    node.prev = rightPrev;
    node.next = this.right;
    this.right.prev = node;
  }

  remove(node) {
    const { prev, next } = node;
    prev.next = next;
    next.prev = prev;
  }

  get(key) {
    if (!this.cache[key]) {
      return -1;
    }
    // update the key to be the most recently used
    this.remove(this.cache[key]);
    this.insert(this.cache[key]);
    return this.cache[key].value;
  }

  put(key, value) {
    // first check if it already exists, if so, we need to update its priorty
    // by removing and then reinsert it
    if (this.cache[key]) {
      this.remove(this.cache[key]);
    }
    this.cache[key] = new Node(key, value);
    this.insert(this.cache[key]);

    // check for over capacity
    if (Object.keys(this.cache).length > this.capacity) {
      // if over capacity, we remove the LRU
      const lru = this.left.next;
      this.remove(lru);
      delete this.cache[lru.key];
    }
  }
}

/*******************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************
 *****************************************************************************************************************************/

const Node = function (key = null, value = null) {
  this.prev = null;
  this.next = null;
  this.key = key;
  this.value = value;
};

const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {}; // key: whatever, value: Node

  // Our double linked list with placeholder left and right nodes
  // left is the LRU, right is most recently used
  this.leftNode = new Node();
  this.rightNode = new Node();
  this.leftNode.next = this.rightNode;
  this.rightNode.prev = this.leftNode;
};

// inserting will place the node next to linked list's right node, it will be the most recently used
LRUCache.prototype.insert = function (node) {
  // we will need the right's prev and the right node to insert
  const rightPrev = this.rightNode.prev;
  rightPrev.next = node;
  this.rightNode.prev = node;
  node.prev = rightPrev;
  node.next = this.rightNode;
};

LRUCache.prototype.remove = function (node) {
  const { prev, next } = node;
  prev.next = next;
  next.prev = prev;
};

LRUCache.prototype.get = function (key) {
  if (this.cache[key]) {
    // update the key to be the most recently used
    this.remove(this.cache[key]);
    this.insert(this.cache[key]);
    return this.cache[key].value;
  } else {
    return -1;
  }
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    // if it already exists, remove it from the linked list, will reinsert later
    this.remove(this.cache[key]);
  }
  this.cache[key] = new Node(key, value);
  this.insert(this.cache[key]);

  // check for over capacity
  if (Object.keys(this.cache).length > this.capacity) {
    const lru = this.leftNode.next; // our left most node is our LRU
    this.remove(lru);
    delete this.cache[lru.key];
  }
};
