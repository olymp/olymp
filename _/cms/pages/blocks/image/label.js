'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _olympFela.createComponent)(function (_ref) {
  var theme = _ref.theme;
  return {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 0,
    width: '100%',
    padding: theme.space1 + ' ' + theme.space3,
    backgroundColor: theme.light2,
    color: theme.dark,
    '> p': {
      padding: 0,
      color: theme.dark2
    },
    ifSmallDown: {
      position: 'relative',
      padding: theme.space2,
      backgroundColor: theme.dark5
    }
  };
}, function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      attributes = _ref2.attributes;
  return _react2.default.createElement(
    'div',
    _extends({ className: className }, attributes),
    children
  );
}, function (p) {
  return Object.keys(p);
});

exports.default = {
  type: 'imageLabel',
  isVoid: false,
  kind: 'block',
  label: 'Titel',
  defaultNodes: ['paragraph'],
  component: component
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvaW1hZ2UvbGFiZWwuZXM2Il0sIm5hbWVzIjpbImNvbXBvbmVudCIsInRoZW1lIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJwYWRkaW5nIiwic3BhY2UxIiwic3BhY2UzIiwiYmFja2dyb3VuZENvbG9yIiwibGlnaHQyIiwiY29sb3IiLCJkYXJrIiwiZGFyazIiLCJpZlNtYWxsRG93biIsInNwYWNlMiIsImRhcms1IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhdHRyaWJ1dGVzIiwiT2JqZWN0Iiwia2V5cyIsInAiLCJ0eXBlIiwiaXNWb2lkIiwia2luZCIsImxhYmVsIiwiZGVmYXVsdE5vZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLGdDQUNoQjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2RDLGNBQVUsVUFESTtBQUVkQyxZQUFRLENBRk07QUFHZEMsWUFBUSxDQUhNO0FBSWRDLFVBQU0sQ0FKUTtBQUtkQyxXQUFPLE1BTE87QUFNZEMsYUFBWU4sTUFBTU8sTUFBbEIsU0FBNEJQLE1BQU1RLE1BTnBCO0FBT2RDLHFCQUFpQlQsTUFBTVUsTUFQVDtBQVFkQyxXQUFPWCxNQUFNWSxJQVJDO0FBU2QsV0FBTztBQUNMTixlQUFTLENBREo7QUFFTEssYUFBT1gsTUFBTWE7QUFGUixLQVRPO0FBYWRDLGlCQUFhO0FBQ1hiLGdCQUFVLFVBREM7QUFFWEssZUFBU04sTUFBTWUsTUFGSjtBQUdYTix1QkFBaUJULE1BQU1nQjtBQUhaO0FBYkMsR0FBaEI7QUFBQSxDQURnQixFQW9CaEI7QUFBQSxNQUFHQyxTQUFILFNBQUdBLFNBQUg7QUFBQSxNQUFjQyxRQUFkLFNBQWNBLFFBQWQ7QUFBQSxNQUF3QkMsVUFBeEIsU0FBd0JBLFVBQXhCO0FBQUEsU0FDRTtBQUFBO0FBQUEsZUFBSyxXQUFXRixTQUFoQixJQUErQkUsVUFBL0I7QUFDR0Q7QUFESCxHQURGO0FBQUEsQ0FwQmdCLEVBeUJoQjtBQUFBLFNBQUtFLE9BQU9DLElBQVAsQ0FBWUMsQ0FBWixDQUFMO0FBQUEsQ0F6QmdCLENBQWxCOztrQkE0QmU7QUFDYkMsUUFBTSxZQURPO0FBRWJDLFVBQVEsS0FGSztBQUdiQyxRQUFNLE9BSE87QUFJYkMsU0FBTyxPQUpNO0FBS2JDLGdCQUFjLENBQUMsV0FBRCxDQUxEO0FBTWI1QjtBQU5hLEMiLCJmaWxlIjoiY21zL3BhZ2VzL2Jsb2Nrcy9pbWFnZS9sYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcblxuY29uc3QgY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHpJbmRleDogMSxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNlMX0gJHt0aGVtZS5zcGFjZTN9YCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmxpZ2h0MixcbiAgICBjb2xvcjogdGhlbWUuZGFyayxcbiAgICAnPiBwJzoge1xuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrMixcbiAgICB9LFxuICAgIGlmU21hbGxEb3duOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNlMixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuZGFyazUsXG4gICAgfSxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGF0dHJpYnV0ZXMgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5hdHRyaWJ1dGVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2ltYWdlTGFiZWwnLFxuICBpc1ZvaWQ6IGZhbHNlLFxuICBraW5kOiAnYmxvY2snLFxuICBsYWJlbDogJ1RpdGVsJyxcbiAgZGVmYXVsdE5vZGVzOiBbJ3BhcmFncmFwaCddLFxuICBjb21wb25lbnQsXG59O1xuIl19
