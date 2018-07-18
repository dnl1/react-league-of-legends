import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scripts/app';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createCommonStore } from "./scripts/store";

const store = createCommonStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
