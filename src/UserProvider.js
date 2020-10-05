import React, { useContext } from 'react';

export const UserContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case "LOGIN":
      localStorage.setItem("token", action.payload.data.signinUser.token);
      return{
          ...state,
          isAuthenticated: true,
          user: action.payload.data.signinUser.user,
          token: action.payload.data.signinUser.token
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
