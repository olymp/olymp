import { Component } from 'react';
import { connect } from 'react-redux';
import withRedux from './lightbox-redux';

const enhanceQuery = connect(({ location }) => ({
  qlightbox: location.query.lightbox,
}));

@enhanceQuery
@withRedux
export default class LightboxProvider extends Component {
  render() {
    const { children } = this.props;
    return children;
  }
}
