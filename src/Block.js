import React, { Component } from 'react';

import './Block.css'

class Block extends Component {
  class_name() {
    return "block " + this.props.color;
  }

  render () {
    return (
      <div
        className={this.class_name()}
        onMouseDown={() => { this.props.onMouseDown()}}
        onMouseUp={() => { this.props.onMouseUp()}}
        onMouseOver={() => { this.props.onMouseOver()}}
        onClick={() => { this.props.onClick() }} >
      </div>
    );
  }
}

export default Block;
