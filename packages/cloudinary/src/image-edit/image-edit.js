import React from 'react';
import Edit from './edit';
import { Image } from '../components';

export default ({ multi, ...rest }) =>
  <Edit renderFn={v => <Image value={v[0]} />} multi={multi} {...rest} />;
