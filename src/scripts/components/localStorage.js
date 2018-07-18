import Storage from './storage';

class LocalStorage extends Storage {
    constructor(props) {
        super(props);
    }

    get(key) {
        let item = localStorage.getItem(key);
        try {
            return JSON.parse(item);
        } catch (error) {
            return item;
        }
    }
    set(key, value) {
        console.log('key', key);
        if (value instanceof Object) value = JSON.stringify(value);

        console.log('value', value);
        localStorage.setItem(key, value);
    }
    remove(key) {
        localStorage.removeItem(key);
    }
}

export default LocalStorage;