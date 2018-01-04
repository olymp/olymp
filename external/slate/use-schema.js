'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFela = require('react-fela');

var _recompose = require('recompose');

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
  var _ref$blockTypes = _ref.blockTypes,
      blockTypes = _ref$blockTypes === undefined ? {} : _ref$blockTypes;

  var nodes = convert({ nodes: _extends({}, _registry2.default.blocks, blockTypes) });
  return {
    schema: { nodes: nodes },
    renderNode: function renderNode(props) {
      var Com = nodes[props.node.type] || null;
      if (Com) {
        return _react2.default.createElement(Com, props);
      }
      return null;
    }
  };
}), (0, _recompose.withContext)({
  renderNode: _propTypes2.default.func,
  schema: _propTypes2.default.object
}, function (_ref2) {
  var schema = _ref2.schema,
      renderNode = _ref2.renderNode;
  return {
    schema: schema,
    renderNode: renderNode
  };
}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3VzZS1zY2hlbWEuZXM2Il0sIm5hbWVzIjpbImNvbnZlcnQiLCJPYmplY3QiLCJrZXlzIiwic2NoZW1hIiwibm9kZXMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJrZXkiLCJ0eXBlIiwiaXNWb2lkIiwic3R5bGVzIiwia2luZCIsInNsYXRlIiwicmVzdCIsImNvbXBvbmVudCIsInAiLCJibG9ja1R5cGVzIiwiYmxvY2tzIiwicmVuZGVyTm9kZSIsIkNvbSIsInByb3BzIiwibm9kZSIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUNkQyxPQUFPQyxJQUFQLENBQVlDLE9BQU9DLEtBQW5CLEVBQTBCQyxNQUExQixDQUFpQyxVQUFDQyxNQUFELEVBQVNDLEdBQVQsRUFBaUI7QUFBQSw0QkFRNUNKLE9BQU9DLEtBQVAsQ0FBYUcsR0FBYixDQVI0QztBQUFBLFFBRTlDQyxJQUY4QyxxQkFFOUNBLElBRjhDO0FBQUEsa0RBRzlDQyxNQUg4QztBQUFBLFFBRzlDQSxNQUg4Qyx5Q0FHckMsS0FIcUM7QUFBQSxRQUk5Q0MsTUFKOEMscUJBSTlDQSxNQUo4QztBQUFBLGtEQUs5Q0MsSUFMOEM7QUFBQSxRQUs5Q0EsSUFMOEMseUNBS3ZDLE9BTHVDO0FBQUEsUUFNOUNDLEtBTjhDLHFCQU05Q0EsS0FOOEM7QUFBQSxRQU8zQ0MsSUFQMkM7O0FBQUEsUUFTMUNDLFNBVDBDLEdBUzVCWCxPQUFPQyxLQUFQLENBQWFHLEdBQWIsQ0FUNEIsQ0FTMUNPLFNBVDBDOztBQVVoRCxRQUFJSixVQUFVLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBaEMsRUFBMEM7QUFDeENJLGtCQUFZLGdDQUFnQjtBQUFBLGVBQU1KLE1BQU47QUFBQSxPQUFoQixFQUE4QkksU0FBOUIsRUFBeUM7QUFBQSxlQUFLYixPQUFPQyxJQUFQLENBQVlhLENBQVosQ0FBTDtBQUFBLE9BQXpDLENBQVo7QUFDRDtBQUNELFFBQUlMLFVBQVUsT0FBT0EsTUFBUCxLQUFrQixVQUFoQyxFQUE0QztBQUMxQ0ksa0JBQVksZ0NBQWdCSixNQUFoQixFQUF3QkksU0FBeEIsRUFBbUM7QUFBQSxlQUFLYixPQUFPQyxJQUFQLENBQVlhLENBQVosQ0FBTDtBQUFBLE9BQW5DLENBQVo7QUFDRDs7QUFFRFQsV0FBT0UsSUFBUCxJQUFlLHlDQUNWSSxLQURVLEVBRVZDLElBRlU7QUFHYlYsb0JBSGE7QUFJYk0sb0JBSmE7QUFLYkUsZ0JBTGE7QUFNYkg7QUFOYSxRQU9aTSxTQVBZLENBQWY7QUFRQSxXQUFPUixNQUFQO0FBQ0QsR0ExQkQsRUEwQkcsRUExQkgsQ0FEYztBQUFBLENBQWhCOztrQkE2QmUsd0JBQ2Isa0NBQWtCLENBQUMsWUFBRCxDQUFsQixFQUFrQyxnQkFBeUI7QUFBQSw2QkFBdEJVLFVBQXNCO0FBQUEsTUFBdEJBLFVBQXNCLG1DQUFULEVBQVM7O0FBQ3pELE1BQU1aLFFBQVFKLFFBQVEsRUFBRUksb0JBQVksbUJBQVNhLE1BQXJCLEVBQWdDRCxVQUFoQyxDQUFGLEVBQVIsQ0FBZDtBQUNBLFNBQU87QUFDTGIsWUFBUSxFQUFFQyxZQUFGLEVBREg7QUFFTGMsZ0JBQVksMkJBQVM7QUFDbkIsVUFBTUMsTUFBTWYsTUFBTWdCLE1BQU1DLElBQU4sQ0FBV2IsSUFBakIsS0FBMEIsSUFBdEM7QUFDQSxVQUFJVyxHQUFKLEVBQVM7QUFDUCxlQUFPLDhCQUFDLEdBQUQsRUFBU0MsS0FBVCxDQUFQO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDtBQVJJLEdBQVA7QUFVRCxDQVpELENBRGEsRUFjYiw0QkFDRTtBQUNFRixjQUFZLG9CQUFVSSxJQUR4QjtBQUVFbkIsVUFBUSxvQkFBVW9CO0FBRnBCLENBREYsRUFLRTtBQUFBLE1BQUdwQixNQUFILFNBQUdBLE1BQUg7QUFBQSxNQUFXZSxVQUFYLFNBQVdBLFVBQVg7QUFBQSxTQUE2QjtBQUMzQmYsa0JBRDJCO0FBRTNCZTtBQUYyQixHQUE3QjtBQUFBLENBTEYsQ0FkYSxDIiwiZmlsZSI6ImV4dGVybmFsL3NsYXRlL3VzZS1zY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzT25DaGFuZ2UsIHdpdGhDb250ZXh0IH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB1c2VCbG9ja0Jhc2UgZnJvbSAnLi91c2UtYmxvY2stYmFzZSc7XG5pbXBvcnQgcmVnaXN0cnkgZnJvbSAnLi9yZWdpc3RyeSc7XG5cbmNvbnN0IGNvbnZlcnQgPSBzY2hlbWEgPT5cbiAgT2JqZWN0LmtleXMoc2NoZW1hLm5vZGVzKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIGlzVm9pZCA9IGZhbHNlLFxuICAgICAgc3R5bGVzLFxuICAgICAga2luZCA9ICdibG9jaycsXG4gICAgICBzbGF0ZSxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gc2NoZW1hLm5vZGVzW2tleV07XG4gICAgbGV0IHsgY29tcG9uZW50IH0gPSBzY2hlbWEubm9kZXNba2V5XTtcbiAgICBpZiAoc3R5bGVzICYmIHR5cGVvZiBzdHlsZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQoKCkgPT4gc3R5bGVzLCBjb21wb25lbnQsIHAgPT4gT2JqZWN0LmtleXMocCkpO1xuICAgIH1cbiAgICBpZiAoc3R5bGVzICYmIHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudChzdHlsZXMsIGNvbXBvbmVudCwgcCA9PiBPYmplY3Qua2V5cyhwKSk7XG4gICAgfVxuXG4gICAgcmVzdWx0W3R5cGVdID0gdXNlQmxvY2tCYXNlKHtcbiAgICAgIC4uLnNsYXRlLFxuICAgICAgLi4ucmVzdCxcbiAgICAgIHNjaGVtYSxcbiAgICAgIGlzVm9pZCxcbiAgICAgIGtpbmQsXG4gICAgICB0eXBlLFxuICAgIH0pKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUHJvcHNPbkNoYW5nZShbJ2Jsb2NrVHlwZXMnXSwgKHsgYmxvY2tUeXBlcyA9IHt9IH0pID0+IHtcbiAgICBjb25zdCBub2RlcyA9IGNvbnZlcnQoeyBub2RlczogeyAuLi5yZWdpc3RyeS5ibG9ja3MsIC4uLmJsb2NrVHlwZXMgfSB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgc2NoZW1hOiB7IG5vZGVzIH0sXG4gICAgICByZW5kZXJOb2RlOiBwcm9wcyA9PiB7XG4gICAgICAgIGNvbnN0IENvbSA9IG5vZGVzW3Byb3BzLm5vZGUudHlwZV0gfHwgbnVsbDtcbiAgICAgICAgaWYgKENvbSkge1xuICAgICAgICAgIHJldHVybiA8Q29tIHsuLi5wcm9wc30gLz47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgIH07XG4gIH0pLFxuICB3aXRoQ29udGV4dChcbiAgICB7XG4gICAgICByZW5kZXJOb2RlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHNjaGVtYTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB9LFxuICAgICh7IHNjaGVtYSwgcmVuZGVyTm9kZSB9KSA9PiAoe1xuICAgICAgc2NoZW1hLFxuICAgICAgcmVuZGVyTm9kZSxcbiAgICB9KSxcbiAgKSxcbik7XG4iXX0=
