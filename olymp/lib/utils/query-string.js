'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function memoize(func) {
  var cache = {};
  return function () {
    var key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    }
    var val = func.apply(this, arguments);
    cache[key] = val;
    return val;
  };
}

var parse = exports.parse = memoize(function (str) {
  var ret = Object.create(null);
  if (typeof str !== 'string') return ret;
  str = str.trim().replace(/^(\?|#|&)/, '');
  if (!str) return ret;
  str.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = parts.shift();
    var val = parts.length > 0 ? parts.join('=') : undefined;
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

var stringify = exports.stringify = memoize(function (obj) {
  return obj ? Object.keys(obj).sort().map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return key;
      // return encodeURIComponent(key);
    }
    if (Array.isArray(val)) {
      var _ret = function () {
        var result = [];

        val.slice().forEach(function (val2) {
          if (val2 === undefined) {
            return;
          }

          if (val2 === null) {
            result.push(key);
            // result.push(encodeURIComponent(key));
          } else {
            result.push(key + '=' + encodeURIComponent(val2));
            // result.push(encodeURIComponent(key) + '=' + encodeURIComponent(val2));
          }
        });

        return {
          v: result.join('&')
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
    return key + '=' + encodeURIComponent(val);
    // return encodeURIComponent(key, opts) + '=' + encodeURIComponent(val, opts);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : '';
});