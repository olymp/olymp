import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
// import { Image } from 'olymp-fela';
import { Image, Transformation } from 'cloudinary-react';

const Container = createComponent(
  ({ ratio, width, minWidth, maxWidth, minHeight, maxHeight, rounded }) => ({
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
    '> img': {
      center: true,
      borderRadius: rounded && '50%',
    },
  }),
  ({ attributes, ...p }) => <div {...p} {...attributes} />,
  ['onClick', 'onMouseEnter', 'attributes', 'style', 'className', 'children'],
);

const CloudinaryImage = ({
  value,
  ratio,
  rounded,
  className,
  onClick,
  onMouseEnter,
  attributes,
  width,
  height,
  maxWidth,
  maxHeight,
  children,
  style,
}) => {
  if (!value || !value.url) {
    return <div />;
  }

  const imageWidth = (value.crop && value.crop[0]) || value.width;
  const imageHeight = (value.crop && value.crop[1]) || value.height;

  const parts = value.url.split('/');
  const cloud = parts[3];
  const publicId = parts
    .slice(7)
    .join('/')
    .split('.')[0];
  return (
    <Container
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      width={width}
      height={height}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      ratio={ratio || imageHeight / imageWidth}
      rounded={rounded}
      className={className}
      attributes={attributes}
      style={style}
    >
      {children}
      <Image
        secure
        cloudName={cloud}
        publicId={publicId}
        html_width="100%"
        html_height="auto"
        responsive={typeof window !== 'undefined'}
      >
        {typeof window === 'undefined' ? (
          <Transformation gravity="auto" crop="fill" quality="0" format="auto" width="4" />
        ) : (
          <Transformation
            gravity="auto"
            crop="fill"
            quality="auto"
            format="auto"
            dpr="auto"
            width="auto"
          />
        )}
      </Image>
    </Container>
  );
};

CloudinaryImage.propTypes = {
  value: PropTypes.shape({
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  ratio: PropTypes.number,
  options: PropTypes.shape({
    w: PropTypes.number,
    h: PropTypes.number,
    c: PropTypes.string,
    f: PropTypes.string,
    q: PropTypes.string,
    fl: PropTypes.string,
    dpr: PropTypes.number,
    // ...
  }),
  avatar: PropTypes.bool,
  alt: PropTypes.string,
};
CloudinaryImage.defaultProps = {
  value: undefined,
  ratio: undefined,
  attributes: {},
  avatar: false,
  alt: undefined,
};
export default CloudinaryImage;
