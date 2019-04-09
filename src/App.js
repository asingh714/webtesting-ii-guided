import React, { Component } from 'react';
import Greeting from "../Greeting/Greeting";
import './App.css';

class App extends Component {
  state = {
    greeting: "No greeting for you",
  }

  greet = () => {
    this.setState({
      greeting: "hello team"
    })
  }

  bye = () => {
    this.setState({
      greeting: "Bye team"
    })
  }


  render() {
    return (
      <>
        <h1>Hello World</h1>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Bye</button>
        <Greeting message={this.state.greeting}/> 
      </>
    );
  }
}

export default App;
