'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _utils = require('../utils');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ref3 = _react2.default.createElement('span', null);

function Header(_ref, _ref2) {
  var theme = _ref2.theme;

  var customControls = _ref.customControls,
      onClose = _ref.onClose,
      showCloseButton = _ref.showCloseButton,
      closeButtonTitle = _ref.closeButtonTitle,
      props = _objectWithoutProperties(_ref, ['customControls', 'onClose', 'showCloseButton', 'closeButtonTitle']);

  var classes = _noImportant.StyleSheet.create((0, _utils.deepMerge)(defaultStyles, theme));

  return _react2.default.createElement(
    'div',
    _extends({ className: (0, _noImportant.css)(classes.header) }, props),
    customControls || _ref3,
    !!showCloseButton && _react2.default.createElement(
      'button',
      {
        title: closeButtonTitle,
        className: (0, _noImportant.css)(classes.close),
        onClick: onClose
      },
      _react2.default.createElement(_Icon2.default, { fill: !!theme.close && theme.close.fill || _theme2.default.close.fill, type: 'close' })
    )
  );
}

Header.propTypes = {
  customControls: _propTypes2.default.array,
  onClose: _propTypes2.default.func.isRequired,
  showCloseButton: _propTypes2.default.bool
};
Header.contextTypes = {
  theme: _propTypes2.default.object.isRequired
};

