import React from 'react';
import createEdit from './edit';
import Image from './image';

export default createEdit(v => (
  <Image
    value={
      v[0] || {
        width: 600,
        height: 450,
      }
    }
    height={100}
    maxWidth="100%"
  />
));
