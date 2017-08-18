import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { urlToLocation } from './utils';
import { pick } from 'lodash';

@inject('$history')
@observer
export default class Link extends Component {
  constructor(props) {
    super(props);
    this.setLocation(props);
  }
  componentWillReceiveProps(props) {
    this.setLocation(props);
  }
  setLocation(props) {
    if (props.to) {
      this.location = urlToLocation(props.to);
    } else if (props.pathname || props.query) {
      const pathname = props.pathname || props.$history.pathname;
      let query;
      if (props.query === undefined) {
        query = props.$history.query;
      } else if (props.query === null) {
        query = {};
      } else if (typeof props.query === 'function') {
        query = props.query(props.$history.query);
      } else if (Array.isArray(props.query) || typeof props.query === 'string') {
        query = pick(props.$history.query, props.query);
      } else {
        query = props.query;
      }
      this.location = urlToLocation({
        pathname,
        query,
      });
    }
  }
  onClick = (e) => {
    const { $history, onClick } = this.props;
    e.preventDefault();
    if (onClick) {
      onClick(e);
    } else {
      $history.push(this.location);
    }
  };
  render() {
    const { className, style, children } = this.props;
    return (
      <a
        className={className}
        style={style}
        href={this.location.url}
        onClick={this.onClick}
        children={children}
      />
    );
  }
}
