import React, { Component } from 'react';
import { throttle } from 'lodash';
import cn from 'classnames';

export default WrappedComponent =>
  class WithScroll extends Component {
    state = { top: 0 };
    onScroll = throttle(
      (e) => {
        const top = e.target.scrollTop;
        this.setState({ top });
      },
      10,
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
