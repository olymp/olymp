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
import React, { Component } from 'react';
import { withState, graphql, gql } from 'olymp-utils';
import { Container } from 'olymp-ui';
import { createComponent } from 'react-fela';
import moment from 'moment';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, } from 'recharts';
var StyledLineChart = createComponent(function () { return ({
    '& svg': {},
}); }, LineChart, function (p) { return Object.keys(p); });
export var queryTemplate = graphql((_a = ["\n    query analyticsPageviews {\n      item: analyticsPageviews(\n        start: \"180daysAgo\"\n        end: \"today\"\n        time: MONTH\n        sort: DATE\n      ) {\n        id\n        pageviews\n        sessions\n        rows {\n          id\n          pageTitle\n          pageviews\n          sessions\n          date\n        }\n      }\n    }\n  "], _a.raw = ["\n    query analyticsPageviews {\n      item: analyticsPageviews(\n        start: \"180daysAgo\"\n        end: \"today\"\n        time: MONTH\n        sort: DATE\n      ) {\n        id\n        pageviews\n        sessions\n        rows {\n          id\n          pageTitle\n          pageviews\n          sessions\n          date\n        }\n      }\n    }\n  "], gql(_a)), {
    options: function (_a) {
        var id = _a.id;
        return ({ variables: {} });
    },
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { data: data, item: data.item || {} }));
    },
});
var AnalyticsRoute = (function (_super) {
    __extends(AnalyticsRoute, _super);
    function AnalyticsRoute() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            search: undefined,
        };
        return _this;
    }
    AnalyticsRoute.prototype.render = function () {
        var item = this.props.item;
        var search = this.state.search;
        var text = this.props.text || item.text;
        return (React.createElement(Container, { height: 350 },
            "Pageviews: ",
            item.pageviews,
            React.createElement("br", null),
            "Sessions: ",
            item.sessions,
            React.createElement(ResponsiveContainer, null,
                React.createElement(StyledLineChart, { data: item.rows },
                    React.createElement(Line, { name: "Pageviews", dataKey: "pageviews", stroke: "#8884d8" }),
                    React.createElement(Line, { name: "Sessions", dataKey: "sessions", stroke: "#82ca9d" }),
                    React.createElement(CartesianGrid, { stroke: "#ccc", strokeDasharray: "5 5" }),
                    React.createElement(XAxis, { dataKey: "date", tickFormatter: function (v) { return moment(v).format('YYYY-MM'); } }),
                    React.createElement(YAxis, null),
                    React.createElement(Legend, { align: "center" }),
                    React.createElement(Tooltip, { labelFormatter: function (v) { return moment(v).format('YYYY-MM'); } })))));
    };
    AnalyticsRoute = __decorate([
        withState('text'),
        queryTemplate
    ], AnalyticsRoute);
    return AnalyticsRoute;
}(Component));
export default AnalyticsRoute;
var _a;
//# sourceMappingURL=route.js.map