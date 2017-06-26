import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { createComponent, ContentLoaderStyles } from 'olymp-fela';

const MAX_SIZE = 400; // Maximum size to 400px to prevent loading to big images/too much traffic

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
  ({ ratio, width, maxWidth }) => ({
    position: 'relative',
    width: width || '100%',
    maxWidth: maxWidth || '100%',
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
    ...ContentLoaderStyles,
  }),
  ({ lazy, ...p }) => (lazy ? <LazyLoad {...p} /> : <div {...p} />),
  ({ ratio, ...p }) => Object.keys(p)
);

const LazyImage = (props) => {
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
    ...rest
  } = props;
  const oWidth = (value.crop && value.crop[0]) || value.width;
  const oHeight = (value.crop && value.crop[1]) || value.height;
  let width = typeof pWidth !== 'string' && pWidth;
  let height = typeof pWidth !== 'string' && pHeight;
  let ratio = pRatio;

  // max size, if no size is set
  if (typeof pWidth === 'string' || (!width && !height)) {
    if (oWidth >= oHeight) {
      width = MAX_SIZE;
    } else {
      height = MAX_SIZE;
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
  if (width > maxWidth) {
    width = maxWidth;
  }
  if (height > maxHeight) {
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

  return (
    <Container
      className={className}
      width={typeof pWidth === 'string' ? pWidth : width}
      maxWidth={maxWidth}
      ratio={ratio}
      lazy={lazy}
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
};
LazyImage.propTypes = {
  lazy: PropTypes.bool,
  ratio: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  value: PropTypes.shape({
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
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
  className: undefined,
  options: {},
};
export default LazyImage;
