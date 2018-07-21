import http from "../helpers/http";
import {
    CHAMPIONS_FETCHED
} from "./types"

export function championsFetch(data) {
    return dispatch => {
        return http.get('champions').then(response => {
            let data = response.data.data;
            var keys = Object.keys(data);
            let champions = [];

            keys.forEach(element => {
                data[element].chave = data[element].key;
                champions.push(data[element]);
            });
            console.log('champions', champions);
            dispatch({
                type: CHAMPIONS_FETCHED,
                champions
            })
        })

    }
}