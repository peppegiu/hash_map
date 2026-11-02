import { LinkedList } from "./linked_list.js";

export class HashMap {
  loadFactor = 0.75;
  capacity = 16;
  array = [];
  keys = [];

  setLoadFactor(loadFactor) {
    this.loadFactor = loadFactor;
  }

  setCapacity(capacity) {
    this.capacity = capacity;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    let stringKey = key;
    key = this.hash(key);
    
    if (this.array[key] === undefined) {
      this.array[key] = new LinkedList();
    }
    const linked_list = this.array[key];
    if (!linked_list.returnHead()) {
      linked_list.append(value, stringKey);
      this.keys.push(stringKey);
    } else {
      let index = linked_list.findIndexKey(stringKey)
      if (index >= 0) {
        linked_list.removeAt(index);
        linked_list.append(value, stringKey);
      } else {
        linked_list.append(value, stringKey);
        this.keys.push(stringKey);
      }
    }
    if (this.keys.length > this.capacity * this.loadFactor) {
      this.capacity = this.capacity * 2;
    }
  }

  get(key) {
    let stringKey = key;
    key = this.hash(key);
    if (this.array[key] === undefined || this.array[key].head === null) {
      return undefined;
    } else {
      const linked_list_index = this.array[key].findIndexKey(stringKey);
      if (linked_list_index >= 0) {
        return at(linked_list_index).value;
      } else {
        return undefined;
      }
    }
  }

  has(key) {
    stringKey = key;
    key = this.hash(key);
    if (this.array[key] === undefined || this.array[key].head === null) {
      return false;
    } else {
      const linked_list_index = this.array[key].findIndexKey(stringKey);
      if (linked_list_index >= 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  remove(key) {
    let stringKey = key;
    key = this.hash(key);
    if (has(key)) {
      const linked_list_index = this.array[key].findIndexKey(stringKey);
      this.array[key].removeAt(linked_list_index);
      this.size--;
      return true;
      this.keys.slice(this.keys.indexOf(key), this.keys.indexOf(key) + 1);
    } else {
      return false;
    }
  }

  length() {
    return this.keys.length;
  }

  clear() {
    this.array = [];
    this.keys = [];
  }

  values() {
    const values = [];
    for (let key of this.keys) {
      values.push(this.get(key));
    }
    return values;
  }

  entries() {
    const entriesArray = [];
    for (let key of this.keys) {
      let hashKey = this.hash(key);
      entriesArray.push([
        this.array[hashKey].getKey(key).key,
        this.array[hashKey].getKey(key).value,
      ]);
    }
    return entriesArray;
  }
}

class Hash {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  next = null;
}

const test1 = new HashMap();

test1.set("apple", "red");
test1.set("banana", "yellow");
test1.set("carrot", "orange");
test1.set("dog", "brown");
test1.set("elephant", "gray");
test1.set("frog", "green");
test1.set("grape", "purple");
test1.set("hat", "black");
test1.set("ice cream", "white");
test1.set("jacket", "blue");
test1.set("kite", "pink");
test1.set("lion", "golden");

test1.set("moon", "silver");
console.log(test1.capacity)
