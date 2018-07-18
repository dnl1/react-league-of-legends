import axios from 'axios';

class Http {
    constructor() {
        this.defaultHeaders = {
            'Content-Type': 'application/json; charset=utf-8'
        }
        this._instance = axios.create({
            baseURL: process.env.REACT_APP_API_BASE_URL,
            timeout: process.env.REACT_APP_API_TIMEOUT,
            headers: {
            }
        })
    }

    get(url, headers) {
        return this._instance.get(url, {
            headers: { ...headers, ...this.defaultHeaders }
        });
    }

    post(url, data, headers) {
        return this._instance.post(url, data, {
            headers: { ...headers, ...this.defaultHeaders }
        });
    }
}

export default new Http()