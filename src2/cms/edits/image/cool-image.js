import React, { Component } from 'react';
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

    const { url, crop, caption } = value;
    const styles = {
      width,
      height,
      ...style,
    };
    const options = { ...value, ...crop, ...cloudinary };

    let containerCrop;
    if (ratio) {
      if (styles.width === parseInt(styles.width, 10)) {
        containerCrop = [styles.width, styles.width * ratio, 0, 0];
      } else {
        const size = (parseInt(styles.width, 10) / 100);
        containerCrop = [size.toFixed(2), (size * ratio).toFixed(2), 0, 0];
      }
    }

    const src = cloudinaryUrl(url, options, containerCrop || crop);

    if (!children) {
      return (
        <img
          className={cn(className, 'athena-img')}
          onClick={onClick}
          src={src}
          alt={caption}
          style={styles}
        />
      );
    }

    styles.backgroundImage = `url(${src})`;
    if (styles.width === parseInt(styles.width, 10)) {
      styles.height = styles.width * ratio;
    } else {
      styles.paddingTop = `${(parseInt(styles.width, 10) * ratio)}%`;
    }

    return (
      <div onClick={onClick} style={styles} className={cn(className, 'athena-img-container')}>
        {children}
      </div>
    );
  }
}
