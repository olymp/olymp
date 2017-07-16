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
                { name: 'msapplication-TileColor', content: theme.color || '#8e44ad' }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2hlbG1ldC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN0QyxPQUFPLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFFbkMsSUFBTSxNQUFNLEdBQUc7SUFDYixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsVUFBSyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQU0sQ0FBQztJQUNoRSxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNGLGVBQWUsVUFDYixFQUFrRSxFQUNsRSxHQUFHO1FBREgsNEJBQWtFLEVBQWhFLGNBQUksRUFBRSxnQkFBSyxFQUFFLDRCQUFXLEVBQUUsZ0JBQUssRUFBRSxjQUFJLEVBQUUsc0JBQVEsRUFBRSxzQkFBUTtJQUczRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBQ3JDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNoQixJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLENBQUM7SUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMs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LEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLEVBQUU7Z0JBQzFELEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtxQkFDbkUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEdBRWpCLElBQUk7Z0JBQ0Y7b0JBQ0UsR0FBRyxFQUFFLFdBQVc7b0JBQ2hCLElBQUksRUFBRSx3QkFBd0I7b0JBQzlCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVM7aUJBQ2hDO3FCQUNFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxLQUViLElBQUksRUFDUixDQUNILENBQUM7SUFDSixDQUFDO0lBMUJNLHdCQUFZLEdBQUc7UUFDcEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxNQUFNO0tBQ3hCLENBQUM7SUF5Qkosa0JBQUM7Q0E1QkQsQUE0QkMsQ0E1QmdDLFNBQVMsR0E0QnpDO1NBNUJZLFdBQVciLCJmaWxlIjoicGFja2FnZXMvdXRpbHMvaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBnZXRVUkwgPSAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5VUkwpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuVVJMO1xuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52LklTX1dFQikge1xuICAgIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fWA7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuZXhwb3J0IGRlZmF1bHQgKFxuICB7IG5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIHRhZ3MsIGtleXdvcmRzLCBwYXRobmFtZSB9ID0ge30sXG4gIHB0aFxuKSA9PiB7XG4gIGlmIChwdGggJiYgIXBhdGhuYW1lKSBwYXRobmFtZSA9IHB0aDtcbiAgY29uc3QgbWV0YSA9IFtdO1xuICBjb25zdCBsaW5rID0gW107XG4gIG5hbWUgPSBuYW1lIHx8IHRpdGxlO1xuICBpZiAoaW1hZ2UgJiYgaW1hZ2UudXJsKSB7XG4gICAgbWV0YS5wdXNoKHtcbiAgICAgIHByb3BlcnR5OiAnb2c6aW1hZ2UnLFxuICAgICAgY29udGVudDogaW1hZ2UudXJsLFxuICAgIH0pO1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogJ3R3aXR0ZXI6aW1hZ2UnLFxuICAgICAgY29udGVudDogaW1hZ2UudXJsLFxuICAgIH0pO1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogJ3R3aXR0ZXI6Y2FyZCcsXG4gICAgICBjb250ZW50OiBpbWFnZS51cmwsXG4gICAgfSk7XG4gIH1cbiAgaWYgKG5hbWUpIHtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgcHJvcGVydHk6ICdvZzp0aXRsZScsXG4gICAgICBjb250ZW50OiBuYW1lLFxuICAgIH0pO1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogJ3R3aXR0ZXI6dGl0bGUnLFxuICAgICAgY29udGVudDogbmFtZSxcbiAgICB9KTtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgcHJvcGVydHk6ICdvZzp0eXBlJyxcbiAgICAgIGNvbnRlbnQ6ICdhcnRpY2xlJyxcbiAgICB9KTtcbiAgfVxuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICBtZXRhLnB1c2goe1xuICAgICAgbmFtZTogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxuICAgIH0pO1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJyxcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxuICAgIH0pO1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSk7XG4gIH1cbiAgdGFncyA9IHRhZ3MgfHwga2V5d29yZHM7XG4gIGlmICh0YWdzKSB7XG4gICAgbWV0YS5wdXNoKHtcbiAgICAgIG5hbWU6ICdrZXl3b3JkcycsXG4gICAgICBjb250ZW50OiB0YWdzID8gdGFncy5qb2luKCcsJykgOiB1bmRlZmluZWQsXG4gICAgfSk7XG4gIH1cbiAgY29uc3QgdXJsID0gZ2V0VVJMKCk7XG4gIGlmICh1cmwgJiYgcGF0aG5hbWUpIHtcbiAgICBsaW5rLnB1c2goe1xuICAgICAgcmVsOiAnYW1waHRtbCcsXG4gICAgICBocmVmOiBgJHt1cmwgKyBwYXRobmFtZX0/YW1wYCxcbiAgICB9KTtcbiAgICBsaW5rLnB1c2goe1xuICAgICAgcmVsOiAnY2Fub25pY2FsJyxcbiAgICAgIGhyZWY6IHVybCArIHBhdGhuYW1lLFxuICAgIH0pO1xuICAgIG1ldGEucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogJ29nOnVybCcsXG4gICAgICBjb250ZW50OiB1cmwgKyBwYXRobmFtZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiA8SGVsbWV0IHRpdGxlPXtuYW1lfSBtZXRhPXttZXRhfSBsaW5rPXtsaW5rfSAvPjtcbn07XG5cbmV4cG9ydCBjbGFzcyBPbHltcEhlbG1ldCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWV0YSwgbGluayAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHJldHVybiAoXG4gICAgICA8SGVsbWV0XG4gICAgICAgIG1ldGE9e1tcbiAgICAgICAgICB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6IHRoZW1lLmNvbG9yIHx8ICcjOGU0NGFkJyB9LFxuICAgICAgICAgIHsgbmFtZTogJ21zYXBwbGljYXRpb24tVGlsZUNvbG9yJywgY29udGVudDogdGhlbWUuY29sb3IgfHwgJyM4ZTQ0YWQnIH0sXG4gICAgICAgICAgLi4uKG1ldGEgfHwgW10pLFxuICAgICAgICBdfVxuICAgICAgICBsaW5rPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVsOiAnbWFzay1pY29uJyxcbiAgICAgICAgICAgIGhyZWY6ICcvc2FmYXJpLXBpbm5lZC10YWIuc3ZnJyxcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvciB8fCAnIzhlNDRhZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi4obGluayB8fCBbXSksXG4gICAgICAgIF19XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=
