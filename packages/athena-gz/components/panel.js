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
import { Grid, createComponent, fade } from 'olymp-fela';
import { H2 } from './heading';
var Clearfix = createComponent(function (_a) {
    var theme = _a.theme, _b = _a.color, color = _b === void 0 ? theme.color : _b;
    return ({
        clear: 'both',
    });
}, 'div', function (p) { return Object.keys(p); });
export var Content = createComponent(function (_a) {
    var theme = _a.theme, accent = _a.accent, _b = _a.padding, padding = _b === void 0 ? theme.space3 : _b, _c = _a.size, size = _c === void 0 ? 1 : _c;
    return ({
        borderRight: size + "px solid " + (!accent ? theme.color : fade(accent)),
        borderBottom: size + "px solid " + (!accent ? theme.color : fade(accent)),
        borderBottomRightRadius: 100,
        paddingTop: 0,
        paddingBottom: padding,
        paddingLeft: 0,
        paddingRight: padding,
        hyphens: 'auto',
        flex: '1 1 auto',
        position: 'relative',
        minHeight: 120,
        '> iframe': {
            borderBottomRightRadius: 100,
            display: 'block',
        },
        onBefore: {
            content: '""',
            position: 'absolute',
            bottom: -size,
            right: -size,
            top: -size,
            width: size,
            background: 'linear-gradient(to bottom, #FFF 33%, rgba(255, 255, 255, 0.0001) 100%)',
        },
        onAfter: {
            content: '""',
            position: 'absolute',
            bottom: -size,
            left: -size,
            right: -size,
            height: size,
            background: 'linear-gradient(to right, #FFF 33%, rgba(255, 255, 255, 0.0001) 100%)',
        },
    });
}, 'div', function (_a) {
    var padding = _a.padding, background = _a.background, color = _a.color, accent = _a.accent, p = __rest(_a, ["padding", "background", "color", "accent"]);
    return Object.keys(p);
});
export default createComponent(function (_a) {
    var theme = _a.theme, _b = _a.paddingLeft, paddingLeft = _b === void 0 ? theme.space3 : _b, _c = _a.paddingRight, paddingRight = _c === void 0 ? theme.space3 : _c, _d = _a.background, background = _d === void 0 ? theme.dark5 : _d, accent = _a.accent;
    return ({
        width: '100%',
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        position: 'relative',
        hasFlex: {
            display: 'flex',
            flexDirection: 'column',
        },
        '& a': {
            color: theme.dark2,
            onHover: {
                color: accent,
            },
        },
        onAfter: {
            content: '""',
            position: 'absolute',
            width: 33,
            height: 33,
            backgroundColor: theme.dark4,
            bottom: 0,
            borderTopLeftRadius: 30,
            right: theme.space3,
        },
        onHover: {
            onAfter: {
                backgroundColor: fade(accent || (background === theme.dark5 ? theme.color : background)),
            },
        },
        ifSmallDown: {
            paddingX: theme.space3,
            paddingY: theme.space2,
        },
    });
}, function (_a) {
    var title = _a.title, subtitle = _a.subtitle, children = _a.children, padding = _a.padding, background = _a.background, accent = _a.accent, color = _a.color, bordered = _a.bordered, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, rest = __rest(_a, ["title", "subtitle", "children", "padding", "background", "accent", "color", "bordered", "paddingLeft", "paddingRight"]);
    return React.createElement(Grid.Item, __assign({ mini: 12 }, rest),
        React.createElement(H2, { color: accent || background, bordered: bordered, subtitle: subtitle }, title),
        React.createElement(Content, { padding: padding, accent: accent, color: color },
            children,
            React.createElement(Clearfix, null)));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F0aGVuYS1nei9jb21wb25lbnRzL3BhbmVsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUvQixJQUFNLFFBQVEsR0FBRyxlQUFlLENBQzlCLFVBQUMsRUFBOEI7UUFBNUIsZ0JBQUssRUFBRSxhQUFtQixFQUFuQix3Q0FBbUI7SUFBTyxPQUFBLENBQUM7UUFDbkMsS0FBSyxFQUFFLE1BQU07S0FDZCxDQUFDO0FBRmtDLENBRWxDLEVBQ0YsS0FBSyxFQUNMLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQ3BCLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxPQUFPLEdBQUcsZUFBZSxDQUNwQyxVQUFDLEVBQW1EO1FBQWpELGdCQUFLLEVBQUUsa0JBQU0sRUFBRSxlQUFzQixFQUF0QiwyQ0FBc0IsRUFBRSxZQUFRLEVBQVIsNkJBQVE7SUFBTyxPQUFBLENBQUM7UUFDeEQsV0FBVyxFQUFLLElBQUksa0JBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUU7UUFDdEUsWUFBWSxFQUFLLElBQUksa0JBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUU7UUFDdkUsdUJBQXVCLEVBQUUsR0FBRztRQUM1QixVQUFVLEVBQUUsQ0FBQztRQUNiLGFBQWEsRUFBRSxPQUFPO1FBQ3RCLFdBQVcsRUFBRSxDQUFDO1FBQ2QsWUFBWSxFQUFFLE9BQU87UUFDckIsT0FBTyxFQUFFLE1BQU07UUFD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LG9CQUFDLE9BQU8sSUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUs7WUFDcEQsUUFBUTtZQUVULG9CQUFDLFFBQVEsT0FBRyxDQUNKLENBQ0EsQ0FBQTtDQUFBLEVBQ2QsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FDcEIsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9hdGhlbmEtZ3ovY29tcG9uZW50cy9wYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmlkLCBjcmVhdGVDb21wb25lbnQsIGZhZGUgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IEgyIH0gZnJvbSAnLi9oZWFkaW5nJztcblxuY29uc3QgQ2xlYXJmaXggPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBjb2xvciA9IHRoZW1lLmNvbG9yIH0pID0+ICh7XG4gICAgY2xlYXI6ICdib3RoJyxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUsIGFjY2VudCwgcGFkZGluZyA9IHRoZW1lLnNwYWNlMywgc2l6ZSA9IDEgfSkgPT4gKHtcbiAgICBib3JkZXJSaWdodDogYCR7c2l6ZX1weCBzb2xpZCAkeyFhY2NlbnQgPyB0aGVtZS5jb2xvciA6IGZhZGUoYWNjZW50KX1gLFxuICAgIGJvcmRlckJvdHRvbTogYCR7c2l6ZX1weCBzb2xpZCAkeyFhY2NlbnQgPyB0aGVtZS5jb2xvciA6IGZhZGUoYWNjZW50KX1gLFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAxMDAsXG4gICAgcGFkZGluZ1RvcDogMCxcbiAgICBwYWRkaW5nQm90dG9tOiBwYWRkaW5nLFxuICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgIHBhZGRpbmdSaWdodDogcGFkZGluZyxcbiAgICBoeXBoZW5zOiAnYXV0bycsXG4gICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtaW5IZWlnaHQ6IDEyMCxcbiAgICAnPiBpZnJhbWUnOiB7XG4gICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMTAwLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB9LFxuICAgIG9uQmVmb3JlOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogLXNpemUsXG4gICAgICByaWdodDogLXNpemUsXG4gICAgICB0b3A6IC1zaXplLFxuICAgICAgd2lkdGg6IHNpemUsXG4gICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRiAzMyUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMDAxKSAxMDAlKScsXG4gICAgfSxcbiAgICBvbkFmdGVyOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogLXNpemUsXG4gICAgICBsZWZ0OiAtc2l6ZSxcbiAgICAgIHJpZ2h0OiAtc2l6ZSxcbiAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkYgMzMlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDAwMSkgMTAwJSknLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgKHsgcGFkZGluZywgYmFja2dyb3VuZCwgY29sb3IsIGFjY2VudCwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KFxuICAoe1xuICAgIHRoZW1lLFxuICAgIHBhZGRpbmdMZWZ0ID0gdGhlbWUuc3BhY2UzLFxuICAgIHBhZGRpbmdSaWdodCA9IHRoZW1lLnNwYWNlMyxcbiAgICBiYWNrZ3JvdW5kID0gdGhlbWUuZGFyazUsXG4gICAgYWNjZW50LFxuICB9KSA9PiAoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZ0xlZnQsXG4gICAgcGFkZGluZ1JpZ2h0LFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGhhc0ZsZXg6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgJyYgYSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5kYXJrMixcbiAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgY29sb3I6IGFjY2VudCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvbkFmdGVyOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAzMyxcbiAgICAgIGhlaWdodDogMzMsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRhcms0LFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMzAsXG4gICAgICByaWdodDogdGhlbWUuc3BhY2UzLFxuICAgIH0sXG4gICAgb25Ib3Zlcjoge1xuICAgICAgb25BZnRlcjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUoXG4gICAgICAgICAgYWNjZW50IHx8IChiYWNrZ3JvdW5kID09PSB0aGVtZS5kYXJrNSA/IHRoZW1lLmNvbG9yIDogYmFja2dyb3VuZClcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpZlNtYWxsRG93bjoge1xuICAgICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMyxcbiAgICAgIHBhZGRpbmdZOiB0aGVtZS5zcGFjZTIsXG4gICAgfSxcbiAgfSksXG4gICh7XG4gICAgdGl0bGUsXG4gICAgc3VidGl0bGUsXG4gICAgY2hpbGRyZW4sXG4gICAgcGFkZGluZyxcbiAgICBiYWNrZ3JvdW5kLFxuICAgIGFjY2VudCxcbiAgICBjb2xvcixcbiAgICBib3JkZXJlZCxcbiAgICBwYWRkaW5nTGVmdCxcbiAgICBwYWRkaW5nUmlnaHQsXG4gICAgLi4ucmVzdCxcbiAgfSkgPT5cbiAgICA8R3JpZC5JdGVtIG1pbmk9ezEyfSB7Li4ucmVzdH0+XG4gICAgICA8SDIgY29sb3I9e2FjY2VudCB8fCBiYWNrZ3JvdW5kfSBib3JkZXJlZD17Ym9yZGVyZWR9IHN1YnRpdGxlPXtzdWJ0aXRsZX0+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvSDI+XG4gICAgICA8Q29udGVudCBwYWRkaW5nPXtwYWRkaW5nfSBhY2NlbnQ9e2FjY2VudH0gY29sb3I9e2NvbG9yfT5cbiAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgIDxDbGVhcmZpeCAvPlxuICAgICAgPC9Db250ZW50PlxuICAgIDwvR3JpZC5JdGVtPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcbiJdfQ==
