var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import { Children, Component } from 'react';

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9

var PassContext = function (_Component) {
  _inherits(PassContext, _Component);

  function PassContext() {
    _classCallCheck(this, PassContext);

    return _possibleConstructorReturn(this, (PassContext.__proto__ || Object.getPrototypeOf(PassContext)).apply(this, arguments));
  }

  _createClass(PassContext, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'render',
    value: function render() {
      return Children.only(this.props.children);
    }
  }]);

  return PassContext;
}(Component);

PassContext.propTypes = {
  context: PropTypes.object.isRequired
};
PassContext.childContextTypes = {
  theme: PropTypes.object
};

export default PassContext;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9QYXNzQ29udGV4dC5lczYiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiQ2hpbGRyZW4iLCJDb21wb25lbnQiLCJQYXNzQ29udGV4dCIsInByb3BzIiwiY29udGV4dCIsIm9ubHkiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJjaGlsZENvbnRleHRUeXBlcyIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxRQUFULEVBQW1CQyxTQUFuQixRQUFvQyxPQUFwQzs7QUFFQTtBQUNBOztJQUVNQyxXOzs7Ozs7Ozs7OztzQ0FDYztBQUNoQixhQUFPLEtBQUtDLEtBQUwsQ0FBV0MsT0FBbEI7QUFDRDs7OzZCQUNRO0FBQ1AsYUFBT0osU0FBU0ssSUFBVCxDQUFjLEtBQUtGLEtBQUwsQ0FBV0csUUFBekIsQ0FBUDtBQUNEOzs7O0VBTnVCTCxTOztBQVMxQkMsWUFBWUssU0FBWixHQUF3QjtBQUN0QkgsV0FBU0wsVUFBVVMsTUFBVixDQUFpQkM7QUFESixDQUF4QjtBQUdBUCxZQUFZUSxpQkFBWixHQUFnQztBQUM5QkMsU0FBT1osVUFBVVM7QUFEYSxDQUFoQzs7QUFJQSxlQUFlTixXQUFmIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbGlnaHRib3gvY29tcG9uZW50cy9QYXNzQ29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBQYXNzIHRoZSBMaWdodGJveCBjb250ZXh0IHRocm91Z2ggdG8gdGhlIFBvcnRhbCdzIGRlc2NlbmRlbnRzXG4vLyBTdGFja092ZXJmbG93IGRpc2N1c3Npb24gaHR0cDovL2dvby5nbC9vY2xySjlcblxuY2xhc3MgUGFzc0NvbnRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY29udGV4dDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIENoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cbn1cblxuUGFzc0NvbnRleHQucHJvcFR5cGVzID0ge1xuICBjb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuUGFzc0NvbnRleHQuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc0NvbnRleHQ7XG4iXX0=
