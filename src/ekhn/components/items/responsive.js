import React from 'react';
import { cn } from 'olymp';
import { SlateMateFrontend } from 'olymp/slate';
import Hypher from 'hypher';
import german from 'hyphenation.de';
import { ItemImage, ItemMore, ItemHeader } from './components';
import Tags from '../tags';

export default ({ id, header, subheader, shortText, more, bild, tags, identifier, className, breakpoint = 'md', children }) => {
  const hypher = new Hypher(german);

  let breakpointHidden;
  switch (breakpoint) {
    case 'sm':
      breakpointHidden = 'xs';
      break;
    case 'md':
      breakpointHidden = 'sm';
      break;
    case 'lg':
      breakpointHidden = 'md';
      break;

    default:
      breakpointHidden = 'sm';
  }

  return (
    <div>
      <div className={cn(className, `hidden-${breakpointHidden}-down`)}>
        {children}
      </div>

      <div className={cn(className, 'text col-xl-8 col-md-7 col-xs-12', `hidden-${breakpoint}-up`)}>
        {header ? <ItemHeader className="mt-0" id={id} identifier={identifier}>{hypher.hyphenateText(header.toString())}</ItemHeader> : null}
        {subheader ? <div className="subheader">{subheader}</div> : null}
        {shortText ? <SlateMateFrontend key={id} value={shortText} readOnly className="slate" /> : null}

        <ItemMore more={more} id={id} identifier={identifier} />

        <ItemImage bild={bild} className="mt-1" />

        <Tags tags={tags} className="mt-2" />
      </div>
    </div>
  );
};
