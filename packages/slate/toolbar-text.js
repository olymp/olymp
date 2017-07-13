var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import Toolbar, { Button } from './toolbar';
import { Icon, Menu } from 'antd';
import { hasMark, hasBlock } from './utils/has';
import addBlock from './utils/add-block';
var ToolbarText = (function (_super) {
    __extends(ToolbarText, _super);
    function ToolbarText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClickBlock = function (e, props) {
            var _a = _this.props, state = _a.state, onChange = _a.onChange, defaultNode = _a.defaultNode;
            e.preventDefault();
            onChange(addBlock(state, props, defaultNode));
        };
        _this.renderBlockButton = function (props) {
            return _this.renderOptionButton(props, hasBlock, _this.onClickBlock);
        };
        _this.onClickMark = function (e, type) {
            e.stopPropagation();
            e.preventDefault();
            var _a = _this.props, state = _a.state, onChange = _a.onChange;
            onChange(state.transform().toggleMark(type).apply());
        };
        _this.renderMarkButton = function (props) {
            return _this.renderOptionButton(props, hasMark, _this.onClickMark);
        };
        _this.renderActionButton = function (props) {
            var isActive = props.isActive ? props.isActive(_this.props) : false;
            var isActiveFn = function () { return isActive; };
            var fn = function (e) { return props.onClick(_this.props, isActive, e); };
            return _this.renderOptionButton(props, isActiveFn, fn);
        };
        _this.renderOptionButton = function (props, isActiveFn, onMouseDownFn, label) {
            var state = _this.props.state;
            var type = props.type;
            var isActive = isActiveFn(state, type);
            var onMouseDown = function (e) { return onMouseDownFn(e, props); };
            var icon = label || props.label || React.createElement(Icon, { type: props.icon });
            if (type && Array.isArray(type)) {
                return (React.createElement(Menu.SubMenu, { key: type.join('-'), title: React.createElement(Button, null, icon) }, type.map(function (subType, index) {
                    var subLabel = props.description && props.description[index]
                        ? props.description[index]
                        : label || subType;
                    return _this.renderOptionButton(__assign({}, props, { type: subType }), isActiveFn, Array.isArray(onMouseDownFn)
                        ? onMouseDownFn[index]
                        : onMouseDownFn, subLabel);
                })));
            }
            return (React.createElement(Menu.Item, { key: type, className: isActive && 'ant-menu-item-selected' },
                React.createElement(Button, { onMouseDown: onMouseDown }, icon)));
        };
        _this.onOpen = function (_a) {
            var menu = _a.firstChild;
            _this.setState({ menu: menu });
        };
        return _this;
    }
    ToolbarText.prototype.render = function () {
        var _a = this.props, state = _a.state, toolbarMarks = _a.toolbarMarks, toolbarTypes = _a.toolbarTypes, toolbarActions = _a.toolbarActions, show = _a.show;
        var display = !state.isBlurred && !state.isCollapsed;
        return (React.createElement(Toolbar, { isOpened: !!display, show: show },
            toolbarMarks.map(this.renderMarkButton),
            toolbarTypes.map(this.renderBlockButton),
            toolbarActions.map(this.renderActionButton)));
    };
    return ToolbarText;
}(Component));
export default ToolbarText;
//# sourceMappingURL=toolbar-text.js.map