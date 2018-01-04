'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/menu/style');

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _hasMark = require('./utils/has-mark');

var _hasMark2 = _interopRequireDefault(_hasMark);

var _hasBlock = require('./utils/has-block');

var _hasBlock2 = _interopRequireDefault(_hasBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolbarText = function (_Component) {
  _inherits(ToolbarText, _Component);

  function ToolbarText() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToolbarText);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToolbarText.__proto__ || Object.getPrototypeOf(ToolbarText)).call.apply(_ref, [this].concat(args))), _this), _this.onClickBlock = function (e, props, isActive) {
      var _this$props = _this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;

      e.preventDefault();
      if (isActive) {
        onChange(value.change().setBlock('paragraph'));
      } else {
        onChange(value.change().setBlock(props.type));
      }
    }, _this.renderBlockButton = function (props) {
      return _this.renderOptionButton(props, _hasBlock2.default, _this.onClickBlock);
    }, _this.onClickMark = function (e, type) {
      e.stopPropagation();
      e.preventDefault();
      var _this$props2 = _this.props,
          value = _this$props2.value,
          onChange = _this$props2.onChange;

      onChange(value.change().toggleMark(type));
    }, _this.renderMarkButton = function (props) {
      return _this.renderOptionButton(props, _hasMark2.default, _this.onClickMark);
    }, _this.renderActionButton = function (props) {
      var isActive = props.isActive ? props.isActive(_this.props) : false;
      var isActiveFn = function isActiveFn() {
        return isActive;
      };
      var fn = function fn(e) {
        return props.onClick(_this.props, isActive, e);
      };

      return _this.renderOptionButton(props, isActiveFn, fn);
    }, _this.renderOptionButton = function (props, isActiveFn, onMouseDownFn, label) {
      var value = _this.props.value;
      var type = props.type;

      var isActive = isActiveFn(value, type);
      var onMouseDown = function onMouseDown(e) {
        return onMouseDownFn(e, props, isActive);
      };

      var icon = label || props.label || _react2.default.createElement(_icon2.default, { type: props.icon });
      if (type && Array.isArray(type)) {
        return _react2.default.createElement(
          _menu2.default.SubMenu,
          { key: type.join('-'), title: _react2.default.createElement(
              _toolbar.Button,
              null,
              icon
            ) },
          type.map(function (subType, index) {
            var subLabel = props.description && props.description[index] ? props.description[index] : label || subType;

            return _this.renderOptionButton(_extends({}, props, { type: subType }), isActiveFn, Array.isArray(onMouseDownFn) ? onMouseDownFn[index] : onMouseDownFn, subLabel);
          })
        );
      }

      return _react2.default.createElement(
        _menu2.default.Item,
        { key: type, className: isActive && 'ant-menu-item-selected' },
        _react2.default.createElement(
          _toolbar.Button,
          { onMouseDown: onMouseDown },
          icon
        )
      );
    }, _this.onOpen = function (_ref2) {
      var menu = _ref2.firstChild;

      _this.setState({ menu: menu });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToolbarText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          toolbarMarks = _props.toolbarMarks,
          toolbarTypes = _props.toolbarTypes,
          toolbarActions = _props.toolbarActions,
          show = _props.show;

      var display = !value.isBlurred && !value.isCollapsed;

      var node = null;
      if (value.blocks.size) {
        node = value.blocks.get(0);
      } else if (value.inlines.size) {
        node = value.inlines.get(0);
      }

      if (!node) {
        return null;
      }

      return _react2.default.createElement(
        _toolbar2.default,
        {
          isOpened: !!display,
          show: show,
          parent: '[data-key="' + node.key + '"]'
        },
        toolbarMarks.map(this.renderMarkButton),
        toolbarTypes.map(this.renderBlockButton),
        toolbarActions.map(this.renderActionButton)
      );
    }
  }]);

  return ToolbarText;
}(_react.Component);

