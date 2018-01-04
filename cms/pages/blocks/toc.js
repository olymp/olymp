'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _dec2, _class2;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createToc = require('olymp-slate/create-toc');

var _createToc2 = _interopRequireDefault(_createToc);

var _recompose = require('recompose');

var _reactStickynode = require('react-stickynode');

var _reactStickynode2 = _interopRequireDefault(_reactStickynode);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _scrollmonitor = require('scrollmonitor');

var _scrollmonitor2 = _interopRequireDefault(_scrollmonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import withScroll from 'olymp-fela/scroll-top';


var onClick = function onClick(id) {
  return function (e) {
    document.querySelector('[data-key="' + id + '"]').scrollIntoView({
      behavior: 'smooth'
    });
    e.stopPropagation();
  };
};

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Item, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var item = this.props.item;

      var element = document.querySelector('[data-key="' + item.key + '"]');
      var elementWatcher = _scrollmonitor2.default.create(element);

      elementWatcher.fullyEnterViewport(function () {
        _this2.setState({ visible: true });
      });
      elementWatcher.partiallyExitViewport(function () {
        _this2.setState({ visible: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var visible = this.state.visible;
      var _props$item = this.props.item,
          key = _props$item.key,
          text = _props$item.text,
          _props$item$children = _props$item.children,
          children = _props$item$children === undefined ? [] : _props$item$children;

      return _react2.default.createElement(
        'a',
        { key: key, onClick: onClick(key) },
        _react2.default.createElement(
          'h5',
          { className: (0, _classnames2.default)('item', visible && 'active') },
          text
        ),
        children.map(function (_ref2) {
          var key = _ref2.key,
              text = _ref2.text;
          return _react2.default.createElement(
            'a',
            { key: key, onClick: onClick(key) },
            _react2.default.createElement(
              'h6',
              null,
              '\xA0\xA0\xA0',
              text
            )
          );
        })
      );
    }
  }]);

  return Item;
}(_react.Component);

