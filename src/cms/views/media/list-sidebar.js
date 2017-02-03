import React from 'react';
import Sidebar from '../sidebar';

const states = {
  PUBLISHED: 'Öffentlich',
};

export default props => (
  <Sidebar
    {...props}
    activePage="mediathek"
    filter={undefined}
    states={states}
  />
);
