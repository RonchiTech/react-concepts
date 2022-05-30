import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
      console.log('gds', error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log('error', error);
    console.log('info', info);
  }
  componentDidMount(){
      console.log(this.props);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Error: {this.props.children.props.heroName} not a hero...</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
