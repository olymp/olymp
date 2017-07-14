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
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { FelaDecorator, RouterDecorator } from './decorator';
import { createComponent } from 'react-fela';
var Container = createComponent(function (_a) {
    var customStyle = _a.customStyle;
    return (__assign({ minHeight: '100vh', hasFlex: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }, backgroundColor: '#eeeeee', '> div': {
            width: '100%',
            '> div': {
                hasFlex: {
                    display: 'flex',
                    justifyContent: 'center',
                },
            },
        } }, customStyle));
}, 'div', function (_a) {
    var customStyle = _a.customStyle, p = __rest(_a, ["customStyle"]);
    return Object.keys(p);
});
export default function (title, customStyle) { return function (subtitle, compFn, text) {
    return storiesOf(title, module)
        .addDecorator(withKnobs)
        .addDecorator(function (storyFn) {
        return React.createElement(Container, { customStyle: customStyle || {} }, storyFn());
    })
        .addDecorator(RouterDecorator)
        .addDecorator(FelaDecorator)
        .addWithInfo(subtitle, text, compFn, {
        styles: function (style) { return (__assign({}, style, { info: __assign({}, style.info, { maxWidth: 960, margin: '0 auto', padding: '.5rem' }) })); },
    });
}; };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3N0b3J5Ym9vay9zdG9yaWVzLW9mLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFN0MsSUFBTSxTQUFTLEdBQUcsZUFBZSxDQUMvQixVQUFDLEVBQWU7UUFBYiw0QkFBVztJQUFPLE9BQUEsWUFDbkIsU0FBUyxFQUFFLE9BQU8sRUFDbEIsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLE1BQU07WUFDZixVQUFVLEVBQUUsUUFBUTtZQUNwQixjQUFjLEVBQUUsUUFBUTtTQUN6QixFQUNELGVBQWUsRUFBRSxTQUFTLEVBQzFCLE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsTUFBTTtvQkFDZixjQUFjLEVBQUUsUUFBUTtpQkFDekI7YUFLRjtTQUNGLElBQ0UsV0FBVyxFQUNkO0FBdEJtQixDQXNCbkIsRUFDRixLQUFLLEVBQ0wsVUFBQyxFQUFxQjtJQUFuQixJQUFBLDRCQUFXLEVBQUUsK0JBQUk7SUFBTyxNQUFNLENBQU4sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUFBLENBQzFDLENBQUM7QUFFRixlQUFlLFVBQUMsS0FBSyxFQUFFLFdBQVcsSUFBSyxPQUFBLFVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJO0lBQzVELE9BQUEsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7U0FDckIsWUFBWSxDQUFDLFNBQVMsQ0FBQztTQUN2QixZQUFZLENBQUMsVUFBQSxPQUFPO1FBQ25CLE9BQUEsb0JBQUMsU0FBUyxJQUFDLFdBQVcsRUFBRSxXQUFXLElBQUksRUFBRSxJQUN0QyxPQUFPLEVBQUUsQ0FDQTtJQUZaLENBRVksQ0FDYjtTQUNBLFlBQVksQ0FBQyxlQUFlLENBQUM7U0FDN0IsWUFBWSxDQUFDLGFBQWEsQ0FBQztTQUMzQixXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDbkMsTUFBTSxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsY0FDWixLQUFLLElBQ1IsSUFBSSxlQUNDLEtBQUssQ0FBQyxJQUFJLElBQ2IsUUFBUSxFQUFFLEdBQUcsRUFDYixNQUFNLEVBQUUsUUFBUSxFQUNoQixPQUFPLEVBQUUsT0FBTyxPQUVsQixFQVJlLENBUWY7S0FDSCxDQUFDO0FBbkJKLENBbUJJLEVBcEJpQyxDQW9CakMsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9zdG9yeWJvb2svc3Rvcmllcy1vZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0JztcbmltcG9ydCB7IHdpdGhLbm9icyB9IGZyb20gJ0BzdG9yeWJvb2svYWRkb24ta25vYnMnO1xuaW1wb3J0IHsgRmVsYURlY29yYXRvciwgUm91dGVyRGVjb3JhdG9yIH0gZnJvbSAnLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtZmVsYSc7XG5cbmNvbnN0IENvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgY3VzdG9tU3R5bGUgfSkgPT4gKHtcbiAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyxcbiAgICAnPiBkaXYnOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgJz4gZGl2Jzoge1xuICAgICAgICBoYXNGbGV4OiB7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgLyogcGFkZGluZzogdGhlbWUuc3BhY2U0LFxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNlMyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkZGRkJywgKi9cbiAgICAgIH0sXG4gICAgfSxcbiAgICAuLi5jdXN0b21TdHlsZSxcbiAgfSksXG4gICdkaXYnLFxuICAoeyBjdXN0b21TdHlsZSwgLi4ucCB9KSA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgKHRpdGxlLCBjdXN0b21TdHlsZSkgPT4gKHN1YnRpdGxlLCBjb21wRm4sIHRleHQpID0+XG4gIHN0b3JpZXNPZih0aXRsZSwgbW9kdWxlKVxuICAgIC5hZGREZWNvcmF0b3Iod2l0aEtub2JzKVxuICAgIC5hZGREZWNvcmF0b3Ioc3RvcnlGbiA9PlxuICAgICAgPENvbnRhaW5lciBjdXN0b21TdHlsZT17Y3VzdG9tU3R5bGUgfHwge319PlxuICAgICAgICB7c3RvcnlGbigpfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICAgIC5hZGREZWNvcmF0b3IoUm91dGVyRGVjb3JhdG9yKVxuICAgIC5hZGREZWNvcmF0b3IoRmVsYURlY29yYXRvcilcbiAgICAuYWRkV2l0aEluZm8oc3VidGl0bGUsIHRleHQsIGNvbXBGbiwge1xuICAgICAgc3R5bGVzOiBzdHlsZSA9PiAoe1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgIC4uLnN0eWxlLmluZm8sXG4gICAgICAgICAgbWF4V2lkdGg6IDk2MCxcbiAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgICAgIHBhZGRpbmc6ICcuNXJlbScsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9KTtcbiJdfQ==
