import React, { Component } from 'react';
import scrollparent from 'scrollparent';

export const scrollTopHelper = (node, func) => {
  const parent = scrollparent(node);

  let ticking = false;

  const update = () => {
    func(parent, () => {
      ticking = false;
    });
  };
  const requestTick = () => {
    if (!this.ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  };

  parent.addEventListener('scroll', requestTick, false);
  return () => parent.removeEventListener('scroll', requestTick);
};
export default WrappedComponent =>
  class ScrollTop extends Component {
    state = { top: 0, scrolling: false };
    componentDidMount() {
      this.unlisten = scrollTopHelper(
        document.querySelector(this.props.parentEl),
        this.update,
      );
    }
    componentWillUnmount() {
      this.unlisten();
    }
    update = (node, cb) => {
      if (node.scrollTop === this.top) {
        return;
      }
      this.top = node.scrollTop;
      this.setState(() => ({ top: this.top }), cb);
    };
    render() {
      const { top } = this.state;
      return <WrappedComponent {...this.props} scrollTop={top} />;
    }
  };
