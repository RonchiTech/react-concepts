import React, { Component } from 'react';
import withCounter from '../../concepts/HOC/withCounter';
class HoverCounter extends Component {
  render() {
    const { incrementCounter, count } = this.props;
    return (
      <div>
        <h2 onMouseEnter={incrementCounter}>
          Hovered {count} times
        </h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
