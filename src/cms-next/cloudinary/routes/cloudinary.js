import React, { Component, PropTypes } from 'react';
import { Cloudinary } from '../views';

export default ({ query, pathname, router }) => (
  <Cloudinary
    selected={(query[`@media`] || '').split(',').filter(x => x)}
    onSelect={selectionId => {
      const selected = (query[`@media`] || '').split(',').filter(x => x);

      const itemIndex = selected.findIndex(item => item === selectionId);
      if (itemIndex < 0) {
        selected.unshift(selectionId); // add/select
      } else {
        selected.splice(itemIndex, 1); // remove/deselect
      }

      router.push({pathname, query: { ...query, ['@media']: selected.join(',') }});
    }}
    onClose={() => router.push({pathname, query: { ...query, ['@media']: undefined }})}
  />
);
