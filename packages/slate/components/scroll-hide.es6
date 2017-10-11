import React, { Component } from 'react';
import { debounce } from 'lodash';

export default WrappedComponent =>
  class WithScroll extends Component {
    state = { top: 0, scrolling: true };
    onScrollDebounce = debounce(
      (e) => {
        const top = e.target.scrollTop;
        this.setState({ top, scrolling: false });
      },
      100,
      { trailing: true, leading: false },
    );
    onScroll = (e) => {
      if (!this.state.scrolling) {
        this.setState({ scrolling: true });
      }
      this.onScrollDebounce(e);
    };
    componentDidMount() {
      document.addEventListener('scroll', this.onScroll, true);
      this.onScroll({ target: document });
    }
    componentWillUnmount() {
      document.removeEventListener('scroll', this.onScroll, true);
    }
    render() {
      const { top, scrolling } = this.state;
      return <WrappedComponent {...this.props} scrollTop={top} scrolling={scrolling} />;
    }
  };
