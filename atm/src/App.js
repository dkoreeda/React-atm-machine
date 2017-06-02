import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Account from './Account';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Account text={"Checking"} />
        <Account text={"Savings"}/>
      </div>
    );
  }
}

export default App;
