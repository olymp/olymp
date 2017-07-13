import React, { Children, Component, createElement, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { withRouter as withRouter2 } from 'react-router-dom';
import { get } from 'lodash';
export { Link, Route, Switch, Redirect } from 'react-router-dom';

export const withRouter = (WrappedComponent) => {
  const inner = (props, context) => {
    const { location } = props;
    const { router } = context;
    const query = parseQuery(location.search);
    return (
      <WrappedComponent {...props} {...location} router={router.history} query={query} location={{ ...location, query }} />
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
  return withRouter2(inner);
};

@withRouter
export class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (get(this.props.location, 'pathname') !== get(prevProps.location, 'pathname')) {
      const node = findDOMNode(this);
      if (node) node.scrollTop = 0;
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}

export const SimpleSwitch = ({ children, ...rest }) => {
  let notFound,
    match;
  const routes = Children.toArray(children);
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    if (route.props.match) {
      match = route;
    } else if (route.props.match === undefined) {
      notFound = route;
    }
  }
  if (match) {
    return match;
  }
  if (!match && notFound) {
    return cloneElement(notFound, { match: true });
  }
  return null;
};

export const SimpleRoute = ({
  match,
  render,
  component,
  location,
  ...rest
}) => {
  rest = { ...rest, ...location, location };
  if (match && component) {
    return createElement(component, rest);
  }
  if (match && render) {
    return render(rest);
  }
  return null;
};

function memoize(func) {
  const cache = {};
  return function () {
    const key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    }
    const val = func.apply(this, arguments);
    cache[key] = val;
    return val;
  };
}

export const parseQuery = memoize((str) => {
  const ret = Object.create(null);
  if (typeof str !== 'string') {
    return ret;
  }
  str = str.trim().replace(/^(\?|#|&)/, '');
  if (!str) {
    return ret;
  }
  str.split('&').forEach((param) => {
    const parts = param.replace(/\+/g, ' ').split('=');
    const key = parts.shift();
    let val = parts.length > 0 ? parts.join('=') : undefined;
    // key = decodeURIComponent(key);
    val = val === undefined ? null : decodeURIComponent(val);
    if (ret[key] === undefined) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
  });
  return ret;
});

export const stringifyQuery = memoize(
  obj =>
    obj
      ? Object.keys(obj)
        .sort()
        .map((key) => {
          const val = obj[key];
          if (val === undefined) {
            return '';
          }
          if (val === null) {
            return key;
            // return encodeURIComponent(key);
          }
          if (Array.isArray(val)) {
            const result = [];

            val.slice().forEach((val2) => {
              if (val2 === undefined) {
                return;
              }

              if (val2 === null) {
                result.push(key);
                // result.push(encodeURIComponent(key));
              } else {
                result.push(`${key}=${encodeURIComponent(val2)}`);
                // result.push(encodeURIComponent(key) + '=' + encodeURIComponent(val2));
              }
            });

            return result.join('&');
          }
          return `${key}=${encodeURIComponent(val)}`;
          // return encodeURIComponent(key, opts) + '=' + encodeURIComponent(val, opts);
        })
        .filter(x => x.length > 0)
        .join('&')
      : ''
);
