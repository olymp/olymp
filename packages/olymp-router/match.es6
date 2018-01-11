import React, { Children } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  onlyUpdateForKeys,
  compose,
  withPropsOnChange,
  withProps,
  withContext,
  getContext,
} from 'recompose';

export const matchPath = (pathname = '', exact = false, match = '') =>
  (!exact && pathname.indexOf(`${match}/`) === 0) || pathname === match;
export const matchPaths = (pathname, exact, match) => {
  for (const path of match) {
    if (matchPath(pathname, exact, path)) {
      return true;
    }
  }
  return false;
};
export const getChild = ({ render, component: Component, ...rest }) => {
  if (Component) {
    return <Component {...rest} />;
  } else if (render) {
    return render(rest);
  } else if (rest.children) {
    return Children.only(rest.children);
  }
  return null;
};
export const matchQuery = (query, match) => {
  for (const key in match) {
    if (!(key in query) || query[key] !== match[key]) {
      return false;
    }
  }
  return true;
};

export const Switch = ({ children, pathname, query }) => {
  let notFound = null;
  let matched = null;
  const routes = Children.toArray(children);
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    const { displayName } = route.type;
    const { match, exact, ...rest } = route.props;
    if (displayName === 'Match' && match === true) {
      matched = getChild(rest);
    } else if (displayName === 'Match' && match === undefined) {
      notFound = getChild(rest);
    }
    if (matched) {
      break;
    }
  }
  return matched || notFound || null;
};
Switch.displayName = 'SwitchSimple';

export const SwitchLocation = compose(
  connect(({ location }) => ({
    query: location.query,
    pathname: location.query,
  })),
  getContext({
    matches: PropTypes.array,
    match: PropTypes.object,
  }),
  withPropsOnChange(
    ['query', 'pathname'],
    ({ query, pathname, matches = [], children }) => {
      let notFound = null;
      let matched = null;
      let matchProps = null;
      const routes = Children.toArray(children);
      for (let index = 0; index < routes.length; index++) {
        const route = routes[index];
        const { displayName } = route.type;
        const { match, exact, ...rest } = route.props;
        if (displayName === 'Match' && match === true) {
          matched = getChild(rest);
        } else if (displayName === 'Match' && match === undefined) {
          notFound = getChild(rest);
        } else if (
          displayName === 'MatchPath' &&
          matchPath(pathname, exact, match)
        ) {
          matched = getChild(rest);
        } else if (
          displayName === 'MatchPaths' &&
          matchPaths(pathname, exact, match)
        ) {
          matched = getChild(rest);
        } else if (displayName === 'MatchQuery' && matchQuery(query, match)) {
          matched = getChild(rest);
        }
        if (matched) {
          matchProps = { pathname, query };
          break;
        }
      }
      return {
        component: matched || notFound || null,
        match: matchProps,
        matches: [...matches, matchProps],
      };
    },
  ),
  withContext(
    {
      matches: PropTypes.array,
    },
    ({ matches }) => ({
      matches,
    }),
  ),
)(({ component }) => component);
SwitchLocation.displayName = 'SwitchLocation';

export const SwitchQuery = compose(
  connect(({ location }) => ({
    query: location.query,
  })),
  onlyUpdateForKeys(['query']),
)(({ children, query }) => {
  let notFound = null;
  let matched = null;
  const routes = Children.toArray(children);
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    const { displayName } = route.type;
    const { match, exact, ...rest } = route.props;
    if (displayName === 'Match' && match === true) {
      matched = getChild(rest);
    } else if (displayName === 'Match' && match === undefined) {
      notFound = getChild(rest);
    } else if (displayName === 'MatchQuery' && matchQuery(query, match)) {
      matched = getChild(rest);
    }
    if (matched) {
      break;
    }
  }
  return matched || notFound || null;
});
SwitchQuery.displayName = 'SwitchQuery';

export const SwitchPathname = compose(
  connect(({ location }) => ({
    pathname: location.pathname,
  })),
  getContext({
    matches: PropTypes.array,
    match: PropTypes.object,
  }),
  withProps(({ pathname, children, matches = [], ...switchRest }) => {
    let notFound = null;
    let matched = null;
    let matchProps = null;
    const routes = Children.toArray(children);
    for (let index = 0; index < routes.length; index++) {
      const route = routes[index];
      const { displayName } = route.type;
      const { exact, ...rest } = route.props;
      if (displayName === 'Match' && route.props.match === true) {
        matched = getChild({ ...switchRest, ...rest, pathname });
      } else if (displayName === 'Match' && route.props.match === undefined) {
        notFound = getChild({ ...rest, pathname });
      } else if (
        displayName === 'MatchPath' &&
        matchPath(pathname, exact, route.props.match)
      ) {
        matched = getChild({ ...rest, pathname });
      } else if (
        displayName === 'MatchPaths' &&
        matchPaths(pathname, exact, route.props.match)
      ) {
        matched = getChild({ ...rest, pathname });
      }
      if (matched) {
        matchProps = { pathname };
        break;
      }
    }
    return {
      component: matched || notFound || null,
      match: matchProps,
      matches: [...matches, matchProps],
    };
  }),
  onlyUpdateForKeys(['pathname']),
  withContext(
    {
      matches: PropTypes.array,
    },
    ({ matches }) => ({
      matches,
    }),
  ),
)(({ component }) => component);
SwitchPathname.displayName = 'SwitchPathname';

export const Match = props => {
  if (props.match === true) {
    return getChild(props);
  }
  return null;
};
Match.displayName = 'Match';

export const MatchPaths = connect(({ location }, { match, exact }) => ({
  match: matchPaths(location.pathname, exact, match),
}))(Match);
MatchPaths.displayName = 'MatchPaths';

export const MatchPath = connect(({ location }, { match, exact }) => ({
  match: matchPath(location.pathname, exact, match),
}))(Match);
MatchPath.displayName = 'MatchPath';

export const MatchQuery = connect(({ location }, { match }) => ({
  match: matchQuery(location.query, match),
}))(Match);
MatchQuery.displayName = 'MatchQuery';

export const MatchPathParams = ({ exact, match, ...rest }) =>
  Match({ match: true, ...rest });
