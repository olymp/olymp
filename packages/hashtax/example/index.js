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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import hashtax, { DataProvider } from '../index';
import value from './input.md';
var Hashtax = hashtax({
    bold: function (_a) {
        var value = _a.value, color = _a.color, props = __rest(_a, ["value", "color"]);
        return (React.createElement("b", { style: { color: color } }, value));
    },
    copyright: function (_a) {
        var value = _a.value, props = __rest(_a, ["value"]);
        return (React.createElement("span", null,
            "\u00A9 ",
            value));
    },
    break: function (_a) {
        var text = _a.text, props = __rest(_a, ["text"]);
        return React.createElement("br", null);
    },
    text: function (_a) {
        var text = _a.text, props = __rest(_a, ["text"]);
        return (React.createElement("span", null, text));
    },
    logo: function (_a) {
        var children = _a.children, value = _a.value, props = __rest(_a, ["children", "value"]);
        return React.createElement("div", { style: __assign({}, props, { color: value }) }, "LOGO");
    },
    bild: function (_a) {
        var children = _a.children, value = _a.value, alt = _a.alt, color = _a.color, item = _a.item, props = __rest(_a, ["children", "value", "alt", "color", "item"]);
        return (React.createElement("a", { href: value, style: { color: color }, alt: alt }, "BILD"));
    },
    menu: function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        return (React.createElement("div", null, children));
    },
    'menu-item': function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        return (React.createElement("div", null, children));
    },
    header: function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        return (React.createElement("div", { style: { border: '1px solid blue' } }, children));
    },
    footer: function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        return (React.createElement("div", { style: { border: '1px solid red' } }, children));
    },
}, {
    deco: function (WrappedComponent) {
        return graphql((_a = ["\n        query einrichtungList {\n          items: einrichtungList {\n            id\n            color\n            name\n            slug\n            kurz\n            art\n          }\n        }\n      "], _a.raw = ["\n        query einrichtungList {\n          items: einrichtungList {\n            id\n            color\n            name\n            slug\n            kurz\n            art\n          }\n        }\n      "], gql(_a)))(function (_a) {
            var children = _a.children, data = _a.data, rest = __rest(_a, ["children", "data"]);
            return (React.createElement("div", null, (data.items || []).map(function (item) {
                return (React.createElement(DataProvider, { item: item, key: item.id },
                    React.createElement(WrappedComponent, __assign({}, rest), children)));
            })));
        });
        var _a;
    },
});
var HashtaxExample = (function (_super) {
    __extends(HashtaxExample, _super);
    function HashtaxExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { value: value };
        _this.onChange = function (_a) {
            var target = _a.target;
            return _this.setState({ value: target.value });
        };
        return _this;
    }
    HashtaxExample.prototype.render = function () {
        var value = this.state.value;
        return (React.createElement("div", { style: { display: 'flex' } },
            React.createElement("textarea", { style: { flex: '1 1 0%', padding: 20 }, value: value, onChange: this.onChange }),
            React.createElement(Hashtax, { throttle: 500, style: { flex: '1 1 0%', padding: 20 }, value: value, name: "Hallo", link: "Tadas", obj: { 1: 123, 2: 234 } })));
    };
    return HashtaxExample;
}(Component));
export default HashtaxExample;
//# sourceMappingURL=index.js.map