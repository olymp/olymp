var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { Raw } from 'slate';
import { Record } from 'immutable';
// import markdownparser from './markdownparser'

var String = new Record({
  kind: 'string',
  text: ''
});

var RULES = [{
  serialize: function serialize(obj, children) {
    if (obj.kind === 'string') {
      return children;
    }
  }
}, {
  serialize: function serialize(obj, children) {
    if (obj.kind !== 'block') return undefined;

    switch (obj.type) {
      case 'paragraph':
        return '\n' + children + '\n';
      case 'block-quote':
        return '> ' + children + '\n';
      case 'bulleted-list':
        return children;
      case 'list-item':
        return '* ' + children + '\n';
      case 'heading1':
        return '# ' + children;
      case 'heading2':
        return '## ' + children;
      case 'heading3':
        return '### ' + children;
      case 'heading4':
        return '#### ' + children;
      case 'heading5':
        return '##### ' + children;
      case 'heading6':
        return '###### ' + children;
      case 'horizontal-rule':
        return '---';
      case 'image':
        var title = obj.getIn(['data', 'title']);
        var src = obj.getIn(['data', 'src']);
        var alt = obj.getIn(['data', 'alt']);
        return '![' + title + '](' + src + ' "' + alt + '")';
      default:
        return undefined;
    }
  }
}, {
  serialize: function serialize(obj, children) {
    if (obj.kind !== 'inline') return;
    switch (obj.type) {
      case 'link':
        return '[' + children + '](' + obj.getIn(['data', 'href']) + ')';
    }
  }
},
// Add a new rule that handles marks...
{
  serialize: function serialize(obj, children) {
    if (obj.kind != 'mark') return;
    switch (obj.type) {
      case 'bold':
        return '**' + children + '**';
      case 'italic':
        return '*' + children + '*';
      case 'code':
        return '`' + children + '`';
      case 'inserted':
        return '__' + children + '__';
      case 'deleted':
        return '~~' + children + '~~';
    }
  }
}];

var Markdown = function () {
  function Markdown() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Markdown);

    this.rules = [].concat(_toConsumableArray(options.rules || []), RULES);
    this.serializeNode = this.serializeNode.bind(this);
    this.serializeRange = this.serializeRange.bind(this);
    this.serializeString = this.serializeString.bind(this);
  }

  _createClass(Markdown, [{
    key: 'serialize',
    value: function serialize(state) {
      var document = state.document;

      var elements = document.nodes.map(this.serializeNode);

      return elements.join('\n').trim();
    }
  }, {
    key: 'serializeNode',
    value: function serializeNode(node) {
      if (node.kind == 'text') {
        var ranges = node.getRanges();
        return ranges.map(this.serializeRange);
      }

      var children = node.nodes.map(this.serializeNode);
      children = children.flatten().length === 0 ? '' : children.flatten().join('');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var rule = _step.value;

          if (!rule.serialize) continue;
          var ret = rule.serialize(node, children);
          if (ret) return ret;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'serializeRange',
    value: function serializeRange(range) {
      var _this = this;

      var string = new String({ text: range.text });
      var text = this.serializeString(string);

      return range.marks.reduce(function (children, mark) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _this.rules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var rule = _step2.value;

            if (!rule.serialize) continue;
            var ret = rule.serialize(mark, children);
            if (ret) return ret;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }, text);
    }
  }, {
    key: 'serializeString',
    value: function serializeString(string) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.rules[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var rule = _step3.value;

          if (!rule.serialize) continue;
          var ret = rule.serialize(string, string.text);
          if (ret) return ret;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'deserialize',
    value: function deserialize(markdown) {
      var nodes = markdownparser.parse(markdown);
      var state = Raw.deserialize(nodes, { terse: true });
      return state;
    }
  }]);

  return Markdown;
}();

