'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stats = function (_Component) {
  _inherits(Stats, _Component);

  function Stats() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Stats);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Stats.__proto__ || Object.getPrototypeOf(Stats)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      header: undefined,
      data: undefined,
      sortBy: undefined,
      sortAsc: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Stats, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.change();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var query = this.props.query;
      var _state = this.state,
          sortBy = _state.sortBy,
          sortAsc = _state.sortAsc;


      if (!(0, _lodash.isEqual)(prevProps.query, query) || sortBy != prevState.sortBy || sortAsc != prevState.sortAsc) {
        this.change();
      }
    }
  }, {
    key: 'change',
    value: function change() {
      var _this2 = this;

      var _state2 = this.state,
          sortBy = _state2.sortBy,
          sortAsc = _state2.sortAsc;
      var _props = this.props,
          query = _props.query,
          chart = _props.chart;


      gapi.analytics.ready(function () {
        new gapi.analytics.googleCharts.DataChart({
          query: query,
          chart: {
            'container': 'stats-container',
            'type': chart.type || 'PIE',
            'options': _extends({
              'width': '100%'
            }, chart.options)
          }
        }).execute();

        // NEU
        var _sort = sortBy && (query.metrics.indexOf(sortBy) >= 0 || query.dimensions.indexOf(sortBy) >= 0) ? sortBy : query.metrics[0];
        var report = new gapi.analytics.report.Data({
          query: _extends({}, query, {
            sort: (!sortAsc ? '' : '-') + _sort
          })
        });

        report.on('success', function (res) {
          _this2.setState({
            header: res.columnHeaders,
            data: res.rows,
            sortBy: _sort
          });
        });

        report.execute();
      });
    }
  }, {
    key: 'changeSort',
    value: function changeSort(field) {
      var _state3 = this.state,
          sortBy = _state3.sortBy,
          sortAsc = _state3.sortAsc;


      this.setState({
        sortBy: field,
        sortAsc: sortBy != field ? true : !sortAsc
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state4 = this.state,
          header = _state4.header,
          data = _state4.data,
          sortBy = _state4.sortBy,
          sortAsc = _state4.sortAsc;
      var _ = this.props._;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { id: 'stats-container' }),
        _react2.default.createElement(
          'table',
          { className: 'ui celled table' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              (header || []).map(function (item) {
                return _react2.default.createElement(
                  'th',
                  { key: item.name },
                  _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', onClick: function onClick() {
                        return _this3.changeSort(item.name);
                      } },
                    _(item.name).label,
                    sortBy == item.name ? _react2.default.createElement('i', { className: "caret icon" + (!sortAsc ? " up" : " down") }) : null
                  )
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            (data || []).map(function (items, index) {
              return _react2.default.createElement(
                'tr',
                { key: index },
                items.map(function (item, index) {
                  return _react2.default.createElement(
                    'td',
                    { key: item },
                    _(header[index].name).format(item)
                  );
                })
              );
            })
          )
        )
      );
    }
  }]);

  return Stats;
}(_react.Component);

exports.default = Stats;