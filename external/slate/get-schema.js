var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import { createComponent } from 'react-fela';
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
  var blockTypes = _ref.blockTypes,
      _renderNode = _ref.renderNode;

  var nodes = convert({ nodes: blockTypes || registry.blocks });
  return {
    schema: { nodes: nodes },
    renderNode: function renderNode(props) {
      var v = _renderNode && _renderNode(props);
      if (v !== undefined) {
        return v;
      }
      var Com = nodes[props.node.type] || null;
      if (Com) {
        return React.createElement(Com, props);
      }
      return null;
    }
  };
}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL2dldC1zY2hlbWEuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiY29tcG9zZSIsIndpdGhQcm9wc09uQ2hhbmdlIiwiY3JlYXRlQ29tcG9uZW50IiwidXNlQmxvY2tCYXNlIiwicmVnaXN0cnkiLCJjb252ZXJ0IiwiT2JqZWN0Iiwia2V5cyIsInNjaGVtYSIsIm5vZGVzIiwicmVkdWNlIiwicmVzdWx0Iiwia2V5IiwidHlwZSIsImlzVm9pZCIsInN0eWxlcyIsImtpbmQiLCJzbGF0ZSIsInJlc3QiLCJjb21wb25lbnQiLCJwIiwiYmxvY2tUeXBlcyIsInJlbmRlck5vZGUiLCJibG9ja3MiLCJ2IiwicHJvcHMiLCJ1bmRlZmluZWQiLCJDb20iLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsaUJBQWxCLFFBQTJDLFdBQTNDO0FBQ0EsU0FBU0MsZUFBVCxRQUFnQyxZQUFoQztBQUNBLE9BQU9DLFlBQVAsTUFBeUIsa0JBQXpCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixZQUFyQjs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUNkQyxPQUFPQyxJQUFQLENBQVlDLE9BQU9DLEtBQW5CLEVBQTBCQyxNQUExQixDQUFpQyxVQUFDQyxNQUFELEVBQVNDLEdBQVQsRUFBaUI7QUFBQSw0QkFRNUNKLE9BQU9DLEtBQVAsQ0FBYUcsR0FBYixDQVI0QztBQUFBLFFBRTlDQyxJQUY4QyxxQkFFOUNBLElBRjhDO0FBQUEsa0RBRzlDQyxNQUg4QztBQUFBLFFBRzlDQSxNQUg4Qyx5Q0FHckMsS0FIcUM7QUFBQSxRQUk5Q0MsTUFKOEMscUJBSTlDQSxNQUo4QztBQUFBLGtEQUs5Q0MsSUFMOEM7QUFBQSxRQUs5Q0EsSUFMOEMseUNBS3ZDLE9BTHVDO0FBQUEsUUFNOUNDLEtBTjhDLHFCQU05Q0EsS0FOOEM7QUFBQSxRQU8zQ0MsSUFQMkM7O0FBQUEsUUFTMUNDLFNBVDBDLEdBUzVCWCxPQUFPQyxLQUFQLENBQWFHLEdBQWIsQ0FUNEIsQ0FTMUNPLFNBVDBDOztBQVVoRCxRQUFJSixVQUFVLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBaEMsRUFBMEM7QUFDeENJLGtCQUFZakIsZ0JBQWdCO0FBQUEsZUFBTWEsTUFBTjtBQUFBLE9BQWhCLEVBQThCSSxTQUE5QixFQUF5QztBQUFBLGVBQUtiLE9BQU9DLElBQVAsQ0FBWWEsQ0FBWixDQUFMO0FBQUEsT0FBekMsQ0FBWjtBQUNEO0FBQ0QsUUFBSUwsVUFBVSxPQUFPQSxNQUFQLEtBQWtCLFVBQWhDLEVBQTRDO0FBQzFDSSxrQkFBWWpCLGdCQUFnQmEsTUFBaEIsRUFBd0JJLFNBQXhCLEVBQW1DO0FBQUEsZUFBS2IsT0FBT0MsSUFBUCxDQUFZYSxDQUFaLENBQUw7QUFBQSxPQUFuQyxDQUFaO0FBQ0Q7O0FBRURULFdBQU9FLElBQVAsSUFBZVYsMEJBQ1ZjLEtBRFUsRUFFVkMsSUFGVTtBQUdiVixvQkFIYTtBQUliTSxvQkFKYTtBQUtiRSxnQkFMYTtBQU1iSDtBQU5hLFFBT1pNLFNBUFksQ0FBZjtBQVFBLFdBQU9SLE1BQVA7QUFDRCxHQTFCRCxFQTBCRyxFQTFCSCxDQURjO0FBQUEsQ0FBaEI7O0FBNkJBLGVBQWVYLFFBQ2JDLGtCQUFrQixDQUFDLFlBQUQsQ0FBbEIsRUFBa0MsZ0JBQWdDO0FBQUEsTUFBN0JvQixVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsV0FBaUIsUUFBakJBLFVBQWlCOztBQUNoRSxNQUFNYixRQUFRSixRQUFRLEVBQUVJLE9BQU9ZLGNBQWNqQixTQUFTbUIsTUFBaEMsRUFBUixDQUFkO0FBQ0EsU0FBTztBQUNMZixZQUFRLEVBQUVDLFlBQUYsRUFESDtBQUVMYSxnQkFBWSwyQkFBUztBQUNuQixVQUFNRSxJQUFJRixlQUFjQSxZQUFXRyxLQUFYLENBQXhCO0FBQ0EsVUFBSUQsTUFBTUUsU0FBVixFQUFxQjtBQUNuQixlQUFPRixDQUFQO0FBQ0Q7QUFDRCxVQUFNRyxNQUFNbEIsTUFBTWdCLE1BQU1HLElBQU4sQ0FBV2YsSUFBakIsS0FBMEIsSUFBdEM7QUFDQSxVQUFJYyxHQUFKLEVBQVM7QUFDUCxlQUFPLG9CQUFDLEdBQUQsRUFBU0YsS0FBVCxDQUFQO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDtBQVpJLEdBQVA7QUFjRCxDQWhCRCxDQURhLENBQWYiLCJmaWxlIjoicGFja2FnZXMvc2xhdGUvZ2V0LXNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHNPbkNoYW5nZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB1c2VCbG9ja0Jhc2UgZnJvbSAnLi91c2UtYmxvY2stYmFzZSc7XG5pbXBvcnQgcmVnaXN0cnkgZnJvbSAnLi9yZWdpc3RyeSc7XG5cbmNvbnN0IGNvbnZlcnQgPSBzY2hlbWEgPT5cbiAgT2JqZWN0LmtleXMoc2NoZW1hLm5vZGVzKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIGlzVm9pZCA9IGZhbHNlLFxuICAgICAgc3R5bGVzLFxuICAgICAga2luZCA9ICdibG9jaycsXG4gICAgICBzbGF0ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gc2NoZW1hLm5vZGVzW2tleV07XG4gICAgbGV0IHsgY29tcG9uZW50IH0gPSBzY2hlbWEubm9kZXNba2V5XTtcbiAgICBpZiAoc3R5bGVzICYmIHR5cGVvZiBzdHlsZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQoKCkgPT4gc3R5bGVzLCBjb21wb25lbnQsIHAgPT4gT2JqZWN0LmtleXMocCkpO1xuICAgIH1cbiAgICBpZiAoc3R5bGVzICYmIHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudChzdHlsZXMsIGNvbXBvbmVudCwgcCA9PiBPYmplY3Qua2V5cyhwKSk7XG4gICAgfVxuXG4gICAgcmVzdWx0W3R5cGVdID0gdXNlQmxvY2tCYXNlKHtcbiAgICAgIC4uLnNsYXRlLFxuICAgICAgLi4ucmVzdCxcbiAgICAgIHNjaGVtYSxcbiAgICAgIGlzVm9pZCxcbiAgICAgIGtpbmQsXG4gICAgICB0eXBlLFxuICAgIH0pKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ2Jsb2NrVHlwZXMnXSwgKHsgYmxvY2tUeXBlcywgcmVuZGVyTm9kZSB9KSA9PiB7XG4gICAgY29uc3Qgbm9kZXMgPSBjb252ZXJ0KHsgbm9kZXM6IGJsb2NrVHlwZXMgfHwgcmVnaXN0cnkuYmxvY2tzIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBzY2hlbWE6IHsgbm9kZXMgfSxcbiAgICAgIHJlbmRlck5vZGU6IHByb3BzID0+IHtcbiAgICAgICAgY29uc3QgdiA9IHJlbmRlck5vZGUgJiYgcmVuZGVyTm9kZShwcm9wcyk7XG4gICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBDb20gPSBub2Rlc1twcm9wcy5ub2RlLnR5cGVdIHx8IG51bGw7XG4gICAgICAgIGlmIChDb20pIHtcbiAgICAgICAgICByZXR1cm4gPENvbSB7Li4ucHJvcHN9IC8+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9O1xuICB9KSxcbik7XG4iXX0=
