var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
import React, { Children, Component, createElement, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { withRouter as withRouter2 } from 'react-router-dom';
import { get } from 'lodash';
export { Link, Route, Switch, Redirect } from 'react-router-dom';
export var withRouter = function (WrappedComponent) {
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
    return withRouter2(inner);
};
var ScrollToTop = (function (_super) {
    __extends(ScrollToTop, _super);
    function ScrollToTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollToTop.prototype.componentDidUpdate = function (prevProps) {
        if (get(this.props.location, 'pathname') !== get(prevProps.location, 'pathname')) {
            var node = findDOMNode(this);
            if (node)
                node.scrollTop = 0;
        }
    };
    ScrollToTop.prototype.render = function () {
        return Children.only(this.props.children);
    };
    ScrollToTop = __decorate([
        withRouter
    ], ScrollToTop);
    return ScrollToTop;
}(Component));
export { ScrollToTop };
export var SimpleSwitch = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var notFound, match;
    var routes = Children.toArray(children);
    for (var index = 0; index < routes.length; index++) {
        var route = routes[index];
        if (route.props.match) {
            match = route;
        }
        else if (route.props.match === undefined) {
            notFound = route;
        }
    }
    if (match) {
        return match;
    }
    if (!match && notFound) {
        return cloneElement(notFound, { match: true });
    }
    return null;
};
export var SimpleRoute = function (_a) {
    var match = _a.match, render = _a.render, component = _a.component, location = _a.location, rest = __rest(_a, ["match", "render", "component", "location"]);
    rest = __assign({}, rest, location, { location: location });
    if (match && component) {
        return createElement(component, rest);
    }
    if (match && render) {
        return render(rest);
    }
    return null;
};
function memoize(func) {
    var cache = {};
    return function () {
        var key = JSON.stringify(arguments);
        if (cache[key]) {
            return cache[key];
        }
        var val = func.apply(this, arguments);
        cache[key] = val;
        return val;
    };
}
export var parseQuery = memoize(function (str) {
    var ret = Object.create(null);
    if (typeof str !== 'string') {
        return ret;
    }
    str = str.trim().replace(/^(\?|#|&)/, '');
    if (!str) {
        return ret;
    }
    str.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        var key = parts.shift();
        var val = parts.length > 0 ? parts.join('=') : undefined;
        val = val === undefined ? null : decodeURIComponent(val);
        if (ret[key] === undefined) {
            ret[key] = val;
        }
        else if (Array.isArray(ret[key])) {
            ret[key].push(val);
        }
        else {
            ret[key] = [ret[key], val];
        }
    });
    return ret;
});
export var stringifyQuery = memoize(function (obj) {
    return obj
        ? Object.keys(obj)
            .sort()
            .map(function (key) {
            var val = obj[key];
            if (val === undefined) {
                return '';
            }
            if (val === null) {
                return key;
            }
            if (Array.isArray(val)) {
                var result_1 = [];
                val.slice().forEach(function (val2) {
                    if (val2 === undefined) {
                        return;
                    }
                    if (val2 === null) {
                        result_1.push(key);
                    }
                    else {
                        result_1.push(key + "=" + encodeURIComponent(val2));
                    }
                });
                return result_1.join('&');
            }
            return key + "=" + encodeURIComponent(val);
        })
            .filter(function (x) { return x.length > 0; })
            .join('&')
        : '';
});
//# sourceMappingURL=router.js.map