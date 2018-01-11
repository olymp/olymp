'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _olympSlate = require('olymp-slate');

var _recompose = require('recompose');

var _olympFela = require('olymp-fela');

var _helmet = require('olymp-utils/helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _query = require('./gql/query');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Page = function Page(_ref) {
  var children = _ref.children,
      isLoading = _ref.isLoading,
      pathname = _ref.pathname,
      props = _objectWithoutProperties(_ref, ['children', 'isLoading', 'pathname']);

  return _react2.default.createElement(
    _olympFela.ContentLoader,
    { isLoading: isLoading },
    _react2.default.createElement(
      _olympSlate.SlateReader,
      _extends({}, props, { key: props.id + (props.bindingId || '') }),
      (0, _helmet2.default)(_extends({}, (0, _get3.default)(props, 'binding.blocks', {}), (0, _get3.default)(props, 'binding', {})), pathname),
      children
    )
  );
};

Page.propTypes = {
  item: _propTypes.object,
  onChange: _propTypes.func,
  readOnly: _propTypes.bool
};
Page.defaultProps = {
  item: {},
  readOnly: true
};
Page.WithData = (0, _query.queryPage)((0, _recompose.withProps)(function (_ref2) {
  var item = _ref2.item,
      data = _ref2.data;
  return {
    value: item && item.blocks,
    binding: item,
    readOnly: true,
    isLoading: data.loading
  };
})(Page));
exports.default = Page;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9yZWFkZXIuZXM2Il0sIm5hbWVzIjpbIlBhZ2UiLCJjaGlsZHJlbiIsImlzTG9hZGluZyIsInBhdGhuYW1lIiwicHJvcHMiLCJpZCIsImJpbmRpbmdJZCIsInByb3BUeXBlcyIsIml0ZW0iLCJvbkNoYW5nZSIsInJlYWRPbmx5IiwiZGVmYXVsdFByb3BzIiwiV2l0aERhdGEiLCJkYXRhIiwidmFsdWUiLCJibG9ja3MiLCJiaW5kaW5nIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxTQUFiLFFBQWFBLFNBQWI7QUFBQSxNQUF3QkMsUUFBeEIsUUFBd0JBLFFBQXhCO0FBQUEsTUFBcUNDLEtBQXJDOztBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQWUsV0FBV0YsU0FBMUI7QUFDRTtBQUFBO0FBQUEsbUJBQWlCRSxLQUFqQixJQUF3QixLQUFLQSxNQUFNQyxFQUFOLElBQVlELE1BQU1FLFNBQU4sSUFBbUIsRUFBL0IsQ0FBN0I7QUFDRyx5Q0FDTSxtQkFBSUYsS0FBSixFQUFXLGdCQUFYLEVBQTZCLEVBQTdCLENBRE4sRUFDMkMsbUJBQUlBLEtBQUosRUFBVyxTQUFYLEVBQXNCLEVBQXRCLENBRDNDLEdBRUNELFFBRkQsQ0FESDtBQUtHRjtBQUxIO0FBREYsR0FEVztBQUFBLENBQWI7O0FBWUFELEtBQUtPLFNBQUwsR0FBaUI7QUFDZkMseUJBRGU7QUFFZkMsMkJBRmU7QUFHZkM7QUFIZSxDQUFqQjtBQUtBVixLQUFLVyxZQUFMLEdBQW9CO0FBQ2xCSCxRQUFNLEVBRFk7QUFFbEJFLFlBQVU7QUFGUSxDQUFwQjtBQUlBVixLQUFLWSxRQUFMLEdBQWdCLHNCQUNkLDBCQUFVO0FBQUEsTUFBR0osSUFBSCxTQUFHQSxJQUFIO0FBQUEsTUFBU0ssSUFBVCxTQUFTQSxJQUFUO0FBQUEsU0FBcUI7QUFDN0JDLFdBQU9OLFFBQVFBLEtBQUtPLE1BRFM7QUFFN0JDLGFBQVNSLElBRm9CO0FBRzdCRSxjQUFVLElBSG1CO0FBSTdCUixlQUFXVyxLQUFLSTtBQUphLEdBQXJCO0FBQUEsQ0FBVixFQUtJakIsSUFMSixDQURjLENBQWhCO2tCQVFlQSxJIiwiZmlsZSI6ImNtcy9wYWdlcy9yZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JqZWN0LCBmdW5jLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTbGF0ZVJlYWRlciB9IGZyb20gJ29seW1wLXNsYXRlJztcbmltcG9ydCB7IHdpdGhQcm9wcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBDb250ZW50TG9hZGVyIH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgcmVuZGVySGVsbWV0IGZyb20gJ29seW1wLXV0aWxzL2hlbG1ldCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgcXVlcnlQYWdlIH0gZnJvbSAnLi9ncWwvcXVlcnknO1xuXG5jb25zdCBQYWdlID0gKHsgY2hpbGRyZW4sIGlzTG9hZGluZywgcGF0aG5hbWUsIC4uLnByb3BzIH0pID0+IChcbiAgPENvbnRlbnRMb2FkZXIgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxuICAgIDxTbGF0ZVJlYWRlciB7Li4ucHJvcHN9IGtleT17cHJvcHMuaWQgKyAocHJvcHMuYmluZGluZ0lkIHx8ICcnKX0+XG4gICAgICB7cmVuZGVySGVsbWV0KFxuICAgICAgICB7IC4uLmdldChwcm9wcywgJ2JpbmRpbmcuYmxvY2tzJywge30pLCAuLi5nZXQocHJvcHMsICdiaW5kaW5nJywge30pIH0sXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NsYXRlUmVhZGVyPlxuICA8L0NvbnRlbnRMb2FkZXI+XG4pO1xuXG5QYWdlLnByb3BUeXBlcyA9IHtcbiAgaXRlbTogb2JqZWN0LFxuICBvbkNoYW5nZTogZnVuYyxcbiAgcmVhZE9ubHk6IGJvb2wsXG59O1xuUGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGl0ZW06IHt9LFxuICByZWFkT25seTogdHJ1ZSxcbn07XG5QYWdlLldpdGhEYXRhID0gcXVlcnlQYWdlKFxuICB3aXRoUHJvcHMoKHsgaXRlbSwgZGF0YSB9KSA9PiAoe1xuICAgIHZhbHVlOiBpdGVtICYmIGl0ZW0uYmxvY2tzLFxuICAgIGJpbmRpbmc6IGl0ZW0sXG4gICAgcmVhZE9ubHk6IHRydWUsXG4gICAgaXNMb2FkaW5nOiBkYXRhLmxvYWRpbmcsXG4gIH0pKShQYWdlKSxcbik7XG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl19
