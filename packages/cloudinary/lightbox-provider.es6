import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const enhanceQuery = connect(({ location }) => ({
  query: location.query,
}));

@enhanceQuery
export default class LightboxProvider extends Component {
  static childContextTypes = {
    lightbox: PropTypes.object,
  };

  state = {
    images: [],
  };

  getChildContext() {
    const { images } = this.state;

    return {
      lightbox: {
        add: this.add,
        remove: this.remove,
        gallery: 0,
        images,
      },
    };
  }

  componentWillReceiveProps({ query }) {
    const { images } = this.state;

    if (query.lightbox !== this.props.query.lightbox) {
      this.setState({ images: this.images }); // save images to context
    }
  }

  images = [];

  add = image => {
    this.images.push(image);
  };

  remove = ref => {
    this.images = this.images.filter(image => image.ref !== ref);
  };

  render() {
    const { children } = this.props;

    return children;
  }
}
