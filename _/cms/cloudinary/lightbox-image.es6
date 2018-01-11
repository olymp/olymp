import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUpdateQuery } from 'olymp-router';
import { createComponent } from 'react-fela';
import { lightboxActions } from './lightbox-redux';
import cloudinaryUrl from './cloudinary-url';
import Image from './image';

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
  ...lightboxActions(dispatch),
}))
export default class Lightbox extends Component {
  static contextTypes = {
    gallery: PropTypes.string,
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
    const { removeFromLightbox } = this.props;
    const { gallery } = this.context;
    if (value.id !== this.props.value.id) {
      removeFromLightbox(this.ref, gallery);
      this.add(value);
    }
  }

  componentWillUnmount() {
    const { removeFromLightbox } = this.props;
    const { gallery } = this.context;
    removeFromLightbox(this.ref, gallery);
  }

  onClick = e => {
    const { onClick, updateQuery } = this.props;
    updateQuery({ lightbox: this.ref });
    if (onClick) {
      onClick(e);
    }
  };

  add = value => {
    const { addToLightbox } = this.props;
    const { gallery } = this.context;
    const width = 800;
    const getSrcSet = w =>
      `${cloudinaryUrl(value, {
        w: Math.floor(w),
      })} ${Math.floor(w)}w`;

    addToLightbox(
      {
        ref: this.ref,
        origin: value.url,
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
        width: value.width,
        height: value.height,
        caption:
          value.caption && value.source
            ? `${value.caption} - ${value.source}`
            : value.caption || value.source || '',
      },
      gallery,
    );
  };

  ref = Math.random()
    .toString(36)
    .substr(2, 9);

  render() {
    const {
      value,
      onClick,
      search,
      dispatch,
      updateQuery,
      addToLightbox,
      removeFromLightbox,
      ...rest
    } = this.props;

    if (!value || !value.url) {
      return <Img {...rest} value={value} />;
    }

    return <Img {...rest} onClick={this.onClick} value={value} />;
  }
}
