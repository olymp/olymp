var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import Toolbar, { Button } from './toolbar';
import { Menu } from 'antd';
import { sortBy } from 'lodash';
import addBlock from './utils/add-block';
export default function (props) {
    var state = props.state, blockTypes = props.blockTypes, onChange = props.onChange, defaultNode = props.defaultNode, show = props.show;
    var node = state.blocks.get(0);
    var display = !state.isBlurred && state.isCollapsed && node.isEmpty;
    var categories = {};
    var menuItems = [];
    var types = Object.keys(blockTypes).map(function (key) { return (__assign({}, blockTypes[key].slate, { type: key })); });
    sortBy(types, ['category', 'label']).forEach(function (action) {
        if (!action.label) {
            return;
        }
        var onMouseDown = function (e) {
            e.preventDefault();
            onChange(addBlock(state, action, { defaultNode: defaultNode }));
        };
        var item = (React.createElement(Menu.Item, { key: action.type },
            React.createElement(Button, { onMouseDown: onMouseDown }, action.label || action.type)));
        if (action.category) {
            if (!categories[action.category]) {
                categories[action.category] = [];
            }
            categories[action.category].push(item);
        }
        else {
            menuItems.push(item);
        }
    });
    return (React.createElement(Toolbar, { isOpened: !!display, show: show },
        Object.keys(categories).map(function (key) {
            return (React.createElement(Menu.SubMenu, { title: React.createElement(Button, null, key), key: key }, categories[key]));
        }),
        menuItems));
};
//# sourceMappingURL=toolbar-void.js.map