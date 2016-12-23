import React from 'react';
import cn from 'classname';

export default ({ children, md, sm, lg }) => {
  return (
    <div className={cn('p-0', md && `col-md-${md}`, sm && `col-sm-${sm}`, lg && `col-lg-${lg}`)}>
      {children}
    </div>
  );
};
