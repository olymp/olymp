import 'antd/lib/menu/style';
import _Menu2 from 'antd/lib/menu';
import 'antd/lib/menu/style';
import _Menu from 'antd/lib/menu';
import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import Toolbar, { Button } from './toolbar';
import hasMark from './utils/has-mark';
import hasBlock from './utils/has-block';

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
      return _this.renderOptionButton(props, hasBlock, _this.onClickBlock);
    }, _this.onClickMark = function (e, type) {
      e.stopPropagation();
      e.preventDefault();
      var _this$props2 = _this.props,
          value = _this$props2.value,
          onChange = _this$props2.onChange;

      onChange(value.change().toggleMark(type));
    }, _this.renderMarkButton = function (props) {
      return _this.renderOptionButton(props, hasMark, _this.onClickMark);
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

      var icon = label || props.label || React.createElement(_Icon, { type: props.icon });
      if (type && Array.isArray(type)) {
        return React.createElement(
          _Menu.SubMenu,
          { key: type.join('-'), title: React.createElement(
              Button,
              null,
              icon
            ) },
          type.map(function (subType, index) {
            var subLabel = props.description && props.description[index] ? props.description[index] : label || subType;

            return _this.renderOptionButton(_extends({}, props, { type: subType }), isActiveFn, Array.isArray(onMouseDownFn) ? onMouseDownFn[index] : onMouseDownFn, subLabel);
          })
        );
      }

      return React.createElement(
        _Menu2.Item,
        { key: type, className: isActive && 'ant-menu-item-selected' },
        React.createElement(
          Button,
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

      return React.createElement(
        Toolbar,
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
}(Component);

export { ToolbarText as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3NsYXRlL3Rvb2xiYXItdGV4dC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUb29sYmFyIiwiQnV0dG9uIiwiaGFzTWFyayIsImhhc0Jsb2NrIiwiVG9vbGJhclRleHQiLCJvbkNsaWNrQmxvY2siLCJlIiwicHJvcHMiLCJpc0FjdGl2ZSIsInZhbHVlIiwib25DaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZSIsInNldEJsb2NrIiwidHlwZSIsInJlbmRlckJsb2NrQnV0dG9uIiwicmVuZGVyT3B0aW9uQnV0dG9uIiwib25DbGlja01hcmsiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVNYXJrIiwicmVuZGVyTWFya0J1dHRvbiIsInJlbmRlckFjdGlvbkJ1dHRvbiIsImlzQWN0aXZlRm4iLCJmbiIsIm9uQ2xpY2siLCJvbk1vdXNlRG93bkZuIiwibGFiZWwiLCJvbk1vdXNlRG93biIsImljb24iLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwibWFwIiwic3ViVHlwZSIsImluZGV4Iiwic3ViTGFiZWwiLCJkZXNjcmlwdGlvbiIsIm9uT3BlbiIsIm1lbnUiLCJmaXJzdENoaWxkIiwic2V0U3RhdGUiLCJ0b29sYmFyTWFya3MiLCJ0b29sYmFyVHlwZXMiLCJ0b29sYmFyQWN0aW9ucyIsInNob3ciLCJkaXNwbGF5IiwiaXNCbHVycmVkIiwiaXNDb2xsYXBzZWQiLCJub2RlIiwiYmxvY2tzIiwic2l6ZSIsImdldCIsImlubGluZXMiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7O0FBRUEsT0FBT0MsT0FBUCxJQUFrQkMsTUFBbEIsUUFBZ0MsV0FBaEM7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLGtCQUFwQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsbUJBQXJCOztJQUVxQkMsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxZLEdBQWUs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QUMsZUFBRDtBQUFBO0FBQ0Usb0JBQVUsQ0FBQyxDQUFDSCxPQURkO0FBRUUsZ0JBQU1ELElBRlI7QUFHRSxrQ0FBc0JJLEtBQUtLLEdBQTNCO0FBSEY7QUFLR1oscUJBQWFULEdBQWIsQ0FBaUIsS0FBS1osZ0JBQXRCLENBTEg7QUFNR3NCLHFCQUFhVixHQUFiLENBQWlCLEtBQUtqQixpQkFBdEIsQ0FOSDtBQU9HNEIsdUJBQWVYLEdBQWYsQ0FBbUIsS0FBS1gsa0JBQXhCO0FBUEgsT0FERjtBQVdEOzs7O0VBakdzQ3RCLFM7O1NBQXBCSyxXIiwiZmlsZSI6InBhY2thZ2VzL3NsYXRlL3Rvb2xiYXItdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uLCBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgVG9vbGJhciwgeyBCdXR0b24gfSBmcm9tICcuL3Rvb2xiYXInO1xuaW1wb3J0IGhhc01hcmsgZnJvbSAnLi91dGlscy9oYXMtbWFyayc7XG5pbXBvcnQgaGFzQmxvY2sgZnJvbSAnLi91dGlscy9oYXMtYmxvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sYmFyVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uQ2xpY2tCbG9jayA9IChlLCBwcm9wcywgaXNBY3RpdmUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZS5jaGFuZ2UoKS5zZXRCbG9jaygncGFyYWdyYXBoJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZS5jaGFuZ2UoKS5zZXRCbG9jayhwcm9wcy50eXBlKSk7XG4gICAgfVxuICB9O1xuICByZW5kZXJCbG9ja0J1dHRvbiA9IHByb3BzID0+XG4gICAgdGhpcy5yZW5kZXJPcHRpb25CdXR0b24ocHJvcHMsIGhhc0Jsb2NrLCB0aGlzLm9uQ2xpY2tCbG9jayk7XG4gIG9uQ2xpY2tNYXJrID0gKGUsIHR5cGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNoYW5nZSh2YWx1ZS5jaGFuZ2UoKS50b2dnbGVNYXJrKHR5cGUpKTtcbiAgfTtcbiAgcmVuZGVyTWFya0J1dHRvbiA9IHByb3BzID0+XG4gICAgdGhpcy5yZW5kZXJPcHRpb25CdXR0b24ocHJvcHMsIGhhc01hcmssIHRoaXMub25DbGlja01hcmspO1xuICByZW5kZXJBY3Rpb25CdXR0b24gPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgaXNBY3RpdmUgPSBwcm9wcy5pc0FjdGl2ZSA/IHByb3BzLmlzQWN0aXZlKHRoaXMucHJvcHMpIDogZmFsc2U7XG4gICAgY29uc3QgaXNBY3RpdmVGbiA9ICgpID0+IGlzQWN0aXZlO1xuICAgIGNvbnN0IGZuID0gZSA9PiBwcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMsIGlzQWN0aXZlLCBlKTtcblxuICAgIHJldHVybiB0aGlzLnJlbmRlck9wdGlvbkJ1dHRvbihwcm9wcywgaXNBY3RpdmVGbiwgZm4pO1xuICB9O1xuICByZW5kZXJPcHRpb25CdXR0b24gPSAocHJvcHMsIGlzQWN0aXZlRm4sIG9uTW91c2VEb3duRm4sIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHR5cGUgfSA9IHByb3BzO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gaXNBY3RpdmVGbih2YWx1ZSwgdHlwZSk7XG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSBlID0+IG9uTW91c2VEb3duRm4oZSwgcHJvcHMsIGlzQWN0aXZlKTtcblxuICAgIGNvbnN0IGljb24gPSBsYWJlbCB8fCBwcm9wcy5sYWJlbCB8fCA8SWNvbiB0eXBlPXtwcm9wcy5pY29ufSAvPjtcbiAgICBpZiAodHlwZSAmJiBBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TWVudS5TdWJNZW51IGtleT17dHlwZS5qb2luKCctJyl9IHRpdGxlPXs8QnV0dG9uPntpY29ufTwvQnV0dG9uPn0+XG4gICAgICAgICAge3R5cGUubWFwKChzdWJUeXBlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ViTGFiZWwgPVxuICAgICAgICAgICAgICBwcm9wcy5kZXNjcmlwdGlvbiAmJiBwcm9wcy5kZXNjcmlwdGlvbltpbmRleF1cbiAgICAgICAgICAgICAgICA/IHByb3BzLmRlc2NyaXB0aW9uW2luZGV4XVxuICAgICAgICAgICAgICAgIDogbGFiZWwgfHwgc3ViVHlwZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyT3B0aW9uQnV0dG9uKFxuICAgICAgICAgICAgICB7IC4uLnByb3BzLCB0eXBlOiBzdWJUeXBlIH0sXG4gICAgICAgICAgICAgIGlzQWN0aXZlRm4sXG4gICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkob25Nb3VzZURvd25GbilcbiAgICAgICAgICAgICAgICA/IG9uTW91c2VEb3duRm5baW5kZXhdXG4gICAgICAgICAgICAgICAgOiBvbk1vdXNlRG93bkZuLFxuICAgICAgICAgICAgICBzdWJMYWJlbCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnUuSXRlbSBrZXk9e3R5cGV9IGNsYXNzTmFtZT17aXNBY3RpdmUgJiYgJ2FudC1tZW51LWl0ZW0tc2VsZWN0ZWQnfT5cbiAgICAgICAgPEJ1dHRvbiBvbk1vdXNlRG93bj17b25Nb3VzZURvd259PntpY29ufTwvQnV0dG9uPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgKTtcbiAgfTtcbiAgb25PcGVuID0gKHsgZmlyc3RDaGlsZDogbWVudSB9KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnUgfSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHRvb2xiYXJNYXJrcyxcbiAgICAgIHRvb2xiYXJUeXBlcyxcbiAgICAgIHRvb2xiYXJBY3Rpb25zLFxuICAgICAgc2hvdyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkaXNwbGF5ID0gIXZhbHVlLmlzQmx1cnJlZCAmJiAhdmFsdWUuaXNDb2xsYXBzZWQ7XG5cbiAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgaWYgKHZhbHVlLmJsb2Nrcy5zaXplKSB7XG4gICAgICBub2RlID0gdmFsdWUuYmxvY2tzLmdldCgwKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmlubGluZXMuc2l6ZSkge1xuICAgICAgbm9kZSA9IHZhbHVlLmlubGluZXMuZ2V0KDApO1xuICAgIH1cblxuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sYmFyXG4gICAgICAgIGlzT3BlbmVkPXshIWRpc3BsYXl9XG4gICAgICAgIHNob3c9e3Nob3d9XG4gICAgICAgIHBhcmVudD17YFtkYXRhLWtleT1cIiR7bm9kZS5rZXl9XCJdYH1cbiAgICAgID5cbiAgICAgICAge3Rvb2xiYXJNYXJrcy5tYXAodGhpcy5yZW5kZXJNYXJrQnV0dG9uKX1cbiAgICAgICAge3Rvb2xiYXJUeXBlcy5tYXAodGhpcy5yZW5kZXJCbG9ja0J1dHRvbil9XG4gICAgICAgIHt0b29sYmFyQWN0aW9ucy5tYXAodGhpcy5yZW5kZXJBY3Rpb25CdXR0b24pfVxuICAgICAgPC9Ub29sYmFyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
