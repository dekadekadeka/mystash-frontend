import React, { useContext } from 'react';

export const UserContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    username: null,
    token: null,
};

export const reducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("username", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return{
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return{
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
}

export function UserProvider({children}){
const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext)