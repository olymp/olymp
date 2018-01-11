'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _faLink = require('olymp-icons/lib/fa-link');

var _faLink2 = _interopRequireDefault(_faLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Binding = function Binding(_ref) {
  var node = _ref.node,
      attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      editor = _ref.editor;

  var field = node.data.get('field');
  var text = (0, _get3.default)(editor.props.binding, field) || '<Kein Text>';
  return _react2.default.createElement(
    'span',
    _extends({}, attributes, { className: className }),
    children,
    text
  );
};

var setLink = function setLink(onChange, value, node) {
  var field = window.prompt('Feld', node.data.get('field') || '');
  if (field) {
    onChange(value.change().setNodeByKey(node.key, {
      data: node.data.set('field', field)
    }));
  }
};

exports.default = {
  type: 'textBinding',
  isVoid: true,
  kind: 'inline',
  label: 'Angebundener Text',
  category: 'Daten',
  component: Binding,
  actions: [{
    type: 'small',
    component: function component(_ref2) {
      var onChange = _ref2.onChange,
          value = _ref2.value,
          node = _ref2.node;
      return _react2.default.createElement(_faLink2.default, { onClick: function onClick() {
          return setLink(onChange, value, node);
        } });
    },
    tooltip: 'Neu binden'
  }]
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvYmluZGluZy5lczYiXSwibmFtZXMiOlsiQmluZGluZyIsIm5vZGUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJlZGl0b3IiLCJmaWVsZCIsImRhdGEiLCJnZXQiLCJ0ZXh0IiwicHJvcHMiLCJiaW5kaW5nIiwic2V0TGluayIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ3aW5kb3ciLCJwcm9tcHQiLCJjaGFuZ2UiLCJzZXROb2RlQnlLZXkiLCJrZXkiLCJzZXQiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiY2F0ZWdvcnkiLCJjb21wb25lbnQiLCJhY3Rpb25zIiwidG9vbHRpcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsT0FBdUQ7QUFBQSxNQUFwREMsSUFBb0QsUUFBcERBLElBQW9EO0FBQUEsTUFBOUNDLFVBQThDLFFBQTlDQSxVQUE4QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUNyRSxNQUFNQyxRQUFRTCxLQUFLTSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxPQUFkLENBQWQ7QUFDQSxNQUFNQyxPQUFPLG1CQUFJSixPQUFPSyxLQUFQLENBQWFDLE9BQWpCLEVBQTBCTCxLQUExQixLQUFvQyxhQUFqRDtBQUNBLFNBQ0U7QUFBQTtBQUFBLGlCQUFVSixVQUFWLElBQXNCLFdBQVdFLFNBQWpDO0FBQ0dELFlBREg7QUFFR007QUFGSCxHQURGO0FBTUQsQ0FURDs7QUFXQSxJQUFNRyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQWtCYixJQUFsQixFQUEyQjtBQUN6QyxNQUFNSyxRQUFRUyxPQUFPQyxNQUFQLENBQWMsTUFBZCxFQUFzQmYsS0FBS00sSUFBTCxDQUFVQyxHQUFWLENBQWMsT0FBZCxLQUEwQixFQUFoRCxDQUFkO0FBQ0EsTUFBSUYsS0FBSixFQUFXO0FBQ1RPLGFBQ0VDLE1BQU1HLE1BQU4sR0FBZUMsWUFBZixDQUE0QmpCLEtBQUtrQixHQUFqQyxFQUFzQztBQUNwQ1osWUFBTU4sS0FBS00sSUFBTCxDQUFVYSxHQUFWLENBQWMsT0FBZCxFQUF1QmQsS0FBdkI7QUFEOEIsS0FBdEMsQ0FERjtBQUtEO0FBQ0YsQ0FURDs7a0JBV2U7QUFDYmUsUUFBTSxhQURPO0FBRWJDLFVBQVEsSUFGSztBQUdiQyxRQUFNLFFBSE87QUFJYkMsU0FBTyxtQkFKTTtBQUtiQyxZQUFVLE9BTEc7QUFNYkMsYUFBVzFCLE9BTkU7QUFPYjJCLFdBQVMsQ0FDUDtBQUNFTixVQUFNLE9BRFI7QUFFRUssZUFBVztBQUFBLFVBQUdiLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFVBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFVBQW9CYixJQUFwQixTQUFvQkEsSUFBcEI7QUFBQSxhQUNULGtEQUFRLFNBQVM7QUFBQSxpQkFBTVcsUUFBUUMsUUFBUixFQUFrQkMsS0FBbEIsRUFBeUJiLElBQXpCLENBQU47QUFBQSxTQUFqQixHQURTO0FBQUEsS0FGYjtBQUtFMkIsYUFBUztBQUxYLEdBRE87QUFQSSxDIiwiZmlsZSI6ImNtcy9wYWdlcy9ibG9ja3MvYmluZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYUxpbmsgfSBmcm9tICdvbHltcC1pY29ucyc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBCaW5kaW5nID0gKHsgbm9kZSwgYXR0cmlidXRlcywgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZWRpdG9yIH0pID0+IHtcbiAgY29uc3QgZmllbGQgPSBub2RlLmRhdGEuZ2V0KCdmaWVsZCcpO1xuICBjb25zdCB0ZXh0ID0gZ2V0KGVkaXRvci5wcm9wcy5iaW5kaW5nLCBmaWVsZCkgfHwgJzxLZWluIFRleHQ+JztcbiAgcmV0dXJuIChcbiAgICA8c3BhbiB7Li4uYXR0cmlidXRlc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAge3RleHR9XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuY29uc3Qgc2V0TGluayA9IChvbkNoYW5nZSwgdmFsdWUsIG5vZGUpID0+IHtcbiAgY29uc3QgZmllbGQgPSB3aW5kb3cucHJvbXB0KCdGZWxkJywgbm9kZS5kYXRhLmdldCgnZmllbGQnKSB8fCAnJyk7XG4gIGlmIChmaWVsZCkge1xuICAgIG9uQ2hhbmdlKFxuICAgICAgdmFsdWUuY2hhbmdlKCkuc2V0Tm9kZUJ5S2V5KG5vZGUua2V5LCB7XG4gICAgICAgIGRhdGE6IG5vZGUuZGF0YS5zZXQoJ2ZpZWxkJywgZmllbGQpLFxuICAgICAgfSksXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAndGV4dEJpbmRpbmcnLFxuICBpc1ZvaWQ6IHRydWUsXG4gIGtpbmQ6ICdpbmxpbmUnLFxuICBsYWJlbDogJ0FuZ2VidW5kZW5lciBUZXh0JyxcbiAgY2F0ZWdvcnk6ICdEYXRlbicsXG4gIGNvbXBvbmVudDogQmluZGluZyxcbiAgYWN0aW9uczogW1xuICAgIHtcbiAgICAgIHR5cGU6ICdzbWFsbCcsXG4gICAgICBjb21wb25lbnQ6ICh7IG9uQ2hhbmdlLCB2YWx1ZSwgbm9kZSB9KSA9PiAoXG4gICAgICAgIDxGYUxpbmsgb25DbGljaz17KCkgPT4gc2V0TGluayhvbkNoYW5nZSwgdmFsdWUsIG5vZGUpfSAvPlxuICAgICAgKSxcbiAgICAgIHRvb2x0aXA6ICdOZXUgYmluZGVuJyxcbiAgICB9LFxuICBdLFxufTtcbiJdfQ==
