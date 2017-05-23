import React, { Component, PropTypes } from 'react';
import { withAuth } from 'olymp';
import { DataLoader } from 'olymp/cms-core';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import Image from '../../edits/image';

@useGenericBlock({
  label: 'Galerie',
  props: ['image', 'showMedia', 'withCaption', 'withSource', 'columns'],
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
      icon: 'plus',
      type: 'addColumn',
      toggle: () => {
        const { setData, getData } = props;
        setData({ columns: getData('columns', 4) + 1 });
      },
      tooltip: 'Spalte hinzufügen',
    }, {
      icon: 'minus',
      type: 'substractColumn',
      toggle: () => {
        const { setData, getData } = props;
        const columns = getData('columns', 4) - 1;

        setData({ columns: columns < 1 ? 1 : columns });
      },
      tooltip: 'Spalte entfernen',
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

  render() {
    const { setData, getData, className, readOnly, auth } = this.props;
    const { style, children, ...rest } = this.props;
    let images = getData('images', []);
    const showMedia = getData('showMedia');
    const withCaption = getData('withCaption');
    const withSource = getData('withSource');
    const columns = getData('columns', 4);

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
      <div style={{ ...styles, flexBasis: `${100 / columns}%`, padding: '.5rem' }} key={i}>
        {/* <div style={{ ...styles, height: 'auto', width: `${100 / columns}%`, float: 'left', padding: '.5rem', clear: (i + 1) % columns === 1 ? 'both' : 'none' }} key={i}> */}
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
            withCaption={withCaption}
            withSource={withSource}
          />
          {auth && auth.user && image && i !== images.length ? (
            <figcaption style={{ textAlign: 'center' }}>
              <a href="javascript:;" onClick={() => setData({ images: images.splice(i, 1) })}>
                Entfernen
              </a>
            </figcaption>
          ) : null}
        </figure>
      </div>
    );

    return (
      <GenericBlock {...rest}>
        <DataLoader className={className} style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'center', ...style }} isEmpty={images} placeholder="Keine Bilder vorhanden">
          {(images || []).map((image, i) => imageBlock(image, i))}

          {/* <div style={{ clear: 'both' }} /> */}
        </DataLoader>

        {children}
      </GenericBlock>
    );
  }
}
