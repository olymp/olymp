export default str => {
  const ret = {};
  if (typeof str !== 'string') {
    return ret;
  }
  str = str.trim().replace(/^(\?|#|&)/, '');
  if (!str) {
    return ret;
  }
  str.split('&').forEach(param => {
    const parts = param.replace(/\+/g, ' ').split('=');
    const key = parts.shift();
    let val = parts.length > 0 ? parts.join('=') : undefined;
    // key = decodeURIComponent(key);
    val = val === undefined ? null : decodeURIComponent(unescape(val));
    if (ret[key] === undefined) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
  });
  return ret;
};
