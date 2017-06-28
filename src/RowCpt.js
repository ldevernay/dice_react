
import React, { Component } from 'react'
import { render } from 'react-dom'
import AddDiceButton from './AddDiceButton'

class RowCpt extends Component {
  render() {

    return (
      <div className="container">
        <div className="row">
          <AddDiceButton type="number">
          </AddDiceButton>
          <AddDiceButton type="face">
          </AddDiceButton>
        </div>
      </div>
    )
  }
}

export default RowCpt;
