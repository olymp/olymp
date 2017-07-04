import React from 'react';
import Edit from './edit';
import { FaImage, FaImages } from 'olymp-icons';

export default ({ multi, ...rest }) =>
  (<Edit
    renderFn={v => (multi ? <FaImages /> : <FaImage />)}
    multi={multi}
    {...rest}
  />);
