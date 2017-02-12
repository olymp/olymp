import React from 'react';
import { Link, cn } from 'olymp';
import { SlateMateFrontend, useItemEdit } from 'olymp/cms';
import capitalize from 'lodash/upperFirst';
import Responsive from './responsive';
import Tags from '../tags';

export default useItemEdit()((props) => {
  const { children, id, header, subheader, shortText, more, bild, tags, location, identifier, className, leading } = props;
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

      <div className="text hidden-sm-down">

        {header ? <h2 className="mt-0">{header}</h2> : null}
        {subheader ? <div className="subheader">{subheader}</div> : null}
        {text ? <SlateMateFrontend key={id} value={text} readOnly className="slate" /> : <Tags tags={tags} />}

        {more ? (
          <p>
            <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: id } }}>
              <i className="fa fa-angle-double-right" /> {more}
            </Link>
          </p>
        ) : undefined}
      </div>

      <Responsive {...props} className="hidden-md-up" />
    </div>
  );
});
