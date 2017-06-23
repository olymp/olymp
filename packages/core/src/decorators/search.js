import React, { Component } from 'react';
import throttleInput from '../throttle-input';

export default name => WrappedComponent =>
  class WithSearchComponent extends Component {
    throttle = throttleInput(500);
    constructor(props) {
      super();
      const { location } = props;
      this.state = {
        [name]: location.query && location.query[name],
      };
    }
    search = (term) => {
      const { location, router } = this.props;
      const { pathname, query } = location;
      this.setState({ [name]: term });
      this.throttle(() => {
        router.push({
          pathname,
          query: { ...query, [name]: term || undefined },
        });
      });
    };
    render() {
      const { location } = this.props;
      return (
        <WrappedComponent
          {...this.props}
          performSearch={this.search}
          searchText={this.state[name]}
          searchTerm={location.query && location.query[name]}
        />
      );
    }
  };
