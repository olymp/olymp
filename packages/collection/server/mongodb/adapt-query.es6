const attribs = ['eq', 'ne', 'lt', 'gt', 'gte', 'lte', 'in', 'nin'];
const adaptQuery = (obj) => {
  obj = { ...obj };
  if (obj.skipQuery) {
    return {};
  }
  delete obj.skipQuery;
  Object.keys(obj).forEach((key) => {
    if (obj[key] && Array.isArray(obj[key])) {
      obj[key] = obj[key].map(
        item => (typeof item === 'object' ? adaptQuery(item) : item)
      );
    } else if (obj[key] && typeof obj[key] === 'object') {
      obj[key] = adaptQuery(obj[key]);
    }
    if (key === 'and') {
      obj.$and = obj.and;
      delete obj.and;
      return;
    }
    if (key === 'or') {
      obj.$or = obj.or;
      delete obj.or;
      return;
    }
    if (key === 'between') {
      obj.$gte = obj[key][0];
      obj.$lt = obj[key][1];
      delete obj[key];
      return;
    }
    if (key === 'startsWith') {
      obj.$regex = new RegExp(`^${obj[key]}.*`, 'i');
      delete obj[key];
      return;
    }
    if (key === 'contains') {
      obj.$regex = new RegExp(`.*${obj[key]}.*`, 'i');
      delete obj[key];
      return;
    }
    if (key === 'null') {
      if (obj.null) {
        obj.$eq = null;
      }
      if (!obj.null) {
        obj.$ne = null;
      }
      delete obj.null;
      return;
    }
    /* if (key === 'day') {
      obj.$where = `return this.ende.getDate() == ${obj[key]}`;
      delete obj[key];
      return;
    }
    if (key === 'month') {
      obj.$where = `return this.ende.getMonth() == ${obj[key]}`;
      delete obj[key];
      return;
    }
    if (key === 'year') {
      obj.$where = `return this.ende.getFullYear() == ${obj[key]}`;
      delete obj[key];
      return;
    } */
    if (attribs.indexOf(key) !== -1) {
      obj[`$${key}`] = obj[key];
      delete obj[key];
    }
  });
  return obj;
};
export default adaptQuery;
