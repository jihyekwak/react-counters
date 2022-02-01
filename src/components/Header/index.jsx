import React, { Component } from 'react';
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h1>React Counters</h1>
        <button onClick={this.props.decreaseCounters}>-</button>
        <b>{this.props.counters}</b>
        <button onClick={this.props.increaseCounters}>+</button>
      </div>
    )
  }
}

export default Header;