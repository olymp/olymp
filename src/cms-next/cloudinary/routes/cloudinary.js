import React, { Component, PropTypes } from 'react';
import { Cloudinary } from '../views';

export default ({ query, pathname, router }) => (
  <Cloudinary
    selected={(query[`@media`] || '').split(',').filter(x => x)}
    onClick={selectionIds => {
      // MULTI
      const selected = (query[`@media`] || '').split(',').filter(x => x);

      selectionIds.forEach(selectionId => {
        const itemIndex = selected.findIndex(item => item === selectionId);

        if (itemIndex < 0) {
          selected.push(selectionId); // add/select
        } else {
          selected.splice(itemIndex, 1); // remove/deselect
        }
      })

      router.push({pathname, query: { ...query, ['@media']: selected.join(',') }});

      // ONLY ONE
      // const selected = (query[`@media`] || '').split(',').filter(x => x)[0];
      // router.push({pathname, query: { ...query, ['@media']: selected !== selectionIds[0] ? selectionIds[0] : null }});
    }}
    // onSelect={items => console.log(items)} // => Selection-Mode
    onClose={() => router.push({pathname, query: { ...query, ['@media']: undefined }})}
  />
);
