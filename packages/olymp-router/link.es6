import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { compose, withPropsOnChange } from 'recompose';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import Tappable from 'react-tappable/lib/Tappable';
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
    })
  ),
  withPropsOnChange(['currentPathname', 'currentQuery'], props => ({
    location: getLocation(props),
  }))
);

@withLocation
export default class Link extends Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener(
      'click',
      e => {
        e.preventDefault();
      },
      false
    );
  }
  onPreload = e => {
    const { location, onPreload } = this.props;
    if (onPreload) {
      onPreload(location);
    }
  };
  onClick = e => {
    const { location, push, onClick } = this.props;
    if (onClick) {
      onClick(e);
    } else {
      push(location);
    }
    e.preventDefault();
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
      onPreload,
      ...rest
    } = this.props;
    return (
      <Tappable
        onTap={this.onClick}
        onTouchStart={this.onPreload}
        onMouseEnter={this.onPreload}
        component="a"
        preventDefault
        className={className}
        style={style}
        href={location ? location.url : undefined}
        {...rest}
      >
        {children}
      </Tappable>
    );
  }
}

Link.withLocation = withLocation;
Link.getLocation = getLocation;
