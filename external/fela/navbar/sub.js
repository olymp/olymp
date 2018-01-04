'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _reactFela.createComponent)(function (_ref) {
  var theme = _ref.theme,
      fill = _ref.fill,
      vertically = _ref.vertically,
      right = _ref.right;
  return {
    float: right ? 'right' : 'left',
    width: fill && '100%',
    height: !vertically && '100%',
    minWidth: vertically ? '100%' : 'auto',
    marginLeft: right && 'auto',
    borderTop: vertically && (0, _olympFela.border)(theme, theme.dark4),
    ifMini: {
      float: 'none',
      width: '100%',
      borderRight: 0,
      // borderTop: border(theme, theme.dark4),
      clear: 'both'
    },
    ifMediumUp: {
      display: vertically ? 'none' : 'block',
      hasFlex: {
        display: vertically ? 'none' : 'flex',
        flex: fill && '1 1 auto',
        alignItems: 'stretch',
        flexDirection: vertically ? 'column' : 'row'
      }
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      pages = _ref2.pages,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ['className', 'pages', 'children']);

  return _react2.default.createElement(
    'div',
    { className: className },
    pages.map(function (_ref3, i) {
      var childPages = _ref3.children,
          page = _objectWithoutProperties(_ref3, ['children']);

      return props.renderItem(_extends({}, page, {
        title: page.name,
        pages: childPages,
        key: page.id || i
      }, props));
    }),
    _react.Children.map(children, function (child) {
      return (0, _react.cloneElement)(child, props);
    })
  );
}, function (p) {
  return Object.keys(p);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbmF2YmFyL3N1Yi5lczYiXSwibmFtZXMiOlsidGhlbWUiLCJmaWxsIiwidmVydGljYWxseSIsInJpZ2h0IiwiZmxvYXQiLCJ3aWR0aCIsImhlaWdodCIsIm1pbldpZHRoIiwibWFyZ2luTGVmdCIsImJvcmRlclRvcCIsImRhcms0IiwiaWZNaW5pIiwiYm9yZGVyUmlnaHQiLCJjbGVhciIsImlmTWVkaXVtVXAiLCJkaXNwbGF5IiwiaGFzRmxleCIsImZsZXgiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImNsYXNzTmFtZSIsInBhZ2VzIiwiY2hpbGRyZW4iLCJwcm9wcyIsIm1hcCIsImkiLCJjaGlsZFBhZ2VzIiwicGFnZSIsInJlbmRlckl0ZW0iLCJ0aXRsZSIsIm5hbWUiLCJrZXkiLCJpZCIsImNoaWxkIiwiT2JqZWN0Iiwia2V5cyIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O2tCQUVlLGdDQUNiO0FBQUEsTUFBR0EsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsTUFBZ0JDLFVBQWhCLFFBQWdCQSxVQUFoQjtBQUFBLE1BQTRCQyxLQUE1QixRQUE0QkEsS0FBNUI7QUFBQSxTQUF5QztBQUN2Q0MsV0FBT0QsUUFBUSxPQUFSLEdBQWtCLE1BRGM7QUFFdkNFLFdBQU9KLFFBQVEsTUFGd0I7QUFHdkNLLFlBQVEsQ0FBQ0osVUFBRCxJQUFlLE1BSGdCO0FBSXZDSyxjQUFVTCxhQUFhLE1BQWIsR0FBc0IsTUFKTztBQUt2Q00sZ0JBQVlMLFNBQVMsTUFMa0I7QUFNdkNNLGVBQVdQLGNBQWMsdUJBQU9GLEtBQVAsRUFBY0EsTUFBTVUsS0FBcEIsQ0FOYztBQU92Q0MsWUFBUTtBQUNOUCxhQUFPLE1BREQ7QUFFTkMsYUFBTyxNQUZEO0FBR05PLG1CQUFhLENBSFA7QUFJTjtBQUNBQyxhQUFPO0FBTEQsS0FQK0I7QUFjdkNDLGdCQUFZO0FBQ1ZDLGVBQVNiLGFBQWEsTUFBYixHQUFzQixPQURyQjtBQUVWYyxlQUFTO0FBQ1BELGlCQUFTYixhQUFhLE1BQWIsR0FBc0IsTUFEeEI7QUFFUGUsY0FBTWhCLFFBQVEsVUFGUDtBQUdQaUIsb0JBQVksU0FITDtBQUlQQyx1QkFBZWpCLGFBQWEsUUFBYixHQUF3QjtBQUpoQztBQUZDO0FBZDJCLEdBQXpDO0FBQUEsQ0FEYSxFQXlCYjtBQUFBLE1BQUdrQixTQUFILFNBQUdBLFNBQUg7QUFBQSxNQUFjQyxLQUFkLFNBQWNBLEtBQWQ7QUFBQSxNQUFxQkMsUUFBckIsU0FBcUJBLFFBQXJCO0FBQUEsTUFBa0NDLEtBQWxDOztBQUFBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBV0gsU0FBaEI7QUFDR0MsVUFBTUcsR0FBTixDQUFVLGlCQUFvQ0MsQ0FBcEM7QUFBQSxVQUFhQyxVQUFiLFNBQUdKLFFBQUg7QUFBQSxVQUE0QkssSUFBNUI7O0FBQUEsYUFDVEosTUFBTUssVUFBTixjQUNLRCxJQURMO0FBRUVFLGVBQU9GLEtBQUtHLElBRmQ7QUFHRVQsZUFBT0ssVUFIVDtBQUlFSyxhQUFLSixLQUFLSyxFQUFMLElBQVdQO0FBSmxCLFNBS0tGLEtBTEwsRUFEUztBQUFBLEtBQVYsQ0FESDtBQVdHLG9CQUFTQyxHQUFULENBQWFGLFFBQWIsRUFBdUI7QUFBQSxhQUFTLHlCQUFhVyxLQUFiLEVBQW9CVixLQUFwQixDQUFUO0FBQUEsS0FBdkI7QUFYSCxHQURGO0FBQUEsQ0F6QmEsRUF3Q2I7QUFBQSxTQUFLVyxPQUFPQyxJQUFQLENBQVlDLENBQVosQ0FBTDtBQUFBLENBeENhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9uYXZiYXIvc3ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IGJvcmRlciB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBmaWxsLCB2ZXJ0aWNhbGx5LCByaWdodCB9KSA9PiAoe1xuICAgIGZsb2F0OiByaWdodCA/ICdyaWdodCcgOiAnbGVmdCcsXG4gICAgd2lkdGg6IGZpbGwgJiYgJzEwMCUnLFxuICAgIGhlaWdodDogIXZlcnRpY2FsbHkgJiYgJzEwMCUnLFxuICAgIG1pbldpZHRoOiB2ZXJ0aWNhbGx5ID8gJzEwMCUnIDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQ6IHJpZ2h0ICYmICdhdXRvJyxcbiAgICBib3JkZXJUb3A6IHZlcnRpY2FsbHkgJiYgYm9yZGVyKHRoZW1lLCB0aGVtZS5kYXJrNCksXG4gICAgaWZNaW5pOiB7XG4gICAgICBmbG9hdDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvcmRlclJpZ2h0OiAwLFxuICAgICAgLy8gYm9yZGVyVG9wOiBib3JkZXIodGhlbWUsIHRoZW1lLmRhcms0KSxcbiAgICAgIGNsZWFyOiAnYm90aCcsXG4gICAgfSxcbiAgICBpZk1lZGl1bVVwOiB7XG4gICAgICBkaXNwbGF5OiB2ZXJ0aWNhbGx5ID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAgIGhhc0ZsZXg6IHtcbiAgICAgICAgZGlzcGxheTogdmVydGljYWxseSA/ICdub25lJyA6ICdmbGV4JyxcbiAgICAgICAgZmxleDogZmlsbCAmJiAnMSAxIGF1dG8nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IHZlcnRpY2FsbHkgPyAnY29sdW1uJyA6ICdyb3cnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBwYWdlcywgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtwYWdlcy5tYXAoKHsgY2hpbGRyZW46IGNoaWxkUGFnZXMsIC4uLnBhZ2UgfSwgaSkgPT5cbiAgICAgICAgcHJvcHMucmVuZGVySXRlbSh7XG4gICAgICAgICAgLi4ucGFnZSxcbiAgICAgICAgICB0aXRsZTogcGFnZS5uYW1lLFxuICAgICAgICAgIHBhZ2VzOiBjaGlsZFBhZ2VzLFxuICAgICAgICAgIGtleTogcGFnZS5pZCB8fCBpLFxuICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICB9KSxcbiAgICAgICl9XG5cbiAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IGNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpKX1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG4iXX0=
