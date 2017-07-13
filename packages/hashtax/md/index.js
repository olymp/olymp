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
import React from 'react';
import remark from 'remark';
import reactRenderer from './compiler';
import plugin from './container';
import { Link } from 'olymp-utils';
var defaultComponents = {
    text: function (_a) {
        var value = _a.value, props = __rest(_a, ["value"]);
        return React.createElement("span", __assign({}, props), value);
    },
    code: function (_a) {
        var value = _a.value, props = __rest(_a, ["value"]);
        return React.createElement("pre", __assign({}, props), value);
    },
    blockquote: function (props) { return React.createElement("blockquote", __assign({}, props)); },
    emphasis: function (props) { return React.createElement("em", __assign({}, props)); },
    strong: function (props) { return React.createElement("strong", __assign({}, props)); },
    paragraph: function (props) { return React.createElement("p", __assign({ style: { marginBottom: 10 } }, props)); },
    ul: function (props) { return React.createElement("ul", __assign({}, props)); },
    ol: function (props) { return React.createElement("ol", __assign({}, props)); },
    li: function (props) { return React.createElement("li", __assign({}, props)); },
    heading1: function (props) { return React.createElement("h1", __assign({ style: { marginBottom: 5, marginTop: 5 } }, props)); },
    heading2: function (props) { return React.createElement("h2", __assign({}, props)); },
    heading3: function (props) { return React.createElement("h3", __assign({}, props)); },
    heading4: function (props) { return React.createElement("h4", __assign({}, props)); },
    heading5: function (props) { return React.createElement("h5", __assign({}, props)); },
    heading6: function (props) { return React.createElement("h6", __assign({}, props)); },
    link: function (props) {
        if (props.href.indexOf('/') === 0) {
            return React.createElement(Link, { to: props.href });
        }
        return React.createElement("a", __assign({ target: "_blank", rel: "nofollow noreferrer" }, props));
    },
};
export default function (components) {
    var remarkReactComponents = __assign({}, defaultComponents, components);
    return function (_a) {
        var value = _a.value, props = __rest(_a, ["value"]);
        var instance = remark().use(plugin, { components: remarkReactComponents, props: props }).use(reactRenderer, {
            remarkReactComponents: remarkReactComponents,
        });
        return instance.processSync(value).contents;
    };
};
//# sourceMappingURL=index.js.map