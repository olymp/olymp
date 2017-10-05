import React from 'react';
import createEdit from './edit';
import { Image } from '../components';

export default createEdit(v => (
  <Image
    value={
      v[0] || {
        width: 600,
        height: 450,
      }
    }
    width="100%"
  />
));
