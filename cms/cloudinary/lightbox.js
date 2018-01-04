'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _olympRouter = require('olymp-router');

var _reactAsyncComponent = require('react-async-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LightBox = (0, _reactAsyncComponent.asyncComponent)({
  resolve: function resolve() {
    return new Promise(function (resolve) {
      return (
        // Webpack's code splitting API w/naming
        require.ensure([], function (require) {
          resolve(require('olymp-fela/lightbox'));
        }, 'lightbox')
      );
    });
  }
});

var Lightbox = (_dec = (0, _recompose.getContext)({
  gallery: _propTypes2.default.string
}), _dec2 = (0, _reactRedux.connect)(function (_ref, _ref2) {
  var location = _ref.location,
      lightbox = _ref.lightbox;
  var gallery = _ref2.gallery;

  var images = (gallery ? lightbox[gallery] : lightbox.images) || [];
  var ref = location.query.lightbox;
  var index = images.findIndex(function (img) {
    return img.ref === ref;
  });
  var prev = index > 0 ? index - 1 : images.length - 1;
  var next = index < images.length - 1 ? index + 1 : 0;

  return {
    images: images,
    prev: prev,
    next: next,
    index: index,
    image: index >= 0 ? images[index] : null
  };
}, function (dispatch) {
  return {
    updateQuery: (0, _olympRouter.createUpdateQuery)(dispatch)
  };
}), _dec(_class = _dec2(_class = function (_Component) {
  _inherits(Lightbox, _Component);

  function Lightbox() {
    _classCallCheck(this, Lightbox);

    return _possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).apply(this, arguments));
  }

  _createClass(Lightbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          updateQuery = _props.updateQuery,
          images = _props.images,
          index = _props.index,
          next = _props.next,
          prev = _props.prev,
          image = _props.image,
          rest = _objectWithoutProperties(_props, ['updateQuery', 'images', 'index', 'next', 'prev', 'image']);

      return _react2.default.createElement(LightBox, _extends({
        images: images,
        currentImage: index,
        isOpen: index >= 0,
        onClose: function onClose() {
          return updateQuery({ lightbox: undefined });
        },
        onClickPrev: function onClickPrev() {
          return updateQuery({ lightbox: images[prev].ref });
        },
        onClickNext: function onClickNext() {
          return updateQuery({ lightbox: images[next].ref });
        },
        onClickThumbnail: function onClickThumbnail(i) {
          return updateQuery({ lightbox: images[i].ref });
        },
        imageCountSeparator: ' von ',
        backdropClosesModal: true,
        showThumbnails: images.length !== 1
      }, rest));
    }
  }]);

  return Lightbox;
}(_react.Component)) || _class) || _class);
exports.default = Lightbox;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L2xpZ2h0Ym94LmVzNiJdLCJuYW1lcyI6WyJMaWdodEJveCIsInJlc29sdmUiLCJQcm9taXNlIiwicmVxdWlyZSIsImVuc3VyZSIsIkxpZ2h0Ym94IiwiZ2FsbGVyeSIsInN0cmluZyIsImxvY2F0aW9uIiwibGlnaHRib3giLCJpbWFnZXMiLCJyZWYiLCJxdWVyeSIsImluZGV4IiwiZmluZEluZGV4IiwiaW1nIiwicHJldiIsImxlbmd0aCIsIm5leHQiLCJpbWFnZSIsInVwZGF0ZVF1ZXJ5IiwiZGlzcGF0Y2giLCJwcm9wcyIsInJlc3QiLCJ1bmRlZmluZWQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLHlDQUFlO0FBQzlCQyxXQUFTO0FBQUEsV0FDUCxJQUFJQyxPQUFKLENBQVk7QUFBQTtBQUNWO0FBQ0FDLGdCQUFRQyxNQUFSLENBQ0UsRUFERixFQUVFLG1CQUFXO0FBQ1RILGtCQUFRRSxRQUFRLHFCQUFSLENBQVI7QUFDRCxTQUpILEVBS0UsVUFMRjtBQUZVO0FBQUEsS0FBWixDQURPO0FBQUE7QUFEcUIsQ0FBZixDQUFqQjs7SUFxQ3FCRSxRLFdBdkJwQiwyQkFBVztBQUNWQyxXQUFTLG9CQUFVQztBQURULENBQVgsQyxVQUdBLHlCQUNDLHVCQUF5QztBQUFBLE1BQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBZEgsT0FBYyxTQUFkQSxPQUFjOztBQUN2QyxNQUFNSSxTQUFTLENBQUNKLFVBQVVHLFNBQVNILE9BQVQsQ0FBVixHQUE4QkcsU0FBU0MsTUFBeEMsS0FBbUQsRUFBbEU7QUFDQSxNQUFNQyxNQUFNSCxTQUFTSSxLQUFULENBQWVILFFBQTNCO0FBQ0EsTUFBTUksUUFBUUgsT0FBT0ksU0FBUCxDQUFpQjtBQUFBLFdBQU9DLElBQUlKLEdBQUosS0FBWUEsR0FBbkI7QUFBQSxHQUFqQixDQUFkO0FBQ0EsTUFBTUssT0FBT0gsUUFBUSxDQUFSLEdBQVlBLFFBQVEsQ0FBcEIsR0FBd0JILE9BQU9PLE1BQVAsR0FBZ0IsQ0FBckQ7QUFDQSxNQUFNQyxPQUFPTCxRQUFRSCxPQUFPTyxNQUFQLEdBQWdCLENBQXhCLEdBQTRCSixRQUFRLENBQXBDLEdBQXdDLENBQXJEOztBQUVBLFNBQU87QUFDTEgsa0JBREs7QUFFTE0sY0FGSztBQUdMRSxjQUhLO0FBSUxMLGdCQUpLO0FBS0xNLFdBQU9OLFNBQVMsQ0FBVCxHQUFhSCxPQUFPRyxLQUFQLENBQWIsR0FBNkI7QUFML0IsR0FBUDtBQU9ELENBZkYsRUFnQkM7QUFBQSxTQUFhO0FBQ1hPLGlCQUFhLG9DQUFrQkMsUUFBbEI7QUFERixHQUFiO0FBQUEsQ0FoQkQsQzs7Ozs7Ozs7Ozs7NkJBcUJVO0FBQUEsbUJBU0gsS0FBS0MsS0FURjtBQUFBLFVBRUxGLFdBRkssVUFFTEEsV0FGSztBQUFBLFVBR0xWLE1BSEssVUFHTEEsTUFISztBQUFBLFVBSUxHLEtBSkssVUFJTEEsS0FKSztBQUFBLFVBS0xLLElBTEssVUFLTEEsSUFMSztBQUFBLFVBTUxGLElBTkssVUFNTEEsSUFOSztBQUFBLFVBT0xHLEtBUEssVUFPTEEsS0FQSztBQUFBLFVBUUZJLElBUkU7O0FBV1AsYUFDRSw4QkFBQyxRQUFEO0FBQ0UsZ0JBQVFiLE1BRFY7QUFFRSxzQkFBY0csS0FGaEI7QUFHRSxnQkFBUUEsU0FBUyxDQUhuQjtBQUlFLGlCQUFTO0FBQUEsaUJBQU1PLFlBQVksRUFBRVgsVUFBVWUsU0FBWixFQUFaLENBQU47QUFBQSxTQUpYO0FBS0UscUJBQWE7QUFBQSxpQkFBTUosWUFBWSxFQUFFWCxVQUFVQyxPQUFPTSxJQUFQLEVBQWFMLEdBQXpCLEVBQVosQ0FBTjtBQUFBLFNBTGY7QUFNRSxxQkFBYTtBQUFBLGlCQUFNUyxZQUFZLEVBQUVYLFVBQVVDLE9BQU9RLElBQVAsRUFBYVAsR0FBekIsRUFBWixDQUFOO0FBQUEsU0FOZjtBQU9FLDBCQUFrQjtBQUFBLGlCQUFLUyxZQUFZLEVBQUVYLFVBQVVDLE9BQU9lLENBQVAsRUFBVWQsR0FBdEIsRUFBWixDQUFMO0FBQUEsU0FQcEI7QUFRRSw2QkFBb0IsT0FSdEI7QUFTRSxpQ0FURjtBQVVFLHdCQUFnQkQsT0FBT08sTUFBUCxLQUFrQjtBQVZwQyxTQVdNTSxJQVhOLEVBREY7QUFlRDs7Ozs7a0JBM0JrQmxCLFEiLCJmaWxlIjoiY21zL2Nsb3VkaW5hcnkvbGlnaHRib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZVVwZGF0ZVF1ZXJ5IH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IGFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtYXN5bmMtY29tcG9uZW50JztcblxuY29uc3QgTGlnaHRCb3ggPSBhc3luY0NvbXBvbmVudCh7XG4gIHJlc29sdmU6ICgpID0+XG4gICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PlxuICAgICAgLy8gV2VicGFjaydzIGNvZGUgc3BsaXR0aW5nIEFQSSB3L25hbWluZ1xuICAgICAgcmVxdWlyZS5lbnN1cmUoXG4gICAgICAgIFtdLFxuICAgICAgICByZXF1aXJlID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcXVpcmUoJ29seW1wLWZlbGEvbGlnaHRib3gnKSk7XG4gICAgICAgIH0sXG4gICAgICAgICdsaWdodGJveCcsXG4gICAgICApLFxuICAgICksXG59KTtcblxuQGdldENvbnRleHQoe1xuICBnYWxsZXJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxufSlcbkBjb25uZWN0KFxuICAoeyBsb2NhdGlvbiwgbGlnaHRib3ggfSwgeyBnYWxsZXJ5IH0pID0+IHtcbiAgICBjb25zdCBpbWFnZXMgPSAoZ2FsbGVyeSA/IGxpZ2h0Ym94W2dhbGxlcnldIDogbGlnaHRib3guaW1hZ2VzKSB8fCBbXTtcbiAgICBjb25zdCByZWYgPSBsb2NhdGlvbi5xdWVyeS5saWdodGJveDtcbiAgICBjb25zdCBpbmRleCA9IGltYWdlcy5maW5kSW5kZXgoaW1nID0+IGltZy5yZWYgPT09IHJlZik7XG4gICAgY29uc3QgcHJldiA9IGluZGV4ID4gMCA/IGluZGV4IC0gMSA6IGltYWdlcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG5leHQgPSBpbmRleCA8IGltYWdlcy5sZW5ndGggLSAxID8gaW5kZXggKyAxIDogMDtcblxuICAgIHJldHVybiB7XG4gICAgICBpbWFnZXMsXG4gICAgICBwcmV2LFxuICAgICAgbmV4dCxcbiAgICAgIGluZGV4LFxuICAgICAgaW1hZ2U6IGluZGV4ID49IDAgPyBpbWFnZXNbaW5kZXhdIDogbnVsbCxcbiAgICB9O1xuICB9LFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIHVwZGF0ZVF1ZXJ5OiBjcmVhdGVVcGRhdGVRdWVyeShkaXNwYXRjaCksXG4gIH0pLFxuKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlnaHRib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXBkYXRlUXVlcnksXG4gICAgICBpbWFnZXMsXG4gICAgICBpbmRleCxcbiAgICAgIG5leHQsXG4gICAgICBwcmV2LFxuICAgICAgaW1hZ2UsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExpZ2h0Qm94XG4gICAgICAgIGltYWdlcz17aW1hZ2VzfVxuICAgICAgICBjdXJyZW50SW1hZ2U9e2luZGV4fVxuICAgICAgICBpc09wZW49e2luZGV4ID49IDB9XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHVwZGF0ZVF1ZXJ5KHsgbGlnaHRib3g6IHVuZGVmaW5lZCB9KX1cbiAgICAgICAgb25DbGlja1ByZXY9eygpID0+IHVwZGF0ZVF1ZXJ5KHsgbGlnaHRib3g6IGltYWdlc1twcmV2XS5yZWYgfSl9XG4gICAgICAgIG9uQ2xpY2tOZXh0PXsoKSA9PiB1cGRhdGVRdWVyeSh7IGxpZ2h0Ym94OiBpbWFnZXNbbmV4dF0ucmVmIH0pfVxuICAgICAgICBvbkNsaWNrVGh1bWJuYWlsPXtpID0+IHVwZGF0ZVF1ZXJ5KHsgbGlnaHRib3g6IGltYWdlc1tpXS5yZWYgfSl9XG4gICAgICAgIGltYWdlQ291bnRTZXBhcmF0b3I9XCIgdm9uIFwiXG4gICAgICAgIGJhY2tkcm9wQ2xvc2VzTW9kYWxcbiAgICAgICAgc2hvd1RodW1ibmFpbHM9e2ltYWdlcy5sZW5ndGggIT09IDF9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=
