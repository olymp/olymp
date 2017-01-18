import React from 'react';
import { Link } from 'olymp';
import { SlateMate, Image, useItemEdit } from 'olymp/cms';
import capitalize from 'lodash/upperFirst';
import Tags from '../tags';

export default useItemEdit(({ children, className, id, header, subheader, text, bild, tags, location, identifier, leading, more }) => {
  const { pathname, query } = location;

  let ratio = 0.5;
  if (bild) {
    const width = bild.crop && bild.crop.length ? bild.crop[0] : bild.width;
    const height = bild.crop && bild.crop.length ? bild.crop[1] : bild.height;
    ratio = height / width;
    ratio = ratio > 0.66 ? 0.66 : ratio;
  }

  return (
    <div key={id}>
      <div className={className}>
        {children}

        { bild && bild.url ? (
          <Image width="100%" ratio={ratio || 0.5} value={bild} lightbox cloudinary={{ maxWidth: 1000 }}>
            {bild.caption || bild.source ? (
              <div>{bild.caption}<span style={{ float: 'right' }}>{bild.source}</span></div>
            ) : undefined}
          </Image>
        ) : undefined}

        <div className={`text ${leading ? 'colored' : ''}`}>
          <h2>{header}</h2>
          {subheader ? <div className="subheader">{subheader}</div> : null}

          {text ? <SlateMate key={id} value={text} className="mt-1" readOnly /> : null}

          {(!query || !query[capitalize(identifier)]) && more ? (
            <p style={{ marginBottom: '2rem' }}>
              <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: id } }}>
                <i className="fa fa-angle-double-right" /> {more}
              </Link>
            </p>
          ) : undefined}

          <Tags tags={tags} />
        </div>
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
