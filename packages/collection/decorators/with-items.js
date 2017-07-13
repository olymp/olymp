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
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { lowerFirst, get } from 'lodash';
export default function (WrappedComponent) {
    var cache = {};
    var bound = function (_a) {
        var typeName = _a.typeName, fieldNames = _a.fieldNames;
        return graphql((_b = ["\n        query ", "List($query: ", "Query) {\n          items: ", "List(query: $query) {\n            ", "\n          }\n        }\n      "], _b.raw = ["\n        query ", "List($query: ", "Query) {\n          items: ", "List(query: $query) {\n            ", "\n          }\n        }\n      "], gql(_b, lowerFirst(typeName), typeName, lowerFirst(typeName), fieldNames)), {
            options: function (_a) {
                var id = _a.id, searchTerm = _a.searchTerm, query = _a.query, rest = __rest(_a, ["id", "searchTerm", "query"]);
                return ({
                    variables: searchTerm ? {
                        query: {
                            name: {
                                contains: searchTerm,
                            },
                        }
                    } : {
                        query: {
                            state: {
                                eq: get(query, 'state', 'PUBLISHED'),
                            },
                        }
                    },
                });
            },
        })(function (props) { return React.createElement(WrappedComponent, __assign({}, props, { items: props.data.items })); });
        var _b;
    };
    return function (props) {
        if (props.typeName && props.fieldNames && props.collection) {
            var name = props.typeName + "|" + props.fieldNames;
            var Bound = cache[name] || bound(props);
            cache[name] = Bound;
            return React.createElement(Bound, __assign({}, props));
        }
        return null;
    };
};
//# sourceMappingURL=with-items.js.map