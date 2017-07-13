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
import { Button, notification } from 'antd';
import { Sidebar, Placeholder } from 'olymp-ui';
import { isEqual } from 'lodash';
import { mutateFile } from '../gql';
import Detail from './detail';
import { Gallery } from '../components';
import { LightboxGallery } from '../lightbox';
import { createComponent } from 'olymp-fela';
var StyledGallery = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        maxHeight: 250,
        overflow: 'auto',
        padding: '.5rem 0',
        borderTop: '1px solid #eee',
    });
}, Gallery, function (p) { return Object.keys(p); });
var SelectionSidebar = (function (_super) {
    __extends(SelectionSidebar, _super);
    function SelectionSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            items: [],
            source: false,
            tags: false,
        };
        _this.componentWillReceiveProps = function (props) {
            var _a = _this.state, stateItems = _a.items, source = _a.source, tags = _a.tags;
            var propItems = props.items;
            var items = propItems.map(function (propItem) {
                var stateItem = stateItems.find(function (item) { return item.id === propItem.id; });
                return (stateItem || __assign({}, propItem, { source: source && stateItems[0] ? stateItems[0].source : propItem.source, tags: tags && stateItems[0] ? stateItems[0].tags : propItem.tags }));
            });
            _this.setState({ items: items });
        };
        _this.patch = function (item, changes) {
            var newItem = __assign({}, item);
            Object.keys(changes).forEach(function (key) { return (newItem[key] = changes[key]); });
            return newItem;
        };
        _this.patchItem = function (id, changes) {
            var items = _this.state.items.map(function (item) {
                if (item.id === id) {
                    return _this.patch(item, changes);
                }
                return item;
            });
            _this.setState({ items: items });
        };
        _this.patchItems = function (type, val) {
            var items = _this.state.items.map(function (item) {
                return _this.patch(item, (_a = {}, _a[type] = val, _a));
                var _a;
            });
            _this.setState((_a = { items: items }, _a[type] = !_this.state[type], _a));
            var _a;
        };
        _this.notification = function (key, fn) {
            notification.open({
                message: 'Änderungen verwerfen?',
                description: 'Wollen Sie wirlich die nicht gespeicherten Änderungen verwerfen?',
                btn: (React.createElement("div", null,
                    React.createElement(Button, { size: "small", onClick: function () { return notification.close(key); } }, "Abbrechen"),
                    "\u00A0",
                    React.createElement(Button, { type: "primary", size: "small", onClick: function () {
                            fn();
                            notification.close(key);
                        } }, "Verwerfen"))),
                key: key,
                onClose: notification.close(key),
                duration: 0,
            });
        };
        _this.isEqual = function (obj1, obj2) {
            var nulize = function (obj) {
                var clone = {};
                Object.keys(obj).forEach(function (key) {
                    if (obj[key]) {
                        clone[key] = obj[key];
                    }
                    else {
                        clone[key] = null;
                    }
                });
                return clone;
            };
            return isEqual(nulize(obj1), nulize(obj2));
        };
        _this.onSave = function () {
            var items = _this.state.items;
            var save = _this.props.save;
            items.forEach(function (item) { return save(item); });
        };
        _this.onRemove = function (id) {
            var _a = _this.props, onRemove = _a.onRemove, propItems = _a.items;
            var stateItems = _this.state.items;
            var propItem = propItems.find(function (item) { return item.id === id; });
            var stateItem = stateItems.find(function (item) { return item.id === id; });
            if (_this.isEqual(propItem, stateItem)) {
                onRemove(id);
            }
            else {
                _this.notification("open" + Date.now(), function () { return onClick(id); });
            }
        };
        _this.onCancel = function () {
            var _a = _this.props, onCancel = _a.onCancel, propItems = _a.items;
            var stateItems = _this.state.items;
            var changes = false;
            stateItems.forEach(function (stateItem) {
                var propItem = propItems.find(function (item) { return item.id === stateItem.id; });
                if (!_this.isEqual(propItem, stateItem)) {
                    changes = true;
                }
            });
            if (changes) {
                _this.notification("open" + Date.now(), onCancel);
            }
            else {
                onCancel();
            }
        };
        _this.render = function () {
            var _a = _this.props, activeItem = _a.activeItem, onClick = _a.onClick, onSelect = _a.onSelect;
            var _b = _this.state, items = _b.items, source = _b.source, tags = _b.tags;
            var item = __assign({}, items.find(function (item) { return item.id === activeItem.id; }), { crop: activeItem.crop });
            return (React.createElement(LightboxGallery, null,
                React.createElement(Sidebar, { right: true, header: items.length > 1
                        ? React.createElement(StyledGallery, { items: items, itemHeight: 60, selected: [activeItem], onClick: function (id, index) { return onClick(index); }, onRemove: _this.onRemove, justifyContent: "space-around" })
                        : null, footer: React.createElement("div", null,
                        !onSelect
                            ? React.createElement(Button, { onClick: _this.onSave, type: "primary", disabled: !items.length }, items.length > 1 ? 'Alle speichern' : 'Speichern')
                            : React.createElement(Button, { onClick: function () { return onSelect(items); }, type: "primary", disabled: !items.length }, "\u00DCbernehmen"),
                        React.createElement(Button, { onClick: _this.onCancel, disabled: !items.length }, "Abbrechen")), isOpen: true, title: !onSelect ? 'Bearbeiten' : 'Auswählen', subtitle: !onSelect
                        ? 'Ausgewählte Medien editieren'
                        : 'Medien zur Weiterverarbeitung auswählen', padding: "1rem" }, items.length
                    ? React.createElement(Detail, { item: item, multi: items.length > 1, patchItem: function (changes) { return _this.patchItem(item.id, changes); }, patchItems: _this.patchItems, source: source, tags: tags, editable: !onSelect })
                    : React.createElement(Placeholder, null, "Dateien ausw\u00E4hlen"))));
        };
        return _this;
    }
    SelectionSidebar = __decorate([
        mutateFile
    ], SelectionSidebar);
    return SelectionSidebar;
}(Component));
SelectionSidebar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    activeItem: PropTypes.shape({
        id: PropTypes.string,
        crop: PropTypes.arrayOf(PropTypes.number),
    }),
    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    onRemove: PropTypes.func,
    onCancel: PropTypes.func,
};
SelectionSidebar.defaultProps = {
    items: [],
    activeItem: {},
    onClick: function () { },
    onSelect: undefined,
    onRemove: function () { },
    onCancel: function () { },
};
export default SelectionSidebar;
//# sourceMappingURL=selection.js.map