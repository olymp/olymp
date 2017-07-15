import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parseQuery } from './utils';

export default WrappedComponent => {
  const inner = (props, context) => {
    const { location } = props;
    const { router } = context;
    const query = parseQuery(location.search);
    return (
      <WrappedComponent
        {...props}
        {...location}
        router={router.history}
        query={query}
        location={{ ...location, query }}
      />
    );
  };
  inner.contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired,
        createHref: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  };
  return withRouter(inner);
};
