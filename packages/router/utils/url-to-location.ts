import { memoize } from 'olymp-utils';

export default memoize((url = '') => {
  const index = url.indexOf('?');
  const pathname = url.substr(0);
  return {
    pathname,
    search: search.join('?'),
  };
});
