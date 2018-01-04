'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getId = exports.getText = exports.getHeaders = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var map = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6
};

var getHeaders = exports.getHeaders = function getHeaders(nodes) {
  var headers = [];
  var getHeadersNested = function getHeadersNested(_ref) {
    var kind = _ref.kind,
        type = _ref.type,
        nodes = _ref.nodes;

    if (type && type.indexOf('heading-') === 0) {
      var size = map[type.split('-')[1]];
      var text = getText(nodes);
      var slug = text.toLowerCase().replace(/[\s!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '-');
      headers.push({ id: _shortid2.default.generate(), text: text, slug: slug, children: [] });
    }
    (nodes || []).map(getHeadersNested);
  };
  (nodes || []).map(getHeadersNested);

  var newHeaders = [];
  var currentPath = [];
  headers.forEach(function (header) {
    var lastItem = currentPath.length && currentPath[currentPath.length - 1];
    var mod = lastItem && header.size - lastItem.size || 0;
    if (mod > 0) {
      // is deeper into tree
      currentPath = [].concat(_toConsumableArray(currentPath), [header]);
    } else {
      currentPath = [].concat(_toConsumableArray(currentPath.slice(0, currentPath.length - 1 + mod)), [header]);
    }
    var parent = currentPath.length > 1 && currentPath[currentPath.length - 2];
    if (parent && parent !== header) {
      parent.children.push(header);
    } else {
      newHeaders.push(header);
    }
  });
  return newHeaders;
};
var getText = exports.getText = function getText(children) {
  var res = '';
  if (!children) {
    return '';
  }
  if (Array.isArray(children)) {
    return children.map(function (x) {
      return getText(x);
    }).join();
  }
  if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object') {
    if (children.nodes) {
      res += getText(children.nodes);
    } else if (children.text) {
      res += children.text;
    }
  }
  return res;
};
var getId = exports.getId = function getId(x) {
  return getText(x).toLowerCase().replace(/[\s!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '-');
};
exports.default = getText;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3V0aWxzL2dldC1oZWFkZXJzLmVzNiJdLCJuYW1lcyI6WyJtYXAiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsImZvdXIiLCJmaXZlIiwic2l4IiwiZ2V0SGVhZGVycyIsIm5vZGVzIiwiaGVhZGVycyIsImdldEhlYWRlcnNOZXN0ZWQiLCJraW5kIiwidHlwZSIsImluZGV4T2YiLCJzaXplIiwic3BsaXQiLCJ0ZXh0IiwiZ2V0VGV4dCIsInNsdWciLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJwdXNoIiwiaWQiLCJnZW5lcmF0ZSIsImNoaWxkcmVuIiwibmV3SGVhZGVycyIsImN1cnJlbnRQYXRoIiwiZm9yRWFjaCIsImhlYWRlciIsImxhc3RJdGVtIiwibGVuZ3RoIiwibW9kIiwic2xpY2UiLCJwYXJlbnQiLCJyZXMiLCJBcnJheSIsImlzQXJyYXkiLCJ4Iiwiam9pbiIsImdldElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNO0FBQ1ZDLE9BQUssQ0FESztBQUVWQyxPQUFLLENBRks7QUFHVkMsU0FBTyxDQUhHO0FBSVZDLFFBQU0sQ0FKSTtBQUtWQyxRQUFNLENBTEk7QUFNVkMsT0FBSztBQU5LLENBQVo7O0FBU08sSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDbkMsTUFBTUMsVUFBVSxFQUFoQjtBQUNBLE1BQU1DLG1CQUFtQixTQUFuQkEsZ0JBQW1CLE9BQTJCO0FBQUEsUUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLFFBQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxRQUFaSixLQUFZLFFBQVpBLEtBQVk7O0FBQ2xELFFBQUlJLFFBQVFBLEtBQUtDLE9BQUwsQ0FBYSxVQUFiLE1BQTZCLENBQXpDLEVBQTRDO0FBQzFDLFVBQU1DLE9BQU9kLElBQUlZLEtBQUtHLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQUosQ0FBYjtBQUNBLFVBQU1DLE9BQU9DLFFBQVFULEtBQVIsQ0FBYjtBQUNBLFVBQU1VLE9BQU9GLEtBQ1ZHLFdBRFUsR0FFVkMsT0FGVSxDQUVGLHFEQUZFLEVBRXFELEdBRnJELENBQWI7QUFHQVgsY0FBUVksSUFBUixDQUFhLEVBQUVDLElBQUksa0JBQVFDLFFBQVIsRUFBTixFQUEwQlAsVUFBMUIsRUFBZ0NFLFVBQWhDLEVBQXNDTSxVQUFVLEVBQWhELEVBQWI7QUFDRDtBQUNELEtBQUNoQixTQUFTLEVBQVYsRUFBY1IsR0FBZCxDQUFrQlUsZ0JBQWxCO0FBQ0QsR0FWRDtBQVdBLEdBQUNGLFNBQVMsRUFBVixFQUFjUixHQUFkLENBQWtCVSxnQkFBbEI7O0FBRUEsTUFBTWUsYUFBYSxFQUFuQjtBQUNBLE1BQUlDLGNBQWMsRUFBbEI7QUFDQWpCLFVBQVFrQixPQUFSLENBQWdCLFVBQUNDLE1BQUQsRUFBWTtBQUMxQixRQUFNQyxXQUFXSCxZQUFZSSxNQUFaLElBQXNCSixZQUFZQSxZQUFZSSxNQUFaLEdBQXFCLENBQWpDLENBQXZDO0FBQ0EsUUFBTUMsTUFBT0YsWUFBWUQsT0FBT2QsSUFBUCxHQUFjZSxTQUFTZixJQUFwQyxJQUE2QyxDQUF6RDtBQUNBLFFBQUlpQixNQUFNLENBQVYsRUFBYTtBQUNYO0FBQ0FMLGlEQUFrQkEsV0FBbEIsSUFBK0JFLE1BQS9CO0FBQ0QsS0FIRCxNQUdPO0FBQ0xGLGlEQUFrQkEsWUFBWU0sS0FBWixDQUFrQixDQUFsQixFQUFxQk4sWUFBWUksTUFBWixHQUFxQixDQUFyQixHQUF5QkMsR0FBOUMsQ0FBbEIsSUFBc0VILE1BQXRFO0FBQ0Q7QUFDRCxRQUFNSyxTQUFTUCxZQUFZSSxNQUFaLEdBQXFCLENBQXJCLElBQTBCSixZQUFZQSxZQUFZSSxNQUFaLEdBQXFCLENBQWpDLENBQXpDO0FBQ0EsUUFBSUcsVUFBVUEsV0FBV0wsTUFBekIsRUFBaUM7QUFDL0JLLGFBQU9ULFFBQVAsQ0FBZ0JILElBQWhCLENBQXFCTyxNQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMSCxpQkFBV0osSUFBWCxDQUFnQk8sTUFBaEI7QUFDRDtBQUNGLEdBZkQ7QUFnQkEsU0FBT0gsVUFBUDtBQUNELENBbENNO0FBbUNBLElBQU1SLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQ08sUUFBRCxFQUFjO0FBQ25DLE1BQUlVLE1BQU0sRUFBVjtBQUNBLE1BQUksQ0FBQ1YsUUFBTCxFQUFlO0FBQ2IsV0FBTyxFQUFQO0FBQ0Q7QUFDRCxNQUFJVyxNQUFNQyxPQUFOLENBQWNaLFFBQWQsQ0FBSixFQUE2QjtBQUMzQixXQUFPQSxTQUFTeEIsR0FBVCxDQUFhO0FBQUEsYUFBS2lCLFFBQVFvQixDQUFSLENBQUw7QUFBQSxLQUFiLEVBQThCQyxJQUE5QixFQUFQO0FBQ0Q7QUFDRCxNQUFJLFFBQU9kLFFBQVAseUNBQU9BLFFBQVAsT0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsUUFBSUEsU0FBU2hCLEtBQWIsRUFBb0I7QUFDbEIwQixhQUFPakIsUUFBUU8sU0FBU2hCLEtBQWpCLENBQVA7QUFDRCxLQUZELE1BRU8sSUFBSWdCLFNBQVNSLElBQWIsRUFBbUI7QUFDeEJrQixhQUFPVixTQUFTUixJQUFoQjtBQUNEO0FBQ0Y7QUFDRCxTQUFPa0IsR0FBUDtBQUNELENBaEJNO0FBaUJBLElBQU1LLHdCQUFRLFNBQVJBLEtBQVE7QUFBQSxTQUNuQnRCLFFBQVFvQixDQUFSLEVBQ0dsQixXQURILEdBRUdDLE9BRkgsQ0FFVyxxREFGWCxFQUVrRSxHQUZsRSxDQURtQjtBQUFBLENBQWQ7a0JBSVFILE8iLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvdXRpbHMvZ2V0LWhlYWRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcblxuY29uc3QgbWFwID0ge1xuICBvbmU6IDEsXG4gIHR3bzogMixcbiAgdGhyZWU6IDMsXG4gIGZvdXI6IDQsXG4gIGZpdmU6IDUsXG4gIHNpeDogNixcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRIZWFkZXJzID0gKG5vZGVzKSA9PiB7XG4gIGNvbnN0IGhlYWRlcnMgPSBbXTtcbiAgY29uc3QgZ2V0SGVhZGVyc05lc3RlZCA9ICh7IGtpbmQsIHR5cGUsIG5vZGVzIH0pID0+IHtcbiAgICBpZiAodHlwZSAmJiB0eXBlLmluZGV4T2YoJ2hlYWRpbmctJykgPT09IDApIHtcbiAgICAgIGNvbnN0IHNpemUgPSBtYXBbdHlwZS5zcGxpdCgnLScpWzFdXTtcbiAgICAgIGNvbnN0IHRleHQgPSBnZXRUZXh0KG5vZGVzKTtcbiAgICAgIGNvbnN0IHNsdWcgPSB0ZXh0XG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXFxzIVxcXCIjJCUmJ1xcKFxcKVxcKlxcKyxcXC5cXC86Ozw9PlxcP1xcQFxcW1xcXFxcXF1cXF5gXFx7XFx8XFx9fl0vZywgJy0nKTtcbiAgICAgIGhlYWRlcnMucHVzaCh7IGlkOiBzaG9ydElkLmdlbmVyYXRlKCksIHRleHQsIHNsdWcsIGNoaWxkcmVuOiBbXSB9KTtcbiAgICB9XG4gICAgKG5vZGVzIHx8IFtdKS5tYXAoZ2V0SGVhZGVyc05lc3RlZCk7XG4gIH07XG4gIChub2RlcyB8fCBbXSkubWFwKGdldEhlYWRlcnNOZXN0ZWQpO1xuXG4gIGNvbnN0IG5ld0hlYWRlcnMgPSBbXTtcbiAgbGV0IGN1cnJlbnRQYXRoID0gW107XG4gIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyKSA9PiB7XG4gICAgY29uc3QgbGFzdEl0ZW0gPSBjdXJyZW50UGF0aC5sZW5ndGggJiYgY3VycmVudFBhdGhbY3VycmVudFBhdGgubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbW9kID0gKGxhc3RJdGVtICYmIGhlYWRlci5zaXplIC0gbGFzdEl0ZW0uc2l6ZSkgfHwgMDtcbiAgICBpZiAobW9kID4gMCkge1xuICAgICAgLy8gaXMgZGVlcGVyIGludG8gdHJlZVxuICAgICAgY3VycmVudFBhdGggPSBbLi4uY3VycmVudFBhdGgsIGhlYWRlcl07XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRQYXRoID0gWy4uLmN1cnJlbnRQYXRoLnNsaWNlKDAsIGN1cnJlbnRQYXRoLmxlbmd0aCAtIDEgKyBtb2QpLCBoZWFkZXJdO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50UGF0aC5sZW5ndGggPiAxICYmIGN1cnJlbnRQYXRoW2N1cnJlbnRQYXRoLmxlbmd0aCAtIDJdO1xuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50ICE9PSBoZWFkZXIpIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKGhlYWRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0hlYWRlcnMucHVzaChoZWFkZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdIZWFkZXJzO1xufTtcbmV4cG9ydCBjb25zdCBnZXRUZXh0ID0gKGNoaWxkcmVuKSA9PiB7XG4gIGxldCByZXMgPSAnJztcbiAgaWYgKCFjaGlsZHJlbikge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICByZXR1cm4gY2hpbGRyZW4ubWFwKHggPT4gZ2V0VGV4dCh4KSkuam9pbigpO1xuICB9XG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKGNoaWxkcmVuLm5vZGVzKSB7XG4gICAgICByZXMgKz0gZ2V0VGV4dChjaGlsZHJlbi5ub2Rlcyk7XG4gICAgfSBlbHNlIGlmIChjaGlsZHJlbi50ZXh0KSB7XG4gICAgICByZXMgKz0gY2hpbGRyZW4udGV4dDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5leHBvcnQgY29uc3QgZ2V0SWQgPSB4ID0+XG4gIGdldFRleHQoeClcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9bXFxzIVxcXCIjJCUmJ1xcKFxcKVxcKlxcKyxcXC5cXC86Ozw9PlxcP1xcQFxcW1xcXFxcXF1cXF5gXFx7XFx8XFx9fl0vZywgJy0nKTtcbmV4cG9ydCBkZWZhdWx0IGdldFRleHQ7XG4iXX0=
