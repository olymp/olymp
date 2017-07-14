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
import { createComponent } from 'react-fela';
import { border } from 'olymp-fela';
export default createComponent(function (_a) {
    var theme = _a.theme, fill = _a.fill, vertically = _a.vertically, right = _a.right;
    return ({
        float: right ? 'right' : 'left',
        width: fill && '100%',
        height: !vertically && '100%',
        minWidth: vertically ? '100%' : 'auto',
        marginLeft: right && 'auto',
        borderTop: vertically && border(theme, theme.dark4),
        ifMini: {
            float: 'none',
            width: '100%',
            borderRight: 0,
            borderTop: border(theme, theme.dark4),
            clear: 'both',
        },
        ifMediumUp: {
            display: vertically ? 'none' : 'block',
            hasFlex: {
                display: vertically ? 'none' : 'flex',
                flex: fill && '1 1 auto',
                alignItems: 'stretch',
                flexDirection: vertically ? 'column' : 'row',
            },
        },
    });
}, function (_a) {
    var className = _a.className, pages = _a.pages, children = _a.children, props = __rest(_a, ["className", "pages", "children"]);
    return React.createElement("div", { className: className },
        pages.map(function (_a, i) {
            var childPages = _a.children, page = __rest(_a, ["children"]);
            return props.renderItem(__assign({}, page, { title: page.name, pages: childPages, key: page.id || i }, props));
        }),
        Children.map(children, function (child) { return cloneElement(child, props); }));
}, function (p) { return Object.keys(p); });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvbmF2YmFyL3N1Yi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXBDLGVBQWUsZUFBZSxDQUM1QixVQUFDLEVBQWtDO1FBQWhDLGdCQUFLLEVBQUUsY0FBSSxFQUFFLDBCQUFVLEVBQUUsZ0JBQUs7SUFBTyxPQUFBLENBQUM7UUFDdkMsS0FBSyxFQUFFLEtBQUssR0FBRyxPQUFPLEdBQUcsTUFBTTtRQUMvQixLQUFLLEVBQUUsSUFBSSxJQUFJLE1BQU07UUFDckIsTUFBTSxFQUFFLENBQUMsVUFBVSxJQUFJLE1BQU07UUFDN0IsUUFBUSxFQUFFLFVBQVUsR0FBRyxNQUFNLEdBQUcsTUFBTTtRQUN0QyxVQUFVLEVBQUUsS0FBSyxJQUFJLE1BQU07UUFDM0IsU0FBUyxFQUFFLFVBQVUsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbkQsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLE1BQU07WUFDYixLQUFLLEVBQUUsTUFBTTtZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNyQyxLQUFLLEVBQUUsTUFBTTtTQUNkO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsT0FBTyxFQUFFLFVBQVUsR0FBRyxNQUFNLEdBQUcsT0FBTztZQUN0QyxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFVBQVUsR0FBRyxNQUFNLEdBQUcsTUFBTTtnQkFDckMsSUFBSSxFQUFFLElBQUksSUFBSSxVQUFVO2dCQUN4QixVQUFVLEVBQUUsU0FBUztnQkFDckIsYUFBYSxFQUFFLFVBQVUsR0FBRyxRQUFRLEdBQUcsS0FBSzthQUM3QztTQUNGO0tBQ0YsQ0FBQztBQXZCc0MsQ0F1QnRDLEVBQ0YsVUFBQyxFQUF3QztJQUF0QyxJQUFBLHdCQUFTLEVBQUUsZ0JBQUssRUFBRSxzQkFBUSxFQUFFLHNEQUFRO0lBQ3JDLE1BQU0sQ0FBTiw2QkFBSyxTQUFTLEVBQUUsU0FBUztRQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBaUMsRUFBRSxDQUFDO1lBQWxDLElBQUEsd0JBQW9CLEVBQUUsK0JBQU87WUFDekMsTUFBTSxDQUFOLEtBQUssQ0FBQyxVQUFVLGNBQ1gsSUFBSSxJQUNQLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUNoQixLQUFLLEVBQUUsVUFBVSxFQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQ2QsS0FBSyxFQUNSLENBQUE7U0FBQSxDQUNIO1FBRUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQ3hELENBQUE7Q0FBQSxFQUNSLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQ3BCLENBQUMiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9uYXZiYXIvc3ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IGJvcmRlciB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lLCBmaWxsLCB2ZXJ0aWNhbGx5LCByaWdodCB9KSA9PiAoe1xuICAgIGZsb2F0OiByaWdodCA/ICdyaWdodCcgOiAnbGVmdCcsXG4gICAgd2lkdGg6IGZpbGwgJiYgJzEwMCUnLFxuICAgIGhlaWdodDogIXZlcnRpY2FsbHkgJiYgJzEwMCUnLFxuICAgIG1pbldpZHRoOiB2ZXJ0aWNhbGx5ID8gJzEwMCUnIDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQ6IHJpZ2h0ICYmICdhdXRvJyxcbiAgICBib3JkZXJUb3A6IHZlcnRpY2FsbHkgJiYgYm9yZGVyKHRoZW1lLCB0aGVtZS5kYXJrNCksXG4gICAgaWZNaW5pOiB7XG4gICAgICBmbG9hdDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvcmRlclJpZ2h0OiAwLFxuICAgICAgYm9yZGVyVG9wOiBib3JkZXIodGhlbWUsIHRoZW1lLmRhcms0KSxcbiAgICAgIGNsZWFyOiAnYm90aCcsXG4gICAgfSxcbiAgICBpZk1lZGl1bVVwOiB7XG4gICAgICBkaXNwbGF5OiB2ZXJ0aWNhbGx5ID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAgIGhhc0ZsZXg6IHtcbiAgICAgICAgZGlzcGxheTogdmVydGljYWxseSA/ICdub25lJyA6ICdmbGV4JyxcbiAgICAgICAgZmxleDogZmlsbCAmJiAnMSAxIGF1dG8nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IHZlcnRpY2FsbHkgPyAnY29sdW1uJyA6ICdyb3cnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgKHsgY2xhc3NOYW1lLCBwYWdlcywgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7cGFnZXMubWFwKCh7IGNoaWxkcmVuOiBjaGlsZFBhZ2VzLCAuLi5wYWdlIH0sIGkpID0+XG4gICAgICAgIHByb3BzLnJlbmRlckl0ZW0oe1xuICAgICAgICAgIC4uLnBhZ2UsXG4gICAgICAgICAgdGl0bGU6IHBhZ2UubmFtZSxcbiAgICAgICAgICBwYWdlczogY2hpbGRQYWdlcyxcbiAgICAgICAgICBrZXk6IHBhZ2UuaWQgfHwgaSxcbiAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgfSlcbiAgICAgICl9XG5cbiAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IGNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpKX1cbiAgICA8L2Rpdj4sXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG4iXX0=
