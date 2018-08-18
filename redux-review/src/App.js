import React, { Component } from 'react';
import './App.css';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import ToDo from './components/ToDo/ToDo';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={ Dashboard }/>
          <Route path='/todo/:id' component={ ToDo }/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
