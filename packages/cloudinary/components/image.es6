import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
// import { Image } from 'olymp-fela';
import { Image, Transformation } from 'cloudinary-react';

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
  '> img': {
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

const CloudinaryImage = ({
  options,
  value,
  ratio,
  avatar,
  alt,
  maxResolution,
  styles,
  rounded,
  className,
  onClick,
  onMouseEnter,
  ...rest
}) => {
  if (!value || !value.url) {
    return <div />;
  }

  const width = (value.crop && value.crop[0]) || value.width;
  const height = (value.crop && value.crop[1]) || value.height;

  const parts = value.url.split('/');
  const cloud = parts[3];
  const publicId = parts
    .slice(7)
    .join('/')
    .split('.')[0];
  ratio = ratio || height / width;
  return (
    <Container
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      width={rest.width}
      height={rest.height}
      ratio={ratio}
      rounded={rounded}
      className={className}
    >
      <Image
        secure
        cloudName={cloud}
        publicId={publicId}
        html_width="100%"
        html_height="auto"
        className={options.className}
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
        {/* <Transformation gravity="auto" crop="fill" quality="0" />
      <Transformation dpr="auto" />
  <Transformation width="auto" crop="scale" /> */}
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
  options: {},
  avatar: false,
  alt: undefined,
};
export default CloudinaryImage;
