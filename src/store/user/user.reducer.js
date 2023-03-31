import {USER_ACTION_TYPES} from "./user.types";


const INITIAL_STATE = {
    currentUser:null
}

//Create reducer function
export const userReducer = (state = INITIAL_STATE, action) => {
    //state : preview state object
    const {type, payload} = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER :
            return {
                ...state,
                currentUser: payload
            };
        default :
            return state;
    }
}

