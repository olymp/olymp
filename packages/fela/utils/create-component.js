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
import { createComponent as createFelaComponent } from 'react-fela';
import { connect } from 'react-redux';
export default function (x1, x2, x3) {
    return connect(function (_a) {
        var fela = _a.fela;
        return ({
            theme2: fela,
        });
    })(createFelaComponent(function (_a) {
        var theme = _a.theme, theme2 = _a.theme2, rest = __rest(_a, ["theme", "theme2"]);
        return x1(__assign({ theme: __assign({}, theme, theme2) }, rest));
    }, x2, function (_a) {
        var theme2 = _a.theme2, dispatch = _a.dispatch, props = __rest(_a, ["theme2", "dispatch"]);
        return typeof x3 === 'function' ? x3(props) : x3;
    }));
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvdXRpbHMvY3JlYXRlLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLElBQUksbUJBQW1CLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QyxlQUFlLFVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFRO1lBQU4sY0FBSTtRQUFPLE9BQUEsQ0FBQztZQUM1QixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7SUFGMkIsQ0FFM0IsQ0FBQyxDQUNELG1CQUFtQixDQUNqQixVQUFDLEVBQTBCO1FBQXhCLElBQUEsZ0JBQUssRUFBRSxrQkFBTSxFQUFFLHNDQUFPO1FBQ3ZCLE1BQ1AsQ0FETyxFQUFFLFlBQ0EsS0FBSyxlQUFPLEtBQUssRUFBSyxNQUFNLEtBQ3pCLElBQUksRUFDUCxDQUFBO0tBQUEsRUFDSixFQUFFLEVBQ0YsVUFBQyxFQUE4QjtRQUE1QixJQUFBLGtCQUFNLEVBQUUsc0JBQVEsRUFBRSwwQ0FBUTtRQUMzQixNQUFNLENBQU4sT0FBTyxFQUFFLEtBQUssVUFBVSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7S0FBQSxDQUM1QyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvZmVsYS91dGlscy9jcmVhdGUtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IGFzIGNyZWF0ZUZlbGFDb21wb25lbnQgfSBmcm9tICdyZWFjdC1mZWxhJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh4MSwgeDIsIHgzKSA9PiB7XG4gIHJldHVybiBjb25uZWN0KCh7IGZlbGEgfSkgPT4gKHtcbiAgICB0aGVtZTI6IGZlbGEsXG4gIH0pKShcbiAgICBjcmVhdGVGZWxhQ29tcG9uZW50KFxuICAgICAgKHsgdGhlbWUsIHRoZW1lMiwgLi4ucmVzdCB9KSA9PlxuICAgICAgICB4MSh7XG4gICAgICAgICAgdGhlbWU6IHsgLi4udGhlbWUsIC4uLnRoZW1lMiB9LFxuICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgIH0pLFxuICAgICAgeDIsXG4gICAgICAoeyB0aGVtZTIsIGRpc3BhdGNoLCAuLi5wcm9wcyB9KSA9PlxuICAgICAgICB0eXBlb2YgeDMgPT09ICdmdW5jdGlvbicgPyB4Myhwcm9wcykgOiB4M1xuICAgIClcbiAgKTtcbn07XG4iXX0=
