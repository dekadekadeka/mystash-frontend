import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import List from './pages/List'
import AllPatterns from './pages/AllPatterns'
import SinglePattern from './pages/SinglePattern'
import Stash from './pages/Stash'
import Error from './pages/Error'
import './App.css';


function App() {
    return (
      <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list" component={List} />
          <Route exact path="/stash" component={Stash} />
          <Route exact path="/patterns" component={AllPatterns} />
          <Route exact path="/patterns/:number" component={SinglePattern} />
          <Route component={Error} />
        </Switch>
      </div>
    );
}
export default App;
