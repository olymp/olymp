import React from 'react';
import { cn, Image } from 'olymp';
import { useItemEdit } from 'olymp/slate';
import Tags from '../tags';

export default useItemEdit()(({ children, id, header, subheader, shortText, bild, tags, className, leading }) => (
  <div className={cn(className, `item row p-3 ${leading ? 'colored' : ''}`)} key={id}>
    {children}

    <div className="info pl-0 col-xl-4 col-md-5 hidden-sm-down">
      {bild ? (
        <a href={bild.url} target="_blank" rel="noopener noreferrer">
          <Image className="header" width="100%" value={bild} cloudinary={{ width: 300 }} />
        </a>
      ) : null}
      {shortText ? <Tags tags={tags} /> : null}
    </div>

    <div className="text p-0 col-xl-8 col-md-7">
      {bild && bild.url ? (
        <a href={bild.url} target="_blank" rel="noopener noreferrer">
          <Image width="100%" value={bild} className="hidden-md-up mb-1" cloudinary={{ width: 700 }}>
            {bild.caption || bild.source ? (
              <div>{bild.caption}<span style={{ float: 'right' }}>{bild.source}</span></div>
            ) : undefined}
          </Image>
        </a>
      ) : undefined}

      {header ? <h2 className="mt-0">{header}</h2> : null}
      {subheader ? <div className="subheader">{subheader}</div> : null}
    </div>

    <div style={{ clear: 'both' }} />
  </div>
));
