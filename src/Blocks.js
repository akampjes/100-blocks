import React, { Component } from 'react';
import Block from './Block';

import './Blocks.css';

class Blocks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blocks: Array(this.props.count).fill('green'),
      selectedStart: null,
    };
  }

  blocks() {
    let arr = [];
    for(let i = 0; i < this.props.count; i++) {
      arr.push(this.render_block(i));
    }

    return arr;
  }

  mouse_down(i) {
    console.log("mouse down: " + i);
    this.setState({selectedStart: i});

    let blocks = this.state.blocks;
    blocks[i] = 'grey';
    this.setState({blocks: blocks});
  }

  mouse_up(i) {
    console.log("mouse up: " + i);
    let blocks = this.state.blocks;

    for(let j = this.state.selectedStart; j <= i; j++) {
      blocks[j] = 'red';
    }

    this.setState({blocks: blocks, selectedStart: null});
  }

  on_mouse_over(i) {
    console.log("on mouse over: " + i);

    if(this.state.selectedStart) {
      let blocks = this.state.blocks;

      for(let j = this.state.selectedStart; j <= i; j++) {
        blocks[j] = 'grey';
      }

      this.setState({blocks: blocks});
    }
  }

  render_block(i) {
    let selected = this.state.blocks[i];
    let color = this.state.blocks[i];

    return (
      <Block
        key={i}
        selected={selected}
        color={color}
        onMouseDown={() => this.mouse_down(i)}
        onMouseUp={() => this.mouse_up(i)}
        onMouseOver={() => this.on_mouse_over(i)}
      />
    );
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
