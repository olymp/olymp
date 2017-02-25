import React from 'react';
import { cn, Image } from 'olymp';
import { SlateMateFrontend, useItemEdit } from 'olymp/slate';
import { ItemImage, ItemMore } from './components';
import Tags from '../tags';

export default useItemEdit()(({ children, className, id, header, subheader, text, bild, tags, location, identifier, leading, more }) => {
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
        <Image ratio={ratio > 0.66 ? 0.66 : ratio} value={bild} lightbox cloudinary={{ maxWidth: 1000 }} style={{ width: '100%' }}>
          {bild.caption || bild.source ? (
            <div>{bild.caption}<span style={{ float: 'right' }}>{bild.source}</span></div>
          ) : undefined}
        </Image>
      ) : undefined}

      {(!!header || !!text || !!tags) && (
        <div className={`text ${leading ? 'colored' : ''}`}>
          <h2>{header}</h2>
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
});