export default Markdown;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3JlbmRlcmVyL21hcmtkb3duLmVzNiJdLCJuYW1lcyI6WyJSYXciLCJSZWNvcmQiLCJTdHJpbmciLCJraW5kIiwidGV4dCIsIlJVTEVTIiwic2VyaWFsaXplIiwib2JqIiwiY2hpbGRyZW4iLCJ1bmRlZmluZWQiLCJ0eXBlIiwidGl0bGUiLCJnZXRJbiIsInNyYyIsImFsdCIsIk1hcmtkb3duIiwib3B0aW9ucyIsInJ1bGVzIiwic2VyaWFsaXplTm9kZSIsImJpbmQiLCJzZXJpYWxpemVSYW5nZSIsInNlcmlhbGl6ZVN0cmluZyIsInN0YXRlIiwiZG9jdW1lbnQiLCJlbGVtZW50cyIsIm5vZGVzIiwibWFwIiwiam9pbiIsInRyaW0iLCJub2RlIiwicmFuZ2VzIiwiZ2V0UmFuZ2VzIiwiZmxhdHRlbiIsImxlbmd0aCIsInJ1bGUiLCJyZXQiLCJyYW5nZSIsInN0cmluZyIsIm1hcmtzIiwicmVkdWNlIiwibWFyayIsIm1hcmtkb3duIiwibWFya2Rvd25wYXJzZXIiLCJwYXJzZSIsImRlc2VyaWFsaXplIiwidGVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLEdBQVQsUUFBb0IsT0FBcEI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLFdBQXZCO0FBQ0E7O0FBRUEsSUFBTUMsU0FBUyxJQUFJRCxNQUFKLENBQVc7QUFDeEJFLFFBQU0sUUFEa0I7QUFFeEJDLFFBQU07QUFGa0IsQ0FBWCxDQUFmOztBQUtBLElBQU1DLFFBQVEsQ0FDWjtBQUNFQyxXQURGLHFCQUNZQyxHQURaLEVBQ2lCQyxRQURqQixFQUMyQjtBQUN2QixRQUFJRCxJQUFJSixJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekIsYUFBT0ssUUFBUDtBQUNEO0FBQ0Y7QUFMSCxDQURZLEVBUVo7QUFDRUYsV0FERixxQkFDWUMsR0FEWixFQUNpQkMsUUFEakIsRUFDMkI7QUFDdkIsUUFBSUQsSUFBSUosSUFBSixLQUFhLE9BQWpCLEVBQTBCLE9BQU9NLFNBQVA7O0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTTdDLE9BTk0sRUFNSi9CLElBTkksQ0FBUDtBQU9EOzs7b0NBRWVpQyxNLEVBQVE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDdEIsOEJBQW1CLEtBQUtwQixLQUF4QixtSUFBK0I7QUFBQSxjQUFwQmlCLElBQW9COztBQUM3QixjQUFJLENBQUNBLEtBQUs1QixTQUFWLEVBQXFCO0FBQ3JCLGNBQU02QixNQUFNRCxLQUFLNUIsU0FBTCxDQUFlK0IsTUFBZixFQUF1QkEsT0FBT2pDLElBQTlCLENBQVo7QUFDQSxjQUFJK0IsR0FBSixFQUFTLE9BQU9BLEdBQVA7QUFDVjtBQUxxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTXZCOzs7Z0NBRVdNLFEsRUFBVTtBQUNwQixVQUFNaEIsUUFBUWlCLGVBQWVDLEtBQWYsQ0FBcUJGLFFBQXJCLENBQWQ7QUFDQSxVQUFNbkIsUUFBUXRCLElBQUk0QyxXQUFKLENBQWdCbkIsS0FBaEIsRUFBdUIsRUFBRW9CLE9BQU8sSUFBVCxFQUF2QixDQUFkO0FBQ0EsYUFBT3ZCLEtBQVA7QUFDRDs7Ozs7O0FBRUgsZUFBZVAsUUFBZiIsImZpbGUiOiJwYWNrYWdlcy9zbGF0ZS9yZW5kZXJlci9tYXJrZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhdyB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IFJlY29yZCB9IGZyb20gJ2ltbXV0YWJsZSc7XG4vLyBpbXBvcnQgbWFya2Rvd25wYXJzZXIgZnJvbSAnLi9tYXJrZG93bnBhcnNlcidcblxuY29uc3QgU3RyaW5nID0gbmV3IFJlY29yZCh7XG4gIGtpbmQ6ICdzdHJpbmcnLFxuICB0ZXh0OiAnJyxcbn0pO1xuXG5jb25zdCBSVUxFUyA9IFtcbiAge1xuICAgIHNlcmlhbGl6ZShvYmosIGNoaWxkcmVuKSB7XG4gICAgICBpZiAob2JqLmtpbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICB7XG4gICAgc2VyaWFsaXplKG9iaiwgY2hpbGRyZW4pIHtcbiAgICAgIGlmIChvYmoua2luZCAhPT0gJ2Jsb2NrJykgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgc3dpdGNoIChvYmoudHlwZSkge1xuICAgICAgICBjYXNlICdwYXJhZ3JhcGgnOlxuICAgICAgICAgIHJldHVybiBgXFxuJHtjaGlsZHJlbn1cXG5gO1xuICAgICAgICBjYXNlICdibG9jay1xdW90ZSc6XG4gICAgICAgICAgcmV0dXJuIGA+ICR7Y2hpbGRyZW59XFxuYDtcbiAgICAgICAgY2FzZSAnYnVsbGV0ZWQtbGlzdCc6XG4gICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBjYXNlICdsaXN0LWl0ZW0nOlxuICAgICAgICAgIHJldHVybiBgKiAke2NoaWxkcmVufVxcbmA7XG4gICAgICAgIGNhc2UgJ2hlYWRpbmcxJzpcbiAgICAgICAgICByZXR1cm4gYCMgJHtjaGlsZHJlbn1gO1xuICAgICAgICBjYXNlICdoZWFkaW5nMic6XG4gICAgICAgICAgcmV0dXJuIGAjIyAke2NoaWxkcmVufWA7XG4gICAgICAgIGNhc2UgJ2hlYWRpbmczJzpcbiAgICAgICAgICByZXR1cm4gYCMjIyAke2NoaWxkcmVufWA7XG4gICAgICAgIGNhc2UgJ2hlYWRpbmc0JzpcbiAgICAgICAgICByZXR1cm4gYCMjIyMgJHtjaGlsZHJlbn1gO1xuICAgICAgICBjYXNlICdoZWFkaW5nNSc6XG4gICAgICAgICAgcmV0dXJuIGAjIyMjIyAke2NoaWxkcmVufWA7XG4gICAgICAgIGNhc2UgJ2hlYWRpbmc2JzpcbiAgICAgICAgICByZXR1cm4gYCMjIyMjIyAke2NoaWxkcmVufWA7XG4gICAgICAgIGNhc2UgJ2hvcml6b250YWwtcnVsZSc6XG4gICAgICAgICAgcmV0dXJuIGAtLS1gO1xuICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgY29uc3QgdGl0bGUgPSBvYmouZ2V0SW4oWydkYXRhJywgJ3RpdGxlJ10pO1xuICAgICAgICAgIGNvbnN0IHNyYyA9IG9iai5nZXRJbihbJ2RhdGEnLCAnc3JjJ10pO1xuICAgICAgICAgIGNvbnN0IGFsdCA9IG9iai5nZXRJbihbJ2RhdGEnLCAnYWx0J10pO1xuICAgICAgICAgIHJldHVybiBgIVske3RpdGxlfV0oJHtzcmN9IFwiJHthbHR9XCIpYDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBzZXJpYWxpemUob2JqLCBjaGlsZHJlbikge1xuICAgICAgaWYgKG9iai5raW5kICE9PSAnaW5saW5lJykgcmV0dXJuO1xuICAgICAgc3dpdGNoIChvYmoudHlwZSkge1xuICAgICAgICBjYXNlICdsaW5rJzpcbiAgICAgICAgICByZXR1cm4gYFske2NoaWxkcmVufV0oJHtvYmouZ2V0SW4oWydkYXRhJywgJ2hyZWYnXSl9KWA7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgLy8gQWRkIGEgbmV3IHJ1bGUgdGhhdCBoYW5kbGVzIG1hcmtzLi4uXG4gIHtcbiAgICBzZXJpYWxpemUob2JqLCBjaGlsZHJlbikge1xuICAgICAgaWYgKG9iai5raW5kICE9ICdtYXJrJykgcmV0dXJuO1xuICAgICAgc3dpdGNoIChvYmoudHlwZSkge1xuICAgICAgICBjYXNlICdib2xkJzpcbiAgICAgICAgICByZXR1cm4gYCoqJHtjaGlsZHJlbn0qKmA7XG4gICAgICAgIGNhc2UgJ2l0YWxpYyc6XG4gICAgICAgICAgcmV0dXJuIGAqJHtjaGlsZHJlbn0qYDtcbiAgICAgICAgY2FzZSAnY29kZSc6XG4gICAgICAgICAgcmV0dXJuIGBcXGAke2NoaWxkcmVufVxcYGA7XG4gICAgICAgIGNhc2UgJ2luc2VydGVkJzpcbiAgICAgICAgICByZXR1cm4gYF9fJHtjaGlsZHJlbn1fX2A7XG4gICAgICAgIGNhc2UgJ2RlbGV0ZWQnOlxuICAgICAgICAgIHJldHVybiBgfn4ke2NoaWxkcmVufX5+YDtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXTtcblxuY2xhc3MgTWFya2Rvd24ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnJ1bGVzID0gWy4uLihvcHRpb25zLnJ1bGVzIHx8IFtdKSwgLi4uUlVMRVNdO1xuICAgIHRoaXMuc2VyaWFsaXplTm9kZSA9IHRoaXMuc2VyaWFsaXplTm9kZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VyaWFsaXplUmFuZ2UgPSB0aGlzLnNlcmlhbGl6ZVJhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXJpYWxpemVTdHJpbmcgPSB0aGlzLnNlcmlhbGl6ZVN0cmluZy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2VyaWFsaXplKHN0YXRlKSB7XG4gICAgY29uc3QgeyBkb2N1bWVudCB9ID0gc3RhdGU7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5ub2Rlcy5tYXAodGhpcy5zZXJpYWxpemVOb2RlKTtcblxuICAgIHJldHVybiBlbGVtZW50cy5qb2luKCdcXG4nKS50cmltKCk7XG4gIH1cblxuICBzZXJpYWxpemVOb2RlKG5vZGUpIHtcbiAgICBpZiAobm9kZS5raW5kID09ICd0ZXh0Jykge1xuICAgICAgY29uc3QgcmFuZ2VzID0gbm9kZS5nZXRSYW5nZXMoKTtcbiAgICAgIHJldHVybiByYW5nZXMubWFwKHRoaXMuc2VyaWFsaXplUmFuZ2UpO1xuICAgIH1cblxuICAgIGxldCBjaGlsZHJlbiA9IG5vZGUubm9kZXMubWFwKHRoaXMuc2VyaWFsaXplTm9kZSk7XG4gICAgY2hpbGRyZW4gPVxuICAgICAgY2hpbGRyZW4uZmxhdHRlbigpLmxlbmd0aCA9PT0gMCA/ICcnIDogY2hpbGRyZW4uZmxhdHRlbigpLmpvaW4oJycpO1xuXG4gICAgZm9yIChjb25zdCBydWxlIG9mIHRoaXMucnVsZXMpIHtcbiAgICAgIGlmICghcnVsZS5zZXJpYWxpemUpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgcmV0ID0gcnVsZS5zZXJpYWxpemUobm9kZSwgY2hpbGRyZW4pO1xuICAgICAgaWYgKHJldCkgcmV0dXJuIHJldDtcbiAgICB9XG4gIH1cblxuICBzZXJpYWxpemVSYW5nZShyYW5nZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5ldyBTdHJpbmcoeyB0ZXh0OiByYW5nZS50ZXh0IH0pO1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLnNlcmlhbGl6ZVN0cmluZyhzdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJhbmdlLm1hcmtzLnJlZHVjZSgoY2hpbGRyZW4sIG1hcmspID0+IHtcbiAgICAgIGZvciAoY29uc3QgcnVsZSBvZiB0aGlzLnJ1bGVzKSB7XG4gICAgICAgIGlmICghcnVsZS5zZXJpYWxpemUpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCByZXQgPSBydWxlLnNlcmlhbGl6ZShtYXJrLCBjaGlsZHJlbik7XG4gICAgICAgIGlmIChyZXQpIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgfSwgdGV4dCk7XG4gIH1cblxuICBzZXJpYWxpemVTdHJpbmcoc3RyaW5nKSB7XG4gICAgZm9yIChjb25zdCBydWxlIG9mIHRoaXMucnVsZXMpIHtcbiAgICAgIGlmICghcnVsZS5zZXJpYWxpemUpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgcmV0ID0gcnVsZS5zZXJpYWxpemUoc3RyaW5nLCBzdHJpbmcudGV4dCk7XG4gICAgICBpZiAocmV0KSByZXR1cm4gcmV0O1xuICAgIH1cbiAgfVxuXG4gIGRlc2VyaWFsaXplKG1hcmtkb3duKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBtYXJrZG93bnBhcnNlci5wYXJzZShtYXJrZG93bik7XG4gICAgY29uc3Qgc3RhdGUgPSBSYXcuZGVzZXJpYWxpemUobm9kZXMsIHsgdGVyc2U6IHRydWUgfSk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bjtcbiJdfQ==
