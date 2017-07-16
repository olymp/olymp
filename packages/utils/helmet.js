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
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
var getURL = function () {
    if (process.env.URL) {
        return process.env.URL;
    }
    else if (process.env.IS_WEB) {
        return window.location.protocol + "//" + window.location.host;
    }
    return null;
};
export default function (_a, pth) {
    var _b = _a === void 0 ? {} : _a, name = _b.name, title = _b.title, description = _b.description, image = _b.image, tags = _b.tags, keywords = _b.keywords, pathname = _b.pathname;
    if (pth && !pathname)
        pathname = pth;
    var meta = [];
    var link = [];
    name = name || title;
    if (image && image.url) {
        meta.push({
            property: 'og:image',
            content: image.url,
        });
        meta.push({
            property: 'twitter:image',
            content: image.url,
        });
        meta.push({
            property: 'twitter:card',
            content: image.url,
        });
    }
    if (name) {
        meta.push({
            property: 'og:title',
            content: name,
        });
        meta.push({
            property: 'twitter:title',
            content: name,
        });
        meta.push({
            property: 'og:type',
            content: 'article',
        });
    }
    if (description) {
        meta.push({
            name: 'description',
            content: description,
        });
        meta.push({
            property: 'og:description',
            content: description,
        });
        meta.push({
            property: 'twitter:description',
            content: description,
        });
    }
    tags = tags || keywords;
    if (tags) {
        meta.push({
            name: 'keywords',
            content: tags ? tags.join(',') : undefined,
        });
    }
    var url = getURL();
    if (url && pathname) {
        link.push({
            rel: 'amphtml',
            href: url + pathname + "?amp",
        });
        link.push({
            rel: 'canonical',
            href: url + pathname,
        });
        meta.push({
            property: 'og:url',
            content: url + pathname,
        });
    }
    return React.createElement(Helmet, { title: name, meta: meta, link: link });
};
var OlympHelmet = (function (_super) {
    __extends(OlympHelmet, _super);
    function OlympHelmet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OlympHelmet.prototype.render = function () {
        var _a = this.props, meta = _a.meta, link = _a.link, rest = __rest(_a, ["meta", "link"]);
        var theme = this.context.theme;
        return (React.createElement(Helmet, __assign({ meta: [
                { name: 'theme-color', content: theme.color || '#8e44ad' },
                {
                    name: 'msapplication-TileColor',
                    content: theme.color || '#8e44ad',
                }
            ].concat((meta || [])), link: [
                {
                    rel: 'mask-icon',
                    href: '/safari-pinned-tab.svg',
                    color: theme.color || '#8e44ad',
                }
            ].concat((link || [])) }, rest)));
    };
    OlympHelmet.contextTypes = {
        theme: PropTypes.object,
    };
    return OlympHelmet;
}(Component));
export { OlympHelmet };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2hlbG1ldC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN0QyxPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFFbkMsSUFBTSxNQUFNLEdBQUc7SUFDYixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsVUFBSyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQU0sQ0FBQztJQUNoRSxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNGLGVBQWUsVUFDYixFQUFrRSxFQUNsRSxHQUFHO1FBREgsNEJBQWtFLEVBQWhFLGNBQUksRUFBRSxnQkFBSyxFQUFFLDRCQUFXLEVBQUUsZ0JBQUssRUFBRSxjQUFJLEVBQUUsc0JBQVEsRUFBRSxzQkFBUTtJQUczRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBQ3JDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNoQixJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLENBQUM7SUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMs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LEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUU7Z0JBQzFEO29CQUNFLElBQUksRUFBRSx5QkFBeUI7b0JBQy9CLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVM7aUJBQ2xDO3FCQUNFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUVqQixJQUFJO2dCQUNGO29CQUNFLEdBQUcsRUFBRSxXQUFXO29CQUNoQixJQUFJLEVBQUUsd0JBQXdCO29CQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTO2lCQUNoQztxQkFDRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsS0FFYixJQUFJLEVBQ1IsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQTdCTSx3QkFBWSxHQUFHO1FBQ3BCLEtBQUssRUFBRSxTQUFTLENBQUMsTUFBTTtLQUN4QixDQUFDO0lBNEJKLGtCQUFDO0NBL0JELEFBK0JDLENBL0JnQyxTQUFTLEdBK0J6QztTQS9CWSxXQUFXIiwiZmlsZSI6InBhY2thZ2VzL3V0aWxzL2hlbG1ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgZ2V0VVJMID0gKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuVVJMKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52LlVSTDtcbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5JU19XRUIpIHtcbiAgICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH1gO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbmV4cG9ydCBkZWZhdWx0IChcbiAgeyBuYW1lLCB0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlLCB0YWdzLCBrZXl3b3JkcywgcGF0aG5hbWUgfSA9IHt9LFxuICBwdGhcbikgPT4ge1xuICBpZiAocHRoICYmICFwYXRobmFtZSkgcGF0aG5hbWUgPSBwdGg7XG4gIGNvbnN0IG1ldGEgPSBbXTtcbiAgY29uc3QgbGluayA9IFtdO1xuICBuYW1lID0gbmFtZSB8fCB0aXRsZTtcbiAgaWYgKGltYWdlICYmIGltYWdlLnVybCkge1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogJ29nOmltYWdlJyxcbiAgICAgIGNvbnRlbnQ6IGltYWdlLnVybCxcbiAgICB9KTtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgcHJvcGVydHk6ICd0d2l0dGVyOmltYWdlJyxcbiAgICAgIGNvbnRlbnQ6IGltYWdlLnVybCxcbiAgICB9KTtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgcHJvcGVydHk6ICd0d2l0dGVyOmNhcmQnLFxuICAgICAgY29udGVudDogaW1hZ2UudXJsLFxuICAgIH0pO1xuICB9XG4gIGlmIChuYW1lKSB7XG4gICAgbWV0YS5wdXNoKHtcbiAgICAgIHByb3BlcnR5OiAnb2c6dGl0bGUnLFxuICAgICAgY29udGVudDogbmFtZSxcbiAgICB9KTtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgcHJvcGVydHk6ICd0d2l0dGVyOnRpdGxlJyxcbiAgICAgIGNvbnRlbnQ6IG5hbWUsXG4gICAgfSk7XG4gICAgbWV0YS5wdXNoKHtcbiAgICAgIHByb3BlcnR5OiAnb2c6dHlwZScsXG4gICAgICBjb250ZW50OiAnYXJ0aWNsZScsXG4gICAgfSk7XG4gIH1cbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgbWV0YS5wdXNoKHtcbiAgICAgIG5hbWU6ICdkZXNjcmlwdGlvbicsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9KTtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgcHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9KTtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgcHJvcGVydHk6ICd0d2l0dGVyOmRlc2NyaXB0aW9uJyxcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxuICAgIH0pO1xuICB9XG4gIHRhZ3MgPSB0YWdzIHx8IGtleXdvcmRzO1xuICBpZiAodGFncykge1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBuYW1lOiAna2V5d29yZHMnLFxuICAgICAgY29udGVudDogdGFncyA/IHRhZ3Muam9pbignLCcpIDogdW5kZWZpbmVkLFxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHVybCA9IGdldFVSTCgpO1xuICBpZiAodXJsICYmIHBhdGhuYW1lKSB7XG4gICAgbGluay5wdXNoKHtcbiAgICAgIHJlbDogJ2FtcGh0bWwnLFxuICAgICAgaHJlZjogYCR7dXJsICsgcGF0aG5hbWV9P2FtcGAsXG4gICAgfSk7XG4gICAgbGluay5wdXNoKHtcbiAgICAgIHJlbDogJ2Nhbm9uaWNhbCcsXG4gICAgICBocmVmOiB1cmwgKyBwYXRobmFtZSxcbiAgICB9KTtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgcHJvcGVydHk6ICdvZzp1cmwnLFxuICAgICAgY29udGVudDogdXJsICsgcGF0aG5hbWUsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gPEhlbG1ldCB0aXRsZT17bmFtZX0gbWV0YT17bWV0YX0gbGluaz17bGlua30gLz47XG59O1xuXG5leHBvcnQgY2xhc3MgT2x5bXBIZWxtZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1ldGEsIGxpbmssIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWxtZXRcbiAgICAgICAgbWV0YT17W1xuICAgICAgICAgIHsgbmFtZTogJ3RoZW1lLWNvbG9yJywgY29udGVudDogdGhlbWUuY29sb3IgfHwgJyM4ZTQ0YWQnIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoZW1lLmNvbG9yIHx8ICcjOGU0NGFkJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLihtZXRhIHx8IFtdKSxcbiAgICAgICAgXX1cbiAgICAgICAgbGluaz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlbDogJ21hc2staWNvbicsXG4gICAgICAgICAgICBocmVmOiAnL3NhZmFyaS1waW5uZWQtdGFiLnN2ZycsXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3IgfHwgJyM4ZTQ0YWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLi4uKGxpbmsgfHwgW10pLFxuICAgICAgICBdfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19
