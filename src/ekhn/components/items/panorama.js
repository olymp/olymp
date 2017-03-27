import React, { Component } from 'react';
import { cn, Image } from 'olymp';
import { SlateMateFrontend, useItemEdit } from 'olymp/slate';
import { ItemImage, ItemMore, ItemHeader } from './components';
import Tags from '../tags';

@useItemEdit()
export default class Panorama extends Component {
  render() {
    const { children, className, id, header, subheader, text, bild, tags, location, identifier, leading, more } = this.props;

    return (
      <div className={cn(className, 'item panorama')} key={id}>
        {children}

        {bild && bild.url ? (
          <div className="image row">
            <div className="col-md-8">
              <Image value={bild} lightbox cloudinary={{ width: 400 }} style={{ width: '100%' }} />
            </div>

            <div className="col-md-4 hidden-sm-down">
              <ItemHeader id={id} identifier={identifier}>{header}</ItemHeader>
              {subheader ? <div className="subheader">{subheader}</div> : null}

              {!!bild.source ? <h5>Foto {!!bild.caption && <i>"{bild.caption}"</i>} von {bild.source}</h5> : null}
            </div>
          </div>
        ) : undefined}

        {(!!header || !!text || !!tags) ? (
          <div className={`text ${leading ? 'colored' : ''}`}>
            <ItemHeader className={bild && bild.url ? 'hidden-md-up' : ''} id={id} identifier={identifier}>{header}</ItemHeader>
            {subheader ? <div className={cn('subheader', bild && bild.url ? 'hidden-md-up' : '')}>{subheader}</div> : null}

            {text ? <SlateMateFrontend key={id} value={text} className="slate" readOnly /> : null}

            <ItemMore more={more} id={id} identifier={identifier} />

            <Tags tags={tags} className="mt-2" />
          </div>
        ) : null}

        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
