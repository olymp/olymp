'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _static = require('./static');

var _static2 = _interopRequireDefault(_static);

var _edits = require('./../../edits');

var _main = require('./main.less');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var firstRun = true;

var Analytics = (_temp2 = _class = function (_Component) {
  _inherits(Analytics, _Component);

  function Analytics() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Analytics);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Analytics.__proto__ || Object.getPrototypeOf(Analytics)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loaded: false,
      query: {},
      chart: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Analytics, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setQuery();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (firstRun) {
        // Embed API laden
        (function (w, d, s, g, js, fs) {
          g = w.gapi || (w.gapi = {});
          g.analytics = {
            q: [], ready: function ready(f) {
              this.q.push(f);
            }
          };
          js = d.createElement(s);
          fs = d.getElementsByTagName(s)[0];
          js.src = 'https://apis.google.com/js/platform.js';
          fs.parentNode.insertBefore(js, fs);
          js.onload = function () {
            g.load('analytics');
          };
        })(window, document, 'script');

        // Auth
        this.auth();
      }

      firstRun = false;
    }
  }, {
    key: 'auth',
    value: function auth() {
      var _this2 = this;

      var apiClient = this.context.apiClient;


      apiClient.get('/google-analytics').then(function (response) {
        gapi.analytics.ready(function () {
          gapi.analytics.auth.authorize({
            'serverAuth': {
              'access_token': response.token
            }
          });

          _this2.setState({
            loaded: true
          });
        });
      });
    }
  }, {
    key: '_',
    value: function _(value) {
      var obj = {
        label: value,
        format: function format(x) {
          return x;
        }
      };

      switch (value) {
        case 'ga:date':
          obj.label = 'Datum';
          obj.format = function (x) {
            return (0, _moment2.default)(x).format('DD.MM.YYYY');
          };
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
    }
  }, {
    key: 'setQuery',
    value: function setQuery(metrics) {
      var query = this.state.query;

      var _query = void 0,
          chart = {};

      switch (metrics) {
        case 'ga:sessions':
          _query = {
            metrics: ['ga:sessions'],
            dimensions: ['ga:date']
          };
          chart.type = 'LINE';
          break;

        case 'ga:users':
          _query = {
            metrics: ['ga:users'],
            dimensions: ['ga:date']
          };
          chart.type = 'LINE';
          break;

        default:
          _query = {
            metrics: ['ga:pageviews'],
            sort: '-ga:pageviews',
            dimensions: ['ga:pagePathLevel1'],
            filters: 'ga:pagePathLevel1!=/',
            maxResults: 10
          };
          chart.type = 'PIE';
          break;
      }

      _query.ids = 'ga:121893883';
      _query['start-date'] = query['start-date'] || (0, _moment2.default)().subtract(30, 'days').format('YYYY-MM-DD');
      _query['end-date'] = query['end-date'] || (0, _moment2.default)().subtract(1, 'days').format('YYYY-MM-DD');

      this.setState({ query: _query, chart: chart });
    }
  }, {
    key: 'updateDates',
    value: function updateDates(date) {
      var query = this.state.query;


      this.setState({
        query: _extends({}, query, {
          'start-date': date && date.dateStart ? (0, _moment2.default)(date.dateStart).format('YYYY-MM-DD') : query['start-date'],
          'end-date': date && date.dateEnd ? (0, _moment2.default)(date.dateEnd).format('YYYY-MM-DD') : query['end-date']
        })
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          loaded = _state.loaded,
          query = _state.query,
          chart = _state.chart;


      return _react2.default.createElement(
        'div',
        { className: 'ui divided equal height grid full-h', style: { margin: 0 } },
        _react2.default.createElement(
          'div',
          { className: 'two wide column full-h', style: { padding: 0, backgroundColor: '#F6F7F9', left: 0 } },
          _react2.default.createElement(
            'div',
            { className: 'ui basic segment full-h' },
            _react2.default.createElement(
              'a',
              { className: 'ui red big fluid label' },
              'Under Construction'
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui vertical fluid menu' },
              _react2.default.createElement(MenuItem, { setQuery: function setQuery(x) {
                  return _this3.setQuery(x);
                }, metric: 'ga:pageviews', _: function _(x) {
                  return _this3._(x);
                } }),
              _react2.default.createElement(MenuItem, { setQuery: function setQuery(x) {
                  return _this3.setQuery(x);
                }, metric: 'ga:sessions', _: function _(x) {
                  return _this3._(x);
                } }),
              _react2.default.createElement(MenuItem, { setQuery: function setQuery(x) {
                  return _this3.setQuery(x);
                }, metric: 'ga:users', _: function _(x) {
                  return _this3._(x);
                } })
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui vertical fluid menu' },
              _react2.default.createElement(_edits.DateRange, {
                value: { dateStart: (0, _moment2.default)(query['start-date']).toDate(), dateEnd: (0, _moment2.default)(query['end-date']).toDate() },
                updateValue: function updateValue(x) {
                  return _this3.updateDates(x);
                } })
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui vertical fluid menu' },
              _react2.default.createElement(
                'a',
                { className: "teal item" + (chart.type == 'PIE' ? ' active' : ''),
                  onClick: function onClick() {
                    return _this3.setState({ chart: { type: 'PIE' } });
                  } },
                'Kuchendiagramm'
              ),
              _react2.default.createElement(
                'a',
                { className: "teal item" + (chart.type == 'LINE' ? ' active' : ''),
                  onClick: function onClick() {
                    return _this3.setState({ chart: { type: 'LINE' } });
                  } },
                'Liniendiagramm'
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'ui red big fluid label' },
              'Under Construction'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'fourteen wide column no-spacing full-h',
            style: { padding: 0, overflowY: 'scroll' } },
          _react2.default.createElement(
            'div',
            { className: 'ui container' },
            loaded ? _react2.default.createElement(_static2.default, { query: query, chart: chart, _: function _(x) {
                return _this3._(x);
              } }) : _react2.default.createElement(
              'div',
              { className: 'ui active dimmer' },
              _react2.default.createElement(
                'div',
                { className: 'ui text loader' },
                'Loading'
              )
            )
          )
        )
      );
    }
  }]);

  return Analytics;
}(_react.Component), _class.contextTypes = {
  apiClient: _react2.default.PropTypes.object.isRequired
}, _temp2);
exports.default = Analytics;

