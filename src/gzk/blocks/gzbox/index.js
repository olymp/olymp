import React, { Component } from 'react';
import { useBlockBase, useGenericBlock, Block } from 'olymp/slate';
import { Image, MediaModal } from 'olymp/cms';
import { cloudinaryUrl } from 'olymp';
import './style.less';

const defaultImage = 'http://www.gz-kelkheim.de/dl/content_homes.image/thumb/ZkzuZVqlYe.jpg';

@useGenericBlock({
  category: 'Titel',
  label: 'Titelbild',
  editable: true,
  props: ['showMedia', 'image', 'color'],
  resize: {
    coverOnResize: true,
  },
  defaultNodes: Block.createList([{ type: 'GzBoxContent' }]),
  actions: props => [{
    type: 'image.src',
    icon: 'picture-o',
    toggle: () => {
      const { setData } = props;
      setData({ showMedia: true });
    },
    active: false,
  }, {
    type: 'image.color',
    icon: 'eyedropper',
    toggle: () => {
      const { setData, color } = props;
      const newColor = prompt('Farbe', color);
      setData({ color: newColor ? `#${newColor.replace('#', '')}` : undefined });
    },
    active: false,
  }],
})
export default class GzBox extends Component {
  static defaultProps = {
    image: defaultImage,
  }
  render() {
    const { children, attributes, showMedia, image, readOnly, setData, style, factor, renderToolbar, color } = this.props;
    const height = style.height ? style.height.replace('-', '') : null;
    return (
      <div className="gz-image-box" data-block-active={!readOnly}>
        {renderToolbar()}
        {showMedia && (
          <MediaModal
            id={!!image && image.id}
            onChange={image => setData({ showMedia: undefined, image })}
            onClose={() => setData({ showMedia: undefined })}
          />
        )}
        <div style={{ height: '400px', overflow: 'hidden', position: 'relative' }}>
          <img style={{position: 'absolute', top: '50%', left: '50%', height: 'auto', width: '100%', zIndex: 5, transform: 'translate(-50%, -50%)' }} src={cloudinaryUrl(image.url, image, image.crop)} />
        </div>
        <div className="gz-image-content" style={{ backgroundColor: color }}>
          {children}
        </div>
      </div>
    )
    return (
      <Image
        {...attributes}
        lightbox
        onImageClick={readOnly ? ({ showLightbox }) => showLightbox() : null}
        showMediathek={showMedia}
        onChange={image => setData({ showMedia: undefined, image })}
        container="div"
        value={image}
        height={height}
        className="gz-image-box"
        data-block-active={!readOnly}
      >
        {renderToolbar()}
        <div className="gz-image-content" style={{ marginBottomn: `${factor * -0.05}px`, backgroundColor: color }}>
          {children}
        </div>
      </Image>
    );
  }
}

@useBlockBase({
  isVoid: false,
  sidebar: false,
})
export const GzBoxContent = class GzBoxContent extends Component {
  render() {
    const { attributes, children } = this.props;
    return (
      <span {...attributes}>
        {children}
      </span>
    );
  }
};