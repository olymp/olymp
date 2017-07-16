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
    history.push(action.payload);
    return nextDispatch(action);
}; }; }; };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci9yZWR1eC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEMsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLFVBQUEsT0FBTztJQUNsQyxJQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxVQUFDLEtBQW9CLEVBQUUsTUFBTTtRQUE1QixzQkFBQSxFQUFBLG9CQUFvQjtRQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssVUFBVTtnQkFDYixNQUFNLGNBQ0QsS0FBSyxFQUNMLE1BQU0sQ0FBQyxPQUFPLEVBQ2pCO1lBQ0o7Z0JBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsVUFBQSxPQUFPLElBQUksT0FBQSxVQUFBLEtBQUssSUFBSSxPQUFBLFVBQUEsWUFBWSxJQUFJLE9BQUEsVUFBQSxNQUFNO0lBQ3hFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLENBQUMsRUFQbUUsQ0FPbkUsRUFQbUQsQ0FPbkQsRUFQMEMsQ0FPMUMsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy9yb3V0ZXIvcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1cmxUb0xvY2F0aW9uIH0gZnJvbSAnLi91dGlscyc7XG5leHBvcnQgY29uc3Qgcm91dGVyUmVkdWNlciA9IGhpc3RvcnkgPT4ge1xuICBjb25zdCBkZWZhdWx0U3RhdGUgPSB1cmxUb0xvY2F0aW9uKGhpc3RvcnkubG9jYXRpb24pO1xuICByZXR1cm4gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBpZiAoIWFjdGlvbiB8fCAhYWN0aW9uLnR5cGUpIHJldHVybiBzdGF0ZTtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdMT0NBVElPTic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xufTtcbmV4cG9ydCBjb25zdCByb3V0ZXJNaWRkbGV3YXJlID0gaGlzdG9yeSA9PiBzdG9yZSA9PiBuZXh0RGlzcGF0Y2ggPT4gYWN0aW9uID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlICE9PSAnTE9DQVRJT04nKSB7XG4gICAgcmV0dXJuIG5leHREaXNwYXRjaChhY3Rpb24pO1xuICB9XG5cbiAgaGlzdG9yeS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgcmV0dXJuIG5leHREaXNwYXRjaChhY3Rpb24pO1xufTtcbiJdfQ==
