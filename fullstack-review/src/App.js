import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodItems: [],
      foodItem: ''
    };
  }

  componentDidMount() {
    axios.get('/api/food')
         .then(results => this.setState({ foodItems: results.data }));
  }

  getFoodItem() {
    axios.get('/api/food/4')
         .then(results => this.setState({ foodItem: results.data[0].name }));
  }

  render() {
    return (
      <div className="App">
        <p>Our food items are: { JSON.stringify(this.state.foodItems) }</p>
        <p>Our food item is: { this.state.foodItem }</p>
        <button onClick={ () => this.getFoodItem() }>Get the food item!</button>
      </div>
    );
  }
}

export default App;
