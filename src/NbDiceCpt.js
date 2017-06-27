import React, { Component } from 'react'
import { render } from 'react-dom'

class NbDiceCpt extends Component {
  render() {
    const {nbDice} = this.props

    return (
      <div>
        {nbDice}
      </div>
    )
  }
}

export default NbDiceCpt;
