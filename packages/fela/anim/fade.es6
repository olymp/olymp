import anime from 'animejs';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class FadeIn extends Component {
  componentDidMount() {
    const target = ReactDOM.findDOMNode(this);
    anime({
      targets: target,
      opacity: [0, 1],
      duration: 1000,
      easing: 'linear',
      elasticity: 0,
    });
    anime({
      targets: target,
      translateY: [30, 0],
      duration: 1500,
      easing: 'easeOutQuad',
      elasticity: 0,
    });
  }
  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}
