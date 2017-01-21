import React from 'react';

export default () => (
  <div className="container-xs-height full-height" image="/img/poly/*.jpg" random={{ end: 6 }}>
    <div className="row m-n col-xs-height col-middle">
      <div className="col-sm-4 col-sm-offset-4">
        {this.props.children}
      </div>
    </div>
  </div>
);
