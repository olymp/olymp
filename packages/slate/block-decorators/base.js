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
import { createComponent } from 'react-fela';
export default function (options) {
    if (options === void 0) { options = {}; }
    return function (Block) {
        var key = options.key, isVoid = options.isVoid, isAtomic = options.isAtomic, sidebar = options.sidebar, actions = options.actions, label = options.label, category = options.category, icon = options.icon, defaultNodes = options.defaultNodes, props = options.props;
        var StyledBlock = createComponent(function (_a) {
            var active = _a.active;
            return ({
                outline: active && '2px solid rgba(48, 48, 48, 0.67)',
            });
        }, function (p) { return React.createElement(Block, __assign({}, p)); }, function (p) { return Object.keys(p); });
        return _a = (function (_super) {
                __extends(BaseDecorator, _super);
                function BaseDecorator() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.setData = function (data) {
                        var _a = _this.props, node = _a.node, editor = _a.editor;
                        var transform = editor
                            .getState()
                            .transform()
                            .setNodeByKey(node.key, { data: __assign({}, node.data.toJS(), data) })
                            .apply();
                        editor.onChange(transform);
                    };
                    _this.getData = function (name, defaultValue) {
                        var node = _this.props.node;
                        return node.data.get(name) || defaultValue;
                    };
                    _this.setActive = function () {
                        var _a = _this.props, node = _a.node, editor = _a.editor;
                        var transform = editor
                            .getState()
                            .transform()
                            .moveToRangeOf(node)
                            .apply();
                        editor.onChange(transform);
                    };
                    return _this;
                }
                BaseDecorator.prototype.render = function () {
                    var _this = this;
                    var _a = this.props, node = _a.node, editor = _a.editor, state = _a.state, children = _a.children;
                    var blockProps = (props || []).reduce(function (state, prop) {
                        var data = _this.getData(prop);
                        if (data !== undefined) {
                            state[prop] = data;
                        }
                        return state;
                    }, {});
                    var active = !editor.props.readOnly &&
                        children.findIndex(function (child) {
                            return parseInt(child.key, 10) === parseInt(state.selection.startKey, 10);
                        }) >= 0;
                    return (React.createElement(StyledBlock, __assign({}, this.props, { active: active, getData: this.getData, setData: this.setData, setActive: this.setActive, readOnly: editor.props.readOnly }, blockProps), isVoid === false ? [children] : []));
                };
                return BaseDecorator;
            }(Component)),
            _a.slate = {
                key: key,
                isVoid: isVoid !== false,
                actions: actions,
                isAtomic: isAtomic,
                sidebar: sidebar,
                label: label,
                category: category,
                icon: icon,
                defaultNodes: defaultNodes,
            },
            _a;
        var _a;
    };
};
//# sourceMappingURL=base.js.map