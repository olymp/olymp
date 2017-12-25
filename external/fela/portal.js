var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { createPortal, unstable_renderSubtreeIntoContainer } from 'react-dom';

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL2ZlbGEvcG9ydGFsLmVzNiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJDaGlsZHJlbiIsIlByb3BUeXBlcyIsImNyZWF0ZVBvcnRhbCIsInVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyIiwiaXNSZWFjdDE2IiwidW5kZWZpbmVkIiwicG9ydGFsIiwiUG9ydGFsIiwicHJvcHMiLCJub1BvcnRhbCIsIm5vU2Nyb2xsIiwiZG9jdW1lbnQiLCJwb3B1cCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZUNoaWxkIiwiY2hpbGRyZW4iLCJvbmx5IiwicHJvcFR5cGVzIiwibm9kZSIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FBU0EsU0FBVCxFQUFvQkMsUUFBcEIsUUFBb0MsT0FBcEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsWUFBVCxFQUF1QkMsbUNBQXZCLFFBQWtFLFdBQWxFOztBQUVBLElBQU1DLFlBQVlGLGlCQUFpQkcsU0FBbkM7QUFDQSxJQUFNQyxTQUFTRixZQUFZRixZQUFaLEdBQTJCQyxtQ0FBMUM7O0lBRU1JLE07Ozs7Ozs7Ozs7O3lDQUNpQjtBQUFBLG1CQUNZLEtBQUtDLEtBRGpCO0FBQUEsVUFDWEMsUUFEVyxVQUNYQSxRQURXO0FBQUEsVUFDREMsUUFEQyxVQUNEQSxRQURDOztBQUVuQixVQUFJLENBQUNELFFBQUQsSUFBYSxPQUFPRSxRQUFQLEtBQW9CLFdBQXJDLEVBQWtEO0FBQ2hELGFBQUtDLEtBQUwsR0FBYUQsU0FBU0UsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0FGLGlCQUFTRyxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS0gsS0FBL0I7QUFDRDtBQUNELFVBQUlGLFFBQUosRUFBYztBQUNaQyxpQkFBU0ssY0FBVCxDQUF3QixLQUF4QixFQUErQkMsU0FBL0IsQ0FBeUNDLE1BQXpDLENBQWdELGFBQWhELEVBQStELElBQS9EO0FBQ0Q7QUFDRjs7OzJDQUVzQjtBQUFBLFVBQ2JSLFFBRGEsR0FDQSxLQUFLRixLQURMLENBQ2JFLFFBRGE7O0FBRXJCLFVBQUksS0FBS0UsS0FBVCxFQUFnQjtBQUNkRCxpQkFBU0csSUFBVCxDQUFjSyxXQUFkLENBQTBCLEtBQUtQLEtBQS9CO0FBQ0Q7QUFDRCxVQUFJRixRQUFKLEVBQWM7QUFDWkMsaUJBQVNLLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLFNBQS9CLENBQXlDQyxNQUF6QyxDQUFnRCxhQUFoRCxFQUErRCxLQUEvRDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBLG9CQUN3QixLQUFLVixLQUQ3QjtBQUFBLFVBQ0NZLFFBREQsV0FDQ0EsUUFERDtBQUFBLFVBQ1dYLFFBRFgsV0FDV0EsUUFEWDs7QUFFUCxVQUFJQSxRQUFKLEVBQWM7QUFDWixlQUFPVCxTQUFTcUIsSUFBVCxDQUFjRCxRQUFkLENBQVA7QUFDRDtBQUNELFVBQUksS0FBS1IsS0FBVCxFQUFnQjtBQUNkLGVBQU9OLE9BQU9jLFFBQVAsRUFBaUIsS0FBS1IsS0FBdEIsQ0FBUDtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUEvQmtCYixTOztBQWtDckJRLE9BQU9lLFNBQVAsR0FBbUI7QUFDakJGLFlBQVVuQixVQUFVc0IsSUFESCxFQUNTO0FBQzFCZCxZQUFVUixVQUFVdUIsSUFGSDtBQUdqQmQsWUFBVVQsVUFBVXVCO0FBSEgsQ0FBbkI7QUFLQWpCLE9BQU9rQixZQUFQLEdBQXNCO0FBQ3BCaEIsWUFBVSxLQURVO0FBRXBCQyxZQUFVO0FBRlUsQ0FBdEI7O0FBS0EsZUFBZUgsTUFBZiIsImZpbGUiOiJleHRlcm5hbC9mZWxhL3BvcnRhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsLCB1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNvbnN0IGlzUmVhY3QxNiA9IGNyZWF0ZVBvcnRhbCAhPT0gdW5kZWZpbmVkO1xuY29uc3QgcG9ydGFsID0gaXNSZWFjdDE2ID8gY3JlYXRlUG9ydGFsIDogdW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI7XG5cbmNsYXNzIFBvcnRhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IG5vUG9ydGFsLCBub1Njcm9sbCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIW5vUG9ydGFsICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wb3B1cCk7XG4gICAgfVxuICAgIGlmIChub1Njcm9sbCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmNsYXNzTGlzdC50b2dnbGUoJ3dpdGgtcG9ydGFsJywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBub1Njcm9sbCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnBvcHVwKTtcbiAgICB9XG4gICAgaWYgKG5vU2Nyb2xsKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuY2xhc3NMaXN0LnRvZ2dsZSgnd2l0aC1wb3J0YWwnLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG5vUG9ydGFsIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChub1BvcnRhbCkge1xuICAgICAgcmV0dXJuIENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgcmV0dXJuIHBvcnRhbChjaGlsZHJlbiwgdGhpcy5wb3B1cCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cblBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBub1BvcnRhbDogUHJvcFR5cGVzLmJvb2wsXG4gIG5vU2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5Qb3J0YWwuZGVmYXVsdFByb3BzID0ge1xuICBub1BvcnRhbDogZmFsc2UsXG4gIG5vU2Nyb2xsOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRhbDtcbiJdfQ==
