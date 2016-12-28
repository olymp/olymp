import React, { Component, PropTypes } from 'react';
import { useGenericBlock, GenericBlock, Image } from 'olymp/cms';

const actions = props => [{
  type: 'image-src',
  icon: 'picture-o',
  toggle: () => {
    const { setData } = props;
    setData({ showMedia: true });
  },
  active: false,
}];

@useGenericBlock({
  label: 'Bild',
  props: ['image', 'showMedia', 'full'],
  category: 'Media',
  editable: false,
  resize: {
    bootstrap: true,
    coverOnResize: true,
    resizeY: false,
  },
  align: true,
  actions,
})
export default class ImageBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    getData: PropTypes.func,
    setData: PropTypes.func,
  }

  render() {
    const { setData, getData, className, readOnly, attributes, isFocused, renderToolbar, toolbarStyle } = this.props;
    const { style, children, ...rest } = this.props;
    const value = getData('image', undefined);

    const styles = {
      backgroundColor: 'gray',
      position: 'relative',
      zIndex: 2,
      ...style,
      height: 'auto',
    };

    const innerStyle = {
      display: 'block',
    };

    // const width = !value ? styles.width : (value.crop ? value.crop[0] : value.width);
    // const height = !value ? styles.height : (value.crop ? value.crop[1] : value.height);

    return (
      <figure {...attributes}>
        <div style={styles} className={className} data-block-active={!readOnly}>
          {renderToolbar(toolbarStyle)}
          {children}
          <Image
            asImg
            onChange={image => setData({ showMedia: undefined, image })}
            onCancel={() => setData({ showMedia: false })}
            lightbox
            onImageClick={readOnly ? ({ showLightbox }) => showLightbox() : () => setData({ showMedia: true })}
            showMediathek={getData('showMedia')}
            width={styles.width}
            value={value}
            style={innerStyle}
          />
        </div>
      </figure>
    );
  }
}
