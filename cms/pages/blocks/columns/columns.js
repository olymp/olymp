'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _olympSlate = require('olymp-slate');

var _faPlus = require('olymp-icons/lib/fa-plus');

var _faPlus2 = _interopRequireDefault(_faPlus);

var _faMinus = require('olymp-icons/lib/fa-minus');

var _faMinus2 = _interopRequireDefault(_faMinus);

var _column = require('./column');

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ctn = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    paddingTop: theme.space2,
    paddingX: theme.space3,
    hasFlex: {
      '> div': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }
  };
}, function (p) {
  return _react2.default.createElement(_olympFela.Container, p);
}, function (p) {
  return Object.keys(p);
});

exports.default = {
  type: 'Pages.Template.Columns',
  isVoid: false,
  kind: 'block',
  label: 'Spalten-Layout',
  category: 'Layout',
  defaultNodes: function defaultNodes() {
    return [_column2.default, _column2.default, _column2.default, _column2.default];
  },
  component: function component(_ref2) {
    var className = _ref2.className,
        children = _ref2.children,
        attributes = _ref2.attributes,
        getData = _ref2.getData;
    return _react2.default.createElement(
      Ctn,
      _extends({}, attributes, { className: className }),
      _react2.default.createElement(
        _olympFela.Grid,
        { size: getData('columns', 3) },
        children
      )
    );
  },
  actions: [{
    label: _react2.default.createElement(_faPlus2.default, null),
    tooltip: 'Spalte hinzufügen',
    toggle: function toggle(_ref3) {
      var value = _ref3.value,
          onChange = _ref3.onChange,
          schema = _ref3.schema,
          node = _ref3.node;

      onChange((0, _olympSlate.addBlock)(value, _column2.default, schema, node.key, node.size));
    }
  }, {
    label: _react2.default.createElement(_faMinus2.default, null),
    tooltip: 'Spalte entfernen',
    toggle: function toggle(_ref4) {
      var value = _ref4.value,
          onChange = _ref4.onChange,
          node = _ref4.node;

      if (node.nodes.last()) {
        onChange(value.change().removeNodeByKey(node.nodes.last().key));
      }
    }
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvY29sdW1ucy9jb2x1bW5zLmVzNiJdLCJuYW1lcyI6WyJDdG4iLCJ0aGVtZSIsInBhZGRpbmdUb3AiLCJzcGFjZTIiLCJwYWRkaW5nWCIsInNwYWNlMyIsImhhc0ZsZXgiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsInAiLCJPYmplY3QiLCJrZXlzIiwidHlwZSIsImlzVm9pZCIsImtpbmQiLCJsYWJlbCIsImNhdGVnb3J5IiwiZGVmYXVsdE5vZGVzIiwiY29tcG9uZW50IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhdHRyaWJ1dGVzIiwiZ2V0RGF0YSIsImFjdGlvbnMiLCJ0b29sdGlwIiwidG9nZ2xlIiwidmFsdWUiLCJvbkNoYW5nZSIsInNjaGVtYSIsIm5vZGUiLCJrZXkiLCJzaXplIiwibm9kZXMiLCJsYXN0IiwiY2hhbmdlIiwicmVtb3ZlTm9kZUJ5S2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxnQ0FDVjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLGdCQUFZRCxNQUFNRSxNQURKO0FBRWRDLGNBQVVILE1BQU1JLE1BRkY7QUFHZEMsYUFBUztBQUNQLGVBQVM7QUFDUEMsaUJBQVMsTUFERjtBQUVQQyxrQkFBVSxNQUZIO0FBR1BDLHdCQUFnQjtBQUhUO0FBREY7QUFISyxHQUFoQjtBQUFBLENBRFUsRUFZVjtBQUFBLFNBQUssb0RBQWVDLENBQWYsQ0FBTDtBQUFBLENBWlUsRUFhVjtBQUFBLFNBQUtDLE9BQU9DLElBQVAsQ0FBWUYsQ0FBWixDQUFMO0FBQUEsQ0FiVSxDQUFaOztrQkFnQmU7QUFDYkcsUUFBTSx3QkFETztBQUViQyxVQUFRLEtBRks7QUFHYkMsUUFBTSxPQUhPO0FBSWJDLFNBQU8sZ0JBSk07QUFLYkMsWUFBVSxRQUxHO0FBTWJDLGdCQUFjO0FBQUEsV0FBTSx3RUFBTjtBQUFBLEdBTkQ7QUFPYkMsYUFBVztBQUFBLFFBQUdDLFNBQUgsU0FBR0EsU0FBSDtBQUFBLFFBQWNDLFFBQWQsU0FBY0EsUUFBZDtBQUFBLFFBQXdCQyxVQUF4QixTQUF3QkEsVUFBeEI7QUFBQSxRQUFvQ0MsT0FBcEMsU0FBb0NBLE9BQXBDO0FBQUEsV0FDVDtBQUFDLFNBQUQ7QUFBQSxtQkFBU0QsVUFBVCxJQUFxQixXQUFXRixTQUFoQztBQUNFO0FBQUE7QUFBQSxVQUFNLE1BQU1HLFFBQVEsU0FBUixFQUFtQixDQUFuQixDQUFaO0FBQW9DRjtBQUFwQztBQURGLEtBRFM7QUFBQSxHQVBFO0FBWWJHLFdBQVMsQ0FDUDtBQUNFUixXQUFPLHFEQURUO0FBRUVTLGFBQVMsbUJBRlg7QUFHRUMsWUFBUSx1QkFBdUM7QUFBQSxVQUFwQ0MsS0FBb0MsU0FBcENBLEtBQW9DO0FBQUEsVUFBN0JDLFFBQTZCLFNBQTdCQSxRQUE2QjtBQUFBLFVBQW5CQyxNQUFtQixTQUFuQkEsTUFBbUI7QUFBQSxVQUFYQyxJQUFXLFNBQVhBLElBQVc7O0FBQzdDRixlQUFTLDBCQUFTRCxLQUFULG9CQUF3QkUsTUFBeEIsRUFBZ0NDLEtBQUtDLEdBQXJDLEVBQTBDRCxLQUFLRSxJQUEvQyxDQUFUO0FBQ0Q7QUFMSCxHQURPLEVBUVA7QUFDRWhCLFdBQU8sc0RBRFQ7QUFFRVMsYUFBUyxrQkFGWDtBQUdFQyxZQUFRLHVCQUErQjtBQUFBLFVBQTVCQyxLQUE0QixTQUE1QkEsS0FBNEI7QUFBQSxVQUFyQkMsUUFBcUIsU0FBckJBLFFBQXFCO0FBQUEsVUFBWEUsSUFBVyxTQUFYQSxJQUFXOztBQUNyQyxVQUFJQSxLQUFLRyxLQUFMLENBQVdDLElBQVgsRUFBSixFQUF1QjtBQUNyQk4saUJBQVNELE1BQU1RLE1BQU4sR0FBZUMsZUFBZixDQUErQk4sS0FBS0csS0FBTCxDQUFXQyxJQUFYLEdBQWtCSCxHQUFqRCxDQUFUO0FBQ0Q7QUFDRjtBQVBILEdBUk87QUFaSSxDIiwiZmlsZSI6ImNtcy9wYWdlcy9ibG9ja3MvY29sdW1ucy9jb2x1bW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBhZGRCbG9jayB9IGZyb20gJ29seW1wLXNsYXRlJztcbmltcG9ydCB7IEZhUGx1cywgRmFNaW51cyB9IGZyb20gJ29seW1wLWljb25zJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4nO1xuXG5jb25zdCBDdG4gPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2UyLFxuICAgIHBhZGRpbmdYOiB0aGVtZS5zcGFjZTMsXG4gICAgaGFzRmxleDoge1xuICAgICAgJz4gZGl2Jzoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIHAgPT4gPENvbnRhaW5lciB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdQYWdlcy5UZW1wbGF0ZS5Db2x1bW5zJyxcbiAgaXNWb2lkOiBmYWxzZSxcbiAga2luZDogJ2Jsb2NrJyxcbiAgbGFiZWw6ICdTcGFsdGVuLUxheW91dCcsXG4gIGNhdGVnb3J5OiAnTGF5b3V0JyxcbiAgZGVmYXVsdE5vZGVzOiAoKSA9PiBbQ29sdW1uLCBDb2x1bW4sIENvbHVtbiwgQ29sdW1uXSxcbiAgY29tcG9uZW50OiAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBhdHRyaWJ1dGVzLCBnZXREYXRhIH0pID0+IChcbiAgICA8Q3RuIHsuLi5hdHRyaWJ1dGVzfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8R3JpZCBzaXplPXtnZXREYXRhKCdjb2x1bW5zJywgMyl9PntjaGlsZHJlbn08L0dyaWQ+XG4gICAgPC9DdG4+XG4gICksXG4gIGFjdGlvbnM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogPEZhUGx1cyAvPixcbiAgICAgIHRvb2x0aXA6ICdTcGFsdGUgaGluenVmw7xnZW4nLFxuICAgICAgdG9nZ2xlOiAoeyB2YWx1ZSwgb25DaGFuZ2UsIHNjaGVtYSwgbm9kZSB9KSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKGFkZEJsb2NrKHZhbHVlLCBDb2x1bW4sIHNjaGVtYSwgbm9kZS5rZXksIG5vZGUuc2l6ZSkpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiA8RmFNaW51cyAvPixcbiAgICAgIHRvb2x0aXA6ICdTcGFsdGUgZW50ZmVybmVuJyxcbiAgICAgIHRvZ2dsZTogKHsgdmFsdWUsIG9uQ2hhbmdlLCBub2RlIH0pID0+IHtcbiAgICAgICAgaWYgKG5vZGUubm9kZXMubGFzdCgpKSB7XG4gICAgICAgICAgb25DaGFuZ2UodmFsdWUuY2hhbmdlKCkucmVtb3ZlTm9kZUJ5S2V5KG5vZGUubm9kZXMubGFzdCgpLmtleSkpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuIl19
