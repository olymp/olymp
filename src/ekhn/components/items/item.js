import React from 'react';
import { Link, cn } from 'olymp';
import { SlateMateFrontend, Image, useItemEdit } from 'olymp/cms';
import capitalize from 'lodash/upperFirst';
import Responsive from './responsive';
import Tags from '../tags';

export default useItemEdit()((props) => {
  const { children, id, header, subheader, shortText, more, bild, tags, location, identifier, className, leading } = props;
  const { pathname, query } = location;

  return (
    <div className={cn(className, `item ${leading ? 'colored' : ''}`)} key={id}>
      {children}

      <div className="hidden-sm-down">
        <div className="info pl-1 pr-0 py-1 col-xl-4 col-md-5 hidden-sm-down">
          {bild ? <Image className="header" width="100%" value={bild} cloudinary={{ maxWidth: 300 }} lightbox /> : null}
          {shortText ? <Tags tags={tags} /> : null}
        </div>

        <div className="text col-xl-8 col-md-7 col-xs-12">
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
        </div>
      </div>

      <Responsive {...props} className="hidden-md-up" />

      <div style={{ clear: 'both' }} />
    </div>
  );
});
