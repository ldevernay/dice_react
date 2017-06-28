
import React, { Component } from 'react'
import { render } from 'react-dom'
import AddDiceButton from './AddDiceButton'

class RowCpt extends Component {
  render() {

    return (
      <div className="container">
        <div className="row">
          <AddDiceButton type="number"/>
          <AddDiceButton type="face"/>
        </div>
      </div>
    )
  }
}

export default RowCpt;
