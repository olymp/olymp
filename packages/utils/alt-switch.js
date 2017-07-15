var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { Children, cloneElement } from 'react';
export default function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var notFound, match;
    var routes = Children.toArray(children);
    for (var index = 0; index < routes.length; index++) {
        var route = routes[index];
        if (route.props.match) {
            match = route;
        }
        else if (route.props.match === undefined) {
            notFound = route;
        }
    }
    if (match) {
        return match;
    }
    if (!match && notFound) {
        return cloneElement(notFound, { match: true });
    }
    return null;
};
//# sourceMappingURL=alt-switch.js.map