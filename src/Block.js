import React, { Component } from 'react';

import './Block.css'

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  clicked() {
    this.setState({selected: !this.state.selected});
  }

  class_name() {
    if(this.state.selected) {
      return 'block selected'
    } else {
      return 'block'
    }
  }

  render () {
    return (
      <div className={this.class_name()} onClick={() => this.clicked()}>
      </div>
    );
  }
}

export default Block;
