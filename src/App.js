import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Record from './pages/Record';
import Leaderboard from './pages/Leaderboard';
import './styles/global';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/record" component={Record} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </Switch>
    );
  }
}

export default App;
