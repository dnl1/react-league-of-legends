import http from "../helpers/http";
import {
    CHAMPIONS_FETCHED,
    CHAMPIONS_FILTER
} from "./types"

export function fetch(data) {
    return dispatch => {
        let jsoncache = window.localStorage.getItem('cacheChampion')
        if (jsoncache) {
            return JSON.parse(jsoncache);
        }

        return http.get('champions').then(response => {
            let data = response.data.data;
            var keys = Object.keys(data);
            let champions = [];

            keys.forEach(element => {
                data[element].chave = data[element].key;
                champions.push(data[element]);
            });

            window.localStorage.setItem('cacheChampion', JSON.stringify(champions));

            dispatch({
                type: CHAMPIONS_FETCHED,
                champions: champions,
                filter: ''
            })
        })

    }
}


export function filter(searchString = '') {
    return (dispatch, getState) => {
        let cache = window.localStorage.getItem('cacheChampion');
        let champions = JSON.parse(cache);

        const dispayedChampions = champions.filter(champion => {
            return champion.name.toLowerCase().includes(searchString.toLowerCase())
        })

        dispatch({
            type: CHAMPIONS_FILTER,
            champions: dispayedChampions
        })

    }
}