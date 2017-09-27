import React, { Children } from 'react';
import { connect } from 'react-redux';
import { onlyUpdateForKeys, compose } from 'recompose';

const matchPath = (pathname, exact, match) =>
  (!exact && pathname.index(`${match}/`) === 0) || pathname === match;
const matchPaths = (pathname, exact, match) => {
  for (const path of match) {
    if (matchPath(pathname, exact, path)) {
      return true;
    }
  }
  return false;
};
const getChild = ({ render, component: Component, match, children, ...rest }) => {
  if (Component) {
    return <Component {...rest} />;
  } else if (render) {
    return render(rest);
  } else if (children) {
    return Children.only(children);
  }
  return null;
};
const matchQuery = (query, match) => {
  for (const key in match) {
    if (!(key in query) || query[key] !== match[key]) {
      return false;
    }
  }
  return true;
};

const enhance = compose(
  connect(({ location }) => ({
    query: location.query,
    pathname: location.pathname,
  })),
  onlyUpdateForKeys(['query', 'pathname']),
);

export const MatchSwitch = enhance(({ children, pathname, query }) => {
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
    } else if (displayName === 'MatchPath' && matchPath(pathname, exact, match)) {
      matched = getChild(rest);
    } else if (displayName === 'MatchPaths' && matchPaths(pathname, exact, match)) {
      matched = getChild(rest);
    } else if (displayName === 'MatchQuery' && matchQuery(query, match)) {
      matched = getChild(rest);
    }
    if (matched) {
      break;
    }
  }
  return matched || notFound || null;
});
MatchSwitch.displayName = 'MatchSwitch';

export const Match = ({ match, ...rest }) => {
  if (match === true) {
    return getChild(rest);
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

export const MatchPathParams = ({ exact, match, ...rest }) => Match({ match: true, ...rest });
