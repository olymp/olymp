import { Menu, Icon } from 'antd';
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
    return overlay = {}
        < Menu;
}, selectedKeys = (_a = {}, _a[value] = , _a), onSelect = {}({ selectedKeys: selectedKeys }));
onSelect(selectedKeys[0]);
    >
        { children: children }
    < /Menu>;
    >
        style;
{
    style;
}
className = { className: className } >
    { content: content }
    < Icon;
type = "down" /  >
    /span>
    < /Dropdown>),;
(function (p) { return Object.keys(p); });
;
dropdown.Item = Menu.Item;
export default dropdown;
var _a;
//# sourceMappingURL=dropdown.js.map