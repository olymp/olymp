import React from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import { createComponent } from 'olymp-fela';
var dropdown = createComponent(function (_a) {
    var float = _a.float;
    return ({
        float: float,
        '> i': {
            marginLeft: 3,
        },
    });
}, function (_a) {
    var onSelect = _a.onSelect, value = _a.value, children = _a.children, content = _a.content, style = _a.style, className = _a.className;
    return (React.createElement(Dropdown, { overlay: React.createElement(Menu, { selectedKeys: [value], onSelect: function (_a) {
                var selectedKeys = _a.selectedKeys;
                return onSelect(selectedKeys[0]);
            } }, children) },
        React.createElement("span", { style: style, className: className },
            content,
            React.createElement(Icon, { type: "down" }))));
}, function (p) { return Object.keys(p); });
dropdown.Item = Menu.Item;
export default dropdown;
//# sourceMappingURL=dropdown.js.map