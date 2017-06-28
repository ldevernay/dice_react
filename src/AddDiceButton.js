import React, { Component } from 'react';

class AddDiceButton extends Component {

  state = {count: 6}

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
          <div className="col-sm-1">
            {count > 0 && (<div className="card small">
              <div className="section darker">
                <button onClick={this.handleAdd}>
                  +
                </button>
                {this.props.type == "number" ?
                  (<p>{count}</p>) :
                  (<p>D{count}</p>)}
                <button onClick={this.handleRemove}>
                  -
                </button>
              </div>
            </div>)}
          </div>
    )
  }
}

export default AddDiceButton;
