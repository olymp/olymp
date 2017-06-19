import React from 'react';
import PropTypes from 'prop-types';

const component = (props) => {
  // const color = '#DF86A8';
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
};

component.label = 'Leer';
component.propTypes = {
  children: PropTypes.node,
};

export default component;
