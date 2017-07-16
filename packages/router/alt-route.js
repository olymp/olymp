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
import { createElement } from 'react';
export default function (_a) {
    var match = _a.match, render = _a.render, component = _a.component, location = _a.location, rest = __rest(_a, ["match", "render", "component", "location"]);
    rest = __assign({}, rest, location, { location: location });
    if (match && component) {
        return createElement(component, rest);
    }
    if (match && render) {
        return render(rest);
    }
    return null;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci9hbHQtcm91dGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUV0QyxlQUFlLFVBQUMsRUFBK0M7SUFBN0MsSUFBQSxnQkFBSyxFQUFFLGtCQUFNLEVBQUUsd0JBQVMsRUFBRSxzQkFBUSxFQUFFLCtEQUFPO0lBQzNELElBQUksZ0JBQVEsSUFBSSxFQUFLLFFBQVEsSUFBRSxRQUFRLFVBQUEsR0FBRSxDQUFDO0lBQzFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3JvdXRlci9hbHQtcm91dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBtYXRjaCwgcmVuZGVyLCBjb21wb25lbnQsIGxvY2F0aW9uLCAuLi5yZXN0IH0pID0+IHtcbiAgcmVzdCA9IHsgLi4ucmVzdCwgLi4ubG9jYXRpb24sIGxvY2F0aW9uIH07XG4gIGlmIChtYXRjaCAmJiBjb21wb25lbnQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHJlc3QpO1xuICB9XG4gIGlmIChtYXRjaCAmJiByZW5kZXIpIHtcbiAgICByZXR1cm4gcmVuZGVyKHJlc3QpO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbiJdfQ==
