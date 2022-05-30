import React from 'react';

const withCounter = (WrappedComponent, incrementNumber = 1) => {
  return class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    incrementCounter = () => {
      this.setState(({ count }) => {
        return { count: count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props}
        />
      );
    }
  };
};

export default withCounter;
