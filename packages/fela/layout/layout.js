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
import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
var Layout = createComponent(function (_a) {
    var fullHeight = _a.fullHeight, affix = _a.affix;
    return ({
        ie10: {
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
        },
        height: fullHeight || affix ? '100vh' : '100%',
        minHeight: '100%',
        maxHeight: affix && '100vh',
    });
}, function (_a) {
    var children = _a.children, affix = _a.affix, rest = __rest(_a, ["children", "affix"]);
    return React.createElement("div", __assign({}, rest), Children.map(children, function (child) { return child && cloneElement(child, { affix: affix }); }));
}, function (_a) {
    var fullHeight = _a.fullHeight, p = __rest(_a, ["fullHeight"]);
    return Object.keys(p);
});
Layout.displayName = 'Layout';
Layout.propTypes = {
    fullHeight: PropTypes.bool,
    affix: PropTypes.bool,
};
Layout.defaultProps = {
    fullHeight: false,
    affix: false,
};
export default Layout;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGF5b3V0L2xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdEQsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFN0MsSUFBTSxNQUFNLEdBQUcsZUFBZSxDQUM1QixVQUFDLEVBQXFCO1FBQW5CLDBCQUFVLEVBQUUsZ0JBQUs7SUFBTyxPQUFBLENBQUM7UUFDMUIsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLE1BQU07WUFDZixVQUFVLEVBQUUsU0FBUztZQUNyQixhQUFhLEVBQUUsUUFBUTtTQUN4QjtRQUNELE1BQU0sRUFBRSxVQUFVLElBQUksS0FBSyxHQUFHLE9BQU8sR0FBRyxNQUFNO1FBQzlDLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFNBQVMsRUFBRSxLQUFLLElBQUksT0FBTztLQUM1QixDQUFDO0FBVHlCLENBU3pCLEVBQ0YsVUFBQyxFQUE0QjtJQUExQixJQUFBLHNCQUFRLEVBQUUsZ0JBQUssRUFBRSx3Q0FBTztJQUN6QixNQUFNLENBQU4sd0NBQVMsSUFBSSxHQUNWLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FDckUsQ0FBQTtDQUFBLEVBQ1IsVUFBQyxFQUFvQjtJQUFsQixJQUFBLDBCQUFVLEVBQUUsOEJBQUk7SUFBTyxNQUFNLENBQU4sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUFBLENBQ3pDLENBQUM7QUFDRixNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUM5QixNQUFNLENBQUMsU0FBUyxHQUFHO0lBQ2pCLFVBQVUsRUFBRSxTQUFTLENBQUMsSUFBSTtJQUMxQixLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUk7Q0FDdEIsQ0FBQztBQUNGLE1BQU0sQ0FBQyxZQUFZLEdBQUc7SUFDcEIsVUFBVSxFQUFFLEtBQUs7SUFDakIsS0FBSyxFQUFFLEtBQUs7Q0FDYixDQUFDO0FBRUYsZUFBZSxNQUFNLENBQUMiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9sYXlvdXQvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmNvbnN0IExheW91dCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgZnVsbEhlaWdodCwgYWZmaXggfSkgPT4gKHtcbiAgICBpZTEwOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIGhlaWdodDogZnVsbEhlaWdodCB8fCBhZmZpeCA/ICcxMDB2aCcgOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiBhZmZpeCAmJiAnMTAwdmgnLFxuICB9KSxcbiAgKHsgY2hpbGRyZW4sIGFmZml4LCAuLi5yZXN0IH0pID0+XG4gICAgPGRpdiB7Li4ucmVzdH0+XG4gICAgICB7Q2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBjaGlsZCAmJiBjbG9uZUVsZW1lbnQoY2hpbGQsIHsgYWZmaXggfSkpfVxuICAgIDwvZGl2PixcbiAgKHsgZnVsbEhlaWdodCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKVxuKTtcbkxheW91dC5kaXNwbGF5TmFtZSA9ICdMYXlvdXQnO1xuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgZnVsbEhlaWdodDogUHJvcFR5cGVzLmJvb2wsXG4gIGFmZml4OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5MYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICBmdWxsSGVpZ2h0OiBmYWxzZSxcbiAgYWZmaXg6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19
