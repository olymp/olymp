// https:// github.com/mariocasciaro/object-path-immutable
(function (root, factory) {
  /* istanbul ignore next:cant test */
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.objectPath = factory();
  }
}(this, () => {
  const _hasOwnProperty = Object.prototype.hasOwnProperty;

  function isEmpty(value) {
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
      return true;
    } else if (!isString(value)) {
      for (const i in value) {
        if (_hasOwnProperty.call(value, i)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  function isNumber(value) {
    return typeof value === 'number';
  }

  function isString(obj) {
    return typeof obj === 'string';
  }

  function isArray(obj) {
    return Array.isArray(obj);
  }

  function getKey(key) {
    const intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  const objectPathImmutable = function (src) {
    let dest = src;
    let committed = false;

    var transaction = Object.keys(api).reduce((proxy, prop) => {
      /* istanbul ignore else */
      if (typeof api[prop] === 'function') {
        proxy[prop] = function () {
          const args = [dest, src].concat(Array.prototype.slice.call(arguments));

          if (committed) {
            throw new Error(`Cannot call ${prop} after \`value\``);
          }

          dest = api[prop].apply(null, args);

          return transaction;
        };
      }

      return proxy;
    }, {});

    transaction.value = function () {
      committed = true;
      return dest;
    };

    return transaction;
  };

  function clone(obj, createIfEmpty, assumeArray) {
    if (obj == null) {
      if (createIfEmpty) {
        if (assumeArray) {
          return [];
        }

        return {};
      }

      return obj;
    } else if (isArray(obj)) {
      return obj.slice();
    }

    const res = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        res[key] = obj[key];
      }
    }

    return res;
  }

  function changeImmutable(dest, src, path, changeCallback) {
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return src;
    }
    if (isString(path)) {
      return changeImmutable(dest, src, path.split('.').map(getKey), changeCallback);
    }
    const currentPath = path[0];

    if (!dest || dest === src) {
      dest = clone(src, true, isNumber(currentPath));
    }

    if (path.length === 1) {
      return changeCallback(dest, currentPath);
    }

    if (src != null) {
      src = src[currentPath];
    }

    dest[currentPath] = changeImmutable(dest[currentPath], src, path.slice(1), changeCallback);

    return dest;
  }

  var api = {};
  api.set = function set(dest, src, path, value) {
    return changeImmutable(dest, src, path, (clonedObj, finalPath) => {
      clonedObj[finalPath] = value;
      return clonedObj;
    });
  };

  api.push = function push(dest, src, path /* , values */) {
    const values = Array.prototype.slice.call(arguments, 3);
    return changeImmutable(dest, src, path, (clonedObj, finalPath) => {
      if (!isArray(clonedObj[finalPath])) {
        clonedObj[finalPath] = values;
      } else {
        clonedObj[finalPath] = clonedObj[finalPath].concat(values);
      }
      return clonedObj;
    });
  };

  api.insert = function insert(dest, src, path, value, at) {
    at = ~~at;
    return changeImmutable(dest, src, path, (clonedObj, finalPath) => {
      let arr = clonedObj[finalPath];
      if (!isArray(arr)) {
        if (arr != null && typeof arr !== 'undefined') {
          throw new Error(`Expected ${path}to be an array. Instead got ${typeof path}`);
        }
        arr = [];
      }

      const first = arr.slice(0, at);
      first.push(value);
      clonedObj[finalPath] = first.concat(arr.slice(at));
      return clonedObj;
    });
  };

  api.del = function del(dest, src, path, value, at) {
    return changeImmutable(dest, src, path, (clonedObj, finalPath) => {
      if (Array.isArray(clonedObj)) {
        if (clonedObj[finalPath] !== undefined) {
          clonedObj.splice(finalPath, 1);
        }
      } else if (clonedObj.hasOwnProperty(finalPath)) {
        delete clonedObj[finalPath];
      }
      return clonedObj;
    });
  };

  api.assign = function assign(dest, src, path, source) {
    return changeImmutable(dest, src, path, (clonedObj, finalPath) => {
      source = Object(source);
      const target = clone(clonedObj[finalPath], true);

      for (const key in source) {
        if (_hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }

      clonedObj[finalPath] = target;
      return clonedObj;
    });
  };

  return Object.keys(api).reduce((objectPathImmutable, method) => {
    objectPathImmutable[method] = api[method].bind(null, null);

    return objectPathImmutable;
  }, objectPathImmutable);
}));
