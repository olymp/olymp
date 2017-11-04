import React, { Component } from 'react';
import { compose, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { urlToLocation } from './utils';
import { createPush } from './redux';

export const getLocation = props => {
  if (props.location) {
    return props.location;
  }
  if (props.to) {
    return urlToLocation(props.to);
  } else if (props.updateQuery) {
    const pathname = props.pathname || props.currentPathname;
    const query = { ...props.currentQuery, ...props.updateQuery };
    return urlToLocation({ pathname, query });
  } else if (props.replaceQuery) {
    const pathname = props.pathname || props.currentPathname;
    return urlToLocation({ pathname, query: props.replaceQuery });
  } else if (props.pathname || props.query) {
    const pathname = props.pathname || props.currentPathname;
    let query;
    if (props.query === undefined) {
      query = props.currentQuery;
    } else if (props.query === null) {
      query = {};
    } else if (typeof props.query === 'function') {
      query = props.query(props.currentQuery);
    } else if (Array.isArray(props.query) || typeof props.query === 'string') {
      query = pick(props.currentQuery, props.query);
    } else {
      query = props.query;
    }
    return urlToLocation({
      pathname,
      query,
    });
  }
};

export const withLocation = compose(
  connect(
    ({ location }) => ({
      currentPathname: location.pathname,
      currentQuery: location.query,
    }),
    dispatch => ({
      push: createPush(dispatch),
    }),
  ),
  withPropsOnChange(['currentPathname', 'currentQuery'], props => ({
    location: getLocation(props),
  })),
);

@withLocation
export default class Link extends Component {
  onClick = e => {
    const { location, push, onClick } = this.props;
    e.preventDefault();
    if (onClick) {
      onClick(e);
    } else {
      push(location);
    }
  };
  render() {
    const {
      location,
      className,
      style,
      children,
      currentPathname,
      updateQuery,
      currentQuery,
      replaceQuery,
      push,
      query,
      pathname,
      to,
      ...rest
    } = this.props;
    return (
      <a
        className={className}
        style={style}
        href={location ? location.url : undefined}
        onClick={this.onClick}
        onTouchStart={this.onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }
}

Link.withLocation = withLocation;
Link.getLocation = getLocation;
