import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    greeting: "No greeting for you",
  }

  greet = () => {
    this.setState({
      greeting: "hello web XVII"
    })
  }

  bye = () => {
    this.setState({
      greeting: "Bye web XVII"
    })
  }


  render() {
    return (
      <>
        <h1>Hello World</h1>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Bye</button>

        <div>{this.state.greeting}</div>
      </>
    );
  }
}

export default App;
