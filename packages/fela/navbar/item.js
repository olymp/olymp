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
import { fade } from 'olymp-fela';
import Link from './link';
import { FaAngleDown, FaAngleLeft, FaAngleRight } from 'olymp-icons';
var Icon = createComponent(function (_a) {
    var theme = _a.theme, inverse = _a.inverse;
    return ({
        fill: "" + (inverse ? theme.light2 : theme.color),
        centerY: true,
        right: theme.space3,
    });
}, function (_a) {
    var className = _a.className, vertically = _a.vertically, right = _a.right;
    return !vertically
        ? React.createElement(FaAngleDown, { className: className, size: 15 })
        : right
            ? React.createElement(FaAngleLeft, { className: className, size: 15 })
            : React.createElement(FaAngleRight, { className: className, size: 15 });
}, function (p) { return Object.keys(p); });
var NavItem = createComponent(function (_a) {
    var theme = _a.theme, fill = _a.fill, inverse = _a.inverse, vertically = _a.vertically, right = _a.right, pages = _a.pages;
    return ({
        hasFlex: {
            flex: fill && '1 1 auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: fill ? 'column' : right && vertically && 'row-reverse',
        },
        width: vertically && '100%',
        float: !vertically && 'left',
        position: 'relative',
        padding: theme.space3,
        paddingRight: pages && pages.length ? theme.space4 : theme.space3,
        onHover: {
            backgroundColor: inverse && fade('#000000', 10),
            '> div': {
                display: 'block',
            },
        },
        ifMini: {
            float: 'none',
            display: 'block',
            width: '100%',
        },
    });
}, function (_a) {
    var className = _a.className, pathname = _a.pathname, children = _a.children, title = _a.title, fill = _a.fill, inverse = _a.inverse, vertically = _a.vertically, right = _a.right, pages = _a.pages, onClick = _a.onClick, onItemMouseEnter = _a.onItemMouseEnter, props = __rest(_a, ["className", "pathname", "children", "title", "fill", "inverse", "vertically", "right", "pages", "onClick", "onItemMouseEnter"]);
    return React.createElement("div", { className: className, onMouseEnter: onItemMouseEnter ? function () { return onItemMouseEnter(props); } : undefined },
        React.createElement(Link, { to: pathname, onClick: onClick, inverse: inverse },
            title,
            pages &&
                !!pages.length &&
                React.createElement(Icon, { vertically: vertically, right: right, inverse: inverse })),
        pages &&
            !!pages.length &&
            props.renderNav(__assign({}, props, { inverse: inverse,
                vertically: vertically,
                right: right,
                pages: pages, sub: true })),
        Children.map(children, function (child) {
            return cloneElement(child, __assign({}, props, { inverse: inverse, vertically: vertically, right: right, sub: true }));
        }));
}, function (p) { return Object.keys(p); });
NavItem.displayName = 'Navbar.Item';
NavItem.propTypes = {
    title: PropTypes.node.isRequired,
    to: PropTypes.string,
    mega: PropTypes.func,
    onClick: PropTypes.func,
};
NavItem.defaultProps = {
    to: undefined,
    mega: null,
    onClick: undefined,
};
export default NavItem;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2YmFyL2l0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3RELE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbEMsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVyRSxJQUFNLElBQUksR0FBRyxlQUFlLENBQzFCLFVBQUMsRUFBa0I7UUFBaEIsZ0JBQUssRUFBRSxvQkFBTztJQUFPLE9BQUEsQ0FBQztRQUN2QixJQUFJLEVBQUUsTUFBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFFO1FBQy9DLE9BQU8sRUFBRSxJQUFJO1FBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNO0tBQ3BCLENBQUM7QUFKc0IsQ0FJdEIsRUFDRixVQUFDLEVBQWdDO1FBQTlCLHdCQUFTLEVBQUUsMEJBQVUsRUFBRSxnQkFBSztJQUM3QixPQUFBLENBQUMsVUFBVTtVQUNQLG9CQUFDLFdBQVcsSUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUk7VUFDL0MsS0FBSztjQUNILG9CQUFDLFdBQVcsSUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUk7Y0FDL0Msb0JBQUMsWUFBWSxJQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBSTtBQUp0RCxDQUlzRCxFQUN4RCxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FB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QVMsQ0FBQyxJQUFJO0lBRXBCLE9BQU8sRUFBRSxTQUFTLENBQUMsSUFBSTtDQUN4QixDQUFDO0FBQ0YsT0FBTyxDQUFDLFlBQVksR0FBRztJQUNyQixFQUFFLEVBQUUsU0FBUztJQUNiLElBQUksRUFBRSxJQUFJO0lBQ1YsT0FBTyxFQUFFLFNBQVM7Q0FDbkIsQ0FBQztBQUNGLGVBQWUsT0FBTyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvbmF2YmFyL2l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IGZhZGUgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluayc7XG5pbXBvcnQgeyBGYUFuZ2xlRG93biwgRmFBbmdsZUxlZnQsIEZhQW5nbGVSaWdodCB9IGZyb20gJ29seW1wLWljb25zJztcblxuY29uc3QgSWNvbiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGludmVyc2UgfSkgPT4gKHtcbiAgICBmaWxsOiBgJHtpbnZlcnNlID8gdGhlbWUubGlnaHQyIDogdGhlbWUuY29sb3J9YCxcbiAgICBjZW50ZXJZOiB0cnVlLFxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjZTMsXG4gIH0pLFxuICAoeyBjbGFzc05hbWUsIHZlcnRpY2FsbHksIHJpZ2h0IH0pID0+XG4gICAgIXZlcnRpY2FsbHlcbiAgICAgID8gPEZhQW5nbGVEb3duIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzaXplPXsxNX0gLz5cbiAgICAgIDogcmlnaHRcbiAgICAgICAgPyA8RmFBbmdsZUxlZnQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNpemU9ezE1fSAvPlxuICAgICAgICA6IDxGYUFuZ2xlUmlnaHQgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNpemU9ezE1fSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgTmF2SXRlbSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGZpbGwsIGludmVyc2UsIHZlcnRpY2FsbHksIHJpZ2h0LCBwYWdlcyB9KSA9PiAoe1xuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGZsZXg6IGZpbGwgJiYgJzEgMSBhdXRvJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZmxleERpcmVjdGlvbjogZmlsbCA/ICdjb2x1bW4nIDogcmlnaHQgJiYgdmVydGljYWxseSAmJiAncm93LXJldmVyc2UnLFxuICAgIH0sXG4gICAgd2lkdGg6IHZlcnRpY2FsbHkgJiYgJzEwMCUnLFxuICAgIGZsb2F0OiAhdmVydGljYWxseSAmJiAnbGVmdCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2UzLFxuICAgIHBhZGRpbmdSaWdodDogcGFnZXMgJiYgcGFnZXMubGVuZ3RoID8gdGhlbWUuc3BhY2U0IDogdGhlbWUuc3BhY2UzLFxuICAgIG9uSG92ZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaW52ZXJzZSAmJiBmYWRlKCcjMDAwMDAwJywgMTApLFxuICAgICAgJz4gZGl2Jzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGlmTWluaToge1xuICAgICAgZmxvYXQ6ICdub25lJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gIH0pLFxuICAoe1xuICAgIGNsYXNzTmFtZSxcbiAgICBwYXRobmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICB0aXRsZSxcbiAgICBmaWxsLFxuICAgIGludmVyc2UsXG4gICAgdmVydGljYWxseSxcbiAgICByaWdodCxcbiAgICBwYWdlcyxcbiAgICBvbkNsaWNrLFxuICAgIG9uSXRlbU1vdXNlRW50ZXIsXG4gICAgLi4ucHJvcHMsXG4gIH0pID0+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBvbk1vdXNlRW50ZXI9e1xuICAgICAgICBvbkl0ZW1Nb3VzZUVudGVyID8gKCkgPT4gb25JdGVtTW91c2VFbnRlcihwcm9wcykgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICA+XG4gICAgICA8TGluayB0bz17cGF0aG5hbWV9IG9uQ2xpY2s9e29uQ2xpY2t9IGludmVyc2U9e2ludmVyc2V9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICAgIHtwYWdlcyAmJlxuICAgICAgICAgICEhcGFnZXMubGVuZ3RoICYmXG4gICAgICAgICAgPEljb24gdmVydGljYWxseT17dmVydGljYWxseX0gcmlnaHQ9e3JpZ2h0fSBpbnZlcnNlPXtpbnZlcnNlfSAvPn1cbiAgICAgIDwvTGluaz5cblxuICAgICAge3BhZ2VzICYmXG4gICAgICAgICEhcGFnZXMubGVuZ3RoICYmXG4gICAgICAgIHByb3BzLnJlbmRlck5hdih7XG4gICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgaW52ZXJzZSxcbiAgICAgICAgICB2ZXJ0aWNhbGx5LFxuICAgICAgICAgIHJpZ2h0LFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHN1YjogdHJ1ZSxcbiAgICAgICAgfSl9XG4gICAgICB7Q2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PlxuICAgICAgICBjbG9uZUVsZW1lbnQoY2hpbGQsIHsgLi4ucHJvcHMsIGludmVyc2UsIHZlcnRpY2FsbHksIHJpZ2h0LCBzdWI6IHRydWUgfSlcbiAgICAgICl9XG4gICAgPC9kaXY+LFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuTmF2SXRlbS5kaXNwbGF5TmFtZSA9ICdOYXZiYXIuSXRlbSc7XG5OYXZJdGVtLnByb3BUeXBlcyA9IHtcbiAgLyoqIHRpdGxlL2xhYmVsICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKiogcGF0aCBmb3IgcmVhY3Qtcm91dGVyIG9yIHVuZGVmaW5lZCBmb3IgcGxhY2Vob2xkZXIgKi9cbiAgdG86IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBzdWJtZW51IGlzIG1lZ2EgZHJvcGRvd24gbWVudSAqL1xuICBtZWdhOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5OYXZJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgdG86IHVuZGVmaW5lZCxcbiAgbWVnYTogbnVsbCxcbiAgb25DbGljazogdW5kZWZpbmVkLFxufTtcbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW07XG4iXX0=
