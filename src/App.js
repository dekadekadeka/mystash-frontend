import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import List from './pages/List'
import Stash from './pages/Stash'
import Patterns from './pages/Patterns'
import SinglePattern from './pages/SinglePattern'
import Login from './pages/Login'
import Error from './pages/Error'
import './App.css';

export class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        {localStorage.token && this.props.user_id ? null :
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stash" component={Stash} />
          <Route exact path="/list" component={List} />
          <Route exact path="/patterns" component={Patterns} />
          <Route exact path="/patterns/:number" component={SinglePattern} />
          <Route exact path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
        }
      </div>
    );
  }
}
export default App;
