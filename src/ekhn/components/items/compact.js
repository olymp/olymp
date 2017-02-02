import React from 'react';
import { Link, cn } from 'olymp';
import { SlateMateFrontend, Image, useItemEdit } from 'olymp/cms';
import capitalize from 'lodash/upperFirst';
import Tags from '../tags';

export default useItemEdit()(({ children, id, header, subheader, shortText, more, bild, tags, location, identifier, className, leading }) => {
  const { pathname, query } = location;
  const text = !!shortText && !!shortText.nodes && { nodes: [...shortText.nodes] };

  if (bild && bild.url && text) {
    text.nodes.unshift({
      kind: 'block',
      type: 'Image',
      data: {
        image: bild,
        align: 'right',
        width: 5,
      },
    });
  }

  return (
    <div className={cn(className, `item compact ${leading ? 'colored' : ''}`)} key={id}>
      {children}

      <div className="text">
        {bild && bild.url ? (
          <Image width="100%" ratio={0.5} value={bild} className="hidden-md-up mb-1" cloudinary={{ maxWidth: 700 }} lightbox>
            {bild.caption || bild.source ? (
              <div>{bild.caption}<span style={{ float: 'right' }}>{bild.source}</span></div>
            ) : undefined}
          </Image>
        ) : undefined}

        {header ? <h2 className="mt-0">{header}</h2> : null}
        {subheader ? <div className="subheader">{subheader}</div> : null}

        <div className="hidden-sm-down">
          {text ? <SlateMateFrontend key={id} value={text} readOnly className="slate" /> : <Tags tags={tags} />}
        </div>
        <div className="hidden-md-up">
          {shortText ? <SlateMateFrontend key={id} value={shortText} readOnly className="slate" /> : <Tags tags={tags} />}
        </div>

        {more ? (
          <p>
            <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: id } }}>
              <i className="fa fa-angle-double-right" /> {more}
            </Link>
          </p>
        ) : undefined}
      </div>
    </div>
  );
});
