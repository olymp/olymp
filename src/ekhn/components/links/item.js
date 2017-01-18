import React from 'react';
import { useItemEdit } from 'olymp/cms';

export default useItemEdit(({ children, className, url, name }) => (
  <li className={className}>
    {children}
    <a href={url} target="_blank" rel="noopener noreferrer" >
      {name}
    </a>
  </li>
));
