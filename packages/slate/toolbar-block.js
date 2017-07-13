var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { get } from 'lodash';
var Action = function (_a) {
    var node = _a.node, state = _a.state, onChange = _a.onChange;
    return function (_a, i) {
        var toggle = _a.toggle, active = _a.active, label = _a.label, component = _a.component, rest = __rest(_a, ["toggle", "active", "label", "component"]);
        var setData = function (data) {
            var transform = state
                .transform()
                .setNodeByKey(node.key, { data: __assign({}, node.data.toJS(), data) })
                .apply();
            onChange(transform);
            return Promise.resolve();
        };
        var getData = function (name, defaultValue) { return node.data.get(name) || defaultValue; };
        var tooltip = typeof rest.tooltip === 'function' ? rest.tooltip(getData) : rest.tooltip;
        var onClick = function (e) {
            e.preventDefault();
            if (toggle)
                toggle({ setData: setData, getData: getData, state: state, onChange: onChange });
        };
        if (component) {
            var Com = component;
            return key = { i: i } >
                onMouseDown;
            {
                onClick;
            }
            tooltip = { tooltip: tooltip }
                >
                    setData;
            {
                setData;
            }
            getData = { getData: getData } /  >
                /Button>
                < /Menu.Item>;
        }
    };
};
;
return key = { i: i } >
    active;
{
    !!active && active({ getData: getData, state: state });
}
onMouseDown = { onClick: onClick };
tooltip = { tooltip: tooltip }
    >
        { label: label }
    < /Button>
    < /Menu.Item>;
;
;
export default function (props) {
    var state = props.state, blockTypes = props.blockTypes, onChange = props.onChange, show = props.show;
    var block = state.blocks.size === 1 &&
        state.blocks.get(0).kind === 'block' &&
        blockTypes[state.blocks.get(0).type];
    var node = state.blocks.get(0);
    var actions = get(block, 'slate.actions', []);
    return show = { show: show };
    isOpened = {};
    block && actions && actions.length;
};
 >
    { actions: .map(Action(__assign({}, props, { node: node }))) }
    < /Toolbar>;
;
;
//# sourceMappingURL=toolbar-block.js.map