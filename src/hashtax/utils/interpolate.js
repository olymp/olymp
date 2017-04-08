import { get } from 'lodash';

// interpolate a string value using props
export default (props, value) => {
  if (typeof value !== 'string') return value;
  if (value.indexOf('{') === -1) return value;
  return value.replace(/\{(.+?)\}/g, (m, v) => get(props, v, v));
}
