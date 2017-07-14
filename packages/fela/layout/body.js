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
import { ScrollToTop } from 'olymp-router';
import { createComponent } from 'react-fela';
import WithContainer from './with-container';
var Body = createComponent(function (_a) {
    var affix = _a.affix;
    return (__assign({ flex: 'none' }, !affix
        ? {}
        : {
            ie10: {
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
            },
            overflowY: 'auto',
            ifSmallDown: {
                '-webkit-overflow-scrolling': 'touch',
                overflowY: 'scroll',
            },
        }));
}, function (props) {
    return React.createElement(ScrollToTop, null,
        React.createElement(WithContainer, __assign({}, props)));
}, function (_a) {
    var affix = _a.affix, p = __rest(_a, ["affix"]);
    return Object.keys(p);
});
Body.displayName = 'Layout.Body';
Body.propTypes = {
    container: PropTypes.bool,
    affix: PropTypes.bool,
};
Body.defaultProps = {
    container: false,
    affix: false,
};
export default Body;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGF5b3V0L2JvZHkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDN0MsT0FBTyxhQUFhLE1BQU0sa0JBQWtCLENBQUM7QUFFN0MsSUFBTSxJQUFJLEdBQUcsZUFBZSxDQUMxQixVQUFDLEVBQVM7UUFBUCxnQkFBSztJQUFPLE9BQUEsWUFDYixJQUFJLEVBQUUsTUFBTSxJQUNULENBQUMsS0FBSztVQUNMLEVBQUU7VUFDRjtZQUNFLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsYUFBYSxFQUFFLFFBQVE7YUFDeEI7WUFDRCxTQUFTLEVBQUUsTUFBTTtZQUNqQixXQUFXLEVBQUU7Z0JBQ1gsNEJBQTRCLEVBQUUsT0FBTztnQkFDckMsU0FBUyxFQUFFLFFBQVE7YUFDcEI7U0FDRixFQUNMO0FBaEJhLENBZ0JiLEVBQ0YsVUFBQSxLQUFLO0lBQ0gsT0FBQSxvQkFBQyxXQUFXO1FBQ1Ysb0JBQUMsYUFBYSxlQUFLLEtBQUssRUFBSSxDQUNoQjtBQUZkLENBRWMsRUFDaEIsVUFBQyxFQUFlO0lBQWIsSUFBQSxnQkFBSyxFQUFFLHlCQUFJO0lBQU8sTUFBTSxDQUFOLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FBQSxDQUNwQyxDQUFDO0FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7QUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRztJQUNmLFNBQVMsRUFBRSxTQUFTLENBQUMsSUFBSTtJQUN6QixLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUk7Q0FDdEIsQ0FBQztBQUNGLElBQUksQ0FBQyxZQUFZLEdBQUc7SUFDbEIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsS0FBSyxFQUFFLEtBQUs7Q0FDYixDQUFDO0FBRUYsZUFBZSxJQUFJLENBQUMiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9sYXlvdXQvYm9keS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgU2Nyb2xsVG9Ub3AgfSBmcm9tICdvbHltcC1yb3V0ZXInO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5pbXBvcnQgV2l0aENvbnRhaW5lciBmcm9tICcuL3dpdGgtY29udGFpbmVyJztcblxuY29uc3QgQm9keSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgYWZmaXggfSkgPT4gKHtcbiAgICBmbGV4OiAnbm9uZScsXG4gICAgLi4uIWFmZml4XG4gICAgICA/IHt9XG4gICAgICA6IHtcbiAgICAgICAgICBpZTEwOiB7XG4gICAgICAgICAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgICBpZlNtYWxsRG93bjoge1xuICAgICAgICAgICAgJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJzogJ3RvdWNoJyxcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgfSksXG4gIHByb3BzID0+XG4gICAgPFNjcm9sbFRvVG9wPlxuICAgICAgPFdpdGhDb250YWluZXIgey4uLnByb3BzfSAvPlxuICAgIDwvU2Nyb2xsVG9Ub3A+LFxuICAoeyBhZmZpeCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKVxuKTtcbkJvZHkuZGlzcGxheU5hbWUgPSAnTGF5b3V0LkJvZHknO1xuQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFmZml4OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5Cb2R5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGFpbmVyOiBmYWxzZSxcbiAgYWZmaXg6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiJdfQ==
