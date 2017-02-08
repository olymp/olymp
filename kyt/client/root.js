import React from 'react';
import Router from 'react-router-v4-decode-uri/lib/Router';
import browserHistory from 'react-router-v4-decode-uri/lib/browserHistory';

// We need a Root component for React Hot Loading.
function Root() {
  return (
    <Router history={browserHistory} routes={[]} />
  );
}

export default Root;
