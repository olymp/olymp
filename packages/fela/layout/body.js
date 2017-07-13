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
import PropTypes from 'prop-types';
import { ScrollToTop } from 'olymp-utils';
import { createComponent } from 'react-fela';
import WithContainer from './with-container';
var Body = createComponent(function (_a) {
    var affix = _a.affix;
    return (__assign({ flex: 'none' }, (!affix
        ? {}
        : {
            flex: '1 1 auto',
            display: 'flex',
            overflowY: 'auto',
            flexDirection: 'column',
            ifSmallDown: {
                '-webkit-overflow-scrolling': 'touch',
                overflowY: 'scroll',
            },
        })));
}, function (props) { return React.createElement(ScrollToTop, null,
    React.createElement(WithContainer, __assign({}, props))); }, function (_a) {
    var affix = _a.affix, p = __rest(_a, ["affix"]);
    return Object.keys(p);
});
Body.displayName = 'Layout.Body';
Body.propTypes = {
    container: PropTypes.bool,
    affix: PropTypes.bool,
};
Body.defaultProps = {
    container: false,
    affix: false,
};
export default Body;
//# sourceMappingURL=body.js.map