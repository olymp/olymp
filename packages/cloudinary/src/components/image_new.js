import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { createComponent, ContentLoaderStyles } from 'olymp-fela';
import { withAmp } from 'olymp';

// https://github.com/cloudinary/cloudinary-react
// http://cloudinary.com/documentation/image_transformation_reference

const url = (url, options) => {
  const newUrl = url
    .split('ttp://res.cloudinary.com/')
    .join('ttps://res.cloudinary.com/');

  let query = '';
  Object.keys(options).forEach(
    key => (query = `${query}${key}_${options[key]},`)
  );

  return newUrl.replace('/upload/', `/upload/${query}/`);
};

const Container = createComponent(
  ({ ratio, width, maxWidth, maxHeight, visible }) => ({
    position: 'relative',
    width: width || '100%',
    overflow: 'hidden',
    maxWidth: maxWidth || '100%',
    maxHeight: maxHeight || 'auto',
    onBefore: {
      display: 'block',
      content: '""',
      width: '100%',
      paddingTop: `${ratio * 100}%`,
    },
    '> *': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    ...(!visible ? ContentLoaderStyles : {}),
  }),
  ({ lazy, onVisible, ...p }) =>
    lazy ? <LazyLoad {...p} onContentVisible={onVisible} /> : <div {...p} />,
  ({ ratio, ...p }) => Object.keys(p)
);

@withAmp
class LazyImage extends Component {
  state = { visible: false };

  render() {
    const {
      className,
      options: pOptions,
      value,
      lazy,
      ratio: pRatio,
      width: pWidth,
      height: pHeight,
      maxWidth,
      maxHeight,
      maxSize,
      amp,
      ...rest
    } = this.props;
    const { visible } = this.state;

    if (!value) {
      return <div />;
    }

    const oWidth = (value.crop && value.crop[0]) || value.width;
    const oHeight = (value.crop && value.crop[1]) || value.height;
    let width = typeof pWidth !== 'string' && pWidth;
    let height = typeof pWidth !== 'string' && pHeight;
    let ratio = pRatio || oHeight / oWidth;

    // todo: <Img value={bild} options={{ c: 'pad' }} width={200} ratio={1} /> auch mit height=200 statt ratio=1 möglich!
    /* <Image
          value={bild}
          options={{ c: 'pad' }}
          maxSize={200}
          width="70%"
          ratio={1}
        /> optimieren!
        */

    // max size, if no size is set
    if (typeof pWidth === 'string' || (!width && !height)) {
      if (oWidth >= oHeight) {
        width = maxSize;
      } else {
        height = maxSize;
      }
    }

    if (ratio) {
      if (height) {
        width = height / ratio;
      } else {
        height = ratio * width;
      }
    } else if (oWidth >= oHeight && (!!width === !!height || width)) {
      height = width / oWidth * oHeight;
    } else {
      width = height / oHeight * oWidth;
    }
    ratio = height / width;

    // maxWidth/maxHeight
    if (maxWidth && width > maxWidth) {
      width = maxWidth;
    }
    if (maxHeight && height > maxHeight) {
      height = maxHeight;
      width = height / ratio;
    }

    const options = {
      w: Math.round(width),
      h: Math.round(width * ratio),
      c: 'fill',
      f: 'auto',
      q: 'auto:eco',
      fl: 'lossy',
      dpr: 2,
      ...pOptions,
    };

    if (amp) {
      return (
        <amp-img
          layout="responsive"
          src={url(value.url, options)}
          alt={value.caption}
          width={width}
          height={Math.round(width * ratio)}
        />
      );
    }

    return (
      <Container
        className={className}
        width={typeof pWidth === 'string' ? pWidth : width}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        ratio={ratio}
        lazy={lazy}
        visible={visible}
        onVisible={() => this.setState({ visible: true })}
      >
        <img
          src={url(value.url, options)}
          alt={value.caption}
          width="100%"
          height="auto"
          {...rest}
        />
      </Container>
    );
  }
}
LazyImage.propTypes = {
  lazy: PropTypes.bool,
  ratio: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  maxSize: PropTypes.number,
  value: PropTypes.shape({
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  className: PropTypes.string,
  options: PropTypes.object,
};
LazyImage.defaultProps = {
  lazy: true,
  ratio: undefined,
  width: undefined,
  height: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
  maxSize: 400,
  value: undefined,
  className: undefined,
  options: {},
};
export default LazyImage;
