import _debounce from 'lodash/debounce';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import { withPropsOnChange, compose } from 'recompose';
import Plain from 'slate-plain-serializer';
import { Value } from 'slate';
import Base64 from 'slate-base64-serializer';
import createTOC from './create-toc';

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
        _this.base64 = Base64.serialize(value);
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
            toc: createTOC(value)
          });
        }
      };

      _this.debouncedPropagateChange = _debounce(_this.propagateChange, 800, {
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

        return React.createElement(WrappedComponent, _extends({}, this.props, {
          value: value,
          onChange: this.onChange
        }));
      }
    }]);

    return Slate;
  }(Component);
};

export default compose(withPropsOnChange(['value', 'signal'], function (_ref) {
  var value = _ref.value,
      signal = _ref.signal;

  var state = void 0;
  if (value && Value.isValue(value)) {
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
    state = Value.fromJSON({
      document: {
        nodes: newValue.nodes,
        kind: 'document',
        data: { signal: signal }
      },
      kind: 'value'
    });
  } else {
    state = Plain.deserialize('');
  }
  return {
    value: state,
    base64: Base64.serialize(state),
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3VzZS1qc29uLXN0YXRlLmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhQcm9wc09uQ2hhbmdlIiwiY29tcG9zZSIsIlBsYWluIiwiVmFsdWUiLCJCYXNlNjQiLCJjcmVhdGVUT0MiLCJzdGF0ZVdyYXBwZXIiLCJwcm9wcyIsImdldEFsbEJsb2NrcyIsIm5vZGVzIiwibWFwcGVyIiwicGFyZW50IiwiYXJyIiwicmVkdWNlIiwic3RhdGUiLCJub2RlIiwicHVzaCIsInByb3BhZ2F0ZUNoYW5nZSIsImJhc2U2NCIsInNlcmlhbGl6ZSIsInZhbHVlIiwianNvbiIsInRvSlNPTiIsImRvY3VtZW50IiwidGV4dCIsInRpdGxlIiwiaW1hZ2UiLCJ0eXBlIiwiaW5kZXhPZiIsImRhdGEiLCJnZXQiLCJpbWciLCJBcnJheSIsImlzQXJyYXkiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImNyb3AiLCJjb25zb2xlIiwibG9nIiwiY291bnQiLCJleHRyYWN0Iiwic2xpY2UiLCJsZW5ndGgiLCJvbkNoYW5nZSIsInRvYyIsImRlYm91bmNlZFByb3BhZ2F0ZUNoYW5nZSIsImxlYWRpbmciLCJ0cmFpbGluZyIsInNldFN0YXRlIiwic2lnbmFsIiwibmV3UHJvcHMiLCJpc1ZhbHVlIiwibmV3VmFsdWUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImdldE5vZGVzIiwiZnJvbUpTT04iLCJraW5kIiwiZGVzZXJpYWxpemUiLCJtYXAiLCJuZXdOb2RlIiwibGVhdmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDOztBQUVBLFNBQVNDLGlCQUFULEVBQTRCQyxPQUE1QixRQUEyQyxXQUEzQztBQUNBLE9BQU9DLEtBQVAsTUFBa0Isd0JBQWxCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixPQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIseUJBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixjQUF0Qjs7QUFFQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQTtBQUFBOztBQUVqQixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUFBLFlBaUJuQkMsWUFqQm1CLEdBaUJKLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsTUFBaEI7QUFBQSxZQUF3QkMsR0FBeEIsdUVBQThCLEVBQTlCO0FBQUEsZUFDYkgsTUFBTUksTUFBTixDQUFhLFVBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUM1QkgsY0FBSUksSUFBSixDQUFTRCxJQUFUO0FBQ0FMLGlCQUFPSyxJQUFQLEVBQWFKLE1BQWI7QUFDQSxjQUFJSSxLQUFLTixLQUFULEVBQWdCO0FBQ2RHLGtCQUFNLE1BQUtKLFlBQUwsQ0FBa0JPLEtBQUtOLEtBQXZCLEVBQThCQyxNQUE5QixFQUFzQ0ssSUFBdEMsRUFBNENILEdBQTVDLENBQU47QUFDRDtBQUNELGlCQUFPQSxHQUFQO0FBQ0QsU0FQRCxFQU9HQSxHQVBILENBRGE7QUFBQSxPQWpCSTs7QUFBQSxZQTBCbkJLLGVBMUJtQixHQTBCRCxpQkFBUztBQUN6QixjQUFLQyxNQUFMLEdBQWNkLE9BQU9lLFNBQVAsQ0FBaUJDLEtBQWpCLENBQWQ7QUFDQSxZQUFJLE1BQUtGLE1BQUwsS0FBZ0IsTUFBS1gsS0FBTCxDQUFXVyxNQUEvQixFQUF1QztBQUNyQyxjQUFNRyxPQUFPRCxNQUFNRSxNQUFOLEVBQWI7QUFEcUMsY0FFN0JiLEtBRjZCLEdBRW5CWSxLQUFLRSxRQUZjLENBRTdCZCxLQUY2Qjs7QUFHckMsY0FBSWUsT0FBTyxFQUFYO0FBQ0EsY0FBSUMsUUFBUSxJQUFaO0FBQ0EsY0FBSUMsUUFBUSxJQUFaO0FBQ0EsZ0JBQUtsQixZQUFMLENBQWtCWSxNQUFNRyxRQUFOLENBQWVkLEtBQWpDLEVBQXdDLFVBQUNNLElBQUQsRUFBT0osTUFBUCxFQUFrQjtBQUN4RCxnQkFDRUksS0FBS1ksSUFBTCxLQUFjLFdBQWQsS0FDQyxDQUFDaEIsTUFBRCxJQUNFQSxPQUFPZ0IsSUFBUCxJQUFlaEIsT0FBT2dCLElBQVAsQ0FBWUMsT0FBWixDQUFvQixTQUFwQixNQUFtQyxDQUFDLENBRnRELEtBR0FiLEtBQUtTLElBSlAsRUFLRTtBQUNBQSxzQkFBV1QsS0FBS1MsSUFBaEI7QUFDRDtBQUNELGdCQUNFLENBQUNDLEtBQUQsSUFDQVYsS0FBS1ksSUFETCxJQUVBWixLQUFLWSxJQUFMLENBQVVDLE9BQVYsQ0FBa0IsVUFBbEIsTUFBa0MsQ0FGbEMsSUFHQWIsS0FBS1MsSUFKUCxFQUtFO0FBQ0FDLHNCQUFRVixLQUFLUyxJQUFiO0FBQ0Q7QUFDRCxnQkFBSSxDQUFDRSxLQUFELElBQVVYLEtBQUtjLElBQWYsSUFBdUJkLEtBQUtjLElBQUwsQ0FBVUMsR0FBVixDQUFjLE9BQWQsQ0FBM0IsRUFBbUQ7QUFDakQsa0JBQU1DLE1BQU1DLE1BQU1DLE9BQU4sQ0FBY2xCLEtBQUtjLElBQUwsQ0FBVUMsR0FBVixDQUFjLE9BQWQsQ0FBZCxJQUNSZixLQUFLYyxJQUFMLENBQVVDLEdBQVYsQ0FBYyxPQUFkLEVBQXVCLENBQXZCLENBRFEsR0FFUmYsS0FBS2MsSUFBTCxDQUFVQyxHQUFWLENBQWMsT0FBZCxDQUZKO0FBR0Esa0JBQUlDLE9BQU9BLElBQUlHLEdBQVgsSUFBa0JILElBQUlHLEdBQUosQ0FBUU4sT0FBUixDQUFnQixZQUFoQixNQUFrQyxDQUFDLENBQXpELEVBQTREO0FBQzFERix3QkFBUTtBQUNOUyx5QkFBT0osSUFBSUksS0FETDtBQUVOQywwQkFBUUwsSUFBSUssTUFGTjtBQUdORix1QkFBS0gsSUFBSUcsR0FISDtBQUlORyx3QkFBTU4sSUFBSU07QUFKSixpQkFBUjtBQU1EO0FBQ0RDLHNCQUFRQyxHQUFSLENBQVliLEtBQVo7QUFDRDtBQUNGLFdBL0JEO0FBZ0NBLGNBQU1jLFFBQVEsR0FBZDtBQUNBLGNBQU1DLFVBQ0pqQixLQUFLa0IsS0FBTCxDQUFXLENBQVgsRUFBY0YsS0FBZCxLQUF3QmhCLEtBQUttQixNQUFMLEdBQWNILEtBQWQsR0FBc0IsS0FBdEIsR0FBOEIsRUFBdEQsQ0FERjtBQUVBO0FBQ0EsaUJBQU8sTUFBS2pDLEtBQUwsQ0FBV3FDLFFBQVgsQ0FBb0I7QUFDekJuQyx3QkFEeUI7QUFFekJlLHNCQUZ5QjtBQUd6QmlCLDRCQUh5QjtBQUl6QmhCLHdCQUp5QjtBQUt6QkMsd0JBTHlCO0FBTXpCbUIsaUJBQUt4QyxVQUFVZSxLQUFWO0FBTm9CLFdBQXBCLENBQVA7QUFRRDtBQUNGLE9BL0VrQjs7QUFBQSxZQWdGbkIwQix3QkFoRm1CLEdBZ0ZRLFVBQVMsTUFBSzdCLGVBQWQsRUFBK0IsR0FBL0IsRUFBb0M7QUFDN0Q4QixpQkFBUyxLQURvRDtBQUU3REMsa0JBQVU7QUFGbUQsT0FBcEMsQ0FoRlI7O0FBQUEsWUFvRm5CSixRQXBGbUIsR0FvRlIsaUJBQVM7QUFDbEIsWUFBSSxDQUFDLE1BQUtyQyxLQUFMLENBQVdxQyxRQUFoQixFQUEwQjtBQUN4QjtBQUNEO0FBQ0QsY0FBS0ssUUFBTCxDQUFjLEVBQUU3QixZQUFGLEVBQWQsRUFBeUIsWUFBTTtBQUM3QixnQkFBSzBCLHdCQUFMLENBQThCMUIsS0FBOUI7QUFDRCxTQUZEO0FBR0QsT0EzRmtCOztBQUVqQixZQUFLOEIsTUFBTCxHQUFjM0MsTUFBTTJDLE1BQXBCO0FBQ0EsWUFBS2hDLE1BQUwsR0FBY1gsTUFBTVcsTUFBcEI7QUFDQSxZQUFLSixLQUFMLEdBQWEsRUFBRU0sT0FBT2IsTUFBTWEsS0FBZixFQUFiO0FBSmlCO0FBS2xCOztBQVBnQjtBQUFBO0FBQUEsZ0RBUVMrQixRQVJULEVBUW1CO0FBQ2xDLFlBQ0UsS0FBS3JDLEtBQUwsQ0FBV00sS0FBWCxLQUFxQitCLFNBQVMvQixLQUE5QixJQUNBLEtBQUtGLE1BQUwsS0FBZ0JpQyxTQUFTakMsTUFEekIsSUFFQSxLQUFLZ0MsTUFBTCxLQUFnQkMsU0FBU0QsTUFIM0IsRUFJRTtBQUNBLGVBQUtBLE1BQUwsR0FBY0MsU0FBU0QsTUFBdkI7QUFDQSxlQUFLaEMsTUFBTCxHQUFjaUMsU0FBU2pDLE1BQXZCO0FBQ0EsZUFBS0osS0FBTCxDQUFXTSxLQUFYLEdBQW1CK0IsU0FBUy9CLEtBQTVCO0FBQ0Q7QUFDRjtBQWxCZ0I7QUFBQTtBQUFBLCtCQThGUjtBQUFBLFlBQ0NBLEtBREQsR0FDVyxLQUFLTixLQURoQixDQUNDTSxLQUREOztBQUVQLGVBQ0Usb0JBQUMsZ0JBQUQsZUFDTSxLQUFLYixLQURYO0FBRUUsaUJBQU9hLEtBRlQ7QUFHRSxvQkFBVSxLQUFLd0I7QUFIakIsV0FERjtBQU9EO0FBdkdnQjs7QUFBQTtBQUFBLElBQ0M3QyxTQUREO0FBQUEsQ0FBckI7O0FBMEdBLGVBQWVFLFFBQ2JELGtCQUFrQixDQUFDLE9BQUQsRUFBVSxRQUFWLENBQWxCLEVBQXVDLGdCQUF1QjtBQUFBLE1BQXBCb0IsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsTUFBYjhCLE1BQWEsUUFBYkEsTUFBYTs7QUFDNUQsTUFBSXBDLGNBQUo7QUFDQSxNQUFJTSxTQUFTakIsTUFBTWlELE9BQU4sQ0FBY2hDLEtBQWQsQ0FBYixFQUFtQztBQUNqQ04sWUFBUU0sS0FBUjtBQUNELEdBRkQsTUFFTyxJQUFJQSxTQUFTQSxNQUFNWCxLQUFuQixFQUEwQjtBQUMvQixRQUFNNEMsV0FBVyxFQUFqQjtBQUNBQyxXQUFPQyxJQUFQLENBQVluQyxTQUFTLEVBQXJCLEVBQXlCb0MsT0FBekIsQ0FBaUMsZUFBTztBQUN0QyxVQUFJQyxRQUFRLE9BQVosRUFBcUI7QUFDbkJKLGlCQUFTSSxHQUFULElBQWdCQyxTQUFTdEMsTUFBTXFDLEdBQU4sQ0FBVCxDQUFoQjtBQUNELE9BRkQsTUFFTztBQUNMSixpQkFBU0ksR0FBVCxJQUFnQnJDLE1BQU1xQyxHQUFOLENBQWhCO0FBQ0Q7QUFDRixLQU5EO0FBT0EzQyxZQUFRWCxNQUFNd0QsUUFBTixDQUFlO0FBQ3JCcEMsZ0JBQVU7QUFDUmQsZUFBTzRDLFNBQVM1QyxLQURSO0FBRVJtRCxjQUFNLFVBRkU7QUFHUi9CLGNBQU0sRUFBRXFCLGNBQUY7QUFIRSxPQURXO0FBTXJCVSxZQUFNO0FBTmUsS0FBZixDQUFSO0FBUUQsR0FqQk0sTUFpQkE7QUFDTDlDLFlBQVFaLE1BQU0yRCxXQUFOLENBQWtCLEVBQWxCLENBQVI7QUFDRDtBQUNELFNBQU87QUFDTHpDLFdBQU9OLEtBREY7QUFFTEksWUFBUWQsT0FBT2UsU0FBUCxDQUFpQkwsS0FBakIsQ0FGSDtBQUdMK0IsU0FBS3pCLFNBQVNBLE1BQU15QjtBQUhmLEdBQVA7QUFLRCxDQTdCRCxDQURhLEVBK0JidkMsWUEvQmEsQ0FBZjs7QUFrQ0EsSUFBTW9ELFdBQVcsU0FBWEEsUUFBVztBQUFBLFNBQ2ZqRCxNQUFNcUQsR0FBTixDQUFVLGdCQUFRO0FBQ2hCLFFBQU1DLFVBQVUsRUFBaEI7QUFDQVQsV0FBT0MsSUFBUCxDQUFZeEMsSUFBWixFQUFrQnlDLE9BQWxCLENBQTBCLGVBQU87QUFDL0IsVUFBSUMsUUFBUSxRQUFSLElBQW9CQSxRQUFRLE1BQWhDLEVBQXdDO0FBQ3RDLFlBQUksQ0FBQ00sUUFBUUMsTUFBYixFQUFxQjtBQUNuQkQsa0JBQVFDLE1BQVIsR0FBaUIsRUFBakI7QUFDRDs7QUFFRCxZQUFJaEMsTUFBTUMsT0FBTixDQUFjbEIsS0FBSzBDLEdBQUwsQ0FBZCxDQUFKLEVBQThCO0FBQzVCTSxrQkFBUUMsTUFBUixnQ0FBcUJELFFBQVFDLE1BQTdCLHNCQUF3Q2pELEtBQUswQyxHQUFMLENBQXhDO0FBQ0QsU0FGRCxNQUVPLElBQUksT0FBTzFDLEtBQUswQyxHQUFMLENBQVAsS0FBcUIsUUFBekIsRUFBbUM7QUFDeENNLGtCQUFRQyxNQUFSLENBQWVoRCxJQUFmLENBQW9CLEVBQUU0QyxNQUFNLE1BQVIsRUFBZ0JwQyxNQUFNVCxLQUFLMEMsR0FBTCxDQUF0QixFQUFwQjtBQUNELFNBRk0sTUFFQTtBQUNMTSxrQkFBUUMsTUFBUixDQUFlaEQsSUFBZixDQUFvQkQsS0FBSzBDLEdBQUwsQ0FBcEI7QUFDRDtBQUNGLE9BWkQsTUFZTztBQUNMTSxnQkFBUU4sR0FBUixJQUFlMUMsS0FBSzBDLEdBQUwsQ0FBZjtBQUNEO0FBQ0YsS0FoQkQ7O0FBa0JBLFFBQUlNLFFBQVF0RCxLQUFSLElBQWlCc0QsUUFBUXRELEtBQVIsQ0FBY2tDLE1BQW5DLEVBQTJDO0FBQ3pDb0IsY0FBUXRELEtBQVIsR0FBZ0JpRCxTQUFTSyxRQUFRdEQsS0FBakIsQ0FBaEI7QUFDRDs7QUFFRCxXQUFPc0QsT0FBUDtBQUNELEdBekJELENBRGU7QUFBQSxDQUFqQiIsImZpbGUiOiJwYWNrYWdlcy9zbGF0ZS91c2UtanNvbi1zdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZWJvdW5jZSwgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHdpdGhQcm9wc09uQ2hhbmdlLCBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBQbGFpbiBmcm9tICdzbGF0ZS1wbGFpbi1zZXJpYWxpemVyJztcbmltcG9ydCB7IFZhbHVlIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IEJhc2U2NCBmcm9tICdzbGF0ZS1iYXNlNjQtc2VyaWFsaXplcic7XG5pbXBvcnQgY3JlYXRlVE9DIGZyb20gJy4vY3JlYXRlLXRvYyc7XG5cbmNvbnN0IHN0YXRlV3JhcHBlciA9IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgU2xhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnNpZ25hbCA9IHByb3BzLnNpZ25hbDtcbiAgICAgIHRoaXMuYmFzZTY0ID0gcHJvcHMuYmFzZTY0O1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IHByb3BzLnZhbHVlIH07XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gbmV3UHJvcHMudmFsdWUgJiZcbiAgICAgICAgdGhpcy5iYXNlNjQgIT09IG5ld1Byb3BzLmJhc2U2NCAmJlxuICAgICAgICB0aGlzLnNpZ25hbCAhPT0gbmV3UHJvcHMuc2lnbmFsXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zaWduYWwgPSBuZXdQcm9wcy5zaWduYWw7XG4gICAgICAgIHRoaXMuYmFzZTY0ID0gbmV3UHJvcHMuYmFzZTY0O1xuICAgICAgICB0aGlzLnN0YXRlLnZhbHVlID0gbmV3UHJvcHMudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGdldEFsbEJsb2NrcyA9IChub2RlcywgbWFwcGVyLCBwYXJlbnQsIGFyciA9IFtdKSA9PlxuICAgICAgbm9kZXMucmVkdWNlKChzdGF0ZSwgbm9kZSkgPT4ge1xuICAgICAgICBhcnIucHVzaChub2RlKTtcbiAgICAgICAgbWFwcGVyKG5vZGUsIHBhcmVudCk7XG4gICAgICAgIGlmIChub2RlLm5vZGVzKSB7XG4gICAgICAgICAgYXJyID0gdGhpcy5nZXRBbGxCbG9ja3Mobm9kZS5ub2RlcywgbWFwcGVyLCBub2RlLCBhcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgICB9LCBhcnIpO1xuICAgIHByb3BhZ2F0ZUNoYW5nZSA9IHZhbHVlID0+IHtcbiAgICAgIHRoaXMuYmFzZTY0ID0gQmFzZTY0LnNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5iYXNlNjQgIT09IHRoaXMucHJvcHMuYmFzZTY0KSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSB2YWx1ZS50b0pTT04oKTtcbiAgICAgICAgY29uc3QgeyBub2RlcyB9ID0ganNvbi5kb2N1bWVudDtcbiAgICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgICAgbGV0IHRpdGxlID0gbnVsbDtcbiAgICAgICAgbGV0IGltYWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZXRBbGxCbG9ja3ModmFsdWUuZG9jdW1lbnQubm9kZXMsIChub2RlLCBwYXJlbnQpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBub2RlLnR5cGUgPT09ICdwYXJhZ3JhcGgnICYmXG4gICAgICAgICAgICAoIXBhcmVudCB8fFxuICAgICAgICAgICAgICAocGFyZW50LnR5cGUgJiYgcGFyZW50LnR5cGUuaW5kZXhPZignaGVhZGluZycpID09PSAtMSkpICYmXG4gICAgICAgICAgICBub2RlLnRleHRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRleHQgKz0gYCR7bm9kZS50ZXh0fVxcbmA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aXRsZSAmJlxuICAgICAgICAgICAgbm9kZS50eXBlICYmXG4gICAgICAgICAgICBub2RlLnR5cGUuaW5kZXhPZignaGVhZGluZy0nKSA9PT0gMCAmJlxuICAgICAgICAgICAgbm9kZS50ZXh0XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aXRsZSA9IG5vZGUudGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpbWFnZSAmJiBub2RlLmRhdGEgJiYgbm9kZS5kYXRhLmdldCgndmFsdWUnKSkge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gQXJyYXkuaXNBcnJheShub2RlLmRhdGEuZ2V0KCd2YWx1ZScpKVxuICAgICAgICAgICAgICA/IG5vZGUuZGF0YS5nZXQoJ3ZhbHVlJylbMF1cbiAgICAgICAgICAgICAgOiBub2RlLmRhdGEuZ2V0KCd2YWx1ZScpO1xuICAgICAgICAgICAgaWYgKGltZyAmJiBpbWcudXJsICYmIGltZy51cmwuaW5kZXhPZignY2xvdWRpbmFyeScpICE9PSAtMSkge1xuICAgICAgICAgICAgICBpbWFnZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogaW1nLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaW1nLmhlaWdodCxcbiAgICAgICAgICAgICAgICB1cmw6IGltZy51cmwsXG4gICAgICAgICAgICAgICAgY3JvcDogaW1nLmNyb3AsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY291bnQgPSAzNTU7XG4gICAgICAgIGNvbnN0IGV4dHJhY3QgPVxuICAgICAgICAgIHRleHQuc2xpY2UoMCwgY291bnQpICsgKHRleHQubGVuZ3RoID4gY291bnQgPyAnLi4uJyA6ICcnKTtcbiAgICAgICAgLy8gaW1hZ2UsIHRpdGxlLCBjaGFwdGVyc1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICAgICAgbm9kZXMsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBleHRyYWN0LFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGltYWdlLFxuICAgICAgICAgIHRvYzogY3JlYXRlVE9DKHZhbHVlKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkZWJvdW5jZWRQcm9wYWdhdGVDaGFuZ2UgPSBkZWJvdW5jZSh0aGlzLnByb3BhZ2F0ZUNoYW5nZSwgODAwLCB7XG4gICAgICBsZWFkaW5nOiBmYWxzZSxcbiAgICAgIHRyYWlsaW5nOiB0cnVlLFxuICAgIH0pO1xuICAgIG9uQ2hhbmdlID0gdmFsdWUgPT4ge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkUHJvcGFnYXRlQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhQcm9wc09uQ2hhbmdlKFsndmFsdWUnLCAnc2lnbmFsJ10sICh7IHZhbHVlLCBzaWduYWwgfSkgPT4ge1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAodmFsdWUgJiYgVmFsdWUuaXNWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHN0YXRlID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS5ub2Rlcykge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHZhbHVlIHx8IFtdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09ICdub2RlcycpIHtcbiAgICAgICAgICBuZXdWYWx1ZVtrZXldID0gZ2V0Tm9kZXModmFsdWVba2V5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWVba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc3RhdGUgPSBWYWx1ZS5mcm9tSlNPTih7XG4gICAgICAgIGRvY3VtZW50OiB7XG4gICAgICAgICAgbm9kZXM6IG5ld1ZhbHVlLm5vZGVzLFxuICAgICAgICAgIGtpbmQ6ICdkb2N1bWVudCcsXG4gICAgICAgICAgZGF0YTogeyBzaWduYWwgfSxcbiAgICAgICAgfSxcbiAgICAgICAga2luZDogJ3ZhbHVlJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZSA9IFBsYWluLmRlc2VyaWFsaXplKCcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBzdGF0ZSxcbiAgICAgIGJhc2U2NDogQmFzZTY0LnNlcmlhbGl6ZShzdGF0ZSksXG4gICAgICB0b2M6IHZhbHVlICYmIHZhbHVlLnRvYyxcbiAgICB9O1xuICB9KSxcbiAgc3RhdGVXcmFwcGVyLFxuKTtcblxuY29uc3QgZ2V0Tm9kZXMgPSBub2RlcyA9PlxuICBub2Rlcy5tYXAobm9kZSA9PiB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG5vZGUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdyYW5nZXMnIHx8IGtleSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGlmICghbmV3Tm9kZS5sZWF2ZXMpIHtcbiAgICAgICAgICBuZXdOb2RlLmxlYXZlcyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZVtrZXldKSkge1xuICAgICAgICAgIG5ld05vZGUubGVhdmVzID0gWy4uLm5ld05vZGUubGVhdmVzLCAuLi5ub2RlW2tleV1dO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgbmV3Tm9kZS5sZWF2ZXMucHVzaCh7IGtpbmQ6ICdsZWFmJywgdGV4dDogbm9kZVtrZXldIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld05vZGUubGVhdmVzLnB1c2gobm9kZVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Tm9kZVtrZXldID0gbm9kZVtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG5ld05vZGUubm9kZXMgJiYgbmV3Tm9kZS5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgIG5ld05vZGUubm9kZXMgPSBnZXROb2RlcyhuZXdOb2RlLm5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfSk7XG4iXX0=
