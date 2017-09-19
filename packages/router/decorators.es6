import React from 'react';
import { connect } from 'react-redux';
import {
  createPush,
  createReplace,
  createPushPathname,
  createUpdateQuery,
  createReplaceQuery,
} from './redux';

export const withRouterActions = connect(null, dispatch => ({
  push: createPush(dispatch),
  replace: createReplace(dispatch),
  pushPathname: createPushPathname(dispatch),
  updateQuery: createUpdateQuery(dispatch),
  replaceQuery: createReplaceQuery(dispatch),
}));

export const withQueryActions = connect(null, dispatch => ({
  updateQuery: createUpdateQuery(dispatch),
  replaceQuery: createReplaceQuery(dispatch),
}));

export const withPathname = connect(({ location }) => ({
  pathname: location.pathname,
}));

export const withQuery = connect(({ location }) => ({
  query: location.query,
}));

export const withLocation = connect(({ location }) => ({
  location,
}));

export const withQueryParam = key =>
  connect(({ location }) => ({
    [key]: location.query[key],
  }));

export const withQueryParams = arrayOfParams =>
  connect(({ location }) => ({
    ...arrayOfParams.reduce((state, key) => ({ ...state, [key]: location[key] }), {}),
  }));

export const withRouter = (WrappedComponent) => {
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
      replace: createReplace(dispatch),
    }),
  )(inner);
};
