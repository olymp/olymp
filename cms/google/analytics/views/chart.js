'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n    query analyticsQuery(\n      $start: String!\n      $end: String!\n      $metrics: [ANALYTICS_METRICS]\n      $dimensions: [ANALYTICS_DIMENSIONS]\n      $filters: [AnalyticsFilter]\n      $sorts: [ANALYTICS_SORT]\n    ) {\n      item: analyticsQuery(\n        start: $start\n        end: $end\n        metrics: $metrics\n        dimensions: $dimensions\n        filters: $filters\n        sorts: $sorts\n      ) {\n        ', '\n        rows {\n          ', '\n        }\n      }\n    }\n  '], ['\n    query analyticsQuery(\n      $start: String!\n      $end: String!\n      $metrics: [ANALYTICS_METRICS]\n      $dimensions: [ANALYTICS_DIMENSIONS]\n      $filters: [AnalyticsFilter]\n      $sorts: [ANALYTICS_SORT]\n    ) {\n      item: analyticsQuery(\n        start: $start\n        end: $end\n        metrics: $metrics\n        dimensions: $dimensions\n        filters: $filters\n        sorts: $sorts\n      ) {\n        ', '\n        rows {\n          ', '\n        }\n      }\n    }\n  ']);

require('antd/lib/select/style');

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = require('react-apollo');

var _olympFela = require('olymp-fela');

var _components = require('../components');

var _charts = require('../charts');

var _definitions = require('../../definitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var charts = {
  bar: _react2.default.createElement(_charts.BarChart, null),
  barVertical: _react2.default.createElement(_charts.BarChart, { vertical: true }),
  line: _react2.default.createElement(_charts.LineChart, null),
  pie: _react2.default.createElement(_charts.PieChart, null),
  table: _react2.default.createElement(_charts.TableChart, null)
};

var fields = ['id'].concat(_toConsumableArray(Object.keys(_definitions.metricsObj).map(function (x) {
  return _definitions.metricsObj[x].output;
})));
var rowFields = [].concat(_toConsumableArray(fields), _toConsumableArray(Object.keys(_definitions.dimensionsObj).map(function (x) {
  return _definitions.dimensionsObj[x].output;
})));
var getItemFields = function getItemFields(data, metrics, dimensions) {
  return ((data.item || {}).rows || []).map(function (item) {
    var obj = {};

    metrics.forEach(function (metric) {
      return obj[metric] = item[_definitions.metricsObj[metric].output];
    });
    dimensions.forEach(function (dimension) {
      return obj[dimension] = item[_definitions.dimensionsObj[dimension].output];
    });

    return obj;
  });
};

var _ref3 = _react2.default.createElement(
  _select2.default.Option,
  { value: 'line' },
  'Linie'
);

var _ref4 = _react2.default.createElement(
  _select2.default.Option,
  { value: 'bar' },
  'Balken'
);

var _ref5 = _react2.default.createElement(
  _select2.default.Option,
  { value: 'barVertical' },
  'Balken vertikal'
);

var _ref6 = _react2.default.createElement(
  _select2.default.Option,
  { value: 'pie' },
  'Kuchen'
);

var _ref7 = _react2.default.createElement(
  _select2.default.Option,
  { value: 'table' },
  'Tabelle'
);

var _ref8 = _react2.default.createElement(_components.Loader, { loading: true });

