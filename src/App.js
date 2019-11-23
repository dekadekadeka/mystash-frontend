import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Stash from './pages/Stash'
import Patterns from './pages/Patterns'
import SinglePattern from './pages/SinglePattern'
import Login from './pages/Login'
import Error from './pages/Error'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      {localStorage.token && this.props.user_id ? null :
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stash" component={Stash} />
        <Route exact path="/patterns" component={Patterns} />
        <Route exact path="/patterns/:number" component={SinglePattern} />
        <Route exact path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
      }
    </div>
  );
}

export default App;
