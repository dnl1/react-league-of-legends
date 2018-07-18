import http from "../helpers/http";

export function championsFetch(data) {
    return dispatch => {
        return http.get('champions');
    }
}