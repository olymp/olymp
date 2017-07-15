var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { IFrame, ContentLoader, PageTransition, createComponent, } from 'olymp-fela';
import { Error404, Page, EditablePage } from './views';
import { renderHelmet } from 'olymp-utils';
import { Link } from 'olymp-router';
import { Menu, Icon, Button as AntButton } from 'antd';
import { lowerFirst, get } from 'lodash';
import { Gateway } from 'react-gateway';
var Button = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        borderRadius: theme.borderRadius,
        opacity: 0.85,
        margin: '0 -15px',
        onHover: {
            opacity: 1,
            backgroundColor: theme.color + " !important",
            color: theme.light + " !important",
        },
    });
}, function (p) { return React.createElement(AntButton, __assign({}, p)); }, function (p) { return Object.keys(p); });
var renderGateway = function (_a, _b) {
    var _c = _a === void 0 ? {} : _a, auth = _c.auth, pathname = _c.pathname, collectionList = _c.collectionList, query = _c.query;
    var _d = _b === void 0 ? {} : _b, binding = _d.binding, bindingId = _d.bindingId;
    if (!auth.user) {
        return null;
    }
    var deviceWidth = query['@deviceWidth'];
    var isEditPage = query['@page'] !== undefined;
    var hasBinding = binding && binding.type;
    return (React.createElement(Gateway, { into: "quick" },
        React.createElement(Menu.SubMenu, { title: React.createElement(Button, { type: "primary" },
                React.createElement(Icon, { type: "plus", style: { marginRight: 0 } })) },
            React.createElement(Menu.Item, { key: "page-plus" },
                React.createElement(Link, { to: {
                        pathname: pathname,
                        query: __assign({}, query, { '@page': 'new' }),
                    } },
                    React.createElement(Icon, { type: "plus", style: { marginRight: 0 } }),
                    " Seite")),
            collectionList.map(function (collection) {
                return React.createElement(Menu.Item, { key: "@" + collection.name.toLowerCase() },
                    React.createElement(Link, { to: {
                            query: (_a = {},
                                _a["@" + collection.name.toLowerCase()] = null,
                                _a),
                        } },
                        React.createElement(Icon, { type: "plus", style: { marginRight: 0 } }),
                        ' ',
                        get(collection, 'decorators.label.value', collection.name)));
                var _a;
            })),
        hasBinding &&
            React.createElement(Menu.Item, { key: "save" },
                React.createElement(Link, { to: {
                        pathname: pathname,
                        query: (_e = {}, _e["@" + lowerFirst(binding.type)] = bindingId, _e),
                    } },
                    React.createElement(Button, { type: "primary" },
                        binding.type,
                        " bearbeiten",
                        ' ',
                        React.createElement(Icon, { type: "arrow-right", style: { marginRight: 0 } })))),
        !isEditPage &&
            !hasBinding &&
            React.createElement(Menu.Item, { key: "@page" },
                React.createElement(Link, { to: {
                        query: { '@page': null, '@deviceWidth': deviceWidth },
                    } },
                    React.createElement(Button, { type: "primary" },
                        "Seite bearbeiten",
                        ' ',
                        React.createElement(Icon, { type: "arrow-right", style: { marginRight: 0 } }))))));
    var _e;
};
export var EditablePageRoute = function (props) {
    var Wrapped = props.Wrapped, flatNavigation = props.flatNavigation, query = props.query, pathname = props.pathname, loading = props.loading;
    var match = flatNavigation.find(function (item) { return pathname === item.pathname; });
    var _a = match || {}, id = _a.id, binding = _a.binding, pageId = _a.pageId, aliasId = _a.aliasId, bindingId = _a.bindingId;
    var deviceWidth = query['@deviceWidth'];
    if (!match) {
        return (React.createElement(ContentLoader, { height: 600, isLoading: loading },
            React.createElement(EditablePage, __assign({}, props, { deviceWidth: deviceWidth, render: function (match) {
                    return React.createElement(IFrame, { disabled: !deviceWidth },
                        React.createElement(Wrapped, __assign({}, props),
                            renderHelmet({
                                name: '404',
                                description: 'Seite wurde nicht gefunden',
                                pathname: pathname,
                            }),
                            React.createElement(Error404, null)));
                } }))));
    }
    return (React.createElement(ContentLoader, { height: 600, isLoading: loading },
        React.createElement(EditablePage, __assign({}, props, { deviceWidth: deviceWidth, id: pageId || aliasId || id, bindingId: bindingId, binding: binding, render: function (children) {
                return React.createElement(IFrame, { disabled: !deviceWidth },
                    React.createElement(Wrapped, __assign({}, props, { match: match }),
                        renderHelmet(match, pathname),
                        renderGateway(props, match),
                        children));
            } }))));
};
export var PageRoute = function (props) {
    var Wrapped = props.Wrapped, flatNavigation = props.flatNavigation, pathname = props.pathname, loading = props.loading;
    var match = flatNavigation.find(function (item) { return pathname === item.pathname; });
    var _a = match || {}, id = _a.id, binding = _a.binding, pageId = _a.pageId, aliasId = _a.aliasId, bindingId = _a.bindingId;
    return (React.createElement(Wrapped, __assign({}, props, { match: match }),
        renderHelmet(match || {}, pathname),
        renderGateway(props, match),
        React.createElement(ContentLoader, { height: 600, isLoading: loading },
            React.createElement(PageTransition, { innerKey: id }, match
                ? React.createElement(Page.WithData, __assign({}, props, { key: id, id: pageId || aliasId || id, bindingId: bindingId, binding: binding }))
                : React.createElement(Error404, null)))));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDNUIsb0JBQUMsYUFBYSxJQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU87WUFDNUMsb0JBQUMsY0FBYyxJQUFDLFFBQVEsRUFBRSxFQUFFLElBQ3pCLEtBQUs7a0JBQ0Ysb0JBQUMsSUFBSSxDQUFDLFFBQVEsZUFDUixLQUFLLElBQ1QsR0FBRyxFQUFFLEVBQUUsRUFDUCxFQUFFLEVBQUUsTUFBTSxJQUFJLE9BQU8sSUFBSSxFQUFFLEVBQzNCLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLE9BQU8sRUFBRSxPQUFPLElBQ2hCO2tCQUNGLG9CQUFDLFFBQVEsT0FBRyxDQUNELENBQ0gsQ0FDUixDQUNYLENBQUM7QUFDSixDQUFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvcGFnZXMvcm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIElGcmFtZSxcbiAgQ29udGVudExvYWRlcixcbiAgUGFnZVRyYW5zaXRpb24sXG4gIGNyZWF0ZUNvbXBvbmVudCxcbn0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBFcnJvcjQwNCwgUGFnZSwgRWRpdGFibGVQYWdlIH0gZnJvbSAnLi92aWV3cyc7XG5pbXBvcnQgeyByZW5kZXJIZWxtZXQgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IE1lbnUsIEljb24sIEJ1dHRvbiBhcyBBbnRCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGxvd2VyRmlyc3QsIGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBHYXRld2F5IH0gZnJvbSAncmVhY3QtZ2F0ZXdheSc7XG5cbmNvbnN0IEJ1dHRvbiA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICBvcGFjaXR5OiAwLjg1LFxuICAgIG1hcmdpbjogJzAgLTE1cHgnLFxuICAgIG9uSG92ZXI6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoZW1lLmNvbG9yfSAhaW1wb3J0YW50YCxcbiAgICAgIGNvbG9yOiBgJHt0aGVtZS5saWdodH0gIWltcG9ydGFudGAsXG4gICAgfSxcbiAgfSksXG4gIHAgPT4gPEFudEJ1dHRvbiB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5jb25zdCByZW5kZXJHYXRld2F5ID0gKFxuICB7IGF1dGgsIHBhdGhuYW1lLCBjb2xsZWN0aW9uTGlzdCwgcXVlcnkgfSA9IHt9LFxuICB7IGJpbmRpbmcsIGJpbmRpbmdJZCB9ID0ge31cbikgPT4ge1xuICBpZiAoIWF1dGgudXNlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGRldmljZVdpZHRoID0gcXVlcnlbJ0BkZXZpY2VXaWR0aCddO1xuICBjb25zdCBpc0VkaXRQYWdlID0gcXVlcnlbJ0BwYWdlJ10gIT09IHVuZGVmaW5lZDtcbiAgY29uc3QgaGFzQmluZGluZyA9IGJpbmRpbmcgJiYgYmluZGluZy50eXBlO1xuICByZXR1cm4gKFxuICAgIDxHYXRld2F5IGludG89XCJxdWlja1wiPlxuICAgICAgPE1lbnUuU3ViTWVudVxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgPEljb24gdHlwZT1cInBsdXNcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMCB9fSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwicGFnZS1wbHVzXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICBxdWVyeTogeyAuLi5xdWVyeSwgJ0BwYWdlJzogJ25ldycgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gdHlwZT1cInBsdXNcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMCB9fSAvPiBTZWl0ZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIHtjb2xsZWN0aW9uTGlzdC5tYXAoY29sbGVjdGlvbiA9PlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtgQCR7Y29sbGVjdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICBbYEAke2NvbGxlY3Rpb24ubmFtZS50b0xvd2VyQ2FzZSgpfWBdOiBudWxsLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJwbHVzXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX0gLz57JyAnfVxuICAgICAgICAgICAgICB7Z2V0KGNvbGxlY3Rpb24sICdkZWNvcmF0b3JzLmxhYmVsLnZhbHVlJywgY29sbGVjdGlvbi5uYW1lKX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgKX1cbiAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAge2hhc0JpbmRpbmcgJiZcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJzYXZlXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICBxdWVyeTogeyBbYEAke2xvd2VyRmlyc3QoYmluZGluZy50eXBlKX1gXTogYmluZGluZ0lkIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAge2JpbmRpbmcudHlwZX0gYmVhcmJlaXRlbnsnICd9XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJhcnJvdy1yaWdodFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAwIH19IC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPn1cbiAgICAgIHshaXNFZGl0UGFnZSAmJlxuICAgICAgICAhaGFzQmluZGluZyAmJlxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIkBwYWdlXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgIHF1ZXJ5OiB7ICdAcGFnZSc6IG51bGwsICdAZGV2aWNlV2lkdGgnOiBkZXZpY2VXaWR0aCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgIFNlaXRlIGJlYXJiZWl0ZW57JyAnfVxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiYXJyb3ctcmlnaHRcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMCB9fSAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnUuSXRlbT59XG4gICAgPC9HYXRld2F5PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBFZGl0YWJsZVBhZ2VSb3V0ZSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBXcmFwcGVkLCBmbGF0TmF2aWdhdGlvbiwgcXVlcnksIHBhdGhuYW1lLCBsb2FkaW5nIH0gPSBwcm9wcztcbiAgY29uc3QgbWF0Y2ggPSBmbGF0TmF2aWdhdGlvbi5maW5kKGl0ZW0gPT4gcGF0aG5hbWUgPT09IGl0ZW0ucGF0aG5hbWUpO1xuICBjb25zdCB7IGlkLCBiaW5kaW5nLCBwYWdlSWQsIGFsaWFzSWQsIGJpbmRpbmdJZCB9ID0gbWF0Y2ggfHwge307XG4gIGNvbnN0IGRldmljZVdpZHRoID0gcXVlcnlbJ0BkZXZpY2VXaWR0aCddO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRMb2FkZXIgaGVpZ2h0PXs2MDB9IGlzTG9hZGluZz17bG9hZGluZ30+XG4gICAgICAgIDxFZGl0YWJsZVBhZ2VcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgZGV2aWNlV2lkdGg9e2RldmljZVdpZHRofVxuICAgICAgICAgIHJlbmRlcj17bWF0Y2ggPT5cbiAgICAgICAgICAgIDxJRnJhbWUgZGlzYWJsZWQ9eyFkZXZpY2VXaWR0aH0+XG4gICAgICAgICAgICAgIDxXcmFwcGVkIHsuLi5wcm9wc30+XG4gICAgICAgICAgICAgICAge3JlbmRlckhlbG1ldCh7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnNDA0JyxcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2VpdGUgd3VyZGUgbmljaHQgZ2VmdW5kZW4nLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPEVycm9yNDA0IC8+XG4gICAgICAgICAgICAgIDwvV3JhcHBlZD5cbiAgICAgICAgICAgIDwvSUZyYW1lPn1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGVudExvYWRlcj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGVudExvYWRlciBoZWlnaHQ9ezYwMH0gaXNMb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgIDxFZGl0YWJsZVBhZ2VcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBkZXZpY2VXaWR0aD17ZGV2aWNlV2lkdGh9XG4gICAgICAgIGlkPXtwYWdlSWQgfHwgYWxpYXNJZCB8fCBpZH1cbiAgICAgICAgYmluZGluZ0lkPXtiaW5kaW5nSWR9XG4gICAgICAgIGJpbmRpbmc9e2JpbmRpbmd9XG4gICAgICAgIHJlbmRlcj17Y2hpbGRyZW4gPT5cbiAgICAgICAgICA8SUZyYW1lIGRpc2FibGVkPXshZGV2aWNlV2lkdGh9PlxuICAgICAgICAgICAgPFdyYXBwZWQgey4uLnByb3BzfSBtYXRjaD17bWF0Y2h9PlxuICAgICAgICAgICAgICB7cmVuZGVySGVsbWV0KG1hdGNoLCBwYXRobmFtZSl9XG4gICAgICAgICAgICAgIHtyZW5kZXJHYXRld2F5KHByb3BzLCBtYXRjaCl9XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvV3JhcHBlZD5cbiAgICAgICAgICA8L0lGcmFtZT59XG4gICAgICAvPlxuICAgIDwvQ29udGVudExvYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdlUm91dGUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgV3JhcHBlZCwgZmxhdE5hdmlnYXRpb24sIHBhdGhuYW1lLCBsb2FkaW5nIH0gPSBwcm9wcztcbiAgY29uc3QgbWF0Y2ggPSBmbGF0TmF2aWdhdGlvbi5maW5kKGl0ZW0gPT4gcGF0aG5hbWUgPT09IGl0ZW0ucGF0aG5hbWUpO1xuICBjb25zdCB7IGlkLCBiaW5kaW5nLCBwYWdlSWQsIGFsaWFzSWQsIGJpbmRpbmdJZCB9ID0gbWF0Y2ggfHwge307XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZWQgey4uLnByb3BzfSBtYXRjaD17bWF0Y2h9PlxuICAgICAge3JlbmRlckhlbG1ldChtYXRjaCB8fCB7fSwgcGF0aG5hbWUpfVxuICAgICAge3JlbmRlckdhdGV3YXkocHJvcHMsIG1hdGNoKX1cbiAgICAgIDxDb250ZW50TG9hZGVyIGhlaWdodD17NjAwfSBpc0xvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICA8UGFnZVRyYW5zaXRpb24gaW5uZXJLZXk9e2lkfT5cbiAgICAgICAgICB7bWF0Y2hcbiAgICAgICAgICAgID8gPFBhZ2UuV2l0aERhdGFcbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICBpZD17cGFnZUlkIHx8IGFsaWFzSWQgfHwgaWR9XG4gICAgICAgICAgICAgICAgYmluZGluZ0lkPXtiaW5kaW5nSWR9XG4gICAgICAgICAgICAgICAgYmluZGluZz17YmluZGluZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDogPEVycm9yNDA0IC8+fVxuICAgICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxuICAgICAgPC9Db250ZW50TG9hZGVyPlxuICAgIDwvV3JhcHBlZD5cbiAgKTtcbn07XG4iXX0=
