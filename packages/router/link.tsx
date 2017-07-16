import React, { Component } from 'react';
import { connect } from 'react-redux';
import { urlToLocation } from './utils';
import { createPush } from './actions';

@connect(
  ({ location }) => location,
  dispatch => ({
    push: createPush(dispatch),
  })
)
export default class Link extends Component {
  constructor(props) {
    super(props);
    this.location = urlToLocation(props.to);
  }
  componentWillReceiveProps(props) {
    this.location = urlToLocation(props.to);
  }
  onClick = e => {
    const { to, push } = this.props;
    e.preventDefault();
    push(this.location);
  };
  render() {
    const { to, push, ...rest } = this.props;
    return <a {...rest} href={this.location.url} onClick={this.onClick} />;
  }
}
