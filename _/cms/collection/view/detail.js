'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _olympFela = require('olymp-fela');

var _withItem = require('../with-item');

var _withItem2 = _interopRequireDefault(_withItem);

var _form3 = require('../form');

var _form4 = _interopRequireDefault(_form3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var enhance = (0, _recompose.compose)(_form2.default.create(), _withItem2.default);

var CollectionDetail = enhance(function (_ref) {
  var id = _ref.id,
      item = _ref.item,
      onSave = _ref.onSave,
      onClone = _ref.onClone,
      rest = _objectWithoutProperties(_ref, ['id', 'item', 'onSave', 'onClone']);

  return _react2.default.createElement(
    _olympFela.ContentLoader,
    { isLoading: id && !item },
    _react2.default.createElement(_form4.default, _extends({}, rest, {
      id: id,
      item: item || {},
      onSave: onSave,
      onCreate: onSave
    }))
  );
});

CollectionDetail.displayName = 'CollectionDetail';
exports.default = CollectionDetail;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jb2xsZWN0aW9uL3ZpZXcvZGV0YWlsLmVzNiJdLCJuYW1lcyI6WyJlbmhhbmNlIiwiY3JlYXRlIiwiQ29sbGVjdGlvbkRldGFpbCIsImlkIiwiaXRlbSIsIm9uU2F2ZSIsIm9uQ2xvbmUiLCJyZXN0IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFVBQVUsd0JBQVEsZUFBS0MsTUFBTCxFQUFSLHFCQUFoQjs7QUFFQSxJQUFNQyxtQkFBbUJGLFFBQVE7QUFBQSxNQUFHRyxFQUFILFFBQUdBLEVBQUg7QUFBQSxNQUFPQyxJQUFQLFFBQU9BLElBQVA7QUFBQSxNQUFhQyxNQUFiLFFBQWFBLE1BQWI7QUFBQSxNQUFxQkMsT0FBckIsUUFBcUJBLE9BQXJCO0FBQUEsTUFBaUNDLElBQWpDOztBQUFBLFNBQy9CO0FBQUE7QUFBQSxNQUFlLFdBQVdKLE1BQU0sQ0FBQ0MsSUFBakM7QUFDRSwrREFDTUcsSUFETjtBQUVFLFVBQUlKLEVBRk47QUFHRSxZQUFNQyxRQUFRLEVBSGhCO0FBSUUsY0FBUUMsTUFKVjtBQUtFLGdCQUFVQTtBQUxaO0FBREYsR0FEK0I7QUFBQSxDQUFSLENBQXpCOztBQVlBSCxpQkFBaUJNLFdBQWpCLEdBQStCLGtCQUEvQjtrQkFDZU4sZ0IiLCJmaWxlIjoiY21zL2NvbGxlY3Rpb24vdmlldy9kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBDb250ZW50TG9hZGVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgd2l0aEl0ZW0gZnJvbSAnLi4vd2l0aC1pdGVtJztcbmltcG9ydCBEZXRhaWxGb3JtIGZyb20gJy4uL2Zvcm0nO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShGb3JtLmNyZWF0ZSgpLCB3aXRoSXRlbSk7XG5cbmNvbnN0IENvbGxlY3Rpb25EZXRhaWwgPSBlbmhhbmNlKCh7IGlkLCBpdGVtLCBvblNhdmUsIG9uQ2xvbmUsIC4uLnJlc3QgfSkgPT4gKFxuICA8Q29udGVudExvYWRlciBpc0xvYWRpbmc9e2lkICYmICFpdGVtfT5cbiAgICA8RGV0YWlsRm9ybVxuICAgICAgey4uLnJlc3R9XG4gICAgICBpZD17aWR9XG4gICAgICBpdGVtPXtpdGVtIHx8IHt9fVxuICAgICAgb25TYXZlPXtvblNhdmV9XG4gICAgICBvbkNyZWF0ZT17b25TYXZlfVxuICAgIC8+XG4gIDwvQ29udGVudExvYWRlcj5cbikpO1xuXG5Db2xsZWN0aW9uRGV0YWlsLmRpc3BsYXlOYW1lID0gJ0NvbGxlY3Rpb25EZXRhaWwnO1xuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbkRldGFpbDtcbiJdfQ==
