import React, { Component } from 'react';

class AddDiceButton extends Component {

  state = {count: 0}

  handleAdd = () => {
    const {count} = this.state

    this.setState({count: count + 1})
  }

  handleRemove = () => {
    const {count} = this.state

    this.setState({count: count - 1})
  }

  render() {
    const {count} = this.state

    return (
      <button className="btn btn-primary" type="button">
      <span className="badge" onClick={this.handleRemove}>-</span> {count} <span className="badge" onClick={this.handleAdd}>+</span>
      </button>
    )
  }
}

export default AddDiceButton;
