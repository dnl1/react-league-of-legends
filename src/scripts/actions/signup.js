import http from "../helpers/http";

export function signup(data) {
    return dispatch => {
        let dataPost = {
            user: {
                ...data
            }
        };

        return http.post('v1/users ', dataPost);
    }
}