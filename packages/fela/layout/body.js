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
    return (__assign({}, !affix
        ? {}
        : {
            hasFlex: {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbGF5b3V0L2JvZHkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDN0MsT0FBTyxhQUFhLE1BQU0sa0JBQWtCLENBQUM7QUFFN0MsSUFBTSxJQUFJLEdBQUcsZUFBZSxDQUMxQixVQUFDLEVBQVM7UUFBUCxnQkFBSztJQUFPLE9BQUEsY0FFVixDQUFDLEtBQUs7VUFDTCxFQUFFO1VBQ0Y7WUFDRSxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE9BQU8sRUFBRSxNQUFNO2dCQUNmLGFBQWEsRUFBRSxRQUFRO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFLE1BQU07WUFDakIsV0FBVyxFQUFFO2dCQUNYLDRCQUE0QixFQUFFLE9BQU87Z0JBQ3JDLFNBQVMsRUFBRSxRQUFRO2FBQ3BCO1NBQ0YsRUFDTDtBQWhCYSxDQWdCYixFQUNGLFVBQUEsS0FBSztJQUNILE9BQUEsb0JBQUMsV0FBVztRQUNWLG9CQUFDLGFBQWEsZUFBSyxLQUFLLEVBQUksQ0FDaEI7QUFGZCxDQUVjLEVBQ2hCLFVBQUMsRUFBZTtJQUFiLElBQUEsZ0JBQUssRUFBRSx5QkFBSTtJQUFPLE1BQU0sQ0FBTixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0NBQUEsQ0FDcEMsQ0FBQztBQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO0FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUc7SUFDZixTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7SUFDekIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJO0NBQ3RCLENBQUM7QUFDRixJQUFJLENBQUMsWUFBWSxHQUFHO0lBQ2xCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLEtBQUssRUFBRSxLQUFLO0NBQ2IsQ0FBQztBQUVGLGVBQWUsSUFBSSxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbGF5b3V0L2JvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFNjcm9sbFRvVG9wIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWZlbGEnO1xuaW1wb3J0IFdpdGhDb250YWluZXIgZnJvbSAnLi93aXRoLWNvbnRhaW5lcic7XG5cbmNvbnN0IEJvZHkgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IGFmZml4IH0pID0+ICh7XG4gICAgLy8gZmxleDogJ25vbmUnLFxuICAgIC4uLiFhZmZpeFxuICAgICAgPyB7fVxuICAgICAgOiB7XG4gICAgICAgICAgaGFzRmxleDoge1xuICAgICAgICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgICAgaWZTbWFsbERvd246IHtcbiAgICAgICAgICAgICctd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZyc6ICd0b3VjaCcsXG4gICAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gIH0pLFxuICBwcm9wcyA9PlxuICAgIDxTY3JvbGxUb1RvcD5cbiAgICAgIDxXaXRoQ29udGFpbmVyIHsuLi5wcm9wc30gLz5cbiAgICA8L1Njcm9sbFRvVG9wPixcbiAgKHsgYWZmaXgsIC4uLnAgfSkgPT4gT2JqZWN0LmtleXMocClcbik7XG5Cb2R5LmRpc3BsYXlOYW1lID0gJ0xheW91dC5Cb2R5JztcbkJvZHkucHJvcFR5cGVzID0ge1xuICBjb250YWluZXI6IFByb3BUeXBlcy5ib29sLFxuICBhZmZpeDogUHJvcFR5cGVzLmJvb2wsXG59O1xuQm9keS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lcjogZmFsc2UsXG4gIGFmZml4OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG4iXX0=
