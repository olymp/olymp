import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { parseQuery } from './utils';
import { createPush, createReplace } from './actions';

export default WrappedComponent => {
  const inner = (props, context) => {
    const { pathname, query, search, url, push, replace } = props;
    const { router } = context;
    return (
      <WrappedComponent
        {...props}
        location={{ pathname, query, search, url }}
        router={{
          push,
          replace,
        }}
        url={url}
        search={search}
        query={query}
        pathname={pathname}
      />
    );
  };
  return connect(
    ({ location }) => ({
      pathname: location.pathname,
      query: location.query,
      search: location.search,
      url: location.url,
    }),
    dispatch => ({
      push: createPush(dispatch),
      replace: createPush(dispatch),
    })
  )(inner);
};
