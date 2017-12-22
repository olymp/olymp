var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import * as icons from '../icons';

var Icon = function Icon(_ref) {
  var fill = _ref.fill,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['fill', 'type']);

  var icon = icons[type];

  return React.createElement('span', _extends({ dangerouslySetInnerHTML: { __html: icon(fill) } }, props));
};

Icon.propTypes = {
  fill: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(icons))
};
Icon.defaultProps = {
  fill: 'white'
};

export default Icon;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9JY29uLmVzNiJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJSZWFjdCIsImljb25zIiwiSWNvbiIsImZpbGwiLCJ0eXBlIiwicHJvcHMiLCJpY29uIiwiX19odG1sIiwicHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2YiLCJPYmplY3QiLCJrZXlzIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPLEtBQUtDLEtBQVosTUFBdUIsVUFBdkI7O0FBRUEsSUFBTUMsT0FBTyxTQUFQQSxJQUFPLE9BQThCO0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFaQyxLQUFZOztBQUN6QyxNQUFNQyxPQUFPTCxNQUFNRyxJQUFOLENBQWI7O0FBRUEsU0FBTyx1Q0FBTSx5QkFBeUIsRUFBRUcsUUFBUUQsS0FBS0gsSUFBTCxDQUFWLEVBQS9CLElBQTJERSxLQUEzRCxFQUFQO0FBQ0QsQ0FKRDs7QUFNQUgsS0FBS00sU0FBTCxHQUFpQjtBQUNmTCxRQUFNSixVQUFVVSxNQUREO0FBRWZMLFFBQU1MLFVBQVVXLEtBQVYsQ0FBZ0JDLE9BQU9DLElBQVAsQ0FBWVgsS0FBWixDQUFoQjtBQUZTLENBQWpCO0FBSUFDLEtBQUtXLFlBQUwsR0FBb0I7QUFDbEJWLFFBQU07QUFEWSxDQUFwQjs7QUFJQSxlQUFlRCxJQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9JY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBpY29ucyBmcm9tICcuLi9pY29ucyc7XG5cbmNvbnN0IEljb24gPSAoeyBmaWxsLCB0eXBlLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGljb24gPSBpY29uc1t0eXBlXTtcblxuICByZXR1cm4gPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpY29uKGZpbGwpIH19IHsuLi5wcm9wc30gLz47XG59O1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKGljb25zKSksXG59O1xuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGZpbGw6ICd3aGl0ZScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIl19
