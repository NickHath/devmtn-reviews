import React, { Component } from 'react';

class AccountInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      displayName: ''
    };
  }

  handleFirstName(newFirst) {
    this.setState({ firstName: newFirst });
  }

  handleLastName(newLast) {
    this.setState({ lastName: newLast });
  }

  saveDisplay() {
    this.setState({ displayName: this.state.firstName + ' ' + this.state.lastName });
  }

  render() {
    console.log(this.state);
    return (
      <div className='account-info'>
        <p>{ this.state.displayName }</p>
        <input onChange={ (e) => this.handleFirstName(e.target.value) }/>
        <input onChange={ (e) => this.handleLastName(e.target.value) }/>
        <button onClick={ () => this.saveDisplay() }>Save</button>
      </div>
    );
  }
}

export default AccountInfo;