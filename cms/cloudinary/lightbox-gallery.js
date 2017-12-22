var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component } from 'react';
import PropTypes from 'prop-types';

var LightboxGallery = (_temp = _class = function (_Component) {
  _inherits(LightboxGallery, _Component);

  function LightboxGallery() {
    _classCallCheck(this, LightboxGallery);

    return _possibleConstructorReturn(this, (LightboxGallery.__proto__ || Object.getPrototypeOf(LightboxGallery)).apply(this, arguments));
  }

  _createClass(LightboxGallery, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var gallery = this.props.gallery;

      return {
        gallery: gallery || Math.random().toString(36).substr(2, 9)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children;
    }
  }]);

  return LightboxGallery;
}(Component), _class.childContextTypes = {
  gallery: PropTypes.string
}, _temp);
export { LightboxGallery as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvbGlnaHRib3gtZ2FsbGVyeS5lczYiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiTGlnaHRib3hHYWxsZXJ5IiwiZ2FsbGVyeSIsInByb3BzIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLFNBQVQsUUFBMEIsT0FBMUI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztJQUVxQkMsZTs7Ozs7Ozs7Ozs7c0NBS0Q7QUFBQSxVQUNSQyxPQURRLEdBQ0ksS0FBS0MsS0FEVCxDQUNSRCxPQURROztBQUVoQixhQUFPO0FBQ0xBLGlCQUNFQSxXQUNBRSxLQUFLQyxNQUFMLEdBQ0dDLFFBREgsQ0FDWSxFQURaLEVBRUdDLE1BRkgsQ0FFVSxDQUZWLEVBRWEsQ0FGYjtBQUhHLE9BQVA7QUFPRDs7OzZCQUVRO0FBQUEsVUFDQ0MsUUFERCxHQUNjLEtBQUtMLEtBRG5CLENBQ0NLLFFBREQ7O0FBRVAsYUFBT0EsUUFBUDtBQUNEOzs7O0VBbkIwQ1QsUyxVQUNwQ1UsaUIsR0FBb0I7QUFDekJQLFdBQVNGLFVBQVVVO0FBRE0sQztTQURSVCxlIiwiZmlsZSI6InBhY2thZ2VzL2Nsb3VkaW5hcnkvbGlnaHRib3gtZ2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZ2h0Ym94R2FsbGVyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBnYWxsZXJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICBjb25zdCB7IGdhbGxlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdhbGxlcnk6XG4gICAgICAgIGdhbGxlcnkgfHxcbiAgICAgICAgTWF0aC5yYW5kb20oKVxuICAgICAgICAgIC50b1N0cmluZygzNilcbiAgICAgICAgICAuc3Vic3RyKDIsIDkpLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiJdfQ==
