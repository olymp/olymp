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
import { Link } from 'olymp-utils';
import { createComponent } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import moment from 'moment';
import { Panel, Item } from '../../components';
var Img = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        float: 'right',
        marginLeft: theme.space3,
        marginBottom: theme.space2,
    });
}, function (p) { return React.createElement(Image, __assign({}, p)); }, function (p) { return Object.keys(p); });
var Text = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        display: '-webkit-box',
        marginY: theme.space2,
        lineHeight: 1.4,
        fontSize: 16,
        WebkitLineClamp: 3,
        maxHeight: 1.4 * 16 * 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    });
}, 'div', function (p) { return Object.keys(p); });
var ListItem = (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItem.prototype.render = function () {
        var _a = this.props, id = _a.id, bild = _a.bild, org = _a.org, person = _a.person, art = _a.art, name = _a.name, slug = _a.slug, description = _a.description, date = _a.date, color = _a.color, path = _a.path;
        return (React.createElement(Item, { color: color, top: 0, bottom: "1.5rem", key: id },
            React.createElement("h3", null,
                React.createElement(Link, { to: { pathname: "/" + path + (slug || '/') } }, name)),
            React.createElement("h5", null,
                art || 'ARTIKEL',
                ", ",
                moment(date).format('DD. MMMM YYYY, HH:mm'),
                " Uhr,",
                ' ',
                (person || {}).name || 'Redaktion',
                "/",
                React.createElement(Link, { to: (org || {}).slug || '/' }, (org || {}).name || 'GZK')),
            description &&
                React.createElement("div", null,
                    React.createElement(Text, null, description),
                    slug &&
                        React.createElement(Link, { to: { pathname: "/" + path + slug } }, "Weiterlesen..."))));
    };
    return ListItem;
}(Component));
export default function (_a) {
    var items = _a.items, title = _a.title, accent = _a.accent, _b = _a.size, size = _b === void 0 ? 6 : _b, path = _a.path, isLoading = _a.isLoading;
    return (React.createElement(Panel, { medium: size, title: React.createElement(Link, { to: { pathname: "/" + path + "/" } }, title), accent: accent }, items
        .slice(0, 3)
        .map(function (item) {
        return (React.createElement(ListItem, __assign({}, item, { color: accent, path: path, key: item.id, isLoading: isLoading })));
    })));
};
//# sourceMappingURL=list.js.map