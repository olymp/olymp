import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { compose, withPropsOnChange, withState, withProps, getContext } from 'recompose';
import Container from './container';
import Placeholder from './placeholder';
import Img from './img';
import Amp from './amp';

const initVals = ({ width, height, maxResolution, ratio }) => {
  let isPercentage = false;
  const originalWidth = width;
  const originalHeight = height;

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
    originalWidth,
    originalHeight,
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
  cWidth,
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

  // Container-size
  if (width > cWidth) {
    width = cWidth;
  }

  return Math.round(width);
};

const getMode = props => {
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
  getContext({
    amp: PropTypes.bool,
  }),
  withState('cWidth', 'setCWidth', undefined),
  withState('isLoaded', 'setIsLoaded', false),
  withPropsOnChange(['width', 'height', 'maxResolution', 'ratio'], props =>
    initVals(props),
  ),
  withPropsOnChange(['mode', 'ratio', 'srcRatio', 'cWidth'], props =>
    getMode(props),
  ),
  withProps(({ src, w, h }) => ({
    url: typeof src === 'function' ? src(w, h) : src,
    lowUrl: typeof src === 'function' ? src(10, 10) : src,
  })),
);

@enhance
class Image extends Component {
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    if (this.node) {
      this.onResize(this.node.getBoundingClientRect().width);
    }
  }

  onResize = width => {
    const { setCWidth } = this.props;
    setCWidth(width);
  };

  render() {
    const {
      className,
      lazy,
      mode,
      amp,
      src,
      srcSet,
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
      lowUrl,
      originalWidth,
      originalHeight,
      cWidth,
      setCWidth,
      isLoaded,
      setIsLoaded,
      ...containerProps
    } = this.props;

    if (!w) {
      return <div />;
    }

    const image = url ? (
      <Img
        src={url}
        srcSet={srcSet}
        alt={alt}
        width={w >= h ? '100%' : 'auto'}
        height={w < h ? '100%' : 'auto'}
        circle={circle}
        // onLoad={() => setIsLoaded(true)}
      />
    ) : (
      <Placeholder height="100%" width="100%" circle={circle} />
    );
    return (
      <Container
        {...containerProps}
        attributes={attributes}
        className={className}
        width={isPercentage ? originalWidth : w}
        ratio={ratio}
        onClick={onClick}
      >
        {!isLoaded &&
          null
          // <Placeholder height="100%" width="100%" circle={circle} />
        }
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
  }
}
Image.displayName = 'Image';
Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  ratio: PropTypes.number.isRequired,
  srcRatio: PropTypes.number.isRequired,
  mode: PropTypes.oneOf(['filled', 'padded']),
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
  src: undefined,
  // ratio: 0.75,
  // srcRatio: 0.75,
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
  onClick: undefined,
};
Image.Placeholder = Placeholder;
export default Image;
