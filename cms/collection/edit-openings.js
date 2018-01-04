'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _olympFela = require('olymp-fela');

var _olympUi = require('olymp-ui');

var _formItem = require('./form-item');

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Footer = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    padding: theme.space2
  };
}, function (_ref2) {
  var onClose = _ref2.onClose,
      className = _ref2.className;
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      _button2.default,
      { type: 'primary', onClick: onClose },
      '\xDCbernehmen'
    )
  );
}, function (p) {
  return Object.keys(p);
});

var enhance = (0, _recompose.compose)((0, _recompose.withState)('isOpen', 'setOpen', false), _recompose.toClass);

exports.default = {
  rule: function rule(_ref3) {
    var type = _ref3.type;
    return type.kind === 'LIST' && type.ofType.name === 'TimeRange';
  },
  form: enhance(function (_ref4) {
    var isOpen = _ref4.isOpen,
        setOpen = _ref4.setOpen,
        dataField = _ref4['data-__field'],
        dataMeta = _ref4['data-__meta'],
        p = _objectWithoutProperties(_ref4, ['isOpen', 'setOpen', 'data-__field', 'data-__meta']);

    return _react2.default.createElement(
      _formItem2.default,
      p,
      _react2.default.createElement(
        _button2.default,
        {
          onClick: function onClick() {
            return setOpen(true);
          },
          'data-__field': dataField,
          'data-__meta': dataMeta
        },
        'Bearbeiten'
      ),
      _react2.default.createElement(
        _olympFela.Modal,
        {
          footer: _react2.default.createElement(Footer, { onClose: function onClose() {
              return setOpen(false);
            } }),
          open: isOpen,
          onClose: function onClose() {
            return setOpen(false);
          }
        },
        _react2.default.createElement(_olympUi.TimeRangesEditor, _extends({ style: { padding: 20 } }, p))
      )
    );
  })
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL2VkaXQtb3BlbmluZ3MuZXM2Il0sIm5hbWVzIjpbIkZvb3RlciIsInRoZW1lIiwicGFkZGluZyIsInNwYWNlMiIsIm9uQ2xvc2UiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJrZXlzIiwicCIsImVuaGFuY2UiLCJydWxlIiwidHlwZSIsImtpbmQiLCJvZlR5cGUiLCJuYW1lIiwiZm9ybSIsImlzT3BlbiIsInNldE9wZW4iLCJkYXRhRmllbGQiLCJkYXRhTWV0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVMsZ0NBQ2I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFnQjtBQUNkQyxhQUFTRCxNQUFNRTtBQURELEdBQWhCO0FBQUEsQ0FEYSxFQUliO0FBQUEsTUFBR0MsT0FBSCxTQUFHQSxPQUFIO0FBQUEsTUFBWUMsU0FBWixTQUFZQSxTQUFaO0FBQUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXQSxTQUFoQjtBQUNFO0FBQUE7QUFBQSxRQUFRLE1BQUssU0FBYixFQUF1QixTQUFTRCxPQUFoQztBQUFBO0FBQUE7QUFERixHQURGO0FBQUEsQ0FKYSxFQVdiO0FBQUEsU0FBS0UsT0FBT0MsSUFBUCxDQUFZQyxDQUFaLENBQUw7QUFBQSxDQVhhLENBQWY7O0FBY0EsSUFBTUMsVUFBVSx3QkFBUSwwQkFBVSxRQUFWLEVBQW9CLFNBQXBCLEVBQStCLEtBQS9CLENBQVIscUJBQWhCOztrQkFFZTtBQUNiQyxRQUFNO0FBQUEsUUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsV0FBY0EsS0FBS0MsSUFBTCxLQUFjLE1BQWQsSUFBd0JELEtBQUtFLE1BQUwsQ0FBWUMsSUFBWixLQUFxQixXQUEzRDtBQUFBLEdBRE87QUFFYkMsUUFBTU4sUUFDSjtBQUFBLFFBQ0VPLE1BREYsU0FDRUEsTUFERjtBQUFBLFFBRUVDLE9BRkYsU0FFRUEsT0FGRjtBQUFBLFFBR2tCQyxTQUhsQixTQUdFLGNBSEY7QUFBQSxRQUlpQkMsUUFKakIsU0FJRSxhQUpGO0FBQUEsUUFLS1gsQ0FMTCx5REFHRSxjQUhGLEVBSUUsYUFKRjs7QUFBQSxXQU9FO0FBQUE7QUFBY0EsT0FBZDtBQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFTO0FBQUEsbUJBQU1TLFFBQVEsSUFBUixDQUFOO0FBQUEsV0FEWDtBQUVFLDBCQUFjQyxTQUZoQjtBQUdFLHlCQUFhQztBQUhmO0FBQUE7QUFBQSxPQURGO0FBU0U7QUFBQTtBQUFBO0FBQ0Usa0JBQVEsOEJBQUMsTUFBRCxJQUFRLFNBQVM7QUFBQSxxQkFBTUYsUUFBUSxLQUFSLENBQU47QUFBQSxhQUFqQixHQURWO0FBRUUsZ0JBQU1ELE1BRlI7QUFHRSxtQkFBUztBQUFBLG1CQUFNQyxRQUFRLEtBQVIsQ0FBTjtBQUFBO0FBSFg7QUFLRSw0RUFBa0IsT0FBTyxFQUFFZixTQUFTLEVBQVgsRUFBekIsSUFBOENNLENBQTlDO0FBTEY7QUFURixLQVBGO0FBQUEsR0FESTtBQUZPLEMiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vZWRpdC1vcGVuaW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b0NsYXNzLCBjb21wb3NlLCB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBNb2RhbCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgVGltZVJhbmdlc0VkaXRvciB9IGZyb20gJ29seW1wLXVpJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4vZm9ybS1pdGVtJztcblxuY29uc3QgRm9vdGVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNlMixcbiAgfSksXG4gICh7IG9uQ2xvc2UsIGNsYXNzTmFtZSB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgIMOcYmVybmVobWVuXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKHdpdGhTdGF0ZSgnaXNPcGVuJywgJ3NldE9wZW4nLCBmYWxzZSksIHRvQ2xhc3MpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bGU6ICh7IHR5cGUgfSkgPT4gdHlwZS5raW5kID09PSAnTElTVCcgJiYgdHlwZS5vZlR5cGUubmFtZSA9PT0gJ1RpbWVSYW5nZScsXG4gIGZvcm06IGVuaGFuY2UoXG4gICAgKHtcbiAgICAgIGlzT3BlbixcbiAgICAgIHNldE9wZW4sXG4gICAgICAnZGF0YS1fX2ZpZWxkJzogZGF0YUZpZWxkLFxuICAgICAgJ2RhdGEtX19tZXRhJzogZGF0YU1ldGEsXG4gICAgICAuLi5wXG4gICAgfSkgPT4gKFxuICAgICAgPEZvcm1JdGVtIHsuLi5wfT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9XG4gICAgICAgICAgZGF0YS1fX2ZpZWxkPXtkYXRhRmllbGR9XG4gICAgICAgICAgZGF0YS1fX21ldGE9e2RhdGFNZXRhfVxuICAgICAgICA+XG4gICAgICAgICAgQmVhcmJlaXRlblxuICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBmb290ZXI9ezxGb290ZXIgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9IC8+fVxuICAgICAgICAgIG9wZW49e2lzT3Blbn1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUaW1lUmFuZ2VzRWRpdG9yIHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19IHsuLi5wfSAvPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9Gb3JtSXRlbT5cbiAgICApLFxuICApLFxufTtcbiJdfQ==
