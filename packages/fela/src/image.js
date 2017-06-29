import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { createComponent } from 'react-fela';
import { withAmp } from 'olymp';
import { ContentLoaderStyles } from './loader';

const Container = createComponent(
  ({
    ratio,
    width,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    visible,
    circle,
  }) => ({
    position: 'relative',
    overflow: 'hidden',
    width,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    borderRadius: circle && '50%',
    onBefore: {
      display: 'block',
      content: '""',
      width: '100%',
      paddingTop: `${ratio * 100}%`,
    },
    '> img': {
      center: true,
    },
    ...(!visible ? ContentLoaderStyles : {}),
  }),
  ({ lazy, onVisible, ...p }) =>
    lazy ? <LazyLoad {...p} onContentVisible={onVisible} /> : <div {...p} />,
  ({ ratio, minWidth, minHeight, maxWidth, maxHeight, visible, ...p }) =>
    Object.keys(p)
);

@withAmp
class Image extends Component {
  state = { visible: false };

  render() {
    const {
      className,
      lazy,
      circle,
      width: pWidth, // prevent ...rest
      height: pHeight, // prevent ...rest
      ratio: pRatio, // prevent ...rest
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      amp,
      alt,
      setUrl,
      maxResolution,
      ...rest
    } = this.props;
    const { visible } = this.state;
    let { width, height, ratio } = this.props;
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

    // minWidth/minHeight
    if (minWidth && width < minWidth) {
      width = minWidth;
    }
    if (minHeight && width * ratio < minHeight) {
      width = minHeight / ratio;
    }

    // maxWidth/maxHeight
    if (maxWidth && width > maxWidth) {
      width = maxWidth;
    }
    if (maxHeight && width * ratio > maxHeight) {
      width = maxHeight / ratio;
    }

    if (width ** 2 * ratio > maxResolution) {
      width = Math.sqrt(maxResolution / ratio);
    }

    height = Math.round(width * ratio);
    width = Math.round(width);

    if (amp) {
      return (
        <amp-img
          className={className}
          layout="responsive"
          src={setUrl(width, height)}
          alt={alt}
          width={width}
          height={height}
        />
      );
    }

    return (
      <Container
        className={className}
        width={isPercentage ? this.props.width : width}
        minWidth={minWidth}
        minHeight={minHeight}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        ratio={ratio}
        lazy={lazy}
        circle={circle}
        visible={visible}
        onVisible={() => this.setState({ visible: true })}
      >
        <img
          src={setUrl(width, height)}
          alt={alt}
          width={width > height ? '100%' : 'auto'}
          height={height > width ? '100%' : 'auto'}
          {...rest}
        />
      </Container>
    );
  }
}
Image.displayName = 'Image';
Image.propTypes = {
  setUrl: PropTypes.func.isRequired,
  ratio: PropTypes.number.isRequired,
  lazy: PropTypes.bool,
  circle: PropTypes.bool,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  maxResolution: PropTypes.number,
};
Image.defaultProps = {
  setUrl: (w, h) => `https://lorempixel.com/${w}/${h}/cats/${w}x${h}`,
  ratio: 0.75,
  lazy: true,
  circle: false,
  alt: '',
  width: undefined,
  height: undefined,
  minWidth: undefined,
  minHeight: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
  maxResolution: 111000, // 333*333px
};
export default Image;
