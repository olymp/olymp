import React from 'react';
import { cn } from 'olymp';
import { SlateMateFrontend, useItemEdit } from 'olymp/slate';
import { ItemMore, ItemHeader } from './components';
import Responsive from './responsive';
import Tags from '../tags';

export default useItemEdit()((props) => {
  const { children, id, header, subheader, shortText, more, bild, tags, identifier, className, leading } = props;
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

      <Responsive {...props} className="text">
        {header ? <ItemHeader className="mt-0" id={id} identifier={identifier}>{header}</ItemHeader> : null}
        {subheader ? <div className="subheader">{subheader}</div> : null}
        {text ? <SlateMateFrontend key={id} value={text} readOnly className="slate" /> : null}

        <ItemMore more={more} id={id} identifier={identifier} />

        <Tags tags={tags} className="mt-2" />
      </Responsive>

      <div style={{ clear: 'both' }} />
    </div>
  );
});
