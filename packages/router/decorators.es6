import React from 'react';
import { connect } from 'react-redux';
import { compose, withPropsOnChange } from 'recompose';
import { upperFirst } from 'lodash';
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

export const withPush = connect(null, dispatch => ({
  push: createPush(dispatch),
}));

export const withReplace = connect(null, dispatch => ({
  replace: createPush(dispatch),
}));

export const withPushPathname = connect(null, dispatch => ({
  pushPathname: createPushPathname(dispatch),
}));

export const withQueryActions = connect(null, dispatch => ({
  updateQuery: createUpdateQuery(dispatch),
  replaceQuery: createReplaceQuery(dispatch),
}));

export const withUpdateQuery = connect(null, dispatch => ({
  updateQuery: createUpdateQuery(dispatch),
}));

export const withReplaceQuery = connect(null, dispatch => ({
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
    ...arrayOfParams.reduce((state, key) => ({ ...state, [key]: location.query[key] }), {}),
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

export const TYPEOF_DATE = Symbol('date');
export const TYPEOF_NUMBER = Symbol('number');
export const withQueryState = (key, ofType, defaultValue) => {
  if (ofType !== TYPEOF_DATE && ofType !== TYPEOF_NUMBER) {
    defaultValue = ofType;
    if (defaultValue instanceof Date) {
      ofType = TYPEOF_DATE;
    } else if (typeof defaultValue === 'number') {
      ofType = TYPEOF_NUMBER;
    } else {
      ofType = null;
    }
  }
  const upper = upperFirst(key);
  const getValue = (value) => {
    if (ofType === TYPEOF_DATE) {
      return { [key]: value ? +value : value };
    }
    return { [key]: value };
  };
  const enhancers = [
    connect(
      ({ location }) => ({
        [key]: location.query[key],
      }),
      dispatch => ({
        [`update${upper}`]: value => createUpdateQuery(dispatch)(getValue(value)),
        [`replace${upper}`]: value => createReplaceQuery(dispatch)(getValue(value)),
      }),
    ),
  ];
  if (ofType === TYPEOF_DATE) {
    enhancers.push(
      withPropsOnChange([key], props => ({
        [key]: props[key] ? new Date(props[key]) : null,
      })),
    );
  } else if (ofType === TYPEOF_NUMBER) {
    enhancers.push(
      withPropsOnChange([key], props => ({
        [key]: props[key] ? parseInt(props[key]) : null,
      })),
    );
  }
  return compose(...enhancers);
};
