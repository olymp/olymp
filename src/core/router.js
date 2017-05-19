import React, { PropTypes, Children, Component, createElement, cloneElement } from 'react';
import { Link as LinkLegacy, NavLink as NavLinkLegacy } from 'react-router-dom';
export { Route, Switch, Redirect, Prompt } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOCATION_CHANGE } from 'react-router-redux/actions';
import { push, replace } from 'react-router-redux';

export const routerQueryMiddleware = store => next => action =>  {
  if (action.type !== LOCATION_CHANGE) {
    return next(action);
  } else if (action.payload.query) {
    action.payload.search = stringifyQuery(action.payload.query);
    delete action.payload.query;
  } return next(action);
};

export const withRouter = (WrappedComponent) => {
  @connect(
    ({ router, match }) => ({
      query: parseQuery(router.location.search),
      pathname: router.location.pathname,
      search: router.location.search,
    })
  )
  class WithRouter extends Component {
    static contextTypes = {
      store: PropTypes.object,
      router: PropTypes.shape({
        history: PropTypes.shape({
          push: PropTypes.func.isRequired,
          replace: PropTypes.func.isRequired,
          createHref: PropTypes.func.isRequired
        }).isRequired
      }).isRequired,
    };
    push = (propsTo) => {
      const { store } = this.context;
      const to = { ...propsTo };
      if (to.query) {
        to.search = stringifyQuery(to.query);
        delete to.query;

        if (this.lastPath === to.pathname && this.lastSearch === to.search) return;
        this.lastPath = to.pathname;
        this.lastSearch = to.search;
      } else {
        if (this.lastPath === to) return;
        this.lastPath = to;
        this.lastSearch = null;
      }
      store.dispatch(push(to));
      // this.context.router.history.push(to);
    }
    replace = (propsTo) => {
      const { store } = this.context;
      const to = { ...propsTo };
      if (to.query) {
        to.search = stringifyQuery(to.query);
        delete to.query;
      }
      store.dispatch(replace(to));
      // this.context.router.history.replace(to);
    }
    render() {
      const { query, pathname, search } = this.props;
      return (
        <WrappedComponent {...this.props} location={{ query, pathname, search }} query={query} pathname={pathname} router={{ ...this.context.router, push: this.push, replace: this.replace }} />
      );
    }
  }
  return WithRouter;
};

export const SimpleSwitch = ({ children, ...rest }) => {
  let notFound, match;
  const routes = Children.toArray(children);
  for (var index = 0; index < routes.length; index++) {
    var route = routes[index];
    if (route.props.match) {
      match = route;
    } else if (route.props.match === undefined) {
      notFound = route;
    }
  }
  if (match) return match;
  if (!match && notFound) return cloneElement(notFound, { match: true });
  else return null;
};

export const SimpleRoute = ({ match, render, component, location, ...rest }) => {
  rest = { ...rest, ...location, location };
  if (match && component) return createElement(component, rest);
  if (match && render) return render(rest);
  else return null;
};

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
