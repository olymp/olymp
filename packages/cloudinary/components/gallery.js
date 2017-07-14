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
        padding: '.5rem',
        hasFlex: {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: justifyContent || 'space-between',
            alignContent: 'flex-start',
            alignItems: 'flex-start',
        },
    });
}, 'div', function (_a) {
    var justifyContent = _a.justifyContent, p = __rest(_a, ["justifyContent"]);
    return Object.keys(p);
});
export var MediaList = function (_a) {
    var items = _a.items, itemHeight = _a.itemHeight, selected = _a.selected, onClick = _a.onClick, onRemove = _a.onRemove, rest = __rest(_a, ["items", "itemHeight", "selected", "onClick", "onRemove"]);
    return React.createElement(Thumbs, __assign({}, rest), (items || [])
        .map(function (item, index) {
        return React.createElement(Thumb, { item: item, onClick: function (e) { return onClick(item.id, index, e); }, onRemove: function () { return onRemove(item.id); }, isActive: selected.findIndex(function (_a) {
                var id = _a.id;
                return id === item.id;
            }) >= 0, height: itemHeight, key: item.id });
    }));
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvY29tcG9uZW50cy9nYWxsZXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFN0MsSUFBTSxNQUFNLEdBQUcsZUFBZSxDQUM1QixVQUFDLEVBQWtCO1FBQWhCLGtDQUFjO0lBQU8sT0FBQSxDQUFDO1FBQ3ZCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLFVBQVU7WUFDcEIsY0FBYyxFQUFFLGNBQWMsSUFBSSxlQUFlO1lBQ2pELFlBQVksRUFBRSxZQUFZO1lBQzFCLFVBQVUsRUFBRSxZQUFZO1NBQ3pCO0tBQ0YsQ0FBQztBQVRzQixDQVN0QixFQUNGLEtBQUssRUFDTCxVQUFDLEVBQXdCO0lBQXRCLElBQUEsa0NBQWMsRUFBRSxrQ0FBSTtJQUFPLE1BQU0sQ0FBTixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0NBQUEsQ0FDN0MsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBRyxVQUFDLEVBT3pCO0lBTkMsSUFBQSxnQkFBSyxFQUNMLDBCQUFVLEVBQ1Ysc0JBQVEsRUFDUixvQkFBTyxFQUNQLHNCQUFRLEVBQ1IsNkVBQU87SUFFUCxNQUFNLENBQU4sb0JBQUMsTUFBTSxlQUFLLElBQUksR0FDYixDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7U0FDWCxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztRQUNmLE9BQUEsb0JBQUMsS0FBSyxJQUNKLElBQUksRUFBRSxJQUFJLEVBQ1YsT0FBTyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUExQixDQUEwQixFQUN4QyxRQUFRLEVBQUUsY0FBTSxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQWpCLENBQWlCLEVBQ2pDLFFBQVEsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBTTtvQkFBSixVQUFFO2dCQUFPLE9BQUEsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQWQsQ0FBYyxDQUFDLElBQUksQ0FBQyxFQUM3RCxNQUFNLEVBQUUsVUFBVSxFQUNsQixHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FDWjtJQVBGLENBT0UsQ0FDSCxDQUNJLENBQUE7Q0FBQSxDQUFDO0FBQ1osU0FBUyxDQUFDLFNBQVMsR0FBRztJQUNwQixLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQzFDLFVBQVUsRUFBRSxTQUFTLENBQUMsTUFBTTtJQUM1QixRQUFRLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FDekIsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUNkLEVBQUUsRUFBRSxTQUFTLENBQUMsTUFBTTtRQUNwQixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0tBQzFDLENBQUMsQ0FDSDtJQUNELE9BQU8sRUFBRSxTQUFTLENBQUMsSUFBSTtJQUN2QixRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUk7Q0FDekIsQ0FBQztBQUNGLFNBQVMsQ0FBQyxZQUFZLEdBQUc7SUFDdkIsS0FBSyxFQUFFLEVBQUU7SUFDVCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVEsRUFBRSxFQUFFO0lBQ1osT0FBTyxFQUFFLGNBQU8sQ0FBQztJQUNqQixRQUFRLEVBQUUsY0FBTyxDQUFDO0NBQ25CLENBQUM7QUFDRixlQUFlLFNBQVMsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9jbG91ZGluYXJ5L2NvbXBvbmVudHMvZ2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRodW1iIGZyb20gJy4vdGh1bWInO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnb2x5bXAtZmVsYSc7XG5cbmNvbnN0IFRodW1icyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsganVzdGlmeUNvbnRlbnQgfSkgPT4gKHtcbiAgICBwYWRkaW5nOiAnLjVyZW0nLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhGbG93OiAncm93IHdyYXAnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IGp1c3RpZnlDb250ZW50IHx8ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgKHsganVzdGlmeUNvbnRlbnQsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmV4cG9ydCBjb25zdCBNZWRpYUxpc3QgPSAoe1xuICBpdGVtcyxcbiAgaXRlbUhlaWdodCxcbiAgc2VsZWN0ZWQsXG4gIG9uQ2xpY2ssXG4gIG9uUmVtb3ZlLFxuICAuLi5yZXN0LFxufSkgPT5cbiAgPFRodW1icyB7Li4ucmVzdH0+XG4gICAgeyhpdGVtcyB8fCBbXSlcbiAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PlxuICAgICAgICA8VGh1bWJcbiAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gb25DbGljayhpdGVtLmlkLCBpbmRleCwgZSl9XG4gICAgICAgICAgb25SZW1vdmU9eygpID0+IG9uUmVtb3ZlKGl0ZW0uaWQpfVxuICAgICAgICAgIGlzQWN0aXZlPXtzZWxlY3RlZC5maW5kSW5kZXgoKHsgaWQgfSkgPT4gaWQgPT09IGl0ZW0uaWQpID49IDB9XG4gICAgICAgICAgaGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gIDwvVGh1bWJzPjtcbk1lZGlhTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGNyb3A6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuICAgIH0pXG4gICksXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuTWVkaWFMaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgaXRlbXM6IFtdLFxuICBpdGVtSGVpZ2h0OiA4MCxcbiAgc2VsZWN0ZWQ6IFtdLFxuICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgb25SZW1vdmU6ICgpID0+IHt9LFxufTtcbmV4cG9ydCBkZWZhdWx0IE1lZGlhTGlzdDtcbiJdfQ==
