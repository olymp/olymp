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
import PropTypes from 'prop-types';
import { Upload } from 'antd';
import { Sidebar, List } from 'olymp-ui';
import { Image } from '../components';
import { intersection, upperFirst, orderBy } from 'lodash';
var ListSidebar = (function (_super) {
    __extends(ListSidebar, _super);
    function ListSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getTags = function (items) {
            var search = _this.props.search;
            var tags = { 'Ohne Schlagworte': [] };
            items.forEach(function (item) {
                if (!item.tags.length) {
                    tags['Ohne Schlagworte'].push(item);
                }
                else {
                    item.tags.forEach(function (tag) {
                        if (!search ||
                            tag.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                            if (!tags[tag]) {
                                tags[tag] = [];
                            }
                            tags[tag].push(item);
                        }
                    });
                }
            });
            return tags;
        };
        _this.getDirectories = function () {
            var _a = _this.props, filter = _a.filter, onFilter = _a.onFilter;
            var items = _this.props.items.map(function (item) { return (__assign({}, item, { tags: !item.tags || !item.tags.length ? ['Ohne Schlagworte'] : item.tags })); });
            var tags = _this.getTags(items);
            return Object.keys(tags).map(function (tag) {
                var active = !!filter.find(function (x) { return x === tag; });
                var filteredTags = !active
                    ? filter.concat([tag]) : filter.filter(function (x) { return x !== tag; });
                var filteredItems = items.filter(function (item) {
                    return intersection(item.tags, filteredTags).length === filteredTags.length;
                });
                var countFilter = (_this.getTags(filteredItems)[tag] || []).length;
                var countAll = tags[tag].length;
                var disabled = !countFilter;
                var text = countAll + " Dateien";
                return {
                    active: active,
                    disabled: disabled,
                    onClick: function () { return onFilter(filteredTags, filteredItems); },
                    label: upperFirst(tag),
                    description: countFilter === countAll ? text : countFilter + " von " + text,
                    image: tags[tag][0],
                    countFilter: countFilter,
                    countAll: countAll,
                    key: tag,
                };
            });
        };
        _this.image = function (_a) {
            var image = _a.image;
            return React.createElement(Image, { value: image, width: 37, height: 37 });
        };
        return _this;
    }
    ListSidebar.prototype.render = function () {
        var _this = this;
        var _a = this.props, items = _a.items, upload = _a.upload, onClose = _a.onClose, search = _a.search, onSearch = _a.onSearch, onFilter = _a.onFilter, filter = _a.filter;
        var directories = orderBy(this.getDirectories(), ['active', 'disabled', 'countFilter', 'countAll', 'label'], ['desc', 'asc', 'desc', 'desc', 'asc']);
        return (React.createElement(Sidebar, { header: React.createElement(List.Filter, { placeholder: "Filter ...", onChange: onSearch, value: search }), leftButtons: onClose &&
                React.createElement(Sidebar.Button, { shape: "circle", onClick: onClose, icon: "close" }), rightButtons: React.createElement(Upload, __assign({}, upload),
                React.createElement(Sidebar.Button, { shape: "circle", icon: "plus" })), isOpen: true, padding: 0, title: "Mediathek", subtitle: "Medien sichten und verwalten" },
            directories.find(function (dir) { return dir.disabled; })
                ? React.createElement(List.Item, { label: "Zurück", icon: "left", onClick: function () { return onFilter(filter.slice(0, -1), items); } })
                : null,
            directories
                .filter(function (dir) { return !dir.active; })
                .map(function (dir) {
                return !dir.disabled
                    ? React.createElement(List.Item, __assign({}, dir, { image: _this.image(dir) }))
                    : null;
            })));
    };
    return ListSidebar;
}(Component));
ListSidebar.propTypes = {
    onClose: PropTypes.func,
    onSearch: PropTypes.func,
    onFilter: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.object),
    upload: PropTypes.object,
    search: PropTypes.string,
    filter: PropTypes.array,
};
ListSidebar.defaultProps = {
    onClose: null,
    onSearch: function () { },
    onFilter: function () { },
    items: [],
    upload: {},
    filter: [],
};
export default ListSidebar;
//# sourceMappingURL=list.js.map