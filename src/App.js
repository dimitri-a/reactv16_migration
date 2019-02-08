import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from './MyComp';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { change: false }
  }

  onChange() {
    this.setState({ change: !this.state.change })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() =>this.onChange()}>Change</button>
        <MyComp hier={this.state.change}></MyComp>
      </div>
    );
  }
}

export default App;
