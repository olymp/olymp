var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
import React, { Component } from 'react';
import { withScroll, withApollo } from 'olymp-utils';
import { withRouter } from 'olymp-router';
import { Navbar, Layout, Container, createComponent, } from 'olymp-fela';
import { prefetchPage } from 'olymp-pages';
import Logo from './logo';
export var App = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        backgroundColor: '#FFFFFF',
        fontFamily: 'Oxygen, sans-serif',
        fontSize: '105%',
        lineHeight: 1.75,
        '& h1, h2, h3, h4, h5, h6': {
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 200,
            lineHeight: 1.5,
        },
        ifMediumUp: {
            '& a[href^="tel"]:link, a[href^="tel"]:visited, a[href^="tel"]:hover, a[href^="fax"]:link, a[href^="fax"]:visited, a[href^="fax"]:hover': {
                color: theme.dark2,
                cursor: 'text',
            },
        },
        ifSmallDown: {
            '& h1': {
                fontSize: theme.fontSizeH1,
            },
            '& h2': {
                fontSize: theme.fontSizeH2,
            },
            '& h3': {
                fontSize: theme.fontSizeH3,
            },
            '& h4': {
                fontSize: theme.fontSizeH4,
            },
            '& h5': {
                fontSize: theme.fontSizeH5,
            },
            '& h6': {
                fontSize: theme.fontSizeH6,
            },
        },
    });
}, function (p) { return React.createElement(Layout, __assign({ fullHeight: true }, p)); }, function (p) { return Object.keys(p); });
export var Header = withScroll(createComponent(function (_a) {
    var theme = _a.theme, scrollTop = _a.scrollTop;
    return ({
        ifSmallDown: {
            paddingY: theme.space2,
        },
        boxShadow: scrollTop && theme.boxShadow,
        transition: 'box-shadow 0.3s ease-in-out',
    });
}, function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement(Layout.Header, { className: className },
        React.createElement(Container, null, children));
}, function (p) { return Object.keys(p); }));
var GzLayout = (function (_super) {
    __extends(GzLayout, _super);
    function GzLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefetch = function (_a) {
            var id = _a.id;
            prefetchPage(_this.props.client, id);
        };
        return _this;
    }
    GzLayout.prototype.render = function () {
        var _a = this.props, pages = _a.pages, color = _a.color, title = _a.title, text = _a.text, location = _a.location, links = _a.links, children = _a.children, router = _a.router, query = _a.query, pathname = _a.pathname, auth = _a.auth, rest = __rest(_a, ["pages", "color", "title", "text", "location", "links", "children", "router", "query", "pathname", "auth"]);
        var nav = (pages.map(function (x) { return x.children; })[0] || [])
            .filter(function (x) { return x.slug !== '/'; });
        var footer = (pages.map(function (x) { return x.children; })[1] || []).slice();
        if (!auth.user) {
            footer.push({
                name: 'Einloggen',
                pathname: location.pathname + "?login",
            });
        }
        var open = query.nav === null;
        return (React.createElement(App, { affix: true },
            React.createElement(Header, null,
                React.createElement(Navbar, { pages: nav, brand: React.createElement(Logo, { color: color, title: title, text: text }), full: true, right: true, mega: function (_a) {
                        var mega = _a.mega, pages = _a.pages;
                        return pages &&
                            pages.length &&
                            pages[0].children &&
                            pages[0].children.length;
                    }, onItemMouseEnter: this.prefetch, toggleMenu: function () {
                        return router.push({
                            pathname: pathname,
                            query: __assign({}, query, { nav: !open ? null : undefined }),
                        });
                    }, isOpen: open })),
            React.createElement(Layout.Body, null,
                React.createElement(Layout, null,
                    React.createElement(Layout.Body, null, children),
                    React.createElement(Layout.Footer, { container: true },
                        React.createElement(Navbar, { full: true },
                            React.createElement(Navbar.Nav, { pages: [
                                    {
                                        name: "GesundheitsZentrum Kelkheim. Copyright " + new Date().getFullYear(),
                                    },
                                ] }),
                            React.createElement(Navbar.Nav, { pages: footer, right: true })))))));
    };
    GzLayout.defaultProps = {
        pages: [],
    };
    GzLayout = __decorate([
        withApollo,
        withRouter
    ], GzLayout);
    return GzLayout;
}(Component));
export default GzLayout;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F0aGVuYS1nei9jb21wb25lbnRzL2xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGNBQWMsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEVBQ1QsZUFBZSxHQUNoQixNQUFNLFlBQVksQ0FBQztBQUNwQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUUxQixNQUFNLENBQUMsSUFBTSxHQUFHLEdBQUcsZUFBZSxDQUNoQyxVQUFDLEVBQVM7UUFBUCxnQkFBSztJQUFPLE9BQUEsQ0FBQztRQUNkLGVBQWUsRUFBRSxTQUFTO1FBQzFCLFVBQVUsRUFBRSxvQkFBb0I7UUFDaEMsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsMEJBQTBCLEVBQUU7WUFDMUIsVUFBVSxFQUFFLHFCQUFxQjtZQUNqQyxVQUFVLEVBQUUsR0FBRztZQUNmLFVBQVUsRUFBRSxHQUFHO1NBQ2hCO1FBQ0QsVUFBVSxFQUFFO1lBQ1Ysd0lBQXdJLEVBQUU7Z0JBQ3hJLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDbEIsTUFBTSxFQUFFLE1BQU07YUFDZjtTQUNGO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVTthQUMzQjtZQUNELE1BQU0sRUFBRTtnQkFDTixRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVU7YUFDM0I7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sUUFB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WSxHQUFHO1FBQ3BCLEtBQUssRUFBRSxFQUFFO0tBQ1YsQ0FBQztJQUhpQixRQUFRO1FBRjVCLFVBQVU7UUFDVixVQUFVO09BQ1UsUUFBUSxDQThFNUI7SUFBRCxlQUFDO0NBOUVELEFBOEVDLENBOUVxQyxTQUFTLEdBOEU5QztlQTlFb0IsUUFBUSIsImZpbGUiOiJwYWNrYWdlcy9hdGhlbmEtZ3ovY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFNjcm9sbCwgd2l0aEFwb2xsbyB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIFNjcm9sbFRvVG9wIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7XG4gIE5hdmJhcixcbiAgTGF5b3V0LFxuICBDb250YWluZXIsXG4gIGNyZWF0ZUNvbXBvbmVudCxcbn0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBwcmVmZXRjaFBhZ2UgfSBmcm9tICdvbHltcC1wYWdlcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nO1xuXG5leHBvcnQgY29uc3QgQXBwID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICAgIGZvbnRGYW1pbHk6ICdPeHlnZW4sIHNhbnMtc2VyaWYnLFxuICAgIGZvbnRTaXplOiAnMTA1JScsXG4gICAgbGluZUhlaWdodDogMS43NSxcbiAgICAnJiBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2Jzoge1xuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXksIHNhbnMtc2VyaWYnLFxuICAgICAgZm9udFdlaWdodDogMjAwLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgIH0sXG4gICAgaWZNZWRpdW1VcDoge1xuICAgICAgJyYgYVtocmVmXj1cInRlbFwiXTpsaW5rLCBhW2hyZWZePVwidGVsXCJdOnZpc2l0ZWQsIGFbaHJlZl49XCJ0ZWxcIl06aG92ZXIsIGFbaHJlZl49XCJmYXhcIl06bGluaywgYVtocmVmXj1cImZheFwiXTp2aXNpdGVkLCBhW2hyZWZePVwiZmF4XCJdOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuZGFyazIsXG4gICAgICAgIGN1cnNvcjogJ3RleHQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGlmU21hbGxEb3duOiB7XG4gICAgICAnJiBoMSc6IHtcbiAgICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplSDEsXG4gICAgICB9LFxuICAgICAgJyYgaDInOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZUgyLFxuICAgICAgfSxcbiAgICAgICcmIGgzJzoge1xuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVIMyxcbiAgICAgIH0sXG4gICAgICAnJiBoNCc6IHtcbiAgICAgICAgZm9udFNpemU6IHRoZW1lLmZvbnRTaXplSDQsXG4gICAgICB9LFxuICAgICAgJyYgaDUnOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGVtZS5mb250U2l6ZUg1LFxuICAgICAgfSxcbiAgICAgICcmIGg2Jzoge1xuICAgICAgICBmb250U2l6ZTogdGhlbWUuZm9udFNpemVINixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIHAgPT4gPExheW91dCBmdWxsSGVpZ2h0IHsuLi5wfSAvPlxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gd2l0aFNjcm9sbChcbiAgY3JlYXRlQ29tcG9uZW50KFxuICAgICh7IHRoZW1lLCBzY3JvbGxUb3AgfSkgPT4gKHtcbiAgICAgIC8vIHBhZGRpbmdZOiB0aGVtZS5zcGFjZTMsXG4gICAgICBpZlNtYWxsRG93bjoge1xuICAgICAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UyLFxuICAgICAgfSxcbiAgICAgIGJveFNoYWRvdzogc2Nyb2xsVG9wICYmIHRoZW1lLmJveFNoYWRvdyxcbiAgICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IDAuM3MgZWFzZS1pbi1vdXQnLFxuICAgIH0pLFxuICAgICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT5cbiAgICAgIDxMYXlvdXQuSGVhZGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9MYXlvdXQuSGVhZGVyPixcbiAgICBwID0+IE9iamVjdC5rZXlzKHApXG4gIClcbik7XG5cbkB3aXRoQXBvbGxvXG5Ad2l0aFJvdXRlclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3pMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBhZ2VzOiBbXSxcbiAgfTtcbiAgcHJlZmV0Y2ggPSAoeyBpZCB9KSA9PiB7XG4gICAgcHJlZmV0Y2hQYWdlKHRoaXMucHJvcHMuY2xpZW50LCBpZCk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYWdlcyxcbiAgICAgIGNvbG9yLFxuICAgICAgdGl0bGUsXG4gICAgICB0ZXh0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICBsaW5rcyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgcm91dGVyLFxuICAgICAgcXVlcnksXG4gICAgICBwYXRobmFtZSxcbiAgICAgIGF1dGgsXG4gICAgICAuLi5yZXN0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG5hdiA9IChwYWdlcy5tYXAoeCA9PiB4LmNoaWxkcmVuKVswXSB8fCBbXSlcbiAgICAgIC5maWx0ZXIoeCA9PiB4LnNsdWcgIT09ICcvJyk7XG4gICAgY29uc3QgZm9vdGVyID0gWy4uLihwYWdlcy5tYXAoeCA9PiB4LmNoaWxkcmVuKVsxXSB8fCBbXSldO1xuICAgIGlmICghYXV0aC51c2VyKSB7XG4gICAgICBmb290ZXIucHVzaCh7XG4gICAgICAgIG5hbWU6ICdFaW5sb2dnZW4nLFxuICAgICAgICBwYXRobmFtZTogYCR7bG9jYXRpb24ucGF0aG5hbWV9P2xvZ2luYCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBvcGVuID0gcXVlcnkubmF2ID09PSBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHAgYWZmaXg+XG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgPE5hdmJhclxuICAgICAgICAgICAgcGFnZXM9e25hdn1cbiAgICAgICAgICAgIGJyYW5kPXs8TG9nbyBjb2xvcj17Y29sb3J9IHRpdGxlPXt0aXRsZX0gdGV4dD17dGV4dH0gLz59XG4gICAgICAgICAgICBmdWxsXG4gICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgbWVnYT17KHsgbWVnYSwgcGFnZXMgfSkgPT5cbiAgICAgICAgICAgICAgcGFnZXMgJiZcbiAgICAgICAgICAgICAgcGFnZXMubGVuZ3RoICYmXG4gICAgICAgICAgICAgIHBhZ2VzWzBdLmNoaWxkcmVuICYmXG4gICAgICAgICAgICAgIHBhZ2VzWzBdLmNoaWxkcmVuLmxlbmd0aH1cbiAgICAgICAgICAgIG9uSXRlbU1vdXNlRW50ZXI9e3RoaXMucHJlZmV0Y2h9XG4gICAgICAgICAgICB0b2dnbGVNZW51PXsoKSA9PlxuICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgLi4ucXVlcnksIG5hdjogIW9wZW4gPyBudWxsIDogdW5kZWZpbmVkIH0sXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgaXNPcGVuPXtvcGVufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8TGF5b3V0LkJvZHk+XG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxMYXlvdXQuQm9keT5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9MYXlvdXQuQm9keT5cblxuICAgICAgICAgICAgPExheW91dC5Gb290ZXIgY29udGFpbmVyPlxuICAgICAgICAgICAgICA8TmF2YmFyIGZ1bGw+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5OYXZcbiAgICAgICAgICAgICAgICAgIHBhZ2VzPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgR2VzdW5kaGVpdHNaZW50cnVtIEtlbGtoZWltLiBDb3B5cmlnaHQgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLk5hdiBwYWdlcz17Zm9vdGVyfSByaWdodCAvPlxuICAgICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgICAgIDwvTGF5b3V0LkZvb3Rlcj5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9MYXlvdXQuQm9keT5cbiAgICAgIDwvQXBwPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
