import React, { Component, PropTypes } from 'react';
import { Modal, Lightbox, cloudinaryUrl } from '@olymp/adonis';

const defaultImage = { url: 'https://fakeimg.pl/920x300/', width: 920, height: 300 };
export default class ImageComponent extends Component {
  state = { show: false };
  static defaultProps = {
    value: defaultImage,
    round: false,
    readOnly: false,
    lightbox: false,
    fadeIn: true,
  };

  constructor(props) {
    super();

    this.state = {
      lightboxVisible: false,
      showImage: !props.fadeIn,
    };
  }

  componentDidMount() {
    this.setState({
      // show: true,
    });
  }

  changeImageFromModal = v => {
    const { updateValue } = this.props;
    updateValue(v);
    this.setState({ modalVisible: false });
  };

  showLightbox = () => {
    if (this.props.lightbox) {
      this.setState({ lightboxVisible: true });
    }
  };

  hideLightbox = () => {
    this.setState({ lightboxVisible: false });
  };

  render() {
    const { lightboxVisible, show } = this.state;
    const { value, updateValue, readOnly, round, caption, cleanly, className, style, lightbox, getImageSize, children, id, ...rest } = this.props;
    const dyn = getImageSize ? getImageSize(value) : {};
    const crop = value && value.crop && Array.isArray(value.crop) ? { width: value.crop[0], height: value.crop[1], cropX: value.crop[2], cropY: value.crop[3] } : {};
    const newValue = { ...value, ...rest, ...crop, ...dyn };
    const ratio = newValue.height / newValue.width;

    if (!newValue.url) return null;

    const url = cloudinaryUrl(newValue.url, newValue);
    const placeholder = cloudinaryUrl(value.url, { maxWidth: 16, maxHeight: 16, quality: 1 });

    const containerStyle = {
      width: newValue.width || '100%',
      height: newValue.height || 'auto',
      position: 'relative',
      zIndex: 1,
      ...style,
    };
    const ratioBox = {
      display: 'block',
      width: '100%',
      paddingTop: (ratio * 100) + '%',
    };
    const imageBox = {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      transition: 'opacity .5s ease-out',
      right: 0,
      cursor: !lightbox ? 'auto' : 'pointer',
    };
    const overflowBox = {
      position: 'absolute',
      left: '-15px',
      right: '-15px',
      top: '-15px',
      bottom: '-15px',
    };
    const placeholderBox = {
      ...imageBox,
      ...overflowBox,
      backgroundRepeat: 'no-repeat',
      backgroundColor: value && value.colors && value.colors.length > 0 ? value.colors[0] : undefined,
      backgroundSize: 'cover',
      backgroundImage: `url('${placeholder}')`,
      WebkitFilter: 'blur(15px)',
      filter: 'blur(5px)',
    };

    if (cleanly) {
      return (
        <img src={url} className={className} style={style} width={containerStyle.width} height={containerStyle.height} />
      );
    }

    const cornerButton = !readOnly ? (
      <a className="ui yellow right corner label" href="javascript:;" onClick={this.showModal}>
        <i className="icon picture" style={{ pointerEvents: 'none' }} />
      </a>
    ) : null;

    const lightboxComponent = lightbox ? (
      <Lightbox visible={lightboxVisible} src={url} caption={caption} images={[{ src: url }]} close={this.hideLightbox} />
    ) : null;

    const imgComp = (
      <img src={url} style={{ ...imageBox, opacity: show ? 1 : 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        className={(round) ? 'ui circular image' : ''}
        width="100%" height="auto" onClick={this.showLightbox}
      />
    );

    return (
      <div id={id} style={containerStyle} className={className}>
        <div style={{ ...overflowBox }} />

        <div style={{ overflow: 'hidden', position: 'relative', width: containerStyle.width, height: containerStyle.height }}>
          <div style={ratioBox}></div>
          {cornerButton}
          {lightboxComponent}
          {children}
          {lightbox && readOnly && newValue.mime == 'application/pdf' ? (
            <span className="ui right corner blue label">
              <i className="file pdf outline icon"></i>
            </span>) : null}
          <div style={placeholderBox} />
          {lightbox && newValue.mime == 'application/pdf' ? (
            <a href={newValue.url.replace('.jpg', '.pdf')} target="_blank">{imgComp}</a>
          ) : imgComp}
        </div>
      </div>
    );
  }
}
// format={size.width/size.height}
