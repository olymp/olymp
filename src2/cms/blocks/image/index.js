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
    coverOnResize: true,
    stepX: '10%',
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
    const { setData, getData, className, readOnly } = this.props;
    const { style, children, ...rest } = this.props;
    const value = getData('image', undefined);

    const styles = {
      backgroundColor: 'gray',
      position: 'relative',
      zIndex: 2,
      ...style,
    };

    const innerStyle = {
      display: 'block',
    };

    const width = !value ? styles.width : (value.crop ? value.crop[0] : value.width);
    const height = !value ? styles.height : (value.crop ? value.crop[1] : value.height);

    return (
      <GenericBlock {...rest} style={{ ...styles, height: 'auto' }}>
        <figure className={className} style={{ margin: 0 }}>
          <Image
            onChange={image => setData({ showMedia: undefined, image })}
            onCancel={() => setData({ showMedia: false })}
            lightbox
            onImageClick={readOnly ? ({ showLightbox }) => showLightbox() : () => setData({ showMedia: true })}
            showMediathek={getData('showMedia')}
            width={styles.width}
            height={value ? (parseInt(styles.width, 10) / width) * height : height}
            value={value}
            style={innerStyle}
          />
        </figure>

        {children}
      </GenericBlock>
    );
  }
}
