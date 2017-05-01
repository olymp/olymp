import React from 'react';
import { Cloudinary } from '../views';

const onClick = ({ query, pathname, router }) => (selectionIds) => {
  // MULTI
  const selected = (query[`@media`] || '').split(',').filter(x => x);
  selectionIds.forEach((selectionId) => {
    const itemIndex = selected.findIndex(item => item === selectionId);
    if (itemIndex < 0) {
      selected.push(selectionId); // add/select
    } else {
      selected.splice(itemIndex, 1); // remove/deselect
    }
  });
  router.push({ pathname, query: { ...query, '@media': selected.join(',') }});
  // ONLY ONE
  /* const selected = (query['@media'] || '').split(',').filter(x => x)[0];
  router.push({ pathname, query: { ...query, '@media': selected !== selectionIds[0] ? selectionIds[0] : null } });*/
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
