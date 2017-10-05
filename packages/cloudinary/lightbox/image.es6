import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUpdateQuery } from 'olymp-router';
import { createComponent } from 'olymp-fela';
import Image, { cloudinaryUrl } from '../components/image';

const Img = createComponent(
  ({ theme }) => ({
    cursor: 'pointer',
    onHover: {
      opacity: 0.85,
    },
  }),
  p => <Image {...p} />,
  p => Object.keys(p),
);

@connect(null, dispatch => ({
  updateQuery: createUpdateQuery(dispatch),
}))
export default class Lightbox extends Component {
  ref = Math.random()
    .toString(36)
    .substr(2, 9);

  static contextTypes = {
    lightbox: PropTypes.object,
  };
  static defaultProps = {
    attributes: {},
  };

  componentWillMount() {
    const { value } = this.props;

    if (value) {
      this.add(value);
    }
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
      `${cloudinaryUrl(value, {
        w: Math.floor(w),
      })} ${Math.floor(w)}w`;

    lightbox.add({
      ref: this.ref,
      gallery: lightbox.gallery,
      src: cloudinaryUrl(value, { w: width }),
      srcset: [
        getSrcSet(width),
        getSrcSet(width / 4 * 3),
        getSrcSet(width / 2),
        getSrcSet(width / 4),
      ],
      thumbnail: cloudinaryUrl(value, {
        w: 50,
        h: 50,
      }),
      caption:
        value.caption && value.source
          ? `${value.caption} - ${value.source}`
          : value.caption || value.source || '',
    });
  };

  onClick = (e) => {
    const { onClick, updateQuery } = this.props;
    updateQuery({ lightbox: this.ref });
    if (onClick) {
      onClick(e);
    }
  };

  render() {
    const { value, onClick, search, dispatch, updateQuery, ...rest } = this.props;

    if (!value || !value.url) {
      return <Img {...rest} value={value} />;
    }

    return <Img {...rest} onClick={this.onClick} value={value} />;
  }
}
