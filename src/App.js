import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    input: 'Test'
  }

  inputChangedHandler = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          input={this.state.input}
          change={this.inputChangedHandler}
        />

        <UserOutput val={this.state.input} />
        <UserOutput val={this.state.input} />
        <UserOutput val="test" />
      </div>
    );
  }
}

export default App;
