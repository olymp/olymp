import { isPlainObject, isArray } from 'lodash';

const omit = (obj, keyToOmit = '__typename') => {
  if (!isPlainObject(obj)) {
    return obj;
  }
  const newObj = Object.keys(obj).reduce((store, key) => {
    if (isArray(obj[key])) {
      store[key] = obj[key].map(x => omit(x, keyToOmit));
    } else if (isPlainObject(obj[key])) {
      store[key] = omit(obj[key], keyToOmit);
    } else if (key !== keyToOmit) {
      store[key] = obj[key];
    }
    return store;
  }, {});
  return newObj;
};
export default omit;
