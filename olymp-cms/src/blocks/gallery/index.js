import React, { Component, PropTypes } from 'react';
import { withAuth } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import Image from '../../edits/image';

@useGenericBlock({
  label: 'Galerie',
  props: ['image', 'showMedia'],
  category: 'Media',
  editable: false,
  actions: props => [{
    type: 'image-src',
    icon: 'picture-o',
    toggle: () => {
      const { setData } = props;
      setData({ showMedia: true });
    },
    active: false,
  }],
})
@withAuth
export default class ImagesBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    getData: PropTypes.func,
    setData: PropTypes.func,
  }

  render() {
    const { setData, getData, className, readOnly, auth } = this.props;
    const { style, children, ...rest } = this.props;
    const images = getData('images', []);

    const styles = {
      position: 'relative',
      zIndex: 2,
      ...style,
    };

    const innerStyle = {
      display: 'block',
    };

    const imageBlock = (image, i) => (
      <div style={{ ...styles, height: 'auto', width: '20%', float: 'left', padding: '.5rem' }} key={i}>
        <figure className={className} style={{ margin: 0 }}>
          <Image
            onChange={(img) => {
              const newImages = [...images];
              newImages[i] = img;

              setData({ showMedia: undefined, images: newImages });
            }}
            onCancel={() => setData({ showMedia: false })}
            lightbox
            onImageClick={readOnly ? ({ showLightbox }) => showLightbox() : () => setData({ showMedia: true })}
            showMediathek={getData('showMedia')}
            width="100%"
            value={image}
            style={innerStyle}
          />
          {auth && auth.user && i !== images.length ? (
            <figcaption>
              <a href="javascript:;"  onClick={() => setData({ images: images.splice(i, 1) })}>
                Entfernen
              </a>
            </figcaption>
          ) : null}
        </figure>
      </div>
    );

    return (
      <GenericBlock {...rest}>
        {(images || []).map((image, i) => imageBlock(image, i))}
        {auth && auth.user ? imageBlock(undefined, images.length) : null}
        <div style={{ clear: 'both' }} />

        {children}
      </GenericBlock>
    );
  }
}
