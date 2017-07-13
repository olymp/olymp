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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'olymp-utils';
import { createComponent } from 'olymp-fela';
import { Tree } from 'olymp-ui';
import { lowerCase } from 'lodash';
import { reorderPage, movePage } from '../../gql';
var Pages = (function (_super) {
    __extends(Pages, _super);
    function Pages() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDrop = function (info) {
            var _a = _this.props, reorder = _a.reorder, move = _a.move;
            var parent = info.dropToGap && info.node.props.parent
                ? info.node.props.parent
                : info.node.props.item;
            var page = info.dragNode.props.item;
            var pageId = page.pageId || page.id;
            var childIds = (parent.children || [])
                .map(function (child) { return child.id; })
                .filter(function (x) { return x !== page.id; });
            childIds.splice(info.dropPosition, 0, page.id);
            if (parent.id === pageId) {
                return;
            }
            if (parent.id !== page.parentId) {
                move({
                    variables: {
                        id: pageId,
                        parentId: parent.id,
                        sorting: childIds,
                    },
                });
            }
            else {
                if (parent.sorting && ['+', '-'].includes(parent.sorting[0])) {
                    return;
                }
                reorder({
                    variables: {
                        id: parent.id,
                        sorting: childIds,
                    },
                });
            }
        };
        _this.getParent = function (tree, levels) {
            var level = levels[0];
            var parent = tree[level];
            levels.shift();
            if (level === undefined) {
                return { id: null, children: [] };
            }
            else if (!parent.children.length || !levels.length) {
                return parent;
            }
            return _this.getParent(parent.children, levels);
        };
        _this.getNodeIcon = function (item) {
            if (item.sorting && item.sorting[0] === '+') {
                return type;
                "arrow-up";
                tooltip = "Austeigend sortiert" /  > ;
            }
            else if (item.sorting && item.sorting[0] === '-') {
                return type;
                "arrow-down";
                tooltip = "Absteigend sortiert" /  > ;
            }
            else if (item.slug === '/') {
                return type;
                "home";
                tooltip = "Startseite" /  > ;
            }
            else if (item.type === 'ALIAS') {
                return type;
                "fork";
                tooltip = "Alias" /  > ;
            }
            else if (item.type === 'LINK') {
                return type;
                "link";
                tooltip = "Link" /  > ;
            }
            else if (item.type === 'PLACEHOLDER') {
                return type;
                "file";
                tooltip = "Platzhalter" /  > ;
            }
            else if (item.type === 'PAGE') {
                return type;
                "file-text";
                tooltip = "Seite" /  > ;
            }
            else if (item.type === 'MENU') {
                return type;
                "bars";
                tooltip = "Menü" /  > ;
            }
            return null;
        };
        _this.loop = function (data, parent) {
            return data.map.apply(data, [function (item) {
                    var query = _this.props.query;
                    var children = item.children && item.children.length
                        ? _this.loop(item.children, item)
                        : undefined;
                    return key = { item: .id || item.pathname };
                    item = { item: item };
                    parent = { parent: parent };
                    title = {}
                        < Title;
                    disabled = { item: .state === 'DRAFT' } >
                        to;
                    {
                        {
                            pathname: item.pathname,
                                query;
                            {
                            }
                        }
                    }
                }].concat(query, ['@page', item.pageId || item.id,
                parent, undefined]));
        };
        return _this;
    }
    Pages = __decorate([
        withRouter,
        reorderPage,
        movePage
    ], Pages);
    return Pages;
}(Component));
    >
        { item: .name || 'Kein Name' }
    < /Link>
    < Button;
to = {};
{
    query: {
        query, '@page';
        'new', parent;
        item.id;
    }
}
type = "plus";
showOnHover
    /  >
    { item: .bindingId &&
            item.binding &&
            item.binding.type &&
            to };
{
    {
        query: {
            query,
                '@page';
            undefined,
                parent;
            undefined,
                ["@" + lowerCase(item.binding.type)];
            item.bindingId,
            ;
        }
    }
}
type = "api"
    /  > ;
{
    this.getNodeIcon(item);
}
/Title>;
    >
        { children: children }
    < /Tree.Node>;
;
;
render();
{
    var _a = this.props, items = _a.items, selected = _a.selected, pathname = _a.pathname, query = _a.query;
    return selectedKeys = { selected: selected };
    draggable;
    className = "draggable-tree";
    defaultExpandedKeys = { items: .filter(function (x, i) { return i === 0; }).map(function (item) { return item.id || item.pathname; }) };
    onDragEnter = { this: .onDragEnter };
    onDrop = { this: .onDrop }
        >
            { this: .loop(items) }
        < /Tree>;
    ;
}
Pages.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    selected: PropTypes.arrayOf(PropTypes.string),
};
Pages.defaultProps = {
    items: [],
    selected: [],
};
export default Pages;
var Title = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        onHover: {
            '> a': {
                display: 'initial',
            },
        },
    });
}, Tree.Title, function (p) { return Object.keys(p); });
var Button = createComponent(function (_a) {
    var theme = _a.theme, showOnHover = _a.showOnHover;
    return ({
        borderRadius: '50%',
        size: 23,
        textAlign: 'center',
        marginLeft: 3,
        display: showOnHover && 'none',
        '> i': {
            color: theme.color,
            margin: '0 !important',
        },
        onHover: {
            backgroundColor: theme.color,
            '> i': {
                color: theme.light,
            },
        },
    });
}, function (_a) {
    var className = _a.className, to = _a.to, type = _a.type;
    return to = { to: to };
}, className = { className: className } >
    type, { type: type } /  >
    /Link>),, function (p) { return Object.keys(p); });
var Badge = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        borderRadius: '50%',
        size: 23,
        textAlign: 'center',
        marginLeft: 3,
        '> i': {
            color: theme.dark3,
            margin: '0 !important',
        },
    });
}, function (_a) {
    var className = _a.className, type = _a.type, tooltip = _a.tooltip;
    return title = { tooltip: tooltip } >
        href;
}, "javascript:;", className = { className: className } >
    type, { type: type } /  >
    /a>
    < /Tooltip>),, function (p) { return Object.keys(p); });
//# sourceMappingURL=tree.js.map