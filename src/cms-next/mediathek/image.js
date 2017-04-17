import React, { PropTypes } from 'react';
import { Image, Transformation } from 'cloudinary-react';

const MAX_SIZE = 640; // Maximum size to 640px to prevent loading to big images/too much traffic

// https://github.com/cloudinary/cloudinary-react
// http://cloudinary.com/documentation/image_transformation_reference
const Img = ({ src, children, maxSize, style, className, ...rest }) => (
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
);
Img.propTypes = {
  width: PropTypes.numbers,
  height: PropTypes.numbers,
};
export default Img;
