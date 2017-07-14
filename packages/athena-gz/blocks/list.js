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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { graphql, gql, sortBy } from 'olymp-utils';
import { withRouter } from 'olymp-router';
import { createComponent, Grid } from 'olymp-fela';
import { H2 } from '../components';
import { Link } from 'olymp-router';
var Item = createComponent(function (_a) {
    var theme = _a.theme, color = _a.color, hovered = _a.hovered;
    return ({
        position: 'relative',
        paddingX: theme.space1,
        fontSize: '94%',
        onBefore: {
            color: (color || theme.color) + " !important",
        },
        '> a': {
            clearfix: true,
            color: hovered ? color || theme.color : theme.dark2,
            onHover: {
                color: color || theme.color,
            },
            '> span': {
                float: 'left',
                whiteSpace: 'nowrap',
                overflowX: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '50%',
            },
            '> span:last-child': {
                opacity: 0.85,
                fontSize: '90%',
                float: 'right',
                marginRight: theme.space4,
                whiteSpace: 'nowrap',
                overflowX: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '38%',
            },
        },
    });
}, function (_a) {
    var className = _a.className, slug = _a.slug, name = _a.name, kurz = _a.kurz, org = _a.org, telefon = _a.telefon, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave;
    return React.createElement("li", { className: className },
        React.createElement(Link, { to: slug || '/', onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
            React.createElement("span", null, kurz || name),
            React.createElement("span", null, org || telefon)));
}, function (p) { return Object.keys(p); });
var VerzeichnisBlock = (function (_super) {
    __extends(VerzeichnisBlock, _super);
    function VerzeichnisBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hover: undefined };
        _this.onMouseLeave = function () {
            _this.setState({ hover: null });
        };
        _this.onMouseOver = function (item) { return function () {
            _this.setState({ hover: item.orgId || item.id });
        }; };
        _this.renderSection = function (title, items) {
            if (items === void 0) { items = []; }
            return React.createElement(Grid.Item, { medium: 1 },
                React.createElement(H2, null, title),
                React.createElement("ul", null, items.map(function (item) {
                    return React.createElement(Item, __assign({}, item, { onMouseEnter: _this.onMouseOver(item), onMouseLeave: _this.onMouseLeave, hovered: _this.state.hover === (item.orgId || item.id) }));
                })));
        };
        return _this;
    }
    VerzeichnisBlock.prototype.render = function () {
        var _a = this.props, attributes = _a.attributes, children = _a.children, data = _a.data;
        var persons = [];
        var spezial = [];
        if (!data.items || !data.items.length) {
            return React.createElement("div", null);
        }
        data.items.forEach(function (item) {
            if (item.persons) {
                item.persons.forEach(function (person) {
                    return persons.push(__assign({}, person, { orgId: item.id, color: item.color, org: item.kurz || item.name, slug: item.slug }));
                });
            }
            if (item.fachrichtungen) {
                item.fachrichtungen.forEach(function (leistung) {
                    return spezial.push({
                        id: leistung,
                        name: leistung,
                        orgId: item.id,
                        color: item.color,
                        org: item.kurz || item.name,
                        slug: item.slug,
                    });
                });
            }
        });
        return (React.createElement(Grid, __assign({ size: 3 }, attributes),
            this.renderSection('Einrichtungen', sortBy(data.items, function (x) { return x.name || x.title; })),
            this.renderSection('Spezialitäten', sortBy(spezial, 'name')),
            this.renderSection('Ärzte & Dienstleister', sortBy(persons, 'name')),
            children));
    };
    VerzeichnisBlock = __decorate([
        withRouter,
        graphql((_a = ["\n    query orgList {\n      items: orgList(query: { state: { eq: PUBLISHED } }) {\n        id\n        slug\n        image {\n          id\n          url\n        }\n        telefon\n        color\n        name\n        title\n        fachrichtungen\n        persons {\n          id\n          name\n        }\n      }\n    }\n  "], _a.raw = ["\n    query orgList {\n      items: orgList(query: { state: { eq: PUBLISHED } }) {\n        id\n        slug\n        image {\n          id\n          url\n        }\n        telefon\n        color\n        name\n        title\n        fachrichtungen\n        persons {\n          id\n          name\n        }\n      }\n    }\n  "], gql(_a)), {
            options: function () { return ({}); },
        })
    ], VerzeichnisBlock);
    return VerzeichnisBlock;
}(Component));
export default {
    key: 'GZK.Collections.VerzeichnisBlock',
    label: 'Verzeichnis',
    category: 'Collections',
    editable: false,
    component: VerzeichnisBlock,
};
var _a;
//# sourceMappingURL=list.js.map