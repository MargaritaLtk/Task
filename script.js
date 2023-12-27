class IndexedDBEngine {
  constructor() {
    this.dbName = "myDB";
    this.storageName = "storageDB";
    this.db = this.setUpIndedexedDB();
  }
  setUpIndedexedDB() {
    return new Promise((resolve, reject) => {
      const dbRequest = indexedDB.open(this.dbName, 2);

      dbRequest.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.storageName)) {
          db.createObjectStore(this.storageName);
        }
      };
      dbRequest.onsuccess = (event) => {
        const db = event.target.result;
        resolve(db);
      };
      dbRequest.onerror = (event) => {
        reject(event.target.error);
      };
    });
  }

  set(key, value) {
    return new Promise((resolve, reject) => {
      this.db.then((dbUrl) => {
        let tx = dbUrl.transaction(this.storageName, "readwrite");
        let store = tx.objectStore(this.storageName);
        store.put(value, key);
        tx.oncomplete = () => resolve(console.log("added"));
        tx.onerror = (event) => reject(event.target.error);
      });
    });
  }

  get(key) {
    return new Promise((resolve, reject) => {
      this.db.then((dbUrl) => {
        let tx = dbUrl.transaction(this.storageName, "readwrite");
        let store = tx.objectStore(this.storageName);
        let result = store.get(key);
        tx.oncomplete = () => resolve(console.log(result.result));
        tx.onerror = (event) => reject(event.target.error);
      });
    });
  }

  delete(key) {
    return new Promise((resolve, reject) => {
      this.db.then((dbUrl) => {
        let tx = dbUrl.transaction(this.storageName, "readwrite");
        tx.objectStore(this.storageName).delete(key);
        tx.oncomplete = () => resolve(console.log("deleted"));
        tx.onerror = (event) => reject(event.target.error);
      });
    });
  }
}

class LocalStorageEngine {
  set(key, value) {
    return new Promise((resolve) => {
      localStorage.setItem(key, JSON.stringify(value));
      resolve();
    });
  }
  get(key) {
    return new Promise((resolve) => {
      let result = JSON.parse(localStorage.getItem(key));
      resolve(result);
    });
  }
  delete(key) {
    return new Promise((resolve) => {
      localStorage.removeItem(key);
      resolve();
    });
  }
}

class KVStorage {
  static localStorage = new LocalStorageEngine();
  static indexedDB = new IndexedDBEngine();

  constructor(engine) {
    this.engine = engine;
  }
  set(key, value) {
    return this.engine.set(key, value);
  }
  get(key) {
    return this.engine.get(key);
  }
  delete(key) {
    return this.engine.delete(key);
  }
}

let storage = new KVStorage(KVStorage.indexedDB);
storage
  .set("firstItem", { name: "bla" })
  .then(() => storage.set("secondItem", "some text"))
  .then(() => storage.delete("secondItem"));



  function noSpace(x){
    return x.split('').filter((item)=> item !=' ').join('')
  
  }
let numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
let arr = numbers.split(' ').map(item=>+item);
console.log(arr)
console.log(Math.min(...arr))
