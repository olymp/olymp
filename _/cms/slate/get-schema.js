'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _reactFela = require('react-fela');

var _useBlockBase = require('./use-block-base');

var _useBlockBase2 = _interopRequireDefault(_useBlockBase);

var _registry = require('./registry');

var _registry2 = _interopRequireDefault(_registry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var convert = function convert(schema) {
  return Object.keys(schema.nodes).reduce(function (result, key) {
    var _schema$nodes$key = schema.nodes[key],
        type = _schema$nodes$key.type,
        _schema$nodes$key$isV = _schema$nodes$key.isVoid,
        isVoid = _schema$nodes$key$isV === undefined ? false : _schema$nodes$key$isV,
        styles = _schema$nodes$key.styles,
        _schema$nodes$key$kin = _schema$nodes$key.kind,
        kind = _schema$nodes$key$kin === undefined ? 'block' : _schema$nodes$key$kin,
        slate = _schema$nodes$key.slate,
        rest = _objectWithoutProperties(_schema$nodes$key, ['type', 'isVoid', 'styles', 'kind', 'slate']);

    var component = schema.nodes[key].component;

    if (styles && (typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object') {
      component = (0, _reactFela.createComponent)(function () {
        return styles;
      }, component, function (p) {
        return Object.keys(p);
      });
    }
    if (styles && typeof styles === 'function') {
      component = (0, _reactFela.createComponent)(styles, component, function (p) {
        return Object.keys(p);
      });
    }

    result[type] = (0, _useBlockBase2.default)(_extends({}, slate, rest, {
      schema: schema,
      isVoid: isVoid,
      kind: kind,
      type: type
    }))(component);
    return result;
  }, {});
};

exports.default = (0, _recompose.compose)((0, _recompose.withPropsOnChange)(['blockTypes'], function (_ref) {
  var blockTypes = _ref.blockTypes,
      _renderNode = _ref.renderNode;

  var nodes = convert({ nodes: blockTypes || _registry2.default.blocks });
  return {
    schema: { nodes: nodes },
    renderNode: function renderNode(props) {
      var v = _renderNode && _renderNode(props);
      if (v !== undefined) {
        return v;
      }
      var Com = nodes[props.node.type] || null;
      if (Com) {
        return _react2.default.createElement(Com, props);
      }
      return null;
    }
  };
}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL2dldC1zY2hlbWEuZXM2Il0sIm5hbWVzIjpbImNvbnZlcnQiLCJPYmplY3QiLCJrZXlzIiwic2NoZW1hIiwibm9kZXMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJrZXkiLCJ0eXBlIiwiaXNWb2lkIiwic3R5bGVzIiwia2luZCIsInNsYXRlIiwicmVzdCIsImNvbXBvbmVudCIsInAiLCJibG9ja1R5cGVzIiwicmVuZGVyTm9kZSIsImJsb2NrcyIsInYiLCJwcm9wcyIsInVuZGVmaW5lZCIsIkNvbSIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsU0FDZEMsT0FBT0MsSUFBUCxDQUFZQyxPQUFPQyxLQUFuQixFQUEwQkMsTUFBMUIsQ0FBaUMsVUFBQ0MsTUFBRCxFQUFTQyxHQUFULEVBQWlCO0FBQUEsNEJBUTVDSixPQUFPQyxLQUFQLENBQWFHLEdBQWIsQ0FSNEM7QUFBQSxRQUU5Q0MsSUFGOEMscUJBRTlDQSxJQUY4QztBQUFBLGtEQUc5Q0MsTUFIOEM7QUFBQSxRQUc5Q0EsTUFIOEMseUNBR3JDLEtBSHFDO0FBQUEsUUFJOUNDLE1BSjhDLHFCQUk5Q0EsTUFKOEM7QUFBQSxrREFLOUNDLElBTDhDO0FBQUEsUUFLOUNBLElBTDhDLHlDQUt2QyxPQUx1QztBQUFBLFFBTTlDQyxLQU44QyxxQkFNOUNBLEtBTjhDO0FBQUEsUUFPM0NDLElBUDJDOztBQUFBLFFBUzFDQyxTQVQwQyxHQVM1QlgsT0FBT0MsS0FBUCxDQUFhRyxHQUFiLENBVDRCLENBUzFDTyxTQVQwQzs7QUFVaEQsUUFBSUosVUFBVSxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQWhDLEVBQTBDO0FBQ3hDSSxrQkFBWSxnQ0FBZ0I7QUFBQSxlQUFNSixNQUFOO0FBQUEsT0FBaEIsRUFBOEJJLFNBQTlCLEVBQXlDO0FBQUEsZUFBS2IsT0FBT0MsSUFBUCxDQUFZYSxDQUFaLENBQUw7QUFBQSxPQUF6QyxDQUFaO0FBQ0Q7QUFDRCxRQUFJTCxVQUFVLE9BQU9BLE1BQVAsS0FBa0IsVUFBaEMsRUFBNEM7QUFDMUNJLGtCQUFZLGdDQUFnQkosTUFBaEIsRUFBd0JJLFNBQXhCLEVBQW1DO0FBQUEsZUFBS2IsT0FBT0MsSUFBUCxDQUFZYSxDQUFaLENBQUw7QUFBQSxPQUFuQyxDQUFaO0FBQ0Q7O0FBRURULFdBQU9FLElBQVAsSUFBZSx5Q0FDVkksS0FEVSxFQUVWQyxJQUZVO0FBR2JWLG9CQUhhO0FBSWJNLG9CQUphO0FBS2JFLGdCQUxhO0FBTWJIO0FBTmEsUUFPWk0sU0FQWSxDQUFmO0FBUUEsV0FBT1IsTUFBUDtBQUNELEdBMUJELEVBMEJHLEVBMUJILENBRGM7QUFBQSxDQUFoQjs7a0JBNkJlLHdCQUNiLGtDQUFrQixDQUFDLFlBQUQsQ0FBbEIsRUFBa0MsZ0JBQWdDO0FBQUEsTUFBN0JVLFVBQTZCLFFBQTdCQSxVQUE2QjtBQUFBLE1BQWpCQyxXQUFpQixRQUFqQkEsVUFBaUI7O0FBQ2hFLE1BQU1iLFFBQVFKLFFBQVEsRUFBRUksT0FBT1ksY0FBYyxtQkFBU0UsTUFBaEMsRUFBUixDQUFkO0FBQ0EsU0FBTztBQUNMZixZQUFRLEVBQUVDLFlBQUYsRUFESDtBQUVMYSxnQkFBWSwyQkFBUztBQUNuQixVQUFNRSxJQUFJRixlQUFjQSxZQUFXRyxLQUFYLENBQXhCO0FBQ0EsVUFBSUQsTUFBTUUsU0FBVixFQUFxQjtBQUNuQixlQUFPRixDQUFQO0FBQ0Q7QUFDRCxVQUFNRyxNQUFNbEIsTUFBTWdCLE1BQU1HLElBQU4sQ0FBV2YsSUFBakIsS0FBMEIsSUFBdEM7QUFDQSxVQUFJYyxHQUFKLEVBQVM7QUFDUCxlQUFPLDhCQUFDLEdBQUQsRUFBU0YsS0FBVCxDQUFQO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDtBQVpJLEdBQVA7QUFjRCxDQWhCRCxDQURhLEMiLCJmaWxlIjoiZXh0ZXJuYWwvc2xhdGUvZ2V0LXNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHNPbkNoYW5nZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB1c2VCbG9ja0Jhc2UgZnJvbSAnLi91c2UtYmxvY2stYmFzZSc7XG5pbXBvcnQgcmVnaXN0cnkgZnJvbSAnLi9yZWdpc3RyeSc7XG5cbmNvbnN0IGNvbnZlcnQgPSBzY2hlbWEgPT5cbiAgT2JqZWN0LmtleXMoc2NoZW1hLm5vZGVzKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIGlzVm9pZCA9IGZhbHNlLFxuICAgICAgc3R5bGVzLFxuICAgICAga2luZCA9ICdibG9jaycsXG4gICAgICBzbGF0ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gc2NoZW1hLm5vZGVzW2tleV07XG4gICAgbGV0IHsgY29tcG9uZW50IH0gPSBzY2hlbWEubm9kZXNba2V5XTtcbiAgICBpZiAoc3R5bGVzICYmIHR5cGVvZiBzdHlsZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQoKCkgPT4gc3R5bGVzLCBjb21wb25lbnQsIHAgPT4gT2JqZWN0LmtleXMocCkpO1xuICAgIH1cbiAgICBpZiAoc3R5bGVzICYmIHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudChzdHlsZXMsIGNvbXBvbmVudCwgcCA9PiBPYmplY3Qua2V5cyhwKSk7XG4gICAgfVxuXG4gICAgcmVzdWx0W3R5cGVdID0gdXNlQmxvY2tCYXNlKHtcbiAgICAgIC4uLnNsYXRlLFxuICAgICAgLi4ucmVzdCxcbiAgICAgIHNjaGVtYSxcbiAgICAgIGlzVm9pZCxcbiAgICAgIGtpbmQsXG4gICAgICB0eXBlLFxuICAgIH0pKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ2Jsb2NrVHlwZXMnXSwgKHsgYmxvY2tUeXBlcywgcmVuZGVyTm9kZSB9KSA9PiB7XG4gICAgY29uc3Qgbm9kZXMgPSBjb252ZXJ0KHsgbm9kZXM6IGJsb2NrVHlwZXMgfHwgcmVnaXN0cnkuYmxvY2tzIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBzY2hlbWE6IHsgbm9kZXMgfSxcbiAgICAgIHJlbmRlck5vZGU6IHByb3BzID0+IHtcbiAgICAgICAgY29uc3QgdiA9IHJlbmRlck5vZGUgJiYgcmVuZGVyTm9kZShwcm9wcyk7XG4gICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBDb20gPSBub2Rlc1twcm9wcy5ub2RlLnR5cGVdIHx8IG51bGw7XG4gICAgICAgIGlmIChDb20pIHtcbiAgICAgICAgICByZXR1cm4gPENvbSB7Li4ucHJvcHN9IC8+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9O1xuICB9KSxcbik7XG4iXX0=
