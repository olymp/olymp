'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

require('antd/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withItems = require('./with-items');

var _withItems2 = _interopRequireDefault(_withItems);

var _withCollection = require('./with-collection');

var _withCollection2 = _interopRequireDefault(_withCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailEditor = (0, _withCollection2.default)(_class = (0, _withItems2.default)(_class = function (_Component) {
  _inherits(DetailEditor, _Component);

  function DetailEditor() {
    _classCallCheck(this, DetailEditor);

    return _possibleConstructorReturn(this, (DetailEditor.__proto__ || Object.getPrototypeOf(DetailEditor)).apply(this, arguments));
  }

  _createClass(DetailEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          collection = _props.collection,
          items = _props.items,
          children = _props.children,
          value = _props.value,
          _onChange = _props.onChange,
          mode = _props.mode,
          rest = _objectWithoutProperties(_props, ['data', 'collection', 'items', 'children', 'value', 'onChange', 'mode']);

      return items && items.length ? _react2.default.createElement(
        _select2.default,
        _extends({
          value: value,
          onChange: function onChange(val) {
            return mode === 'tags' && Array.isArray(val) ? _onChange(val.map(function (id) {
              return items.find(function (i) {
                return i.id === id;
              });
            })) : _onChange(val);
          },
          mode: mode
        }, rest, {
          style: { width: '100%' }
        }),
        items.map(function (item) {
          return _react2.default.createElement(
            _select2.default.Option,
            { key: item.id, value: item.id },
            item.name
          );
        })
      ) : _react2.default.createElement(_select2.default, _extends({}, rest, { disabled: true }));
    }
  }]);

  return DetailEditor;
}(_react.Component)) || _class) || _class;

exports.default = DetailEditor;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3JlbC1lZGl0b3IuZXM2Il0sIm5hbWVzIjpbIkRldGFpbEVkaXRvciIsInByb3BzIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJpdGVtcyIsImNoaWxkcmVuIiwidmFsdWUiLCJvbkNoYW5nZSIsIm1vZGUiLCJyZXN0IiwibGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwidmFsIiwibWFwIiwiZmluZCIsImkiLCJpZCIsIndpZHRoIiwiaXRlbSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBSXFCQSxZOzs7Ozs7Ozs7Ozs2QkFDVjtBQUFBLG1CQVVILEtBQUtDLEtBVkY7QUFBQSxVQUVMQyxJQUZLLFVBRUxBLElBRks7QUFBQSxVQUdMQyxVQUhLLFVBR0xBLFVBSEs7QUFBQSxVQUlMQyxLQUpLLFVBSUxBLEtBSks7QUFBQSxVQUtMQyxRQUxLLFVBS0xBLFFBTEs7QUFBQSxVQU1MQyxLQU5LLFVBTUxBLEtBTks7QUFBQSxVQU9MQyxTQVBLLFVBT0xBLFFBUEs7QUFBQSxVQVFMQyxJQVJLLFVBUUxBLElBUks7QUFBQSxVQVNGQyxJQVRFOztBQVlQLGFBQU9MLFNBQVNBLE1BQU1NLE1BQWYsR0FDTDtBQUFBO0FBQUE7QUFDRSxpQkFBT0osS0FEVDtBQUVFLG9CQUFVO0FBQUEsbUJBQ1JFLFNBQVMsTUFBVCxJQUFtQkcsTUFBTUMsT0FBTixDQUFjQyxHQUFkLENBQW5CLEdBQ0lOLFVBQVNNLElBQUlDLEdBQUosQ0FBUTtBQUFBLHFCQUFNVixNQUFNVyxJQUFOLENBQVc7QUFBQSx1QkFBS0MsRUFBRUMsRUFBRixLQUFTQSxFQUFkO0FBQUEsZUFBWCxDQUFOO0FBQUEsYUFBUixDQUFULENBREosR0FFSVYsVUFBU00sR0FBVCxDQUhJO0FBQUEsV0FGWjtBQU1FLGdCQUFNTDtBQU5SLFdBT01DLElBUE47QUFRRSxpQkFBTyxFQUFFUyxPQUFPLE1BQVQ7QUFSVDtBQVVHZCxjQUFNVSxHQUFOLENBQVU7QUFBQSxpQkFDVDtBQUFBLDZCQUFRLE1BQVI7QUFBQSxjQUFlLEtBQUtLLEtBQUtGLEVBQXpCLEVBQTZCLE9BQU9FLEtBQUtGLEVBQXpDO0FBQ0dFLGlCQUFLQztBQURSLFdBRFM7QUFBQSxTQUFWO0FBVkgsT0FESyxHQWtCTCw2REFBWVgsSUFBWixJQUFrQixjQUFsQixJQWxCRjtBQW9CRDs7Ozs7O2tCQWpDa0JULFkiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vcmVsLWVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCB3aXRoSXRlbXMgZnJvbSAnLi93aXRoLWl0ZW1zJztcbmltcG9ydCB3aXRoQ29sbGVjdGlvbiBmcm9tICcuL3dpdGgtY29sbGVjdGlvbic7XG5cbkB3aXRoQ29sbGVjdGlvblxuQHdpdGhJdGVtc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGEsXG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgaXRlbXMsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHZhbHVlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBtb2RlLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA/IChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17dmFsID0+XG4gICAgICAgICAgbW9kZSA9PT0gJ3RhZ3MnICYmIEFycmF5LmlzQXJyYXkodmFsKVxuICAgICAgICAgICAgPyBvbkNoYW5nZSh2YWwubWFwKGlkID0+IGl0ZW1zLmZpbmQoaSA9PiBpLmlkID09PSBpZCkpKVxuICAgICAgICAgICAgOiBvbkNoYW5nZSh2YWwpfVxuICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgPlxuICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PlxuICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9TZWxlY3Q+XG4gICAgKSA6IChcbiAgICAgIDxTZWxlY3Qgey4uLnJlc3R9IGRpc2FibGVkIC8+XG4gICAgKTtcbiAgfVxufVxuIl19
