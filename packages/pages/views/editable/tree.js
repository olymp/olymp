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
import PropTypes from 'prop-types';
import { Link, withRouter } from 'olymp-router';
import { createComponent } from 'olymp-fela';
import { Tree } from 'olymp-ui';
import { Icon, Tooltip } from 'antd';
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
                return React.createElement(Badge, { type: "arrow-up", tooltip: "Austeigend sortiert" });
            }
            else if (item.sorting && item.sorting[0] === '-') {
                return React.createElement(Badge, { type: "arrow-down", tooltip: "Absteigend sortiert" });
            }
            else if (item.slug === '/') {
                return React.createElement(Badge, { type: "home", tooltip: "Startseite" });
            }
            else if (item.type === 'ALIAS') {
                return React.createElement(Badge, { type: "fork", tooltip: "Alias" });
            }
            else if (item.type === 'LINK') {
                return React.createElement(Badge, { type: "link", tooltip: "Link" });
            }
            else if (item.type === 'PLACEHOLDER') {
                return React.createElement(Badge, { type: "file", tooltip: "Platzhalter" });
            }
            else if (item.type === 'PAGE') {
                return React.createElement(Badge, { type: "file-text", tooltip: "Seite" });
            }
            else if (item.type === 'MENU') {
                return React.createElement(Badge, { type: "bars", tooltip: "Menü" });
            }
            return null;
        };
        _this.loop = function (data, parent) {
            return data.map(function (item) {
                var query = _this.props.query;
                var children = item.children && item.children.length
                    ? _this.loop(item.children, item)
                    : undefined;
                return (React.createElement(Tree.Node, { key: item.id || item.pathname, item: item, parent: parent, title: React.createElement(Title, { disabled: item.state === 'DRAFT' },
                        React.createElement(Link, { to: {
                                pathname: item.pathname,
                                query: __assign({}, query, { '@page': item.pageId || item.id, parent: undefined }),
                            } }, item.name || 'Kein Name'),
                        React.createElement(Button, { to: { query: __assign({}, query, { '@page': 'new', parent: item.id }) }, type: "plus", showOnHover: true }),
                        item.bindingId &&
                            item.binding &&
                            item.binding.type &&
                            React.createElement(Button, { to: {
                                    query: __assign({}, query, (_a = { '@page': undefined, parent: undefined }, _a["@" + lowerCase(item.binding.type)] = item.bindingId, _a)),
                                }, type: "api" }),
                        _this.getNodeIcon(item)) }, children));
                var _a;
            });
        };
        return _this;
    }
    Pages.prototype.render = function () {
        var _a = this.props, items = _a.items, selected = _a.selected, pathname = _a.pathname, query = _a.query;
        return (React.createElement(Tree, { selectedKeys: selected, draggable: true, className: "draggable-tree", defaultExpandedKeys: items
                .filter(function (x, i) { return i === 0; })
                .map(function (item) { return item.id || item.pathname; }), onDragEnter: this.onDragEnter, onDrop: this.onDrop }, this.loop(items)));
    };
    Pages = __decorate([
        withRouter,
        reorderPage,
        movePage
    ], Pages);
    return Pages;
}(Component));
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
        onHover: {},
    });
}, function (_a) {
    var className = _a.className, to = _a.to, type = _a.type;
    return React.createElement(Link, { to: to, className: className },
        React.createElement(Icon, { type: type }));
}, function (p) { return Object.keys(p); });
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
    return React.createElement(Tooltip, { title: tooltip },
        React.createElement("a", { href: "javascript:;", className: className },
            React.createElement(Icon, { type: type })));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BhZ2VzL3ZpZXdzL2VkaXRhYmxlL3RyZWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3pDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUtsRDtJQUFvQix5QkFBUztJQUg3QjtRQUFBLHFFQTBKQztRQXRKQyxZQUFNLEdBQUcsVUFBQSxJQUFJO1lBQ0wsSUFBQSxnQkFBOEIsRUFBNUIsb0JBQU8sRUFBRSxjQUFJLENBQWdCO1lBQ3JDLElBQU0sTUFBTSxHQUNWLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtrQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtrQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7WUFHdEMsSUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMs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SSxJQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLFNBQVM7UUFDaEMsb0JBQUMsSUFBSSxJQUFDLElBQUksRUFBRSxJQUFJLEdBQUksQ0FDZjtBQUZQLENBRU8sRUFDVCxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUNwQixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUMzQixVQUFDLEVBQVM7UUFBUCxnQkFBSztJQUFPLE9BQUEsQ0FBQztRQUNkLFlBQVksRUFBRSxLQUFLO1FBQ25CLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLFFBQVE7UUFDbkIsVUFBVSxFQUFFLENBQUM7UUFDYixLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsTUFBTSxFQUFFLGNBQWM7U0FDdkI7S0FDRixDQUFDO0FBVGEsQ0FTYixFQUNGLFVBQUMsRUFBNEI7UUFBMUIsd0JBQVMsRUFBRSxjQUFJLEVBQUUsb0JBQU87SUFDekIsT0FBQSxvQkFBQyxPQUFPLElBQUMsS0FBSyxFQUFFLE9BQU87UUFDckIsMkJBQUcsSUFBSSxFQUFDLGNBQWMsRUFBQyxTQUFTLEVBQUUsU0FBUztZQUN6QyxvQkFBQyxJQUFJLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSSxDQUNsQixDQUNJO0FBSlYsQ0FJVSxFQUNaLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQ3BCLENBQUMiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvdmlld3MvZWRpdGFibGUvdHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluaywgd2l0aFJvdXRlciB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IFRyZWUgfSBmcm9tICdvbHltcC11aSc7XG5pbXBvcnQgeyBJY29uLCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBsb3dlckNhc2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgcmVvcmRlclBhZ2UsIG1vdmVQYWdlIH0gZnJvbSAnLi4vLi4vZ3FsJztcblxuQHdpdGhSb3V0ZXJcbkByZW9yZGVyUGFnZVxuQG1vdmVQYWdlXG5jbGFzcyBQYWdlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uRHJvcCA9IGluZm8gPT4ge1xuICAgIGNvbnN0IHsgcmVvcmRlciwgbW92ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwYXJlbnQgPVxuICAgICAgaW5mby5kcm9wVG9HYXAgJiYgaW5mby5ub2RlLnByb3BzLnBhcmVudFxuICAgICAgICA/IGluZm8ubm9kZS5wcm9wcy5wYXJlbnRcbiAgICAgICAgOiBpbmZvLm5vZGUucHJvcHMuaXRlbTtcbiAgICBjb25zdCBwYWdlID0gaW5mby5kcmFnTm9kZS5wcm9wcy5pdGVtO1xuICAgIGNvbnN0IHBhZ2VJZCA9IHBhZ2UucGFnZUlkIHx8IHBhZ2UuaWQ7IC8vIGdldCByZWFsIHBhZ2VJZCBpbiBjYXNlIG9mIGJpbmRpbmdcblxuICAgIC8vIEdldCBhbGwgSURzIG9mIGNoaWxkcmVuIGluIG9yZGVyXG4gICAgY29uc3QgY2hpbGRJZHMgPSAocGFyZW50LmNoaWxkcmVuIHx8IFtdKVxuICAgICAgLm1hcChjaGlsZCA9PiBjaGlsZC5pZClcbiAgICAgIC5maWx0ZXIoeCA9PiB4ICE9PSBwYWdlLmlkKTtcbiAgICBjaGlsZElkcy5zcGxpY2UoaW5mby5kcm9wUG9zaXRpb24sIDAsIHBhZ2UuaWQpO1xuXG4gICAgLy8gQ2hlY2sgaWYgbmV3IHBhcmVudCBpcyBpdHNlbGY/P1xuICAgIGlmIChwYXJlbnQuaWQgPT09IHBhZ2VJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFyZW50LmlkICE9PSBwYWdlLnBhcmVudElkKSB7XG4gICAgICAvLyBwYXJlbnQgY2hhbmdlZFxuICAgICAgbW92ZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlkOiBwYWdlSWQsXG4gICAgICAgICAgcGFyZW50SWQ6IHBhcmVudC5pZCxcbiAgICAgICAgICBzb3J0aW5nOiBjaGlsZElkcyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBqdXN0IG1vdmVkIGluc2lkZSBleGlzdGluZyBwYXJlbnRcbiAgICAgIC8vIERpc2FsbG93IHNvcnQgaWYgcGFyZW50IGhhcyBmaXhlZCBzb3J0aW5nXG4gICAgICBpZiAocGFyZW50LnNvcnRpbmcgJiYgWycrJywgJy0nXS5pbmNsdWRlcyhwYXJlbnQuc29ydGluZ1swXSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVvcmRlcih7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlkOiBwYXJlbnQuaWQsXG4gICAgICAgICAgc29ydGluZzogY2hpbGRJZHMsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0UGFyZW50ID0gKHRyZWUsIGxldmVscykgPT4ge1xuICAgIGNvbnN0IGxldmVsID0gbGV2ZWxzWzBdO1xuICAgIGNvbnN0IHBhcmVudCA9IHRyZWVbbGV2ZWxdO1xuICAgIGxldmVscy5zaGlmdCgpO1xuXG4gICAgaWYgKGxldmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7IGlkOiBudWxsLCBjaGlsZHJlbjogW10gfTsgLy8gdG9wLWxldmVsXG4gICAgfSBlbHNlIGlmICghcGFyZW50LmNoaWxkcmVuLmxlbmd0aCB8fCAhbGV2ZWxzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFyZW50KHBhcmVudC5jaGlsZHJlbiwgbGV2ZWxzKTtcbiAgfTtcblxuICBnZXROb2RlSWNvbiA9IGl0ZW0gPT4ge1xuICAgIGlmIChpdGVtLnNvcnRpbmcgJiYgaXRlbS5zb3J0aW5nWzBdID09PSAnKycpIHtcbiAgICAgIHJldHVybiA8QmFkZ2UgdHlwZT1cImFycm93LXVwXCIgdG9vbHRpcD1cIkF1c3RlaWdlbmQgc29ydGllcnRcIiAvPjtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uc29ydGluZyAmJiBpdGVtLnNvcnRpbmdbMF0gPT09ICctJykge1xuICAgICAgcmV0dXJuIDxCYWRnZSB0eXBlPVwiYXJyb3ctZG93blwiIHRvb2x0aXA9XCJBYnN0ZWlnZW5kIHNvcnRpZXJ0XCIgLz47XG4gICAgfSBlbHNlIGlmIChpdGVtLnNsdWcgPT09ICcvJykge1xuICAgICAgcmV0dXJuIDxCYWRnZSB0eXBlPVwiaG9tZVwiIHRvb2x0aXA9XCJTdGFydHNlaXRlXCIgLz47XG4gICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdBTElBUycpIHtcbiAgICAgIHJldHVybiA8QmFkZ2UgdHlwZT1cImZvcmtcIiB0b29sdGlwPVwiQWxpYXNcIiAvPjtcbiAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ0xJTksnKSB7XG4gICAgICByZXR1cm4gPEJhZGdlIHR5cGU9XCJsaW5rXCIgdG9vbHRpcD1cIkxpbmtcIiAvPjtcbiAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ1BMQUNFSE9MREVSJykge1xuICAgICAgcmV0dXJuIDxCYWRnZSB0eXBlPVwiZmlsZVwiIHRvb2x0aXA9XCJQbGF0emhhbHRlclwiIC8+O1xuICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnUEFHRScpIHtcbiAgICAgIHJldHVybiA8QmFkZ2UgdHlwZT1cImZpbGUtdGV4dFwiIHRvb2x0aXA9XCJTZWl0ZVwiIC8+O1xuICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnTUVOVScpIHtcbiAgICAgIHJldHVybiA8QmFkZ2UgdHlwZT1cImJhcnNcIiB0b29sdGlwPVwiTWVuw7xcIiAvPjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgbG9vcCA9IChkYXRhLCBwYXJlbnQpID0+XG4gICAgZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgY2hpbGRyZW4gPVxuICAgICAgICBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgICAgPyB0aGlzLmxvb3AoaXRlbS5jaGlsZHJlbiwgaXRlbSlcbiAgICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRyZWUuTm9kZVxuICAgICAgICAgIGtleT17aXRlbS5pZCB8fCBpdGVtLnBhdGhuYW1lfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgcGFyZW50PXtwYXJlbnR9XG4gICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgPFRpdGxlIGRpc2FibGVkPXtpdGVtLnN0YXRlID09PSAnRFJBRlQnfT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGl0ZW0ucGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgJ0BwYWdlJzogaXRlbS5wYWdlSWQgfHwgaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lIHx8ICdLZWluIE5hbWUnfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0bz17eyBxdWVyeTogeyAuLi5xdWVyeSwgJ0BwYWdlJzogJ25ldycsIHBhcmVudDogaXRlbS5pZCB9IH19XG4gICAgICAgICAgICAgICAgdHlwZT1cInBsdXNcIlxuICAgICAgICAgICAgICAgIHNob3dPbkhvdmVyXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtpdGVtLmJpbmRpbmdJZCAmJlxuICAgICAgICAgICAgICAgIGl0ZW0uYmluZGluZyAmJlxuICAgICAgICAgICAgICAgIGl0ZW0uYmluZGluZy50eXBlICYmXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAnQHBhZ2UnOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgW2BAJHtsb3dlckNhc2UoaXRlbS5iaW5kaW5nLnR5cGUpfWBdOiBpdGVtLmJpbmRpbmdJZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYXBpXCJcbiAgICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICAgICAge3RoaXMuZ2V0Tm9kZUljb24oaXRlbSl9XG4gICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UcmVlLk5vZGU+XG4gICAgICApO1xuICAgIH0pO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW1zLCBzZWxlY3RlZCwgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmVlXG4gICAgICAgIHNlbGVjdGVkS2V5cz17c2VsZWN0ZWR9XG4gICAgICAgIGRyYWdnYWJsZVxuICAgICAgICBjbGFzc05hbWU9XCJkcmFnZ2FibGUtdHJlZVwiXG4gICAgICAgIGRlZmF1bHRFeHBhbmRlZEtleXM9e2l0ZW1zXG4gICAgICAgICAgLmZpbHRlcigoeCwgaSkgPT4gaSA9PT0gMClcbiAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5pZCB8fCBpdGVtLnBhdGhuYW1lKX1cbiAgICAgICAgb25EcmFnRW50ZXI9e3RoaXMub25EcmFnRW50ZXJ9XG4gICAgICAgIG9uRHJvcD17dGhpcy5vbkRyb3B9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLmxvb3AoaXRlbXMpfVxuICAgICAgPC9UcmVlPlxuICAgICk7XG4gIH1cbn1cblBhZ2VzLnByb3BUeXBlcyA9IHtcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG59O1xuUGFnZXMuZGVmYXVsdFByb3BzID0ge1xuICBpdGVtczogW10sXG4gIHNlbGVjdGVkOiBbXSxcbn07XG5leHBvcnQgZGVmYXVsdCBQYWdlcztcblxuY29uc3QgVGl0bGUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgb25Ib3Zlcjoge1xuICAgICAgJz4gYSc6IHtcbiAgICAgICAgZGlzcGxheTogJ2luaXRpYWwnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgVHJlZS5UaXRsZSxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgQnV0dG9uID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSwgc2hvd09uSG92ZXIgfSkgPT4gKHtcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHNpemU6IDIzLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbWFyZ2luTGVmdDogMyxcbiAgICBkaXNwbGF5OiBzaG93T25Ib3ZlciAmJiAnbm9uZScsXG4gICAgJz4gaSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgIG1hcmdpbjogJzAgIWltcG9ydGFudCcsXG4gICAgfSxcbiAgICBvbkhvdmVyOiB7XG4gICAgICAvKiBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLmNvbG9yfSAhaW1wb3J0YW50YCxcbiAgICAgICc+IGknOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5saWdodCxcbiAgICAgIH0sICovXG4gICAgfSxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgdG8sIHR5cGUgfSkgPT5cbiAgICA8TGluayB0bz17dG99IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxJY29uIHR5cGU9e3R5cGV9IC8+XG4gICAgPC9MaW5rPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgQmFkZ2UgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBzaXplOiAyMyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG1hcmdpbkxlZnQ6IDMsXG4gICAgJz4gaSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrMyxcbiAgICAgIG1hcmdpbjogJzAgIWltcG9ydGFudCcsXG4gICAgfSxcbiAgfSksXG4gICh7IGNsYXNzTmFtZSwgdHlwZSwgdG9vbHRpcCB9KSA9PlxuICAgIDxUb29sdGlwIHRpdGxlPXt0b29sdGlwfT5cbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxJY29uIHR5cGU9e3R5cGV9IC8+XG4gICAgICA8L2E+XG4gICAgPC9Ub29sdGlwPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcbiJdfQ==
