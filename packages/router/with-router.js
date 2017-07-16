var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { connect } from 'react-redux';
import { createPush } from './actions';
export default function (WrappedComponent) {
    var inner = function (props, context) {
        var pathname = props.pathname, query = props.query, search = props.search, url = props.url, push = props.push, replace = props.replace;
        var router = context.router;
        return (React.createElement(WrappedComponent, __assign({}, props, { location: { pathname: pathname, query: query, search: search, url: url }, router: {
                push: push,
                replace: replace,
            }, url: url, search: search, query: query, pathname: pathname })));
    };
    return connect(function (_a) {
        var location = _a.location;
        return ({
            pathname: location.pathname,
            query: location.query,
            search: location.search,
            url: location.url,
        });
    }, function (dispatch) { return ({
        push: createPush(dispatch),
        replace: createPush(dispatch),
    }); })(inner);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci93aXRoLXJvdXRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFHMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QyxPQUFPLEVBQUUsVUFBVSxFQUFpQixNQUFNLFdBQVcsQ0FBQztBQUV0RCxlQUFlLFVBQUEsZ0JBQWdCO0lBQzdCLElBQU0sS0FBSyxHQUFHLFVBQUMsS0FBSyxFQUFFLE9BQU87UUFDbkIsSUFBQSx5QkFBUSxFQUFFLG1CQUFLLEVBQUUscUJBQU0sRUFBRSxlQUFHLEVBQUUsaUJBQUksRUFBRSx1QkFBTyxDQUFXO1FBQ3RELElBQUEsdUJBQU0sQ0FBYTtRQUMzQixNQUFNLENBQUMsQ0FDTCxvQkFBQyxnQkFBZ0IsZUFDWCxLQUFLLElBQ1QsUUFBUSxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsRUFDMUMsTUFBTSxFQUFFO2dCQUNOLElBQUksTUFBQTtnQkFDSixPQUFPLFNBQUE7YUFDUixFQUNELEdBQUcsRUFBRSxHQUFHLEVBQ1IsTUFBTSxFQUFFLE1BQU0sRUFDZCxLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxRQUFRLElBQ2xCLENBQ0gsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNGLE1BQU0sQ0FBQyxPQUFPLENBQ1osVUFBQyxFQUFZO1lBQVYsc0JBQVE7UUFBTyxPQUFBLENBQUM7WUFDakIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQzNCLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztZQUNyQixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07WUFDdkIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHO1NBQ2xCLENBQUM7SUFMZ0IsQ0FLaEIsRUFDRixVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUM7UUFDWCxJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUMxQixPQUFPLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztLQUM5QixDQUFDLEVBSFUsQ0FHVixDQUNILENBQUMsS0FBSyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvcm91dGVyL3dpdGgtcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcGFyc2VRdWVyeSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlUHVzaCwgY3JlYXRlUmVwbGFjZSB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRDb21wb25lbnQgPT4ge1xuICBjb25zdCBpbm5lciA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBzZWFyY2gsIHVybCwgcHVzaCwgcmVwbGFjZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IGNvbnRleHQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgbG9jYXRpb249e3sgcGF0aG5hbWUsIHF1ZXJ5LCBzZWFyY2gsIHVybCB9fVxuICAgICAgICByb3V0ZXI9e3tcbiAgICAgICAgICBwdXNoLFxuICAgICAgICAgIHJlcGxhY2UsXG4gICAgICAgIH19XG4gICAgICAgIHVybD17dXJsfVxuICAgICAgICBzZWFyY2g9e3NlYXJjaH1cbiAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICBwYXRobmFtZT17cGF0aG5hbWV9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG4gIHJldHVybiBjb25uZWN0KFxuICAgICh7IGxvY2F0aW9uIH0pID0+ICh7XG4gICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBxdWVyeTogbG9jYXRpb24ucXVlcnksXG4gICAgICBzZWFyY2g6IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgIHVybDogbG9jYXRpb24udXJsLFxuICAgIH0pLFxuICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICBwdXNoOiBjcmVhdGVQdXNoKGRpc3BhdGNoKSxcbiAgICAgIHJlcGxhY2U6IGNyZWF0ZVB1c2goZGlzcGF0Y2gpLFxuICAgIH0pXG4gICkoaW5uZXIpO1xufTtcbiJdfQ==
