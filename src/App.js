import React, { Component } from 'react';
import './App.css';
import RowCpt from './RowCpt';

var shortid = require('shortid');

class App extends Component {
  constructor() {
    super();
    this.state = {
      rows: [
        {key: shortid.generate()}
      ]
    };
  }
  // state = {
  //   // id:shortid.generate()
  //   rows: [
  //     {key: shortid.generate()}
  //   ]
  // }

  renderRow(row){
    return (<RowCpt key={row.key}/>)
  }
  render() {
    return (
      <div>
        {this.state.rows.map(row=>this.renderRow(row))}
      </div>
    )
  }
}

export default App;
