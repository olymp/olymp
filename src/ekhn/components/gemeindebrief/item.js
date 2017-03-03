import React from 'react';
import { useItemEdit } from 'olymp/slate';

export default useItemEdit()(({ children, className, gemeindebrief, name }) => (
  <li className={className}>
    {children}

    <a href={gemeindebrief.url} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  </li>
));
