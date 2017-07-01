import React from 'react';
import Edit from './edit';

export default ({ multi, ...rest }) =>
  (<Edit
    renderFn={v =>
      `${multi ? 'Bilder' : 'Bild'} ${v.length ? 'wechseln' : 'wählen'}`}
    multi={multi}
    {...rest}
  />);
