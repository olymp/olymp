'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/table/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _olympFela = require('olymp-fela');

var _definitions = require('../../definitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AntTable = (0, _olympFela.createComponent)(function (_ref) {
  var rowSelection = _ref.rowSelection;
  return {
    '& .ant-table-row': {
      cursor: !!rowSelection && 'pointer'
    }
  };
}, function (p) {
  return _react2.default.createElement(_table2.default, p);
}, function (p) {
  return Object.keys(p);
});

var TableChart = function (_Component) {
  _inherits(TableChart, _Component);

  function TableChart() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, TableChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = TableChart.__proto__ || Object.getPrototypeOf(TableChart)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { sortedInfo: {} }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableChart, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _onSelect = _props.onSelect,
          dimensions = _props.dimensions,
          items = _props.items,
          selected = _props.selected;
      var sortedInfo = this.state.sortedInfo;

      var xData = dimensions[0];
      var columns = [];
      Object.keys(items && !items.lenght && items[0] || {}).forEach(function (key) {
        var item = _extends({}, _definitions.metricsObj, _definitions.dimensionsObj)[key];

        columns.push({
          title: item.label,
          dataIndex: key,
          render: item.renderFn,
          sorter: function sorter(a, b) {
            switch (_typeof(a[key])) {
              case 'number':
                return a[key] - b[key];

              default:
                if (a[key].toUpperCase() < b[key].toUpperCase()) {
                  return -1;
                }
                if (a[key].toUpperCase() > b[key].toUpperCase()) {
                  return 1;
                }
                return 0;
            }
          },
          sortOrder: sortedInfo.columnKey === key && sortedInfo.order
        });
      });

      return _react2.default.createElement(AntTable, {
        size: 'small',
        rowKey: 'key-' + dimensions.join('-'),
        columns: columns,
        dataSource: items.map(function (item, i) {
          return _extends({}, item, _defineProperty({}, 'key-' + dimensions.join('-'), i));
        }),
        onRowClick: _onSelect && function (item) {
          return _onSelect(item[xData]);
        },
        rowSelection: _onSelect && {
          selectedRowKeys: selected.map(function (selection) {
            return items.findIndex(function (item) {
              return item[xData] === selection;
            });
          }),
          onSelect: function onSelect(item) {
            return _onSelect(item[xData]);
          }
        },
        onChange: function onChange(pagination, filters, sorter) {
          return _this2.setState({ sortedInfo: sorter });
        }
      });
    }
  }]);

  return TableChart;
}(_react.Component);

