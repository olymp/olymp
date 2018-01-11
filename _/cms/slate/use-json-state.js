'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debounce2 = require('lodash/debounce');

var _debounce3 = _interopRequireDefault(_debounce2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _slatePlainSerializer = require('slate-plain-serializer');

var _slatePlainSerializer2 = _interopRequireDefault(_slatePlainSerializer);

var _slate = require('slate');

var _slateBase64Serializer = require('slate-base64-serializer');

var _slateBase64Serializer2 = _interopRequireDefault(_slateBase64Serializer);

var _createToc = require('./create-toc');

var _createToc2 = _interopRequireDefault(_createToc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stateWrapper = function stateWrapper(WrappedComponent) {
  return function (_Component) {
    _inherits(Slate, _Component);

    function Slate(props) {
      _classCallCheck(this, Slate);

      var _this = _possibleConstructorReturn(this, (Slate.__proto__ || Object.getPrototypeOf(Slate)).call(this, props));

      _this.getAllBlocks = function (nodes, mapper, parent) {
        var arr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        return nodes.reduce(function (state, node) {
          arr.push(node);
          mapper(node, parent);
          if (node.nodes) {
            arr = _this.getAllBlocks(node.nodes, mapper, node, arr);
          }
          return arr;
        }, arr);
      };

      _this.propagateChange = function (value) {
        _this.base64 = _slateBase64Serializer2.default.serialize(value);
        if (_this.base64 !== _this.props.base64) {
          var json = value.toJSON();
          var nodes = json.document.nodes;

          var text = '';
          var title = null;
          var image = null;
          _this.getAllBlocks(value.document.nodes, function (node, parent) {
            if (node.type === 'paragraph' && (!parent || parent.type && parent.type.indexOf('heading') === -1) && node.text) {
              text += node.text + '\n';
            }
            if (!title && node.type && node.type.indexOf('heading-') === 0 && node.text) {
              title = node.text;
            }
            if (!image && node.data && node.data.get('value')) {
              var img = Array.isArray(node.data.get('value')) ? node.data.get('value')[0] : node.data.get('value');
              if (img && img.url && img.url.indexOf('cloudinary') !== -1) {
                image = {
                  width: img.width,
                  height: img.height,
                  url: img.url,
                  crop: img.crop
                };
              }
              console.log(image);
            }
          });
          var count = 355;
          var extract = text.slice(0, count) + (text.length > count ? '...' : '');
          // image, title, chapters
          return _this.props.onChange({
            nodes: nodes,
            text: text,
            extract: extract,
            title: title,
            image: image,
            toc: (0, _createToc2.default)(value)
          });
        }
      };

      _this.debouncedPropagateChange = (0, _debounce3.default)(_this.propagateChange, 800, {
        leading: false,
        trailing: true
      });

      _this.onChange = function (value) {
        if (!_this.props.onChange) {
          return;
        }
        _this.setState({ value: value }, function () {
          _this.debouncedPropagateChange(value);
        });
      };

      _this.signal = props.signal;
      _this.base64 = props.base64;
      _this.state = { value: props.value };
      return _this;
    }

    _createClass(Slate, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        if (this.state.value !== newProps.value && this.base64 !== newProps.base64 && this.signal !== newProps.signal) {
          this.signal = newProps.signal;
          this.base64 = newProps.base64;
          this.state.value = newProps.value;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var value = this.state.value;

        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          value: value,
          onChange: this.onChange
        }));
      }
    }]);

    return Slate;
  }(_react.Component);
};

exports.default = (0, _recompose.compose)((0, _recompose.withPropsOnChange)(['value', 'signal'], function (_ref) {
  var value = _ref.value,
      signal = _ref.signal;

  var state = void 0;
  if (value && _slate.Value.isValue(value)) {
    state = value;
  } else if (value && value.nodes) {
    var newValue = {};
    Object.keys(value || []).forEach(function (key) {
      if (key === 'nodes') {
        newValue[key] = getNodes(value[key]);
      } else {
        newValue[key] = value[key];
      }
    });
    state = _slate.Value.fromJSON({
      document: {
        nodes: newValue.nodes,
        kind: 'document',
        data: { signal: signal }
      },
      kind: 'value'
    });
  } else {
    state = _slatePlainSerializer2.default.deserialize('');
  }
  return {
    value: state,
    base64: _slateBase64Serializer2.default.serialize(state),
    toc: value && value.toc
  };
}), stateWrapper);


