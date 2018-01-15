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
import isMatch from './utils/is-match';

export const matchPath = (pathname = '', exact = false, match = '') =>
  isMatch(pathname, { path: match, exact });
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

const pathMatcher = ({ pathname, query, children, ...switchRest }) => {
  let notFound = null;
  let matched = null;
  let matchProps = null;
  const routes = Children.toArray(children);
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    const { displayName } = route.type;
    const { exact, ...rest } = route.props;
    if (route.props.match === true) {
      matched = getChild({ ...switchRest, ...rest, pathname });
      matchProps = { pathname };
      break;
    } else if (route.props.match === undefined) {
      notFound = getChild({ ...rest, pathname });
    } else if (route.props.match && typeof route.props.match === 'string') {
      const props = matchPath(pathname, exact, route.props.match);
      if (props) {
        matched = getChild({ ...rest, pathname });
        matchProps = props;
        break;
      }
    } else if (route.props.match && Array.isArray(typeof route.props.match)) {
      const props = matchPaths(pathname, exact, route.props.match);
      if (props) {
        matched = getChild({ ...rest, pathname });
        matchProps = props;
        break;
      }
    } else if (route.props.match && typeof route.props.match === 'object') {
      if (matchQuery(query, match)) {
        matched = getChild(rest);
      }
    }
  }
  if (matched || notFound) {
    const component = matched || notFound;
    return {
      component: matchProps
        ? React.cloneElement(component, matchProps)
        : component,
    };
  }
  return {
    component: null,
  };
};
export const Switch = compose(withProps(pathMatcher))(
  ({ component }) => component
);
Switch.displayName = 'SwitchSimple';
export const SwitchLocation = compose(
  connect(({ location }) => ({
    query: location.query,
    pathname: location.pathname,
  })),
  withPropsOnChange(['query', 'pathname'], pathMatcher)
)(({ component }) => component);
SwitchLocation.displayName = 'SwitchLocation';

export const SwitchQuery = compose(
  connect(({ location }) => ({
    query: location.query,
  })),
  withPropsOnChange(['query'], pathMatcher)
)(({ component }) => component);
SwitchQuery.displayName = 'SwitchQuery';

export const SwitchPathname = compose(
  connect(({ location }) => ({
    pathname: location.pathname,
  })),
  withPropsOnChange(['pathname'], pathMatcher)
)(({ component }) => component);
SwitchPathname.displayName = 'SwitchPathname';
export const SwitchPath = SwitchPathname;

export const Match = props => {
  if (props.match === true) {
    return getChild(props);
  }
  return null;
};
Match.displayName = 'Match';

/*export const MatchPaths = connect(({ location }, { match, exact }) => ({
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
  Match({ match: true, ...rest });*/
