import {createContext, useState, useEffect, useReducer} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser} from "../utils/firebase/firebase.utils";
import {createAction} from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const SUER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}
//Create reducer function
const userReducer = (state, action) => {
    console.log('action=',action);
    //state : preview state object

    const {type, payload} = action;

    switch (type) {
        case SUER_ACTION_TYPES.SET_CURRENT_USER :
            return {
                ...state,
                currentUser: payload
            };
            break;

        default :
            throw new Error(`unhandled type ${type} un userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser:null
}
export const UserProvider = ({children}) => {
    // const [currentUser,setCurrentUser] = useState(null);
    const [{currentUser},dispatch] = useReducer(userReducer,INITIAL_STATE);
    console.log(currentUser);
    const setCurrentUser = (user)=>{
        dispatch(createAction(SUER_ACTION_TYPES.SET_CURRENT_USER,user));

    }

    const value = {currentUser, setCurrentUser};
    //signOutUser();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }


           setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>)
}