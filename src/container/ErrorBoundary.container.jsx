import { Component } from 'react';
import Hero from '../components/Hero/Hero';
import ErrorBoundary from '../concepts/ErrorBoundary/ErrorBoundary';

const heroes = [{ name: 'Superman' }, { name: 'Batman' }, { name: 'Joker' }];

class ErrorBoundaryContainer extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
    };
  }
  componentDidMount() {
    this.setState({
      heroes,
    });
  }
  render() {
    return this.state.heroes.map((hero) => {
      return (
        <ErrorBoundary key={hero.name}>
          <Hero heroName={hero.name} />
        </ErrorBoundary>
      );
    });
  }
}

export default ErrorBoundaryContainer;
