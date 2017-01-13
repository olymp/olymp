import React from 'react';
import Footer from './footer';
import Header from './header';

export default props => (
  <div className="frontend">
    <div className="frontend-container">
      <Header {...props} />
      {props.children}
    </div>
    <Footer {...props} />
  </div>
);