var Com = (_dec = (0, _recompose.withProps)(function (_ref3) {
  var editor = _ref3.editor,
      node = _ref3.node;
  return {
    value: editor.props.value,
    parentEl: '[data-key="' + node.key + '"]'
  };
}), _dec2 = (0, _recompose.withPropsOnChange)(['value'], function (_ref4) {
  var value = _ref4.value;

  var toc = (0, _createToc2.default)(value);
  return {
    toc: toc
  };
}), _dec(_class2 = _dec2(_class2 = function (_Component2) {
  _inherits(Com, _Component2);

  function Com() {
    _classCallCheck(this, Com);

    return _possibleConstructorReturn(this, (Com.__proto__ || Object.getPrototypeOf(Com)).apply(this, arguments));
  }

  _createClass(Com, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          toc = _props.toc,
          attributes = _props.attributes,
          children = _props.children,
          className = _props.className,
          scrollTop = _props.scrollTop;

      console.log(scrollTop);
      return _react2.default.createElement(
        _reactStickynode2.default,
        { enabled: true, top: 90 },
        _react2.default.createElement(
          'div',
          _extends({
            className: className
          }, attributes, {
            style: { left: -248, top: 0 }
          }),
          children,
          toc.map(function (item) {
            return _react2.default.createElement(Item, { item: item, key: item.key });
          })
        )
      );
    }
  }]);

  return Com;
}(_react.Component)) || _class2) || _class2);
exports.default = {
  label: 'Scroller',
  category: 'Sonstiges',
  type: 'scroller',
  isVoid: true,
  component: Com,
  styles: function styles(_ref5) {
    var theme = _ref5.theme;
    return {
      backgroundColor: '#8080800f',
      padding: 20,
      borderRadius: 5,
      borderBottomRightRadius: 60,
      // borderBottom: '2px solid #706269',
      boxShadow: 'rgba(0, 0, 0, 0.01) 1px 1px 4px, rgba(0, 0, 0, 0.1) 0px 1px 3px',
      position: 'fixed',
      onAfter: {
        content: '""',
        backgroundColor: 'rgba(255, 162, 16, 0.78)',
        background: 'linear-gradient(90deg, rgb(255, 143, 1), rgb(255, 171, 29))',
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 10,
        borderRadius: '60px 5px 5px'
      },
      '& .item.active': {
        color: 'black',
        transform: 'scale(1.1)'
      },
      '& .item:hover': {
        color: 'black'
      },
      '& .item': {
        color: 'gray',
        transition: 'all 0.5s ease-in-out'
      },
      animationName: {
        from: {
          opacity: 0,
          transform: 'translateX(-60px)'
        },
        to: {
          opacity: 1,
          transform: 'translateX(0px)'
        }
      },
      animationIterationCount: 1,
      animationDuration: '2s',
      animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      animationFillMode: 'both'
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvdG9jLmVzNiJdLCJuYW1lcyI6WyJvbkNsaWNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIkl0ZW0iLCJzdGF0ZSIsIml0ZW0iLCJwcm9wcyIsImVsZW1lbnQiLCJrZXkiLCJlbGVtZW50V2F0Y2hlciIsImNyZWF0ZSIsImZ1bGx5RW50ZXJWaWV3cG9ydCIsInNldFN0YXRlIiwidmlzaWJsZSIsInBhcnRpYWxseUV4aXRWaWV3cG9ydCIsInRleHQiLCJjaGlsZHJlbiIsIm1hcCIsIkNvbSIsImVkaXRvciIsIm5vZGUiLCJ2YWx1ZSIsInBhcmVudEVsIiwidG9jIiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsInNjcm9sbFRvcCIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0IiwidG9wIiwibGFiZWwiLCJjYXRlZ29yeSIsInR5cGUiLCJpc1ZvaWQiLCJjb21wb25lbnQiLCJzdHlsZXMiLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJveFNoYWRvdyIsInBvc2l0aW9uIiwib25BZnRlciIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwicmlnaHQiLCJib3R0b20iLCJjb2xvciIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJhbmltYXRpb25OYW1lIiwiZnJvbSIsIm9wYWNpdHkiLCJ0byIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsImFuaW1hdGlvbkZpbGxNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUpBOzs7QUFNQSxJQUFNQSxVQUFVLFNB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LEdBQTVCLEdBRE87QUFBQSxXQUFSO0FBTkg7QUFERixPQURGO0FBY0Q7Ozs7O2tCQUdZO0FBQ2J1QixTQUFPLFVBRE07QUFFYkMsWUFBVSxXQUZHO0FBR2JDLFFBQU0sVUFITztBQUliQyxVQUFRLElBSks7QUFLYkMsYUFBV2pCLEdBTEU7QUFNYmtCLFVBQVE7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN0QkMsdUJBQWlCLFdBREs7QUFFdEJDLGVBQVMsRUFGYTtBQUd0QkMsb0JBQWMsQ0FIUTtBQUl0QkMsK0JBQXlCLEVBSkg7QUFLdEI7QUFDQUMsaUJBQVcsaUVBTlc7QUFPdEJDLGdCQUFVLE9BUFk7QUFRdEJDLGVBQVM7QUFDUEMsaUJBQVMsSUFERjtBQUVQUCx5QkFBaUIsMEJBRlY7QUFHUFEsb0JBQVksNkRBSEw7QUFJUEgsa0JBQVUsVUFKSDtBQUtQSSxlQUFPLENBTEE7QUFNUEMsZ0JBQVEsQ0FORDtBQU9QVCxpQkFBUyxFQVBGO0FBUVBDLHNCQUFjO0FBUlAsT0FSYTtBQWtCdEIsd0JBQWtCO0FBQ2hCUyxlQUFPLE9BRFM7QUFFaEJDLG1CQUFXO0FBRkssT0FsQkk7QUFzQnRCLHVCQUFpQjtBQUNmRCxlQUFPO0FBRFEsT0F0Qks7QUF5QnRCLGlCQUFXO0FBQ1RBLGVBQU8sTUFERTtBQUVURSxvQkFBWTtBQUZILE9BekJXO0FBNkJ0QkMscUJBQWU7QUFDYkMsY0FBTTtBQUNKQyxtQkFBUyxDQURMO0FBRUpKLHFCQUFXO0FBRlAsU0FETztBQUtiSyxZQUFJO0FBQ0ZELG1CQUFTLENBRFA7QUFFRkoscUJBQVc7QUFGVDtBQUxTLE9BN0JPO0FBdUN0Qk0sK0JBQXlCLENBdkNIO0FBd0N0QkMseUJBQW1CLElBeENHO0FBeUN0QkMsK0JBQXlCLG9DQXpDSDtBQTBDdEJDLHlCQUFtQjtBQTFDRyxLQUFoQjtBQUFBO0FBTkssQyIsImZpbGUiOiJjbXMvcGFnZXMvYmxvY2tzL3RvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlVE9DIGZyb20gJ29seW1wLXNsYXRlL2NyZWF0ZS10b2MnO1xuLy8gaW1wb3J0IHdpdGhTY3JvbGwgZnJvbSAnb2x5bXAtZmVsYS9zY3JvbGwtdG9wJztcbmltcG9ydCB7IHdpdGhQcm9wcywgd2l0aFByb3BzT25DaGFuZ2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzY3JvbGxNb25pdG9yIGZyb20gJ3Njcm9sbG1vbml0b3InO1xuXG5jb25zdCBvbkNsaWNrID0gaWQgPT4gZSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWtleT1cIiR7aWR9XCJdYCkuc2Nyb2xsSW50b1ZpZXcoe1xuICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgfSk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59O1xuXG5jbGFzcyBJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7fTtcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zdCB7aXRlbX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1rZXk9XCIke2l0ZW0ua2V5fVwiXWApO1xuICAgIGNvbnN0IGVsZW1lbnRXYXRjaGVyID0gc2Nyb2xsTW9uaXRvci5jcmVhdGUoZWxlbWVudCk7XG5cbiAgICBlbGVtZW50V2F0Y2hlci5mdWxseUVudGVyVmlld3BvcnQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmlzaWJsZTogdHJ1ZX0pO1xuICAgIH0pO1xuICAgIGVsZW1lbnRXYXRjaGVyLnBhcnRpYWxseUV4aXRWaWV3cG9ydCgoKSA9PiB7XG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7dmlzaWJsZTogZmFsc2V9KTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBrZXksIHRleHQsIGNoaWxkcmVuID0gW10gfSA9IHRoaXMucHJvcHMuaXRlbTtcbiAgICByZXR1cm4gKFxuICAgICAgPGEga2V5PXtrZXl9IG9uQ2xpY2s9e29uQ2xpY2soa2V5KX0+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9e2NuKCdpdGVtJywgdmlzaWJsZSAmJiAnYWN0aXZlJyl9PlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L2g1PlxuICAgICAgICB7Y2hpbGRyZW4ubWFwKCh7IGtleSwgdGV4dCB9KSA9PiAoXG4gICAgICAgICAgPGEga2V5PXtrZXl9IG9uQ2xpY2s9e29uQ2xpY2soa2V5KX0+XG4gICAgICAgICAgICA8aDY+Jm5ic3A7Jm5ic3A7Jm5ic3A7e3RleHR9PC9oNj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkpfVxuICAgICAgPC9hPlxuICAgIClcbiAgfVxufVxuXG5Ad2l0aFByb3BzKCh7IGVkaXRvciwgbm9kZSB9KSA9PiAoe1xuICB2YWx1ZTogZWRpdG9yLnByb3BzLnZhbHVlLFxuICBwYXJlbnRFbDogYFtkYXRhLWtleT1cIiR7bm9kZS5rZXl9XCJdYCxcbn0pKVxuQHdpdGhQcm9wc09uQ2hhbmdlKFsndmFsdWUnXSwgKHsgdmFsdWUgfSkgPT4ge1xuICBjb25zdCB0b2MgPSBjcmVhdGVUT0ModmFsdWUpO1xuICByZXR1cm4ge1xuICAgIHRvY1xuICB9O1xufSlcbmNsYXNzIENvbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0b2MsXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzY3JvbGxUb3AsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coc2Nyb2xsVG9wKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0aWNreSBlbmFibGVkIHRvcD17OTB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICAgICAgc3R5bGU9e3sgbGVmdDogLTI0OCwgdG9wOiAwIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAge3RvYy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtfSBrZXk9e2l0ZW0ua2V5fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3RpY2t5PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsYWJlbDogJ1Njcm9sbGVyJyxcbiAgY2F0ZWdvcnk6ICdTb25zdGlnZXMnLFxuICB0eXBlOiAnc2Nyb2xsZXInLFxuICBpc1ZvaWQ6IHRydWUsXG4gIGNvbXBvbmVudDogQ29tLFxuICBzdHlsZXM6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzgwODA4MDBmJyxcbiAgICBwYWRkaW5nOiAyMCxcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDYwLFxuICAgIC8vIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjNzA2MjY5JyxcbiAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMDEpIDFweCAxcHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAzcHgnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIG9uQWZ0ZXI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAxNjIsIDE2LCAwLjc4KScsXG4gICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjU1LCAxNDMsIDEpLCByZ2IoMjU1LCAxNzEsIDI5KSknLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNjBweCA1cHggNXB4JyxcbiAgICB9LFxuICAgICcmIC5pdGVtLmFjdGl2ZSc6IHtcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScsXG4gICAgfSxcbiAgICAnJiAuaXRlbTpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgIH0sXG4gICAgJyYgLml0ZW0nOiB7XG4gICAgICBjb2xvcjogJ2dyYXknLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzIGVhc2UtaW4tb3V0JyxcbiAgICB9LFxuICAgIGFuaW1hdGlvbk5hbWU6IHtcbiAgICAgIGZyb206IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNjBweCknLFxuICAgICAgfSxcbiAgICAgIHRvOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMHB4KScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICcycycsXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcbiAgICBhbmltYXRpb25GaWxsTW9kZTogJ2JvdGgnLFxuICB9KSxcbn07XG4iXX0=
