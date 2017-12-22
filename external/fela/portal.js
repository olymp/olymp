var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { createPortal, unstable_renderSubtreeIntoContainer } from 'react-dom';
import './portal.less';

var isReact16 = createPortal !== undefined;
var portal = isReact16 ? createPortal : unstable_renderSubtreeIntoContainer;

var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          noPortal = _props.noPortal,
          noScroll = _props.noScroll;

      if (!noPortal && typeof document !== 'undefined') {
        this.popup = document.createElement('div');
        document.body.appendChild(this.popup);
      }
      if (noScroll) {
        document.getElementById('app').classList.toggle('with-portal', true);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var noScroll = this.props.noScroll;

      if (this.popup) {
        document.body.removeChild(this.popup);
      }
      if (noScroll) {
        document.getElementById('app').classList.toggle('with-portal', false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          noPortal = _props2.noPortal;

      if (noPortal) {
        return Children.only(children);
      }
      if (this.popup) {
        return portal(children, this.popup);
      }
      return null;
    }
  }]);

  return Portal;
}(Component);

Portal.propTypes = {
  children: PropTypes.node, // eslint-disable-line
  noPortal: PropTypes.bool,
  noScroll: PropTypes.bool
};
Portal.defaultProps = {
  noPortal: false,
  noScroll: false
};

export default Portal;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvcG9ydGFsLmVzNiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJDaGlsZHJlbiIsIlByb3BUeXBlcyIsImNyZWF0ZVBvcnRhbCIsInVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyIiwiaXNSZWFjdDE2IiwidW5kZWZpbmVkIiwicG9ydGFsIiwiUG9ydGFsIiwicHJvcHMiLCJub1BvcnRhbCIsIm5vU2Nyb2xsIiwiZG9jdW1lbnQiLCJwb3B1cCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZUNoaWxkIiwiY2hpbGRyZW4iLCJvbmx5IiwicHJvcFR5cGVzIiwibm9kZSIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FBU0EsU0FBVCxFQUFvQkMsUUFBcEIsUUFBb0MsT0FBcEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsWUFBVCxFQUF1QkMsbUNBQXZCLFFBQWtFLFdBQWxFO0FBQ0EsT0FBTyxlQUFQOztBQUVBLElBQU1DLFlBQVlGLGlCQUFpQkcsU0FBbkM7QUFDQSxJQUFNQyxTQUFTRixZQUFZRixZQUFaLEdBQTJCQyxtQ0FBMUM7O0lBRU1JLE07Ozs7Ozs7Ozs7O3lDQUNpQjtBQUFBLG1CQUNZLEtBQUtDLEtBRGpCO0FBQUEsVUFDWEMsUUFEVyxVQUNYQSxRQURXO0FBQUEsVUFDREMsUUFEQyxVQUNEQSxRQURDOztBQUVuQixVQUFJLENBQUNELFFBQUQsSUFBYSxPQUFPRSxRQUFQLEtBQW9CLFdBQXJDLEVBQWtEO0FBQ2hELGFBQUtDLEtBQUwsR0FBYUQsU0FBU0UsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0FGLGlCQUFTRyxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS0gsS0FBL0I7QUFDRDtBQUNELFVBQUlGLFFBQUosRUFBYztBQUNaQyxpQkFBU0ssY0FBVCxDQUF3QixLQUF4QixFQUErQkMsU0FBL0IsQ0FBeUNDLE1BQXpDLENBQWdELGFBQWhELEVBQStELElBQS9EO0FBQ0Q7QUFDRjs7OzJDQUVzQjtBQUFBLFVBQ2JSLFFBRGEsR0FDQSxLQUFLRixLQURMLENBQ2JFLFFBRGE7O0FBRXJCLFVBQUksS0FBS0UsS0FBVCxFQUFnQjtBQUNkRCxpQkFBU0csSUFBVCxDQUFjSyxXQUFkLENBQTBCLEtBQUtQLEtBQS9CO0FBQ0Q7QUFDRCxVQUFJRixRQUFKLEVBQWM7QUFDWkMsaUJBQVNLLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLFNBQS9CLENBQXlDQyxNQUF6QyxDQUFnRCxhQUFoRCxFQUErRCxLQUEvRDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBLG9CQUN3QixLQUFLVixLQUQ3QjtBQUFBLFVBQ0NZLFFBREQsV0FDQ0EsUUFERDtBQUFBLFVBQ1dYLFFBRFgsV0FDV0EsUUFEWDs7QUFFUCxVQUFJQSxRQUFKLEVBQWM7QUFDWixlQUFPVCxTQUFTcUIsSUFBVCxDQUFjRCxRQUFkLENBQVA7QUFDRDtBQUNELFVBQUksS0FBS1IsS0FBVCxFQUFnQjtBQUNkLGVBQU9OLE9BQU9jLFFBQVAsRUFBaUIsS0FBS1IsS0FBdEIsQ0FBUDtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUEvQmtCYixTOztBQWtDckJRLE9BQU9lLFNBQVAsR0FBbUI7QUFDakJGLFlBQVVuQixVQUFVc0IsSUFESCxFQUNTO0FBQzFCZCxZQUFVUixVQUFVdUIsSUFGSDtBQUdqQmQsWUFBVVQsVUFBVXVCO0FBSEgsQ0FBbkI7QUFLQWpCLE9BQU9rQixZQUFQLEdBQXNCO0FBQ3BCaEIsWUFBVSxLQURVO0FBRXBCQyxZQUFVO0FBRlUsQ0FBdEI7O0FBS0EsZUFBZUgsTUFBZiIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL3BvcnRhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsLCB1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vcG9ydGFsLmxlc3MnO1xuXG5jb25zdCBpc1JlYWN0MTYgPSBjcmVhdGVQb3J0YWwgIT09IHVuZGVmaW5lZDtcbmNvbnN0IHBvcnRhbCA9IGlzUmVhY3QxNiA/IGNyZWF0ZVBvcnRhbCA6IHVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyO1xuXG5jbGFzcyBQb3J0YWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgeyBub1BvcnRhbCwgbm9TY3JvbGwgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFub1BvcnRhbCAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucG9wdXApO1xuICAgIH1cbiAgICBpZiAobm9TY3JvbGwpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5jbGFzc0xpc3QudG9nZ2xlKCd3aXRoLXBvcnRhbCcsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgbm9TY3JvbGwgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMucG9wdXApIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5wb3B1cCk7XG4gICAgfVxuICAgIGlmIChub1Njcm9sbCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmNsYXNzTGlzdC50b2dnbGUoJ3dpdGgtcG9ydGFsJywgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBub1BvcnRhbCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobm9Qb3J0YWwpIHtcbiAgICAgIHJldHVybiBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9wdXApIHtcbiAgICAgIHJldHVybiBwb3J0YWwoY2hpbGRyZW4sIHRoaXMucG9wdXApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5Qb3J0YWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgbm9Qb3J0YWw6IFByb3BUeXBlcy5ib29sLFxuICBub1Njcm9sbDogUHJvcFR5cGVzLmJvb2wsXG59O1xuUG9ydGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgbm9Qb3J0YWw6IGZhbHNlLFxuICBub1Njcm9sbDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWw7XG4iXX0=
