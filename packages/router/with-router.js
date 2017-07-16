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
        return (__assign({}, location));
    }, function (dispatch) { return ({
        push: createPush(dispatch),
        replace: createPush(dispatch),
    }); })(inner);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3JvdXRlci93aXRoLXJvdXRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFHMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0QyxPQUFPLEVBQUUsVUFBVSxFQUFpQixNQUFNLFdBQVcsQ0FBQztBQUV0RCxlQUFlLFVBQUEsZ0JBQWdCO0lBQzdCLElBQU0sS0FBSyxHQUFHLFVBQUMsS0FBSyxFQUFFLE9BQU87UUFDbkIsSUFBQSx5QkFBUSxFQUFFLG1CQUFLLEVBQUUscUJBQU0sRUFBRSxlQUFHLEVBQUUsaUJBQUksRUFBRSx1QkFBTyxDQUFXO1FBQ3RELElBQUEsdUJBQU0sQ0FBYTtRQUMzQixNQUFNLENBQUMsQ0FDTCxvQkFBQyxnQkFBZ0IsZUFDWCxLQUFLLElBQ1QsUUFBUSxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsRUFDMUMsTUFBTSxFQUFFO2dCQUNOLElBQUksTUFBQTtnQkFDSixPQUFPLFNBQUE7YUFDUixFQUNELEdBQUcsRUFBRSxHQUFHLEVBQ1IsTUFBTSxFQUFFLE1BQU0sRUFDZCxLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxRQUFRLElBQ2xCLENBQ0gsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUNGLE1BQU0sQ0FBQyxPQUFPLENBQ1osVUFBQyxFQUFZO1lBQVYsc0JBQVE7UUFBTyxPQUFBLGNBQ2IsUUFBUSxFQUNYO0lBRmdCLENBRWhCLEVBQ0YsVUFBQSxRQUFRLElBQUksT0FBQSxDQUFDO1FBQ1gsSUFBSSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDMUIsT0FBTyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7S0FDOUIsQ0FBQyxFQUhVLENBR1YsQ0FDSCxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL3JvdXRlci93aXRoLXJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHBhcnNlUXVlcnkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNyZWF0ZVB1c2gsIGNyZWF0ZVJlcGxhY2UgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgaW5uZXIgPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgc2VhcmNoLCB1cmwsIHB1c2gsIHJlcGxhY2UgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSBjb250ZXh0O1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlZENvbXBvbmVudFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGxvY2F0aW9uPXt7IHBhdGhuYW1lLCBxdWVyeSwgc2VhcmNoLCB1cmwgfX1cbiAgICAgICAgcm91dGVyPXt7XG4gICAgICAgICAgcHVzaCxcbiAgICAgICAgICByZXBsYWNlLFxuICAgICAgICB9fVxuICAgICAgICB1cmw9e3VybH1cbiAgICAgICAgc2VhcmNoPXtzZWFyY2h9XG4gICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgcGF0aG5hbWU9e3BhdGhuYW1lfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuICByZXR1cm4gY29ubmVjdChcbiAgICAoeyBsb2NhdGlvbiB9KSA9PiAoe1xuICAgICAgLi4ubG9jYXRpb24sXG4gICAgfSksXG4gICAgZGlzcGF0Y2ggPT4gKHtcbiAgICAgIHB1c2g6IGNyZWF0ZVB1c2goZGlzcGF0Y2gpLFxuICAgICAgcmVwbGFjZTogY3JlYXRlUHVzaChkaXNwYXRjaCksXG4gICAgfSlcbiAgKShpbm5lcik7XG59O1xuIl19
