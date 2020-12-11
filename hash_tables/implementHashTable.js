class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i ++) {
            hash = (hash + key.charCodeAt(i) * 1) %
            this.data.length
        }
        return hash;
    }

    set(key, value) {
        this.data[this._hash(key)] = value
    }

    get(key) {
        return this.data[this._hash(key)]
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('John Reiner', 30)
console.log(myHashTable.get('John Reiner'))
