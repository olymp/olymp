import { get } from 'lodash';

// interpolate a string value using props
export default (value, propsOrFunc) => {
  if (typeof value !== 'string') return value;
  if (value.indexOf('{') === -1) return value;
  return value.replace(/\{\{?\:?(.+?)\}?\}/g, (m, v) => {
    return typeof propsOrFunc === 'function'
      ? propsOrFunc(v, v)
      : get(propsOrFunc, v, v);
  });
}
