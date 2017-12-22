var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component } from 'react';
import { connect } from 'react-redux';
import withRedux from './lightbox-redux';

var enhanceQuery = connect(function (_ref) {
  var location = _ref.location;
  return {
    qlightbox: location.query.lightbox
  };
});

var LightboxProvider = enhanceQuery(_class = withRedux(_class = function (_Component) {
  _inherits(LightboxProvider, _Component);

  function LightboxProvider() {
    _classCallCheck(this, LightboxProvider);

    return _possibleConstructorReturn(this, (LightboxProvider.__proto__ || Object.getPrototypeOf(LightboxProvider)).apply(this, arguments));
  }

  _createClass(LightboxProvider, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children;
    }
  }]);

  return LightboxProvider;
}(Component)) || _class) || _class;

export { LightboxProvider as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvbGlnaHRib3gtcHJvdmlkZXIuZXM2Il0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImNvbm5lY3QiLCJ3aXRoUmVkdXgiLCJlbmhhbmNlUXVlcnkiLCJsb2NhdGlvbiIsInFsaWdodGJveCIsInF1ZXJ5IiwibGlnaHRib3giLCJMaWdodGJveFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLFNBQVQsUUFBMEIsT0FBMUI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGFBQXhCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixrQkFBdEI7O0FBRUEsSUFBTUMsZUFBZUYsUUFBUTtBQUFBLE1BQUdHLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQzlDQyxlQUFXRCxTQUFTRSxLQUFULENBQWVDO0FBRG9CLEdBQW5CO0FBQUEsQ0FBUixDQUFyQjs7SUFNcUJDLGdCLEdBRnBCTCxZLFVBQ0FELFM7Ozs7Ozs7Ozs7OzZCQUVVO0FBQUEsVUFDQ08sUUFERCxHQUNjLEtBQUtDLEtBRG5CLENBQ0NELFFBREQ7O0FBRVAsYUFBT0EsUUFBUDtBQUNEOzs7O0VBSjJDVCxTOztTQUF6QlEsZ0IiLCJmaWxlIjoicGFja2FnZXMvY2xvdWRpbmFyeS9saWdodGJveC1wcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJy4vbGlnaHRib3gtcmVkdXgnO1xuXG5jb25zdCBlbmhhbmNlUXVlcnkgPSBjb25uZWN0KCh7IGxvY2F0aW9uIH0pID0+ICh7XG4gIHFsaWdodGJveDogbG9jYXRpb24ucXVlcnkubGlnaHRib3gsXG59KSk7XG5cbkBlbmhhbmNlUXVlcnlcbkB3aXRoUmVkdXhcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZ2h0Ym94UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiJdfQ==
