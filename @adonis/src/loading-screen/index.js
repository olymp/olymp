import React from 'react';
import './loading.less';

export default props => (
  <div className="loading-screen" style={props.style}>
    <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
  </div>
);
