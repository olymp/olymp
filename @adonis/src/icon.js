import React from 'react';

export default ({ name, space }) => (
  !space
    ? <i className={`fa fa-${name}`} />
    : <span><i className={`fa fa-${name}`} />&nbsp;</span>
);
