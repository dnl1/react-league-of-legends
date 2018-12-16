import Storage from './storage';

class LocalStorage extends Storage {
    static get(key) {
        let item = localStorage.getItem(key);
        try {
            return JSON.parse(item);
        } catch (error) {
            return item;
        }
    }
    static set(key, value) {
        if (value instanceof Object) value = JSON.stringify(value);
        localStorage.setItem(key, value);
    }
    static remove(key) {
        localStorage.removeItem(key);
    }
}

export default LocalStorage;