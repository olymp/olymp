import { memoize } from 'olymp-utils';
import stringifyQuery from './stringify-query';

export default memoize(locationOrString => {
  if (typeof locationOrString === 'string') {
    return locationOrString;
  } else if (typeof urlOrString === 'object') {
    let url = locationOrString.pathname;
    if (locationOrString.query) {
      url += `?${stringifyQuery(locationOrString.query)}`;
    }
    return url;
  }
  return null;
});
