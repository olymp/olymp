import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import raf from 'raf';

export const defaultRect = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
const getNodeRect = (element) => {
  if (element) {
    return element.getBoundingClientRect();
  } return defaultRect;
};
const getDocRect = () => {
  return getNodeRect(typeof document !== 'undefined' && document.documentElement);
};

export default WrappedComponent => class WithTrackDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rect: null,
      nodeRect: null,
    };
  }

  componentDidMount() {
    const { cancel } = raf;
    let rafId;

    const update = () => {
      this.setState({
        rect: getDocRect(),
        nodeRect: getNodeRect(ReactDOM.findDOMNode(this.node)),
      });
    };

    const handleScroll = (event) => {
      cancel(rafId);
      rafId = raf(update);
    };

    window.addEventListener('scroll', handleScroll);

    this.removeScrollHandler = () => {
      cancel(rafId);
      window.removeEventListener('scroll', handleScroll);
    };

    update();
  }

  componentWillUnmount() {
    this.removeScrollHandler();
  }

  render() {
    const { rect, nodeRect } = this.state;
    const scrollY = rect ? -rect.top : 0;
    const nodeScrollY = nodeRect ? -nodeRect.top : 0;
    const relativeScrollY = scrollY - nodeScrollY;
    const factor = (relativeScrollY - scrollY);
    return <WrappedComponent ref={node => this.node = node} {...this.props} scrollY={scrollY} nodeScrollY={nodeScrollY} relativeScrollY={relativeScrollY} factor={factor} />;
  }
};
