var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export var withEdits = function withEdits(WrappedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(WithEdits, _Component);

    function WithEdits() {
      _classCallCheck(this, WithEdits);

      return _possibleConstructorReturn(this, (WithEdits.__proto__ || Object.getPrototypeOf(WithEdits)).apply(this, arguments));
    }

    _createClass(WithEdits, [{
      key: 'render',
      value: function render() {
        return React.createElement(WrappedComponent, _extends({ edits: this.context.edits }, this.props));
      }
    }]);

    return WithEdits;
  }(Component), _class.contextTypes = {
    edits: PropTypes.array
  }, _temp;
};

var useEdits = function useEdits() {
  var edits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return function (WrappedComponent) {
    var _class2, _temp2;

    return _temp2 = _class2 = function (_Component2) {
      _inherits(UseEdits, _Component2);

      function UseEdits() {
        _classCallCheck(this, UseEdits);

        return _possibleConstructorReturn(this, (UseEdits.__proto__ || Object.getPrototypeOf(UseEdits)).apply(this, arguments));
      }

      _createClass(UseEdits, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            edits: [].concat(_toConsumableArray(edits), _toConsumableArray(this.props.edits || []))
          };
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              edits = _props.edits,
              rest = _objectWithoutProperties(_props, ['edits']);

          return React.createElement(WrappedComponent, rest);
        }
      }]);

      return UseEdits;
    }(Component), _class2.childContextTypes = {
      edits: PropTypes.array
    }, _temp2;
  };
};
export { useEdits };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvZWRpdHMuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwid2l0aEVkaXRzIiwiY29udGV4dCIsImVkaXRzIiwicHJvcHMiLCJjb250ZXh0VHlwZXMiLCJhcnJheSIsInVzZUVkaXRzIiwicmVzdCIsImNoaWxkQ29udGV4dFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0Qjs7QUFFQSxPQUFPLElBQU1DLFlBQVksU0FBWkEsU0FBWTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFNWjtBQUNQLGVBQU8sb0JBQUMsZ0JBQUQsYUFBa0IsT0FBTyxLQUFLQyxPQUFMLENBQWFDLEtBQXRDLElBQWlELEtBQUtDLEtBQXRELEVBQVA7QUFDRDtBQVJvQjs7QUFBQTtBQUFBLElBQ0NMLFNBREQsVUFFZE0sWUFGYyxHQUVDO0FBQ3BCRixXQUFPSCxVQUFVTTtBQURHLEdBRkQ7QUFBQSxDQUFsQjs7QUFXQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVc7QUFBQSxNQUFDSixLQUFELHVFQUFTLEVBQVQ7QUFBQSxTQUFnQjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwwQ0FNbEI7QUFDaEIsaUJBQU87QUFDTEEsZ0RBQVdBLEtBQVgsc0JBQXNCLEtBQUtDLEtBQUwsQ0FBV0QsS0FBWCxJQUFvQixFQUExQztBQURLLFdBQVA7QUFHRDtBQVZtQztBQUFBO0FBQUEsaUNBWTNCO0FBQUEsdUJBQ29CLEtBQUtDLEtBRHpCO0FBQUEsY0FDQ0QsS0FERCxVQUNDQSxLQUREO0FBQUEsY0FDV0ssSUFEWDs7QUFHUCxpQkFBTyxvQkFBQyxnQkFBRCxFQUFzQkEsSUFBdEIsQ0FBUDtBQUNEO0FBaEJtQzs7QUFBQTtBQUFBLE1BQ2ZULFNBRGUsV0FFN0JVLGlCQUY2QixHQUVUO0FBQ3pCTixhQUFPSCxVQUFVTTtBQURRLEtBRlM7QUFBQSxHQUFoQjtBQUFBLENBQWpCIiwiZmlsZSI6InBhY2thZ2VzL3V0aWxzL2RlY29yYXRvcnMvZWRpdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHdpdGhFZGl0cyA9IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgV2l0aEVkaXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgZWRpdHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IGVkaXRzPXt0aGlzLmNvbnRleHQuZWRpdHN9IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBjb25zdCB1c2VFZGl0cyA9IChlZGl0cyA9IFtdKSA9PiBXcmFwcGVkQ29tcG9uZW50ID0+XG4gIGNsYXNzIFVzZUVkaXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICBlZGl0czogUHJvcFR5cGVzLmFycmF5LFxuICAgIH07XG5cbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlZGl0czogWy4uLmVkaXRzLCAuLi4odGhpcy5wcm9wcy5lZGl0cyB8fCBbXSldLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IGVkaXRzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnJlc3R9IC8+O1xuICAgIH1cbiAgfTtcbiJdfQ==
