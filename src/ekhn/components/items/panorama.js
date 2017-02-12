import React from 'react';
import { Link, cn } from 'olymp';
import { SlateMateFrontend, Image, useItemEdit } from 'olymp/cms';
import capitalize from 'lodash/upperFirst';
import Tags from '../tags';

export default useItemEdit()(({ children, className, id, header, subheader, text, bild, tags, location, identifier, leading, more }) => {
  const { pathname, query } = location;

  let ratio = 0.5;
  if (bild) {
    const width = bild.crop && bild.crop.length ? bild.crop[0] : bild.width;
    const height = bild.crop && bild.crop.length ? bild.crop[1] : bild.height;
    ratio = height / width;
  }

  let imageStyle = { width: '100%' };
  let textStyle = {};
  let slateStyle = {};
  if (ratio > 1) {
    imageStyle = { float: 'right', width: '33%' };
    textStyle = { float: 'left', width: 'calc(67% - 1rem)', margin: 0 };
    slateStyle = { columnCount: 1 };
  } else {
    ratio = ratio > 0.66 ? 0.66 : ratio;
  }

  return (
    <div key={id}>
      <div className={cn(className, 'item panorama')}>
        {children}

        { bild && bild.url ? (
          <Image ratio={ratio} value={bild} lightbox cloudinary={{ maxWidth: 1000 }} style={imageStyle}>
            {bild.caption || bild.source ? (
              <div>{bild.caption}<span style={{ float: 'right' }}>{bild.source}</span></div>
            ) : undefined}
          </Image>
        ) : undefined}

        {(!!header || !!text || !!tags) && (
          <div className={`text ${leading ? 'colored' : ''}`} style={textStyle}>
            <h2>{header}</h2>
            {subheader ? <div className="subheader">{subheader}</div> : null}

            {text ? <SlateMateFrontend key={id} value={text} className="slate" style={slateStyle} readOnly /> : null}

            {(!query || !query[capitalize(identifier)]) && more ? (
              <p style={{ marginBottom: '2rem' }}>
                <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: id } }}>
                  <i className="fa fa-angle-double-right" /> {more}
                </Link>
              </p>
            ) : undefined}

            <Tags tags={tags} />
          </div>
        )}

        <div style={{ clear: 'both' }} />
      </div>

      {query && query[capitalize(identifier)] ? (
        <p>
          <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: null } }}>
            <i className="fa fa-angle-double-left" /> Zurück zur Übersicht
          </Link>
        </p>
      ) : undefined}
    </div>
  );
});
