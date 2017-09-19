import parseQuery from './parse-query';
import stringifyQuery from './stringify-query';

export default (urlOrString = '') => {
  let url = {};
  if (typeof urlOrString === 'string') {
    let [pathname, ...search] = urlOrString.split('?');
    search = search.join('?');
    url = {
      pathname,
      search,
      query: parseQuery(search),
    };
  } else if (typeof urlOrString === 'object') {
    url = urlOrString;
    if (url.query) {
      url.search = stringifyQuery(url.query);
    } else if (url.search) {
      url.query = parseQuery(url.search);
    }
  }
  if (url.search && url.search[0] === '?') {
    url.url = `${url.pathname}${url.search}`;
  } else if (url.search) {
    url.url = `${url.pathname}?${url.search}`;
  } else {
    url.url = url.pathname;
  }
  if (!url.search) {
    url.search = '';
  }
  if (!url.query) {
    url.query = {};
  }
  return url;
};
