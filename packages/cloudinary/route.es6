import React from 'react';
import { Cloudinary } from './views';

export default ({ query, pathname, router }) =>
  (<Cloudinary
    selected={(query['@media'] || '')
      .split(',')
      .filter(x => x)
      .map(x => ({ id: x, crop: undefined }))}
    handleSelection={selected =>
      router.push({
        pathname,
        query: { ...query, '@media': selected.map(item => item.id).join(',') },
      })}
    // onSelect={items => console.log(items)} // => Selection-Mode
  />);
