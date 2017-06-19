import React, { Component } from 'react';
import { cloudinaryUrl, cn } from 'olymp';
import ImageGallery from 'react-image-gallery';
import './carousel.less';

export default class Carousel extends Component {
  renderLeftNav = (onClick, disabled) =>
    (<button
      className="image-gallery-left-nav"
      disabled={disabled}
      onClick={onClick}
    >
      <i className="fa fa-angle-left" />
    </button>);

  renderRightNav = (onClick, disabled) =>
    (<button
      className="image-gallery-right-nav"
      disabled={disabled}
      onClick={onClick}
    >
      <i className="fa fa-angle-right" />
    </button>);

  renderPlayPauseButton = (onClick, isPlaying) => null;

  renderFullscreenButton = (onClick, isFullscreen) =>
    (<button
      type="button"
      className={cn('image-gallery-play-button', isFullscreen && 'active')}
      onClick={onClick}
    >
      <i
        className="fa fa-expand"
        style={{ color: 'white', padding: '15px 20px' }}
      />
    </button>);

  getHeight = width => Math.floor(width / this.props.ratio);

  render() {
    const { items } = this.props;

    const images =
      items &&
      items.map(({ url, render, ...rest }) => ({
        original: cloudinaryUrl(url, {
          width: 800,
          height: this.getHeight(800),
          ...rest,
        }),
        srcSet: `
        ${cloudinaryUrl(url, {
          width: 400,
          height: this.getHeight(400),
          ...rest,
        })} 400w,
        ${cloudinaryUrl(url, {
          width: 800,
          height: this.getHeight(800),
          ...rest,
        })} 800w,
        ${cloudinaryUrl(url, {
          width: 1200,
          height: this.getHeight(1200),
          ...rest,
        })} 1200w,
        ${cloudinaryUrl(url, {
          width: 1600,
          height: this.getHeight(1600),
          ...rest,
        })} 1600w
      `,
        thumbnail: cloudinaryUrl(url, { width: 150, height: 150, ...rest }),
        renderItem: render,
      }));

    return (
      <ImageGallery
        renderFullscreenButton={this.renderFullscreenButton}
        renderPlayPauseButton={this.renderPlayPauseButton}
        renderRightNav={this.renderRightNav}
        renderLeftNav={this.renderLeftNav}
        autoPlay
        items={images || []}
        slideInterval={this.props.slideInterval || 7000}
        slideDuration={1000}
      />
    );
  }
}
