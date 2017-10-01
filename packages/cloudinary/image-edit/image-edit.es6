import React from 'react';
import createEdit from './edit';
import { Image } from '../components';

export default createEdit(v => (
  <Image
    value={
      v[0] || {
        url: 'https://lorempixel.com/600/450/cats/',
        width: 600,
        height: 450,
      }
    }
    width="100%"
  />
));
