import React, { Component } from 'react';
import { connect } from 'react-redux';
import { urlToLocation } from './utils';
import { createPush } from './actions';

@connect(null, dispatch => ({
  push: createPush(dispatch),
}))
export default class Link extends Component {
  constructor(props) {
    super(props);
    this.location = urlToLocation(props.to);
  }
  componentWillReceiveProps(props) {
    this.location = urlToLocation(props.to);
  }
  onClick = e => {
    const { to, push, onClick } = this.props;
    e.preventDefault();
    if (onClick) {
      onClick(e);
    } else {
      push(this.location);
    }
  };
  render() {
    const { to, push, className, style, children } = this.props;
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
