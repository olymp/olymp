import React, { Component, PropTypes } from 'react';
import { Modal, Lightbox, cloudinaryUrl } from '@olymp/adonis';

const defaultImage = { url: 'https://fakeimg.pl/920x300/', width: 920, height: 300 };
export default class Image extends Component {
  state = { show: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true,
      });
    }, 3000);
  }

  renderRatioBox = (url, value, ratio) => {
    const { show } = this.state;
    const placeholder = cloudinaryUrl(value.url, { maxWidth: 16, maxHeight: 16, quality: 1 });
    const containerStyle = {
      width: value.width || '100%',
      paddingBottom: `${ratio * 100}%`,
      background: value && value.colors && value.colors.length > 0 ? value.colors[0] : undefined,
      height: 0,
      position: 'relative',
      overflow: 'hidden',
    };
    const ratioBox = {
      left: '-15px',
      right: '-15px',
      top: '-15px',
      bottom: '-15px',
      width: '100%',
      display: 'block',
      position: 'absolute',
      backgroundRepeat: 'no-repeat',
      backgroundColor: value && value.colors && value.colors.length > 0 ? value.colors[0] : undefined,
      backgroundSize: 'cover',
      backgroundImage: `url('${placeholder}')`,
      WebkitFilter: 'blur(15px)',
      filter: 'blur(5px)',
      opacity: show ? 0 : 1,
    };
    return (
      <div style={containerStyle}>
        <div style={ratioBox} />
        <img src={url} width="100%" height="auto" />
      </div>
    );
  }

  render() {
    const { value, updateValue, readOnly, round, caption, cleanly, className, style, lightbox, getImageSize, children, id, ...rest } = this.props;
    const dyn = getImageSize ? getImageSize(value) : {};
    const crop = value && value.crop && Array.isArray(value.crop) ? { width: value.crop[0], height: value.crop[1], cropX: value.crop[2], cropY: value.crop[3] } : {};
    const newValue = { ...value, ...rest, ...crop, ...dyn };
    const ratio = newValue.height / newValue.width;

    if (!newValue.url) return null;

    const url = cloudinaryUrl(newValue.url, newValue);

    if (ratio) {
      return this.renderRatioBox(url, newValue, ratio);
    }

    return (
      <img src={url} width="100%" height="auto" />
    );
  }
}
