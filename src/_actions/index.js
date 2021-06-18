//Actions type
import {
    LOAD_USERS
} from "./actionType";



export const loadingUsers = users => dispatch => {
    return dispatch({
        type: LOAD_USERS,
        payload: users
    })
}