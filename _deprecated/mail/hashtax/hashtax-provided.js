var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// connect: Decorator to get props from context and interpolate props
var HashtaxProvided = (_temp = _class = function (_Component) {
  _inherits(HashtaxProvided, _Component);

  function HashtaxProvided() {
    _classCallCheck(this, HashtaxProvided);

    return _possibleConstructorReturn(this, (HashtaxProvided.__proto__ || Object.getPrototypeOf(HashtaxProvided)).apply(this, arguments));
  }

  _createClass(HashtaxProvided, [{
    key: 'render',
    value: function render() {
      var Hashtax = this.context.Hashtax;
      return React.createElement(Hashtax, this.props);
    }
  }]);

  return HashtaxProvided;
}(Component), _class.contextTypes = {
  Hashtax: PropTypes.func.isRequired
}, _temp);
export { HashtaxProvided as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL21haWwvaGFzaHRheC9oYXNodGF4LXByb3ZpZGVkLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkhhc2h0YXhQcm92aWRlZCIsIkhhc2h0YXgiLCJjb250ZXh0IiwicHJvcHMiLCJjb250ZXh0VHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0Qjs7QUFFQTtJQUNxQkMsZTs7Ozs7Ozs7Ozs7NkJBSVY7QUFDUCxVQUFNQyxVQUFVLEtBQUtDLE9BQUwsQ0FBYUQsT0FBN0I7QUFDQSxhQUFPLG9CQUFDLE9BQUQsRUFBYSxLQUFLRSxLQUFsQixDQUFQO0FBQ0Q7Ozs7RUFQMENMLFMsVUFDcENNLFksR0FBZTtBQUNwQkgsV0FBU0YsVUFBVU0sSUFBVixDQUFlQztBQURKLEM7U0FESE4sZSIsImZpbGUiOiJwYWNrYWdlcy9tYWlsL2hhc2h0YXgvaGFzaHRheC1wcm92aWRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBjb25uZWN0OiBEZWNvcmF0b3IgdG8gZ2V0IHByb3BzIGZyb20gY29udGV4dCBhbmQgaW50ZXJwb2xhdGUgcHJvcHNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhc2h0YXhQcm92aWRlZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgSGFzaHRheDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IEhhc2h0YXggPSB0aGlzLmNvbnRleHQuSGFzaHRheDtcbiAgICByZXR1cm4gPEhhc2h0YXggey4uLnRoaXMucHJvcHN9IC8+O1xuICB9XG59XG4iXX0=
