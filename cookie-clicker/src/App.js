import React, { Component } from 'react';

import './App.css';

import Description from './components/Description/Description';
import AccountInfo from './components/AccountInfo/AccountInfo';
import Cookie from './components/Cookie/Cookie';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Description />
        <AccountInfo />
        <Cookie />
      </div>
    );
  }
}

export default App;
