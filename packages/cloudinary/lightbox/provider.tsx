import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'olymp-router';

@withRouter
export default class LightboxProvider extends Component {
  images = [];
  state = {
    images: [],
  };

  static childContextTypes = {
    lightbox: PropTypes.object,
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