var MenuItem = function (_Component2) {
  _inherits(MenuItem, _Component2);

  function MenuItem() {
    var _ref2;

    var _temp3, _this4, _ret2;

    _classCallCheck(this, MenuItem);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp3 = (_this4 = _possibleConstructorReturn(this, (_ref2 = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref2, [this].concat(args))), _this4), _this4.state = {
      active: false
    }, _temp3), _possibleConstructorReturn(_this4, _ret2);
  }

  _createClass(MenuItem, [{
    key: 'setQuery',
    value: function setQuery() {
      var _props = this.props,
          setQuery = _props.setQuery,
          metric = _props.metric;
      var active = this.state.active;


      setQuery(metric);
      this.setState({ active: !active });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props2 = this.props,
          _ = _props2._,
          metric = _props2.metric;
      var active = this.state.active;


      return _react2.default.createElement(
        'div',
        { className: "teal item" + (active ? ' active' : '') },
        _react2.default.createElement(
          'a',
          { href: 'javascript:;', onClick: function onClick() {
              return _this5.setQuery();
            } },
          _(metric).label
        ),
        false && active ? _react2.default.createElement(
          'div',
          { className: 'menu' },
          _react2.default.createElement(
            'a',
            { className: 'item' },
            'ga:users'
          ),
          _react2.default.createElement(
            'a',
            { className: 'item' },
            'ga:newUsers'
          ),
          _react2.default.createElement(
            'a',
            { className: 'item' },
            'ga:percentNewSessions'
          ),
          _react2.default.createElement(
            'span',
            { className: 'item', style: { textDecoration: 'line-through' } },
            'ga:1dayUsers'
          ),
          _react2.default.createElement(
            'span',
            { className: 'item', style: { textDecoration: 'line-through' } },
            'ga:7dayUsers'
          ),
          _react2.default.createElement(
            'span',
            { className: 'item', style: { textDecoration: 'line-through' } },
            'ga:14dayUsers'
          ),
          _react2.default.createElement(
            'span',
            { className: 'item', style: { textDecoration: 'line-through' } },
            'ga:30dayUsers'
          ),
          _react2.default.createElement(
            'a',
            { className: 'item' },
            'ga:sessionsPerUser'
          )
        ) : null
      );
    }
  }]);

  return MenuItem;
}(_react.Component);