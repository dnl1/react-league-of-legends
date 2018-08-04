import http from "../helpers/http";
import localStorage from "../components/localStorage";

import {
    CHAMPIONS_FETCHED,
    CHAMPIONS_FILTER,
    CHAMPIONS_FETCHING
} from "./types"

export function fetch(data) {
    return dispatch => {
        dispatch({
            type: CHAMPIONS_FETCHING,
            champions: [],
            filter: '',
            loading: true
        })

        let champions = localStorage.get('cacheChampion');
        if (champions) {
            dispatch({
                type: CHAMPIONS_FETCHED,
                champions: champions,
                filter: '',
                loading: false
            })

            return;
        }

        return http.get('champions').then(response => {
            let data = response.data.data;
            var keys = Object.keys(data);
            let champions = [];

            keys.forEach(element => {
                data[element].chave = data[element].key;
                champions.push(data[element]);
            });

            localStorage.set('cacheChampion', JSON.stringify(champions));

            dispatch({
                type: CHAMPIONS_FETCHED,
                champions: champions,
                filter: '',
                loading: false
            })
        })

    }
}


export function filter(searchString = '') {
    return (dispatch, getState) => {
        let champions = localStorage.get('cacheChampion');

        const dispayedChampions = champions.filter(champion => {
            return champion.name.toLowerCase().includes(searchString.toLowerCase())
        })

        dispatch({
            type: CHAMPIONS_FILTER,
            champions: dispayedChampions
        })

    }
}