var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parseQuery } from './utils';
export default function (WrappedComponent) {
    var inner = function (props, context) {
        var location = props.location;
        var router = context.router;
        var query = parseQuery(location.search);
        return (React.createElement(WrappedComponent, __assign({}, props, location, { router: router.history, query: query, location: __assign({}, location, { query: query }) })));
    };
    inner.contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.shape({
                push: PropTypes.func.isRequired,
                replace: PropTypes.func.isRequired,
                createHref: PropTypes.func.isRequired,
            }).isRequired,
        }).isRequired,
    };
    return withRouter(inner);
};
//# sourceMappingURL=with-router.js.map