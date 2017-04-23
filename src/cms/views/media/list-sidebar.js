import React from 'react';
import Sidebar from '../sidebar';

const states = {
  PUBLISHED: 'Öffentlich',
};

export default props => (
  <Sidebar
    {...props}
    activePage="media"
    filter={undefined}
    states={states}
  />
);