var defaultStyles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    height: _theme2.default.header.height
  },
  close: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    position: 'relative',
    top: 0,
    verticalAlign: 'bottom',

    // increase hit area
    height: 40,
    marginRight: -10,
    padding: 10,
    width: 40
  }
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9IZWFkZXIuZXM2Il0sIm5hbWVzIjpbIkhlYWRlciIsInRoZW1lIiwiY3VzdG9tQ29udHJvbHMiLCJvbkNsb3NlIiwic2hvd0Nsb3NlQnV0dG9uIiwiY2xvc2VCdXR0b25UaXRsZSIsInByb3BzIiwiY2xhc3NlcyIsImNyZWF0ZSIsImRlZmF1bHRTdHlsZXMiLCJoZWFkZXIiLCJjbG9zZSIsImZpbGwiLCJwcm9wVHlwZXMiLCJhcnJheSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImNvbnRleHRUeXBlcyIsIm9iamVjdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJjdXJzb3IiLCJvdXRsaW5lIiwicG9zaXRpb24iLCJ0b3AiLCJ2ZXJ0aWNhbEFsaWduIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O1lBZXlCLDJDOztBQWJ6QixTQUFTQSxNQUFULGNBUUc7QUFBQSxNQUREQyxLQUNDLFNBRERBLEtBQ0M7O0FBQUEsTUFQREMsY0FPQyxRQVBEQSxjQU9DO0FBQUEsTUFOREMsT0FNQyxRQU5EQSxPQU1DO0FBQUEsTUFMREMsZUFLQyxRQUxEQSxlQUtDO0FBQUEsTUFKREMsZ0JBSUMsUUFKREEsZ0JBSUM7QUFBQSxNQUhFQyxLQUdGOztBQUNELE1BQU1DLFVBQVUsd0JBQVdDLE1BQVgsQ0FBa0Isc0JBQVVDLGFBQVYsRUFBeUJSLEtBQXpCLENBQWxCLENBQWhCOztBQUVBLFNBQ0U7QUFBQTtBQUFBLGVBQUssV0FBVyxzQkFBSU0sUUFBUUcsTUFBWixDQUFoQixJQUF5Q0osS0FBekM7QUFDR0osMkJBREg7QUFFRyxLQUFDLENBQUNFLGVBQUYsSUFDQztBQUFBO0FBQUE7QUFDRSxlQUFPQyxnQkFEVDtBQUVFLG1CQUFXLHNCQUFJRSxRQUFRSSxLQUFaLENBRmI7QUFHRSxpQkFBU1I7QUFIWDtBQUtFLHNEQUFNLE1BQU0sQ0FBQyxDQUFDRixNQUFNVSxLQUFSLElBQWlCVixNQUFNVSxLQUFOLENBQVlDLElBQTdCLElBQXFDLGdCQUFTRCxLQUFULENBQWVDLElBQWhFLEVBQXNFLE1BQUssT0FBM0U7QUFMRjtBQUhKLEdBREY7QUFjRDs7QUFFRFosT0FBT2EsU0FBUCxHQUFtQjtBQUNqQlgsa0JBQWdCLG9CQUFVWSxLQURUO0FBRWpCWCxXQUFTLG9CQUFVWSxJQUFWLENBQWVDLFVBRlA7QUFHakJaLG1CQUFpQixvQkFBVWE7QUFIVixDQUFuQjtBQUtBakIsT0FBT2tCLFlBQVAsR0FBc0I7QUFDcEJqQixTQUFPLG9CQUFVa0IsTUFBVixDQUFpQkg7QUFESixDQUF0Qjs7QUFJQSxJQUFNUCxnQkFBZ0I7QUFDcEJDLFVBQVE7QUFDTlUsYUFBUyxNQURIO0FBRU5DLG9CQUFnQixlQUZWO0FBR05DLFlBQVEsZ0JBQVNaLE1BQVQsQ0FBZ0JZO0FBSGxCLEdBRFk7QUFNcEJYLFNBQU87QUFDTFksZ0JBQVksTUFEUDtBQUVMQyxZQUFRLE1BRkg7QUFHTEMsWUFBUSxTQUhIO0FBSUxDLGFBQVMsTUFKSjtBQUtMQyxjQUFVLFVBTEw7QUFNTEMsU0FBSyxDQU5BO0FBT0xDLG1CQUFlLFFBUFY7O0FBU0w7QUFDQVAsWUFBUSxFQVZIO0FBV0xRLGlCQUFhLENBQUMsRUFYVDtBQVlMQyxhQUFTLEVBWko7QUFhTEMsV0FBTztBQWJGO0FBTmEsQ0FBdEI7O2tCQXVCZWhDLE0iLCJmaWxlIjoiZXh0ZXJuYWwvZmVsYS9saWdodGJveC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCc7XG5cbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG5mdW5jdGlvbiBIZWFkZXIoe1xuICBjdXN0b21Db250cm9scyxcbiAgb25DbG9zZSxcbiAgc2hvd0Nsb3NlQnV0dG9uLFxuICBjbG9zZUJ1dHRvblRpdGxlLFxuICAuLi5wcm9wcyxcbn0sIHtcbiAgdGhlbWUsXG59KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZShkZWVwTWVyZ2UoZGVmYXVsdFN0eWxlcywgdGhlbWUpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy5oZWFkZXIpfSB7Li4ucHJvcHN9PlxuICAgICAge2N1c3RvbUNvbnRyb2xzIHx8IDxzcGFuIC8+fVxuICAgICAgeyEhc2hvd0Nsb3NlQnV0dG9uICYmIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHRpdGxlPXtjbG9zZUJ1dHRvblRpdGxlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuY2xvc2UpfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBmaWxsPXshIXRoZW1lLmNsb3NlICYmIHRoZW1lLmNsb3NlLmZpbGwgfHwgZGVmYXVsdHMuY2xvc2UuZmlsbH0gdHlwZT1cImNsb3NlXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBjdXN0b21Db250cm9sczogUHJvcFR5cGVzLmFycmF5LFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaG93Q2xvc2VCdXR0b246IFByb3BUeXBlcy5ib29sLFxufTtcbkhlYWRlci5jb250ZXh0VHlwZXMgPSB7XG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBkZWZhdWx0U3R5bGVzID0ge1xuICBoZWFkZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBoZWlnaHQ6IGRlZmF1bHRzLmhlYWRlci5oZWlnaHQsXG4gIH0sXG4gIGNsb3NlOiB7XG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6IDAsXG4gICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbScsXG5cbiAgICAvLyBpbmNyZWFzZSBoaXQgYXJlYVxuICAgIGhlaWdodDogNDAsXG4gICAgbWFyZ2luUmlnaHQ6IC0xMCxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICB3aWR0aDogNDAsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0=
