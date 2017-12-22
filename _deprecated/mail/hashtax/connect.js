import _get from 'lodash/get';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { interpolate } from './utils';
import Hashtax from './hashtax-provided';


// connect: Decorator to get props from context and interpolate props
export default (function (WrappedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(DataConnector, _Component);

    function DataConnector() {
      _classCallCheck(this, DataConnector);

      return _possibleConstructorReturn(this, (DataConnector.__proto__ || Object.getPrototypeOf(DataConnector)).apply(this, arguments));
    }

    _createClass(DataConnector, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var hashtaxData = this.context.hashtaxData || {};
        var all = _extends({}, hashtaxData, this.props);
        var props = Object.keys(this.props).reduce(function (store, key) {
          var value = _this2.props[key];
          if (value && typeof value === 'string' && value.indexOf('{{') !== -1) {
            // interpolate hashtax text
            var text = interpolate(value, all);
            if (text) store[key] = React.createElement(Hashtax, { value: text });
          } else if (value && typeof value === 'string' && value.indexOf('{:') !== -1) {
            // interpolate react element
            var k = void 0;
            interpolate(value, function (v) {
              return k = v;
            });
            store[key] = _get(all, k);
          } else if (value && typeof value === 'string' && value.indexOf('{') !== -1) {
            // interpolate string
            store[key] = interpolate(value, all);
          } else {
            store[key] = all[key];
          }
          return store;
        }, {});
        return React.createElement(WrappedComponent, _extends({}, hashtaxData, props));
      }
    }]);

    return DataConnector;
  }(Component), _class.contextTypes = {
    hashtaxData: PropTypes.object
  }, _class.propTypes = WrappedComponent ? WrappedComponent.propTypes : {}, _temp;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL21haWwvaGFzaHRheC9jb25uZWN0LmVzNiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImludGVycG9sYXRlIiwiSGFzaHRheCIsImhhc2h0YXhEYXRhIiwiY29udGV4dCIsImFsbCIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInN0b3JlIiwia2V5IiwidmFsdWUiLCJpbmRleE9mIiwidGV4dCIsImsiLCJ2IiwiY29udGV4dFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwiV3JhcHBlZENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixTQUE1QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0Isb0JBQXBCOzs7QUFHQTtBQUNBLGdCQUFlO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQU1GO0FBQUE7O0FBQ1AsWUFBTUMsY0FBYyxLQUFLQyxPQUFMLENBQWFELFdBQWIsSUFBNEIsRUFBaEQ7QUFDQSxZQUFNRSxtQkFBV0YsV0FBWCxFQUEyQixLQUFLRyxLQUFoQyxDQUFOO0FBQ0EsWUFBTUEsUUFBUUMsT0FBT0MsSUFBUCxDQUFZLEtBQUtGLEtBQWpCLEVBQXdCRyxNQUF4QixDQUErQixVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDM0QsY0FBTUMsUUFBUSxPQUFLTixLQUFMLENBQVdLLEdBQVgsQ0FBZDtBQUNBLGNBQUlDLFNBQVMsT0FBT0EsS0FBUCxLQUFpQixRQUExQixJQUFzQ0EsTUFBTUMsT0FBTixDQUFjLElBQWQsTUFBd0IsQ0FBQyxDQUFuRSxFQUFzRTtBQUNwRTtBQUNBLGdCQUFNQyxPQUFPYixZQUFZVyxLQUFaLEVBQW1CUCxHQUFuQixDQUFiO0FBQ0EsZ0JBQUlTLElBQUosRUFBVUosTUFBTUMsR0FBTixJQUFhLG9CQUFDLE9BQUQsSUFBUyxPQUFPRyxJQUFoQixHQUFiO0FBQ1gsV0FKRCxNQUlPLElBQ0xGLFNBQ0EsT0FBT0EsS0FBUCxLQUFpQixRQURqQixJQUVBQSxNQUFNQyxPQUFOLENBQWMsSUFBZCxNQUF3QixDQUFDLENBSHBCLEVBSUw7QUFDQTtBQUNBLGdCQUFJRSxVQUFKO0FBQ0FkLHdCQUFZVyxLQUFaLEVBQW1CO0FBQUEscUJBQU1HLElBQUlDLENBQVY7QUFBQSxhQUFuQjtBQUNBTixrQkFBTUMsR0FBTixJQUFhLEtBQUlOLEdBQUosRUFBU1UsQ0FBVCxDQUFiO0FBQ0QsV0FUTSxNQVNBLElBQ0xILFNBQ0EsT0FBT0EsS0FBUCxLQUFpQixRQURqQixJQUVBQSxNQUFNQyxPQUFOLENBQWMsR0FBZCxNQUF1QixDQUFDLENBSG5CLEVBSUw7QUFDQTtBQUNBSCxrQkFBTUMsR0FBTixJQUFhVixZQUFZVyxLQUFaLEVBQW1CUCxHQUFuQixDQUFiO0FBQ0QsV0FQTSxNQU9BO0FBQ0xLLGtCQUFNQyxHQUFOLElBQWFOLElBQUlNLEdBQUosQ0FBYjtBQUNEO0FBQ0QsaUJBQU9ELEtBQVA7QUFDRCxTQTFCYSxFQTBCWCxFQTFCVyxDQUFkO0FBMkJBLGVBQU8sb0JBQUMsZ0JBQUQsZUFBc0JQLFdBQXRCLEVBQXVDRyxLQUF2QyxFQUFQO0FBQ0Q7QUFyQ1U7O0FBQUE7QUFBQSxJQUNlUCxTQURmLFVBRUprQixZQUZJLEdBRVc7QUFDcEJkLGlCQUFhSCxVQUFVa0I7QUFESCxHQUZYLFNBS0pDLFNBTEksR0FLUUMsbUJBQW1CQSxpQkFBaUJELFNBQXBDLEdBQWdELEVBTHhEO0FBQUEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9tYWlsL2hhc2h0YXgvY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgaW50ZXJwb2xhdGUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBIYXNodGF4IGZyb20gJy4vaGFzaHRheC1wcm92aWRlZCc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG4vLyBjb25uZWN0OiBEZWNvcmF0b3IgdG8gZ2V0IHByb3BzIGZyb20gY29udGV4dCBhbmQgaW50ZXJwb2xhdGUgcHJvcHNcbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRDb21wb25lbnQgPT5cbiAgY2xhc3MgRGF0YUNvbm5lY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgIGhhc2h0YXhEYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIH07XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IFdyYXBwZWRDb21wb25lbnQgPyBXcmFwcGVkQ29tcG9uZW50LnByb3BUeXBlcyA6IHt9O1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGhhc2h0YXhEYXRhID0gdGhpcy5jb250ZXh0Lmhhc2h0YXhEYXRhIHx8IHt9O1xuICAgICAgY29uc3QgYWxsID0geyAuLi5oYXNodGF4RGF0YSwgLi4udGhpcy5wcm9wcyB9O1xuICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5yZWR1Y2UoKHN0b3JlLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW2tleV07XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ3t7JykgIT09IC0xKSB7XG4gICAgICAgICAgLy8gaW50ZXJwb2xhdGUgaGFzaHRheCB0ZXh0XG4gICAgICAgICAgY29uc3QgdGV4dCA9IGludGVycG9sYXRlKHZhbHVlLCBhbGwpO1xuICAgICAgICAgIGlmICh0ZXh0KSBzdG9yZVtrZXldID0gPEhhc2h0YXggdmFsdWU9e3RleHR9IC8+O1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHZhbHVlICYmXG4gICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHZhbHVlLmluZGV4T2YoJ3s6JykgIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIGludGVycG9sYXRlIHJlYWN0IGVsZW1lbnRcbiAgICAgICAgICBsZXQgaztcbiAgICAgICAgICBpbnRlcnBvbGF0ZSh2YWx1ZSwgdiA9PiAoayA9IHYpKTtcbiAgICAgICAgICBzdG9yZVtrZXldID0gZ2V0KGFsbCwgayk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdmFsdWUgJiZcbiAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdmFsdWUuaW5kZXhPZigneycpICE9PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBpbnRlcnBvbGF0ZSBzdHJpbmdcbiAgICAgICAgICBzdG9yZVtrZXldID0gaW50ZXJwb2xhdGUodmFsdWUsIGFsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcmVba2V5XSA9IGFsbFtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgIH0sIHt9KTtcbiAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4uaGFzaHRheERhdGF9IHsuLi5wcm9wc30gLz47XG4gICAgfVxuICB9O1xuIl19