exports.default = TableChart;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9nb29nbGUvYW5hbHl0aWNzL2NoYXJ0cy90YWJsZS5lczYiXSwibmFtZXMiOlsiQW50VGFibGUiLCJyb3dTZWxlY3Rpb24iLCJjdXJzb3IiLCJwIiwiT2JqZWN0Iiwia2V5cyIsIlRhYmxlQ2hhcnQiLCJzdGF0ZSIsInNvcnRlZEluZm8iLCJwcm9wcyIsIm9uU2VsZWN0IiwiZGltZW5zaW9ucyIsIml0ZW1zIiwic2VsZWN0ZWQiLCJ4RGF0YSIsImNvbHVtbnMiLCJsZW5naHQiLCJmb3JFYWNoIiwiaXRlbSIsImtleSIsInB1c2giLCJ0aXRsZSIsImxhYmVsIiwiZGF0YUluZGV4IiwicmVuZGVyIiwicmVuZGVyRm4iLCJzb3J0ZXIiLCJhIiwiYiIsInRvVXBwZXJDYXNlIiwic29ydE9yZGVyIiwiY29sdW1uS2V5Iiwib3JkZXIiLCJqb2luIiwibWFwIiwiaSIsInNlbGVjdGVkUm93S2V5cyIsImZpbmRJbmRleCIsInNlbGVjdGlvbiIsInBhZ2luYXRpb24iLCJmaWx0ZXJzIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLGdDQUNmO0FBQUEsTUFBR0MsWUFBSCxRQUFHQSxZQUFIO0FBQUEsU0FBdUI7QUFDckIsd0JBQW9CO0FBQ2xCQyxjQUFRLENBQUMsQ0FBQ0QsWUFBRixJQUFrQjtBQURSO0FBREMsR0FBdkI7QUFBQSxDQURlLEVBTWY7QUFBQSxTQUFLLCtDQUFXRSxDQUFYLENBQUw7QUFBQSxDQU5lLEVBT2Y7QUFBQSxTQUFLQyxPQUFPQyxJQUFQLENBQVlGLENBQVosQ0FBTDtBQUFBLENBUGUsQ0FBakI7O0lBVXFCRyxVOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLEssR0FBUSxFQUFFQyxZQUFZLEVBQWQsRTs7Ozs7NkJBRUM7QUFBQTs7QUFBQSxtQkFDMkMsS0FBS0MsS0FEaEQ7QUFBQSxVQUNDQyxTQURELFVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxVQURYLFVBQ1dBLFVBRFg7QUFBQSxVQUN1QkMsS0FEdkIsVUFDdUJBLEtBRHZCO0FBQUEsVUFDOEJDLFFBRDlCLFVBQzhCQSxRQUQ5QjtBQUFBLFVBRUNMLFVBRkQsR0FFZ0IsS0FBS0QsS0FGckIsQ0FFQ0MsVUFGRDs7QUFHUCxVQUFNTSxRQUFRSCxXQUFXLENBQVgsQ0FBZDtBQUNBLFVBQU1JLFVBQVUsRUFBaEI7QUFDQVgsYUFBT0MsSUFBUCxDQUFhTyxTQUFTLENBQUNBLE1BQU1JLE1BQWhCLElBQTBCSixNQUFNLENBQU4sQ0FBM0IsSUFBd0MsRUFBcEQsRUFBd0RLLE9BQXhELENBQWdFLGVBQU87QUFDckUsWUFBTUMsT0FBTyxrRUFBb0NDLEdBQXBDLENBQWI7O0FBRUFKLGdCQUFRSyxJQUFSLENBQWE7QUFDWEMsaUJBQU9ILEtBQUtJLEtBREQ7QUFFWEMscUJBQVdKLEdBRkE7QUFHWEssa0JBQVFOLEtBQUtPLFFBSEY7QUFJWEMsa0JBQVEsZ0JBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2hCLDRCQUFlRCxFQUFFUixHQUFGLENBQWY7QUFDRSxtQkFBSyxRQUFMO0FBQ0UsdUJBQU9RLEVBQUVSLEdBQUYsSUFBU1MsRUFBRVQsR0FBRixDQUFoQjs7QUFFRjtBQUNFLG9CQUFJUSxFQUFFUixHQUFGLEVBQU9VLFdBQVAsS0FBdUJELEVBQUVULEdBQUYsRUFBT1UsV0FBUCxFQUEzQixFQUFpRDtBQUMvQyx5QkFBTyxDQUFDLENBQVI7QUFDRDtBQUNELG9CQUFJRixFQUFFUixHQUFGLEVBQU9VLFdBQVAsS0FBdUJELEVBQUVULEdBQUYsRUFBT1UsV0FBUCxFQUEzQixFQUFpRDtBQUMvQyx5QkFBTyxDQUFQO0FBQ0Q7QUFDRCx1QkFBTyxDQUFQO0FBWEo7QUFhRCxXQWxCVTtBQW1CWEMscUJBQVd0QixXQUFXdUIsU0FBWCxLQUF5QlosR0FBekIsSUFBZ0NYLFdBQVd3QjtBQW5CM0MsU0FBYjtBQXFCRCxPQXhCRDs7QUEwQkEsYUFDRSw4QkFBQyxRQUFEO0FBQ0UsY0FBSyxPQURQO0FBRUUseUJBQWVyQixXQUFXc0IsSUFBWCxDQUFnQixHQUFoQixDQUZqQjtBQUdFLGlCQUFTbEIsT0FIWDtBQUlFLG9CQUFZSCxNQUFNc0IsR0FBTixDQUFVLFVBQUNoQixJQUFELEVBQU9pQixDQUFQO0FBQUEsOEJBQ2pCakIsSUFEaUIsK0JBRVpQLFdBQVdzQixJQUFYLENBQWdCLEdBQWhCLENBRlksRUFFYUUsQ0FGYjtBQUFBLFNBQVYsQ0FKZDtBQVFFLG9CQUFZekIsYUFBYTtBQUFBLGlCQUFRQSxVQUFTUSxLQUFLSixLQUFMLENBQVQsQ0FBUjtBQUFBLFNBUjNCO0FBU0Usc0JBQ0VKLGFBQVk7QUFDVjBCLDJCQUFpQnZCLFNBQVNxQixHQUFULENBQWE7QUFBQSxtQkFDNUJ0QixNQUFNeUIsU0FBTixDQUFnQjtBQUFBLHFCQUFRbkIsS0FBS0osS0FBTCxNQUFnQndCLFNBQXhCO0FBQUEsYUFBaEIsQ0FENEI7QUFBQSxXQUFiLENBRFA7QUFJVjVCLG9CQUFVO0FBQUEsbUJBQVFBLFVBQVNRLEtBQUtKLEtBQUwsQ0FBVCxDQUFSO0FBQUE7QUFKQSxTQVZoQjtBQWlCRSxrQkFBVSxrQkFBQ3lCLFVBQUQsRUFBYUMsT0FBYixFQUFzQmQsTUFBdEI7QUFBQSxpQkFDUixPQUFLZSxRQUFMLENBQWMsRUFBRWpDLFlBQVlrQixNQUFkLEVBQWQsQ0FEUTtBQUFBO0FBakJaLFFBREY7QUF1QkQ7Ozs7OztrQkF6RGtCcEIsVSIsImZpbGUiOiJjbXMvZ29vZ2xlL2FuYWx5dGljcy9jaGFydHMvdGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuaW1wb3J0IHsgbWV0cmljc09iaiwgZGltZW5zaW9uc09iaiB9IGZyb20gJy4uLy4uL2RlZmluaXRpb25zJztcblxuY29uc3QgQW50VGFibGUgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHJvd1NlbGVjdGlvbiB9KSA9PiAoe1xuICAgICcmIC5hbnQtdGFibGUtcm93Jzoge1xuICAgICAgY3Vyc29yOiAhIXJvd1NlbGVjdGlvbiAmJiAncG9pbnRlcicsXG4gICAgfSxcbiAgfSksXG4gIHAgPT4gPFRhYmxlIHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlQ2hhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgc29ydGVkSW5mbzoge30gfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvblNlbGVjdCwgZGltZW5zaW9ucywgaXRlbXMsIHNlbGVjdGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc29ydGVkSW5mbyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB4RGF0YSA9IGRpbWVuc2lvbnNbMF07XG4gICAgY29uc3QgY29sdW1ucyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKChpdGVtcyAmJiAhaXRlbXMubGVuZ2h0ICYmIGl0ZW1zWzBdKSB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IHsgLi4ubWV0cmljc09iaiwgLi4uZGltZW5zaW9uc09iaiB9W2tleV07XG5cbiAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgIHRpdGxlOiBpdGVtLmxhYmVsLFxuICAgICAgICBkYXRhSW5kZXg6IGtleSxcbiAgICAgICAgcmVuZGVyOiBpdGVtLnJlbmRlckZuLFxuICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgc3dpdGNoICh0eXBlb2YgYVtrZXldKSB7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICByZXR1cm4gYVtrZXldIC0gYltrZXldO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBpZiAoYVtrZXldLnRvVXBwZXJDYXNlKCkgPCBiW2tleV0udG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoYVtrZXldLnRvVXBwZXJDYXNlKCkgPiBiW2tleV0udG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc29ydE9yZGVyOiBzb3J0ZWRJbmZvLmNvbHVtbktleSA9PT0ga2V5ICYmIHNvcnRlZEluZm8ub3JkZXIsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8QW50VGFibGVcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgcm93S2V5PXtga2V5LSR7ZGltZW5zaW9ucy5qb2luKCctJyl9YH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgZGF0YVNvdXJjZT17aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoe1xuICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgW2BrZXktJHtkaW1lbnNpb25zLmpvaW4oJy0nKX1gXTogaSxcbiAgICAgICAgfSkpfVxuICAgICAgICBvblJvd0NsaWNrPXtvblNlbGVjdCAmJiAoaXRlbSA9PiBvblNlbGVjdChpdGVtW3hEYXRhXSkpfVxuICAgICAgICByb3dTZWxlY3Rpb249e1xuICAgICAgICAgIG9uU2VsZWN0ICYmIHtcbiAgICAgICAgICAgIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWQubWFwKHNlbGVjdGlvbiA9PlxuICAgICAgICAgICAgICBpdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtW3hEYXRhXSA9PT0gc2VsZWN0aW9uKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBvblNlbGVjdDogaXRlbSA9PiBvblNlbGVjdChpdGVtW3hEYXRhXSksXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uQ2hhbmdlPXsocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyKSA9PlxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0ZWRJbmZvOiBzb3J0ZXIgfSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=
