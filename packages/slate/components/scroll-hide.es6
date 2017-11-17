import React, { Component } from 'react';
import { debounce } from 'lodash';
import parent from 'scrollparent';

export default WrappedComponent =>
  class WithScroll extends Component {
    state = { top: 0, scrolling: false };

    componentDidMount() {
      const node = document.querySelector(this.props.parentEl);
      this.parent = parent(node);
      this.parent.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      this.parent.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
      if (this.parent.scrollTop === this.top) {
        return;
      }
      this.top = this.parent.scrollTop;
      this.requestTick();
    };

    requestTick = () => {
      if (!this.ticking) {
        requestAnimationFrame(this.onScrollDebounce);
      }
      this.ticking = true;
    };

    update = () => {
      this.ticking = false;
      this.setState({ top: this.top });
    };

    latestKnownScrollY = 0;
    ticking = false;

    onScrollDebounce = debounce(
      e => {
        this.ticking = false;
        this.setState({ top: this.top });
      },
      1,
      { trailing: true, leading: false },
    );

    render() {
      const { top } = this.state;
      return (
        <WrappedComponent {...this.props} scrollTop={top} scrolling={false} />
      );
    }
  };
