import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'olymp';
import Image, { getUrl } from '../components/image';

@withRouter
export default class Lightbox extends Component {
  ref = Math.random().toString(36).substr(2, 9);

  static contextTypes = {
    lightbox: PropTypes.object,
  };

  componentWillMount() {
    const { value } = this.props;

    this.add(value);
  }

  componentWillReceiveProps({ value }) {
    const { lightbox } = this.context;

    if (value.id !== this.props.value.id) {
      lightbox.remove(this.ref);
      this.add(value);
    }
  }

  componentWillUnmount() {
    const { lightbox } = this.context;

    lightbox.remove(this.ref);
  }

  add = (value) => {
    const { lightbox } = this.context;
    const width = 800;
    const getSrcSet = w =>
      `${getUrl(value, {
        w: Math.floor(w),
      })} ${Math.floor(w)}w`;

    lightbox.add({
      ref: this.ref,
      gallery: lightbox.gallery,
      src: getUrl(value, { w: width }),
      srcset: [
        getSrcSet(width),
        getSrcSet(width / 4 * 3),
        getSrcSet(width / 2),
        getSrcSet(width / 4),
      ],
      thumbnail: getUrl(value, {
        w: 50,
        h: 50,
      }),
      caption: value.caption && value.source
        ? `${value.caption} - ${value.source}`
        : value.caption || value.source || '',
    });
  };

  onClick = (e) => {
    const { onClick, router, pathname, query } = this.props;
    router.push({ pathname, query: { ...query, lightbox: this.ref } });
    if (onClick) {
      onClick(e);
    }
  };

  render() {
    const {
      value,
      onClick,
      router,
      pathname,
      query,
      search,
      dispatch,
      location,
      ...rest
    } = this.props;

    return <Image onClick={this.onClick} value={value} {...rest} />;
  }
}
