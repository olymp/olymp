import React from 'react';
import createEdit from './edit';
import Thumb from './components/thumb';

export default createEdit((v, { onChange }) => (
  <Thumb
    item={v[0] || { width: 300, height: 300 }}
    height={100}
    isActive={!!v[0]}
    onRemove={e => {
      e.stopPropagation();
      onChange([]);
    }}
  />
));
