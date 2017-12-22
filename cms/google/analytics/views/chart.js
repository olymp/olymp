import 'antd/lib/select/style';
import _Select12 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select11 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select10 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select9 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select8 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select7 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select6 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select5 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select4 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select3 from 'antd/lib/select';
import 'antd/lib/select/style';
import _Select2 from 'antd/lib/select';
import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/select/style';
import _Select from 'antd/lib/select';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _templateObject = _taggedTemplateLiteral(['\n    query analyticsQuery(\n      $start: String!\n      $end: String!\n      $metrics: [ANALYTICS_METRICS]\n      $dimensions: [ANALYTICS_DIMENSIONS]\n      $filters: [AnalyticsFilter]\n      $sorts: [ANALYTICS_SORT]\n    ) {\n      item: analyticsQuery(\n        start: $start\n        end: $end\n        metrics: $metrics\n        dimensions: $dimensions\n        filters: $filters\n        sorts: $sorts\n      ) {\n        ', '\n        rows {\n          ', '\n        }\n      }\n    }\n  '], ['\n    query analyticsQuery(\n      $start: String!\n      $end: String!\n      $metrics: [ANALYTICS_METRICS]\n      $dimensions: [ANALYTICS_DIMENSIONS]\n      $filters: [AnalyticsFilter]\n      $sorts: [ANALYTICS_SORT]\n    ) {\n      item: analyticsQuery(\n        start: $start\n        end: $end\n        metrics: $metrics\n        dimensions: $dimensions\n        filters: $filters\n        sorts: $sorts\n      ) {\n        ', '\n        rows {\n          ', '\n        }\n      }\n    }\n  ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React, { Component, Children, cloneElement } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Grid, Modal } from 'olymp-fela';

import { FlexContainer, PaddingContainer, Container, Loader, Toolbar, MetricSelect } from '../components';
import { LineChart, BarChart, TableChart, PieChart } from '../charts';
import { metricsObj, dimensionsObj } from '../../definitions';

var charts = {
  bar: React.createElement(BarChart, null),
  barVertical: React.createElement(BarChart, { vertical: true }),
  line: React.createElement(LineChart, null),
  pie: React.createElement(PieChart, null),
  table: React.createElement(TableChart, null)
};

var fields = ['id'].concat(_toConsumableArray(Object.keys(metricsObj).map(function (x) {
  return metricsObj[x].output;
})));
var rowFields = [].concat(_toConsumableArray(fields), _toConsumableArray(Object.keys(dimensionsObj).map(function (x) {
  return dimensionsObj[x].output;
})));
var getItemFields = function getItemFields(data, metrics, dimensions) {
  return ((data.item || {}).rows || []).map(function (item) {
    var obj = {};

    metrics.forEach(function (metric) {
      return obj[metric] = item[metricsObj[metric].output];
    });
    dimensions.forEach(function (dimension) {
      return obj[dimension] = item[dimensionsObj[dimension].output];
    });

    return obj;
  });
};

var _ref3 = React.createElement(
  _Select8.Option,
  { value: 'line' },
  'Linie'
);

var _ref4 = React.createElement(
  _Select9.Option,
  { value: 'bar' },
  'Balken'
);

var _ref5 = React.createElement(
  _Select10.Option,
  { value: 'barVertical' },
  'Balken vertikal'
);

var _ref6 = React.createElement(
  _Select11.Option,
  { value: 'pie' },
  'Kuchen'
);

var _ref7 = React.createElement(
  _Select12.Option,
  { value: 'table' },
  'Tabelle'
);

var _ref8 = React.createElement(Loader, { loading: true });

var Chart = (_dec = graphql(gql(_templateObject, fields, rowFields), {
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

      var header = React.createElement(
        Toolbar,
        { size: 12 },
        React.createElement(
          Grid.Item,
          { medium: 8 },
          React.createElement(MetricSelect, { value: dimensions, onChange: changeDimensions, isDimension: true })
        ),
        React.createElement(
          Grid.Item,
          { medium: 3 },
          React.createElement(
            _Select,
            { placeholder: 'Chart', value: chart, onChange: changeChart },
            _ref3,
            _ref4,
            _ref5,
            _ref6,
            _ref7
          )
        ),
        React.createElement(
          Grid.Item,
          { medium: 1 },
          React.createElement(_Button, { icon: open ? 'shrink' : 'arrows-alt', onClick: setOpen, disabled: loading })
        )
      );
      var footer = React.createElement(
        Toolbar,
        { size: 6, bottom: true },
        React.createElement(
          Grid.Item,
          { medium: 3 },
          React.createElement(
            _Select5,
            { mode: 'multiple', placeholder: 'Sortierung', onChange: changeSorts, value: sorts },
            [].concat(_toConsumableArray(metrics), _toConsumableArray(dimensions)).map(function (x) {
              return React.createElement(
                _Select4.OptGroup,
                { label: _extends({}, metricsObj, dimensionsObj)[x].label, key: x },
                React.createElement(
                  _Select2.Option,
                  {
                    value: x + '_ASC',
                    key: x + '_ASC',
                    disabled: !!sorts.find(function (sort) {
                      return sort === x + '_DESC';
                    })
                  },
                  _extends({}, metricsObj, dimensionsObj)[x].label,
                  ' [Aufsteigend]'
                ),
                React.createElement(
                  _Select3.Option,
                  {
                    value: x + '_DESC',
                    key: x + '_DESC',
                    disabled: !!sorts.find(function (sort) {
                      return sort === x + '_ASC';
                    })
                  },
                  _extends({}, metricsObj, dimensionsObj)[x].label,
                  ' [Absteigend]'
                )
              );
            })
          )
        ),
        React.createElement(
          Grid.Item,
          { medium: 3 },
          React.createElement(
            _Select7,
            { mode: 'multiple', placeholder: 'Filter', onChange: changeFilters, value: filters },
            items.map(function (item) {
              return React.createElement(
                _Select6.Option,
                { value: '' + item[dimensions[0]], key: item[dimensions[0]] },
                dimensionsObj[dimensions[0]].renderFn(item[dimensions[0]])
              );
            })
          )
        )
      );
      var content = function content(isFullSize) {
        return React.createElement(
          Container,
          null,
          loading && _ref8,
          !loading && Children.map(charts[chart], function (child) {
            return cloneElement(child, _extends({}, childProps, {
              fullSize: fullSize || isFullSize
            }));
          })
        );
      };

      return React.createElement(
        FlexContainer,
        null,
        header,
        content(),
        footer,
        React.createElement(
          Modal,
          {
            open: open,
            header: React.createElement(
              PaddingContainer,
              null,
              header
            ),
            footer: React.createElement(
              PaddingContainer,
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
}(Component)) || _class);
export { Chart as default };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9hbmFseXRpY3Mvdmlld3MvY2hhcnQuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJncWwiLCJncmFwaHFsIiwiR3JpZCIsIk1vZGFsIiwiRmxleENvbnRhaW5lciIsIlBhZGRpbmdDb250YWluZXIiLCJDb250YWluZXIiLCJMb2FkZXIiLCJUb29sYmFyIiwiTWV0cmljU2VsZWN0IiwiTGluZUNoYXJ0IiwiQmFyQ2hhcnQiLCJUYWJsZUNoYXJ0IiwiUGllQ2hhcnQiLCJtZXRyaWNzT2JqIiwiZGltZW5zaW9uc09iaiIsImNoYXJ0cyIsImJhciIsImJhclZlcnRpY2FsIiwibGluZSIsInBpZSIsInRhYmxlIiwiZmllbGRzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIngiLCJvdXRwdXQiLCJyb3dGaWVsZHMiLCJnZXRJdGVtRmllbGRzIiwiZGF0YSIsIm1ldHJpY3MiLCJkaW1lbnNpb25zIiwiaXRlbSIsInJvd3MiLCJvYmoiLCJmb3JFYWNoIiwibWV0cmljIiwiZGltZW5zaW9uIiwiQ2hhcnQiLCJvcHRpb25zIiwic2VsZWN0ZWQiLCJvblNlbGVjdCIsInN0YXJ0IiwiZW5kIiwic29ydHMiLCJ2YXJpYWJsZXMiLCJsZW5ndGgiLCJmaWx0ZXJzIiwib3BlcmF0b3IiLCJleHByZXNzaW9uIiwic2VsZWN0aW9uIiwicHJvcHMiLCJvd25Qcm9wcyIsImxvYWRpbmciLCJpdGVtcyIsImNoYW5nZURpbWVuc2lvbnMiLCJjaGFydCIsImNoYW5nZUNoYXJ0IiwiY2hhbmdlU29ydHMiLCJjaGFuZ2VGaWx0ZXJzIiwib3BlbiIsInNldE9wZW4iLCJyYW5nZSIsImZ1bGxTaXplIiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsInB1c2giLCJjaGlsZFByb3BzIiwiaGVhZGVyIiwiZm9vdGVyIiwibGFiZWwiLCJmaW5kIiwic29ydCIsInJlbmRlckZuIiwiY29udGVudCIsImNoaWxk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QUFELElBQ0N4RCxTQUFTMkIsR0FBVCxDQUFhVCxPQUFPeUMsS0FBUCxDQUFiLEVBQTRCO0FBQUEsbUJBQzFCMUQsYUFBYTZFLEtBQWIsZUFDS1IsVUFETDtBQUVFSix3QkFBVUEsWUFBWWE7QUFGeEIsZUFEMEI7QUFBQSxXQUE1QjtBQUhKLFNBRGM7QUFBQSxPQUFoQjs7QUFhQSxhQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNHUixjQURIO0FBRUdNLGlCQUZIO0FBR0dMLGNBSEg7QUFLRTtBQUFDLGVBQUQ7QUFBQTtBQUNFLGtCQUFNVCxJQURSO0FBRUUsb0JBQVE7QUFBQyw4QkFBRDtBQUFBO0FBQW1CUTtBQUFuQixhQUZWO0FBR0Usb0JBQVE7QUFBQyw4QkFBRDtBQUFBO0FBQW1CQztBQUFuQixhQUhWO0FBSUUscUJBQVNSLE9BSlg7QUFLRTtBQUxGO0FBT0dhLGtCQUFRLElBQVI7QUFQSDtBQUxGLE9BREY7QUFpQkQ7Ozs7RUEvSGdDOUUsUztTQUFkMEMsSyIsImZpbGUiOiJwYWNrYWdlcy9nb29nbGUvYW5hbHl0aWNzL3ZpZXdzL2NoYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBHcmlkLCBNb2RhbCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3QgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gIEZsZXhDb250YWluZXIsXG4gIFBhZGRpbmdDb250YWluZXIsXG4gIENvbnRhaW5lcixcbiAgTG9hZGVyLFxuICBUb29sYmFyLFxuICBNZXRyaWNTZWxlY3QsXG59IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGluZUNoYXJ0LCBCYXJDaGFydCwgVGFibGVDaGFydCwgUGllQ2hhcnQgfSBmcm9tICcuLi9jaGFydHMnO1xuaW1wb3J0IHsgbWV0cmljc09iaiwgZGltZW5zaW9uc09iaiB9IGZyb20gJy4uLy4uL2RlZmluaXRpb25zJztcblxuY29uc3QgY2hhcnRzID0ge1xuICBiYXI6IDxCYXJDaGFydCAvPixcbiAgYmFyVmVydGljYWw6IDxCYXJDaGFydCB2ZXJ0aWNhbCAvPixcbiAgbGluZTogPExpbmVDaGFydCAvPixcbiAgcGllOiA8UGllQ2hhcnQgLz4sXG4gIHRhYmxlOiA8VGFibGVDaGFydCAvPixcbn07XG5cbmNvbnN0IGZpZWxkcyA9IFsnaWQnLCAuLi5PYmplY3Qua2V5cyhtZXRyaWNzT2JqKS5tYXAoeCA9PiBtZXRyaWNzT2JqW3hdLm91dHB1dCldO1xuY29uc3Qgcm93RmllbGRzID0gWy4uLmZpZWxkcywgLi4uT2JqZWN0LmtleXMoZGltZW5zaW9uc09iaikubWFwKHggPT4gZGltZW5zaW9uc09ialt4XS5vdXRwdXQpXTtcbmNvbnN0IGdldEl0ZW1GaWVsZHMgPSAoZGF0YSwgbWV0cmljcywgZGltZW5zaW9ucykgPT5cbiAgKChkYXRhLml0ZW0gfHwge30pLnJvd3MgfHwgW10pLm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuXG4gICAgbWV0cmljcy5mb3JFYWNoKG1ldHJpYyA9PiAob2JqW21ldHJpY10gPSBpdGVtW21ldHJpY3NPYmpbbWV0cmljXS5vdXRwdXRdKSk7XG4gICAgZGltZW5zaW9ucy5mb3JFYWNoKGRpbWVuc2lvbiA9PiAob2JqW2RpbWVuc2lvbl0gPSBpdGVtW2RpbWVuc2lvbnNPYmpbZGltZW5zaW9uXS5vdXRwdXRdKSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9KTtcblxuQGdyYXBocWwoXG4gIGdxbGBcbiAgICBxdWVyeSBhbmFseXRpY3NRdWVyeShcbiAgICAgICRzdGFydDogU3RyaW5nIVxuICAgICAgJGVuZDogU3RyaW5nIVxuICAgICAgJG1ldHJpY3M6IFtBTkFMWVRJQ1NfTUVUUklDU11cbiAgICAgICRkaW1lbnNpb25zOiBbQU5BTFlUSUNTX0RJTUVOU0lPTlNdXG4gICAgICAkZmlsdGVyczogW0FuYWx5dGljc0ZpbHRlcl1cbiAgICAgICRzb3J0czogW0FOQUxZVElDU19TT1JUXVxuICAgICkge1xuICAgICAgaXRlbTogYW5hbHl0aWNzUXVlcnkoXG4gICAgICAgIHN0YXJ0OiAkc3RhcnRcbiAgICAgICAgZW5kOiAkZW5kXG4gICAgICAgIG1ldHJpY3M6ICRtZXRyaWNzXG4gICAgICAgIGRpbWVuc2lvbnM6ICRkaW1lbnNpb25zXG4gICAgICAgIGZpbHRlcnM6ICRmaWx0ZXJzXG4gICAgICAgIHNvcnRzOiAkc29ydHNcbiAgICAgICkge1xuICAgICAgICAke2ZpZWxkc31cbiAgICAgICAgcm93cyB7XG4gICAgICAgICAgJHtyb3dGaWVsZHN9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIHtcbiAgICBvcHRpb25zOiAoeyBtZXRyaWNzLCBkaW1lbnNpb25zLCBzZWxlY3RlZCwgb25TZWxlY3QsIHN0YXJ0LCBlbmQsIHNvcnRzIH0pID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICAgICAgbWV0cmljcyxcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZCxcbiAgICAgIH07XG5cbiAgICAgIGlmIChkaW1lbnNpb25zKSB7XG4gICAgICAgIHZhcmlhYmxlcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLmxlbmd0aCAmJiAhb25TZWxlY3QpIHtcbiAgICAgICAgdmFyaWFibGVzLmZpbHRlcnMgPSBzZWxlY3RlZC5tYXAoc2VsZWN0aW9uID0+ICh7XG4gICAgICAgICAgZGltZW5zaW9uOiBkaW1lbnNpb25zW2RpbWVuc2lvbnMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgb3BlcmF0b3I6ICdFUScsXG4gICAgICAgICAgZXhwcmVzc2lvbjogc2VsZWN0aW9uLFxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3J0cykge1xuICAgICAgICB2YXJpYWJsZXMuc29ydHMgPSBzb3J0cztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFyaWFibGVzLFxuICAgICAgfTtcbiAgICB9LFxuICAgIHByb3BzOiAoeyBvd25Qcm9wcywgZGF0YSB9KSA9PiB7XG4gICAgICBjb25zdCB7IG1ldHJpY3MsIGRpbWVuc2lvbnMgfSA9IG93blByb3BzO1xuICAgICAgY29uc3QgeyBsb2FkaW5nIH0gPSBkYXRhO1xuICAgICAgY29uc3QgaXRlbXMgPSBnZXRJdGVtRmllbGRzKGRhdGEsIG1ldHJpY3MsIGRpbWVuc2lvbnMpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5vd25Qcm9wcyxcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgaXRlbXMsXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtcyxcbiAgICAgIG1ldHJpY3MsXG4gICAgICBkaW1lbnNpb25zLFxuICAgICAgY2hhbmdlRGltZW5zaW9ucyxcbiAgICAgIGNoYXJ0LFxuICAgICAgY2hhbmdlQ2hhcnQsXG4gICAgICBzb3J0cyxcbiAgICAgIGNoYW5nZVNvcnRzLFxuICAgICAgZmlsdGVycyxcbiAgICAgIGNoYW5nZUZpbHRlcnMsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgb3BlbixcbiAgICAgIHNldE9wZW4sXG4gICAgICByYW5nZSxcbiAgICAgIGZ1bGxTaXplLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnByb3BzLmxvYWRpbmcgfHwgIW1ldHJpY3MubGVuZ3RoIHx8ICFkaW1lbnNpb25zLmxlbmd0aCB8fCAhcmFuZ2UubGVuZ3RoO1xuXG4gICAgbGV0IGZpbHRlcmVkSXRlbXMgPSBpdGVtcztcbiAgICBpZiAoZmlsdGVycy5sZW5ndGgpIHtcbiAgICAgIGZpbHRlcmVkSXRlbXMgPSBbXTtcblxuICAgICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtW2RpbWVuc2lvbnNbMF1dID09PSBmaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgIGl0ZW1zOiBmaWx0ZXJlZEl0ZW1zLFxuICAgICAgbWV0cmljcyxcbiAgICAgIGRpbWVuc2lvbnMsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0LFxuICAgIH07XG5cbiAgICBjb25zdCBoZWFkZXIgPSAoXG4gICAgICA8VG9vbGJhciBzaXplPXsxMn0+XG4gICAgICAgIDxHcmlkLkl0ZW0gbWVkaXVtPXs4fT5cbiAgICAgICAgICA8TWV0cmljU2VsZWN0IHZhbHVlPXtkaW1lbnNpb25zfSBvbkNoYW5nZT17Y2hhbmdlRGltZW5zaW9uc30gaXNEaW1lbnNpb24gLz5cbiAgICAgICAgPC9HcmlkLkl0ZW0+XG4gICAgICAgIDxHcmlkLkl0ZW0gbWVkaXVtPXszfT5cbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiQ2hhcnRcIiB2YWx1ZT17Y2hhcnR9IG9uQ2hhbmdlPXtjaGFuZ2VDaGFydH0+XG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImxpbmVcIj5MaW5pZTwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiYmFyXCI+QmFsa2VuPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJiYXJWZXJ0aWNhbFwiPkJhbGtlbiB2ZXJ0aWthbDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwicGllXCI+S3VjaGVuPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJ0YWJsZVwiPlRhYmVsbGU8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvR3JpZC5JdGVtPlxuICAgICAgICA8R3JpZC5JdGVtIG1lZGl1bT17MX0+XG4gICAgICAgICAgPEJ1dHRvbiBpY29uPXtvcGVuID8gJ3NocmluaycgOiAnYXJyb3dzLWFsdCd9IG9uQ2xpY2s9e3NldE9wZW59IGRpc2FibGVkPXtsb2FkaW5nfSAvPlxuICAgICAgICA8L0dyaWQuSXRlbT5cbiAgICAgIDwvVG9vbGJhcj5cbiAgICApO1xuICAgIGNvbnN0IGZvb3RlciA9IChcbiAgICAgIDxUb29sYmFyIHNpemU9ezZ9IGJvdHRvbT5cbiAgICAgICAgPEdyaWQuSXRlbSBtZWRpdW09ezN9PlxuICAgICAgICAgIDxTZWxlY3QgbW9kZT1cIm11bHRpcGxlXCIgcGxhY2Vob2xkZXI9XCJTb3J0aWVydW5nXCIgb25DaGFuZ2U9e2NoYW5nZVNvcnRzfSB2YWx1ZT17c29ydHN9PlxuICAgICAgICAgICAge1suLi5tZXRyaWNzLCAuLi5kaW1lbnNpb25zXS5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgIDxTZWxlY3QuT3B0R3JvdXAgbGFiZWw9e3sgLi4ubWV0cmljc09iaiwgLi4uZGltZW5zaW9uc09iaiB9W3hdLmxhYmVsfSBrZXk9e3h9PlxuICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YCR7eH1fQVNDYH1cbiAgICAgICAgICAgICAgICAgIGtleT17YCR7eH1fQVNDYH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIXNvcnRzLmZpbmQoc29ydCA9PiBzb3J0ID09PSBgJHt4fV9ERVNDYCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgLi4ubWV0cmljc09iaiwgLi4uZGltZW5zaW9uc09iaiB9W3hdLmxhYmVsfSBbQXVmc3RlaWdlbmRdXG4gICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YCR7eH1fREVTQ2B9XG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake3h9X0RFU0NgfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEhc29ydHMuZmluZChzb3J0ID0+IHNvcnQgPT09IGAke3h9X0FTQ2ApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IC4uLm1ldHJpY3NPYmosIC4uLmRpbWVuc2lvbnNPYmogfVt4XS5sYWJlbH0gW0Fic3RlaWdlbmRdXG4gICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRHcm91cD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L0dyaWQuSXRlbT5cbiAgICAgICAgPEdyaWQuSXRlbSBtZWRpdW09ezN9PlxuICAgICAgICAgIDxTZWxlY3QgbW9kZT1cIm11bHRpcGxlXCIgcGxhY2Vob2xkZXI9XCJGaWx0ZXJcIiBvbkNoYW5nZT17Y2hhbmdlRmlsdGVyc30gdmFsdWU9e2ZpbHRlcnN9PlxuICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9e2Ake2l0ZW1bZGltZW5zaW9uc1swXV19YH0ga2V5PXtpdGVtW2RpbWVuc2lvbnNbMF1dfT5cbiAgICAgICAgICAgICAgICB7ZGltZW5zaW9uc09ialtkaW1lbnNpb25zWzBdXS5yZW5kZXJGbihpdGVtW2RpbWVuc2lvbnNbMF1dKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvR3JpZC5JdGVtPlxuICAgICAgPC9Ub29sYmFyPlxuICAgICk7XG4gICAgY29uc3QgY29udGVudCA9IGlzRnVsbFNpemUgPT4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAge2xvYWRpbmcgJiYgPExvYWRlciBsb2FkaW5nIC8+fVxuICAgICAgICB7IWxvYWRpbmcgJiZcbiAgICAgICAgICBDaGlsZHJlbi5tYXAoY2hhcnRzW2NoYXJ0XSwgY2hpbGQgPT5cbiAgICAgICAgICAgIGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAuLi5jaGlsZFByb3BzLFxuICAgICAgICAgICAgICBmdWxsU2l6ZTogZnVsbFNpemUgfHwgaXNGdWxsU2l6ZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGbGV4Q29udGFpbmVyPlxuICAgICAgICB7aGVhZGVyfVxuICAgICAgICB7Y29udGVudCgpfVxuICAgICAgICB7Zm9vdGVyfVxuXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgaGVhZGVyPXs8UGFkZGluZ0NvbnRhaW5lcj57aGVhZGVyfTwvUGFkZGluZ0NvbnRhaW5lcj59XG4gICAgICAgICAgZm9vdGVyPXs8UGFkZGluZ0NvbnRhaW5lcj57Zm9vdGVyfTwvUGFkZGluZ0NvbnRhaW5lcj59XG4gICAgICAgICAgb25DbG9zZT17c2V0T3Blbn1cbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50KHRydWUpfVxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9GbGV4Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
