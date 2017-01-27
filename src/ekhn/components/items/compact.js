import React from 'react';
import { Link } from 'olymp';
import { SlateMate, Image, useItemEdit } from 'olymp/cms';
import capitalize from 'lodash/upperFirst';
import Tags from '../tags';

export default useItemEdit()(({ children, id, header, subheader, shortText, more, bild, tags, location, identifier, className }) => {
  const { pathname, query } = location;

  return (
    <div className={className} key={id}>
      {children}

      <div className="row">
        <div className="info pr-0 col-xl-4 col-md-5 hidden-sm-down">
          {bild ? <Image className="header" width="100%" value={bild} cloudinary={{ maxWidth: 300 }} lightbox /> : null}
          {shortText ? <Tags tags={tags} /> : null}
        </div>

        <div className="text col-xl-8 col-md-7 col-xs-12">
          {bild && bild.url ? (
            <Image width="100%" ratio={0.5} value={bild} className="hidden-md-up mb-1" cloudinary={{ maxWidth: 700 }} lightbox>
              {bild.caption || bild.source ? (
                <div>{bild.caption}<span style={{ float: 'right' }}>{bild.source}</span></div>
              ) : undefined}
            </Image>
          ) : undefined}

          {header ? <h2 className="mt-0">{header}</h2> : null}
          {subheader ? <div className="subheader">{subheader}</div> : null}
          {shortText ? <SlateMate key={id} value={shortText} readOnly className="slate" /> : <Tags tags={tags} />}

          {more ? (
            <p>
              <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: id } }}>
                <i className="fa fa-angle-double-right" /> {more}
              </Link>
            </p>
          ) : undefined}
        </div>
      </div>
    </div>
  );
});
