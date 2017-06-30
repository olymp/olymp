import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { createComponent } from 'react-fela';
import { ContentLoaderStyles } from '../loader';

const containerStyle = ({
  ratio,
  width,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  rounded,
}) => ({
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
    paddingTop: `${ratio * 100}%`,
  },
  '> img': {
    center: true,
  },
});

const Container = createComponent(
  containerStyle,
  'div',
  ({ ratio, rounded, ...p }) => Object.keys(p)
);

const LazyContainer = createComponent(
  ({ visible, ...rest }) => ({
    ...containerStyle(rest),
    ...(!visible ? ContentLoaderStyles : {}),
  }),
  ({ onVisible, onClick, children, ...p }) =>
    (<div onClick={onClick}>
      <LazyLoad {...p} onContentVisible={onVisible}>
        {children}
      </LazyLoad>
    </div>),
  ({ ratio, rounded, visible, ...p }) => Object.keys(p)
);

class ImageContainer extends Component {
  state = { visible: false };

  render() {
    const {
      className,
      children,
      width,
      ratio,
      rounded,
      lazy,
      ...containerProps
    } = this.props;
    const { visible } = this.state;

    if (!lazy) {
      return (
        <Container
          {...containerProps}
          className={className}
          width={width}
          ratio={ratio}
          rounded={rounded}
        >
          {children}
        </Container>
      );
    }

    return (
      <LazyContainer
        {...containerProps}
        className={className}
        width={width}
        ratio={ratio}
        rounded={rounded}
        visible={visible}
        onVisible={() => this.setState({ visible: true })}
      >
        {children}
      </LazyContainer>
    );
  }
}
ImageContainer.displayName = 'Image.Container';
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
