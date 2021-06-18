//ACTIONS TYPE
import {
    LOAD_USERS,
    IS_LOADING
} from '../_actions/actionType';

const initialState = {
    user: [],
    isLoading: false
}

const userReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case LOAD_USERS:
            return {
                user: payload,
                isLoading: true
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default userReducer;