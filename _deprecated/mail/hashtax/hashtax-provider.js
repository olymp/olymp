var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Children } from 'react';
import hashtax from './hashtax';
import PropTypes from 'prop-types';

// HashtaxProvider
var HashtaxProvider = (_temp = _class = function (_Component) {
  _inherits(HashtaxProvider, _Component);

  function HashtaxProvider(props) {
    _classCallCheck(this, HashtaxProvider);

    var _this = _possibleConstructorReturn(this, (HashtaxProvider.__proto__ || Object.getPrototypeOf(HashtaxProvider)).call(this, props));

    _this.Hashtax = hashtax(props);
    return _this;
  }

  _createClass(HashtaxProvider, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(newProps) {
      this.Hashtax = hashtax(newProps);
      return true;
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        Hashtax: this.Hashtax
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return Children.only(children);
    }
  }]);

  return HashtaxProvider;
}(Component), _class.childContextTypes = {
  Hashtax: PropTypes.func.isRequired
}, _temp);

export default HashtaxProvider;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL21haWwvaGFzaHRheC9oYXNodGF4LXByb3ZpZGVyLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNoaWxkcmVuIiwiaGFzaHRheCIsIlByb3BUeXBlcyIsIkhhc2h0YXhQcm92aWRlciIsInByb3BzIiwiSGFzaHRheCIsIm5ld1Byb3BzIiwiY2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRDb250ZXh0VHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLEVBQTJCQyxRQUEzQixRQUEyQyxPQUEzQztBQUNBLE9BQU9DLE9BQVAsTUFBb0IsV0FBcEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztBQUVBO0lBQ01DLGU7OztBQUtKLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLE9BQUwsR0FBZUosUUFBUUcsS0FBUixDQUFmO0FBRmlCO0FBR2xCOzs7OzBDQUVxQkUsUSxFQUFVO0FBQzlCLFdBQUtELE9BQUwsR0FBZUosUUFBUUssUUFBUixDQUFmO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTztBQUNMRCxpQkFBUyxLQUFLQTtBQURULE9BQVA7QUFHRDs7OzZCQUVRO0FBQUEsVUFDQ0UsUUFERCxHQUNjLEtBQUtILEtBRG5CLENBQ0NHLFFBREQ7O0FBRVAsYUFBT1AsU0FBU1EsSUFBVCxDQUFjRCxRQUFkLENBQVA7QUFDRDs7OztFQXhCMkJSLFMsVUFDckJVLGlCLEdBQW9CO0FBQ3pCSixXQUFTSCxVQUFVUSxJQUFWLENBQWVDO0FBREMsQzs7QUF5QjdCLGVBQWVSLGVBQWYiLCJmaWxlIjoicGFja2FnZXMvbWFpbC9oYXNodGF4L2hhc2h0YXgtcHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBoYXNodGF4IGZyb20gJy4vaGFzaHRheCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBIYXNodGF4UHJvdmlkZXJcbmNsYXNzIEhhc2h0YXhQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBIYXNodGF4OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuSGFzaHRheCA9IGhhc2h0YXgocHJvcHMpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5ld1Byb3BzKSB7XG4gICAgdGhpcy5IYXNodGF4ID0gaGFzaHRheChuZXdQcm9wcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEhhc2h0YXg6IHRoaXMuSGFzaHRheCxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBIYXNodGF4UHJvdmlkZXI7XG4iXX0=
