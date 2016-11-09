import React, { Component, PropTypes } from 'react';
import cloudinaryUrl from '@olymp/adonis/src/cloudinary-url';
import cn from 'classnames';
import './style.less';

export default class CoolImage extends Component {
  // Fill: true => width: 100%, height: auto
  // Mode: fill (width)
  // Mode: 
  static defaultProps = {
    cloudinary: {},
  };

  renderImg = () => {
    const { value, width, height, cloudinary, className, children, onClick, ...rest } = this.props;

    if (!value) {
      return <span>No image</span>;
    }

    const crop = value.crop && Array.isArray(value.crop) ? { width: value.crop[0], height: value.crop[1], cropX: value.crop[2], cropY: value.crop[3] } : {};
    const options = { ...crop, ...cloudinary };
    const url = cloudinaryUrl(value.url, options);
    const style = {};
    if (height) style.height = height;
    if (width) style.width = width;

    if (width === '100%') {
      return (
        <div {...rest} onClick={onClick} style={style} className={cn(className, 'athena-img-container-simple')}>
          <img className="athena-img" style={{ width }} src={url} />
          {children}
        </div>
      );
    } else if (!options.width || !options.height) {
      return (
        <img {...rest} style={style} className="athena-img" src={url} onClick={onClick} />
      );
    }

    const ratio = options.height / options.width;

    style.paddingTop = `${ratio * 100}%`;
    style.backgroundColor = options.color || (options.colors && options.colors[0]) || 'whitesmoke';

    return (
      <div {...rest} onClick={onClick} className={cn(className, 'athena-img-container')} style={style}>
        <img src={url} className="athena-img" />
        {children}
      </div>
    );
  }

  renderContainer = () => {
    let { value, width, height, cloudinary, className, children, onClick, container, style, ...rest } = this.props;

    if (!value) {
      return null;
    } else if (typeof value === 'string') {
      value = {
        url: value,
      };
    }

    const crop = value.crop && Array.isArray(value.crop) ? { width: value.crop[0], height: value.crop[1], cropX: value.crop[2], cropY: value.crop[3] } : {};
    const options = { ...value, ...crop, ...cloudinary };
    const url = cloudinaryUrl(value.url, options);
    style = { ...style };
    style.backgroundImage = `url(${url})`;
    if (height) style.height = height;
    if (width) style.width = width;
    if (options.width && options.height && !height) {
      const ratio = options.height / options.width;
      style.paddingTop = `${ratio * 100}%`;
    }

    return (
      <div {...rest} onClick={onClick} className={cn(className, 'athena-background-img')} style={style}>
        {children}
      </div>
    );
  }

  render() {
    if (this.props.container) {
      return this.renderContainer(this.props.container);
    } return this.renderImg();
  }
}
