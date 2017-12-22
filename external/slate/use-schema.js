var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { compose, withPropsOnChange, withContext } from 'recompose';
import useBlockBase from './use-block-base';
import registry from './registry';

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
      component = createComponent(function () {
        return styles;
      }, component, function (p) {
        return Object.keys(p);
      });
    }
    if (styles && typeof styles === 'function') {
      component = createComponent(styles, component, function (p) {
        return Object.keys(p);
      });
    }

    result[type] = useBlockBase(_extends({}, slate, rest, {
      schema: schema,
      isVoid: isVoid,
      kind: kind,
      type: type
    }))(component);
    return result;
  }, {});
};

export default compose(withPropsOnChange(['blockTypes'], function (_ref) {
  var _ref$blockTypes = _ref.blockTypes,
      blockTypes = _ref$blockTypes === undefined ? {} : _ref$blockTypes;

  var nodes = convert({ nodes: _extends({}, registry.blocks, blockTypes) });
  return {
    schema: { nodes: nodes },
    renderNode: function renderNode(props) {
      var Com = nodes[props.node.type] || null;
      if (Com) {
        return React.createElement(Com, props);
      }
      return null;
    }
  };
}), withContext({
  renderNode: PropTypes.func,
  schema: PropTypes.object
}, function (_ref2) {
  var schema = _ref2.schema,
      renderNode = _ref2.renderNode;
  return {
    schema: schema,
    renderNode: renderNode
  };
}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3VzZS1zY2hlbWEuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY3JlYXRlQ29tcG9uZW50IiwiY29tcG9zZSIsIndpdGhQcm9wc09uQ2hhbmdlIiwid2l0aENvbnRleHQiLCJ1c2VCbG9ja0Jhc2UiLCJyZWdpc3RyeSIsImNvbnZlcnQiLCJPYmplY3QiLCJrZXlzIiwic2NoZW1hIiwibm9kZXMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJrZXkiLCJ0eXBlIiwiaXNWb2lkIiwic3R5bGVzIiwia2luZCIsInNsYXRlIiwicmVzdCIsImNvbXBvbmVudCIsInAiLCJibG9ja1R5cGVzIiwiYmxvY2tzIiwicmVuZGVyTm9kZSIsIkNvbSIsInByb3BzIiwibm9kZSIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLGlCQUFsQixFQUFxQ0MsV0FBckMsUUFBd0QsV0FBeEQ7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGtCQUF6QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsWUFBckI7O0FBRUEsSUFBTUMsVUFBVSxTQUFWQSxPQUFVO0FBQUEsU0FDZEMsT0FBT0MsSUFBUCxDQUFZQyxPQUFPQyxLQUFuQixFQUEwQkMsTUFBMUIsQ0FBaUMsVUFBQ0MsTUFBRCxFQUFTQyxHQUFULEVBQWlCO0FBQUEsNEJBUTVDSixPQUFPQyxLQUFQLENBQWFHLEdBQWIsQ0FSNEM7QUFBQSxRQUU5Q0MsSUFGOEMscUJBRTlDQSxJQUY4QztBQUFBLGtEQUc5Q0MsTUFIOEM7QUFBQSxRQUc5Q0EsTUFIOEMseUNBR3JDLEtBSHFDO0FBQUEsUUFJOUNDLE1BSjhDLHFCQUk5Q0EsTUFKOEM7QUFBQSxrREFLOUNDLElBTDhDO0FBQUEsUUFLOUNBLElBTDhDLHlDQUt2QyxPQUx1QztBQUFBLFFBTTlDQyxLQU44QyxxQkFNOUNBLEtBTjhDO0FBQUEsUUFPM0NDLElBUDJDOztBQUFBLFFBUzFDQyxTQVQwQyxHQVM1QlgsT0FBT0MsS0FBUCxDQUFhRyxHQUFiLENBVDRCLENBUzFDTyxTQVQwQzs7QUFVaEQsUUFBSUosVUFBVSxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQWhDLEVBQTBDO0FBQ3hDSSxrQkFBWXBCLGdCQUFnQjtBQUFBLGVBQU1nQixNQUFOO0FBQUEsT0FBaEIsRUFBOEJJLFNBQTlCLEVBQXlDO0FBQUEsZUFBS2IsT0FBT0MsSUFBUCxDQUFZYSxDQUFaLENBQUw7QUFBQSxPQUF6QyxDQUFaO0FBQ0Q7QUFDRCxRQUFJTCxVQUFVLE9BQU9BLE1BQVAsS0FBa0IsVUFBaEMsRUFBNEM7QUFDMUNJLGtCQUFZcEIsZ0JBQWdCZ0IsTUFBaEIsRUFBd0JJLFNBQXhCLEVBQW1DO0FBQUEsZUFBS2IsT0FBT0MsSUFBUCxDQUFZYSxDQUFaLENBQUw7QUFBQSxPQUFuQyxDQUFaO0FBQ0Q7O0FBRURULFdBQU9FLElBQVAsSUFBZVYsMEJBQ1ZjLEtBRFUsRUFFVkMsSUFGVTtBQUdiVixvQkFIYTtBQUliTSxvQkFKYTtBQUtiRSxnQkFMYTtBQU1iSDtBQU5hLFFBT1pNLFNBUFksQ0FBZjtBQVFBLFdBQU9SLE1BQVA7QUFDRCxHQTFCRCxFQTBCRyxFQTFCSCxDQURjO0FBQUEsQ0FBaEI7O0FBNkJBLGVBQWVYLFFBQ2JDLGtCQUFrQixDQUFDLFlBQUQsQ0FBbEIsRUFBa0MsZ0JBQXlCO0FBQUEsNkJBQXRCb0IsVUFBc0I7QUFBQSxNQUF0QkEsVUFBc0IsbUNBQVQsRUFBUzs7QUFDekQsTUFBTVosUUFBUUosUUFBUSxFQUFFSSxvQkFBWUwsU0FBU2tCLE1BQXJCLEVBQWdDRCxVQUFoQyxDQUFGLEVBQVIsQ0FBZDtBQUNBLFNBQU87QUFDTGIsWUFBUSxFQUFFQyxZQUFGLEVBREg7QUFFTGMsZ0JBQVksMkJBQVM7QUFDbkIsVUFBTUMsTUFBTWYsTUFBTWdCLE1BQU1DLElBQU4sQ0FBV2IsSUFBakIsS0FBMEIsSUFBdEM7QUFDQSxVQUFJVyxHQUFKLEVBQVM7QUFDUCxlQUFPLG9CQUFDLEdBQUQsRUFBU0MsS0FBVCxDQUFQO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDtBQVJJLEdBQVA7QUFVRCxDQVpELENBRGEsRUFjYnZCLFlBQ0U7QUFDRXFCLGNBQVl6QixVQUFVNkIsSUFEeEI7QUFFRW5CLFVBQVFWLFVBQVU4QjtBQUZwQixDQURGLEVBS0U7QUFBQSxNQUFHcEIsTUFBSCxTQUFHQSxNQUFIO0FBQUEsTUFBV2UsVUFBWCxTQUFXQSxVQUFYO0FBQUEsU0FBNkI7QUFDM0JmLGtCQUQyQjtBQUUzQmU7QUFGMkIsR0FBN0I7QUFBQSxDQUxGLENBZGEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9zbGF0ZS91c2Utc2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoQ29udGV4dCB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgdXNlQmxvY2tCYXNlIGZyb20gJy4vdXNlLWJsb2NrLWJhc2UnO1xuaW1wb3J0IHJlZ2lzdHJ5IGZyb20gJy4vcmVnaXN0cnknO1xuXG5jb25zdCBjb252ZXJ0ID0gc2NoZW1hID0+XG4gIE9iamVjdC5rZXlzKHNjaGVtYS5ub2RlcykucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHR5cGUsXG4gICAgICBpc1ZvaWQgPSBmYWxzZSxcbiAgICAgIHN0eWxlcyxcbiAgICAgIGtpbmQgPSAnYmxvY2snLFxuICAgICAgc2xhdGUsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHNjaGVtYS5ub2Rlc1trZXldO1xuICAgIGxldCB7IGNvbXBvbmVudCB9ID0gc2NoZW1hLm5vZGVzW2tleV07XG4gICAgaWYgKHN0eWxlcyAmJiB0eXBlb2Ygc3R5bGVzID09PSAnb2JqZWN0Jykge1xuICAgICAgY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50KCgpID0+IHN0eWxlcywgY29tcG9uZW50LCBwID0+IE9iamVjdC5rZXlzKHApKTtcbiAgICB9XG4gICAgaWYgKHN0eWxlcyAmJiB0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQoc3R5bGVzLCBjb21wb25lbnQsIHAgPT4gT2JqZWN0LmtleXMocCkpO1xuICAgIH1cblxuICAgIHJlc3VsdFt0eXBlXSA9IHVzZUJsb2NrQmFzZSh7XG4gICAgICAuLi5zbGF0ZSxcbiAgICAgIC4uLnJlc3QsXG4gICAgICBzY2hlbWEsXG4gICAgICBpc1ZvaWQsXG4gICAgICBraW5kLFxuICAgICAgdHlwZSxcbiAgICB9KShjb21wb25lbnQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFByb3BzT25DaGFuZ2UoWydibG9ja1R5cGVzJ10sICh7IGJsb2NrVHlwZXMgPSB7fSB9KSA9PiB7XG4gICAgY29uc3Qgbm9kZXMgPSBjb252ZXJ0KHsgbm9kZXM6IHsgLi4ucmVnaXN0cnkuYmxvY2tzLCAuLi5ibG9ja1R5cGVzIH0gfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjaGVtYTogeyBub2RlcyB9LFxuICAgICAgcmVuZGVyTm9kZTogcHJvcHMgPT4ge1xuICAgICAgICBjb25zdCBDb20gPSBub2Rlc1twcm9wcy5ub2RlLnR5cGVdIHx8IG51bGw7XG4gICAgICAgIGlmIChDb20pIHtcbiAgICAgICAgICByZXR1cm4gPENvbSB7Li4ucHJvcHN9IC8+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9O1xuICB9KSxcbiAgd2l0aENvbnRleHQoXG4gICAge1xuICAgICAgcmVuZGVyTm9kZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzY2hlbWE6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgfSxcbiAgICAoeyBzY2hlbWEsIHJlbmRlck5vZGUgfSkgPT4gKHtcbiAgICAgIHNjaGVtYSxcbiAgICAgIHJlbmRlck5vZGUsXG4gICAgfSksXG4gICksXG4pO1xuIl19
