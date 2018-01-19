import parseQuery from './parse-query';
import stringifyQuery from './stringify-query';

export default (urlOrString = '') => {
  let url = {};
  if (typeof urlOrString === 'string') {
    let [pathname, ...search] = urlOrString.split('?');
    let [xyz, ...hash] = urlOrString.split('#');
    search = search.join('?');
    hash = hash.join('#');
    url = {
      pathname: decodeURIComponent(pathname),
      search: decodeURIComponent(search),
      hash: decodeURIComponent(hash),
      query: parseQuery(search),
      hashQuery: parseQuery(hash),
    };
  } else if (typeof urlOrString === 'object') {
    url = { ...urlOrString };
    url.pathname = decodeURIComponent(url.pathname);
    if (url.query) {
      url.search = stringifyQuery(url.query);
    } else if (url.search) {
      url.search = decodeURIComponent(url.search);
      url.query = parseQuery(url.search);
    }
    if (url.hash) {
      url.hash = decodeURIComponent(url.hash);
      url.hashQuery = parseQuery(url.hash);
    }
  }
  if (url.search && url.search[0] === '?') {
    url.url = `${url.pathname}${url.search}`;
  } else if (url.search) {
    url.url = `${url.pathname}?${url.search}`;
  } else {
    url.url = url.pathname;
  }
  if (url.hash && url.search[0] === '#') {
    url.url = `${url.url}${url.hash}`;
  } else if (url.hash) {
    url.url = `${url.url}#${url.hash}`;
  }
  if (!url.search) {
    url.search = '';
  }
  if (!url.query) {
    url.query = {};
  }
  if (!url.hashQuery) {
    url.hashQuery = {};
  }
  return url;
};
