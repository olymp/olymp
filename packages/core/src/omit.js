import { isObject, isArray } from 'lodash';

const omit = (obj) => {
  if (!isObject(obj)) {
    return obj;
  }
  const newObj = Object.keys(obj).reduce((store, key) => {
    if (isArray(obj[key])) {
      store[key] = obj[key].map(omit);
    } else if (isObject(obj[key])) {
      store[key] = omit(obj[key]);
    } else if (key !== '__typename') {
      store[key] = obj[key];
    }
    return store;
  }, {});
  return newObj;
};
export default omit;
