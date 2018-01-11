var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createVerify, setAttributes } from './redux';

export default (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (WrappedComponent) {
    var _dec, _class;

    var attributes = options.attributes;

    if (attributes) {
      setAttributes(attributes);
    }
    var WithAuth = (_dec = connect(function (_ref) {
      var auth = _ref.auth;
      return { verifying: auth.verifying };
    }, function (dispatch) {
      return { verify: createVerify(dispatch) };
    }), _dec(_class = function (_Component) {
      _inherits(WithAuth, _Component);

      function WithAuth(props) {
        _classCallCheck(this, WithAuth);

        var _this = _possibleConstructorReturn(this, (WithAuth.__proto__ || Object.getPrototypeOf(WithAuth)).call(this, props));

        if (props.auth && props.auth.attributes) {
          setAttributes(props.auth.attributes);
        }
        if (props.verifying) {
          props.verify(props.verifying);
        }
        return _this;
      }

      _createClass(WithAuth, [{
        key: 'render',
        value: function render() {
          return React.createElement(WrappedComponent, this.props);
        }
      }]);

      return WithAuth;
    }(Component)) || _class);

    return WithAuth;
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvdXNlLWF1dGguZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsImNyZWF0ZVZlcmlmeSIsInNldEF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYXR0cmlidXRlcyIsIldpdGhBdXRoIiwiYXV0aCIsInZlcmlmeWluZyIsInZlcmlmeSIsImRpc3BhdGNoIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGFBQXhCO0FBQ0EsU0FBU0MsWUFBVCxFQUF1QkMsYUFBdkIsUUFBNEMsU0FBNUM7O0FBRUEsZ0JBQWU7QUFBQSxNQUFDQyxPQUFELHVFQUFXLEVBQVg7QUFBQSxTQUFrQiw0QkFBb0I7QUFBQTs7QUFBQSxRQUMzQ0MsVUFEMkMsR0FDNUJELE9BRDRCLENBQzNDQyxVQUQyQzs7QUFFbkQsUUFBSUEsVUFBSixFQUFnQjtBQUNkRixvQkFBY0UsVUFBZDtBQUNEO0FBSmtELFFBUzdDQyxRQVQ2QyxXQUtsREwsUUFDQztBQUFBLFVBQUdNLElBQUgsUUFBR0EsSUFBSDtBQUFBLGFBQWUsRUFBRUMsV0FBV0QsS0FBS0MsU0FBbEIsRUFBZjtBQUFBLEtBREQsRUFFQztBQUFBLGFBQWEsRUFBRUMsUUFBUVAsYUFBYVEsUUFBYixDQUFWLEVBQWI7QUFBQSxLQUZELENBTGtEO0FBQUE7O0FBVWpELHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1hBLEtBRFc7O0FBRWpCLFlBQUlBLE1BQU1KLElBQU4sSUFBY0ksTUFBTUosSUFBTixDQUFXRixVQUE3QixFQUF5QztBQUN2Q0Ysd0JBQWNRLE1BQU1KLElBQU4sQ0FBV0YsVUFBekI7QUFDRDtBQUNELFlBQUlNLE1BQU1ILFNBQVYsRUFBcUI7QUFDbkJHLGdCQUFNRixNQUFOLENBQWFFLE1BQU1ILFNBQW5CO0FBQ0Q7QUFQZ0I7QUFRbEI7O0FBbEJnRDtBQUFBO0FBQUEsaUNBbUJ4QztBQUNQLGlCQUFPLG9CQUFDLGdCQUFELEVBQXNCLEtBQUtHLEtBQTNCLENBQVA7QUFDRDtBQXJCZ0Q7O0FBQUE7QUFBQSxNQVM1QlgsU0FUNEI7O0FBdUJuRCxXQUFPTSxRQUFQO0FBQ0QsR0F4QmM7QUFBQSxDQUFmIiwiZmlsZSI6InBhY2thZ2VzL2F1dGgvdXNlLWF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVZlcmlmeSwgc2V0QXR0cmlidXRlcyB9IGZyb20gJy4vcmVkdXgnO1xuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucyA9IHt9KSA9PiBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSBvcHRpb25zO1xuICBpZiAoYXR0cmlidXRlcykge1xuICAgIHNldEF0dHJpYnV0ZXMoYXR0cmlidXRlcyk7XG4gIH1cbiAgQGNvbm5lY3QoXG4gICAgKHsgYXV0aCB9KSA9PiAoeyB2ZXJpZnlpbmc6IGF1dGgudmVyaWZ5aW5nIH0pLFxuICAgIGRpc3BhdGNoID0+ICh7IHZlcmlmeTogY3JlYXRlVmVyaWZ5KGRpc3BhdGNoKSB9KSxcbiAgKVxuICBjbGFzcyBXaXRoQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIGlmIChwcm9wcy5hdXRoICYmIHByb3BzLmF1dGguYXR0cmlidXRlcykge1xuICAgICAgICBzZXRBdHRyaWJ1dGVzKHByb3BzLmF1dGguYXR0cmlidXRlcyk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMudmVyaWZ5aW5nKSB7XG4gICAgICAgIHByb3BzLnZlcmlmeShwcm9wcy52ZXJpZnlpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbiAgfVxuICByZXR1cm4gV2l0aEF1dGg7XG59O1xuIl19
