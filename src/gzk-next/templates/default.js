import React, { PropTypes } from 'react';

const component = props => {
  // const color = '#DF86A8';
  const { children, page } = props;
  return (
    <div>
      <div className="page-header panel">
        <div className="container">
          <h1 className="pull-left">{page.title || page.name}</h1>
          <ol className="breadcrumb pull-left">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">
              {page.name}
            </li>
          </ol>
        </div>
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  );
};

component.label = 'Standart';
component.propTypes = {
  children: PropTypes.node,
  page: PropTypes.object,
};

export default component;
