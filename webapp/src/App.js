import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  fetchUserApi = () => {
    axios.get("/user-api")
    .then( (res) => console.log(res))
  };
  
  fetchTodoApi = () => {
    axios.get("/todo-api")
    .then( (res) => console.log(res))
  };
  
  fetchCoffeeApi = () => {
    axios.get("/coffee-api")
    .then( (res) => console.log(res))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.fetchUserApi}>Fetch user api </button>
        <button onClick={this.fetchTodoApi}>Fetch todo api </button>
        <button onClick={this.fetchCoffeeApi}>Fetch coffee api </button>
      </div>
    );
  }
}

export default App;
