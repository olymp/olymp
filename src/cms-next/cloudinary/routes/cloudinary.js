import React from 'react';
import { Cloudinary } from '../views';

const onClick = ({ query, pathname, router }) => (selectionIds, index, e) => {
  let selected = (query[`@media`] || '').split(',').filter(x => x);

  selectionIds.forEach((selectionId) => {
    const itemIndex = selected.findIndex(item => item === selectionId);
    if (itemIndex < 0) {
      if(e && e.shiftKey) {
        selected.push(selectionId); // select multi
      } else {
        selected = [selectionId]; // select single
      }
    } else {
      selected.splice(itemIndex, 1); // remove/deselect
    }
  });

  router.push({ pathname, query: { ...query, '@media': selected.join(',') }});
};

export default ({ query, pathname, router }) => (
  <Cloudinary
    pdfMode
    selected={(query['@media'] || '').split(',').filter(x => x)}
    onClick={onClick({ query, pathname, router })}
    onSelect={items => console.log(items)} // => Selection-Mode
    onClose={() => router.push({ pathname, query: { ...query, '@media': undefined } })}
  />
);
