import React, { Component } from 'react';
import './App.css';
import RowCpt from './RowCpt';

var shortid = require('shortid');

class App extends Component {
  state = {
    id:shortid.generate()
  }

  render() {
    return (
      <RowCpt>
      </RowCpt>
    )
  }
}

export default App;
