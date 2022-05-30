import React, { Component } from 'react';
import withCounter from '../../concepts/HOC/withCounter';

class ClickCounter extends Component {
  render() {
    const { incrementCounter, name, count } = this.props;
    return (
      <button onClick={incrementCounter}>
        <h2>{name}</h2>
        Click to Increment: {count}
      </button>
    );
  }
}

export default withCounter(ClickCounter, 5);
