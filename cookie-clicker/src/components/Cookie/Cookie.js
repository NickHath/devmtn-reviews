import React, { Component } from 'react';

import cookieImg from '../../assets/cookieImg.svg';

class Cookie extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  updateCount() {
    this.setState({ count: this.state.count + 1 });
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    console.log(this.state);
    return (
      <div className='cookie'>
        <img src={ cookieImg } onClick={ () => this.updateCount() }/>
        <p>Score: { this.state.count }</p>
        <button onClick={ () => this.resetCount() }>Reset</button>
      </div>
    );
  }
}

export default Cookie; 