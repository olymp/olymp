import React, { PropTypes, Component } from 'react';
import { withRouter as withRouterLegacy, Link as LinkLegacy, NavLink as NavLinkLegacy } from 'react-router-dom';
export { Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router';

export const Link = (props) => {
  if (props.to && props.to.query) {
    props.to.search = stringifyQuery(props.to.query);
    delete props.to.query;
  }
  return <LinkLegacy {...props} />;
};

export const NavLink = (props) => {
  if (props.to && props.to.query) {
    props.to.search = stringifyQuery(props.to.query);
    delete props.to.query;
  }
  return <NavLinkLegacy {...props} />;
};

export const withRouter = (WrappedComponent) => {
  @withRouterLegacy
  class WithRouter extends Component {
    static contextTypes = {
      router: PropTypes.shape({
        history: PropTypes.shape({
          push: PropTypes.func.isRequired,
          replace: PropTypes.func.isRequired,
          createHref: PropTypes.func.isRequired
        }).isRequired
      }).isRequired,
    };
    push = (propsTo) => {
      const to = { ...propsTo };
      if (to.query) {
        to.search = stringifyQuery(to.query);
        delete to.query;
      }
      this.context.router.history.push(to);
    }
    render() {
      const { location } = this.props;
      location.query = parseQuery(location.search);
      return (
        <WrappedComponent {...this.props} router={{ ...this.context.router, push: this.push }} />
      );
    }
  }
  return WithRouter;
};

function memoize(func) {
  const cache = {};
  return function() {
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
  if (typeof str !== 'string') return ret;
  str = str.trim().replace(/^(\?|#|&)/, '');
  if (!str) return ret;
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

export const stringifyQuery = memoize((obj) => {
  return obj ? Object.keys(obj).sort().map((key) => {
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
  }).filter((x) => {
    return x.length > 0;
  }).join('&') : '';
});
