function memoize(func) {
  const cache = {};
  return function() {
    const key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    }
    const val = func.apply(this, arguments);
    cache[key] = val;
    return val;
  };
}

export const parse = memoize((str) => {
  const ret = Object.create(null);
  if (typeof str !== 'string') return ret;
  str = str.trim().replace(/^(\?|#|&)/, '');
  if (!str) return ret;
  str.split('&').forEach((param) => {
    const parts = param.replace(/\+/g, ' ').split('=');
    const key = parts.shift();
    let val = parts.length > 0 ? parts.join('=') : undefined;
    // key = decodeURIComponent(key);
    val = val === undefined ? null : decodeURIComponent(val);
    if (ret[key] === undefined) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
  });
  return ret;
});

export const stringify = memoize((obj) => {
  return obj ? Object.keys(obj).sort().map((key) => {
    const val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return key;
      // return encodeURIComponent(key);
    }
    if (Array.isArray(val)) {
      const result = [];

      val.slice().forEach((val2) => {
        if (val2 === undefined) {
          return;
        }

        if (val2 === null) {
          result.push(key);
          // result.push(encodeURIComponent(key));
        } else {
          result.push(`${key}=${encodeURIComponent(val2)}`);
          // result.push(encodeURIComponent(key) + '=' + encodeURIComponent(val2));
        }
      });

      return result.join('&');
    }
    return `${key}=${encodeURIComponent(val)}`;
    // return encodeURIComponent(key, opts) + '=' + encodeURIComponent(val, opts);
  }).filter((x) => {
    return x.length > 0;
  }).join('&') : '';
});
