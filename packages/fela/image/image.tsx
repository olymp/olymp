import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAmp } from 'olymp-utils';
import Container from './container';
import Img from './img';
import Amp from './amp';

@withAmp
class Image extends Component {
  initVals = () => {
    const { height, maxResolution } = this.props;
    let { width, ratio } = this.props;
    let isPercentage = false;

    if (!ratio) {
      ratio = 0.75;
    }

    // width = percent
    if (typeof width === 'string') {
      width = undefined;
      isPercentage = true;
    }

    // if height is set
    if (height) {
      if (width) {
        ratio = height / width;
      } else {
        width = height / ratio;
      }
    }

    // max size, if no size is set
    if (!width && !height) {
      width = Math.sqrt(maxResolution / ratio);
    }

    return {
      width,
      ratio,
      isPercentage,
    };
  };

  limitWidth = (w, ratio, isPercentage) => {
    const {
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      maxResolution,
    } = this.props;
    let width = w;

    // minWidth/minHeight
    if (minWidth && width < minWidth) {
      width = minWidth;
    }
    if (!isPercentage && minHeight && width * ratio < minHeight) {
      width = minHeight / ratio;
    }

    // maxWidth/maxHeight
    if (maxWidth && width > maxWidth) {
      width = maxWidth;
    }
    if (!isPercentage && maxHeight && width * ratio > maxHeight) {
      width = maxHeight / ratio;
    }

    // maxResolution
    if (width ** 2 * ratio > maxResolution) {
      width = Math.sqrt(maxResolution / ratio);
    }

    return Math.round(width);
  };

  getMode = (width, ratio, isPercentage) => {
    const { mode } = this.props;
    const srcRatio = this.props.srcRatio || ratio;
    const w = this.limitWidth(width, ratio, isPercentage);

    const defaultResult = {
      layout: 'fill',
      w,
      h: Math.round(w * ratio),
    };

    switch (mode) {
      case 'filled':
        // kleinere Seite 100%
        return defaultResult;

      case 'padded':
        // größere Seite 100%
        return {
          layout: 'fixed-height',
          w,
          h: Math.round(w * srcRatio),
        };

      default:
        return defaultResult;
    }
  };

  render() {
    const {
      className,
      lazy,
      mode,
      amp,
      src,
      alt,
      onClick,
      children,
      ...containerProps
    } = this.props;
    const { width, ratio, isPercentage } = this.initVals();
    const { layout, w, h } = this.getMode(width, ratio, isPercentage);
    const url = typeof src === 'function' ? src(w, h) : src;
    const image = (
      <Img
        src={url}
        alt={alt}
        width={w >= h ? '100%' : 'auto'}
        height={w < h ? '100%' : 'auto'}
        onClick={onClick}
      />
    );

    return (
      <Container
        {...containerProps}
        className={className}
        width={isPercentage ? this.props.width : w}
        ratio={ratio}
        lazy={!amp && lazy}
      >
        {amp
          ? <Amp layout={layout} src={url} alt={alt} width={w} height={h}>
            {image}
          </Amp>
          : image}
        {children}
      </Container>
    );
  }
}
Image.displayName = 'Image';
Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  ratio: PropTypes.number.isRequired,
  srcRatio: PropTypes.number.isRequired,
  mode: PropTypes.oneOf(['filled', 'padded']).isRequired,

  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,

  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  maxResolution: PropTypes.number,

  lazy: PropTypes.bool,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};
Image.defaultProps = {
  src: (w, h) => `https://lorempixel.com/${w}/${h}/cats/${w}x${h}`,
  ratio: 0.75,
  srcRatio: 0.75,
  mode: 'filled',

  width: undefined,
  height: undefined,

  minWidth: undefined,
  minHeight: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
  maxResolution: 111000, // 333*333px

  lazy: true,
  alt: '',
  onClick: () => { },
};
export default Image;
