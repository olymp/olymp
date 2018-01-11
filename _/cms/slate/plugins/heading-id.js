'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Slate plugin to ensure a trailing block.
 * @param {Object} [opts] Options for the plugin
 * @param {String|Function} [opts.match='paragraph'] Match last block
 * @param {String} [opts.type] The type of the trailing block to insert
 * @return {Object}
 */

function HeadingId(opts) {
  opts = opts || {};
  opts.match = opts.match || function (node) {
    return node.type === opts.type;
  };

  return {
    validateNode: function validateNode(node) {
      if (!node.type || node.type.indexOf('heading-') !== 0) {
        return undefined;
      }

      if (node.data.get('id')) {
        return undefined;
      }

      return function (change) {
        return change.setNodeByKey(node.key, {
          data: node.data.set('id', _shortid2.default.generate())
        });
      };
    }
  };
}

exports.default = HeadingId;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3BsdWdpbnMvaGVhZGluZy1pZC5lczYiXSwibmFtZXMiOlsiSGVhZGluZ0lkIiwib3B0cyIsIm1hdGNoIiwibm9kZSIsInR5cGUiLCJ2YWxpZGF0ZU5vZGUiLCJpbmRleE9mIiwidW5kZWZpbmVkIiwiZGF0YSIsImdldCIsImNoYW5nZSIsInNldE5vZGVCeUtleSIsImtleSIsInNldCIsImdlbmVyYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0E7Ozs7Ozs7O0FBUUEsU0FBU0EsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkJBLFNBQU9BLFFBQVEsRUFBZjtBQUNBQSxPQUFLQyxLQUFMLEdBQWFELEtBQUtDLEtBQUwsSUFBZTtBQUFBLFdBQVFDLEtBQUtDLElBQUwsS0FBY0gsS0FBS0csSUFBM0I7QUFBQSxHQUE1Qjs7QUFFQSxTQUFPO0FBQ0xDLGtCQUFjLDRCQUFRO0FBQ3BCLFVBQUksQ0FBQ0YsS0FBS0MsSUFBTixJQUFjRCxLQUFLQyxJQUFMLENBQVVFLE9BQVYsQ0FBa0IsVUFBbEIsTUFBa0MsQ0FBcEQsRUFBdUQ7QUFDckQsZUFBT0MsU0FBUDtBQUNEOztBQUVELFVBQUlKLEtBQUtLLElBQUwsQ0FBVUMsR0FBVixDQUFjLElBQWQsQ0FBSixFQUF5QjtBQUN2QixlQUFPRixTQUFQO0FBQ0Q7O0FBRUQsYUFBTztBQUFBLGVBQ0xHLE9BQU9DLFlBQVAsQ0FBb0JSLEtBQUtTLEdBQXpCLEVBQThCO0FBQzVCSixnQkFBTUwsS0FBS0ssSUFBTCxDQUFVSyxHQUFWLENBQWMsSUFBZCxFQUFvQixrQkFBUUMsUUFBUixFQUFwQjtBQURzQixTQUE5QixDQURLO0FBQUEsT0FBUDtBQUlEO0FBZEksR0FBUDtBQWdCRDs7a0JBRWNkLFMiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvcGx1Z2lucy9oZWFkaW5nLWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNob3J0SUQgZnJvbSAnc2hvcnRpZCc7XG4vKipcbiAqIFNsYXRlIHBsdWdpbiB0byBlbnN1cmUgYSB0cmFpbGluZyBibG9jay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c10gT3B0aW9ucyBmb3IgdGhlIHBsdWdpblxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IFtvcHRzLm1hdGNoPSdwYXJhZ3JhcGgnXSBNYXRjaCBsYXN0IGJsb2NrXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdHMudHlwZV0gVGhlIHR5cGUgb2YgdGhlIHRyYWlsaW5nIGJsb2NrIHRvIGluc2VydFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIEhlYWRpbmdJZChvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICBvcHRzLm1hdGNoID0gb3B0cy5tYXRjaCB8fCAobm9kZSA9PiBub2RlLnR5cGUgPT09IG9wdHMudHlwZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB2YWxpZGF0ZU5vZGU6IG5vZGUgPT4ge1xuICAgICAgaWYgKCFub2RlLnR5cGUgfHwgbm9kZS50eXBlLmluZGV4T2YoJ2hlYWRpbmctJykgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuZGF0YS5nZXQoJ2lkJykpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoYW5nZSA9PlxuICAgICAgICBjaGFuZ2Uuc2V0Tm9kZUJ5S2V5KG5vZGUua2V5LCB7XG4gICAgICAgICAgZGF0YTogbm9kZS5kYXRhLnNldCgnaWQnLCBTaG9ydElELmdlbmVyYXRlKCkpLFxuICAgICAgICB9KTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nSWQ7XG4iXX0=
