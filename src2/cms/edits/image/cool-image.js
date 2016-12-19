import React, { Component, PropTypes, Children } from 'react';
import { cloudinaryUrl, cn } from 'olymp';
import './style.less';

const getDim = (dim) => {
  if (dim) {
    if (typeof dim === 'number' || dim.indexOf('px') !== -1) {
      return 'px';
    } else if (dim.indexOf('%') !== -1) {
      return '%';
    }
  }

  return false;
};

export default class CoolImage extends Component {
  static defaultProps = {
    cloudinary: {},
  };
  static propTypes = {
    /* Value includes all data (including width, height, crop)
    from the image as it comes from the database */
    value: PropTypes.instanceOf(Object),

    /* Using cloudinary, you can override the width/height-data set in Value (only absolute!) */
    cloudinary: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      minWidth: PropTypes.number,
      minHeight: PropTypes.number,
      maxWidth: PropTypes.number,
      maxHeight: PropTypes.number,
    }),
    onClick: PropTypes.func,

    /* Width, height, ratio refer to the container of the image and are identical
    to the dimensions of the image (absolute or relative) */
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    ratio: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.instanceOf(Object),

    /* Others */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }

  render() {
    const { value, asImg, cloudinary, className, style = {}, children, onClick, width: containerWidth, height: containerHeight } = this.props;
    let { ratio } = this.props;

    if (!value) {
      return <div />;
    }

    let { url, width, height, crop, caption } = value;

    // wenn crop gesetzt, dann Ausschnitt als neues Bild festlegen
    if (crop) {
      width = crop[0];
      height = crop[1];
    }

    // style mit width- und height-props überschreiben
    if (containerWidth) style.width = containerWidth;
    if (containerHeight) style.height = containerHeight;

    // Ratio ermitteln
    if (!ratio) {
      if (getDim(style.width) && getDim(style.width) === getDim(style.height)) {
        // wenn style.width/height und beide vom selben gültigen Typen sind
        ratio = parseInt(style.height, 10) / parseInt(style.width, 10);
      } else {
        ratio = height / width;
      }
    }

    const containerStyles = {
      width: '100%',
      height: 'auto',
      ...style,
    };

    // Wenn Containerbreite oder -höhe fix, dann soll Bild auch nur maximal so groß sein
    if (getDim(style.width) === 'px' && parseInt(style.width, 10) < width) {
      width = parseInt(style.width, 10);
      height = Math.round(width * ratio);
    }
    if (getDim(style.height) === 'px' && parseInt(style.height, 10) < height) {
      height = parseInt(style.height, 10);
      width = Math.round(height / ratio);
    }

    url = cloudinaryUrl(
      url,
      { url, width, height, maxWidth: style.maxWidth, maxHeight: style.maxHeight, ...cloudinary },
      crop
    );


    /*es gibt halt noch das Problem wenn das Bild was ausgegeben werden soll z.B. 2:3 hat, der ratio aber auf 1:1 gesetzt wurde
    bei einem Container schneidet er einfach das „Überflüssige“ ab, aber bei einem <img> müssen wir das mittels neuem crop machen 😟

    if (ratio && ratio !== options.height / options.width) {
      if (styles.width.indexOf('%') >= 0) {
        const size = parseInt(options.width, 10);
        crop = [size, size * ratio, 0, 0];
      } else {
        const size = parseInt(styles.width, 10);
        crop = [size, size * ratio, 0, 0];
      }
    }*/
    if (asImg && !Children.toArray(children).filter(x => x).length) {
      return (
        <img
          className={cn(className, 'athena-img')}
          onClick={onClick}
          src={url}
          alt={caption}
          style={containerStyles}
        />
      );
    }

    // Container-Styles Höhe und Background
    if (!getDim(containerStyles.height)) {
      if (getDim(containerStyles.width) === 'px') {
        containerStyles.height = parseInt(containerStyles.width, 10) * ratio;
      } else if (getDim(containerStyles.width) === '%') {
        containerStyles.paddingTop = `${(parseInt(containerStyles.width, 10) * ratio)}%`;
      }
    } else if (!getDim(containerStyles.width)) {
      if (getDim(containerStyles.height) === 'px') {
        containerStyles.width = parseInt(containerStyles.height, 10) / ratio;
      } else if (getDim(containerStyles.height) === '%') {
        containerStyles.paddingTop = `${(parseInt(containerStyles.height, 10) / ratio)}%`;
      }
    }
    containerStyles.backgroundImage = `url(${url})`;

    return (
      <div onClick={onClick} style={containerStyles} className={cn(className, 'athena-img-container')}>
        {children}
      </div>
    );
  }
}
