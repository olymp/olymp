import { isObject, isArray } from 'lodash';

const omit = (obj, keyToOmit = '__typename') => {
  if (!isObject(obj)) {
    return obj;
  }
  const newObj = Object.keys(obj).reduce((store, key) => {
    if (isArray(obj[key])) {
      store[key] = obj[key].map(x => omit(x, keyToOmit));
    } else if (isObject(obj[key])) {
      store[key] = omit(obj[key], keyToOmit);
    } else if (key !== keyToOmit) {
      store[key] = obj[key];
    }
    return store;
  }, {});
  return newObj;
};
export default omit;
