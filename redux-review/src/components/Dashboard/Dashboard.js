import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  render() {
    let inputStyle = {
      "background-color": "#CCC",
      "width": "200px",
      "height": "50px",
      "font-size": "1.35em"
    };
    return (
      <div className='dashboard'>
        <input style={ inputStyle }/>
        <p>{ this.state.input }</p>
      </div>
    );
  }
}

export default Dashboard;