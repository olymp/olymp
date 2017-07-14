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
import Toggler from './toggler';
import Container from '../container';
import Nav from './nav';
import Item from './item';
import Sub from './sub';
import Brand from './brand';
var renderItem = function (props) { return React.createElement(Item, __assign({}, props)); };
var renderNav = function (props) { return React.createElement(Nav, __assign({}, props, { sub: true })); };
var WithContainer = function (_a) {
    var container = _a.container, rest = __rest(_a, ["container"]);
    return container ? React.createElement(Container, __assign({}, rest)) : React.createElement("div", __assign({}, rest));
};
var Inner = createComponent(function (_a) {
    var vertically = _a.vertically;
    return ({
        clearfix: true,
        hasFlex: {
            display: 'flex',
            flexDirection: vertically ? 'column' : 'row',
            alignItems: vertically ? 'flex-start' : 'stretch',
        },
        ifMini: {
            flexDirection: 'column',
        },
    });
}, 'div', ['className']);
var Navbar = createComponent(function (_a) {
    var theme = _a.theme, inverse = _a.inverse, vertically = _a.vertically, full = _a.full;
    return ({
        backgroundColor: inverse && theme.color,
        background: inverse && theme.color,
        borderRadius: !full && theme.borderRadius,
        margin: !full && theme.space2,
        width: full && '100%',
        minWidth: vertically && 200,
        ifMini: {
            margin: theme.space0,
        },
    });
}, function (_a) {
    var className = _a.className, brand = _a.brand, children = _a.children, pages = _a.pages, container = _a.container, inverse = _a.inverse, vertically = _a.vertically, props = __rest(_a, ["className", "brand", "children", "pages", "container", "inverse", "vertically"]);
    return React.createElement("nav", { className: className },
        React.createElement(WithContainer, { container: container },
            React.createElement(Inner, { vertically: vertically },
                brand &&
                    React.createElement(Brand, { inverse: inverse, vertically: vertically }, brand),
                pages &&
                    !!pages.length &&
                    React.createElement(Toggler, __assign({}, props, { inverse: inverse, vertically: vertically, pages: pages, renderItem: renderItem, renderNav: renderNav }),
                        React.createElement(Sub, null)),
                Children.map(children, function (child) {
                    return cloneElement(child, __assign({}, props, { inverse: inverse,
                        vertically: vertically,
                        renderItem: renderItem,
                        renderNav: renderNav }));
                }))));
}, function (p) { return Object.keys(p); });
Navbar.displayName = 'Navbar';
Navbar.propTypes = {
    brand: PropTypes.node,
    vertically: PropTypes.bool,
    inverse: PropTypes.bool,
    full: PropTypes.bool,
    fill: PropTypes.bool,
};
Navbar.defaultProps = {
    brand: undefined,
    vertically: false,
    inverse: false,
    full: false,
    fill: false,
};
export default Navbar;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2YmFyL25hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdEQsT0FBTyxTQUFTLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDN0MsT0FBTyxPQUFPLE1BQU0sV0FBVyxDQUFDO0FBQ2hDLE9BQU8sU0FBUyxNQUFNLGNBQWMsQ0FBQztBQUNyQyxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUM7QUFDeEIsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFDO0FBQzFCLE9BQU8sR0FBRyxNQUFNLE9BQU8sQ0FBQztBQUN4QixPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFFNUIsSUFBTSxVQUFVLEdBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxvQkFBQyxJQUFJLGVBQUssS0FBSyxFQUFJLEVBQW5CLENBQW1CLENBQUM7QUFDaEQsSUFBTSxTQUFTLEdBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxvQkFBQyxHQUFHLGVBQUssS0FBSyxJQUFFLEdBQUcsVUFBRyxFQUF0QixDQUFzQixDQUFDO0FBQ2xELElBQU0sYUFBYSxHQUFHLFVBQUMsRUFBc0I7SUFBcEIsSUFBQSx3QkFBUyxFQUFFLGdDQUFPO0lBQ3pDLE1BQU0sQ0FBTixTQUFTLEdBQUcsb0JBQUMsU0FBUyxlQUFLLElBQUksRUFBSSxHQUFHLHdDQUFTLElBQUksRUFBSSxDQUFBO0NBQUEsQ0FBQztBQUUxRCxJQUFNLEtBQUssR0FBRyxlQUFlLENBQzNCLFVBQUMsRUFBYztRQUFaLDBCQUFVO0lBQU8sT0FBQSxDQUFDO1FBQ25CLFFBQVEsRUFBRSxJQUFJO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLE1BQU07WUFDZixhQUFhLEVBQUUsVUFBVSxHQUFHLFFBQVEsR0FBRyxLQUFLO1lBQzVDLFVBQVUsRUFBRSxVQUFVLEdBQUcsWUFBWSxHQUFHLFNBQVM7U0FDbEQ7UUFDRCxNQUFNLEVBQUU7WUFDTixhQUFhLEVBQUUsUUFBUTtTQUN4QjtLQUNGLENBQUM7QUFWa0IsQ0FVbEIsRUFDRixLQUFLLEVBQ0wsQ0FBQyxXQUFXLENBQUMsQ0FDZCxDQUFDO0FBRUYsSUFBTSxNQUFNLEdBQUcsZUFBZSxDQUM1QixVQUFDLEVBQW9DO1FBQWxDLGdCQUFLLEVBQUUsb0JBQU8sRUFBRSwwQkFBVSxFQUFFLGNBQUk7SUFBTyxPQUFBLENBQUM7UUFDekMsZUFBZSxFQUFFLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSztRQUN2QyxVQUFVLEVBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLO1FBQ2xDLFlBQVksRUFBRSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsWUFBWTtRQUN6QyxNQUFNLEVBQUUsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU07UUFDN0IsS0FBSyxFQUFFLElBQUksSUFBSSxNQUFNO1FBQ3JCLFFBQVEsRUFBRSxVQUFVLElBQUksR0FBRztRQUMzQixNQUFNLEVBQUU7WUFDTixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDckI7S0FDRixDQUFDO0FBVndDLENBVXhDLEVBQ0YsVUFBQyxFQVNBO0lBUkMsSUFBQSx3QkFBUyxFQUNULGdCQUFLLEVBQ0wsc0JBQVEsRUFDUixnQkFBSyxFQUNMLHdCQUFTLEVBQ1Qsb0JBQU8sRUFDUCwwQkFBVSxFQUNWLHFHQUFRO0lBRVIsTUFBTSxDQUFOLDZCQUFLLFNBQVMsRUFBRSxTQUFTO1FBQ3ZCLG9CQUFDLGFBQWEsSUFBQyxTQUFTLEVBQUUsU0FBUztZQUNqQyxvQkFBQyxLQUFLLElBQUMsVUFBVSxFQUFFLFVBQVU7Z0JBQzFCLEtBQUs7b0JBQ0osb0JBQUMsS0FBSyxJQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsSUFDNUMsS0FBSyxDQUNBO2dCQUVULEtBQUs7b0JBQ0osQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNO29CQUNkLG9CQUFDLE9BQU8sZUFDRixLQUFLLElBQ1QsT0FBTyxFQUFFLE9BQU8sRUFDaEIsVUFBVSxFQUFFLFVBQVUsRUFDdEIsS0FBSyxFQUFFLEtBQUssRUFDWixVQUFVLEVBQUUsVUFBVSxFQUN0QixTQUFTLEVBQUUsU0FBUzt3QkFFcEIsb0JBQUMsR0FBRyxPQUFHLENBQ0M7Z0JBRVgsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBQSxLQUFLO29CQUMzQixPQUFBLFlBQVksQ0FBQyxLQUFLLGVBQ2IsS0FBSyxJQUNSLE9BQU8sU0FBQTt3QkFDUCxVQUFVLFlBQUE7d0JBQ1YsVUFBVSxZQUFBO3dCQUNWLFNBQVMsV0FBQSxJQUNUO2dCQU5GLENBTUUsQ0FDSCxDQUNLLENBQ00sQ0FDWixDQUFBO0NBQUEsRUFDUixVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUNwQixDQUFDO0FBQ0YsTUFBTSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDOUIsTUFBTSxDQUFDLFNBQVMsR0FBRztJQUVqQixLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUk7SUFFckIsVUFBVSxFQUFFLFNBQVMsQ0FBQyxJQUFJO0lBRTFCLE9BQU8sRUFBRSxTQUFTLENBQUMsSUFBSTtJQUV2QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7SUFFcEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO0NBQ3JCLENBQUM7QUFDRixNQUFNLENBQUMsWUFBWSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsSUFBSSxFQUFFLEtBQUs7SUFDWCxJQUFJLEVBQUUsS0FBSztDQUNaLENBQUM7QUFDRixlQUFlLE1BQU0sQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9mZWxhL25hdmJhci9uYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCBUb2dnbGVyIGZyb20gJy4vdG9nZ2xlcic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbnRhaW5lcic7XG5pbXBvcnQgTmF2IGZyb20gJy4vbmF2JztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgU3ViIGZyb20gJy4vc3ViJztcbmltcG9ydCBCcmFuZCBmcm9tICcuL2JyYW5kJztcblxuY29uc3QgcmVuZGVySXRlbSA9IHByb3BzID0+IDxJdGVtIHsuLi5wcm9wc30gLz47XG5jb25zdCByZW5kZXJOYXYgPSBwcm9wcyA9PiA8TmF2IHsuLi5wcm9wc30gc3ViIC8+O1xuY29uc3QgV2l0aENvbnRhaW5lciA9ICh7IGNvbnRhaW5lciwgLi4ucmVzdCB9KSA9PlxuICBjb250YWluZXIgPyA8Q29udGFpbmVyIHsuLi5yZXN0fSAvPiA6IDxkaXYgey4uLnJlc3R9IC8+O1xuXG5jb25zdCBJbm5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdmVydGljYWxseSB9KSA9PiAoe1xuICAgIGNsZWFyZml4OiB0cnVlLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246IHZlcnRpY2FsbHkgPyAnY29sdW1uJyA6ICdyb3cnLFxuICAgICAgYWxpZ25JdGVtczogdmVydGljYWxseSA/ICdmbGV4LXN0YXJ0JyA6ICdzdHJldGNoJyxcbiAgICB9LFxuICAgIGlmTWluaToge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBbJ2NsYXNzTmFtZSddXG4pO1xuXG5jb25zdCBOYXZiYXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBpbnZlcnNlLCB2ZXJ0aWNhbGx5LCBmdWxsIH0pID0+ICh7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpbnZlcnNlICYmIHRoZW1lLmNvbG9yLFxuICAgIGJhY2tncm91bmQ6IGludmVyc2UgJiYgdGhlbWUuY29sb3IsXG4gICAgYm9yZGVyUmFkaXVzOiAhZnVsbCAmJiB0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgbWFyZ2luOiAhZnVsbCAmJiB0aGVtZS5zcGFjZTIsXG4gICAgd2lkdGg6IGZ1bGwgJiYgJzEwMCUnLFxuICAgIG1pbldpZHRoOiB2ZXJ0aWNhbGx5ICYmIDIwMCxcbiAgICBpZk1pbmk6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2UwLFxuICAgIH0sXG4gIH0pLFxuICAoe1xuICAgIGNsYXNzTmFtZSxcbiAgICBicmFuZCxcbiAgICBjaGlsZHJlbixcbiAgICBwYWdlcyxcbiAgICBjb250YWluZXIsXG4gICAgaW52ZXJzZSxcbiAgICB2ZXJ0aWNhbGx5LFxuICAgIC4uLnByb3BzLFxuICB9KSA9PlxuICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPFdpdGhDb250YWluZXIgY29udGFpbmVyPXtjb250YWluZXJ9PlxuICAgICAgICA8SW5uZXIgdmVydGljYWxseT17dmVydGljYWxseX0+XG4gICAgICAgICAge2JyYW5kICYmXG4gICAgICAgICAgICA8QnJhbmQgaW52ZXJzZT17aW52ZXJzZX0gdmVydGljYWxseT17dmVydGljYWxseX0+XG4gICAgICAgICAgICAgIHticmFuZH1cbiAgICAgICAgICAgIDwvQnJhbmQ+fVxuXG4gICAgICAgICAge3BhZ2VzICYmXG4gICAgICAgICAgICAhIXBhZ2VzLmxlbmd0aCAmJlxuICAgICAgICAgICAgPFRvZ2dsZXJcbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICBpbnZlcnNlPXtpbnZlcnNlfVxuICAgICAgICAgICAgICB2ZXJ0aWNhbGx5PXt2ZXJ0aWNhbGx5fVxuICAgICAgICAgICAgICBwYWdlcz17cGFnZXN9XG4gICAgICAgICAgICAgIHJlbmRlckl0ZW09e3JlbmRlckl0ZW19XG4gICAgICAgICAgICAgIHJlbmRlck5hdj17cmVuZGVyTmF2fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3ViIC8+XG4gICAgICAgICAgICA8L1RvZ2dsZXI+fVxuXG4gICAgICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT5cbiAgICAgICAgICAgIGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgICAgaW52ZXJzZSxcbiAgICAgICAgICAgICAgdmVydGljYWxseSxcbiAgICAgICAgICAgICAgcmVuZGVySXRlbSxcbiAgICAgICAgICAgICAgcmVuZGVyTmF2LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApfVxuICAgICAgICA8L0lubmVyPlxuICAgICAgPC9XaXRoQ29udGFpbmVyPlxuICAgIDwvbmF2PixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcbk5hdmJhci5kaXNwbGF5TmFtZSA9ICdOYXZiYXInO1xuTmF2YmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqIG5vZGUgYXMgYnJhbmQgKi9cbiAgYnJhbmQ6IFByb3BUeXBlcy5ub2RlLFxuICAvKiogcmVuZGVyIG5hdiB2ZXJ0aWNhbGx5IGluc3RlYWQgaG9yaXpvbnRhbGx5ICovXG4gIHZlcnRpY2FsbHk6IFByb3BUeXBlcy5ib29sLFxuICAvKiogaW52ZXJzZSB0aGVtZSB3aXRoIHByaW1hcnktY29sb3IgYmFja2dyb3VuZCAqL1xuICBpbnZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIGZ1bGwgc2l6ZSB3aWR0aCB3aXRob3V0IG1hcmdpbiAqL1xuICBmdWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIG5hdi1pdGVtcyB3aWxsIGZpbGwgZW1wdHkgc3BhY2Ugb24gZnVsbCBsZW5ndGggKi9cbiAgZmlsbDogUHJvcFR5cGVzLmJvb2wsXG59O1xuTmF2YmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYnJhbmQ6IHVuZGVmaW5lZCxcbiAgdmVydGljYWxseTogZmFsc2UsXG4gIGludmVyc2U6IGZhbHNlLFxuICBmdWxsOiBmYWxzZSxcbiAgZmlsbDogZmFsc2UsXG59O1xuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl19
