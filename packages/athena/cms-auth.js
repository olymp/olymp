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
import { AltSwitch, AltRoute } from 'olymp-router';
import { AuthModals, AuthUsers } from 'olymp-auth';
import { GatewayDest } from 'react-gateway';
import { EditablePageRoute, PageRoute } from 'olymp-pages';
import { CloudinaryRoute, Lightbox } from 'olymp-cloudinary';
import { CollectionRoute } from 'olymp-collection';
import { AnalyticsRoutes } from 'olymp-google';
import { createComponent, getAntStyle } from 'olymp-fela';
import NavigationVertical from './navigation';
import { SettingsRoute } from './settings';
import { TemplateRoute } from './templates';
var Container = createComponent(function (_a) {
    var theme = _a.theme;
    return (__assign({}, getAntStyle({ theme: theme }), { hasFlex: {
            display: 'flex',
            flexDirection: 'column',
        }, height: '100%', backgroundColor: '#f5f5f5', '> :last-child': {
            hasFlex: {
                flex: '1 1 0%',
            },
            height: '100%',
            overflowY: 'auto',
        } }));
}, 'div', function (_a) {
    var deviceWidth = _a.deviceWidth, p = __rest(_a, ["deviceWidth"]);
    return Object.keys(p);
});
var SwitchContainer = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        hasFlex: {
            display: 'flex',
            flexDirection: 'column',
        },
    });
}, 'div', function (p) { return Object.keys(p); });
export default function (props) {
    var query = props.query, collectionList = props.collectionList, location = props.location, navigation = props.navigation, Wrapped = props.wrapper;
    var collection = collectionList.filter(function (_a) {
        var name = _a.name;
        return query["@" + name.toLowerCase()] !== undefined;
    })[0];
    return (React.createElement(Container, null,
        React.createElement(Lightbox, null),
        React.createElement(GatewayDest, { name: "modal" }),
        React.createElement(AuthModals, null),
        React.createElement(NavigationVertical, __assign({ collectionList: collectionList, deviceWidth: query['@deviceWidth'] }, location, { location: location })),
        React.createElement(SwitchContainer, null,
            React.createElement(AltSwitch, null,
                React.createElement(AltRoute, { match: query['@template'] !== undefined, render: function () { return React.createElement(TemplateRoute, __assign({}, props)); } }),
                React.createElement(AltRoute, { match: !!collection, render: function () {
                        return React.createElement(CollectionRoute, __assign({}, props, { typeName: collection && collection.name, Wrapped: Wrapped }));
                    } }),
                React.createElement(AltRoute, { match: query['@page'] !== undefined, render: function () { return React.createElement(EditablePageRoute, __assign({}, props, { Wrapped: Wrapped })); } }),
                React.createElement(AltRoute, { match: query['@media'] !== undefined, render: function () { return React.createElement(CloudinaryRoute, __assign({}, props)); } }),
                React.createElement(AltRoute, { match: query['@settings'] !== undefined, render: function () { return React.createElement(SettingsRoute, __assign({}, props)); } }),
                React.createElement(AnalyticsRoutes, { match: query['@analytics'] !== undefined, render: function () { return React.createElement(AuthUsers, __assign({}, props)); } }),
                React.createElement(AltRoute, { match: query['@users'] !== undefined, render: function () { return React.createElement(AuthUsers, __assign({}, props)); } }),
                React.createElement(AltRoute, { render: function (rest) {
                        return React.createElement(PageRoute, __assign({}, rest, props, { key: location.key, navigation: navigation, Wrapped: Wrapped }));
                    } })))));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F0aGVuYS9jbXMtYXV0aC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDMUQsT0FBTyxrQkFBa0IsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVDLElBQU0sU0FBUyxHQUFHLGVBQWUsQ0FDL0IsVUFBQyxFQUFTO1FBQVAsZ0JBQUs7SUFBTyxPQUFBLGNBQ1YsV0FBVyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxJQUN6QixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsTUFBTTtZQUNmLGFBQWEsRUFBRSxRQUFRO1NBQ3hCLEVBQ0QsTUFBTSxFQUFFLE1BQU0sRUFDZCxlQUFlLEVBQUUsU0FBUyxFQUMxQixlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNELE1BQU0sRUFB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QUFLLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUNwQyxNQUFNLEVBQUUsY0FBTSxPQUFBLG9CQUFDLFNBQVMsZUFBSyxLQUFLLEVBQUksRUFBeEIsQ0FBd0IsR0FDdEM7Z0JBS0Ysb0JBQUMsUUFBUSxJQUNQLE1BQU0sRUFBRSxVQUFBLElBQUk7d0JBQ1YsT0FBQSxvQkFBQyxTQUFTLGVBQ0osSUFBSSxFQUNKLEtBQUssSUFDVCxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFDakIsVUFBVSxFQUFFLFVBQVUsRUFDdEIsT0FBTyxFQUFFLE9BQU8sSUFDaEI7b0JBTkYsQ0FNRSxHQUNKLENBQ1EsQ0FDSSxDQUNSLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9hdGhlbmEvY21zLWF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWx0U3dpdGNoLCBBbHRSb3V0ZSB9IGZyb20gJ29seW1wLXJvdXRlcic7XG5pbXBvcnQgeyBBdXRoTW9kYWxzLCBBdXRoVXNlcnMgfSBmcm9tICdvbHltcC1hdXRoJztcbmltcG9ydCB7IEdhdGV3YXlEZXN0IH0gZnJvbSAncmVhY3QtZ2F0ZXdheSc7XG5pbXBvcnQgeyBFZGl0YWJsZVBhZ2VSb3V0ZSwgUGFnZVJvdXRlIH0gZnJvbSAnb2x5bXAtcGFnZXMnO1xuaW1wb3J0IHsgQ2xvdWRpbmFyeVJvdXRlLCBMaWdodGJveCB9IGZyb20gJ29seW1wLWNsb3VkaW5hcnknO1xuaW1wb3J0IHsgQ29sbGVjdGlvblJvdXRlIH0gZnJvbSAnb2x5bXAtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBBbmFseXRpY3NSb3V0ZXMgfSBmcm9tICdvbHltcC1nb29nbGUnO1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBnZXRBbnRTdHlsZSB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IE5hdmlnYXRpb25WZXJ0aWNhbCBmcm9tICcuL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgU2V0dGluZ3NSb3V0ZSB9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgVGVtcGxhdGVSb3V0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcblxuY29uc3QgQ29udGFpbmVyID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIC4uLmdldEFudFN0eWxlKHsgdGhlbWUgfSksXG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JyxcbiAgICAnPiA6bGFzdC1jaGlsZCc6IHtcbiAgICAgIGhhc0ZsZXg6IHtcbiAgICAgICAgZmxleDogJzEgMSAwJScsXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gICh7IGRldmljZVdpZHRoLCAuLi5wIH0pID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBTd2l0Y2hDb250YWluZXIgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIGNvbnN0IHtcbiAgICBxdWVyeSxcbiAgICBjb2xsZWN0aW9uTGlzdCxcbiAgICBsb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uLFxuICAgIHdyYXBwZXI6IFdyYXBwZWQsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25MaXN0LmZpbHRlcihcbiAgICAoeyBuYW1lIH0pID0+IHF1ZXJ5W2BAJHtuYW1lLnRvTG93ZXJDYXNlKCl9YF0gIT09IHVuZGVmaW5lZFxuICApWzBdO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxMaWdodGJveCAvPlxuICAgICAgPEdhdGV3YXlEZXN0IG5hbWU9XCJtb2RhbFwiIC8+XG4gICAgICA8QXV0aE1vZGFscyAvPlxuICAgICAgPE5hdmlnYXRpb25WZXJ0aWNhbFxuICAgICAgICBjb2xsZWN0aW9uTGlzdD17Y29sbGVjdGlvbkxpc3R9XG4gICAgICAgIGRldmljZVdpZHRoPXtxdWVyeVsnQGRldmljZVdpZHRoJ119XG4gICAgICAgIHsuLi5sb2NhdGlvbn1cbiAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgLz5cbiAgICAgIDxTd2l0Y2hDb250YWluZXI+XG4gICAgICAgIDxBbHRTd2l0Y2g+XG4gICAgICAgICAgPEFsdFJvdXRlXG4gICAgICAgICAgICBtYXRjaD17cXVlcnlbJ0B0ZW1wbGF0ZSddICE9PSB1bmRlZmluZWR9XG4gICAgICAgICAgICByZW5kZXI9eygpID0+IDxUZW1wbGF0ZVJvdXRlIHsuLi5wcm9wc30gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWx0Um91dGVcbiAgICAgICAgICAgIG1hdGNoPXshIWNvbGxlY3Rpb259XG4gICAgICAgICAgICByZW5kZXI9eygpID0+XG4gICAgICAgICAgICAgIDxDb2xsZWN0aW9uUm91dGVcbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgdHlwZU5hbWU9e2NvbGxlY3Rpb24gJiYgY29sbGVjdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgIFdyYXBwZWQ9e1dyYXBwZWR9XG4gICAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFsdFJvdXRlXG4gICAgICAgICAgICBtYXRjaD17cXVlcnlbJ0BwYWdlJ10gIT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gPEVkaXRhYmxlUGFnZVJvdXRlIHsuLi5wcm9wc30gV3JhcHBlZD17V3JhcHBlZH0gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWx0Um91dGVcbiAgICAgICAgICAgIG1hdGNoPXtxdWVyeVsnQG1lZGlhJ10gIT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gPENsb3VkaW5hcnlSb3V0ZSB7Li4ucHJvcHN9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIDxBbHRSb3V0ZSBtYXRjaD17cXVlcnlbYEBzdGF0c2BdICE9PSB1bmRlZmluZWR9IHJlbmRlcj17KCkgPT4gPEFuYWx5dGljc1JvdXRlIHsuLi5wcm9wc30gLz59IC8+Ki99XG4gICAgICAgICAgPEFsdFJvdXRlXG4gICAgICAgICAgICBtYXRjaD17cXVlcnlbJ0BzZXR0aW5ncyddICE9PSB1bmRlZmluZWR9XG4gICAgICAgICAgICByZW5kZXI9eygpID0+IDxTZXR0aW5nc1JvdXRlIHsuLi5wcm9wc30gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QW5hbHl0aWNzUm91dGVzXG4gICAgICAgICAgICBtYXRjaD17cXVlcnlbJ0BhbmFseXRpY3MnXSAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiA8QXV0aFVzZXJzIHsuLi5wcm9wc30gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWx0Um91dGVcbiAgICAgICAgICAgIG1hdGNoPXtxdWVyeVsnQHVzZXJzJ10gIT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gPEF1dGhVc2VycyB7Li4ucHJvcHN9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIDxBbHRSb3V0ZVxuICAgICAgICAgICAgbWF0Y2g9e3F1ZXJ5WydAdXNlciddICE9PSB1bmRlZmluZWR9XG4gICAgICAgICAgICByZW5kZXI9eygpID0+IDxBdXRoVXNlciB7Li4ucHJvcHN9IC8+fVxuICAgICAgICAgIC8+Ki99XG4gICAgICAgICAgPEFsdFJvdXRlXG4gICAgICAgICAgICByZW5kZXI9e3Jlc3QgPT5cbiAgICAgICAgICAgICAgPFBhZ2VSb3V0ZVxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgICBrZXk9e2xvY2F0aW9uLmtleX1cbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgIFdyYXBwZWQ9e1dyYXBwZWR9XG4gICAgICAgICAgICAgIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQWx0U3dpdGNoPlxuICAgICAgPC9Td2l0Y2hDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuIl19
