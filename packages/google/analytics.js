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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DateRangeEditor } from 'olymp-ui';
var firstRun = true;
var Analytics = (function (_super) {
    __extends(Analytics, _super);
    function Analytics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loaded: false,
            query: {},
            chart: {},
        };
        return _this;
    }
    Analytics.prototype.componentDidMount = function () {
        this.setQuery();
    };
    Analytics.prototype.componentDidUpdate = function () {
        if (firstRun) {
            (function (w, d, s, g, js, fs) {
                g = w.gapi || (w.gapi = {});
                g.analytics = {
                    q: [],
                    ready: function (f) {
                        this.q.push(f);
                    },
                };
                js = d.createElement(s);
                fs = d.getElementsByTagName(s)[0];
                js.src = 'https://apis.google.com/js/platform.js';
                fs.parentNode.insertBefore(js, fs);
                js.onload = function () {
                    g.load('analytics');
                };
            }(window, document, 'script'));
            this.auth();
        }
        firstRun = false;
    };
    Analytics.prototype.auth = function () {
        var _this = this;
        var apiClient = this.context.apiClient;
        apiClient.get('/google-analytics').then(function (response) {
            gapi.analytics.ready(function () {
                gapi.analytics.auth.authorize({
                    serverAuth: {
                        access_token: response.token,
                    },
                });
                _this.setState({
                    loaded: true,
                });
            });
        });
    };
    Analytics.prototype._ = function (value) {
        var obj = {
            label: value,
            format: function (x) { return x; },
        };
        switch (value) {
            case 'ga:date':
                obj.label = 'Datum';
                obj.format = function (x) { return moment(x).format('DD.MM.YYYY'); };
                break;
            case 'ga:sessions':
                obj.label = 'Sitzungen';
                break;
            case 'ga:users':
                obj.label = 'Benutzer';
                break;
            case 'ga:pageviews':
                obj.label = 'Seitenaufrufe';
                break;
            case 'ga:pagePathLevel1':
                obj.label = 'Rubrik';
                break;
        }
        return obj;
    };
    Analytics.prototype.setQuery = function (metrics) {
        var query = this.state.query;
        var _query, chart = {};
        switch (metrics) {
            case 'ga:sessions':
                _query = {
                    metrics: ['ga:sessions'],
                    dimensions: ['ga:date'],
                };
                chart.type = 'LINE';
                break;
            case 'ga:users':
                _query = {
                    metrics: ['ga:users'],
                    dimensions: ['ga:date'],
                };
                chart.type = 'LINE';
                break;
            default:
                _query = {
                    metrics: ['ga:pageviews'],
                    sort: '-ga:pageviews',
                    dimensions: ['ga:pagePathLevel1'],
                    filters: 'ga:pagePathLevel1!=/',
                    maxResults: 10,
                };
                chart.type = 'PIE';
                break;
        }
        _query.ids = 'ga:121893883';
        _query['start-date'] =
            query['start-date'] || moment().subtract(30, 'days').format('YYYY-MM-DD');
        _query['end-date'] =
            query['end-date'] || moment().subtract(1, 'days').format('YYYY-MM-DD');
        this.setState({ query: _query, chart: chart });
    };
    Analytics.prototype.updateDates = function (date) {
        var query = this.state.query;
        this.setState({
            query: __assign({}, query, { 'start-date': date && date.dateStart
                    ? moment(date.dateStart).format('YYYY-MM-DD')
                    : query['start-date'], 'end-date': date && date.dateEnd
                    ? moment(date.dateEnd).format('YYYY-MM-DD')
                    : query['end-date'] }),
        });
    };
    Analytics.prototype.render = function () {
        var _this = this;
        var _a = this.state, loaded = _a.loaded, query = _a.query, chart = _a.chart;
        return (React.createElement("div", { className: "ui divided equal height grid full-h", style: { margin: 0 } },
            React.createElement("div", { className: "two wide column full-h", style: { padding: 0, backgroundColor: '#F6F7F9', left: 0 } },
                React.createElement("div", { className: "ui basic segment full-h" },
                    React.createElement("a", { className: "ui red big fluid label" }, "Under Construction"),
                    React.createElement("div", { className: "ui vertical fluid menu" },
                        React.createElement(MenuItem, { setQuery: function (x) { return _this.setQuery(x); }, metric: 'ga:pageviews', _: function (x) { return _this._(x); } }),
                        React.createElement(MenuItem, { setQuery: function (x) { return _this.setQuery(x); }, metric: 'ga:sessions', _: function (x) { return _this._(x); } }),
                        React.createElement(MenuItem, { setQuery: function (x) { return _this.setQuery(x); }, metric: 'ga:users', _: function (x) { return _this._(x); } })),
                    React.createElement("div", { className: "ui vertical fluid menu" },
                        React.createElement(DateRangeEditor, { value: {
                                dateStart: moment(query['start-date']).toDate(),
                                dateEnd: moment(query['end-date']).toDate(),
                            }, updateValue: function (x) { return _this.updateDates(x); } })),
                    React.createElement("div", { className: "ui vertical fluid menu" },
                        React.createElement("a", { className: "teal item" + (chart.type == 'PIE' ? ' active' : ''), onClick: function () { return _this.setState({ chart: { type: 'PIE' } }); } }, "Kuchendiagramm"),
                        React.createElement("a", { className: "teal item" + (chart.type == 'LINE' ? ' active' : ''), onClick: function () { return _this.setState({ chart: { type: 'LINE' } }); } }, "Liniendiagramm")),
                    React.createElement("a", { className: "ui red big fluid label" }, "Under Construction"))),
            React.createElement("div", { className: "fourteen wide column no-spacing full-h", style: { padding: 0, overflowY: 'scroll' } },
                React.createElement("div", { className: "ui container" }, React.createElement("div", { className: "ui active dimmer" },
                    React.createElement("div", { className: "ui text loader" }, "Loading"))))));
    };
    Analytics.contextTypes = {
        apiClient: PropTypes.object.isRequired,
    };
    return Analytics;
}(Component));
export default Analytics;
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: false,
        };
        return _this;
    }
    MenuItem.prototype.setQuery = function () {
        var _a = this.props, setQuery = _a.setQuery, metric = _a.metric;
        var active = this.state.active;
        setQuery(metric);
        this.setState({ active: !active });
    };
    MenuItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, _ = _a._, metric = _a.metric;
        var active = this.state.active;
        return (React.createElement("div", { className: "teal item" + (active ? ' active' : '') },
            React.createElement("a", { href: "javascript:;", onClick: function () { return _this.setQuery(); } }, _(metric).label),
            false && active
                ? React.createElement("div", { className: "menu" },
                    React.createElement("a", { className: "item" }, "ga:users"),
                    React.createElement("a", { className: "item" }, "ga:newUsers"),
                    React.createElement("a", { className: "item" }, "ga:percentNewSessions"),
                    React.createElement("span", { className: "item", style: { textDecoration: 'line-through' } }, "ga:1dayUsers"),
                    React.createElement("span", { className: "item", style: { textDecoration: 'line-through' } }, "ga:7dayUsers"),
                    React.createElement("span", { className: "item", style: { textDecoration: 'line-through' } }, "ga:14dayUsers"),
                    React.createElement("span", { className: "item", style: { textDecoration: 'line-through' } }, "ga:30dayUsers"),
                    React.createElement("a", { className: "item" }, "ga:sessionsPerUser"))
                : null));
    };
    return MenuItem;
}(Component));
//# sourceMappingURL=analytics.js.map