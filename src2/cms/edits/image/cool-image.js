import React, { Component } from 'react';
import { cloudinaryUrl, cn } from 'olymp';
import './style.less';

const defaultImage = {
  url: '/img/placeholder.jpg',
  width: 1680,
  height: 578,
};
export default class CoolImage extends Component {
  // Fill: true => width: 100%, height: auto
  // Mode: fill (width)
  // Mode:
  static defaultProps = {
    cloudinary: {},
  };

  renderImg = (props) => {
    let { readOnly, url, caption, ratio, width, height, color, className, children, onClick, ...rest } = props;

    const style = {};
    if (height) style.height = height;
    if (width) style.width = width;
    style.backgroundColor = color;

    if (!readOnly) {
      style.paddingTop = `${ratio * parseFloat(style.width)}%`;

      return (
        <div {...rest} onClick={onClick} style={style} className={cn(className, 'athena-img-container')}>
          <img className="athena-img" src={url} alt={caption} />
          {children}
        </div>
      );
    }

    return (
      <img {...rest} style={style} className="athena-img" src={url} alt={caption} />
    );
  }

  renderContainer = (props) => {
    const { url, caption, ratio, width, height, className, children, onClick, style, ...rest } = props;

    const containerStyle = { ...style };
    containerStyle.backgroundImage = `url(${url})`;
    containerStyle.backgroundSize = 'cover';
    containerStyle.backgroundPosition = 'center center';
    if (height) containerStyle.height = height;
    if (width) containerStyle.width = width;
    if (ratio && !height) containerStyle.paddingTop = `${ratio * parseFloat(containerStyle.width)}%`;

    return (
      <div {...rest} onClick={onClick} className={cn(className, 'athena-background-img')} style={containerStyle}>
        {children}
      </div>
    );
  }

  render() {
    let { container, value, cloudinary, noPreview, ...rest } = this.props;

    if (!value) {
      value = defaultImage;
    } else if (typeof value === 'string') {
      value = {
        url: value,
      };
    }

    const url = (!noPreview && value.preview && value.preview.url) ? value.preview.url : value.url;
    const crop = (!noPreview && value.preview && value.preview.crop) ? value.preview.crop : value.crop;
    const options = { ...value, ...crop, ...cloudinary };
    const ratio = (options.height && options.width) ? options.height / options.width : 0;

    const props = {
      caption: value ? value.caption : '',
      url: cloudinaryUrl(url, options, crop),
      color: options.color || (options.colors && options.colors[0]) || 'whitesmoke',
      ratio,
      ...rest,
    };

    if (container) {
      return this.renderContainer(props);
    } return this.renderImg(props);
  }
}
