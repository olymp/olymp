import React, { Component, PropTypes } from 'react';
import { url } from './utils';

// const MAX_SIZE = 640; // Maximum size to 640px to prevent loading to big images/too much traffic

// https://github.com/cloudinary/cloudinary-react
// http://cloudinary.com/documentation/image_transformation_reference
class Img extends Component {
  onClick = e => {
    const { lightbox, onClick } = this.props;

    if (lightbox) {
      console.log('Beni, hier fehlt noch ne Lightbox! ;)')
    }

    if (onClick) {
      onClick(e);
    }
  }

  render() {
    const { retina, value, mode, children, maxSize, width, height, style, className, lightbox, ...rest } = this.props;

    return (
      <img
        {...rest}
        src={url(value.url, { width, height, dpr: retina ? 2: undefined, mode })}
        width={width}
        height={height}
        style={style}
        className={className}
        onClick={this.onClick}
      />
    );
  }
}
/*const Img = ({ src, children, maxSize, style, className, ...rest }) => (
  <Image
    cloudName={src.url.split('http://res.cloudinary.com/')[1].split('/')[0]}
    publicId={src.id}
    style={style}
    className={className}
    secure
  >
    <Transformation // Maximum size to 640px to prevent loading to big images/too much traffic
      crop="fit"
      width={maxSize || MAX_SIZE}
      height={maxSize || MAX_SIZE}
    />
    <Transformation
      crop="fill"
      dpr="auto"
      fetch_format="auto" // f=auto
      quality="auto" // q=auto
      flags="lossy" // fl=lossy
      {...rest}
    />
  </Image>
);*/
Img.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
export default Img;
