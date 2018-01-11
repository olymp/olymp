import _debounce from 'lodash/debounce';
import _throttle from 'lodash/throttle';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import cn from 'classnames';

export default (function (WrappedComponent) {
  return function (_Component) {
    _inherits(WithScroll, _Component);

    function WithScroll() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, WithScroll);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithScroll.__proto__ || Object.getPrototypeOf(WithScroll)).call.apply(_ref, [this].concat(args))), _this), _this.state = { top: 0 }, _this.onScroll = _throttle(function (e) {
        var top = e.target.scrollTop;
        _this.setState({ top: top });
      }, 0, { trailing: true, leading: true }), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WithScroll, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('scroll', this.onScroll, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll, true);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = this.state.className;
        var top = this.state.top;

        if (top && false) {
          className = cn(className, top && 'is-scrolled');
        }
        return React.createElement(WrappedComponent, _extends({}, this.props, { scrollTop: top }));
      }
    }]);

    return WithScroll;
  }(Component);
});

export var withScrollHide = function withScrollHide(WrappedComponent) {
  return function (_Component2) {
    _inherits(WithScroll, _Component2);

    function WithScroll() {
      var _ref2;

      var _temp2, _this2, _ret2;

      _classCallCheck(this, WithScroll);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = WithScroll.__proto__ || Object.getPrototypeOf(WithScroll)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = { top: 0, scrolling: true }, _this2.onScrollDebounce = _debounce(function (e) {
        var top = e.target.scrollTop;
        _this2.setState({ top: top, scrolling: false });
      }, 100, { trailing: true, leading: false }), _this2.onScroll = function (e) {
        if (!_this2.state.scrolling) {
          _this2.setState({ scrolling: true });
        }
        _this2.onScrollDebounce(e);
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(WithScroll, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('scroll', this.onScroll, true);
        this.onScroll({ target: document });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll, true);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = this.state.className;
        var _state = this.state,
            top = _state.top,
            scrolling = _state.scrolling;

        return React.createElement(WrappedComponent, _extends({}, this.props, {
          scrollTop: top,
          scrolling: scrolling
        }));
      }
    }]);

    return WithScroll;
  }(Component);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvc2Nyb2xsLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNuIiwic3RhdGUiLCJ0b3AiLCJvblNjcm9sbCIsImUiLCJ0YXJnZXQiLCJzY3JvbGxUb3AiLCJzZXRTdGF0ZSIsInRyYWlsaW5nIiwibGVhZGluZyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc05hbWUiLCJwcm9wcyIsIndpdGhTY3JvbGxIaWRlIiwic2Nyb2xsaW5nIiwib25TY3JvbGxEZWJvdW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDOztBQUVBLE9BQU9DLEVBQVAsTUFBZSxZQUFmOztBQUVBLGdCQUFlO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxnTUFFWEMsS0FGVyxHQUVILEVBQUVDLEtBQUssQ0FBUCxFQUZHLFFBR1hDLFFBSFcsR0FHQSxVQUNULGFBQUs7QUFDSCxZQUFNRCxNQUFNRSxFQUFFQyxNQUFGLENBQVNDLFNBQXJCO0FBQ0EsY0FBS0MsUUFBTCxDQUFjLEVBQUVMLFFBQUYsRUFBZDtBQUNELE9BSlEsRUFLVCxDQUxTLEVBTVQsRUFBRU0sVUFBVSxJQUFaLEVBQWtCQyxTQUFTLElBQTNCLEVBTlMsQ0FIQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwwQ0FXUztBQUNsQkMsaUJBQVNDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLEtBQUtSLFFBQXpDLEVBQW1ELElBQW5EO0FBQ0Q7QUFiVTtBQUFBO0FBQUEsNkNBY1k7QUFDckJPLGlCQUFTRSxtQkFBVCxDQUE2QixRQUE3QixFQUF1QyxLQUFLVCxRQUE1QyxFQUFzRCxJQUF0RDtBQUNEO0FBaEJVO0FBQUE7QUFBQSwrQkFpQkY7QUFBQSxZQUNEVSxTQURDLEdBQ2EsS0FBS1osS0FEbEIsQ0FDRFksU0FEQztBQUFBLFlBRUNYLEdBRkQsR0FFUyxLQUFLRCxLQUZkLENBRUNDLEdBRkQ7O0FBR1AsWUFBSUEsT0FBTyxLQUFYLEVBQWtCO0FBQ2hCVyxzQkFBWWIsR0FBR2EsU0FBSCxFQUFjWCxPQUFPLGFBQXJCLENBQVo7QUFDRDtBQUNELGVBQU8sb0JBQUMsZ0JBQUQsZUFBc0IsS0FBS1ksS0FBM0IsSUFBa0MsV0FBV1osR0FBN0MsSUFBUDtBQUNEO0FBeEJVOztBQUFBO0FBQUEsSUFDWUgsU0FEWjtBQUFBLENBQWY7O0FBMkJBLE9BQU8sSUFBTWdCLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLHVNQUUxQmQsS0FGMEIsR0FFbEIsRUFBRUMsS0FBSyxDQUFQLEVBQVVjLFdBQVcsSUFBckIsRUFGa0IsU0FHMUJDLGdCQUgwQixHQUdQLFVBQ2pCLGFBQUs7QUFDSCxZQUFNZixNQUFNRSxFQUFFQyxNQUFGLENBQVNDLFNBQXJCO0FBQ0EsZUFBS0MsUUFBTCxDQUFjLEVBQUVMLFFBQUYsRUFBT2MsV0FBVyxLQUFsQixFQUFkO0FBQ0QsT0FKZ0IsRUFLakIsR0FMaUIsRUFNakIsRUFBRVIsVUFBVSxJQUFaLEVBQWtCQyxTQUFTLEtBQTNCLEVBTmlCLENBSE8sU0FXMUJOLFFBWDBCLEdBV2YsYUFBSztBQUNkLFlBQUksQ0FBQyxPQUFLRixLQUFMLENBQVdlLFNBQWhCLEVBQTJCO0FBQ3pCLGlCQUFLVCxRQUFMLENBQWMsRUFBRVMsV0FBVyxJQUFiLEVBQWQ7QUFDRDtBQUNELGVBQUtDLGdCQUFMLENBQXNCYixDQUF0QjtBQUNELE9BaEJ5QjtBQUFBOztBQUFBO0FBQUE7QUFBQSwwQ0FpQk47QUFDbEJNLGlCQUFTQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxLQUFLUixRQUF6QyxFQUFtRCxJQUFuRDtBQUNBLGFBQUtBLFFBQUwsQ0FBYyxFQUFFRSxRQUFRSyxRQUFWLEVBQWQ7QUFDRDtBQXBCeUI7QUFBQTtBQUFBLDZDQXFCSDtBQUNyQkEsaUJBQVNFLG1CQUFULENBQTZCLFFBQTdCLEVBQXVDLEtBQUtULFFBQTVDLEVBQXNELElBQXREO0FBQ0Q7QUF2QnlCO0FBQUE7QUFBQSwrQkF3QmpCO0FBQUEsWUFDQ1UsU0FERCxHQUNlLEtBQUtaLEtBRHBCLENBQ0NZLFNBREQ7QUFBQSxxQkFFb0IsS0FBS1osS0FGekI7QUFBQSxZQUVDQyxHQUZELFVBRUNBLEdBRkQ7QUFBQSxZQUVNYyxTQUZOLFVBRU1BLFNBRk47O0FBR1AsZUFDRSxvQkFBQyxnQkFBRCxlQUNNLEtBQUtGLEtBRFg7QUFFRSxxQkFBV1osR0FGYjtBQUdFLHFCQUFXYztBQUhiLFdBREY7QUFPRDtBQWxDeUI7O0FBQUE7QUFBQSxJQUNIakIsU0FERztBQUFBLENBQXZCIiwiZmlsZSI6InBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRocm90dGxlLCBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgV2l0aFNjcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7IHRvcDogMCB9O1xuICAgIG9uU2Nyb2xsID0gdGhyb3R0bGUoXG4gICAgICBlID0+IHtcbiAgICAgICAgY29uc3QgdG9wID0gZS50YXJnZXQuc2Nyb2xsVG9wO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9wIH0pO1xuICAgICAgfSxcbiAgICAgIDAsXG4gICAgICB7IHRyYWlsaW5nOiB0cnVlLCBsZWFkaW5nOiB0cnVlIH0sXG4gICAgKTtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICBsZXQgeyBjbGFzc05hbWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB7IHRvcCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGlmICh0b3AgJiYgZmFsc2UpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gY24oY2xhc3NOYW1lLCB0b3AgJiYgJ2lzLXNjcm9sbGVkJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHNjcm9sbFRvcD17dG9wfSAvPjtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBjb25zdCB3aXRoU2Nyb2xsSGlkZSA9IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgV2l0aFNjcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7IHRvcDogMCwgc2Nyb2xsaW5nOiB0cnVlIH07XG4gICAgb25TY3JvbGxEZWJvdW5jZSA9IGRlYm91bmNlKFxuICAgICAgZSA9PiB7XG4gICAgICAgIGNvbnN0IHRvcCA9IGUudGFyZ2V0LnNjcm9sbFRvcDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvcCwgc2Nyb2xsaW5nOiBmYWxzZSB9KTtcbiAgICAgIH0sXG4gICAgICAxMDAsXG4gICAgICB7IHRyYWlsaW5nOiB0cnVlLCBsZWFkaW5nOiBmYWxzZSB9LFxuICAgICk7XG4gICAgb25TY3JvbGwgPSBlID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5zY3JvbGxpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbGluZzogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25TY3JvbGxEZWJvdW5jZShlKTtcbiAgICB9O1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICB0aGlzLm9uU2Nyb2xsKHsgdGFyZ2V0OiBkb2N1bWVudCB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB7IHRvcCwgc2Nyb2xsaW5nIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBzY3JvbGxUb3A9e3RvcH1cbiAgICAgICAgICBzY3JvbGxpbmc9e3Njcm9sbGluZ31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuIl19
