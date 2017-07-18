import React from 'react';
import { connect } from 'react-redux';
import { createPush, createReplace } from './actions';

export default WrappedComponent => {
  const inner = (props, context) => {
    const { pathname, query, search, url, push, replace, ...rest } = props;
    return (
      <WrappedComponent
        {...rest}
        location={{ pathname, query, search, url }}
        router={{
          push,
          replace,
        }}
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
