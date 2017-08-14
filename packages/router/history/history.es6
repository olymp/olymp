import { action, autorunAsync, observable, Atom } from 'mobx';
import { stringifyQuery, parseQuery } from '../utils';
import { toNumber, omit } from 'lodash';
import shallowEqual from 'olymp-utils/shallow-equal';

const func = (a, b) => `${a}` != `${b}`;
export default class History {
  static displayName = 'history';
  types = {
    NUMBER: Symbol('NUMBER'),
    DATE: Symbol('DATE'),
    STRING: Symbol('STRING'),
  };

  constructor({ history }) {
    this.history = history;
    let handler = null;
    this.atom = new Atom(
      'History',
      () => {
        this.listener();
        handler = this.history.listen(this.listener);
      },
      () => {
        handler && handler();
        handler = null;
      },
    );
    if (process.env.IS_ELECTRON) {
      const oldUrl = localStorage.getItem('url');
      if (oldUrl) {
        this.history.push(oldUrl);
      }
      autorunAsync(() => {
        localStorage.setItem('url', this._href);
      });
    }
  }

  history;
  @observable _href = '';
  @observable _pathname = '/';
  @observable _query = {};
  @observable _location = {};
  @observable _action;
  @observable _length;

  get location() {
    this.atom.reportObserved();
    return this._location;
  }

  get query() {
    this.atom.reportObserved();
    return this._query;
  }

  get pathname() {
    this.atom.reportObserved();
    return this._pathname;
  }

  /* get action() {
    this.atom.reportObserved();
    return this._action;
  }

  get length() {
    this.atom.reportObserved();
    return this._length;
  }*/

  toggle = (key, arg) => {
    if (arg === true && this.has(key)) {
      return;
    }
    if (arg === false && !this.has(key)) {
      return;
    }
    this.patchQuery({ [key]: this.has(key) ? undefined : null });
  };
  has = key => this.query[key] !== undefined;
  get = (key, typeOrDefault) => {
    let defaultValue;
    if (typeof typeOrDefault !== 'undefined' && !this.types[typeOrDefault]) {
      defaultValue = typeOrDefault;
      if (typeof typeOrDefault === 'number') {
        typeOrDefault = this.types.NUMBER;
      } else if (typeOrDefault instanceof Date) {
        typeOrDefault = this.types.DATE;
      } else if (typeof typeOrDefault === 'string') {
        typeOrDefault = this.types.STRING;
      }
    }
    if (typeOrDefault === this.types.NUMBER) {
      return this.query[key] ? toNumber(this.query[key]) : defaultValue;
    } else if (typeOrDefault === this.types.DATE) {
      const int = parseInt(this.query[key], 10);
      if (!isNaN(int)) {
        return this.query[key] ? new Date() : defaultValue;
      }
      return defaultValue;
    } else if (typeOrDefault === this.types.STRING) {
      return this.query[key] ? `${this.query[key]}` : defaultValue;
    }
    return this.query[key];
  };
  block = message => this.history.block(message);
  set = (key, value, replace) => {
    const method = replace ? 'replace' : 'push';
    this[method]({ pathname: this.pathname, query: { ...this.query, [key]: value } });
  };
  remove = (key, replace) => {
    const method = replace ? 'replace' : 'push';
    this[method]({ pathname: this.pathname, query: omit(this.query, key) });
  };

  setPathname = (pathname, replace) => {
    const method = replace ? 'replace' : 'push';
    this[method]({ pathname, query: this.query });
  };

  setQuery = (query, replace) => {
    const method = replace ? 'replace' : 'push';
    this[method]({ pathname: this.pathname, query });
  };

  patchQuery = (query, replace) => {
    const method = replace ? 'replace' : 'push';
    this[method]({ pathname: this.pathname, query: { ...this.query, ...query } });
  };

  push = (location) => {
    if (typeof location === 'string') {
      location = { pathname: location, query: {} };
    }
    if (this.pathname === location.pathname && shallowEqual(this.query, location.query, func)) {
      return;
    }
    this.history.push({
      pathname: location.pathname,
      search: location.query ? stringifyQuery(location.query) : null,
    });
  };

  replace = (location) => {
    if (typeof location === 'string') {
      location = { pathname: location, query: {} };
    }
    if (this.pathname === location.pathname && shallowEqual(this.query, location.query)) {
      return;
    }
    this.history.push({
      pathname: location.pathname,
      search: location.query ? stringifyQuery(location.query) : null,
    });
  };

  listener = action((l, a) => {
    const { location } = this.history;
    this._pathname = location.pathname;
    this._query = parseQuery(location.search);
    this._href = `${location.pathname}${location.search}`;
    this._location = {
      pathname: this._pathname,
      query: this._query,
    };
    // extendObservable(this._location, this.history.location);
    // this._action = this.history.action;
    // this._length = this.history.length;
  });
}
