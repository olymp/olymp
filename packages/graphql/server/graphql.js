var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { bundle } from 'graphql-modules';
import buildSchema from './schema-builder';
import { values } from 'lodash';
import * as scalarModules from './scalars';
import * as defaultDirectives from './directives';
export default function (_a) {
    var modules = _a.modules, _b = _a.directives, directives = _b === void 0 ? {} : _b;
    var schema = null;
    var apply = function (modules) {
        var raw = values(__assign({}, scalarModules, modules));
        var _a = raw.reduce(function (store, value) {
            if (value.onBefore)
                store.onBefore.push(value.onBefore);
            if (value.onAfter)
                store.onAfter.push(value.onAfter);
            return store;
        }, { onBefore: [], onAfter: [] }), onBefore = _a.onBefore, onAfter = _a.onAfter;
        var bundled = bundle(raw);
        schema = buildSchema(__assign({}, bundled, { directives: __assign({}, defaultDirectives, directives), onBefore: onBefore,
            onAfter: onAfter }));
    };
    if (modules) {
        apply(modules);
    }
    return {
        express: graphqlExpress(function (context) { return ({ schema: schema, context: context }); }),
        graphi: graphiqlExpress({ endpointURL: '/graphql' }),
        apply: function (modules) { return apply(modules); },
    };
};
//# sourceMappingURL=graphql.js.map