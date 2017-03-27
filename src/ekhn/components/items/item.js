import React from 'react';
import { cn, Image } from 'olymp';
import { SlateMateFrontend, useItemEdit } from 'olymp/slate';
import Responsive from './responsive';
import { ItemMore, ItemHeader } from './components';
import Tags from '../tags';

export default useItemEdit()((props) => {
  const { children, id, header, subheader, shortText, more, bild, tags, identifier, className, leading } = props;

  return (
    <div className={cn(className, `item ${leading ? 'colored' : ''}`)} key={id}>
      {children}

      <Responsive {...props}>
        <div className="info pl-1 pr-0 py-1 col-xl-4 col-md-5 hidden-sm-down">
          {bild ? <Image className="header" width="100%" value={bild} cloudinary={{ width: 300 }} lightbox /> : null}
          {shortText ? <Tags tags={tags} /> : null}
        </div>

        <div className="text col-xl-8 col-md-7 col-xs-12">
          {header ? <ItemHeader className="mt-0" id={id} identifier={identifier}>{header}</ItemHeader> : null}
          {subheader ? <div className="subheader">{subheader}</div> : null}
          {shortText ? <SlateMateFrontend key={id} value={shortText} readOnly className="slate" /> : null}

          <ItemMore more={more} id={id} identifier={identifier} />
        </div>
      </Responsive>

      <div style={{ clear: 'both' }} />
    </div>
  );
});
