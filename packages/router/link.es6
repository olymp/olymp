import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { urlToLocation } from './utils';
import { createPush } from './redux';

@connect(
  ({ location }) => ({
    currentPathname: location.pathname,
    currentQuery: location.query,
  }),
  dispatch => ({
    push: createPush(dispatch),
  }),
)
export default class Link extends Component {
  constructor(props) {
    super(props);
    this.setLocation(props);
  }
  componentWillReceiveProps(props) {
    this.setLocation(props);
  }
  onClick = (e) => {
    const { to, push, onClick } = this.props;
    e.preventDefault();
    if (onClick) {
      onClick(e);
    } else {
      push(this.location);
    }
  };
  setLocation(props) {
    if (props.to) {
      this.location = urlToLocation(props.to);
    } else if (props.updateQuery) {
      const pathname = props.pathname || props.currentPathname;
      const query = { ...props.currentQuery, ...props.updateQuery };
      this.location = urlToLocation({ pathname, query });
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
      this.location = urlToLocation({
        pathname,
        query,
      });
    }
  }

  render() {
    const { to, push, className, style, children, attributes = {} } = this.props;
    return (
      <a
        className={className}
        style={style}
        href={this.location ? this.location.url : 'javascript:;'}
        onClick={this.onClick}
        {...attributes}
      >
        {children}
      </a>
    );
  }
}
