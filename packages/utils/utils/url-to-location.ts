import { memoize } from 'olymp-utils';
import parseQuery from './parse-query';
import stringifyQuery from './stringify-query';

export default memoize((urlOrString = '') => {
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
  return url;
});
