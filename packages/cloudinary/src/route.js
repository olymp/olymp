import React from 'react';
import { Cloudinary } from './views';

export default ({ query, pathname, router }) => (
  <Cloudinary
    selected={(query['@media'] || '').split(',').filter(x => x)}
    handleSelection={selected => router.push({ pathname, query: { ...query, '@media': selected.join(',') }})}
    // onSelect={items => console.log(items)} // => Selection-Mode
    onClose={() => router.push({ pathname, query: { ...query, '@media': undefined } })}
  />
);
