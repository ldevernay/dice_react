import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RowCpt from './RowCpt';

class App extends Component {
  state = {count: 0}

  handlePress = () => {
    const {count} = this.state

    this.setState({count: count + 1})
  }

  render() {

    const {count} = this.state

    return (
      <RowCpt>
      </RowCpt>
    )
  }
}

export default App;
