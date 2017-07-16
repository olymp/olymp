var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { urlToLocation } from './utils';
export var routerReducer = function (history) {
    var defaultState = urlToLocation(history.location);
    return function (state, action) {
        if (state === void 0) { state = defaultState; }
        if (!action || !action.type)
            return state;
        switch (action.type) {
            case 'LOCATION':
                return __assign({}, state, action.payload);
            default:
                return state;
        }
    };
};
export var routerMiddleware = function (history) { return function (store) { return function (nextDispatch) { return function (action) {
    if (action.type !== 'LOCATION') {
        return nextDispatch(action);
    }
    action.payload = urlToLocation(action.payload);
    if (!action.compensate) {
        var oldKey = history.location.key;
        history.push(action.payload);
        if (oldKey === history.location.key) {
            return;
        }
        action.payload.key = history.location.key;
    }
    return nextDispatch(action);
}; }; }; };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci9yZWR1eC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEMsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLFVBQUEsT0FBTztJQUNsQyxJQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxVQUFDLEtBQW9CLEVBQUUsTUFBTTtRQUE1QixzQkFBQSxFQUFBLG9CQUFvQjtRQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssVUFBVTtnQkFDYixNQUFNLGNBQ0QsS0FBSyxFQUNMLE1BQU0sQ0FBQyxPQUFPLEVBQ2pCO1lBQ0o7Z0JBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsVUFBQSxPQUFPLElBQUksT0FBQSxVQUFBLEtBQUssSUFBSSxPQUFBLFVBQUEsWUFBWSxJQUFJLE9BQUEsVUFBQSxNQUFNO0lBQ3hFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QixDQUFDLEVBZm1FLENBZW5FLEVBZm1ELENBZW5ELEVBZjBDLENBZTFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvcm91dGVyL3JlZHV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXJsVG9Mb2NhdGlvbiB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IGNvbnN0IHJvdXRlclJlZHVjZXIgPSBoaXN0b3J5ID0+IHtcbiAgY29uc3QgZGVmYXVsdFN0YXRlID0gdXJsVG9Mb2NhdGlvbihoaXN0b3J5LmxvY2F0aW9uKTtcbiAgcmV0dXJuIChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgaWYgKCFhY3Rpb24gfHwgIWFjdGlvbi50eXBlKSByZXR1cm4gc3RhdGU7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnTE9DQVRJT04nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcbn07XG5leHBvcnQgY29uc3Qgcm91dGVyTWlkZGxld2FyZSA9IGhpc3RvcnkgPT4gc3RvcmUgPT4gbmV4dERpc3BhdGNoID0+IGFjdGlvbiA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSAhPT0gJ0xPQ0FUSU9OJykge1xuICAgIHJldHVybiBuZXh0RGlzcGF0Y2goYWN0aW9uKTtcbiAgfVxuXG4gIGFjdGlvbi5wYXlsb2FkID0gdXJsVG9Mb2NhdGlvbihhY3Rpb24ucGF5bG9hZCk7XG4gIGlmICghYWN0aW9uLmNvbXBlbnNhdGUpIHtcbiAgICBjb25zdCBvbGRLZXkgPSBoaXN0b3J5LmxvY2F0aW9uLmtleTtcbiAgICBoaXN0b3J5LnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgIGlmIChvbGRLZXkgPT09IGhpc3RvcnkubG9jYXRpb24ua2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFjdGlvbi5wYXlsb2FkLmtleSA9IGhpc3RvcnkubG9jYXRpb24ua2V5O1xuICB9XG4gIHJldHVybiBuZXh0RGlzcGF0Y2goYWN0aW9uKTtcbn07XG4iXX0=
