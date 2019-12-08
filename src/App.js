import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import List from './pages/List'
import AllPatterns from './pages/AllPatterns'
import SinglePattern from './pages/SinglePattern'
import Error from './pages/Error'
import './App.css';

export const UserContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null
};

const reducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.jwt));
            return{
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.jwt
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

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  
    return (
      <UserContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={List} />
          <Route exact path="/patterns" component={AllPatterns} />
          <Route exact path="/patterns/:number" component={SinglePattern} />
          <Route component={Error} />
        </Switch>
      </UserContext.Provider>
    );
}
export default App;
