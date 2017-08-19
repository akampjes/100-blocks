import React, { Component } from 'react';
import Block from './Block';

import './Blocks.css';

class Blocks extends Component {
  block() {
    return (
      <Block />
    );
  }

  rows () {
    let arr = [];

    for(let j = 0; j < Math.ceil(this.props.count / this.props.columns); j++){
      let inner_arr = [];

      for(let i = 0; i < this.props.columns && (j * this.props.columns + i) < this.props.count; i++) {
        inner_arr.push(this.block());
      }

      arr.push(inner_arr);
    }

    return arr;
  }

  blocks() {
    let arr = [];
    for(let i = 0; i < this.props.count; i++) {
      arr.push(<Block />);
    }

    return arr;
  }

  render () {
    return (
      <div className="container-wrapper">
        <div className="blocks-container">
          {this.blocks()}
        </div>
      </div>
    );
  }
}

export default Blocks;
