import React, { Component } from 'react';
import ReactGA from 'react-ga';

function logPageView(page) {
  ReactGA.set({ page });
  ReactGA.pageview(page);
}

export default class GoogleAnalytics extends Component {
  componentDidMount() {
    if (!this.props.id) return;
    ReactGA.initialize(this.props.id);
    logPageView(this.props.path);
  }
  componentDidUpdate() {
    if (!this.props.id) return;
    logPageView(this.props.path);
  }
  shouldComponentUpdate(newProps) {
    return newProps.path !== this.props.path;
  }
  render() {
    return null;
  }
}
