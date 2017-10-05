import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const containerStyle = ({ ratio, width, minWidth, maxWidth, minHeight, maxHeight, rounded }) => ({
  position: 'relative',
  overflow: 'hidden',
  width,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  borderRadius: rounded && '50%',
  onBefore: {
    display: 'block',
    content: '""',
    width: '100%',
    height: 0,
    paddingTop: `${ratio * 100}%`,
  },
  '> *': {
    center: true,
    borderRadius: rounded && '50%',
  },
});

const Container = createComponent(
  containerStyle,
  'div',
  ({
    ratio,
    rounded,
    width,
    maxResolution,
    srcRatio,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    ...p
  }) => Object.keys(p),
);

class ImageContainer extends Component {
  static defaultProps = { attributes: {} };

  render() {
    const {
      className,
      children,
      width,
      ratio,
      rounded,
      lazy,
      attributes,
      ...containerProps
    } = this.props;
    return (
      <Container
        {...containerProps}
        {...attributes}
        className={className}
        width={width}
        ratio={ratio}
        rounded={rounded}
      >
        {children}
      </Container>
    );
  }
}
ImageContainer.displayName = 'ImageContainer';
ImageContainer.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  ratio: PropTypes.number.isRequired,
  lazy: PropTypes.bool,
  rounded: PropTypes.bool,
};
ImageContainer.defaultProps = {
  lazy: true,
  rounded: false,
};
export default ImageContainer;
