import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';

class Skeletor extends Component {
  static contextTypes = {
    skeletorLoading: PropTypes.bool,
  };

  render() {
    const { component, data, dummy, count, ...props } = this.props;
    const { skeletorLoading } = this.context;

    if (!skeletorLoading) {
      return (
        <div>
          {(data || []).map(item => component(item))}
        </div>
      );
    }

    return (
      <div>
        {range(count).map(i => component(dummy()))}
      </div>
    );
  }
}

export default (component, data, dummy, count) =>
  (<Skeletor
    component={component}
    data={data}
    dummy={dummy}
    count={count || 1}
  />);
