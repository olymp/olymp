import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { Image } from 'cloudinary-react';
import Placeholder from 'olymp-fela/image/placeholder';

const Container = createComponent(
  ({
    ratio, height, width, minWidth, maxWidth, minHeight, maxHeight, circle, fade
  }) => ({
    position: 'relative',
    overflow: 'hidden',
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    onBefore: {
      display: 'block',
      content: '""',
      width: '100%',
      height: 0,
      paddingTop: `${ratio * 100}%`,
    },
    '> img': {
      borderRadius: circle && '50%',
      zIndex: 0,
      center: true,
    },
    '> img.front': {
      zIndex: 1,
      animationDuration: '1s',
      animationIterationCount: 1,
      animationTimingFunction: 'ease-out',
      animationName: fade
        ? {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
        : null,
    },
  }),
  ({ attributes, ...p }) => <div {...p} {...attributes} />,
  ['onClick', 'onMouseEnter', 'attributes', 'style', 'className', 'children'],
);

const CloudinaryImage = ({
  fade,
  value,
  mode,
  ratio,
  circle,
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
  const imageWidth = (value.crop && value.crop[0]) || value.width;
  const imageHeight = (value.crop && value.crop[1]) || value.height;

  const parts = value.url ? value.url.split('/') : null;
  const cloud = parts && parts[3];
  const publicId =
    parts &&
    parts
      .slice(7)
      .join('/')
      .split('.')[0];
  return (
    <Container
      fade={fade}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      width={width}
      height={height}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      ratio={ratio || imageHeight / imageWidth}
      circle={circle}
      className={className}
      attributes={attributes}
      style={style}
    >
      {children}
      {!value.url && <Placeholder height="100%" width="100%" circle={circle} />}
      {value.url && (
        <Image
          secure
          cloudName={cloud}
          publicId={publicId}
          html_width="100%"
          html_height="auto"
          responsive={false}
          transformation={{
            gravity: 'auto',
            crop: mode || 'fill',
            quality: 0,
            fetchFormat: 'auto',
            width: 4,
            aspectRatio: ratio || `${Math.floor(imageWidth)}:${Math.floor(imageHeight)}`,
          }}
        />
      )}
      {typeof window !== 'undefined' &&
        value.url && (
          <Image
            className="front"
            secure
            cloudName={cloud}
            publicId={publicId}
            html_width="100%"
            html_height="auto"
            responsive={typeof window !== 'undefined'}
            transformation={{
              gravity: 'auto',
              crop: mode || 'fill',
              quality: 'auto',
              fetchFormat: 'auto',
              dpr: 'auto',
              width: 'auto',
              aspectRatio: ratio || `${Math.floor(imageWidth)}:${Math.floor(imageHeight)}`,
            }}
          />
        )}
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
  fade: PropTypes.bool,
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
  fade: false,
  ratio: undefined,
  attributes: {},
  avatar: false,
  alt: undefined,
};
export default CloudinaryImage;
