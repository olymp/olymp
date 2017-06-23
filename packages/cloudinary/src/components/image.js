import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { createComponent } from 'olymp-fela';
import { url } from '../utils';

// const MAX_SIZE = 640; // Maximum size to 640px to prevent loading to big images/too much traffic

// https://github.com/cloudinary/cloudinary-react
// http://cloudinary.com/documentation/image_transformation_reference

const Loader = createComponent(
  () => ({
    position: 'absolute',
    top: 0,
    left: 0,
  }),
  p => <LazyLoad {...p} />,
  ({ lazy, ...p }) => Object.keys(p)
);

const Img = createComponent(
  ({ width }) => ({
    width: width || '100%',
    display: 'block',
  }),
  'img',
  ({ lazy, ...p }) => Object.keys(p)
);

const Background = createComponent(
  () => ({
    width: '100%',
    display: 'block',
    filter: 'blur(8px)',
  }),
  'img',
  ['className', 'src']
);

const Container = createComponent(
  ({ width, height }) => ({
    width,
    height,
    overflow: 'hidden',
    position: 'relative',
  }),
  'div',
  ['className', 'children']
);

const LazyImage = (props) => {
  const { className, retina, value, mode, lazy, ...rest } = props;
  const oWidth = (value.crop && value.crop[0]) || value.width;
  const oHeight = (value.crop && value.crop[1]) || value.height;
  let width = props.width;
  let height = props.height;

  if (!lazy || typeof width === 'string') {
    // old image-comp
    return (
      <Img
        {...rest}
        src={url(value.url, {
          ...value,
          width,
          height,
          dpr: retina ? 2 : undefined,
          mode,
        })}
        alt={value.caption}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  if (oWidth >= oHeight && (!!width === !!height || width)) {
    width = width || 640;
    height = width / oWidth * oHeight;
  } else {
    height = height || 640;
    width = height / oHeight * oWidth;
  }

  const ratio = Math.round(height / width);
  width = Math.round(width);
  height = Math.round(height);

  return (
    <Container className={className} width={width} height={height}>
      {(value.format === 'jpg' || value.format === 'pdf') &&
        <Background
          src={url(value.url, {
            ...value,
            width: 50,
            height: ratio * 50,
            quality: 1,
          })}
        />}
      <Loader width="100%" height="auto" offset={100}>
        <Img
          {...rest}
          src={url(value.url, {
            ...value,
            width,
            height,
            dpr: retina ? 2 : undefined,
            mode,
          })}
          alt={value.caption}
          width="100%"
          height="auto"
        />
      </Loader>
    </Container>
  );
};
LazyImage.propTypes = {
  lazy: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
};
LazyImage.defaultProps = {
  lazy: true,
  width: undefined,
  height: undefined,
};
export default LazyImage;
