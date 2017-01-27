import React from 'react';
import { cn } from 'olymp';
import { Image, useItemEdit } from 'olymp/cms';
import Tags from '../tags';

export default useItemEdit()(({ children, id, header, subheader, shortText, bild, tags, className, leading }) => (
  <div className={cn(className, `item ${leading ? 'colored' : ''}`)} key={id}>
    {children}

    <div className="info pl-1 pr-0 py-1 col-xl-4 col-md-5 hidden-sm-down">
      {bild ? <Image className="header" width="100%" value={bild} cloudinary={{ maxWidth: 300 }} lightbox /> : null}
      {shortText ? <Tags tags={tags} /> : null}
    </div>

    <div className="text col-xl-8 col-md-7 col-xs-12">
      {bild && bild.url ? (
        <Image width="100%" value={bild} className="hidden-md-up mb-1" cloudinary={{ maxWidth: 700 }} lightbox>
          {bild.caption || bild.source ? (
            <div>{bild.caption}<span style={{ float: 'right' }}>{bild.source}</span></div>
          ) : undefined}
        </Image>
      ) : undefined}

      {header ? <h2 className="mt-0">{header}</h2> : null}
      {subheader ? <div className="subheader">{subheader}</div> : null}
    </div>

    <div style={{ clear: 'both' }} />
  </div>
));
