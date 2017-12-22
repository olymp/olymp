import React, { Component } from 'react';
import { throttle, debounce } from 'lodash';
import cn from 'classnames';

export default WrappedComponent =>
  class WithScroll extends Component {
    state = { top: 0 };
    onScroll = throttle(
      e => {
        const top = e.target.scrollTop;
        this.setState({ top });
      },
      0,
      { trailing: true, leading: true },
    );
    componentDidMount() {
      document.addEventListener('scroll', this.onScroll, true);
    }
    componentWillUnmount() {
      document.removeEventListener('scroll', this.onScroll, true);
    }
    render() {
      let { className } = this.state;
      const { top } = this.state;
      if (top && false) {
        className = cn(className, top && 'is-scrolled');
      }
      return <WrappedComponent {...this.props} scrollTop={top} />;
    }
  };

export const withScrollHide = WrappedComponent =>
  class WithScroll extends Component {
    state = { top: 0, scrolling: true };
    onScrollDebounce = debounce(
      e => {
        const top = e.target.scrollTop;
        this.setState({ top, scrolling: false });
      },
      100,
      { trailing: true, leading: false },
    );
    onScroll = e => {
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
      const { className } = this.state;
      const { top, scrolling } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          scrollTop={top}
          scrolling={scrolling}
        />
      );
    }
  };
