import React, { Component, PropTypes } from 'react';
import { withAuth } from 'olymp';
import { DataLoader } from 'olymp/cms-core';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import Image from '../../edits/image';

@useGenericBlock({
  label: 'Galerie',
  props: ['image', 'showMedia', 'withCaption', 'withSource'],
  category: 'Media',
  editable: false,
  actions: props => [
    {
      type: 'image-src',
      icon: 'picture-o',
      toggle: () => {
        const { setData } = props;
        setData({ showMedia: true });
      },
      active: false,
      tooltip: 'Bilder für die Galerie auswählen',
    }, {
      icon: 'quote-right',
      type: 'withCaption',
      toggle: () => {
        const { setData, getData } = props;
        setData({ withCaption: !getData('withCaption') });
      },
      tooltip: 'Bildunterschriften anzeigen',
    }, {
      icon: 'code',
      type: 'withSource',
      toggle: () => {
        const { setData, getData } = props;
        setData({ withSource: !getData('withSource') });
      },
      tooltip: 'Quellen anzeigen',
    },
  ],
})
@withAuth
export default class ImagesBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    getData: PropTypes.func,
    setData: PropTypes.func,
  }

  isURL = (str) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    return pattern.test(str);
  }

  render() {
    const { setData, getData, className, readOnly, auth } = this.props;
    const { style, children, ...rest } = this.props;
    let images = getData('images', []);
    const showMedia = getData('showMedia');
    const withCaption = getData('withCaption');
    const withSource = getData('withSource');

    if (auth && auth.user) {
      images = images.filter(i => i);
      images.push(undefined);
    }

    const styles = {
      position: 'relative',
      zIndex: 2,
      ...style,
    };

    const innerStyle = {
      display: 'block',
    };

    const imageBlock = (image, i) => (
      <div style={{ ...styles, height: 'auto', width: '20%', float: 'left', padding: '.5rem', clear: (i + 1) % 5 === 1 ? 'both' : 'none' }} key={i}>
        <figure className={className} style={{ margin: 0 }}>
          <Image
            onChange={images => setData({ showMedia: undefined, images })}
            multi
            onCancel={() => setData({ showMedia: false })}
            lightbox={!!image}
            onImageClick={!!image ? ({ showLightbox }) => showLightbox() : () => setData({ showMedia: true })}
            showMediathek={!image && showMedia}
            width="100%"
            value={image}
            style={innerStyle}
          />
          {auth && auth.user && image && i !== images.length ? (
            <figcaption>
              <a href="javascript:;" onClick={() => setData({ images: images.splice(i, 1) })}>
                Entfernen
              </a>
            </figcaption>
          ) : null}
          {image && withSource && image.source ? (
            <figcaption style={{ lineHeight: 1.25 }}>
              {withCaption && image.caption ? image.caption : null}
            </figcaption>
          ) : null}
          {image && withSource && image.source ? (
            <figcaption style={{ fontSize: 'small', lineHeight: 1.25, whiteSpace: 'nowrap', /* overflow: 'hidden', textOverflow: 'ellipsis' */ }}>
              {withSource && image.source ? (this.isURL(image.source) ? <a href={image.source}>{image.source}</a> : image.source) : null}
            </figcaption>
          ) : null}
        </figure>
      </div>
    );

    return (
      <GenericBlock {...rest}>
        <DataLoader className={className} style={style} isEmpty={images} placeholder="Keine Bilder vorhanden">
          {(images || []).map((image, i) => imageBlock(image, i))}

          <div style={{ clear: 'both' }} />
        </DataLoader>

        {children}
      </GenericBlock>
    );
  }
}
