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
    history.push(action.payload.url);
    return nextDispatch(action);
}; }; }; };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci9yZWR1eC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEMsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLFVBQUEsT0FBTztJQUNsQyxJQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxVQUFDLEtBQW9CLEVBQUUsTUFBTTtRQUE1QixzQkFBQSxFQUFBLG9CQUFvQjtRQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssVUFBVTtnQkFDYixNQUFNLGNBQ0QsS0FBSyxFQUNMLE1BQU0sQ0FBQyxPQUFPLEVBQ2pCO1lBQ0o7Z0JBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsVUFBQSxPQUFPLElBQUksT0FBQSxVQUFBLEtBQUssSUFBSSxPQUFBLFVBQUEsWUFBWSxJQUFJLE9BQUEsVUFBQSxNQUFNO0lBQ3hFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxFQVJtRSxDQVFuRSxFQVJtRCxDQVFuRCxFQVIwQyxDQVExQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3JvdXRlci9yZWR1eC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVybFRvTG9jYXRpb24gfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBjb25zdCByb3V0ZXJSZWR1Y2VyID0gaGlzdG9yeSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRTdGF0ZSA9IHVybFRvTG9jYXRpb24oaGlzdG9yeS5sb2NhdGlvbik7XG4gIHJldHVybiAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmICghYWN0aW9uIHx8ICFhY3Rpb24udHlwZSkgcmV0dXJuIHN0YXRlO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ0xPQ0FUSU9OJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG59O1xuZXhwb3J0IGNvbnN0IHJvdXRlck1pZGRsZXdhcmUgPSBoaXN0b3J5ID0+IHN0b3JlID0+IG5leHREaXNwYXRjaCA9PiBhY3Rpb24gPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09ICdMT0NBVElPTicpIHtcbiAgICByZXR1cm4gbmV4dERpc3BhdGNoKGFjdGlvbik7XG4gIH1cblxuICBhY3Rpb24ucGF5bG9hZCA9IHVybFRvTG9jYXRpb24oYWN0aW9uLnBheWxvYWQpO1xuICBoaXN0b3J5LnB1c2goYWN0aW9uLnBheWxvYWQudXJsKTtcbiAgcmV0dXJuIG5leHREaXNwYXRjaChhY3Rpb24pO1xufTtcbiJdfQ==
