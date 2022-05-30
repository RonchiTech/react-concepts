import React, { Component } from 'react';
import ClickCounter from '../components/Counter/ClickCounter';
import HoverCounter from '../components/Counter/HoverCounter';
class Counter extends Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default Counter;
