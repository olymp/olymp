import { isObject, isArray } from 'lodash';

const traverse = (obj, fc, parent) => {
  if (!isObject(obj)) {
    return obj;
  }
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let v;
    if (isArray(obj[key])) {
      for (let x = 0; x < obj[key].length; x++) {
        v = traverse(obj[key][x], fc, obj);
        if (v === false) return false;
      }
    } else if (isObject(obj[key])) {
      v = traverse(obj[key], fc, obj);
    } else {
      v = fc(key, obj[key], obj, parent);
    }
    if (v === false) return false;
  }
  return undefined;
};
export default traverse;
