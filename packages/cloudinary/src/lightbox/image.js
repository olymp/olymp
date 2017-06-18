import React, { Component } from 'react';
import { withRouter } from 'olymp';
import { url } from '../utils';
import Image from '../components/image';

@withRouter
export default class Lightbox extends Component {
  ref = Math.random().toString(36).substr(2, 9);

  static contextTypes = {
    lightbox: React.PropTypes.object,
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

  add = value => {
    const { width = 800, height, retina, mode } = this.props;
    const { lightbox } = this.context;
    const getSrcSet = w =>
      `${url(value.url, {
        width: Math.floor(w),
        dpr: retina ? 2 : undefined,
        mode,
      })} ${Math.floor(w)}w`;

    lightbox.add({
      ref: this.ref,
      gallery: lightbox.gallery,
      src: url(value.url, { width, height, dpr: retina ? 2 : undefined, mode }),
      srcset: [
        getSrcSet(width),
        getSrcSet(width / 4 * 3),
        getSrcSet(width / 2),
        getSrcSet(width / 4),
      ],
      thumbnail: url(value.url, {
        width: 50,
        height: 50,
        dpr: retina ? 2 : undefined,
        mode: 'fill',
      }),
      caption: value.caption && value.source
        ? `${value.caption} - ${value.source}`
        : value.caption || value.source || '',
    });
  };

  onClick = e => {
    const { onClick, router, pathname, query } = this.props;
    router.push({ pathname, query: { ...query, lightbox: this.ref } });
    if (onClick) onClick(e);
  };

  render() {
    const {
      onClick,
      router,
      pathname,
      query,
      value,
      search,
      dispatch,
      location,
      retina,
      ...rest
    } = this.props;

    return <Image onClick={this.onClick} value={value} {...rest} />;
  }
}