exports.default = ToolbarText;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsL3NsYXRlL3Rvb2xiYXItdGV4dC5lczYiXSwibmFtZXMiOlsiVG9vbGJhclRleHQiLCJvbkNsaWNrQmxvY2siLCJlIiwicHJvcHMiLCJpc0FjdGl2ZSIsInZhbHVlIiwib25DaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZSIsInNldEJsb2NrIiwidHlwZSIsInJlbmRlckJsb2NrQnV0dG9uIiwicmVuZGVyT3B0aW9uQnV0dG9uIiwib25DbGlja01hcmsiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVNYXJrIiwicmVuZGVyTWFya0J1dHRvbiIsInJlbmRlckFjdGlvbkJ1dHRvbiIsImlzQWN0aXZlRm4iLCJmbiIsIm9uQ2xpY2siLCJvbk1vdXNlRG93bkZuIiwibGFiZWwiLCJvbk1vdXNlRG93biIsImljb24iLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwibWFwIiwic3ViVHlwZSIsImluZGV4Iiwic3ViTGFiZWwiLCJkZXNjcmlwdGlvbiIsIm9uT3BlbiIsIm1lbnUiLCJmaXJzdENoaWxkIiwic2V0U3RhdGUiLCJ0b29sYmFyTWFya3MiLCJ0b29sYmFyVHlwZXMiLCJ0b29sYmFyQWN0aW9ucyIsInNob3ciLCJkaXNwbGF5IiwiaXNCbHVycmVkIiwiaXNDb2xsYXBzZWQiLCJub2RlIiwiYmxvY2tzIiwic2l6ZSIsImdldCIsImlubGluZXMiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxZLEdBQWUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQVdDLFFBQVgsRUFBd0I7QUFBQSx3QkFDVCxNQUFLRCxLQURJO0FBQUEsVUFDN0JFLEtBRDZCLGVBQzdCQSxLQUQ2QjtBQUFBLFVBQ3RCQyxRQURzQixlQUN0QkEsUUFEc0I7O0FBRXJDSixRQUFFSyxjQUFGO0FBQ0EsVUFBSUgsUUFB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QixLQUFLWCxrQkFBeEI7QUFQSCxPQURGO0FBV0Q7Ozs7OztrQkFqR2tCakIsVyIsImZpbGUiOiJleHRlcm5hbC9zbGF0ZS90b29sYmFyLXRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbiwgTWVudSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFRvb2xiYXIsIHsgQnV0dG9uIH0gZnJvbSAnLi90b29sYmFyJztcbmltcG9ydCBoYXNNYXJrIGZyb20gJy4vdXRpbHMvaGFzLW1hcmsnO1xuaW1wb3J0IGhhc0Jsb2NrIGZyb20gJy4vdXRpbHMvaGFzLWJsb2NrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbGJhclRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbkNsaWNrQmxvY2sgPSAoZSwgcHJvcHMsIGlzQWN0aXZlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgb25DaGFuZ2UodmFsdWUuY2hhbmdlKCkuc2V0QmxvY2soJ3BhcmFncmFwaCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25DaGFuZ2UodmFsdWUuY2hhbmdlKCkuc2V0QmxvY2socHJvcHMudHlwZSkpO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyQmxvY2tCdXR0b24gPSBwcm9wcyA9PlxuICAgIHRoaXMucmVuZGVyT3B0aW9uQnV0dG9uKHByb3BzLCBoYXNCbG9jaywgdGhpcy5vbkNsaWNrQmxvY2spO1xuICBvbkNsaWNrTWFyayA9IChlLCB0eXBlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB2YWx1ZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DaGFuZ2UodmFsdWUuY2hhbmdlKCkudG9nZ2xlTWFyayh0eXBlKSk7XG4gIH07XG4gIHJlbmRlck1hcmtCdXR0b24gPSBwcm9wcyA9PlxuICAgIHRoaXMucmVuZGVyT3B0aW9uQnV0dG9uKHByb3BzLCBoYXNNYXJrLCB0aGlzLm9uQ2xpY2tNYXJrKTtcbiAgcmVuZGVyQWN0aW9uQnV0dG9uID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IGlzQWN0aXZlID0gcHJvcHMuaXNBY3RpdmUgPyBwcm9wcy5pc0FjdGl2ZSh0aGlzLnByb3BzKSA6IGZhbHNlO1xuICAgIGNvbnN0IGlzQWN0aXZlRm4gPSAoKSA9PiBpc0FjdGl2ZTtcbiAgICBjb25zdCBmbiA9IGUgPT4gcHJvcHMub25DbGljayh0aGlzLnByb3BzLCBpc0FjdGl2ZSwgZSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJPcHRpb25CdXR0b24ocHJvcHMsIGlzQWN0aXZlRm4sIGZuKTtcbiAgfTtcbiAgcmVuZGVyT3B0aW9uQnV0dG9uID0gKHByb3BzLCBpc0FjdGl2ZUZuLCBvbk1vdXNlRG93bkZuLCBsYWJlbCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBwcm9wcztcbiAgICBjb25zdCBpc0FjdGl2ZSA9IGlzQWN0aXZlRm4odmFsdWUsIHR5cGUpO1xuICAgIGNvbnN0IG9uTW91c2VEb3duID0gZSA9PiBvbk1vdXNlRG93bkZuKGUsIHByb3BzLCBpc0FjdGl2ZSk7XG5cbiAgICBjb25zdCBpY29uID0gbGFiZWwgfHwgcHJvcHMubGFiZWwgfHwgPEljb24gdHlwZT17cHJvcHMuaWNvbn0gLz47XG4gICAgaWYgKHR5cGUgJiYgQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9e3R5cGUuam9pbignLScpfSB0aXRsZT17PEJ1dHRvbj57aWNvbn08L0J1dHRvbj59PlxuICAgICAgICAgIHt0eXBlLm1hcCgoc3ViVHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkxhYmVsID1cbiAgICAgICAgICAgICAgcHJvcHMuZGVzY3JpcHRpb24gJiYgcHJvcHMuZGVzY3JpcHRpb25baW5kZXhdXG4gICAgICAgICAgICAgICAgPyBwcm9wcy5kZXNjcmlwdGlvbltpbmRleF1cbiAgICAgICAgICAgICAgICA6IGxhYmVsIHx8IHN1YlR5cGU7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlck9wdGlvbkJ1dHRvbihcbiAgICAgICAgICAgICAgeyAuLi5wcm9wcywgdHlwZTogc3ViVHlwZSB9LFxuICAgICAgICAgICAgICBpc0FjdGl2ZUZuLFxuICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KG9uTW91c2VEb3duRm4pXG4gICAgICAgICAgICAgICAgPyBvbk1vdXNlRG93bkZuW2luZGV4XVxuICAgICAgICAgICAgICAgIDogb25Nb3VzZURvd25GbixcbiAgICAgICAgICAgICAgc3ViTGFiZWwsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNZW51Lkl0ZW0ga2V5PXt0eXBlfSBjbGFzc05hbWU9e2lzQWN0aXZlICYmICdhbnQtbWVudS1pdGVtLXNlbGVjdGVkJ30+XG4gICAgICAgIDxCdXR0b24gb25Nb3VzZURvd249e29uTW91c2VEb3dufT57aWNvbn08L0J1dHRvbj5cbiAgICAgIDwvTWVudS5JdGVtPlxuICAgICk7XG4gIH07XG4gIG9uT3BlbiA9ICh7IGZpcnN0Q2hpbGQ6IG1lbnUgfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51IH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICB0b29sYmFyTWFya3MsXG4gICAgICB0b29sYmFyVHlwZXMsXG4gICAgICB0b29sYmFyQWN0aW9ucyxcbiAgICAgIHNob3csXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGlzcGxheSA9ICF2YWx1ZS5pc0JsdXJyZWQgJiYgIXZhbHVlLmlzQ29sbGFwc2VkO1xuXG4gICAgbGV0IG5vZGUgPSBudWxsO1xuICAgIGlmICh2YWx1ZS5ibG9ja3Muc2l6ZSkge1xuICAgICAgbm9kZSA9IHZhbHVlLmJsb2Nrcy5nZXQoMCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmxpbmVzLnNpemUpIHtcbiAgICAgIG5vZGUgPSB2YWx1ZS5pbmxpbmVzLmdldCgwKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VG9vbGJhclxuICAgICAgICBpc09wZW5lZD17ISFkaXNwbGF5fVxuICAgICAgICBzaG93PXtzaG93fVxuICAgICAgICBwYXJlbnQ9e2BbZGF0YS1rZXk9XCIke25vZGUua2V5fVwiXWB9XG4gICAgICA+XG4gICAgICAgIHt0b29sYmFyTWFya3MubWFwKHRoaXMucmVuZGVyTWFya0J1dHRvbil9XG4gICAgICAgIHt0b29sYmFyVHlwZXMubWFwKHRoaXMucmVuZGVyQmxvY2tCdXR0b24pfVxuICAgICAgICB7dG9vbGJhckFjdGlvbnMubWFwKHRoaXMucmVuZGVyQWN0aW9uQnV0dG9uKX1cbiAgICAgIDwvVG9vbGJhcj5cbiAgICApO1xuICB9XG59XG4iXX0=
