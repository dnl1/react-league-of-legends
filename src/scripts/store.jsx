import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from "redux"
import thunk from "redux-thunk"
import champions from './reducers/champions'
import { createLogger } from 'redux-logger'

export const createCommonStore = (trackStore = false) => {

    const reducers = combineReducers({
        champions
    });

    const logger = createLogger();

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducers,
        composeEnhancers(
            applyMiddleware(thunk, logger)
        ));

    if (trackStore) {
        store.subscribe((() => {
            console.log("  store changed", store.getState());
        }));
    }

    return store;
}