class HashTable {
  constructor() {
    this.table = {};
    this.size = 0;
  }

  get(key) {
    const hash = calculateHash(key);
    if (!this.table[hash] || !this.table[hash][key]) {
      return null;
    }
    return this.table[hash][key];
  }

  set(key, value) {
    const hash = calculateHash(key);
    if (!this.table[hash]) {
      this.table[hash] = {};
      this.size++;
    }
    this.table[hash][key] = value;
  }

  calculateHash(key) {
    return key.toString().length % this.size;
  }
}
