import Storage from './storage';

class IndexedDBStorage extends Storage {
    constructor() {
        super();
        this.db = indexedDB.open('react-spear', 1);
    }
    get() {
        // this.db.
    }
    set() {

    }
    remove() {

    }
}

export default IndexedDBStorage;