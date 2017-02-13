import React from 'react';
import { Link, cn } from 'olymp';
import { SlateMateFrontend, Image, useItemEdit } from 'olymp/cms';
import capitalize from 'lodash/upperFirst';
import Tags from '../tags';

export default useItemEdit()(({ id, header, subheader, shortText, more, bild, tags, location, identifier, className }) => {
  const { pathname, query } = location;

  return (
    <div className={cn(className, 'text col-xl-8 col-md-7 col-xs-12')}>
      {header ? <h2 className="mt-0">{header}</h2> : null}
      {subheader ? <div className="subheader">{subheader}</div> : null}
      {shortText ? <SlateMateFrontend key={id} value={shortText} readOnly className="slate" /> : <Tags tags={tags} />}

      {more ? (
        <p>
          <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: id } }}>
            <i className="fa fa-angle-double-right" /> {more}
          </Link>
        </p>
      ) : undefined}

      {bild && bild.url ? (
        <div style={{ textAlign: 'center' }}>
          <Image asImg value={bild} className="mt-1" cloudinary={{ maxWidth: 700 }} lightbox />
          {bild.caption || bild.source ? (
            <div style={{ textAlign: 'left' }}>{bild.caption} <div style={{ float: 'right', fontSize: 'small' }}>© {bild.source}</div></div>
          ) : undefined}
        </div>
      ) : undefined}
    </div>
  );
});