var getNodes = function getNodes(nodes) {
  return nodes.map(function (node) {
    var newNode = {};
    Object.keys(node).forEach(function (key) {
      if (key === 'ranges' || key === 'text') {
        if (!newNode.leaves) {
          newNode.leaves = [];
        }

        if (Array.isArray(node[key])) {
          newNode.leaves = [].concat(_toConsumableArray(newNode.leaves), _toConsumableArray(node[key]));
        } else if (typeof node[key] === 'string') {
          newNode.leaves.push({ kind: 'leaf', text: node[key] });
        } else {
          newNode.leaves.push(node[key]);
        }
      } else {
        newNode[key] = node[key];
      }
    });

    if (newNode.nodes && newNode.nodes.length) {
      newNode.nodes = getNodes(newNode.nodes);
    }

    return newNode;
  });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3VzZS1qc29uLXN0YXRlLmVzNiJdLCJuYW1lcyI6WyJzdGF0ZVdyYXBwZXIiLCJwcm9wcyIsImdldEFsbEJsb2NrcyIsIm5vZGVzIiwibWFwcGVyIiwicGFyZW50IiwiYXJyIiwicmVkdWNlIiwic3RhdGUiLCJub2RlIiwicHVzaCIsInByb3BhZ2F0ZUNoYW5nZSIsImJhc2U2NCIsInNlcmlhbGl6ZSIsInZhbHVlIiwianNvbiIsInRvSlNPTiIsImRvY3VtZW50IiwidGV4dCIsInRpdGxlIiwiaW1hZ2UiLCJ0eXBlIiwiaW5kZXhPZiIsImRhdGEiLCJnZXQiLCJpbWciLCJBcnJheSIsImlzQXJyYXkiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImNyb3AiLCJjb25zb2xlIiwibG9nIiwiY291bnQiLCJleHRyYWN0Iiwic2xpY2UiLCJsZW5ndGgiLCJvbkNoYW5nZSIsInRvYyIsImRlYm91bmNlZFByb3BhZ2F0ZUNoYW5nZSIsImxlYWRpbmciLCJ0cmFpbGluZyIsInNldFN0YXRlIiwic2lnbmFsIiwibmV3UHJvcHMiLCJpc1ZhbHVlIiwibmV3VmFsdWUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImdldE5vZGVzIiwiZnJvbUpTT04iLCJraW5kIiwiZGVzZXJpYWxpemUiLCJtYXAiLCJuZXdOb2RlIiwibGVhdmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZTtBQUFBO0FBQUE7O0FBRWpCLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBQUEsWUFpQm5CQyxZQWpCbUIsR0FpQkosVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxNQUFoQjtBQUFBLFlBQXdCQyxHQUF4Qix1RUFBOEIsRUFBOUI7QUFBQSxlQUNiSCxNQUFNSSxNQUFO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QUEsU0FDZmpELE1BQU1xRCxHQUFOLENBQVUsZ0JBQVE7QUFDaEIsUUFBTUMsVUFBVSxFQUFoQjtBQUNBVCxXQUFPQyxJQUFQLENBQVl4QyxJQUFaLEVBQWtCeUMsT0FBbEIsQ0FBMEIsZUFBTztBQUMvQixVQUFJQyxRQUFRLFFBQVIsSUFBb0JBLFFBQVEsTUFBaEMsRUFBd0M7QUFDdEMsWUFBSSxDQUFDTSxRQUFRQyxNQUFiLEVBQXFCO0FBQ25CRCxrQkFBUUMsTUFBUixHQUFpQixFQUFqQjtBQUNEOztBQUVELFlBQUloQyxNQUFNQyxPQUFOLENBQWNsQixLQUFLMEMsR0FBTCxDQUFkLENBQUosRUFBOEI7QUFDNUJNLGtCQUFRQyxNQUFSLGdDQUFxQkQsUUFBUUMsTUFBN0Isc0JBQXdDakQsS0FBSzBDLEdBQUwsQ0FBeEM7QUFDRCxTQUZELE1BRU8sSUFBSSxPQUFPMUMsS0FBSzBDLEdBQUwsQ0FBUCxLQUFxQixRQUF6QixFQUFtQztBQUN4Q00sa0JBQVFDLE1BQVIsQ0FBZWhELElBQWYsQ0FBb0IsRUFBRTRDLE1BQU0sTUFBUixFQUFnQnBDLE1BQU1ULEtBQUswQyxHQUFMLENBQXRCLEVBQXBCO0FBQ0QsU0FGTSxNQUVBO0FBQ0xNLGtCQUFRQyxNQUFSLENBQWVoRCxJQUFmLENBQW9CRCxLQUFLMEMsR0FBTCxDQUFwQjtBQUNEO0FBQ0YsT0FaRCxNQVlPO0FBQ0xNLGdCQUFRTixHQUFSLElBQWUxQyxLQUFLMEMsR0FBTCxDQUFmO0FBQ0Q7QUFDRixLQWhCRDs7QUFrQkEsUUFBSU0sUUFBUXRELEtBQVIsSUFBaUJzRCxRQUFRdEQsS0FBUixDQUFja0MsTUFBbkMsRUFBMkM7QUFDekNvQixjQUFRdEQsS0FBUixHQUFnQmlELFNBQVNLLFFBQVF0RCxLQUFqQixDQUFoQjtBQUNEOztBQUVELFdBQU9zRCxPQUFQO0FBQ0QsR0F6QkQsQ0FEZTtBQUFBLENBQWpCIiwiZmlsZSI6ImV4dGVybmFsL3NsYXRlL3VzZS1qc29uLXN0YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRlYm91bmNlLCBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgd2l0aFByb3BzT25DaGFuZ2UsIGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IFBsYWluIGZyb20gJ3NsYXRlLXBsYWluLXNlcmlhbGl6ZXInO1xuaW1wb3J0IHsgVmFsdWUgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgQmFzZTY0IGZyb20gJ3NsYXRlLWJhc2U2NC1zZXJpYWxpemVyJztcbmltcG9ydCBjcmVhdGVUT0MgZnJvbSAnLi9jcmVhdGUtdG9jJztcblxuY29uc3Qgc3RhdGVXcmFwcGVyID0gV3JhcHBlZENvbXBvbmVudCA9PlxuICBjbGFzcyBTbGF0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc2lnbmFsID0gcHJvcHMuc2lnbmFsO1xuICAgICAgdGhpcy5iYXNlNjQgPSBwcm9wcy5iYXNlNjQ7XG4gICAgICB0aGlzLnN0YXRlID0geyB2YWx1ZTogcHJvcHMudmFsdWUgfTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSBuZXdQcm9wcy52YWx1ZSAmJlxuICAgICAgICB0aGlzLmJhc2U2NCAhPT0gbmV3UHJvcHMuYmFzZTY0ICYmXG4gICAgICAgIHRoaXMuc2lnbmFsICE9PSBuZXdQcm9wcy5zaWduYWxcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNpZ25hbCA9IG5ld1Byb3BzLnNpZ25hbDtcbiAgICAgICAgdGhpcy5iYXNlNjQgPSBuZXdQcm9wcy5iYXNlNjQ7XG4gICAgICAgIHRoaXMuc3RhdGUudmFsdWUgPSBuZXdQcm9wcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0QWxsQmxvY2tzID0gKG5vZGVzLCBtYXBwZXIsIHBhcmVudCwgYXJyID0gW10pID0+XG4gICAgICBub2Rlcy5yZWR1Y2UoKHN0YXRlLCBub2RlKSA9PiB7XG4gICAgICAgIGFyci5wdXNoKG5vZGUpO1xuICAgICAgICBtYXBwZXIobm9kZSwgcGFyZW50KTtcbiAgICAgICAgaWYgKG5vZGUubm9kZXMpIHtcbiAgICAgICAgICBhcnIgPSB0aGlzLmdldEFsbEJsb2Nrcyhub2RlLm5vZGVzLCBtYXBwZXIsIG5vZGUsIGFycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgIH0sIGFycik7XG4gICAgcHJvcGFnYXRlQ2hhbmdlID0gdmFsdWUgPT4ge1xuICAgICAgdGhpcy5iYXNlNjQgPSBCYXNlNjQuc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLmJhc2U2NCAhPT0gdGhpcy5wcm9wcy5iYXNlNjQpIHtcbiAgICAgICAgY29uc3QganNvbiA9IHZhbHVlLnRvSlNPTigpO1xuICAgICAgICBjb25zdCB7IG5vZGVzIH0gPSBqc29uLmRvY3VtZW50O1xuICAgICAgICBsZXQgdGV4dCA9ICcnO1xuICAgICAgICBsZXQgdGl0bGUgPSBudWxsO1xuICAgICAgICBsZXQgaW1hZ2UgPSBudWxsO1xuICAgICAgICB0aGlzLmdldEFsbEJsb2Nrcyh2YWx1ZS5kb2N1bWVudC5ub2RlcywgKG5vZGUsIHBhcmVudCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG5vZGUudHlwZSA9PT0gJ3BhcmFncmFwaCcgJiZcbiAgICAgICAgICAgICghcGFyZW50IHx8XG4gICAgICAgICAgICAgIChwYXJlbnQudHlwZSAmJiBwYXJlbnQudHlwZS5pbmRleE9mKCdoZWFkaW5nJykgPT09IC0xKSkgJiZcbiAgICAgICAgICAgIG5vZGUudGV4dFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGV4dCArPSBgJHtub2RlLnRleHR9XFxuYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRpdGxlICYmXG4gICAgICAgICAgICBub2RlLnR5cGUgJiZcbiAgICAgICAgICAgIG5vZGUudHlwZS5pbmRleE9mKCdoZWFkaW5nLScpID09PSAwICYmXG4gICAgICAgICAgICBub2RlLnRleHRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRpdGxlID0gbm9kZS50ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWltYWdlICYmIG5vZGUuZGF0YSAmJiBub2RlLmRhdGEuZ2V0KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBBcnJheS5pc0FycmF5KG5vZGUuZGF0YS5nZXQoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgID8gbm9kZS5kYXRhLmdldCgndmFsdWUnKVswXVxuICAgICAgICAgICAgICA6IG5vZGUuZGF0YS5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgICAgICBpZiAoaW1nICYmIGltZy51cmwgJiYgaW1nLnVybC5pbmRleE9mKCdjbG91ZGluYXJ5JykgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGltYWdlID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBpbWcud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWcuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHVybDogaW1nLnVybCxcbiAgICAgICAgICAgICAgICBjcm9wOiBpbWcuY3JvcCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjb3VudCA9IDM1NTtcbiAgICAgICAgY29uc3QgZXh0cmFjdCA9XG4gICAgICAgICAgdGV4dC5zbGljZSgwLCBjb3VudCkgKyAodGV4dC5sZW5ndGggPiBjb3VudCA/ICcuLi4nIDogJycpO1xuICAgICAgICAvLyBpbWFnZSwgdGl0bGUsIGNoYXB0ZXJzXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgICBub2RlcyxcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGV4dHJhY3QsXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgdG9jOiBjcmVhdGVUT0ModmFsdWUpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRlYm91bmNlZFByb3BhZ2F0ZUNoYW5nZSA9IGRlYm91bmNlKHRoaXMucHJvcGFnYXRlQ2hhbmdlLCA4MDAsIHtcbiAgICAgIGxlYWRpbmc6IGZhbHNlLFxuICAgICAgdHJhaWxpbmc6IHRydWUsXG4gICAgfSk7XG4gICAgb25DaGFuZ2UgPSB2YWx1ZSA9PiB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5kZWJvdW5jZWRQcm9wYWdhdGVDaGFuZ2UodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFByb3BzT25DaGFuZ2UoWyd2YWx1ZScsICdzaWduYWwnXSwgKHsgdmFsdWUsIHNpZ25hbCB9KSA9PiB7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICh2YWx1ZSAmJiBWYWx1ZS5pc1ZhbHVlKHZhbHVlKSkge1xuICAgICAgc3RhdGUgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLm5vZGVzKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXModmFsdWUgfHwgW10pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ25vZGVzJykge1xuICAgICAgICAgIG5ld1ZhbHVlW2tleV0gPSBnZXROb2Rlcyh2YWx1ZVtrZXldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZVtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzdGF0ZSA9IFZhbHVlLmZyb21KU09OKHtcbiAgICAgICAgZG9jdW1lbnQ6IHtcbiAgICAgICAgICBub2RlczogbmV3VmFsdWUubm9kZXMsXG4gICAgICAgICAga2luZDogJ2RvY3VtZW50JyxcbiAgICAgICAgICBkYXRhOiB7IHNpZ25hbCB9LFxuICAgICAgICB9LFxuICAgICAgICBraW5kOiAndmFsdWUnLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlID0gUGxhaW4uZGVzZXJpYWxpemUoJycpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHN0YXRlLFxuICAgICAgYmFzZTY0OiBCYXNlNjQuc2VyaWFsaXplKHN0YXRlKSxcbiAgICAgIHRvYzogdmFsdWUgJiYgdmFsdWUudG9jLFxuICAgIH07XG4gIH0pLFxuICBzdGF0ZVdyYXBwZXIsXG4pO1xuXG5jb25zdCBnZXROb2RlcyA9IG5vZGVzID0+XG4gIG5vZGVzLm1hcChub2RlID0+IHtcbiAgICBjb25zdCBuZXdOb2RlID0ge307XG4gICAgT2JqZWN0LmtleXMobm9kZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ3JhbmdlcycgfHwga2V5ID09PSAndGV4dCcpIHtcbiAgICAgICAgaWYgKCFuZXdOb2RlLmxlYXZlcykge1xuICAgICAgICAgIG5ld05vZGUubGVhdmVzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlW2tleV0pKSB7XG4gICAgICAgICAgbmV3Tm9kZS5sZWF2ZXMgPSBbLi4ubmV3Tm9kZS5sZWF2ZXMsIC4uLm5vZGVba2V5XV07XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGVba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBuZXdOb2RlLmxlYXZlcy5wdXNoKHsga2luZDogJ2xlYWYnLCB0ZXh0OiBub2RlW2tleV0gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Tm9kZS5sZWF2ZXMucHVzaChub2RlW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdOb2RlW2tleV0gPSBub2RlW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobmV3Tm9kZS5ub2RlcyAmJiBuZXdOb2RlLm5vZGVzLmxlbmd0aCkge1xuICAgICAgbmV3Tm9kZS5ub2RlcyA9IGdldE5vZGVzKG5ld05vZGUubm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdOb2RlO1xuICB9KTtcbiJdfQ==
