import stringifyQuery from './stringify-query';

export default (locationOrString) => {
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
};
