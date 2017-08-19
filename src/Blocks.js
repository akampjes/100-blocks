import React, { Component } from 'react';
import Block from './Block';

import './Blocks.css';

class Blocks extends Component {
  blocks() {
    let arr = [];
    for(let i = 0; i < this.props.count; i++) {
      arr.push(<Block key={i} />);
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