var Chart = (_dec = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject, fields, rowFields), {
  options: function options(_ref) {
    var metrics = _ref.metrics,
        dimensions = _ref.dimensions,
        selected = _ref.selected,
        onSelect = _ref.onSelect,
        start = _ref.start,
        end = _ref.end,
        sorts = _ref.sorts;

    var variables = {
      metrics: metrics,
      start: start,
      end: end
    };

    if (dimensions) {
      variables.dimensions = dimensions;
    }

    if (selected && selected.length && !onSelect) {
      variables.filters = selected.map(function (selection) {
        return {
          dimension: dimensions[dimensions.length - 1],
          operator: 'EQ',
          expression: selection
        };
      });
    }

    if (sorts) {
      variables.sorts = sorts;
    }

    return {
      variables: variables
    };
  },
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        data = _ref2.data;
    var metrics = ownProps.metrics,
        dimensions = ownProps.dimensions;
    var loading = data.loading;

    var items = getItemFields(data, metrics, dimensions);

    return _extends({}, ownProps, {
      loading: loading,
      items: items
    });
  }
}), _dec(_class = function (_Component) {
  _inherits(Chart, _Component);

  function Chart() {
    _classCallCheck(this, Chart);

    return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
  }

  _createClass(Chart, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          metrics = _props.metrics,
          dimensions = _props.dimensions,
          changeDimensions = _props.changeDimensions,
          chart = _props.chart,
          changeChart = _props.changeChart,
          sorts = _props.sorts,
          changeSorts = _props.changeSorts,
          filters = _props.filters,
          changeFilters = _props.changeFilters,
          selected = _props.selected,
          onSelect = _props.onSelect,
          open = _props.open,
          setOpen = _props.setOpen,
          range = _props.range,
          fullSize = _props.fullSize;

      var loading = this.props.loading || !metrics.length || !dimensions.length || !range.length;

      var filteredItems = items;
      if (filters.length) {
        filteredItems = [];

        filters.forEach(function (filter) {
          items.forEach(function (item) {
            if (item[dimensions[0]] === filter) {
              filteredItems.push(item);
            }
          });
        });
      }

      var childProps = {
        items: filteredItems,
        metrics: metrics,
        dimensions: dimensions,
        selected: selected,
        onSelect: onSelect
      };

      var header = _react2.default.createElement(
        _components.Toolbar,
        { size: 12 },
        _react2.default.createElement(
          _olympFela.Grid.Item,
          { medium: 8 },
          _react2.default.createElement(_components.MetricSelect, { value: dimensions, onChange: changeDimensions, isDimension: true })
        ),
        _react2.default.createElement(
          _olympFela.Grid.Item,
          { medium: 3 },
          _react2.default.createElement(
            _select2.default,
            { placeholder: 'Chart', value: chart, onChange: changeChart },
            _ref3,
            _ref4,
            _ref5,
            _ref6,
            _ref7
          )
        ),
        _react2.default.createElement(
          _olympFela.Grid.Item,
          { medium: 1 },
          _react2.default.createElement(_button2.default, { icon: open ? 'shrink' : 'arrows-alt', onClick: setOpen, disabled: loading })
        )
      );
      var footer = _react2.default.createElement(
        _components.Toolbar,
        { size: 6, bottom: true },
        _react2.default.createElement(
          _olympFela.Grid.Item,
          { medium: 3 },
          _react2.default.createElement(
            _select2.default,
            { mode: 'multiple', placeholder: 'Sortierung', onChange: changeSorts, value: sorts },
            [].concat(_toConsumableArray(metrics), _toConsumableArray(dimensions)).map(function (x) {
              return _react2.default.createElement(
                _select2.default.OptGroup,
                { label: _extends({}, _definitions.metricsObj, _definitions.dimensionsObj)[x].label, key: x },
                _react2.default.createElement(
                  _select2.default.Option,
                  {
                    value: x + '_ASC',
                    key: x + '_ASC',
                    disabled: !!sorts.find(function (sort) {
                      return sort === x + '_DESC';
                    })
                  },
                  _extends({}, _definitions.metricsObj, _definitions.dimensionsObj)[x].label,
                  ' [Aufsteigend]'
                ),
                _react2.default.createElement(
                  _select2.default.Option,
                  {
                    value: x + '_DESC',
                    key: x + '_DESC',
                    disabled: !!sorts.find(function (sort) {
                      return sort === x + '_ASC';
                    })
                  },
                  _extends({}, _definitions.metricsObj, _definitions.dimensionsObj)[x].label,
                  ' [Absteigend]'
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          _olympFela.Grid.Item,
          { medium: 3 },
          _react2.default.createElement(
            _select2.default,
            { mode: 'multiple', placeholder: 'Filter', onChange: changeFilters, value: filters },
            items.map(function (item) {
              return _react2.default.createElement(
                _select2.default.Option,
                { value: '' + item[dimensions[0]], key: item[dimensions[0]] },
                _definitions.dimensionsObj[dimensions[0]].renderFn(item[dimensions[0]])
              );
            })
          )
        )
      );
      var content = function content(isFullSize) {
        return _react2.default.createElement(
          _components.Container,
          null,
          loading && _ref8,
          !loading && _react.Children.map(charts[chart], function (child) {
            return (0, _react.cloneElement)(child, _extends({}, childProps, {
              fullSize: fullSize || isFullSize
            }));
          })
        );
      };

      return _react2.default.createElement(
        _components.FlexContainer,
        null,
        header,
        content(),
        footer,
        _react2.default.createElement(
          _olympFela.Modal,
          {
            open: open,
            header: _react2.default.createElement(
              _components.PaddingContainer,
              null,
              header
            ),
            footer: _react2.default.createElement(
              _components.PaddingContainer,
              null,
              footer
            ),
            onClose: setOpen,
            container: true
          },
          content(true)
        )
      );
    }
  }]);

  return Chart;
}(_react.Component)) || _class);
exports.default = Chart;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvYW5hbHl0aWNzL3ZpZXdzL2NoYXJ0LmVzNiJdLCJuYW1lcyI6WyJjaGFydHMiLCJiYXIiLCJiYXJWZXJ0aWNhbCIsImxpbmUiLCJwaWUiLCJ0YWJsZSIsImZpZWxkcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ4Iiwib3V0cHV0Iiwicm93RmllbGRzIiwiZ2V0SXRlbUZpZWxkcyIsImRhdGEiLCJtZXRyaWNzIiwiZGltZW5zaW9ucyIsIml0ZW0iLCJyb3dzIiwib2JqIiwiZm9yRWFjaCIsIm1ldHJpYyIsImRpbWVuc2lvbiIsIkNoYXJ0Iiwib3B0aW9ucyIsInNlbGVjdGVkIiwib25TZWxlY3QiLCJzdGFydCIsImVuZCIsInNvcnRzIiwidmFyaWFibGVzIiwibGVuZ3RoIiwiZmlsdGVycyIsIm9wZXJhdG9yIiwiZXhwcmVzc2lvbiIsInNlbGVjdGlvbiIsInByb3BzIiwib3duUHJvcHMiLCJsb2FkaW5nIiwiaXRlbXMiLCJjaGFuZ2VEaW1lbnNpb25zIiwiY2hhcnQiLCJjaGFuZ2VDaGFydCIsImNoYW5nZVNvcnRzIiwiY2hhbmdlRmlsdGVycyIsIm9wZW4iLCJzZXRPcGVuIiwicmFuZ2UiLCJmdWxsU2l6ZSIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJwdXNoIiwiY2hpbGRQcm9wcyIsImhlYWRlciIsImZvb3RlciIsImxhYmVsIiwiZmluZCIsInNvcnQiLCJyZW5kZXJGbiIsImNvbnRlbnQiLCJjaGlsZCIsImlzRnVsbFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFRQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTO0FBQ2JDLE9BQUsscURBRFE7QUFFYkMsZUFBYSxrREFBVSxjQUFWLEdBRkE7QUFHYkMsUUFBTSxzREFITztBQUliQyxPQUFLLHFEQUpRO0FBS2JDLFNBQU87QUFMTSxDQUFmOztBQVFBLElBQU1D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VyxDQUFYLENBQUwsQ0FBdEM7QUFESCxlQURTO0FBQUEsYUFBVjtBQURIO0FBREY7QUF2QkYsT0FERjtBQW1DQSxVQUFNMkMsVUFBVSxTQUFWQSxPQUFVO0FBQUEsZUFDZDtBQUFBO0FBQUE7QUFDR3JCLDBCQURIO0FBRUcsV0FBQ0EsT0FBRCxJQUNDLGdCQUFTN0IsR0FBVCxDQUFhVCxPQUFPeUMsS0FBUCxDQUFiLEVBQTRCO0FBQUEsbUJBQzFCLHlCQUFhbUIsS0FBYixlQUNLUixVQURMO0FBRUVKLHdCQUFVQSxZQUFZYTtBQUZ4QixlQUQwQjtBQUFBLFdBQTVCO0FBSEosU0FEYztBQUFBLE9BQWhCOztBQWFBLGFBQ0U7QUFBQTtBQUFBO0FBQ0dSLGNBREg7QUFFR00saUJBRkg7QUFHR0wsY0FISDtBQUtFO0FBQUE7QUFBQTtBQUNFLGtCQUFNVCxJQURSO0FBRUUsb0JBQVE7QUFBQTtBQUFBO0FBQW1CUTtBQUFuQixhQUZWO0FBR0Usb0JBQVE7QUFBQTtBQUFBO0FBQW1CQztBQUFuQixhQUhWO0FBSUUscUJBQVNSLE9BSlg7QUFLRTtBQUxGO0FBT0dhLGtCQUFRLElBQVI7QUFQSDtBQUxGLE9BREY7QUFpQkQ7Ozs7O2tCQS9Ia0JwQyxLIiwiZmlsZSI6ImNtcy9nb29nbGUvYW5hbHl0aWNzL3ZpZXdzL2NoYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBHcmlkLCBNb2RhbCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gIEZsZXhDb250YWluZXIsXG4gIFBhZGRpbmdDb250YWluZXIsXG4gIENvbnRhaW5lcixcbiAgTG9hZGVyLFxuICBUb29sYmFyLFxuICBNZXRyaWNTZWxlY3QsXG59IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGluZUNoYXJ0LCBCYXJDaGFydCwgVGFibGVDaGFydCwgUGllQ2hhcnQgfSBmcm9tICcuLi9jaGFydHMnO1xuaW1wb3J0IHsgbWV0cmljc09iaiwgZGltZW5zaW9uc09iaiB9IGZyb20gJy4uLy4uL2RlZmluaXRpb25zJztcblxuY29uc3QgY2hhcnRzID0ge1xuICBiYXI6IDxCYXJDaGFydCAvPixcbiAgYmFyVmVydGljYWw6IDxCYXJDaGFydCB2ZXJ0aWNhbCAvPixcbiAgbGluZTogPExpbmVDaGFydCAvPixcbiAgcGllOiA8UGllQ2hhcnQgLz4sXG4gIHRhYmxlOiA8VGFibGVDaGFydCAvPixcbn07XG5cbmNvbnN0IGZpZWxkcyA9IFsnaWQnLCAuLi5PYmplY3Qua2V5cyhtZXRyaWNzT2JqKS5tYXAoeCA9PiBtZXRyaWNzT2JqW3hdLm91dHB1dCldO1xuY29uc3Qgcm93RmllbGRzID0gWy4uLmZpZWxkcywgLi4uT2JqZWN0LmtleXMoZGltZW5zaW9uc09iaikubWFwKHggPT4gZGltZW5zaW9uc09ialt4XS5vdXRwdXQpXTtcbmNvbnN0IGdldEl0ZW1GaWVsZHMgPSAoZGF0YSwgbWV0cmljcywgZGltZW5zaW9ucykgPT5cbiAgKChkYXRhLml0ZW0gfHwge30pLnJvd3MgfHwgW10pLm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuXG4gICAgbWV0cmljcy5mb3JFYWNoKG1ldHJpYyA9PiAob2JqW21ldHJpY10gPSBpdGVtW21ldHJpY3NPYmpbbWV0cmljXS5vdXRwdXRdKSk7XG4gICAgZGltZW5zaW9ucy5mb3JFYWNoKGRpbWVuc2lvbiA9PiAob2JqW2RpbWVuc2lvbl0gPSBpdGVtW2RpbWVuc2lvbnNPYmpbZGltZW5zaW9uXS5vdXRwdXRdKSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9KTtcblxuQGdyYXBocWwoXG4gIGdxbGBcbiAgICBxdWVyeSBhbmFseXRpY3NRdWVyeShcbiAgICAgICRzdGFydDogU3RyaW5nIVxuICAgICAgJGVuZDogU3RyaW5nIVxuICAgICAgJG1ldHJpY3M6IFtBTkFMWVRJQ1NfTUVUUklDU11cbiAgICAgICRkaW1lbnNpb25zOiBbQU5BTFlUSUNTX0RJTUVOU0lPTlNdXG4gICAgICAkZmlsdGVyczogW0FuYWx5dGljc0ZpbHRlcl1cbiAgICAgICRzb3J0czogW0FOQUxZVElDU19TT1JUXVxuICAgICkge1xuICAgICAgaXRlbTogYW5hbHl0aWNzUXVlcnkoXG4gICAgICAgIHN0YXJ0OiAkc3RhcnRcbiAgICAgICAgZW5kOiAkZW5kXG4gICAgICAgIG1ldHJpY3M6ICRtZXRyaWNzXG4gICAgICAgIGRpbWVuc2lvbnM6ICRkaW1lbnNpb25zXG4gICAgICAgIGZpbHRlcnM6ICRmaWx0ZXJzXG4gICAgICAgIHNvcnRzOiAkc29ydHNcbiAgICAgICkge1xuICAgICAgICAke2ZpZWxkc31cbiAgICAgICAgcm93cyB7XG4gICAgICAgICAgJHtyb3dGaWVsZHN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIHtcbiAgICBvcHRpb25zOiAoeyBtZXRyaWNzLCBkaW1lbnNpb25zLCBzZWxlY3RlZCwgb25TZWxlY3QsIHN0YXJ0LCBlbmQsIHNvcnRzIH0pID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICAgICAgbWV0cmljcyxcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZCxcbiAgICAgIH07XG5cbiAgICAgIGlmIChkaW1lbnNpb25zKSB7XG4gICAgICAgIHZhcmlhYmxlcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLmxlbmd0aCAmJiAhb25TZWxlY3QpIHtcbiAgICAgICAgdmFyaWFibGVzLmZpbHRlcnMgPSBzZWxlY3RlZC5tYXAoc2VsZWN0aW9uID0+ICh7XG4gICAgICAgICAgZGltZW5zaW9uOiBkaW1lbnNpb25zW2RpbWVuc2lvbnMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgb3BlcmF0b3I6ICdFUScsXG4gICAgICAgICAgZXhwcmVzc2lvbjogc2VsZWN0aW9uLFxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3J0cykge1xuICAgICAgICB2YXJpYWJsZXMuc29ydHMgPSBzb3J0cztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFyaWFibGVzLFxuICAgICAgfTtcbiAgICB9LFxuICAgIHByb3BzOiAoeyBvd25Qcm9wcywgZGF0YSB9KSA9PiB7XG4gICAgICBjb25zdCB7IG1ldHJpY3MsIGRpbWVuc2lvbnMgfSA9IG93blByb3BzO1xuICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSBkYXRhO1xuICAgICAgY29uc3QgaXRlbXMgPSBnZXRJdGVtRmllbGRzKGRhdGEsIG1ldHJpY3MsIGRpbWVuc2lvbnMpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5vd25Qcm9wcyxcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgaXRlbXMsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtcyxcbiAgICAgIG1ldHJpY3MsXG4gICAgICBkaW1lbnNpb25zLFxuICAgICAgY2hhbmdlRGltZW5zaW9ucyxcbiAgICAgIGNoYXJ0LFxuICAgICAgY2hhbmdlQ2hhcnQsXG4gICAgICBzb3J0cyxcbiAgICAgIGNoYW5nZVNvcnRzLFxuICAgICAgZmlsdGVycyxcbiAgICAgIGNoYW5nZUZpbHRlcnMsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgb3BlbixcbiAgICAgIHNldE9wZW4sXG4gICAgICByYW5nZSxcbiAgICAgIGZ1bGxTaXplLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnByb3BzLmxvYWRpbmcgfHwgIW1ldHJpY3MubGVuZ3RoIHx8ICFkaW1lbnNpb25zLmxlbmd0aCB8fCAhcmFuZ2UubGVuZ3RoO1xuXG4gICAgbGV0IGZpbHRlcmVkSXRlbXMgPSBpdGVtcztcbiAgICBpZiAoZmlsdGVycy5sZW5ndGgpIHtcbiAgICAgIGZpbHRlcmVkSXRlbXMgPSBbXTtcblxuICAgICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtW2RpbWVuc2lvbnNbMF1dID09PSBmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgIGl0ZW1zOiBmaWx0ZXJlZEl0ZW1zLFxuICAgICAgbWV0cmljcyxcbiAgICAgIGRpbWVuc2lvbnMsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0LFxuICAgIH07XG5cbiAgICBjb25zdCBoZWFkZXIgPSAoXG4gICAgICA8VG9vbGJhciBzaXplPXsxMn0+XG4gICAgICAgIDxHcmlkLkl0ZW0gbWVkaXVtPXs4fT5cbiAgICAgICAgICA8TWV0cmljU2VsZWN0IHZhbHVlPXtkaW1lbnNpb25zfSBvbkNoYW5nZT17Y2hhbmdlRGltZW5zaW9uc30gaXNEaW1lbnNpb24gLz5cbiAgICAgICAgPC9HcmlkLkl0ZW0+XG4gICAgICAgIDxHcmlkLkl0ZW0gbWVkaXVtPXszfT5cbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiQ2hhcnRcIiB2YWx1ZT17Y2hhcnR9IG9uQ2hhbmdlPXtjaGFuZ2VDaGFydH0+XG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImxpbmVcIj5MaW5pZTwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiYmFyXCI+QmFsa2VuPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJiYXJWZXJ0aWNhbFwiPkJhbGtlbiB2ZXJ0aWthbDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwicGllXCI+S3VjaGVuPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJ0YWJsZVwiPlRhYmVsbGU8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvR3JpZC5JdGVtPlxuICAgICAgICA8R3JpZC5JdGVtIG1lZGl1bT17MX0+XG4gICAgICAgICAgPEJ1dHRvbiBpY29uPXtvcGVuID8gJ3NocmluaycgOiAnYXJyb3dzLWFsdCd9IG9uQ2xpY2s9e3NldE9wZW59IGRpc2FibGVkPXtsb2FkaW5nfSAvPlxuICAgICAgICA8L0dyaWQuSXRlbT5cbiAgICAgIDwvVG9vbGJhcj5cbiAgICApO1xuICAgIGNvbnN0IGZvb3RlciA9IChcbiAgICAgIDxUb29sYmFyIHNpemU9ezZ9IGJvdHRvbT5cbiAgICAgICAgPEdyaWQuSXRlbSBtZWRpdW09ezN9PlxuICAgICAgICAgIDxTZWxlY3QgbW9kZT1cIm11bHRpcGxlXCIgcGxhY2Vob2xkZXI9XCJTb3J0aWVydW5nXCIgb25DaGFuZ2U9e2NoYW5nZVNvcnRzfSB2YWx1ZT17c29ydHN9PlxuICAgICAgICAgICAge1suLi5tZXRyaWNzLCAuLi5kaW1lbnNpb25zXS5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgIDxTZWxlY3QuT3B0R3JvdXAgbGFiZWw9e3sgLi4ubWV0cmljc09iaiwgLi4uZGltZW5zaW9uc09iaiB9W3hdLmxhYmVsfSBrZXk9e3h9PlxuICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YCR7eH1fQVNDYH1cbiAgICAgICAgICAgICAgICAgIGtleT17YCR7eH1fQVNDYH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIXNvcnRzLmZpbmQoc29ydCA9PiBzb3J0ID09PSBgJHt4fV9ERVNDYCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgLi4ubWV0cmljc09iaiwgLi4uZGltZW5zaW9uc09iaiB9W3hdLmxhYmVsfSBbQXVmc3RlaWdlbmRdXG4gICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YCR7eH1fREVTQ2B9XG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake3h9X0RFU0NgfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEhc29ydHMuZmluZChzb3J0ID0+IHNvcnQgPT09IGAke3h9X0FTQ2ApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IC4uLm1ldHJpY3NPYmosIC4uLmRpbWVuc2lvbnNPYmogfVt4XS5sYWJlbH0gW0Fic3RlaWdlbmRdXG4gICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRHcm91cD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L0dyaWQuSXRlbT5cbiAgICAgICAgPEdyaWQuSXRlbSBtZWRpdW09ezN9PlxuICAgICAgICAgIDxTZWxlY3QgbW9kZT1cIm11bHRpcGxlXCIgcGxhY2Vob2xkZXI9XCJGaWx0ZXJcIiBvbkNoYW5nZT17Y2hhbmdlRmlsdGVyc30gdmFsdWU9e2ZpbHRlcnN9PlxuICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9e2Ake2l0ZW1bZGltZW5zaW9uc1swXV19YH0ga2V5PXtpdGVtW2RpbWVuc2lvbnNbMF1dfT5cbiAgICAgICAgICAgICAgICB7ZGltZW5zaW9uc09ialtkaW1lbnNpb25zWzBdXS5yZW5kZXJGbihpdGVtW2RpbWVuc2lvbnNbMF1dKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvR3JpZC5JdGVtPlxuICAgICAgPC9Ub29sYmFyPlxuICAgICk7XG4gICAgY29uc3QgY29udGVudCA9IGlzRnVsbFNpemUgPT4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAge2xvYWRpbmcgJiYgPExvYWRlciBsb2FkaW5nIC8+fVxuICAgICAgICB7IWxvYWRpbmcgJiZcbiAgICAgICAgICBDaGlsZHJlbi5tYXAoY2hhcnRzW2NoYXJ0XSwgY2hpbGQgPT5cbiAgICAgICAgICAgIGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAuLi5jaGlsZFByb3BzLFxuICAgICAgICAgICAgICBmdWxsU2l6ZTogZnVsbFNpemUgfHwgaXNGdWxsU2l6ZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGbGV4Q29udGFpbmVyPlxuICAgICAgICB7aGVhZGVyfVxuICAgICAgICB7Y29udGVudCgpfVxuICAgICAgICB7Zm9vdGVyfVxuXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgaGVhZGVyPXs8UGFkZGluZ0NvbnRhaW5lcj57aGVhZGVyfTwvUGFkZGluZ0NvbnRhaW5lcj59XG4gICAgICAgICAgZm9vdGVyPXs8UGFkZGluZ0NvbnRhaW5lcj57Zm9vdGVyfTwvUGFkZGluZ0NvbnRhaW5lcj59XG4gICAgICAgICAgb25DbG9zZT17c2V0T3Blbn1cbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50KHRydWUpfVxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9GbGV4Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
