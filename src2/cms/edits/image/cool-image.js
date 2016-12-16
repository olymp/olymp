import React, { Component, Children } from 'react';
import { cloudinaryUrl, cn } from 'olymp';
import './style.less';

export default class CoolImage extends Component {
  static defaultProps = {
    cloudinary: {},
  };
  static propTypes = {
    /* Value includes all data (including width, height, crop)
    from the image as it comes from the database */
    value: React.PropTypes.instanceOf(Object),

    /* Using cloudinary, you can override the width/height-data set in Value (only absolute!) */
    cloudinary: React.PropTypes.shape({
      width: React.PropTypes.number,
      height: React.PropTypes.number,
      minWidth: React.PropTypes.number,
      minHeight: React.PropTypes.number,
      maxWidth: React.PropTypes.number,
      maxHeight: React.PropTypes.number,
    }),
    onClick: React.PropTypes.func,

    /* Width, height, ratio refer to the container of the image and are identical
    to the dimensions of the image (absolute or relative) */
    width: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    height: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    ratio: React.PropTypes.number,
    className: React.PropTypes.string,
    style: React.PropTypes.instanceOf(Object),

    /* Others */
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
  }

  render() {
    const { value, cloudinary, width = '100%', height = 'auto', ratio, className, style = {}, children, onClick } = this.props;

    if (!value) {
      return <div />;
    }

    let { url, crop, caption } = value;
    const styles = {
      width,
      height,
      ...style,
    };
    const options = { ...value, ...crop, ...cloudinary };

    // Max-Width/Height
    /* if (options.maxWidth && options.maxWidth < options.width) {
      options.height = (options.height / options.width) * options.maxWidth;
      options.width = options.maxWidth;
    }
    if (options.maxHeight && options.maxHeight < options.height) {
      options.width = (options.width / options.height) * options.maxHeight;
      options.height = options.maxHeight;
    }

    // Min-Width/Height
    if (options.minWidth && options.minWidth > options.width) {
      options.height = (options.height / options.width) * options.minWidth;
      options.width = options.minWidth;
    }
    if (options.minHeight && options.minHeight > options.height) {
      options.width = (options.width / options.height) * options.minHeight;
      options.height = options.minHeight;
    }*/

    // if (options.url === 'http://res.cloudinary.com/dhsf4vjjc/image/upload/v1467133060/ekgd/ueypsnpljftyetr3j0jv.jpg') console.log(value, cloudinary);

    if (ratio && ratio !== options.height / options.width) {
      if (styles.width.indexOf('%') >= 0) {
        const size = parseInt(options.width, 10);
        crop = [size, size * ratio, 0, 0];
      } else {
        const size = parseInt(styles.width, 10);
        crop = [size, size * ratio, 0, 0];
      }
    }

    url = cloudinaryUrl(url, options, crop);

    if (!Children.toArray(children).filter(x => x).length) {
      return (
        <img
          className={cn(className, 'athena-img')}
          onClick={onClick}
          src={url}
          alt={caption}
          style={styles}
        />
      );
    }
    styles.backgroundImage = `url(${url})`;

    // width && ratio
    if (ratio) {
      if (styles.width.indexOf('%') >= 0) {
        styles.paddingTop = `${(parseInt(styles.width, 10) * ratio)}%`;
      } else {
        styles.height = parseInt(styles.width, 10) * ratio;
      }

      // height && ratio
      if (styles.height.indexOf('%') >= 0) {
        styles.width = `${(parseInt(styles.height, 10) / ratio)}%`;
      } else {
        styles.width = styles.height / ratio;
      }
    }

    return (
      <div onClick={onClick} style={styles} className={cn(className, 'athena-img-container')}>
        {children}
      </div>
    );
  }
}
