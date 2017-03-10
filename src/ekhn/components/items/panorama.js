import React, { Component } from 'react';
import { cn, Image } from 'olymp';
import { SlateMateFrontend, useItemEdit } from 'olymp/slate';
import { ItemImage, ItemMore, ItemHeader } from './components';
import Tags from '../tags';

@useItemEdit()
export default class Items extends Component {
  render() {
    const { children, className, id, header, subheader, text, bild, tags, location, identifier, leading, more } = this.props;

    let ratio = 0.5;
    if (bild) {
      const width = bild.crop && bild.crop.length ? bild.crop[0] : bild.width;
      const height = bild.crop && bild.crop.length ? bild.crop[1] : bild.height;
      ratio = height / width;
    }

    return (
      <div className={cn(className, 'item panorama')} key={id}>
        {children}

        {bild && bild.url && ratio <= 0.75 ? (
          <Image ratio={ratio > 0.66 ? 0.66 : ratio} value={bild} lightbox cloudinary={{ maxWidth: 960 }} style={{ width: '100%' }}>
            {bild.caption || bild.source ? (
              <div>{bild.caption}<span style={{ float: 'right' }}>{bild.source}</span></div>
            ) : undefined}
          </Image>
        ) : undefined}

        {(!!header || !!text || !!tags) && (
          <div className={`text ${leading ? 'colored' : ''}`}>
            <ItemHeader id={id} identifier={identifier}>{header}</ItemHeader>
            {subheader ? <div className="subheader">{subheader}</div> : null}

            {text ? <SlateMateFrontend key={id} value={text} className="slate" readOnly /> : null}

            <ItemMore more={more} id={id} identifier={identifier} />

            <ItemImage bild={ratio > 0.75 && bild} className="mt-1" />

            <Tags tags={tags} className="mt-2" />
          </div>
        )}

        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
