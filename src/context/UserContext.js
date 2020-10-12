import React from 'react';
import { initialState, UserReducer } from './UserReducer';

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

export function useAuthState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
}

export function useAuthDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }
  return context;
}

export const UserProvider = ({children}) => {
  const [user, dispatch] = React.useReducer(UserReducer, initialState);

  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>

  );
}
