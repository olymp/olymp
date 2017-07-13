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
import PropTypes from 'prop-types';
import Thumb from './thumb';
import { createComponent } from 'olymp-fela';
var Thumbs = createComponent(function (_a) {
    var justifyContent = _a.justifyContent;
    return ({
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: justifyContent || 'space-between',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '.5rem',
    });
}, 'div', function (_a) {
    var justifyContent = _a.justifyContent, p = __rest(_a, ["justifyContent"]);
    return Object.keys(p);
});
export var MediaList = function (_a) {
    var items = _a.items, itemHeight = _a.itemHeight, selected = _a.selected, onClick = _a.onClick, onRemove = _a.onRemove, rest = __rest(_a, ["items", "itemHeight", "selected", "onClick", "onRemove"]);
    return (React.createElement(Thumbs, __assign({}, rest), (items || [])
        .map(function (item, index) {
        return (React.createElement(Thumb, { item: item, onClick: function (e) { return onClick(item.id, index, e); }, onRemove: function () { return onRemove(item.id); }, isActive: selected.findIndex(function (_a) {
                var id = _a.id;
                return id === item.id;
            }) >= 0, height: itemHeight, key: item.id }));
    })));
};
MediaList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    itemHeight: PropTypes.number,
    selected: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        crop: PropTypes.arrayOf(PropTypes.number),
    })),
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
};
MediaList.defaultProps = {
    items: [],
    itemHeight: 80,
    selected: [],
    onClick: function () { },
    onRemove: function () { },
};
export default MediaList;
//# sourceMappingURL=gallery.js.map