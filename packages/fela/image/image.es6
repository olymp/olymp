import React from 'react';
import PropTypes from 'prop-types';
import { compose, withPropsOnChange } from 'recompose';
import { withAmp } from 'olymp-utils';
import Container from './container';
import Placeholder from './placeholder';
import Img from './img';
import Amp from './amp';

const initVals = ({ width, height, maxResolution, ratio }) => {
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

const limitWidth = ({
  width,
  ratio,
  isPercentage,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  maxResolution,
}) => {
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

const getMode = (props) => {
  const { mode, ratio, srcRatio } = props;
  const w = limitWidth(props);

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
        h: Math.round(w * (srcRatio || ratio)),
      };

    default:
      return defaultResult;
  }
};

const enhance = compose(
  withAmp,
  withPropsOnChange(['width', 'height', 'maxResolution', 'ratio'], props => initVals(props)),
  withPropsOnChange(['mode', 'ratio', 'srcRatio'], props => getMode(props)),
  withPropsOnChange(['src', 'w', 'h'], ({ src, w, h }) => ({
    url: typeof src === 'function' ? src(w, h) : src,
  })),
);

const Image = enhance((props) => {
  const {
    className,
    lazy,
    mode,
    amp,
    src,
    alt,
    onClick,
    circle,
    children,
    attributes,
    width,
    ratio,
    isPercentage,
    layout,
    w,
    h,
    url,
    ...containerProps
  } = props;
  const image = url ? (
    <Img
      src={url}
      alt={alt}
      width={w >= h ? '100%' : 'auto'}
      height={w < h ? '100%' : 'auto'}
      onClick={onClick}
      circle={circle}
    />
  ) : (
    <Placeholder height={'100%'} width={'100%'} onClick={onClick} circle={circle} />
  );

  return (
    <Container
      {...containerProps}
      attributes={attributes}
      className={className}
      width={isPercentage ? props.width : w}
      ratio={ratio}
    >
      {amp && image ? (
        <Amp layout={layout} src={url} alt={alt} width={w} height={h}>
          {image}
        </Amp>
      ) : (
        image
      )}
      {children}
    </Container>
  );
});
Image.displayName = 'Image';
Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  ratio: PropTypes.number.isRequired,
  srcRatio: PropTypes.number.isRequired,
  mode: PropTypes.oneOf(['filled', 'padded']).isRequired,
  circle: PropTypes.bool,

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
  ratio: 0.75,
  srcRatio: 0.75,
  mode: 'filled',
  circle: false,

  width: undefined,
  height: undefined,

  minWidth: undefined,
  minHeight: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
  maxResolution: 111000, // 333*333px

  lazy: true,
  alt: '',
  onClick: () => {},
};
export default Image;
