function HashTable () {
    this.hashTable = {};
    this.size = 0;
}

HashTable.prototype.put = function (key, value) {
    this.hashTable[key] = value;
    this.size++;
};

HashTable.prototype.remove = function (key) {
    delete this.hashTable[key];
    this.size--;
};

HashTable.prototype.get = function (key) {
    return this.hashTable[key];
};

const hashTable = new HashTable();
hashTable.put('blue', '#0000FF');
hashTable.put('red', '#FF0000');
console.log(hashTable.get('blue'));
console.log(hashTable.get('red'));
hashTable.remove('blue');
console.log(hashTable.get('blue')); // undefined
