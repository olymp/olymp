import React, { Component } from 'react';
import { cn, Image } from 'olymp';
import { SlateMateFrontend, useItemEdit } from 'olymp/slate';
import { ItemImage, ItemMore, ItemHeader } from './components';
import Tags from '../tags';

@useItemEdit()
export default class Masonry extends Component {
  render() {
    const { children, className, id, header, subheader, shortText, bild, tags, location, identifier, leading, more } = this.props;

    return (
      <div className={cn(className, 'item masonry')} key={id}>
        {children}

        <div className="row">
          <div className="col-md-6">
            {!!bild && <Image value={bild} lightbox cloudinary={{ width: 400 }} style={{ width: '100%' }} />}
            {!!bild && !!bild.source ? <h5>Foto {!!bild.caption && <i>"{bild.caption}"</i>} von {bild.source}</h5> : null}
          </div>

          <div className="col-md-6">
            {(!!header || !!shortText || !!tags) ? (
              <div className={`text ${leading ? 'colored' : ''}`}>
                <ItemHeader id={id} identifier={identifier}>{header}</ItemHeader>
                {subheader ? <div className="subheader">{subheader}</div> : null}

                {shortText ? <SlateMateFrontend key={id} value={shortText} className="slate" readOnly /> : null}

                <ItemMore more={more} id={id} identifier={identifier} />

                <Tags tags={tags} className="mt-2" />
              </div>
            ) : null}
          </div>
        </div>

        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
