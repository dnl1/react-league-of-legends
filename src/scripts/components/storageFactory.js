import IndexedDBStorage from "./indexedDBStorage";
import LocalStorage from "./localStorage";

const StorageFactory = {
    get: () => {
        // if (window.indexedDB) {
        //     storage = new IndexedDBStorage();
        // } else {
        //     storage = new LocalStorage()
        // }

        return new LocalStorage();
    }
}

export default StorageFactory;