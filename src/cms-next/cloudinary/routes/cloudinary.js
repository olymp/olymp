import React from 'react';
import { Cloudinary } from '../views';

const onClick = ({ query, pathname, router }) => (selectionIds, index, e) => {
  const selected = (query[`@media`] || '').split(',').filter(x => x);

  if(e && e.shiftKey) {
    // MULTI
    selectionIds.forEach((selectionId) => {
      const itemIndex = selected.findIndex(item => item === selectionId);
      if (itemIndex < 0) {
        selected.push(selectionId); // add/select
      } else {
        selected.splice(itemIndex, 1); // remove/deselect
      }
    });
    router.push({ pathname, query: { ...query, '@media': selected.join(',') }});
  } else {
    // SINGLE
    if (selected.length && selected.includes(selectionIds[0])) {
      router.push({ pathname, query: { ...query, '@media': selected.filter(x => x !== selectionIds[0]).join(',') } });
    } else {
      router.push({ pathname, query: { ...query, '@media': selectionIds[0] } });
    }
  }
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
