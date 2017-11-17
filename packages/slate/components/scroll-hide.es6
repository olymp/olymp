import React, { Component } from 'react';
import { debounce } from 'lodash';
import parent from 'scrollparent';

export default WrappedComponent =>
  class WithScroll extends Component {
    state = { top: 0, scrolling: false };

    componentDidMount() {
      const node = document.querySelector(this.props.parentEl);
      this.parent = parent(node);
      this.parent.addEventListener('scroll', this.requestTick, false);
    }

    componentWillUnmount() {
      this.parent.removeEventListener('scroll', this.requestTick);
    }

    requestTick = () => {
      if (!this.ticking) {
        requestAnimationFrame(this.update);
      }
      this.ticking = true;
    };

    update = () => {
      if (this.parent.scrollTop === this.top) {
        return;
      }
      this.top = this.parent.scrollTop;
      this.setState(() => ({ top: this.top }), () => (this.ticking = false));
    };

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
