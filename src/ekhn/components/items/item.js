import React from 'react';
import { cn, Image } from 'olymp';
import { SlateMateFrontend, useItemEdit } from 'olymp/slate';
import Responsive from './responsive';
import { ItemMore, ItemHeader } from './components';
import Tags from '../tags';

export default useItemEdit()((props) => {
  const { children, id, header, subheader, shortText, more, bild, tags, identifier, className, leading } = props;

  return (
    <Responsive {...props} className={cn(className, `item row ${leading ? 'colored' : ''}`)}>
      <div className="info col-xl-4 col-md-5 py-3 hidden-sm-down">
        {bild ? <Image className="header" width="100%" value={bild} cloudinary={{ width: 300 }} lightbox /> : null}
        {shortText ? <Tags tags={tags} /> : null}
      </div>

      <div className="text col-xl-8 col-md-7">
        {header ? <ItemHeader className="mt-0" id={id} identifier={identifier}>{header}</ItemHeader> : null}
        {subheader ? <div className="subheader">{subheader}</div> : null}
        {shortText ? <SlateMateFrontend key={id} value={shortText} readOnly className="slate" /> : null}
        {children}

        <ItemMore more={more} id={id} identifier={identifier} />
      </div>
    </Responsive>
  );
});
